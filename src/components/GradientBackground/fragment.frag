precision highp float;

uniform vec3 uColors[5];

varying highp float vNoise;

const float COLOR_STEPS = 5.0;

vec3 paletteColor(float index) {
  if (index <= 1.0) return uColors[0];
  if (index <= 2.0) return uColors[1];
  if (index <= 3.0) return uColors[2];
  if (index <= 4.0) return uColors[3];
  return uColors[4];
}

void main(void) {
  float noisenorm = (vNoise + 1.0) / 2.0;

  vec3 color = paletteColor(noisenorm * COLOR_STEPS);

  gl_FragColor = vec4(color, 1.0);
}
