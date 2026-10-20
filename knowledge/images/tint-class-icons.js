// Tint the class icons by in-game color (null = not seen yet, stays silver). No dependencies.
// Usage: node knowledge/images/tint-class-icons.js knowledge/images/class-icons.png knowledge/images/class-icons-color.png
const fs = require('fs'), zlib = require('zlib');
const [inp, outp] = process.argv.slice(2);
const buf = fs.readFileSync(inp);
let pos = 8, W, H, idat = [];
while (pos < buf.length) {
  const len = buf.readUInt32BE(pos), type = buf.toString('ascii', pos + 4, pos + 8);
  const data = buf.subarray(pos + 8, pos + 8 + len);
  if (type === 'IHDR') { W = data.readUInt32BE(0); H = data.readUInt32BE(4);
    if (data[8] !== 8 || data[9] !== 6 || data[12] !== 0) throw new Error('need 8-bit RGBA non-interlaced'); }
  if (type === 'IDAT') idat.push(data);
  pos += 12 + len;
}
const raw = zlib.inflateSync(Buffer.concat(idat)), bpp = 4, stride = W * bpp;
const px = Buffer.alloc(H * stride);
for (let y = 0; y < H; y++) {
  const f = raw[y * (stride + 1)], src = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
  for (let x = 0; x < stride; x++) {
    const a = x >= bpp ? px[y * stride + x - bpp] : 0, b = y ? px[(y - 1) * stride + x] : 0,
      c = x >= bpp && y ? px[(y - 1) * stride + x - bpp] : 0;
    let v = src[x];
    if (f === 1) v += a; else if (f === 2) v += b; else if (f === 3) v += (a + b) >> 1;
    else if (f === 4) { const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
      v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c; }
    px[y * stride + x] = v & 255;
  }
}
// Cells: 4 columns, 2 rows; icon boxes exclude the name labels and descriptions.
const colors = {
  Gladiator: null, Templar: [110, 145, 235], Assassin: null, Ranger: [60, 180, 140],
  Sorcerer: [175, 120, 235], Spiritmaster: null, Cleric: [230, 180, 60], Chanter: null,
};
const order = ['Gladiator', 'Templar', 'Assassin', 'Ranger', 'Sorcerer', 'Spiritmaster', 'Cleric', 'Chanter'];
const centers = [172, 536, 900, 1265], bands = [[15, 166], [285, 436]];
order.forEach((name, i) => {
  const t = colors[name]; if (!t) return;
  const cx = centers[i % 4], [y0, y1] = bands[i >> 2];
  for (let y = y0; y < y1; y++) for (let x = cx - 130; x < cx + 130; x++) {
    const o = y * stride + x * bpp, L = 0.3 * px[o] + 0.59 * px[o + 1] + 0.11 * px[o + 2];
    const w = Math.min(1, Math.max(0, (L - 35) / 40));
    for (let k = 0; k < 3; k++) {
      const col = L <= 170 ? t[k] * L / 170 : t[k] + (255 - t[k]) * (L - 170) / 85;
      px[o + k] = Math.round(px[o + k] * (1 - w) + col * w);
    }
  }
});
const out = Buffer.alloc(H * (stride + 1));
for (let y = 0; y < H; y++) px.copy(out, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
const crcT = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; crcT[n] = c >>> 0; }
const crc = b => { let c = ~0; for (const x of b) c = crcT[(c ^ x) & 255] ^ (c >>> 8); return (~c) >>> 0; };
const chunk = (type, data) => { const l = Buffer.alloc(4), c = Buffer.alloc(4), td = Buffer.concat([Buffer.from(type), data]);
  l.writeUInt32BE(data.length); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); };
const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4); ihdr[8] = 8; ihdr[9] = 6;
fs.writeFileSync(outp, Buffer.concat([buf.subarray(0, 8), chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(out, { level: 9 })), chunk('IEND', Buffer.alloc(0))]));
