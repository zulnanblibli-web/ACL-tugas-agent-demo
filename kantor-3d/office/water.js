import * as THREE from 'three';
export function createPoolWater(floor){
 const geometry=new THREE.PlaneGeometry(10.4,6.3,64,40);geometry.rotateX(-Math.PI/2);
 const material=new THREE.MeshPhysicalMaterial({color:'#73b9b7',roughness:.12,metalness:.12,transparent:true,opacity:.86,clearcoat:1,clearcoatRoughness:.10,envMapIntensity:1.5,side:THREE.DoubleSide});
 const uniforms={time:{value:0}};
 material.onBeforeCompile=shader=>{
  shader.uniforms.poolTime=uniforms.time;
  shader.vertexShader='uniform float poolTime;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <beginnormal_vertex>',`#include <beginnormal_vertex>
   float dx=0.025*2.1*cos(position.x*2.1+poolTime*.85)+.014*3.9*cos(position.x*3.9+position.z*1.7-poolTime*1.1);
   float dz=.022*2.7*cos(position.z*2.7-poolTime*.7)+.014*1.7*cos(position.x*3.9+position.z*1.7-poolTime*1.1);
   objectNormal=normalize(vec3(-dx,1.,-dz));`);
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   transformed.y+=.025*sin(position.x*2.1+poolTime*.85)+.022*sin(position.z*2.7-poolTime*.7)+.014*sin(position.x*3.9+position.z*1.7-poolTime*1.1);`);
 };
 const water=new THREE.Mesh(geometry,material);water.position.set(-6,.105,-5);water.name='Animated pool water';floor.add(water);
 // Separate tiled basin with procedural caustic texture: these are an approximation,
 // not screen-space refraction or ray-traced reflections.
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const c=canvas.getContext('2d');c.fillStyle='#6aa9a5';c.fillRect(0,0,256,256);c.strokeStyle='#bed6c7';c.lineWidth=1.5;for(let i=0;i<=256;i+=16){c.beginPath();c.moveTo(i,0);c.lineTo(i,256);c.moveTo(0,i);c.lineTo(256,i);c.stroke();}const tile=new THREE.CanvasTexture(canvas);tile.colorSpace=THREE.SRGBColorSpace;
 const basin=new THREE.Mesh(new THREE.BoxGeometry(10.7,.12,6.6),new THREE.MeshStandardMaterial({map:tile,roughness:.45,color:'#73aeaa'}));basin.position.set(-6,-.87,-5);basin.receiveShadow=true;floor.add(basin);
 const rimMat=new THREE.MeshStandardMaterial({color:'#cdc8b1',roughness:.7});for(const [x,z,w,d]of [[-11.37,-5,.15,6.75],[-.63,-5,.15,6.75],[-6,-8.37,10.9,.15],[-6,-1.63,10.9,.15]]){const wall=new THREE.Mesh(new THREE.BoxGeometry(w,1,d),rimMat);wall.position.set(x,-.35,z);floor.add(wall);}
 const causticMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{time:uniforms.time},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:`varying vec2 vUv;uniform float time;void main(){vec2 p=vUv*22.;float a=sin(p.x+sin(p.y*1.3+time*.5))*sin(p.y+cos(p.x*.7-time*.4));float b=pow(1.-abs(a),14.);gl_FragColor=vec4(.76,.94,.82,b*.30);}`});
 const caustics=new THREE.Mesh(new THREE.PlaneGeometry(10.3,6.2),causticMaterial);caustics.rotation.x=-Math.PI/2;caustics.position.set(-6,-.79,-5);floor.add(caustics);
 // Stainless entry ladder at the dry eastern deck.
 const steel=new THREE.MeshStandardMaterial({color:'#b0bdba',metalness:.85,roughness:.22});for(const z of [-5.5,-4.5]){const bar=new THREE.Mesh(new THREE.CylinderGeometry(.035,.035,1.35,12),steel);bar.position.set(-.30,-.22,z);floor.add(bar);}for(let i=0;i<4;i++){const step=new THREE.Mesh(new THREE.CylinderGeometry(.028,.028,1.0,12),steel);step.rotation.x=Math.PI/2;step.position.set(-.3,-.7+i*.25,-5);floor.add(step);}
 return {update(time){uniforms.time.value=time;},get time(){return uniforms.time.value;},mesh:water};
}
