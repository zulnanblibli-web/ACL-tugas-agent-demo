import {writeFile,mkdir} from 'node:fs/promises';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {agents} from '../office/data.js';
import {createCharacter} from '../office/character.js';
// GLTFExporter only needs browser FileReader for binary buffer conversion.
globalThis.FileReader=class{readAsArrayBuffer(blob){blob.arrayBuffer().then(b=>{this.result=b;this.onloadend?.();});}readAsDataURL(blob){blob.arrayBuffer().then(b=>{this.result=`data:${blob.type};base64,${Buffer.from(b).toString('base64')}`;this.onloadend?.();});}};
await mkdir('assets/agents',{recursive:true});
for(const a of agents){const model=createCharacter(a);const bin=await new GLTFExporter().parseAsync(model,{binary:true,animations:model.animations});await writeFile(`assets/agents/${a.id}.glb`,Buffer.from(bin));}
console.log('18 GLB unik diekspor, dengan animasi Idle + Walk.');
