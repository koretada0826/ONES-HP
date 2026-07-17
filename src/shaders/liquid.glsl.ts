// GLSL shader snippets used by ContactCTA-style background waves.
// Kept as JS-exported strings so they can be imported into R3F ShaderMaterial in future.
export const liquidVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const liquidFragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uResolution;

  float noise(vec2 p){
    return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453);
  }

  float smoothNoise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(
      mix(noise(i), noise(i+vec2(1.0,0.0)), u.x),
      mix(noise(i+vec2(0.0,1.0)), noise(i+vec2(1.0,1.0)), u.x),
      u.y
    );
  }

  void main(){
    vec2 uv = vUv;
    float t = uTime * 0.1;
    float n =
      smoothNoise(uv * 3.0 + t) * 0.5 +
      smoothNoise(uv * 6.0 - t*1.3) * 0.25 +
      smoothNoise(uv * 12.0 + t*2.1) * 0.125;
    float alpha = smoothstep(0.35, 0.9, n) * 0.4;
    gl_FragColor = vec4(vec3(1.0), alpha);
  }
`;
