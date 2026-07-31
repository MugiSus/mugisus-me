precision highp float;

// psrdnoise (c) 2021 Stefan Gustavson and Ian McEwan
// Published under the MIT license.
// https://github.com/stegu/psrdnoise/

attribute vec3 position;

uniform vec2 uResolution;
uniform float uTime;
uniform float uScroll;

varying highp float vNoise;

vec4 permute(vec4 x) {
  vec4 xm = mod(x, 289.0);
  return mod(((xm * 34.0) + 10.0) * xm, 289.0);
}

/**
 * Non-periodic 3D psrdnoise without gradient rotation or derivatives.
 *
 * This retains the rotated simplex grid while using evenly distributed
 * Fibonacci-sphere gradients to reduce directional artifacts.
 */
float snoise(vec3 x) {
  vec3 uvw = x + dot(x, vec3(1.0 / 3.0));
  vec3 i0 = floor(uvw);
  vec3 f0 = fract(uvw);

  vec3 g_ = step(f0.xyx, f0.yzz);
  vec3 l_ = 1.0 - g_;
  vec3 g = vec3(l_.z, g_.xy);
  vec3 l = vec3(l_.xy, g_.z);
  vec3 i1 = i0 + min(g, l);
  vec3 i2 = i0 + max(g, l);
  vec3 i3 = i0 + 1.0;

  vec3 v0 = i0 - dot(i0, vec3(1.0 / 6.0));
  vec3 v1 = i1 - dot(i1, vec3(1.0 / 6.0));
  vec3 v2 = i2 - dot(i2, vec3(1.0 / 6.0));
  vec3 v3 = i3 - dot(i3, vec3(1.0 / 6.0));

  vec3 x0 = x - v0;
  vec3 x1 = x - v1;
  vec3 x2 = x - v2;
  vec3 x3 = x - v3;

  vec4 hash = permute(
    permute(
      permute(vec4(i0.z, i1.z, i2.z, i3.z)) +
        vec4(i0.y, i1.y, i2.y, i3.y)
    ) +
      vec4(i0.x, i1.x, i2.x, i3.x)
  );

  vec4 theta = hash * 3.883222077;
  vec4 gradientZ = hash * -0.006920415 + 0.996539792;
  vec4 gradientRadius = sqrt(1.0 - gradientZ * gradientZ);
  vec4 gradientX = cos(theta) * gradientRadius;
  vec4 gradientY = sin(theta) * gradientRadius;

  vec3 gradient0 = vec3(gradientX.x, gradientY.x, gradientZ.x);
  vec3 gradient1 = vec3(gradientX.y, gradientY.y, gradientZ.y);
  vec3 gradient2 = vec3(gradientX.z, gradientY.z, gradientZ.z);
  vec3 gradient3 = vec3(gradientX.w, gradientY.w, gradientZ.w);

  vec4 weight = max(
    0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)),
    0.0
  );
  vec4 weight2 = weight * weight;
  vec4 ramp = vec4(
    dot(gradient0, x0),
    dot(gradient1, x1),
    dot(gradient2, x2),
    dot(gradient3, x3)
  );

  return 39.5 * dot(weight2 * weight, ramp);
}

void main() {
  vec2 pixelPosition = (position.xy * 0.5 + 0.5) * uResolution;
  vec2 pos =
    pixelPosition / 2400.0 +
    vec2(uTime * 0.005, uTime * -0.001 + uScroll / -9600.0);
  vec3 noisePosition = vec3(
    pos,
    uTime * 0.002 + uScroll / 6400.0
  );
  vec2 warp = vec2(
    snoise(
      noisePosition * 2.0 + vec3(17.17, 31.73, 47.29)
    ),
    snoise(
      noisePosition * 2.0 + vec3(59.31, 23.57, 11.19)
    )
  );

  vNoise = snoise(noisePosition + vec3(warp * 0.3, 0.0));
  gl_Position = vec4(position, 1.0);
}
