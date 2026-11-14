'use strict';

function drawCharacter(canvas, look) {
  const ctx = canvas.getContext('2d');
  const ink = '#33234c';
  ctx.setTransform(2, 0, 0, 2, 0, 0);
  ctx.clearRect(0, 0, 300, 360);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  function shape(d, fill, stroke = ink, width = 3.2) {
    const path = new Path2D(d);
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill(path);
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      ctx.stroke(path);
    }
  }
  function oval(x, y, rx, ry, fill, stroke = null, width = 3) {
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = width;
      ctx.stroke();
    }
  }

  const { model, skin, hair, eyes, outfit, shoes, hat, marks, hairStyle, clothes, feet, glasses, expression } = look;
  const feminine = model === 'feminine';
  oval(150, 345, 81, 9, '#11152c66');
  function scaleHead() {
    ctx.translate(150, 211);
    ctx.scale(.83, .86);
    ctx.translate(-150, -211);
  }
  ctx.save();
  scaleHead();
  if (hairStyle === 'long') {
    shape('M73 93 Q62 121 62 182 L53 222 Q78 235 106 211 L194 211 Q221 235 247 222 Q232 196 237 145 Q243 102 218 80 Z', hair);
  }
  if (hairStyle === 'waves') {
    shape('M79 79 C47 120 79 153 56 187 Q38 218 58 246 Q64 229 83 231 Q96 224 90 202 Q120 193 117 161 H183 Q180 193 210 202 Q204 224 217 231 Q236 229 242 246 Q262 218 244 187 C221 153 253 120 221 79 Z', hair);
    shape('M68 183 Q56 202 60 220 M232 183 Q244 202 240 220', null, '#ffffff4d', 3);
  }
  if (hairStyle === 'ponytail') {
    shape('M206 82 Q244 74 253 107 Q258 126 248 156 Q239 182 259 207 Q227 209 219 185 Q213 169 222 138 Q230 113 207 105 Z', hair);
    shape('M214 90 L219 106', null, '#ffd473', 5);
  }
  if (hairStyle === 'puffs') {
    oval(68, 80, 34, 33, hair, ink);
    oval(232, 80, 34, 33, hair, ink);
    shape('M85 98 L76 89 M215 98 L224 89', null, '#ffd473', 6);
  }

  ctx.restore();
  ctx.save();
  ctx.translate(0, -30.75);
  ctx.translate(150, 0);
  ctx.scale(feminine ? .93 : 1, 1.15);
  ctx.translate(-150, 0);
  shape('M108 253 L106 299 Q108 309 134 308 L150 280 L165 308 Q188 310 195 299 L192 253 Z', '#5a5886');
  shape('M111 295 L112 306 M190 295 L189 306 M150 278 L150 283', null, '#292843', 2);
  shape('M112 294 L109 311 L132 312 L136 294 Z M165 294 L169 313 L191 311 L188 294 Z', skin);

  if (feet === 'boots') {
    shape('M105 287 L135 287 L134 323 L91 323 Q84 313 93 307 L104 303 Z M165 287 L195 287 L196 303 Q214 304 215 319 L213 323 L168 323 Z', shoes);
    shape('M107 294 H133 M167 294 H193', null, '#fff3e3', 3);
  } else {
    shape('M109 302 Q121 313 134 301 L138 322 Q128 327 91 323 Q87 321 88 315 Q90 306 109 302 Z M166 301 Q179 312 192 302 Q211 306 212 315 Q214 322 207 324 Q180 327 162 322 Z', shoes);
    if (feet === 'sneakers') {
      shape('M99 310 L108 313 M111 307 L118 311 M182 310 L189 307 M192 313 L201 310 M90 320 Q113 324 135 320 M165 320 Q188 324 210 320', null, '#fff9ee', 3);
    } else {
      shape('M105 305 L110 316 M192 305 L188 316', null, '#fff9ee', 4);
    }
  }

  const hoodie = clothes === 'hoodie';
  const overalls = clothes === 'overalls';
  shape('M102 218 Q86 224 77 245 Q72 256 77 265 Q82 272 91 268 L107 250 M198 218 Q214 224 223 245 Q228 256 223 265 Q218 272 209 268 L193 250', hoodie ? outfit : skin);
  if (hoodie) {
    oval(82, 264, 8, 8, skin, ink, 2.6);
    oval(218, 264, 8, 8, skin, ink, 2.6);
  }
  shape('M123 205 Q111 207 100 214 L87 225 L101 241 L108 237 L103 277 Q150 288 197 277 L192 237 L199 241 L213 225 Q200 210 177 205 Z', outfit);
  if (hoodie) {
    shape('M114 208 Q124 229 150 230 Q176 229 186 208 M134 230 L133 248 M166 230 L167 248', null, ink, 2.4);
    shape('M137 255 H163 L171 270 H129 Z', '#ffffff35', ink, 2);
  } else if (overalls) {
    shape('M115 209 L124 207 L131 234 H169 L176 207 L185 209 L180 248 L194 275 Q151 285 106 275 L120 248 Z', '#565eaa', ink, 2.7);
    oval(132, 241, 3.4, 3.4, '#ffda80');
    oval(168, 241, 3.4, 3.4, '#ffda80');
    shape('M140 251 H160 V260 Q150 268 140 260 Z', '#727cbd', ink, 2);
  } else {
    shape('M151 236 L155 244 L164 245 L157 251 L159 260 L151 256 L143 260 L145 251 L138 245 L147 244 Z', '#fff3bf', ink, 2);
  }
  shape('M135 185 L134 213 Q150 228 166 213 L165 185 Z', skin);

  ctx.restore();
  ctx.save();
  scaleHead();
  oval(77, 151, 16, 19, skin, ink);
  oval(223, 151, 16, 19, skin, ink);
  shape('M71 150 Q78 144 83 154 M229 150 Q222 144 217 154', null, ink, 2);
  const face = feminine
    ? 'M80 119 Q83 78 150 74 Q217 78 220 119 L217 155 Q215 190 169 207 Q150 216 131 207 Q85 190 83 155 Z'
    : 'M79 119 Q83 78 150 74 Q217 78 221 119 L219 159 Q217 182 206 193 Q185 211 150 211 Q115 211 94 193 Q83 182 81 159 Z';
  shape(face, skin);
  oval(101, 170, 13, 7, '#f582903f');
  oval(199, 170, 13, 7, '#f582903f');
  shape('M151 149 Q144 157 150 159 L154 158', null, '#33234c80', 2);
  shape('M102 126 Q112 120 122 125 M178 125 Q188 120 198 126', null, ink, 3.1);

  if (expression === 'wink') {
    shape('M105 144 Q113 135 122 144', null, ink, 3.5);
  } else {
    oval(113, 143, 8, 9, eyes, ink, 2.4);
    oval(115, 139, 3, 3, '#fffdf8');
  }
  oval(187, 143, 8, 9, eyes, ink, 2.4);
  oval(189, 139, 3, 3, '#fffdf8');
  if (feminine) {
    const lashes = expression === 'wink' ? 'M193 137 L198 133' : 'M107 137 L102 133 M193 137 L198 133';
    shape(lashes, null, ink, 2);
  }
  if (expression === 'smile') {
    shape('M138 174 Q149 181 162 174 Q159 191 149 188 Q142 187 138 174 Z', ink, ink, 2);
    oval(151, 184, 5, 2, '#f7a5a7');
  } else {
    shape('M141 176 Q150 184 159 175', null, ink, 3);
  }

  if (marks === 'freckles' || marks === 'both') {
    for (const [x, y] of [[92,161],[100,164],[108,159],[113,167],[187,166],[194,160],[201,165],[209,160]]) {
      oval(x, y, 1.85, 1.85, '#502638a9');
    }
  }
  if (marks === 'mole' || marks === 'both') oval(181, 178, 2.8, 2.8, '#4d2f43');

  const hairShapes = {
    short: 'M80 142 Q69 122 72 101 Q68 68 107 60 Q127 42 157 49 Q191 43 211 68 Q241 83 227 128 L219 144 L211 116 Q188 111 174 90 Q148 113 115 113 Q101 112 91 124 L81 149 Z',
    curls: 'M81 147 Q61 139 67 119 Q54 102 69 90 Q65 67 88 62 Q92 41 115 47 Q133 29 151 42 Q174 30 189 47 Q213 40 221 62 Q244 68 238 91 Q249 111 233 123 Q234 142 219 147 L213 118 Q201 123 193 107 Q179 114 168 100 Q150 116 132 104 Q120 121 105 114 Q101 130 88 125 Z',
    long: 'M74 145 Q62 120 71 90 Q83 46 138 46 Q192 37 223 73 Q240 92 226 151 L215 125 Q179 112 160 84 Q130 117 91 123 L81 150 Z',
    puffs: 'M79 144 Q67 111 86 83 Q104 53 150 55 Q196 53 214 83 Q234 108 222 145 L212 121 Q173 121 150 90 Q125 122 88 121 Z',
    fade: 'M79 146 Q68 122 75 98 Q78 79 96 74 Q112 53 148 55 Q176 50 205 67 Q226 77 225 108 L220 142 L212 139 L211 115 Q188 103 177 90 Q147 107 98 104 L88 134 Z',
    quiff: 'M78 145 Q66 118 77 95 Q79 78 107 70 Q138 57 141 32 Q155 35 164 54 Q185 47 201 34 Q209 52 205 68 Q238 76 228 121 L219 147 L211 119 Q192 112 176 90 Q144 113 96 112 L83 147 Z',
    sidePart: 'M79 147 Q65 119 77 92 Q87 63 123 55 Q172 39 204 65 Q232 82 224 119 L219 148 L209 119 Q187 107 179 82 Q144 112 99 108 L87 131 Z',
    pixie: 'M78 147 Q67 122 76 97 L69 100 Q74 73 102 62 L95 58 Q126 44 146 52 L161 44 Q200 48 218 73 L226 69 Q232 89 224 111 L217 141 L207 120 L190 92 L181 113 L166 101 L153 116 L139 104 L120 117 L110 108 L91 124 L82 150 Z',
    afro: 'M79 149 Q57 144 63 125 Q44 120 54 103 Q38 92 51 78 Q43 63 61 53 Q60 36 79 35 Q86 18 107 24 Q119 10 137 17 Q150 6 167 17 Q186 10 197 26 Q219 20 225 38 Q245 38 244 56 Q261 63 251 80 Q264 94 249 106 Q258 125 238 130 Q239 146 220 150 L213 125 Q198 122 193 108 Q178 120 164 106 Q150 117 134 105 Q122 118 109 112 Q104 127 88 125 Z',
    bob: 'M92 127 Q84 149 98 187 Q79 196 63 182 Q67 167 64 146 Q52 94 80 68 Q109 39 150 46 Q191 39 220 68 Q248 94 236 146 Q233 167 237 182 Q221 196 202 187 Q216 149 208 127 Q176 115 150 79 Q124 115 92 127 Z',
    fringe: 'M80 149 Q64 119 74 91 Q88 50 150 47 Q212 50 226 91 Q236 119 220 149 L208 120 Q179 116 153 123 L147 117 L141 123 Q118 117 92 120 Z',
    waves: 'M79 145 Q62 110 77 84 Q93 47 147 45 Q201 41 222 76 Q240 100 223 148 L211 122 Q181 124 153 77 Q141 102 116 111 Q94 119 85 145 Z',
    ponytail: 'M79 143 Q67 118 78 91 Q90 59 137 51 Q189 39 214 71 Q233 96 222 140 L212 119 Q183 107 172 83 Q136 110 89 119 L82 145 Z',
    braids: 'M78 142 Q67 116 78 91 Q96 52 150 50 Q204 52 222 91 Q233 116 222 142 L212 118 Q177 112 150 81 Q123 112 88 118 Z',
    shaved: 'M77 134 Q67 102 88 77 Q110 53 150 53 Q192 53 214 78 Q231 99 223 134 L217 119 Q215 91 196 83 Q152 69 103 85 Q84 99 83 120 Z'
  };
  if (hairShapes[hairStyle]) shape(hairShapes[hairStyle], hair);
  if (hairStyle === 'braids') {
    for (const side of [-1, 1]) {
      ctx.save();
      ctx.translate(150, 0);
      ctx.scale(side, 1);
      shape('M63 117 Q81 114 84 137 Q78 153 86 162 Q81 174 88 183 Q83 195 89 205 Q88 216 79 222 Q67 219 69 207 Q62 197 67 187 Q60 175 65 163 Q58 152 63 140 Q58 129 63 117 Z', hair);
      shape('M64 142 L80 153 M66 164 L82 175 M68 186 L84 197', null, '#ffffff55', 2.6);
      shape('M72 216 L86 215', null, '#ffd473', 4);
      ctx.restore();
    }
  }
  if (hairStyle === 'fade') {
    shape('M79 115 L88 112 M80 122 L87 120 M214 113 L221 116 M215 120 L220 123', null, '#ffffff66', 2);
  } else if (hairStyle === 'sidePart') {
    shape('M178 70 Q146 87 102 91 M178 70 Q198 81 209 98', null, '#ffffff66', 3);
  }
  if (hairStyle === 'short' || hairStyle === 'long') {
    shape('M89 90 Q108 67 136 67 M186 73 Q199 78 210 91', null, '#ffffff55', 3.3);
  } else if (hairStyle === 'curls') {
    shape('M84 88 Q82 74 96 75 M122 59 Q134 51 145 59 M177 58 Q187 56 192 65', null, '#ffffff58', 3.3);
  }
  if (glasses === 'round') {
    oval(113, 145, 20, 17, '#ffffff25', '#493266', 3.2);
    oval(187, 145, 20, 17, '#ffffff25', '#493266', 3.2);
    shape('M133 142 Q150 134 167 142 M93 142 L81 139 M207 142 L219 139', null, '#493266', 3.2);
  }
  if (hat === 'cap') {
    shape('M82 82 Q83 35 139 31 Q184 28 202 76 Z', '#ffb85b');
    shape('M85 81 Q147 63 204 70 Q229 75 245 92 Q239 101 210 97 Q160 88 116 92 Q93 92 85 81 Z', '#f8a149');
    shape('M144 34 Q124 49 122 73', null, '#965224', 2.3);
  } else if (hat === 'beanie') {
    oval(148, 32, 14, 13, '#faadbd', ink);
    shape('M81 82 Q83 37 147 39 Q213 38 219 84 Z', '#d57fb8');
    shape('M82 78 Q150 65 218 78 L220 92 Q153 85 81 93 Z', '#f4a0cc');
    shape('M101 78 L101 88 M122 75 L122 86 M177 75 L177 86 M200 78 L200 88', null, '#965886', 2);
  } else if (hat === 'headphones') {
    shape('M69 147 C58 84 94 41 150 41 C206 41 242 84 231 147', null, ink, 15);
    shape('M69 147 C58 84 94 41 150 41 C206 41 242 84 231 147', null, '#a89cf3', 8);
    shape('M65 133 Q78 130 80 140 L80 166 Q78 174 67 172 Q59 168 59 160 L59 145 Q59 136 65 133 Z M235 133 Q222 130 220 140 L220 166 Q222 174 233 172 Q241 168 241 160 L241 145 Q241 136 235 133 Z', '#6254af');
    shape('M66 142 L66 162 M234 142 L234 162', null, '#bcb2ff', 2.5);
  }
  ctx.restore();
}
