var ul="170",Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hd=0,ph=1,Vd=2;var Ou=1,dl=2,zn=3,cn=0,Bt=1,At=2,hi=0,ls=1,mh=2,gh=3,_h=4,Gd=5,Ci=100,Wd=101,Xd=102,qd=103,Yd=104,Zd=200,Kd=201,$d=202,jd=203,Wa=204,Xa=205,Jd=206,Qd=207,ef=208,tf=209,nf=210,sf=211,rf=212,of=213,af=214,qa=0,Ya=1,Za=2,fs=3,Ka=4,$a=5,ja=6,Ja=7,Fu=0,cf=1,lf=2,ui=0,hf=1,uf=2,df=3,Ko=4,ff=5,pf=6,mf=7,xh="attached",gf="detached",Bu=300,ps=301,ms=302,Qa=303,ec=304,$o=306,Yt=1e3,Hn=1001,Qs=1002,kt=1003,fl=1004;var ss=1005;var qt=1006,qs=1007;var An=1008;var Wn=1009,ku=1010,zu=1011,er=1012,pl=1013,Li=1014,Sn=1015,br=1016,ml=1017,gl=1018,gs=1020,Hu=35902,Vu=1021,Gu=1022,on=1023,Wu=1024,Xu=1025,hs=1026,_s=1027,_l=1028,xl=1029,qu=1030,yl=1031;var vl=1033,ro=33776,oo=33777,ao=33778,co=33779,tc=35840,nc=35841,ic=35842,sc=35843,rc=36196,oc=37492,ac=37496,cc=37808,lc=37809,hc=37810,uc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,_c=37817,xc=37818,yc=37819,vc=37820,Mc=37821,lo=36492,bc=36494,Sc=36495,Yu=36283,Ec=36284,Tc=36285,wc=36286,_f=2200,xf=2201,yf=2202,xs=2300,ys=2301,la=2302,rs=2400,os=2401,ho=2402,Ml=2500,vf=2501,Zu=0,jo=1,Sr=2,Mf=3200,bf=3201;var Ku=0,Sf=1,ci="",nt="srgb",Vt="srgb-linear",Jo="linear",lt="srgb";var Gi=7680;var yh=519,Ef=512,Tf=513,wf=514,$u=515,Af=516,Rf=517,Cf=518,If=519,Ac=35044;var vh="300 es",Vn=2e3,uo=2001,Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,Ys=Math.PI/180,vs=180/Math.PI;function an(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[s&255]+Ot[s>>8&255]+Ot[s>>16&255]+Ot[s>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function bl(s,e){return(s%e+e)%e}function Pf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Lf(s,e,t){return s!==e?(t-s)/(e-s):0}function Zs(s,e,t){return(1-t)*s+t*e}function Df(s,e,t,n){return Zs(s,e,1-Math.exp(-t*n))}function Nf(s,e=1){return e-Math.abs(bl(s,e*2)-e)}function Uf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Of(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ff(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Bf(s,e){return s+Math.random()*(e-s)}function kf(s){return s*(.5-Math.random())}function zf(s){s!==void 0&&(Mh=s);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hf(s){return s*Ys}function Vf(s){return s*vs}function Gf(s){return(s&s-1)===0&&s!==0}function Wf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qf(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Cs={DEG2RAD:Ys,RAD2DEG:vs,generateUUID:an,clamp:Tt,euclideanModulo:bl,mapLinear:Pf,inverseLerp:Lf,lerp:Zs,damp:Df,pingpong:Nf,smoothstep:Uf,smootherstep:Of,randInt:Ff,randFloat:Bf,randFloatSpread:kf,seededRandom:zf,degToRad:Hf,radToDeg:Vf,isPowerOfTwo:Gf,ceilPowerOfTwo:Wf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:qf,normalize:ct,denormalize:bn},ue=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],_=i[3],p=i[6],M=i[1],y=i[4],m=i[7],R=i[2],w=i[5],C=i[8];return r[0]=o*v+a*M+c*R,r[3]=o*_+a*y+c*w,r[6]=o*p+a*m+c*C,r[1]=l*v+h*M+u*R,r[4]=l*_+h*y+u*w,r[7]=l*p+h*m+u*C,r[2]=d*v+f*M+g*R,r[5]=d*_+f*y+g*w,r[8]=d*p+f*m+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ha=new Ye;function ju(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yf(){let s=tr("canvas");return s.style.display="block",s}var bh={};function Ws(s){s in bh||(bh[s]=!0,console.warn(s))}function Zf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Kf(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function $f(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qe={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Jo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Sh=[.64,.33,.3,.6,.15,.06],Eh=[.2126,.7152,.0722],Th=[.3127,.329],wh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Vt]:{primaries:Sh,whitePoint:Th,transfer:Jo,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:Eh,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:Sh,whitePoint:Th,transfer:lt,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:Eh,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}});var Wi,Rc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wi===void 0&&(Wi=tr("canvas")),Wi.width=e.width,Wi.height=e.height;let n=Wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jf=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ua(i[o].image)):r.push(ua(i[o]))}else r=ua(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jf=0,Lt=class s extends Rn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Hn,i=Hn,r=qt,o=An,a=on,c=Wn,l=s.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=an(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Bu;Lt.DEFAULT_ANISOTROPY=1;var it=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],_=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+_)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,m=(f+1)/2,R=(p+1)/2,w=(h+d)/4,C=(u+v)/4,D=(g+_)/4;return y>m&&y>R?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=C/n):m>R?m<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(m),n=w/i,r=D/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=D/r),this.set(n,i,r,t),this}let M=Math.sqrt((_-g)*(_-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(_-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cc=class extends Rn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Cc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},po=class extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let _=1-a,p=c*d+l*f+h*g+u*v,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let R=Math.sqrt(y),w=Math.atan2(R,p*M);_=Math.sin(_*w)/R,a=Math.sin(a*w)/R}let m=a*M;if(c=c*_+d*m,l=l*_+f*m,h=h*_+g*m,u=u*_+v*m,_===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new F,Rh=new Dt,ln=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Ir.subVectors(this.max,Os),Xi.subVectors(e.a,Os),qi.subVectors(e.b,Os),Yi.subVectors(e.c,Os),ni.subVectors(qi,Xi),ii.subVectors(Yi,qi),bi.subVectors(Xi,Yi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!fa(t,Xi,qi,Yi,Ir)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Xi,qi,Yi,Ir))?!1:(Pr.crossVectors(ni,ii),t=[Pr.x,Pr.y,Pr.z],fa(t,Xi,qi,Yi,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Nn=[new F,new F,new F,new F,new F,new F,new F,new F],xn=new F,Cr=new ln,Xi=new F,qi=new F,Yi=new F,ni=new F,ii=new F,bi=new F,Os=new F,Ir=new F,Pr=new F,Si=new F;function fa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Si.fromArray(s,r);let a=i.x*Math.abs(Si.x)+i.y*Math.abs(Si.y)+i.z*Math.abs(Si.z),c=e.dot(Si),l=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Qf=new ln,Fs=new F,pa=new F,nn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Qf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);let t=Fs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(pa)),this.expandByPoint(Fs.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new F,ma=new F,Lr=new F,si=new F,ga=new F,Dr=new F,_a=new F,qn=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ma);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),a=si.dot(this.direction),c=-si.dot(Lr),l=si.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ma).addScaledVector(Lr,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);let n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,r){ga.subVectors(t,e),Dr.subVectors(n,e),_a.crossVectors(ga,Dr);let o=this.direction.dot(_a),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);let c=a*this.direction.dot(Dr.crossVectors(si,Dr));if(c<0)return null;let l=a*this.direction.dot(ga.cross(si));if(l<0||c+l>o)return null;let h=-a*si.dot(_a);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class s{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,v,_){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,v,_)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,v,_){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ep,e,tp)}lookAt(e,t,n){let i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ri.crossVectors(n,en),ri.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ri.crossVectors(n,en)),ri.normalize(),Nr.crossVectors(en,ri),i[0]=ri.x,i[4]=Nr.x,i[8]=en.x,i[1]=ri.y,i[5]=Nr.y,i[9]=en.y,i[2]=ri.z,i[6]=Nr.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],_=n[10],p=n[14],M=n[3],y=n[7],m=n[11],R=n[15],w=i[0],C=i[4],D=i[8],b=i[12],S=i[1],T=i[5],k=i[9],V=i[13],P=i[2],O=i[6],U=i[10],G=i[14],H=i[3],ee=i[7],ne=i[11],he=i[15];return r[0]=o*w+a*S+c*P+l*H,r[4]=o*C+a*T+c*O+l*ee,r[8]=o*D+a*k+c*U+l*ne,r[12]=o*b+a*V+c*G+l*he,r[1]=h*w+u*S+d*P+f*H,r[5]=h*C+u*T+d*O+f*ee,r[9]=h*D+u*k+d*U+f*ne,r[13]=h*b+u*V+d*G+f*he,r[2]=g*w+v*S+_*P+p*H,r[6]=g*C+v*T+_*O+p*ee,r[10]=g*D+v*k+_*U+p*ne,r[14]=g*b+v*V+_*G+p*he,r[3]=M*w+y*S+m*P+R*H,r[7]=M*C+y*T+m*O+R*ee,r[11]=M*D+y*k+m*U+R*ne,r[15]=M*b+y*V+m*G+R*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],_=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+_*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],_=e[14],p=e[15],M=u*_*l-v*d*l+v*c*f-a*_*f-u*c*p+a*d*p,y=g*d*l-h*_*l-g*c*f+o*_*f+h*c*p-o*d*p,m=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,R=g*u*c-h*v*c-g*a*d+o*v*d+h*a*_-o*u*_,w=t*M+n*y+i*m+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=M*C,e[1]=(v*d*r-u*_*r-v*i*f+n*_*f+u*i*p-n*d*p)*C,e[2]=(a*_*r-v*c*r+v*i*l-n*_*l-a*i*p+n*c*p)*C,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,e[4]=y*C,e[5]=(h*_*r-g*d*r+g*i*f-t*_*f-h*i*p+t*d*p)*C,e[6]=(g*c*r-o*_*r-g*i*l+t*_*l+o*i*p-t*c*p)*C,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*C,e[8]=m*C,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*C,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*C,e[12]=R*C,e[13]=(h*v*i-g*u*i+g*n*d-t*v*d-h*n*_+t*u*_)*C,e[14]=(g*a*i-o*v*i-g*n*c+t*v*c+o*n*_-t*a*_)*C,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,_=o*u,p=a*u,M=c*l,y=c*h,m=c*u,R=n.x,w=n.y,C=n.z;return i[0]=(1-(v+p))*R,i[1]=(f+m)*R,i[2]=(g-y)*R,i[3]=0,i[4]=(f-m)*w,i[5]=(1-(d+p))*w,i[6]=(_+M)*w,i[7]=0,i[8]=(g+y)*C,i[9]=(_-M)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Zi.set(i[0],i[1],i[2]).length(),o=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);let l=1/r,h=1/o,u=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Vn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===Vn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===uo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Vn){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h,g,v;if(a===Vn)g=(o+r)*u,v=-2*u;else if(a===uo)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zi=new F,yn=new ze,ep=new F(0,0,0),tp=new F(1,1,1),ri=new F,Nr=new F,en=new F,Ch=new ze,Ih=new Dt,Cn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},np=0,Ph=new F,Ki=new Dt,On=new ze,Ur=new F,Bs=new F,ip=new F,sp=new Dt,Lh=new F(1,0,0),Dh=new F(0,1,0),Nh=new F(0,0,1),Uh={type:"added"},rp={type:"removed"},$i={type:"childadded",child:null},xa={type:"childremoved",child:null},yt=class s extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new Cn,n=new Dt,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ye}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ur.copy(e):Ur.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Bs,Ur,this.up):On.lookAt(Ur,Bs,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(On),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rp),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,sp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new F(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new F,Fn=new F,ya=new F,Bn=new F,ji=new F,Ji=new F,Oh=new F,va=new F,Ma=new F,ba=new F,Sa=new it,Ea=new it,Ta=new it,Ii=class s{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vn.subVectors(i,t),Fn.subVectors(n,t),ya.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Fn),c=vn.dot(ya),l=Fn.dot(Fn),h=Fn.dot(ya),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Sa.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),Sa.fromBufferAttribute(e,t),Ea.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(Ea,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Fn.subVectors(e,t),vn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ji.subVectors(i,n),Ji.subVectors(r,n),va.subVectors(e,n);let c=ji.dot(va),l=Ji.dot(va);if(c<=0&&l<=0)return t.copy(n);Ma.subVectors(e,i);let h=ji.dot(Ma),u=Ji.dot(Ma);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ji,o);ba.subVectors(e,r);let f=ji.dot(ba),g=Ji.dot(ba);if(g>=0&&f<=g)return t.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ji,a);let _=h*g-f*u;if(_<=0&&u-h>=0&&f-g>=0)return Oh.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Oh,a);let p=1/(_+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(ji,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function wa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=bl(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wa(o,r,e+1/3),this.g=wa(o,r,e),this.b=wa(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return Qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Tt(Ft.r*255,0,255))*65536+Math.round(Tt(Ft.g*255,0,255))*256+Math.round(Tt(Ft.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ft.copy(this),t);let n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=nt){Qe.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,i=Ft.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Or);let n=Zs(oi.h,Or.h,t),i=Zs(oi.s,Or.s,t),r=Zs(oi.l,Or.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new ke;ke.NAMES=Ju;var op=0,Zt=class extends Rn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=an(),this.name="",this.blending=ls,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Kt=class extends Zt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new F,Fr=new ue,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix3(e),this.setXY(t,Fr.x,Fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),e}};var mo=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ap=0,rn=new ze,Aa=new yt,Qi=new F,tn=new ln,ks=new ln,Pt=new F,vt=class s extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?go:mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(tn.min,ks.min),tn.expandByPoint(Pt),Pt.addVectors(tn.max,ks.max),tn.expandByPoint(Pt)):(tn.expandByPoint(ks.min),tn.expandByPoint(ks.max))}tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pt.fromBufferAttribute(a,l),c&&(Qi.fromBufferAttribute(e,l),Pt.add(Qi)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new F,c[D]=new F;let l=new F,h=new F,u=new F,d=new ue,f=new ue,g=new ue,v=new F,_=new F;function p(D,b,S){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),_.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[D].add(v),a[b].add(v),a[S].add(v),c[D].add(_),c[b].add(_),c[S].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,b=M.length;D<b;++D){let S=M[D],T=S.start,k=S.count;for(let V=T,P=T+k;V<P;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let y=new F,m=new F,R=new F,w=new F;function C(D){R.fromBufferAttribute(i,D),w.copy(R);let b=a[D];y.copy(b),y.sub(R.multiplyScalar(R.dot(b))).normalize(),m.crossVectors(w,b);let T=m.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,T)}for(let D=0,b=M.length;D<b;++D){let S=M[D],T=S.start,k=S.count;for(let V=T,P=T+k;V<P;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let v=0,_=c.length;v<_;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fh=new ze,Ei=new qn,Br=new nn,Bh=new F,kr=new F,zr=new F,Hr=new F,Ra=new F,Vr=new F,kh=new F,Gr=new F,Se=class extends yt{constructor(e=new vt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ra.fromBufferAttribute(u,e),o?Vr.addScaledVector(Ra,h):Vr.addScaledVector(Ra.sub(t),h))}t.add(Vr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Br.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Br,Bh)===null||Ei.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(Fh.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let _=d[g],p=o[_.materialIndex],M=Math.max(_.start,f.start),y=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let m=M,R=y;m<R;m+=3){let w=a.getX(m),C=a.getX(m+1),D=a.getX(m+2);i=Wr(this,p,e,n,l,h,u,w,C,D),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let _=g,p=v;_<p;_+=3){let M=a.getX(_),y=a.getX(_+1),m=a.getX(_+2);i=Wr(this,o,e,n,l,h,u,M,y,m),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let _=d[g],p=o[_.materialIndex],M=Math.max(_.start,f.start),y=Math.min(c.count,Math.min(_.start+_.count,f.start+f.count));for(let m=M,R=y;m<R;m+=3){let w=m,C=m+1,D=m+2;i=Wr(this,p,e,n,l,h,u,w,C,D),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let _=g,p=v;_<p;_+=3){let M=_,y=_+1,m=_+2;i=Wr(this,o,e,n,l,h,u,M,y,m),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function cp(s,e,t,n,i,r,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===cn,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Gr);return l<t.near||l>t.far?null:{distance:l,point:Gr.clone(),object:s}}function Wr(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,kr),s.getVertexPosition(c,zr),s.getVertexPosition(l,Hr);let h=cp(s,e,t,n,kr,zr,Hr,kh);if(h){let u=new F;Ii.getBarycoord(kh,kr,zr,Hr,u),i&&(h.uv=Ii.getInterpolatedAttribute(i,a,c,l,u,new ue)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,c,l,u,new ue)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};Ii.getNormal(kr,zr,Hr,d.normal),h.face=d,h.barycoord=u}return h}var pt=class s extends vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(v,_,p,M,y,m,R,w,C,D,b){let S=m/C,T=R/D,k=m/2,V=R/2,P=w/2,O=C+1,U=D+1,G=0,H=0,ee=new F;for(let ne=0;ne<U;ne++){let he=ne*T-V;for(let ye=0;ye<O;ye++){let Oe=ye*S-k;ee[v]=Oe*M,ee[_]=he*y,ee[p]=P,l.push(ee.x,ee.y,ee.z),ee[v]=0,ee[_]=0,ee[p]=w>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ye/C),u.push(1-ne/D),G+=1}}for(let ne=0;ne<D;ne++)for(let he=0;he<C;he++){let ye=d+he+O*ne,Oe=d+he+O*(ne+1),ae=d+(he+1)+O*(ne+1),le=d+(he+1)+O*ne;c.push(ye,Oe,le),c.push(Oe,ae,le),H+=6}a.addGroup(f,H,b),f+=H,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ms(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(s){let e={};for(let t=0;t<s.length;t++){let n=Ms(s[t]);for(let i in n)e[i]=n[i]}return e}function lp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var hp={clone:Ms,merge:Wt},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Zt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=lp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_o=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new F,zh=new ue,Hh=new ue,wt=class extends _o{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,zh,Hh),t.subVectors(Hh,zh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},es=-90,ts=1,Pc=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wt(es,ts,e,t);i.layers=this.layers,this.add(i);let r=new wt(es,ts,e,t);r.layers=this.layers,this.add(r);let o=new wt(es,ts,e,t);o.layers=this.layers,this.add(o);let a=new wt(es,ts,e,t);a.layers=this.layers,this.add(a);let c=new wt(es,ts,e,t);c.layers=this.layers,this.add(c);let l=new wt(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xo=class extends Lt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lc=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new pt(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:hi});r.uniforms.tEquirect.value=t;let o=new Se(i,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=qt),new Pc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Ca=new F,fp=new F,pp=new Ye,Mn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ca.subVectors(n,t).cross(fp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pp.getNormalMatrix(e),i=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new nn,Xr=new F,ir=class{constructor(e=new Mn,t=new Mn,n=new Mn,i=new Mn,r=new Mn,o=new Mn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],_=i[11],p=i[12],M=i[13],y=i[14],m=i[15];if(n[0].setComponents(c-r,d-l,_-f,m-p).normalize(),n[1].setComponents(c+r,d+l,_+f,m+p).normalize(),n[2].setComponents(c+o,d+h,_+g,m+M).normalize(),n[3].setComponents(c-o,d-h,_-g,m-M).normalize(),n[4].setComponents(c-a,d-u,_-v,m-y).normalize(),t===Vn)n[5].setComponents(c+a,d+u,_+v,m+y).normalize();else if(t===uo)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Xr.x=i.normal.x>0?e.max.x:e.min.x,Xr.y=i.normal.y>0?e.max.y:e.min.y,Xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function mp(s){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Nt=class s extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],v=[],_=[];for(let p=0;p<h;p++){let M=p*d-o;for(let y=0;y<l;y++){let m=y*u-r;g.push(m,-M,0),v.push(0,0,1),_.push(y/a),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let y=M+l*p,m=M+l*(p+1),R=M+1+l*(p+1),w=M+1+l*p;f.push(y,m,w),f.push(m,R,w)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_m=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Eg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ng=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:gp,alphahash_pars_fragment:_p,alphamap_fragment:xp,alphamap_pars_fragment:yp,alphatest_fragment:vp,alphatest_pars_fragment:Mp,aomap_fragment:bp,aomap_pars_fragment:Sp,batching_pars_vertex:Ep,batching_vertex:Tp,begin_vertex:wp,beginnormal_vertex:Ap,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Np,color_fragment:Up,color_pars_fragment:Op,color_pars_vertex:Fp,color_vertex:Bp,common:kp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:Zp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:$p,envmap_pars_vertex:jp,envmap_physical_pars_fragment:cm,envmap_vertex:Jp,fog_vertex:Qp,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:dm,lights_physical_fragment:fm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:_m,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:Mm,map_fragment:bm,map_pars_fragment:Sm,map_particle_fragment:Em,map_particle_pars_fragment:Tm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:Am,morphinstance_vertex:Rm,morphcolor_vertex:Cm,morphnormal_vertex:Im,morphtarget_pars_vertex:Pm,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:Nm,normal_pars_fragment:Um,normal_pars_vertex:Om,normal_vertex:Fm,normalmap_pars_fragment:Bm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:qm,dithering_fragment:Ym,dithering_pars_fragment:Zm,roughnessmap_fragment:Km,roughnessmap_pars_fragment:$m,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Jm,shadowmap_vertex:Qm,shadowmask_pars_fragment:eg,skinbase_vertex:tg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:sg,specularmap_fragment:rg,specularmap_pars_fragment:og,tonemapping_fragment:ag,tonemapping_pars_fragment:cg,transmission_fragment:lg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:dg,uv_vertex:fg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:_g,backgroundCube_frag:xg,cube_vert:yg,cube_frag:vg,depth_vert:Mg,depth_frag:bg,distanceRGBA_vert:Sg,distanceRGBA_frag:Eg,equirect_vert:Tg,equirect_frag:wg,linedashed_vert:Ag,linedashed_frag:Rg,meshbasic_vert:Cg,meshbasic_frag:Ig,meshlambert_vert:Pg,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Ng,meshnormal_vert:Ug,meshnormal_frag:Og,meshphong_vert:Fg,meshphong_frag:Bg,meshphysical_vert:kg,meshphysical_frag:zg,meshtoon_vert:Hg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Wg,shadow_vert:Xg,shadow_frag:qg,sprite_vert:Yg,sprite_frag:Zg},Me={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},wn={basic:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Wt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Wt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Wt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Wt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Wt([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Wt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Wt([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Wt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Wt([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Wt([Me.common,Me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Wt([Me.lights,Me.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};wn.physical={uniforms:Wt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var qr={r:0,b:0,g:0},wi=new Cn,Kg=new ze;function $g(s,e,t,n,i,r,o){let a=new ke(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function v(M){let y=!1,m=g(M);m===null?p(a,c):m&&m.isColor&&(p(m,1),y=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,y){let m=g(y);m&&(m.isCubeTexture||m.mapping===$o)?(h===void 0&&(h=new Se(new pt(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Ms(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),wi.copy(y.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=m,h.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(wi)),h.material.toneMapped=Qe.getTransfer(m.colorSpace)!==lt,(u!==m||d!==m.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=m,d=m.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new Se(new Nt(2,2),new $t({name:"BackgroundMaterial",uniforms:Ms(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(m.colorSpace)!==lt,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(u!==m||d!==m.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=m,d=m.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(qr,Qu(s)),n.buffers.color.setClear(qr.r,qr.g,qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:v,addToRenderList:_}}function jg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(S,T,k,V,P){let O=!1,U=u(V,k,T);r!==U&&(r=U,l(r.object)),O=f(S,V,k,P),O&&g(S,V,k,P),P!==null&&e.update(P,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,m(S,T,k,V),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,T,k){let V=k.wireframe===!0,P=n[S.id];P===void 0&&(P={},n[S.id]=P);let O=P[T.id];O===void 0&&(O={},P[T.id]=O);let U=O[V];return U===void 0&&(U=d(c()),O[V]=U),U}function d(S){let T=[],k=[],V=[];for(let P=0;P<t;P++)T[P]=0,k[P]=0,V[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,T,k,V){let P=r.attributes,O=T.attributes,U=0,G=k.getAttributes();for(let H in G)if(G[H].location>=0){let ne=P[H],he=O[H];if(he===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;U++}return r.attributesNum!==U||r.index!==V}function g(S,T,k,V){let P={},O=T.attributes,U=0,G=k.getAttributes();for(let H in G)if(G[H].location>=0){let ne=O[H];ne===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor));let he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),P[H]=he,U++}r.attributes=P,r.attributesNum=U,r.index=V}function v(){let S=r.newAttributes;for(let T=0,k=S.length;T<k;T++)S[T]=0}function _(S){p(S,0)}function p(S,T){let k=r.newAttributes,V=r.enabledAttributes,P=r.attributeDivisors;k[S]=1,V[S]===0&&(s.enableVertexAttribArray(S),V[S]=1),P[S]!==T&&(s.vertexAttribDivisor(S,T),P[S]=T)}function M(){let S=r.newAttributes,T=r.enabledAttributes;for(let k=0,V=T.length;k<V;k++)T[k]!==S[k]&&(s.disableVertexAttribArray(k),T[k]=0)}function y(S,T,k,V,P,O,U){U===!0?s.vertexAttribIPointer(S,T,k,P,O):s.vertexAttribPointer(S,T,k,V,P,O)}function m(S,T,k,V){v();let P=V.attributes,O=k.getAttributes(),U=T.defaultAttributeValues;for(let G in O){let H=O[G];if(H.location>=0){let ee=P[G];if(ee===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){let ne=ee.normalized,he=ee.itemSize,ye=e.get(ee);if(ye===void 0)continue;let Oe=ye.buffer,ae=ye.type,le=ye.bytesPerElement,be=ae===s.INT||ae===s.UNSIGNED_INT||ee.gpuType===pl;if(ee.isInterleavedBufferAttribute){let _e=ee.data,E=_e.stride,B=ee.offset;if(_e.isInstancedInterleavedBuffer){for(let X=0;X<H.locationSize;X++)p(H.location+X,_e.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let X=0;X<H.locationSize;X++)_(H.location+X);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let X=0;X<H.locationSize;X++)y(H.location+X,he/H.locationSize,ae,ne,E*le,(B+he/H.locationSize*X)*le,be)}else{if(ee.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e,ee.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<H.locationSize;_e++)_(H.location+_e);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e,he/H.locationSize,ae,ne,he*le,he/H.locationSize*_e*le,be)}}else if(U!==void 0){let ne=U[G];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(H.location,ne);break;case 3:s.vertexAttrib3fv(H.location,ne);break;case 4:s.vertexAttrib4fv(H.location,ne);break;default:s.vertexAttrib1fv(H.location,ne)}}}}M()}function R(){D();for(let S in n){let T=n[S];for(let k in T){let V=T[k];for(let P in V)h(V[P].object),delete V[P];delete T[k]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let T=n[S.id];for(let k in T){let V=T[k];for(let P in V)h(V[P].object),delete V[P];delete T[k]}delete n[S.id]}function C(S){for(let T in n){let k=n[T];if(k[S.id]===void 0)continue;let V=k[S.id];for(let P in V)h(V[P].object),delete V[P];delete k[S.id]}}function D(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:_,disableUnusedAttributes:M}}function Jg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==on&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let D=C===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Sn&&!D)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),m=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:m,vertexTextures:R,maxSamples:w}}function e0(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Mn,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,_=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!_)r?h(null):l();else{let M=r?0:n,y=M*4,m=p.clippingState||null;c.value=m,m=h(g,d,y,f);for(let R=0;R!==y;++R)m[R]=t[R];p.clippingState=m,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,_=null;if(v!==0){if(_=c.value,g!==!0||_===null){let p=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<p)&&(_=new Float32Array(p));for(let y=0,m=f;y!==v;++y,m+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(_,m),_[m+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}}function t0(s){let e=new WeakMap;function t(o,a){return a===Qa?o.mapping=ps:a===ec&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qa||a===ec)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Lc(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var bs=class extends _o{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},as=4,Vh=[.125,.215,.35,.446,.526,.582],Pi=20,Ia=new bs,Gh=new ke,Pa=null,La=0,Da=0,Na=!1,Ri=(1+Math.sqrt(5))/2,ns=1/Ri,Wh=[new F(-Ri,ns,0),new F(Ri,ns,0),new F(-ns,0,Ri),new F(ns,0,Ri),new F(0,Ri,-ns),new F(0,Ri,ns),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Ss=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,La,Da),this._renderer.xr.enabled=Na,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Da=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:br,format:on,colorSpace:Vt,depthBuffer:!1},i=Xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(r)),this._blurMaterial=i0(r,e,t)}return i}_compileMaterial(e){let t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,i){let a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gh),h.toneMapping=ui,h.autoClear=!1;let f=new Kt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new Se(new pt,f),v=!1,_=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,v=!0):(f.color.copy(Gh),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;Yr(i,M*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ps||e.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Yr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ia)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wh[(i-r-1)%Wh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Se(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),v=r/g,_=isFinite(r)?1+Math.floor(h*v):Pi;_>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Pi}`);let p=[],M=0;for(let C=0;C<Pi;++C){let D=C/v,b=Math.exp(-D*D/2);p.push(b),C===0?M+=b:C<_&&(M+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let m=this._sizeLods[i],R=3*m*(i>y-as?i-y+as:0),w=4*(this._cubeSize-m);Yr(t,R,w,3*m,2*m),c.setRenderTarget(t),c.render(u,Ia)}};function n0(s){let e=[],t=[],n=[],i=s,r=s-as+1+Vh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-as?c=Vh[o-s+as-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,_=2,p=1,M=new Float32Array(v*g*f),y=new Float32Array(_*g*f),m=new Float32Array(p*g*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,D=w>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];M.set(b,v*g*w),y.set(d,_*g*w);let S=[w,w,w,w,w,w];m.set(S,p*g*w)}let R=new vt;R.setAttribute("position",new bt(M,v)),R.setAttribute("uv",new bt(y,_)),R.setAttribute("faceIndex",new bt(m,p)),e.push(R),i>as&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xh(s,e,t){let n=new Xn(s,e,t);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function i0(s,e,t){let n=new Float32Array(Pi),i=new F(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function qh(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Yh(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Qa||c===ec,h=c===ps||c===ms;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ss(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Ss(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function r0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function o0(s,e,t,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let _=0,p=v.length;_<p;_++)e.remove(v[_])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let v=f[g];for(let _=0,p=v.length;_<p;_++)e.update(v[_],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let y=0,m=M.length;y<m;y+=3){let R=M[y+0],w=M[y+1],C=M[y+2];d.push(R,w,w,C,C,R)}}else if(g!==void 0){let M=g.array;v=g.version;for(let y=0,m=M.length/3-1;y<m;y+=3){let R=y+0,w=y+1,C=y+2;d.push(R,w,w,C,C,R)}}else return;let _=new(ju(d)?go:mo)(d,1);_.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,_)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function a0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let _=0;for(let p=0;p<g;p++)_+=f[p];t.update(_,n,1)}function u(d,f,g,v){if(g===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{_.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*v[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function c0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function l0(s,e,t){let n=new WeakMap,i=new it;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let m=a.attributes.position.count*y,R=1;m>e.maxTextureSize&&(R=Math.ceil(m/e.maxTextureSize),m=e.maxTextureSize);let w=new Float32Array(m*R*4*u),C=new po(w,m,R,u);C.type=Sn,C.needsUpdate=!0;let D=y*4;for(let S=0;S<u;S++){let T=_[S],k=p[S],V=M[S],P=m*R*4*S;for(let O=0;O<T.count;O++){let U=O*D;f===!0&&(i.fromBufferAttribute(T,O),w[P+U+0]=i.x,w[P+U+1]=i.y,w[P+U+2]=i.z,w[P+U+3]=0),g===!0&&(i.fromBufferAttribute(k,O),w[P+U+4]=i.x,w[P+U+5]=i.y,w[P+U+6]=i.z,w[P+U+7]=0),v===!0&&(i.fromBufferAttribute(V,O),w[P+U+8]=i.x,w[P+U+9]=i.y,w[P+U+10]=i.z,w[P+U+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new ue(m,R)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function h0(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var yo=class extends Lt{constructor(e,t,n,i,r,o,a,c,l,h=hs){if(h!==hs&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Li),n===void 0&&h===_s&&(n=gs),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},td=new Lt,Zh=new yo(1,1),nd=new po,id=new Ic,sd=new xo,Kh=[],$h=[],jh=new Float32Array(16),Jh=new Float32Array(9),Qh=new Float32Array(4);function Is(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Kh[i];if(r===void 0&&(r=new Float32Array(i),Kh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qo(s,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function u0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function d0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function f0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function p0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function m0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Qh.set(n),s.uniformMatrix2fv(this.addr,!1,Qh),Ct(t,n)}}function g0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Jh.set(n),s.uniformMatrix3fv(this.addr,!1,Jh),Ct(t,n)}}function _0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;jh.set(n),s.uniformMatrix4fv(this.addr,!1,jh),Ct(t,n)}}function x0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function y0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function v0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function M0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function b0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function S0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function E0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function T0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function w0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Zh.compareFunction=$u,r=Zh):r=td,t.setTexture2D(e||r,i)}function A0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||id,i)}function R0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sd,i)}function C0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nd,i)}function I0(s){switch(s){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return b0;case 36294:return S0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function P0(s,e){s.uniform1fv(this.addr,e)}function L0(s,e){let t=Is(e,this.size,2);s.uniform2fv(this.addr,t)}function D0(s,e){let t=Is(e,this.size,3);s.uniform3fv(this.addr,t)}function N0(s,e){let t=Is(e,this.size,4);s.uniform4fv(this.addr,t)}function U0(s,e){let t=Is(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function O0(s,e){let t=Is(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function F0(s,e){let t=Is(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function B0(s,e){s.uniform1iv(this.addr,e)}function k0(s,e){s.uniform2iv(this.addr,e)}function z0(s,e){s.uniform3iv(this.addr,e)}function H0(s,e){s.uniform4iv(this.addr,e)}function V0(s,e){s.uniform1uiv(this.addr,e)}function G0(s,e){s.uniform2uiv(this.addr,e)}function W0(s,e){s.uniform3uiv(this.addr,e)}function X0(s,e){s.uniform4uiv(this.addr,e)}function q0(s,e,t){let n=this.cache,i=e.length,r=Qo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||td,r[o])}function Y0(s,e,t){let n=this.cache,i=e.length,r=Qo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||id,r[o])}function Z0(s,e,t){let n=this.cache,i=e.length,r=Qo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sd,r[o])}function K0(s,e,t){let n=this.cache,i=e.length,r=Qo(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||nd,r[o])}function $0(s){switch(s){case 5126:return P0;case 35664:return L0;case 35665:return D0;case 35666:return N0;case 35674:return U0;case 35675:return O0;case 35676:return F0;case 5124:case 35670:return B0;case 35667:case 35671:return k0;case 35668:case 35672:return z0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return G0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return K0}}var Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I0(t.type)}},Nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$0(t.type)}},Uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Ua=/(\w+)(\])?(\[|\.)?/g;function eu(s,e){s.seq.push(e),s.map[e.id]=e}function j0(s,e,t){let n=s.name,i=n.length;for(Ua.lastIndex=0;;){let r=Ua.exec(n),o=Ua.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){eu(t,l===void 0?new Dc(a,s,e):new Nc(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Uc(a),eu(t,u)),t=u}}}var ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);j0(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function tu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var J0=37297,Q0=0;function e_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var nu=new Ye;function t_(s){Qe._getMatrix(nu,Qe.workingColorSpace,s);let e=`mat3( ${nu.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(s)){case Jo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function iu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+e_(s.getShaderSource(e),o)}else return i}function n_(s,e){let t=t_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function i_(s,e){let t;switch(e){case hf:t="Linear";break;case uf:t="Reinhard";break;case df:t="Cineon";break;case Ko:t="ACESFilmic";break;case pf:t="AgX";break;case mf:t="Neutral";break;case ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zr=new F;function s_(){Qe.getLuminanceCoefficients(Zr);let s=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function o_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Xs(s){return s!==""}function su(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ru(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(s){return s.replace(c_,h_)}var l_=new Map;function h_(s,e){let t=Ke[e];if(t===void 0){let n=l_.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oc(t)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(s){return s.replace(u_,d_)}function d_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function au(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ou?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function p_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ps:case ms:e="ENVMAP_TYPE_CUBE";break;case $o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function g_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fu:e="ENVMAP_BLENDING_MULTIPLY";break;case cf:e="ENVMAP_BLENDING_MIX";break;case lf:e="ENVMAP_BLENDING_ADD";break}return e}function __(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function x_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=f_(t),l=p_(t),h=m_(t),u=g_(t),d=__(t),f=r_(t),g=o_(r),v=i.createProgram(),_,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(_=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ui?i_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,n_("linearToOutputTexel",t.outputColorSpace),s_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Oc(o),o=su(o,t),o=ru(o,t),a=Oc(a),a=su(a,t),a=ru(a,t),o=ou(o),a=ou(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+_+o,m=M+p+a,R=tu(i,i.VERTEX_SHADER,y),w=tu(i,i.FRAGMENT_SHADER,m);i.attachShader(v,R),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(T){if(s.debug.checkShaderErrors){let k=i.getProgramInfoLog(v).trim(),V=i.getShaderInfoLog(R).trim(),P=i.getShaderInfoLog(w).trim(),O=!0,U=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,w);else{let G=iu(i,R,"vertex"),H=iu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+G+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||P==="")&&(U=!1);U&&(T.diagnostics={runnable:O,programLog:k,vertexShader:{log:V,prefix:_},fragmentShader:{log:P,prefix:p}})}i.deleteShader(R),i.deleteShader(w),D=new ds(i,v),b=a_(i,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,J0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}var y_=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bc(e),t.set(e,n)),n}},Bc=class{constructor(e){this.id=y_++,this.code=e,this.usedTimes=0}};function v_(s,e,t,n,i,r,o){let a=new nr,c=new Fc,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function _(b,S,T,k,V){let P=k.fog,O=V.geometry,U=b.isMeshStandardMaterial?k.environment:null,G=(b.isMeshStandardMaterial?t:e).get(b.envMap||U),H=G&&G.mapping===$o?G.image.height:null,ee=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,he=ne!==void 0?ne.length:0,ye=0;O.morphAttributes.position!==void 0&&(ye=1),O.morphAttributes.normal!==void 0&&(ye=2),O.morphAttributes.color!==void 0&&(ye=3);let Oe,ae,le,be;if(ee){let at=wn[ee];Oe=at.vertexShader,ae=at.fragmentShader}else Oe=b.vertexShader,ae=b.fragmentShader,c.update(b),le=c.getVertexShaderID(b),be=c.getFragmentShaderID(b);let _e=s.getRenderTarget(),E=s.state.buffers.depth.getReversed(),B=V.isInstancedMesh===!0,X=V.isBatchedMesh===!0,W=!!b.map,z=!!b.matcap,q=!!G,A=!!b.aoMap,J=!!b.lightMap,oe=!!b.bumpMap,re=!!b.normalMap,j=!!b.displacementMap,ve=!!b.emissiveMap,ge=!!b.metalnessMap,I=!!b.roughnessMap,x=b.anisotropy>0,N=b.clearcoat>0,Y=b.dispersion>0,Q=b.iridescence>0,te=b.sheen>0,fe=b.transmission>0,pe=x&&!!b.anisotropyMap,we=N&&!!b.clearcoatMap,Ze=N&&!!b.clearcoatNormalMap,me=N&&!!b.clearcoatRoughnessMap,Ie=Q&&!!b.iridescenceMap,Le=Q&&!!b.iridescenceThicknessMap,Be=te&&!!b.sheenColorMap,Pe=te&&!!b.sheenRoughnessMap,Je=!!b.specularMap,We=!!b.specularColorMap,dt=!!b.specularIntensityMap,Z=fe&&!!b.transmissionMap,Te=fe&&!!b.thicknessMap,ce=!!b.gradientMap,de=!!b.alphaMap,Ce=b.alphaTest>0,Ae=!!b.alphaHash,Xe=!!b.extensions,Mt=ui;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Mt=s.toneMapping);let Ut={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:ae,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:X,batchingColor:X&&V._colorsTexture!==null,instancing:B,instancingColor:B&&V.instanceColor!==null,instancingMorph:B&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Vt,alphaToCoverage:!!b.alphaToCoverage,map:W,matcap:z,envMap:q,envMapMode:q&&G.mapping,envMapCubeUVHeight:H,aoMap:A,lightMap:J,bumpMap:oe,normalMap:re,displacementMap:d&&j,emissiveMap:ve,normalMapObjectSpace:re&&b.normalMapType===Sf,normalMapTangentSpace:re&&b.normalMapType===Ku,metalnessMap:ge,roughnessMap:I,anisotropy:x,anisotropyMap:pe,clearcoat:N,clearcoatMap:we,clearcoatNormalMap:Ze,clearcoatRoughnessMap:me,dispersion:Y,iridescence:Q,iridescenceMap:Ie,iridescenceThicknessMap:Le,sheen:te,sheenColorMap:Be,sheenRoughnessMap:Pe,specularMap:Je,specularColorMap:We,specularIntensityMap:dt,transmission:fe,transmissionMap:Z,thicknessMap:Te,gradientMap:ce,opaque:b.transparent===!1&&b.blending===ls&&b.alphaToCoverage===!1,alphaMap:de,alphaTest:Ce,alphaHash:Ae,combine:b.combine,mapUv:W&&v(b.map.channel),aoMapUv:A&&v(b.aoMap.channel),lightMapUv:J&&v(b.lightMap.channel),bumpMapUv:oe&&v(b.bumpMap.channel),normalMapUv:re&&v(b.normalMap.channel),displacementMapUv:j&&v(b.displacementMap.channel),emissiveMapUv:ve&&v(b.emissiveMap.channel),metalnessMapUv:ge&&v(b.metalnessMap.channel),roughnessMapUv:I&&v(b.roughnessMap.channel),anisotropyMapUv:pe&&v(b.anisotropyMap.channel),clearcoatMapUv:we&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(b.sheenRoughnessMap.channel),specularMapUv:Je&&v(b.specularMap.channel),specularColorMapUv:We&&v(b.specularColorMap.channel),specularIntensityMapUv:dt&&v(b.specularIntensityMap.channel),transmissionMapUv:Z&&v(b.transmissionMap.channel),thicknessMapUv:Te&&v(b.thicknessMap.channel),alphaMapUv:de&&v(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(re||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!O.attributes.uv&&(W||de),fog:!!P,useFog:b.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:E,skinning:V.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Mt,decodeVideoTexture:W&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:ve&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===At,flipSided:b.side===Bt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&b.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)S.push(T),S.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(M(S,b),y(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function m(b){let S=g[b.type],T;if(S){let k=wn[S];T=hp.clone(k.uniforms)}else T=b.uniforms;return T}function R(b,S){let T;for(let k=0,V=h.length;k<V;k++){let P=h[k];if(P.cacheKey===S){T=P,++T.usedTimes;break}}return T===void 0&&(T=new x_(s,S,b,r),h.push(T)),T}function w(b){if(--b.usedTimes===0){let S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function D(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:m,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:D}}function M_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function b_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,_){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:_},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=_),e++,p}function a(u,d,f,g,v,_){let p=o(u,d,f,g,v,_);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,v,_){let p=o(u,d,f,g,v,_);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||b_),n.length>1&&n.sort(d||cu),i.length>1&&i.sort(d||cu)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function S_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new lu,s.set(n,[o])):i>=r.length?(o=new lu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function E_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new ke};break;case"SpotLight":t={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function T_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var w_=0;function A_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function R_(s){let e=new E_,t=T_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let i=new F,r=new ze,o=new ze;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,_=0,p=0,M=0,y=0,m=0,R=0,w=0,C=0;l.sort(A_);for(let b=0,S=l.length;b<S;b++){let T=l[b],k=T.color,V=T.intensity,P=T.distance,O=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=k.r*V,u+=k.g*V,d+=k.b*V;else if(T.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(T.sh.coefficients[U],V);C++}else if(T.isDirectionalLight){let U=e.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let G=T.shadow,H=t.get(T);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=T.shadow.matrix,M++}n.directional[f]=U,f++}else if(T.isSpotLight){let U=e.get(T);U.position.setFromMatrixPosition(T.matrixWorld),U.color.copy(k).multiplyScalar(V),U.distance=P,U.coneCos=Math.cos(T.angle),U.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),U.decay=T.decay,n.spot[v]=U;let G=T.shadow;if(T.map&&(n.spotLightMap[R]=T.map,R++,G.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[v]=G.matrix,T.castShadow){let H=t.get(T);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=O,m++}v++}else if(T.isRectAreaLight){let U=e.get(T);U.color.copy(k).multiplyScalar(V),U.halfWidth.set(T.width*.5,0,0),U.halfHeight.set(0,T.height*.5,0),n.rectArea[_]=U,_++}else if(T.isPointLight){let U=e.get(T);if(U.color.copy(T.color).multiplyScalar(T.intensity),U.distance=T.distance,U.decay=T.decay,T.castShadow){let G=T.shadow,H=t.get(T);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=U,g++}else if(T.isHemisphereLight){let U=e.get(T);U.skyColor.copy(T.color).multiplyScalar(V),U.groundColor.copy(T.groundColor).multiplyScalar(V),n.hemi[p]=U,p++}}_>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==_||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==y||D.numSpotShadows!==m||D.numSpotMaps!==R||D.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=_,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=m,n.spotShadowMap.length=m,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=m+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=_,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=y,D.numSpotShadows=m,D.numSpotMaps=R,D.numLightProbes=C,n.version=w_++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0,_=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let y=l[p];if(y.isDirectionalLight){let m=n.directional[u];m.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),m.direction.sub(i),m.direction.transformDirection(_),u++}else if(y.isSpotLight){let m=n.spot[f];m.position.setFromMatrixPosition(y.matrixWorld),m.position.applyMatrix4(_),m.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),m.direction.sub(i),m.direction.transformDirection(_),f++}else if(y.isRectAreaLight){let m=n.rectArea[g];m.position.setFromMatrixPosition(y.matrixWorld),m.position.applyMatrix4(_),o.identity(),r.copy(y.matrixWorld),r.premultiply(_),o.extractRotation(r),m.halfWidth.set(y.width*.5,0,0),m.halfHeight.set(0,y.height*.5,0),m.halfWidth.applyMatrix4(o),m.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let m=n.point[d];m.position.setFromMatrixPosition(y.matrixWorld),m.position.applyMatrix4(_),d++}else if(y.isHemisphereLight){let m=n.hemi[v];m.direction.setFromMatrixPosition(y.matrixWorld),m.direction.transformDirection(_),v++}}}return{setup:a,setupView:c,state:n}}function hu(s){let e=new R_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function C_(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new hu(s),e.set(i,[a])):r>=o.length?(a=new hu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var kc=class extends Zt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zc=class extends Zt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L_(s,e,t){let n=new ir,i=new ue,r=new ue,o=new it,a=new kc({depthPacking:bf}),c=new zc,l={},h=t.maxTextureSize,u={[cn]:Bt,[Bt]:cn,[At]:At},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:I_,fragmentShader:P_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Se(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let p=this.type;this.render=function(w,C,D){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;let b=s.getRenderTarget(),S=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),k=s.state;k.setBlending(hi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=p!==zn&&this.type===zn,P=p===zn&&this.type!==zn;for(let O=0,U=w.length;O<U;O++){let G=w[O],H=G.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let ee=H.getFrameExtents();if(i.multiply(ee),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,H.mapSize.y=r.y)),H.map===null||V===!0||P===!0){let he=this.type!==zn?{minFilter:kt,magFilter:kt}:{};H.map!==null&&H.map.dispose(),H.map=new Xn(i.x,i.y,he),H.map.texture.name=G.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ne=H.getViewportCount();for(let he=0;he<ne;he++){let ye=H.getViewport(he);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),k.viewport(o),H.updateMatrices(G,he),n=H.getFrustum(),m(C,D,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===zn&&M(H,D),H.needsUpdate=!1}p=this.type,_.needsUpdate=!1,s.setRenderTarget(b,S,T)};function M(w,C){let D=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,D,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,D,f,v,null)}function y(w,C,D,b){let S=null,T=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)S=T;else if(S=D.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let k=S.uuid,V=C.uuid,P=l[k];P===void 0&&(P={},l[k]=P);let O=P[V];O===void 0&&(O=S.clone(),P[V]=O,C.addEventListener("dispose",R)),S=O}if(S.visible=C.visible,S.wireframe=C.wireframe,b===zn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let k=s.properties.get(S);k.light=D}return S}function m(w,C,D,b,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let V=e.update(w),P=w.material;if(Array.isArray(P)){let O=V.groups;for(let U=0,G=O.length;U<G;U++){let H=O[U],ee=P[H.materialIndex];if(ee&&ee.visible){let ne=y(w,ee,b,S);w.onBeforeShadow(s,w,C,D,V,ne,H),s.renderBufferDirect(D,null,V,ne,w,H),w.onAfterShadow(s,w,C,D,V,ne,H)}}}else if(P.visible){let O=y(w,P,b,S);w.onBeforeShadow(s,w,C,D,V,O,null),s.renderBufferDirect(D,null,V,O,w,null),w.onAfterShadow(s,w,C,D,V,O,null)}}let k=w.children;for(let V=0,P=k.length;V<P;V++)m(k[V],C,D,b,S)}function R(w){w.target.removeEventListener("dispose",R);for(let D in l){let b=l[D],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}var D_={[qa]:Ya,[Za]:ja,[Ka]:Ja,[fs]:$a,[Ya]:qa,[ja]:Za,[Ja]:Ka,[$a]:fs};function N_(s,e){function t(){let Z=!1,Te=new it,ce=null,de=new it(0,0,0,0);return{setMask:function(Ce){ce!==Ce&&!Z&&(s.colorMask(Ce,Ce,Ce,Ce),ce=Ce)},setLocked:function(Ce){Z=Ce},setClear:function(Ce,Ae,Xe,Mt,Ut){Ut===!0&&(Ce*=Mt,Ae*=Mt,Xe*=Mt),Te.set(Ce,Ae,Xe,Mt),de.equals(Te)===!1&&(s.clearColor(Ce,Ae,Xe,Mt),de.copy(Te))},reset:function(){Z=!1,ce=null,de.set(-1,0,0,0)}}}function n(){let Z=!1,Te=!1,ce=null,de=null,Ce=null;return{setReversed:function(Ae){if(Te!==Ae){let Xe=e.get("EXT_clip_control");Te?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);let Mt=Ce;Ce=null,this.setClear(Mt)}Te=Ae},getReversed:function(){return Te},setTest:function(Ae){Ae?_e(s.DEPTH_TEST):E(s.DEPTH_TEST)},setMask:function(Ae){ce!==Ae&&!Z&&(s.depthMask(Ae),ce=Ae)},setFunc:function(Ae){if(Te&&(Ae=D_[Ae]),de!==Ae){switch(Ae){case qa:s.depthFunc(s.NEVER);break;case Ya:s.depthFunc(s.ALWAYS);break;case Za:s.depthFunc(s.LESS);break;case fs:s.depthFunc(s.LEQUAL);break;case Ka:s.depthFunc(s.EQUAL);break;case $a:s.depthFunc(s.GEQUAL);break;case ja:s.depthFunc(s.GREATER);break;case Ja:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=Ae}},setLocked:function(Ae){Z=Ae},setClear:function(Ae){Ce!==Ae&&(Te&&(Ae=1-Ae),s.clearDepth(Ae),Ce=Ae)},reset:function(){Z=!1,ce=null,de=null,Ce=null,Te=!1}}}function i(){let Z=!1,Te=null,ce=null,de=null,Ce=null,Ae=null,Xe=null,Mt=null,Ut=null;return{setTest:function(at){Z||(at?_e(s.STENCIL_TEST):E(s.STENCIL_TEST))},setMask:function(at){Te!==at&&!Z&&(s.stencilMask(at),Te=at)},setFunc:function(at,gn,Ln){(ce!==at||de!==gn||Ce!==Ln)&&(s.stencilFunc(at,gn,Ln),ce=at,de=gn,Ce=Ln)},setOp:function(at,gn,Ln){(Ae!==at||Xe!==gn||Mt!==Ln)&&(s.stencilOp(at,gn,Ln),Ae=at,Xe=gn,Mt=Ln)},setLocked:function(at){Z=at},setClear:function(at){Ut!==at&&(s.clearStencil(at),Ut=at)},reset:function(){Z=!1,Te=null,ce=null,de=null,Ce=null,Ae=null,Xe=null,Mt=null,Ut=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,v=!1,_=null,p=null,M=null,y=null,m=null,R=null,w=null,C=new ke(0,0,0),D=0,b=!1,S=null,T=null,k=null,V=null,P=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,G=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=G>=2);let ee=null,ne={},he=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Oe=new it().fromArray(he),ae=new it().fromArray(ye);function le(Z,Te,ce,de){let Ce=new Uint8Array(4),Ae=s.createTexture();s.bindTexture(Z,Ae),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<ce;Xe++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Te+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return Ae}let be={};be[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(s.DEPTH_TEST),o.setFunc(fs),oe(!1),re(ph),_e(s.CULL_FACE),A(hi);function _e(Z){h[Z]!==!0&&(s.enable(Z),h[Z]=!0)}function E(Z){h[Z]!==!1&&(s.disable(Z),h[Z]=!1)}function B(Z,Te){return u[Z]!==Te?(s.bindFramebuffer(Z,Te),u[Z]=Te,Z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Te),Z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function X(Z,Te){let ce=f,de=!1;if(Z){ce=d.get(Te),ce===void 0&&(ce=[],d.set(Te,ce));let Ce=Z.textures;if(ce.length!==Ce.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,Xe=Ce.length;Ae<Xe;Ae++)ce[Ae]=s.COLOR_ATTACHMENT0+Ae;ce.length=Ce.length,de=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,de=!0);de&&s.drawBuffers(ce)}function W(Z){return g!==Z?(s.useProgram(Z),g=Z,!0):!1}let z={[Ci]:s.FUNC_ADD,[Wd]:s.FUNC_SUBTRACT,[Xd]:s.FUNC_REVERSE_SUBTRACT};z[qd]=s.MIN,z[Yd]=s.MAX;let q={[Zd]:s.ZERO,[Kd]:s.ONE,[$d]:s.SRC_COLOR,[Wa]:s.SRC_ALPHA,[nf]:s.SRC_ALPHA_SATURATE,[ef]:s.DST_COLOR,[Jd]:s.DST_ALPHA,[jd]:s.ONE_MINUS_SRC_COLOR,[Xa]:s.ONE_MINUS_SRC_ALPHA,[tf]:s.ONE_MINUS_DST_COLOR,[Qd]:s.ONE_MINUS_DST_ALPHA,[sf]:s.CONSTANT_COLOR,[rf]:s.ONE_MINUS_CONSTANT_COLOR,[of]:s.CONSTANT_ALPHA,[af]:s.ONE_MINUS_CONSTANT_ALPHA};function A(Z,Te,ce,de,Ce,Ae,Xe,Mt,Ut,at){if(Z===hi){v===!0&&(E(s.BLEND),v=!1);return}if(v===!1&&(_e(s.BLEND),v=!0),Z!==Gd){if(Z!==_||at!==b){if((p!==Ci||m!==Ci)&&(s.blendEquation(s.FUNC_ADD),p=Ci,m=Ci),at)switch(Z){case ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mh:s.blendFunc(s.ONE,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _h:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _h:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}M=null,y=null,R=null,w=null,C.set(0,0,0),D=0,_=Z,b=at}return}Ce=Ce||Te,Ae=Ae||ce,Xe=Xe||de,(Te!==p||Ce!==m)&&(s.blendEquationSeparate(z[Te],z[Ce]),p=Te,m=Ce),(ce!==M||de!==y||Ae!==R||Xe!==w)&&(s.blendFuncSeparate(q[ce],q[de],q[Ae],q[Xe]),M=ce,y=de,R=Ae,w=Xe),(Mt.equals(C)===!1||Ut!==D)&&(s.blendColor(Mt.r,Mt.g,Mt.b,Ut),C.copy(Mt),D=Ut),_=Z,b=!1}function J(Z,Te){Z.side===At?E(s.CULL_FACE):_e(s.CULL_FACE);let ce=Z.side===Bt;Te&&(ce=!ce),oe(ce),Z.blending===ls&&Z.transparent===!1?A(hi):A(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let de=Z.stencilWrite;a.setTest(de),de&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),ve(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):E(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(Z){S!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),S=Z)}function re(Z){Z!==Hd?(_e(s.CULL_FACE),Z!==T&&(Z===ph?s.cullFace(s.BACK):Z===Vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):E(s.CULL_FACE),T=Z}function j(Z){Z!==k&&(U&&s.lineWidth(Z),k=Z)}function ve(Z,Te,ce){Z?(_e(s.POLYGON_OFFSET_FILL),(V!==Te||P!==ce)&&(s.polygonOffset(Te,ce),V=Te,P=ce)):E(s.POLYGON_OFFSET_FILL)}function ge(Z){Z?_e(s.SCISSOR_TEST):E(s.SCISSOR_TEST)}function I(Z){Z===void 0&&(Z=s.TEXTURE0+O-1),ee!==Z&&(s.activeTexture(Z),ee=Z)}function x(Z,Te,ce){ce===void 0&&(ee===null?ce=s.TEXTURE0+O-1:ce=ee);let de=ne[ce];de===void 0&&(de={type:void 0,texture:void 0},ne[ce]=de),(de.type!==Z||de.texture!==Te)&&(ee!==ce&&(s.activeTexture(ce),ee=ce),s.bindTexture(Z,Te||be[Z]),de.type=Z,de.texture=Te)}function N(){let Z=ne[ee];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function fe(){try{s.texSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function we(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ze(){try{s.texStorage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ie(){try{s.texImage2D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Be(Z){Oe.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),Oe.copy(Z))}function Pe(Z){ae.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),ae.copy(Z))}function Je(Z,Te){let ce=l.get(Te);ce===void 0&&(ce=new WeakMap,l.set(Te,ce));let de=ce.get(Z);de===void 0&&(de=s.getUniformBlockIndex(Te,Z.name),ce.set(Z,de))}function We(Z,Te){let de=l.get(Te).get(Z);c.get(Te)!==de&&(s.uniformBlockBinding(Te,de,Z.__bindingPointIndex),c.set(Te,de))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,ne={},u={},d=new WeakMap,f=[],g=null,v=!1,_=null,p=null,M=null,y=null,m=null,R=null,w=null,C=new ke(0,0,0),D=0,b=!1,S=null,T=null,k=null,V=null,P=null,Oe.set(0,0,s.canvas.width,s.canvas.height),ae.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_e,disable:E,bindFramebuffer:B,drawBuffers:X,useProgram:W,setBlending:A,setMaterial:J,setFlipSided:oe,setCullFace:re,setLineWidth:j,setPolygonOffset:ve,setScissorTest:ge,activeTexture:I,bindTexture:x,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Ie,texImage3D:Le,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:Ze,texStorage3D:me,texSubImage2D:te,texSubImage3D:fe,compressedTexSubImage2D:pe,compressedTexSubImage3D:we,scissor:Be,viewport:Pe,reset:dt}}function uu(s,e,t,n){let i=U_(n);switch(t){case Vu:return s*e;case Wu:return s*e;case Xu:return s*e*2;case _l:return s*e/i.components*i.byteLength;case xl:return s*e/i.components*i.byteLength;case qu:return s*e*2/i.components*i.byteLength;case yl:return s*e*2/i.components*i.byteLength;case Gu:return s*e*3/i.components*i.byteLength;case on:return s*e*4/i.components*i.byteLength;case vl:return s*e*4/i.components*i.byteLength;case ro:case oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ao:case co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(s,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(s,8)*Math.max(e,8)/2;case rc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lo:case bc:case Sc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yu:case Ec:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Tc:case wc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U_(s){switch(s){case Wn:case ku:return{byteLength:1,components:1};case er:case zu:case br:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Li:case pl:case Sn:return{byteLength:4,components:1};case Hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function O_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,x){return f?new OffscreenCanvas(I,x):tr("canvas")}function v(I,x,N){let Y=1,Q=ge(I);if((Q.width>N||Q.height>N)&&(Y=N/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let te=Math.floor(Y*Q.width),fe=Math.floor(Y*Q.height);u===void 0&&(u=g(te,fe));let pe=x?g(te,fe):u;return pe.width=te,pe.height=fe,pe.getContext("2d").drawImage(I,0,0,te,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+te+"x"+fe+")."),pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function _(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,x,N,Y,Q=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let te=x;if(x===s.RED&&(N===s.FLOAT&&(te=s.R32F),N===s.HALF_FLOAT&&(te=s.R16F),N===s.UNSIGNED_BYTE&&(te=s.R8)),x===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(te=s.R8UI),N===s.UNSIGNED_SHORT&&(te=s.R16UI),N===s.UNSIGNED_INT&&(te=s.R32UI),N===s.BYTE&&(te=s.R8I),N===s.SHORT&&(te=s.R16I),N===s.INT&&(te=s.R32I)),x===s.RG&&(N===s.FLOAT&&(te=s.RG32F),N===s.HALF_FLOAT&&(te=s.RG16F),N===s.UNSIGNED_BYTE&&(te=s.RG8)),x===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(te=s.RG8UI),N===s.UNSIGNED_SHORT&&(te=s.RG16UI),N===s.UNSIGNED_INT&&(te=s.RG32UI),N===s.BYTE&&(te=s.RG8I),N===s.SHORT&&(te=s.RG16I),N===s.INT&&(te=s.RG32I)),x===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(te=s.RGB8UI),N===s.UNSIGNED_SHORT&&(te=s.RGB16UI),N===s.UNSIGNED_INT&&(te=s.RGB32UI),N===s.BYTE&&(te=s.RGB8I),N===s.SHORT&&(te=s.RGB16I),N===s.INT&&(te=s.RGB32I)),x===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),N===s.UNSIGNED_INT&&(te=s.RGBA32UI),N===s.BYTE&&(te=s.RGBA8I),N===s.SHORT&&(te=s.RGBA16I),N===s.INT&&(te=s.RGBA32I)),x===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),x===s.RGBA){let fe=Q?Jo:Qe.getTransfer(Y);N===s.FLOAT&&(te=s.RGBA32F),N===s.HALF_FLOAT&&(te=s.RGBA16F),N===s.UNSIGNED_BYTE&&(te=fe===lt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function m(I,x){let N;return I?x===null||x===Li||x===gs?N=s.DEPTH24_STENCIL8:x===Sn?N=s.DEPTH32F_STENCIL8:x===er&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Li||x===gs?N=s.DEPTH_COMPONENT24:x===Sn?N=s.DEPTH_COMPONENT32F:x===er&&(N=s.DEPTH_COMPONENT16),N}function R(I,x){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==kt&&I.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?x.mipmaps.length:1}function w(I){let x=I.target;x.removeEventListener("dispose",w),D(x),x.isVideoTexture&&h.delete(x)}function C(I){let x=I.target;x.removeEventListener("dispose",C),S(x)}function D(I){let x=n.get(I);if(x.__webglInit===void 0)return;let N=I.source,Y=d.get(N);if(Y){let Q=Y[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(I),Object.keys(Y).length===0&&d.delete(N)}n.remove(I)}function b(I){let x=n.get(I);s.deleteTexture(x.__webglTexture);let N=I.source,Y=d.get(N);delete Y[x.__cacheKey],o.memory.textures--}function S(I){let x=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let Q=0;Q<x.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[Y]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let N=I.textures;for(let Y=0,Q=N.length;Y<Q;Y++){let te=n.get(N[Y]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(I)}let T=0;function k(){T=0}function V(){let I=T;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),T+=1,I}function P(I){let x=[];return x.push(I.wrapS),x.push(I.wrapT),x.push(I.wrapR||0),x.push(I.magFilter),x.push(I.minFilter),x.push(I.anisotropy),x.push(I.internalFormat),x.push(I.format),x.push(I.type),x.push(I.generateMipmaps),x.push(I.premultiplyAlpha),x.push(I.flipY),x.push(I.unpackAlignment),x.push(I.colorSpace),x.join()}function O(I,x){let N=n.get(I);if(I.isVideoTexture&&j(I),I.isRenderTargetTexture===!1&&I.version>0&&N.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(N,I,x);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+x)}function U(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){ae(N,I,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+x)}function G(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){ae(N,I,x);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+x)}function H(I,x){let N=n.get(I);if(I.version>0&&N.__version!==I.version){le(N,I,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+x)}let ee={[Yt]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[Qs]:s.MIRRORED_REPEAT},ne={[kt]:s.NEAREST,[fl]:s.NEAREST_MIPMAP_NEAREST,[ss]:s.NEAREST_MIPMAP_LINEAR,[qt]:s.LINEAR,[qs]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},he={[Ef]:s.NEVER,[If]:s.ALWAYS,[Tf]:s.LESS,[$u]:s.LEQUAL,[wf]:s.EQUAL,[Cf]:s.GEQUAL,[Af]:s.GREATER,[Rf]:s.NOTEQUAL};function ye(I,x){if(x.type===Sn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===qt||x.magFilter===qs||x.magFilter===ss||x.magFilter===An||x.minFilter===qt||x.minFilter===qs||x.minFilter===ss||x.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ee[x.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ee[x.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ee[x.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ne[x.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ne[x.minFilter]),x.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,he[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==ss&&x.minFilter!==An||x.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Oe(I,x){let N=!1;I.__webglInit===void 0&&(I.__webglInit=!0,x.addEventListener("dispose",w));let Y=x.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let te=P(x);if(te!==I.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Q[te].usedTimes++;let fe=Q[I.__cacheKey];fe!==void 0&&(Q[I.__cacheKey].usedTimes--,fe.usedTimes===0&&b(x)),I.__cacheKey=te,I.__webglTexture=Q[te].texture}return N}function ae(I,x,N){let Y=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=s.TEXTURE_3D);let Q=Oe(I,x),te=x.source;t.bindTexture(Y,I.__webglTexture,s.TEXTURE0+N);let fe=n.get(te);if(te.version!==fe.__version||Q===!0){t.activeTexture(s.TEXTURE0+N);let pe=Qe.getPrimaries(Qe.workingColorSpace),we=x.colorSpace===ci?null:Qe.getPrimaries(x.colorSpace),Ze=x.colorSpace===ci||pe===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let me=v(x.image,!1,i.maxTextureSize);me=ve(x,me);let Ie=r.convert(x.format,x.colorSpace),Le=r.convert(x.type),Be=y(x.internalFormat,Ie,Le,x.colorSpace,x.isVideoTexture);ye(Y,x);let Pe,Je=x.mipmaps,We=x.isVideoTexture!==!0,dt=fe.__version===void 0||Q===!0,Z=te.dataReady,Te=R(x,me);if(x.isDepthTexture)Be=m(x.format===_s,x.type),dt&&(We?t.texStorage2D(s.TEXTURE_2D,1,Be,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Be,me.width,me.height,0,Ie,Le,null));else if(x.isDataTexture)if(Je.length>0){We&&dt&&t.texStorage2D(s.TEXTURE_2D,Te,Be,Je[0].width,Je[0].height);for(let ce=0,de=Je.length;ce<de;ce++)Pe=Je[ce],We?Z&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Le,Pe.data):t.texImage2D(s.TEXTURE_2D,ce,Be,Pe.width,Pe.height,0,Ie,Le,Pe.data);x.generateMipmaps=!1}else We?(dt&&t.texStorage2D(s.TEXTURE_2D,Te,Be,me.width,me.height),Z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ie,Le,me.data)):t.texImage2D(s.TEXTURE_2D,0,Be,me.width,me.height,0,Ie,Le,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){We&&dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Be,Je[0].width,Je[0].height,me.depth);for(let ce=0,de=Je.length;ce<de;ce++)if(Pe=Je[ce],x.format!==on)if(Ie!==null)if(We){if(Z)if(x.layerUpdates.size>0){let Ce=uu(Pe.width,Pe.height,x.format,x.type);for(let Ae of x.layerUpdates){let Xe=Pe.data.subarray(Ae*Ce/Pe.data.BYTES_PER_ELEMENT,(Ae+1)*Ce/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,Ae,Pe.width,Pe.height,1,Ie,Xe)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,me.depth,Ie,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,Be,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?Z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,me.depth,Ie,Le,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,Be,Pe.width,Pe.height,me.depth,0,Ie,Le,Pe.data)}else{We&&dt&&t.texStorage2D(s.TEXTURE_2D,Te,Be,Je[0].width,Je[0].height);for(let ce=0,de=Je.length;ce<de;ce++)Pe=Je[ce],x.format!==on?Ie!==null?We?Z&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,Be,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?Z&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,Ie,Le,Pe.data):t.texImage2D(s.TEXTURE_2D,ce,Be,Pe.width,Pe.height,0,Ie,Le,Pe.data)}else if(x.isDataArrayTexture)if(We){if(dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Be,me.width,me.height,me.depth),Z)if(x.layerUpdates.size>0){let ce=uu(me.width,me.height,x.format,x.type);for(let de of x.layerUpdates){let Ce=me.data.subarray(de*ce/me.data.BYTES_PER_ELEMENT,(de+1)*ce/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,me.width,me.height,1,Ie,Le,Ce)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ie,Le,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,me.width,me.height,me.depth,0,Ie,Le,me.data);else if(x.isData3DTexture)We?(dt&&t.texStorage3D(s.TEXTURE_3D,Te,Be,me.width,me.height,me.depth),Z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ie,Le,me.data)):t.texImage3D(s.TEXTURE_3D,0,Be,me.width,me.height,me.depth,0,Ie,Le,me.data);else if(x.isFramebufferTexture){if(dt)if(We)t.texStorage2D(s.TEXTURE_2D,Te,Be,me.width,me.height);else{let ce=me.width,de=me.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(s.TEXTURE_2D,Ce,Be,ce,de,0,Ie,Le,null),ce>>=1,de>>=1}}else if(Je.length>0){if(We&&dt){let ce=ge(Je[0]);t.texStorage2D(s.TEXTURE_2D,Te,Be,ce.width,ce.height)}for(let ce=0,de=Je.length;ce<de;ce++)Pe=Je[ce],We?Z&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ie,Le,Pe):t.texImage2D(s.TEXTURE_2D,ce,Be,Ie,Le,Pe);x.generateMipmaps=!1}else if(We){if(dt){let ce=ge(me);t.texStorage2D(s.TEXTURE_2D,Te,Be,ce.width,ce.height)}Z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Le,me)}else t.texImage2D(s.TEXTURE_2D,0,Be,Ie,Le,me);_(x)&&p(Y),fe.__version=te.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function le(I,x,N){if(x.image.length!==6)return;let Y=Oe(I,x),Q=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+N);let te=n.get(Q);if(Q.version!==te.__version||Y===!0){t.activeTexture(s.TEXTURE0+N);let fe=Qe.getPrimaries(Qe.workingColorSpace),pe=x.colorSpace===ci?null:Qe.getPrimaries(x.colorSpace),we=x.colorSpace===ci||fe===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ze=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,Ie=[];for(let de=0;de<6;de++)!Ze&&!me?Ie[de]=v(x.image[de],!0,i.maxCubemapSize):Ie[de]=me?x.image[de].image:x.image[de],Ie[de]=ve(x,Ie[de]);let Le=Ie[0],Be=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type),Je=y(x.internalFormat,Be,Pe,x.colorSpace),We=x.isVideoTexture!==!0,dt=te.__version===void 0||Y===!0,Z=Q.dataReady,Te=R(x,Le);ye(s.TEXTURE_CUBE_MAP,x);let ce;if(Ze){We&&dt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Je,Le.width,Le.height);for(let de=0;de<6;de++){ce=Ie[de].mipmaps;for(let Ce=0;Ce<ce.length;Ce++){let Ae=ce[Ce];x.format!==on?Be!==null?We?Z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Ae.width,Ae.height,Be,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,Je,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,0,0,Ae.width,Ae.height,Be,Pe,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce,Je,Ae.width,Ae.height,0,Be,Pe,Ae.data)}}}else{if(ce=x.mipmaps,We&&dt){ce.length>0&&Te++;let de=ge(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,Je,de.width,de.height)}for(let de=0;de<6;de++)if(me){We?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ie[de].width,Ie[de].height,Be,Pe,Ie[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Je,Ie[de].width,Ie[de].height,0,Be,Pe,Ie[de].data);for(let Ce=0;Ce<ce.length;Ce++){let Xe=ce[Ce].image[de].image;We?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,Xe.width,Xe.height,Be,Pe,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,Je,Xe.width,Xe.height,0,Be,Pe,Xe.data)}}else{We?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Be,Pe,Ie[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Je,Be,Pe,Ie[de]);for(let Ce=0;Ce<ce.length;Ce++){let Ae=ce[Ce];We?Z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,0,0,Be,Pe,Ae.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce+1,Je,Be,Pe,Ae.image[de])}}}_(x)&&p(s.TEXTURE_CUBE_MAP),te.__version=Q.version,x.onUpdate&&x.onUpdate(x)}I.__version=x.version}function be(I,x,N,Y,Q,te){let fe=r.convert(N.format,N.colorSpace),pe=r.convert(N.type),we=y(N.internalFormat,fe,pe,N.colorSpace),Ze=n.get(x),me=n.get(N);if(me.__renderTarget=x,!Ze.__hasExternalTextures){let Ie=Math.max(1,x.width>>te),Le=Math.max(1,x.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,we,Ie,Le,x.depth,0,fe,pe,null):t.texImage2D(Q,te,we,Ie,Le,0,fe,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),re(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,me.__webglTexture,0,oe(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,me.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(I,x,N){if(s.bindRenderbuffer(s.RENDERBUFFER,I),x.depthBuffer){let Y=x.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,te=m(x.stencilBuffer,Q),fe=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=oe(x);re(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,te,x.width,x.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,te,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,te,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,I)}else{let Y=x.textures;for(let Q=0;Q<Y.length;Q++){let te=Y[Q],fe=r.convert(te.format,te.colorSpace),pe=r.convert(te.type),we=y(te.internalFormat,fe,pe,te.colorSpace),Ze=oe(x);N&&re(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,we,x.width,x.height):re(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,we,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,we,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function E(I,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O(x.depthTexture,0);let Q=Y.__webglTexture,te=oe(x);if(x.depthTexture.format===hs)re(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(x.depthTexture.format===_s)re(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function B(I){let x=n.get(I),N=I.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=Y}if(I.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");E(x.__webglFramebuffer,I)}else if(N){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=s.createRenderbuffer(),_e(x.__webglDepthbuffer[Y],I,!1);else{let Q=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,te)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),_e(x.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function X(I,x,N){let Y=n.get(I);x!==void 0&&be(Y.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&B(I)}function W(I){let x=I.texture,N=n.get(I),Y=n.get(x);I.addEventListener("dispose",C);let Q=I.textures,te=I.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=x.version,o.memory.textures++),te){N.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[pe]=[];for(let we=0;we<x.mipmaps.length;we++)N.__webglFramebuffer[pe][we]=s.createFramebuffer()}else N.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)N.__webglFramebuffer[pe]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(fe)for(let pe=0,we=Q.length;pe<we;pe++){let Ze=n.get(Q[pe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&re(I)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){let we=Q[pe];N.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[pe]);let Ze=r.convert(we.format,we.colorSpace),me=r.convert(we.type),Ie=y(we.internalFormat,Ze,me,we.colorSpace,I.isXRRenderTarget===!0),Le=oe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Ie,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,N.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(N.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ye(s.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)be(N.__webglFramebuffer[pe][we],I,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we);else be(N.__webglFramebuffer[pe],I,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(x)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let pe=0,we=Q.length;pe<we;pe++){let Ze=Q[pe],me=n.get(Ze);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),ye(s.TEXTURE_2D,Ze),be(N.__webglFramebuffer,I,Ze,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),_(Ze)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Y.__webglTexture),ye(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let we=0;we<x.mipmaps.length;we++)be(N.__webglFramebuffer[we],I,x,s.COLOR_ATTACHMENT0,pe,we);else be(N.__webglFramebuffer,I,x,s.COLOR_ATTACHMENT0,pe,0);_(x)&&p(pe),t.unbindTexture()}I.depthBuffer&&B(I)}function z(I){let x=I.textures;for(let N=0,Y=x.length;N<Y;N++){let Q=x[N];if(_(Q)){let te=M(I),fe=n.get(Q).__webglTexture;t.bindTexture(te,fe),p(te),t.unbindTexture()}}}let q=[],A=[];function J(I){if(I.samples>0){if(re(I)===!1){let x=I.textures,N=I.width,Y=I.height,Q=s.COLOR_BUFFER_BIT,te=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(I),pe=x.length>1;if(pe)for(let we=0;we<x.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let we=0;we<x.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[we]);let Ze=n.get(x[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,N,Y,0,0,N,Y,Q,s.NEAREST),c===!0&&(q.length=0,A.length=0,q.push(s.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(q.push(te),A.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,A)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<x.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,fe.__webglColorRenderbuffer[we]);let Ze=n.get(x[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let x=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function oe(I){return Math.min(i.maxSamples,I.samples)}function re(I){let x=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function j(I){let x=o.render.frame;h.get(I)!==x&&(h.set(I,x),I.update())}function ve(I,x){let N=I.colorSpace,Y=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||N!==Vt&&N!==ci&&(Qe.getTransfer(N)===lt?(Y!==on||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function ge(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=X,this.setupRenderTarget=W,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=be,this.useMultisampledRTT=re}function F_(s,e){function t(n,i=ci){let r,o=Qe.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===ml)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return s.BYTE;if(n===zu)return s.SHORT;if(n===er)return s.UNSIGNED_SHORT;if(n===pl)return s.INT;if(n===Li)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===br)return s.HALF_FLOAT;if(n===Vu)return s.ALPHA;if(n===Gu)return s.RGB;if(n===on)return s.RGBA;if(n===Wu)return s.LUMINANCE;if(n===Xu)return s.LUMINANCE_ALPHA;if(n===hs)return s.DEPTH_COMPONENT;if(n===_s)return s.DEPTH_STENCIL;if(n===_l)return s.RED;if(n===xl)return s.RED_INTEGER;if(n===qu)return s.RG;if(n===yl)return s.RG_INTEGER;if(n===vl)return s.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===co)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===oc||n===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rc||n===oc)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ac)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_c)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lo||n===bc||n===Sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lo)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yu||n===Ec||n===Tc||n===wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Hc=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},et=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},B_={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let _=t.getJointPose(v,n),p=this._getHandJoint(l,v);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Lt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:k_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new Nt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends Rn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,v=new Vc,_=t.getContextAttributes(),p=null,M=null,y=[],m=[],R=new ue,w=null,C=new wt;C.viewport=new it;let D=new wt;D.viewport=new it;let b=[C,D],S=new Hc,T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let le=y[ae];return le===void 0&&(le=new Ks,y[ae]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ae){let le=y[ae];return le===void 0&&(le=new Ks,y[ae]=le),le.getGripSpace()},this.getHand=function(ae){let le=y[ae];return le===void 0&&(le=new Ks,y[ae]=le),le.getHandSpace()};function V(ae){let le=m.indexOf(ae.inputSource);if(le===-1)return;let be=y[le];be!==void 0&&(be.update(ae.inputSource,ae.frame,l||o),be.dispatchEvent({type:ae.type,data:ae.inputSource}))}function P(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let ae=0;ae<y.length;ae++){let le=m[ae];le!==null&&(m[ae]=null,y[ae].disconnect(le))}T=null,k=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ae){l=ae},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ae){if(i=ae,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Xn(f.framebufferWidth,f.framebufferHeight,{format:on,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let le=null,be=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?_s:hs,be=_.stencil?gs:Li);let E={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(E),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Xn(d.textureWidth,d.textureHeight,{format:on,type:Wn,depthTexture:new yo(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Oe.setContext(i),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(ae){for(let le=0;le<ae.removed.length;le++){let be=ae.removed[le],_e=m.indexOf(be);_e>=0&&(m[_e]=null,y[_e].disconnect(be))}for(let le=0;le<ae.added.length;le++){let be=ae.added[le],_e=m.indexOf(be);if(_e===-1){for(let B=0;B<y.length;B++)if(B>=m.length){m.push(be),_e=B;break}else if(m[B]===null){m[B]=be,_e=B;break}if(_e===-1)break}let E=y[_e];E&&E.connect(be)}}let U=new F,G=new F;function H(ae,le,be){U.setFromMatrixPosition(le.matrixWorld),G.setFromMatrixPosition(be.matrixWorld);let _e=U.distanceTo(G),E=le.projectionMatrix.elements,B=be.projectionMatrix.elements,X=E[14]/(E[10]-1),W=E[14]/(E[10]+1),z=(E[9]+1)/E[5],q=(E[9]-1)/E[5],A=(E[8]-1)/E[0],J=(B[8]+1)/B[0],oe=X*A,re=X*J,j=_e/(-A+J),ve=j*-A;if(le.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(ve),ae.translateZ(j),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),E[10]===-1)ae.projectionMatrix.copy(le.projectionMatrix),ae.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let ge=X+j,I=W+j,x=oe-ve,N=re+(_e-ve),Y=z*W/I*ge,Q=q*W/I*ge;ae.projectionMatrix.makePerspective(x,N,Y,Q,ge,I),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function ee(ae,le){le===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(le.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(i===null)return;let le=ae.near,be=ae.far;v.texture!==null&&(v.depthNear>0&&(le=v.depthNear),v.depthFar>0&&(be=v.depthFar)),S.near=D.near=C.near=le,S.far=D.far=C.far=be,(T!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,k=S.far),C.layers.mask=ae.layers.mask|2,D.layers.mask=ae.layers.mask|4,S.layers.mask=C.layers.mask|D.layers.mask;let _e=ae.parent,E=S.cameras;ee(S,_e);for(let B=0;B<E.length;B++)ee(E[B],_e);E.length===2?H(S,C,D):S.projectionMatrix.copy(C.projectionMatrix),ne(ae,S,_e)};function ne(ae,le,be){be===null?ae.matrix.copy(le.matrixWorld):(ae.matrix.copy(be.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(le.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(le.projectionMatrix),ae.projectionMatrixInverse.copy(le.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=vs*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ae){c=ae,d!==null&&(d.fixedFoveation=ae),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let he=null;function ye(ae,le){if(h=le.getViewerPose(l||o),g=le,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let _e=!1;be.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let B=0;B<be.length;B++){let X=be[B],W=null;if(f!==null)W=f.getViewport(X);else{let q=u.getViewSubImage(d,X);W=q.viewport,B===0&&(e.setRenderTargetTextures(M,q.colorTexture,d.ignoreDepthValues?void 0:q.depthStencilTexture),e.setRenderTarget(M))}let z=b[B];z===void 0&&(z=new wt,z.layers.enable(B),z.viewport=new it,b[B]=z),z.matrix.fromArray(X.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(X.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(W.x,W.y,W.width,W.height),B===0&&(S.matrix.copy(z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(z)}let E=i.enabledFeatures;if(E&&E.includes("depth-sensing")){let B=u.getDepthInformation(be[0]);B&&B.isValid&&B.texture&&v.init(e,B,i.renderState)}}for(let be=0;be<y.length;be++){let _e=m[be],E=y[be];_e!==null&&E!==void 0&&E.update(_e,le,l||o)}he&&he(ae,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let Oe=new ed;Oe.setAnimationLoop(ye),this.setAnimationLoop=function(ae){he=ae},this.dispose=function(){}}},Ai=new Cn,H_=new ze;function V_(s,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Qu(s)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function i(_,p,M,y,m){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(_,p):p.isMeshToonMaterial?(r(_,p),u(_,p)):p.isMeshPhongMaterial?(r(_,p),h(_,p)):p.isMeshStandardMaterial?(r(_,p),d(_,p),p.isMeshPhysicalMaterial&&f(_,p,m)):p.isMeshMatcapMaterial?(r(_,p),g(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),v(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?c(_,p,M,y):p.isSpriteMaterial?l(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Bt&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Bt&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let M=e.get(p),y=M.envMap,m=M.envMapRotation;y&&(_.envMap.value=y,Ai.copy(m),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),_.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(Ai)),_.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,M,y){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*M,_.scale.value=y*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function l(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function u(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,M){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,p){p.matcap&&(_.matcap.value=p.matcap)}function v(_,p){let M=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function G_(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let m=y.program;n.uniformBlockBinding(M,m)}function l(M,y){let m=i[M.id];m===void 0&&(g(M),m=h(M),i[M.id]=m,M.addEventListener("dispose",_));let R=y.program;n.updateUBOMapping(M,R);let w=e.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function h(M){let y=u();M.__bindingPointIndex=y;let m=s.createBuffer(),R=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,m),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,m),m}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=i[M.id],m=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,C=m.length;w<C;w++){let D=Array.isArray(m[w])?m[w]:[m[w]];for(let b=0,S=D.length;b<S;b++){let T=D[b];if(f(T,w,b,R)===!0){let k=T.__offset,V=Array.isArray(T.value)?T.value:[T.value],P=0;for(let O=0;O<V.length;O++){let U=V[O],G=v(U);typeof U=="number"||typeof U=="boolean"?(T.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,k+P,T.__data)):U.isMatrix3?(T.__data[0]=U.elements[0],T.__data[1]=U.elements[1],T.__data[2]=U.elements[2],T.__data[3]=0,T.__data[4]=U.elements[3],T.__data[5]=U.elements[4],T.__data[6]=U.elements[5],T.__data[7]=0,T.__data[8]=U.elements[6],T.__data[9]=U.elements[7],T.__data[10]=U.elements[8],T.__data[11]=0):(U.toArray(T.__data,P),P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,y,m,R){let w=M.value,C=y+"_"+m;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{let D=R[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(M){let y=M.uniforms,m=0,R=16;for(let C=0,D=y.length;C<D;C++){let b=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,T=b.length;S<T;S++){let k=b[S],V=Array.isArray(k.value)?k.value:[k.value];for(let P=0,O=V.length;P<O;P++){let U=V[P],G=v(U),H=m%R,ee=H%G.boundary,ne=H+ee;m+=ee,ne!==0&&R-ne<G.storage&&(m+=R-ne),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=m,m+=G.storage}}}let w=m%R;return w>0&&(m+=R-w),M.__size=m,M.__cache={},this}function v(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function _(M){let y=M.target;y.removeEventListener("dispose",_);let m=o.indexOf(y.__bindingPointIndex);o.splice(m,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var sr=class{constructor(e={}){let{canvas:t=Yf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),v=new Int32Array(4),_=null,p=null,M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nt,this.toneMapping=ui,this.toneMappingExposure=1;let m=this,R=!1,w=0,C=0,D=null,b=-1,S=null,T=new it,k=new it,V=null,P=new ke(0),O=0,U=t.width,G=t.height,H=1,ee=null,ne=null,he=new it(0,0,U,G),ye=new it(0,0,U,G),Oe=!1,ae=new ir,le=!1,be=!1,_e=new ze,E=new ze,B=new F,X=new it,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},z=!1;function q(){return D===null?H:1}let A=n;function J(L,K){return t.getContext(L,K)}try{let L={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),A===null){let K="webgl2";if(A=J(K,L),A===null)throw J(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let oe,re,j,ve,ge,I,x,N,Y,Q,te,fe,pe,we,Ze,me,Ie,Le,Be,Pe,Je,We,dt,Z;function Te(){oe=new r0(A),oe.init(),We=new F_(A,oe),re=new Qg(A,oe,e,We),j=new N_(A,oe),re.reverseDepthBuffer&&d&&j.buffers.depth.setReversed(!0),ve=new c0(A),ge=new M_,I=new O_(A,oe,j,ge,re,We,ve),x=new t0(m),N=new s0(m),Y=new mp(A),dt=new jg(A,Y),Q=new o0(A,Y,ve,dt),te=new h0(A,Q,Y,ve),Be=new l0(A,re,I),me=new e0(ge),fe=new v_(m,x,N,oe,re,dt,me),pe=new V_(m,ge),we=new S_,Ze=new C_(oe),Le=new $g(m,x,N,j,te,f,c),Ie=new L_(m,te,re),Z=new G_(A,ve,re,j),Pe=new Jg(A,oe,ve),Je=new a0(A,oe,ve),ve.programs=fe.programs,m.capabilities=re,m.extensions=oe,m.properties=ge,m.renderLists=we,m.shadowMap=Ie,m.state=j,m.info=ve}Te();let ce=new Gc(m,A);this.xr=ce,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let L=oe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=oe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(L){L!==void 0&&(H=L,this.setSize(U,G,!1))},this.getSize=function(L){return L.set(U,G)},this.setSize=function(L,K,ie=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=L,G=K,t.width=Math.floor(L*H),t.height=Math.floor(K*H),ie===!0&&(t.style.width=L+"px",t.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(U*H,G*H).floor()},this.setDrawingBufferSize=function(L,K,ie){U=L,G=K,H=ie,t.width=Math.floor(L*ie),t.height=Math.floor(K*ie),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(he)},this.setViewport=function(L,K,ie,se){L.isVector4?he.set(L.x,L.y,L.z,L.w):he.set(L,K,ie,se),j.viewport(T.copy(he).multiplyScalar(H).round())},this.getScissor=function(L){return L.copy(ye)},this.setScissor=function(L,K,ie,se){L.isVector4?ye.set(L.x,L.y,L.z,L.w):ye.set(L,K,ie,se),j.scissor(k.copy(ye).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(L){j.setScissorTest(Oe=L)},this.setOpaqueSort=function(L){ee=L},this.setTransparentSort=function(L){ne=L},this.getClearColor=function(L){return L.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(L=!0,K=!0,ie=!0){let se=0;if(L){let $=!1;if(D!==null){let xe=D.texture.format;$=xe===vl||xe===yl||xe===xl}if($){let xe=D.texture.type,Re=xe===Wn||xe===Li||xe===er||xe===gs||xe===ml||xe===gl,De=Le.getClearColor(),Ne=Le.getClearAlpha(),Ge=De.r,qe=De.g,Ue=De.b;Re?(g[0]=Ge,g[1]=qe,g[2]=Ue,g[3]=Ne,A.clearBufferuiv(A.COLOR,0,g)):(v[0]=Ge,v[1]=qe,v[2]=Ue,v[3]=Ne,A.clearBufferiv(A.COLOR,0,v))}else se|=A.COLOR_BUFFER_BIT}K&&(se|=A.DEPTH_BUFFER_BIT),ie&&(se|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),we.dispose(),Ze.dispose(),ge.dispose(),x.dispose(),N.dispose(),te.dispose(),dt.dispose(),Z.dispose(),fe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",oh),ce.removeEventListener("sessionend",ah),Mi.stop()};function de(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let L=ve.autoReset,K=Ie.enabled,ie=Ie.autoUpdate,se=Ie.needsUpdate,$=Ie.type;Te(),ve.autoReset=L,Ie.enabled=K,Ie.autoUpdate=ie,Ie.needsUpdate=se,Ie.type=$}function Ae(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Xe(L){let K=L.target;K.removeEventListener("dispose",Xe),Mt(K)}function Mt(L){Ut(L),ge.remove(L)}function Ut(L){let K=ge.get(L).programs;K!==void 0&&(K.forEach(function(ie){fe.releaseProgram(ie)}),L.isShaderMaterial&&fe.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,ie,se,$,xe){K===null&&(K=W);let Re=$.isMesh&&$.matrixWorld.determinant()<0,De=Bd(L,K,ie,se,$);j.setMaterial(se,Re);let Ne=ie.index,Ge=1;if(se.wireframe===!0){if(Ne=Q.getWireframeAttribute(ie),Ne===void 0)return;Ge=2}let qe=ie.drawRange,Ue=ie.attributes.position,tt=qe.start*Ge,ft=(qe.start+qe.count)*Ge;xe!==null&&(tt=Math.max(tt,xe.start*Ge),ft=Math.min(ft,(xe.start+xe.count)*Ge)),Ne!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Ne.count)):Ue!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Ue.count));let gt=ft-tt;if(gt<0||gt===1/0)return;dt.setup($,se,De,ie,Ne);let Xt,st=Pe;if(Ne!==null&&(Xt=Y.get(Ne),st=Je,st.setIndex(Xt)),$.isMesh)se.wireframe===!0?(j.setLineWidth(se.wireframeLinewidth*q()),st.setMode(A.LINES)):st.setMode(A.TRIANGLES);else if($.isLine){let Fe=se.linewidth;Fe===void 0&&(Fe=1),j.setLineWidth(Fe*q()),$.isLineSegments?st.setMode(A.LINES):$.isLineLoop?st.setMode(A.LINE_LOOP):st.setMode(A.LINE_STRIP)}else $.isPoints?st.setMode(A.POINTS):$.isSprite&&st.setMode(A.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)st.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))st.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Fe=$._multiDrawStarts,Dn=$._multiDrawCounts,rt=$._multiDrawCount,_n=Ne?Y.get(Ne).bytesPerElement:1,Vi=ge.get(se).currentProgram.getUniforms();for(let Qt=0;Qt<rt;Qt++)Vi.setValue(A,"_gl_DrawID",Qt),st.render(Fe[Qt]/_n,Dn[Qt])}else if($.isInstancedMesh)st.renderInstances(tt,gt,$.count);else if(ie.isInstancedBufferGeometry){let Fe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Dn=Math.min(ie.instanceCount,Fe);st.renderInstances(tt,gt,Dn)}else st.render(tt,gt)};function at(L,K,ie){L.transparent===!0&&L.side===At&&L.forceSinglePass===!1?(L.side=Bt,L.needsUpdate=!0,Rr(L,K,ie),L.side=cn,L.needsUpdate=!0,Rr(L,K,ie),L.side=At):Rr(L,K,ie)}this.compile=function(L,K,ie=null){ie===null&&(ie=L),p=Ze.get(ie),p.init(K),y.push(p),ie.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),L!==ie&&L.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let se=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let xe=$.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){let De=xe[Re];at(De,ie,$),se.add(De)}else at(xe,ie,$),se.add(xe)}),y.pop(),p=null,se},this.compileAsync=function(L,K,ie=null){let se=this.compile(L,K,ie);return new Promise($=>{function xe(){if(se.forEach(function(Re){ge.get(Re).currentProgram.isReady()&&se.delete(Re)}),se.size===0){$(L);return}setTimeout(xe,10)}oe.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let gn=null;function Ln(L){gn&&gn(L)}function oh(){Mi.stop()}function ah(){Mi.start()}let Mi=new ed;Mi.setAnimationLoop(Ln),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(L){gn=L,ce.setAnimationLoop(L),L===null?Mi.stop():Mi.start()},ce.addEventListener("sessionstart",oh),ce.addEventListener("sessionend",ah),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(K),K=ce.getCamera()),L.isScene===!0&&L.onBeforeRender(m,L,K,D),p=Ze.get(L,y.length),p.init(K),y.push(p),E.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ae.setFromProjectionMatrix(E),be=this.localClippingEnabled,le=me.init(this.clippingPlanes,be),_=we.get(L,M.length),_.init(),M.push(_),ce.enabled===!0&&ce.isPresenting===!0){let xe=m.xr.getDepthSensingMesh();xe!==null&&ca(xe,K,-1/0,m.sortObjects)}ca(L,K,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(ee,ne),z=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,z&&Le.addToRenderList(_,L),this.info.render.frame++,le===!0&&me.beginShadows();let ie=p.state.shadowsArray;Ie.render(ie,L,K),le===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let se=_.opaque,$=_.transmissive;if(p.setupLights(),K.isArrayCamera){let xe=K.cameras;if($.length>0)for(let Re=0,De=xe.length;Re<De;Re++){let Ne=xe[Re];lh(se,$,L,Ne)}z&&Le.render(L);for(let Re=0,De=xe.length;Re<De;Re++){let Ne=xe[Re];ch(_,L,Ne,Ne.viewport)}}else $.length>0&&lh(se,$,L,K),z&&Le.render(L),ch(_,L,K);D!==null&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),L.isScene===!0&&L.onAfterRender(m,L,K),dt.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],le===!0&&me.setGlobalState(m.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?_=M[M.length-1]:_=null};function ca(L,K,ie,se){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)ie=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ae.intersectsSprite(L)){se&&X.setFromMatrixPosition(L.matrixWorld).applyMatrix4(E);let Re=te.update(L),De=L.material;De.visible&&_.push(L,Re,De,ie,X.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ae.intersectsObject(L))){let Re=te.update(L),De=L.material;if(se&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),X.copy(L.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),X.copy(Re.boundingSphere.center)),X.applyMatrix4(L.matrixWorld).applyMatrix4(E)),Array.isArray(De)){let Ne=Re.groups;for(let Ge=0,qe=Ne.length;Ge<qe;Ge++){let Ue=Ne[Ge],tt=De[Ue.materialIndex];tt&&tt.visible&&_.push(L,Re,tt,ie,X.z,Ue)}}else De.visible&&_.push(L,Re,De,ie,X.z,null)}}let xe=L.children;for(let Re=0,De=xe.length;Re<De;Re++)ca(xe[Re],K,ie,se)}function ch(L,K,ie,se){let $=L.opaque,xe=L.transmissive,Re=L.transparent;p.setupLightsView(ie),le===!0&&me.setGlobalState(m.clippingPlanes,ie),se&&j.viewport(T.copy(se)),$.length>0&&Ar($,K,ie),xe.length>0&&Ar(xe,K,ie),Re.length>0&&Ar(Re,K,ie),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function lh(L,K,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new Xn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?br:Wn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let xe=p.state.transmissionRenderTarget[se.id],Re=se.viewport||T;xe.setSize(Re.z,Re.w);let De=m.getRenderTarget();m.setRenderTarget(xe),m.getClearColor(P),O=m.getClearAlpha(),O<1&&m.setClearColor(16777215,.5),m.clear(),z&&Le.render(ie);let Ne=m.toneMapping;m.toneMapping=ui;let Ge=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),le===!0&&me.setGlobalState(m.clippingPlanes,se),Ar(L,ie,se),I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe),oe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ue=0,tt=K.length;Ue<tt;Ue++){let ft=K[Ue],gt=ft.object,Xt=ft.geometry,st=ft.material,Fe=ft.group;if(st.side===At&&gt.layers.test(se.layers)){let Dn=st.side;st.side=Bt,st.needsUpdate=!0,hh(gt,ie,se,Xt,st,Fe),st.side=Dn,st.needsUpdate=!0,qe=!0}}qe===!0&&(I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe))}m.setRenderTarget(De),m.setClearColor(P,O),Ge!==void 0&&(se.viewport=Ge),m.toneMapping=Ne}function Ar(L,K,ie){let se=K.isScene===!0?K.overrideMaterial:null;for(let $=0,xe=L.length;$<xe;$++){let Re=L[$],De=Re.object,Ne=Re.geometry,Ge=se===null?Re.material:se,qe=Re.group;De.layers.test(ie.layers)&&hh(De,K,ie,Ne,Ge,qe)}}function hh(L,K,ie,se,$,xe){L.onBeforeRender(m,K,ie,se,$,xe),L.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(m,K,ie,se,L,xe),$.transparent===!0&&$.side===At&&$.forceSinglePass===!1?($.side=Bt,$.needsUpdate=!0,m.renderBufferDirect(ie,K,se,$,L,xe),$.side=cn,$.needsUpdate=!0,m.renderBufferDirect(ie,K,se,$,L,xe),$.side=At):m.renderBufferDirect(ie,K,se,$,L,xe),L.onAfterRender(m,K,ie,se,$,xe)}function Rr(L,K,ie){K.isScene!==!0&&(K=W);let se=ge.get(L),$=p.state.lights,xe=p.state.shadowsArray,Re=$.state.version,De=fe.getParameters(L,$.state,xe,K,ie),Ne=fe.getProgramCacheKey(De),Ge=se.programs;se.environment=L.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(L.isMeshStandardMaterial?N:x).get(L.envMap||se.environment),se.envMapRotation=se.environment!==null&&L.envMap===null?K.environmentRotation:L.envMapRotation,Ge===void 0&&(L.addEventListener("dispose",Xe),Ge=new Map,se.programs=Ge);let qe=Ge.get(Ne);if(qe!==void 0){if(se.currentProgram===qe&&se.lightsStateVersion===Re)return dh(L,De),qe}else De.uniforms=fe.getUniforms(L),L.onBeforeCompile(De,m),qe=fe.acquireProgram(De,Ne),Ge.set(Ne,qe),se.uniforms=De.uniforms;let Ue=se.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ue.clippingPlanes=me.uniform),dh(L,De),se.needsLights=zd(L),se.lightsStateVersion=Re,se.needsLights&&(Ue.ambientLightColor.value=$.state.ambient,Ue.lightProbe.value=$.state.probe,Ue.directionalLights.value=$.state.directional,Ue.directionalLightShadows.value=$.state.directionalShadow,Ue.spotLights.value=$.state.spot,Ue.spotLightShadows.value=$.state.spotShadow,Ue.rectAreaLights.value=$.state.rectArea,Ue.ltc_1.value=$.state.rectAreaLTC1,Ue.ltc_2.value=$.state.rectAreaLTC2,Ue.pointLights.value=$.state.point,Ue.pointLightShadows.value=$.state.pointShadow,Ue.hemisphereLights.value=$.state.hemi,Ue.directionalShadowMap.value=$.state.directionalShadowMap,Ue.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ue.spotShadowMap.value=$.state.spotShadowMap,Ue.spotLightMatrix.value=$.state.spotLightMatrix,Ue.spotLightMap.value=$.state.spotLightMap,Ue.pointShadowMap.value=$.state.pointShadowMap,Ue.pointShadowMatrix.value=$.state.pointShadowMatrix),se.currentProgram=qe,se.uniformsList=null,qe}function uh(L){if(L.uniformsList===null){let K=L.currentProgram.getUniforms();L.uniformsList=ds.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function dh(L,K){let ie=ge.get(L);ie.outputColorSpace=K.outputColorSpace,ie.batching=K.batching,ie.batchingColor=K.batchingColor,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.instancingMorph=K.instancingMorph,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function Bd(L,K,ie,se,$){K.isScene!==!0&&(K=W),I.resetTextureUnits();let xe=K.fog,Re=se.isMeshStandardMaterial?K.environment:null,De=D===null?m.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Vt,Ne=(se.isMeshStandardMaterial?N:x).get(se.envMap||Re),Ge=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,qe=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ue=!!ie.morphAttributes.position,tt=!!ie.morphAttributes.normal,ft=!!ie.morphAttributes.color,gt=ui;se.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(gt=m.toneMapping);let Xt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,st=Xt!==void 0?Xt.length:0,Fe=ge.get(se),Dn=p.state.lights;if(le===!0&&(be===!0||L!==S)){let sn=L===S&&se.id===b;me.setState(se,L,sn)}let rt=!1;se.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Dn.state.version||Fe.outputColorSpace!==De||$.isBatchedMesh&&Fe.batching===!1||!$.isBatchedMesh&&Fe.batching===!0||$.isBatchedMesh&&Fe.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Fe.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Fe.instancing===!1||!$.isInstancedMesh&&Fe.instancing===!0||$.isSkinnedMesh&&Fe.skinning===!1||!$.isSkinnedMesh&&Fe.skinning===!0||$.isInstancedMesh&&Fe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Fe.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Fe.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Fe.instancingMorph===!1&&$.morphTexture!==null||Fe.envMap!==Ne||se.fog===!0&&Fe.fog!==xe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==me.numPlanes||Fe.numIntersection!==me.numIntersection)||Fe.vertexAlphas!==Ge||Fe.vertexTangents!==qe||Fe.morphTargets!==Ue||Fe.morphNormals!==tt||Fe.morphColors!==ft||Fe.toneMapping!==gt||Fe.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Fe.__version=se.version);let _n=Fe.currentProgram;rt===!0&&(_n=Rr(se,K,$));let Vi=!1,Qt=!1,Ns=!1,_t=_n.getUniforms(),Tn=Fe.uniforms;if(j.useProgram(_n.program)&&(Vi=!0,Qt=!0,Ns=!0),se.id!==b&&(b=se.id,Qt=!0),Vi||S!==L){j.buffers.depth.getReversed()?(_e.copy(L.projectionMatrix),Kf(_e),$f(_e),_t.setValue(A,"projectionMatrix",_e)):_t.setValue(A,"projectionMatrix",L.projectionMatrix),_t.setValue(A,"viewMatrix",L.matrixWorldInverse);let ei=_t.map.cameraPosition;ei!==void 0&&ei.setValue(A,B.setFromMatrixPosition(L.matrixWorld)),re.logarithmicDepthBuffer&&_t.setValue(A,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&_t.setValue(A,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,Qt=!0,Ns=!0)}if($.isSkinnedMesh){_t.setOptional(A,$,"bindMatrix"),_t.setOptional(A,$,"bindMatrixInverse");let sn=$.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),_t.setValue(A,"boneTexture",sn.boneTexture,I))}$.isBatchedMesh&&(_t.setOptional(A,$,"batchingTexture"),_t.setValue(A,"batchingTexture",$._matricesTexture,I),_t.setOptional(A,$,"batchingIdTexture"),_t.setValue(A,"batchingIdTexture",$._indirectTexture,I),_t.setOptional(A,$,"batchingColorTexture"),$._colorsTexture!==null&&_t.setValue(A,"batchingColorTexture",$._colorsTexture,I));let Us=ie.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&Be.update($,ie,_n),(Qt||Fe.receiveShadow!==$.receiveShadow)&&(Fe.receiveShadow=$.receiveShadow,_t.setValue(A,"receiveShadow",$.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Tn.envMap.value=Ne,Tn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&(Tn.envMapIntensity.value=K.environmentIntensity),Qt&&(_t.setValue(A,"toneMappingExposure",m.toneMappingExposure),Fe.needsLights&&kd(Tn,Ns),xe&&se.fog===!0&&pe.refreshFogUniforms(Tn,xe),pe.refreshMaterialUniforms(Tn,se,H,G,p.state.transmissionRenderTarget[L.id]),ds.upload(A,uh(Fe),Tn,I)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ds.upload(A,uh(Fe),Tn,I),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&_t.setValue(A,"center",$.center),_t.setValue(A,"modelViewMatrix",$.modelViewMatrix),_t.setValue(A,"normalMatrix",$.normalMatrix),_t.setValue(A,"modelMatrix",$.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let sn=se.uniformsGroups;for(let ei=0,ti=sn.length;ei<ti;ei++){let fh=sn[ei];Z.update(fh,_n),Z.bind(fh,_n)}}return _n}function kd(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function zd(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(L,K,ie){ge.get(L.texture).__webglTexture=K,ge.get(L.depthTexture).__webglTexture=ie;let se=ge.get(L);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,K){let ie=ge.get(L);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(L,K=0,ie=0){D=L,w=K,C=ie;let se=!0,$=null,xe=!1,Re=!1;if(L){let Ne=ge.get(L);if(Ne.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(A.FRAMEBUFFER,null),se=!1;else if(Ne.__webglFramebuffer===void 0)I.setupRenderTarget(L);else if(Ne.__hasExternalTextures)I.rebindTextures(L,ge.get(L.texture).__webglTexture,ge.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Ue=L.depthTexture;if(Ne.__boundDepthTexture!==Ue){if(Ue!==null&&ge.has(Ue)&&(L.width!==Ue.image.width||L.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(L)}}let Ge=L.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);let qe=ge.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(qe[K])?$=qe[K][ie]:$=qe[K],xe=!0):L.samples>0&&I.useMultisampledRTT(L)===!1?$=ge.get(L).__webglMultisampledFramebuffer:Array.isArray(qe)?$=qe[ie]:$=qe,T.copy(L.viewport),k.copy(L.scissor),V=L.scissorTest}else T.copy(he).multiplyScalar(H).floor(),k.copy(ye).multiplyScalar(H).floor(),V=Oe;if(j.bindFramebuffer(A.FRAMEBUFFER,$)&&se&&j.drawBuffers(L,$),j.viewport(T),j.scissor(k),j.setScissorTest(V),xe){let Ne=ge.get(L.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ne.__webglTexture,ie)}else if(Re){let Ne=ge.get(L.texture),Ge=K||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ne.__webglTexture,ie||0,Ge)}b=-1},this.readRenderTargetPixels=function(L,K,ie,se,$,xe,Re){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){j.bindFramebuffer(A.FRAMEBUFFER,De);try{let Ne=L.texture,Ge=Ne.format,qe=Ne.type;if(!re.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-se&&ie>=0&&ie<=L.height-$&&A.readPixels(K,ie,se,$,We.convert(Ge),We.convert(qe),xe)}finally{let Ne=D!==null?ge.get(D).__webglFramebuffer:null;j.bindFramebuffer(A.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(L,K,ie,se,$,xe,Re){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){let Ne=L.texture,Ge=Ne.format,qe=Ne.type;if(!re.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=L.width-se&&ie>=0&&ie<=L.height-$){j.bindFramebuffer(A.FRAMEBUFFER,De);let Ue=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.bufferData(A.PIXEL_PACK_BUFFER,xe.byteLength,A.STREAM_READ),A.readPixels(K,ie,se,$,We.convert(Ge),We.convert(qe),0);let tt=D!==null?ge.get(D).__webglFramebuffer:null;j.bindFramebuffer(A.FRAMEBUFFER,tt);let ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Zf(A,ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ue),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,xe),A.deleteBuffer(Ue),A.deleteSync(ft),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,K=null,ie=0){L.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,L=arguments[1]);let se=Math.pow(2,-ie),$=Math.floor(L.image.width*se),xe=Math.floor(L.image.height*se),Re=K!==null?K.x:0,De=K!==null?K.y:0;I.setTexture2D(L,0),A.copyTexSubImage2D(A.TEXTURE_2D,ie,0,0,Re,De,$,xe),j.unbindTexture()},this.copyTextureToTexture=function(L,K,ie=null,se=null,$=0){L.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,L=arguments[1],K=arguments[2],$=arguments[3]||0,ie=null);let xe,Re,De,Ne,Ge,qe,Ue,tt,ft,gt=L.isCompressedTexture?L.mipmaps[$]:L.image;ie!==null?(xe=ie.max.x-ie.min.x,Re=ie.max.y-ie.min.y,De=ie.isBox3?ie.max.z-ie.min.z:1,Ne=ie.min.x,Ge=ie.min.y,qe=ie.isBox3?ie.min.z:0):(xe=gt.width,Re=gt.height,De=gt.depth||1,Ne=0,Ge=0,qe=0),se!==null?(Ue=se.x,tt=se.y,ft=se.z):(Ue=0,tt=0,ft=0);let Xt=We.convert(K.format),st=We.convert(K.type),Fe;K.isData3DTexture?(I.setTexture3D(K,0),Fe=A.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(I.setTexture2DArray(K,0),Fe=A.TEXTURE_2D_ARRAY):(I.setTexture2D(K,0),Fe=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,K.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,K.unpackAlignment);let Dn=A.getParameter(A.UNPACK_ROW_LENGTH),rt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),_n=A.getParameter(A.UNPACK_SKIP_PIXELS),Vi=A.getParameter(A.UNPACK_SKIP_ROWS),Qt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,gt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,gt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ne),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ge),A.pixelStorei(A.UNPACK_SKIP_IMAGES,qe);let Ns=L.isDataArrayTexture||L.isData3DTexture,_t=K.isDataArrayTexture||K.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){let Tn=ge.get(L),Us=ge.get(K),sn=ge.get(Tn.__renderTarget),ei=ge.get(Us.__renderTarget);j.bindFramebuffer(A.READ_FRAMEBUFFER,sn.__webglFramebuffer),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ti=0;ti<De;ti++)Ns&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(L).__webglTexture,$,qe+ti),L.isDepthTexture?(_t&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(K).__webglTexture,$,ft+ti),A.blitFramebuffer(Ne,Ge,xe,Re,Ue,tt,xe,Re,A.DEPTH_BUFFER_BIT,A.NEAREST)):_t?A.copyTexSubImage3D(Fe,$,Ue,tt,ft+ti,Ne,Ge,xe,Re):A.copyTexSubImage2D(Fe,$,Ue,tt,ft+ti,Ne,Ge,xe,Re);j.bindFramebuffer(A.READ_FRAMEBUFFER,null),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else _t?L.isDataTexture||L.isData3DTexture?A.texSubImage3D(Fe,$,Ue,tt,ft,xe,Re,De,Xt,st,gt.data):K.isCompressedArrayTexture?A.compressedTexSubImage3D(Fe,$,Ue,tt,ft,xe,Re,De,Xt,gt.data):A.texSubImage3D(Fe,$,Ue,tt,ft,xe,Re,De,Xt,st,gt):L.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,$,Ue,tt,xe,Re,Xt,st,gt.data):L.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,$,Ue,tt,gt.width,gt.height,Xt,gt.data):A.texSubImage2D(A.TEXTURE_2D,$,Ue,tt,xe,Re,Xt,st,gt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Dn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,_n),A.pixelStorei(A.UNPACK_SKIP_ROWS,Vi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Qt),$===0&&K.generateMipmaps&&A.generateMipmap(Fe),j.unbindTexture()},this.copyTextureToTexture3D=function(L,K,ie=null,se=null,$=0){return L.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,L=arguments[2],K=arguments[3],$=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,K,ie,se,$)},this.initRenderTarget=function(L){ge.get(L).__webglFramebuffer===void 0&&I.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),j.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,j.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var vo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Di=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gt=new F,or=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var du=new F,fu=new it,pu=new it,W_=new F,mu=new ze,Kr=new F,Oa=new nn,gu=new ze,Fa=new qn,Mo=class extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingBox.expandByPoint(Kr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Kr),this.boundingSphere.expandByPoint(Kr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oa.copy(this.boundingSphere),Oa.applyMatrix4(i),e.ray.intersectsSphere(Oa)!==!1&&(gu.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(gu),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;fu.fromBufferAttribute(i.attributes.skinIndex,e),pu.fromBufferAttribute(i.attributes.skinWeight,e),du.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=pu.getComponent(r);if(o!==0){let a=fu.getComponent(r);mu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(W_.copy(du).applyMatrix4(mu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ar=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},bo=class extends Lt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=kt,h=kt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_u=new ze,X_=new ze,So=class s{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:X_;_u.multiplyMatrices(a,t[r]),_u.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new bo(t,e,e,on,Sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ar),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ni=class extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},is=new ze,xu=new ze,$r=[],yu=new ln,q_=new ze,zs=new Se,Hs=new nn,Eo=class extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,q_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),yu.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(yu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Hs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,is),xu.multiplyMatrices(n,is),zs.matrixWorld=xu,zs.raycast(e,$r);for(let o=0,a=$r.length;o<a;o++){let c=$r[o];c.instanceId=r,c.object=this,t.push(c)}$r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(i*this.count),i,this.count,_l,Sn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var cr=class extends Zt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},To=new F,wo=new F,vu=new ze,Vs=new qn,jr=new nn,Ba=new F,Mu=new F,Es=class extends yt{constructor(e=new vt,t=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)To.fromBufferAttribute(t,i-1),wo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=To.distanceTo(wo);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;vu.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(vu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,_=g-1;v<_;v+=l){let p=h.getX(v),M=h.getX(v+1),y=Jr(this,e,Vs,c,p,M);y&&t.push(y)}if(this.isLineLoop){let v=h.getX(g-1),_=h.getX(f),p=Jr(this,e,Vs,c,v,_);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,_=g-1;v<_;v+=l){let p=Jr(this,e,Vs,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=Jr(this,e,Vs,c,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jr(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(To.fromBufferAttribute(o,i),wo.fromBufferAttribute(o,r),t.distanceSqToSegment(To,wo,Ba,Mu)>n)return;Ba.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ba);if(!(c<e.near||c>e.far))return{distance:c,point:Mu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var bu=new F,Su=new F,Ao=class extends Es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bu.fromBufferAttribute(t,i),Su.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bu.distanceTo(Su);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ro=class extends Es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},lr=class extends Zt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Eu=new ze,Wc=new qn,Qr=new nn,eo=new F,Co=class extends yt{constructor(e=new vt,t=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;Eu.copy(i).invert(),Wc.copy(e.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let _=l.getX(g);eo.fromBufferAttribute(u,_),Tu(eo,_,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)eo.fromBufferAttribute(u,g),Tu(eo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tu(s,e,t,n,i,r,o){let a=Wc.distanceSqToPoint(s);if(a<t){let c=new F;Wc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var zt=class extends Lt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ue:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,i=[],r=[],o=[],a=new F,c=new ze;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Tt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Tt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hr=class extends hn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xc=class extends hr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function El(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var to=new F,ka=new El,za=new El,Ha=new El,Ts=class extends hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(to.subVectors(i[0],i[1]).add(i[0]),l=to);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(to.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=to),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),_<1e-4&&(_=v),ka.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,_),za.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,_),Ha.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,_)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),za.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ha.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ka.calc(c),za.calc(c),Ha.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wu(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Y_(s,e){let t=1-s;return t*t*e}function Z_(s,e){return 2*(1-s)*s*e}function K_(s,e){return s*s*e}function $s(s,e,t,n){return Y_(s,e)+Z_(s,t)+K_(s,n)}function $_(s,e){let t=1-s;return t*t*t*e}function j_(s,e){let t=1-s;return 3*t*t*s*e}function J_(s,e){return 3*(1-s)*s*s*e}function Q_(s,e){return s*s*s*e}function js(s,e,t,n,i){return $_(s,e)+j_(s,t)+J_(s,n)+Q_(s,i)}var Io=class extends hn{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(e,i.x,r.x,o.x,a.x),js(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qc=class extends hn{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(e,i.x,r.x,o.x,a.x),js(e,i.y,r.y,o.y,a.y),js(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Po=class extends hn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yc=class extends hn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends hn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set($s(e,i.x,r.x,o.x),$s(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends hn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set($s(e,i.x,r.x,o.x),$s(e,i.y,r.y,o.y),$s(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(wu(a,c.x,l.x,h.x,u.x),wu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:Xc,CatmullRomCurve3:Ts,CubicBezierCurve:Io,CubicBezierCurve3:qc,EllipseCurve:hr,LineCurve:Po,LineCurve3:Yc,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:Do,SplineCurve:No}),Zc=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Uo[i.type]().fromJSON(i))}return this}},Oo=class extends Zc{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Po(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Lo(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Io(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new hr(e,t,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fo=class s extends vt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new F,d=new ue,f=new F,g=new F,v=new F,_=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:_=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-_,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:_=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-_,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){let y=n+M*h*i,m=Math.sin(y),R=Math.cos(y);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*m,u.y=e[w].y,u.z=e[w].x*R,o.push(u.x,u.y,u.z),d.x=M/t,d.y=w/(e.length-1),a.push(d.x,d.y);let C=c[3*w+0]*m,D=c[3*w+1],b=c[3*w+0]*R;l.push(C,D,b)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){let m=y+M*e.length,R=m,w=m+e.length,C=m+e.length+1,D=m+1;r.push(R,w,D),r.push(C,D,w)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ht=class s extends vt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],_=n/2,p=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function M(){let m=new F,R=new F,w=0,C=(t-e)/n;for(let D=0;D<=r;D++){let b=[],S=D/r,T=S*(t-e)+e;for(let k=0;k<=i;k++){let V=k/i,P=V*c+a,O=Math.sin(P),U=Math.cos(P);R.x=T*O,R.y=-S*n+_,R.z=T*U,u.push(R.x,R.y,R.z),m.set(O,C,U).normalize(),d.push(m.x,m.y,m.z),f.push(V,1-S),b.push(g++)}v.push(b)}for(let D=0;D<i;D++)for(let b=0;b<r;b++){let S=v[b][D],T=v[b+1][D],k=v[b+1][D+1],V=v[b][D+1];(e>0||b!==0)&&(h.push(S,T,V),w+=3),(t>0||b!==r-1)&&(h.push(T,k,V),w+=3)}l.addGroup(p,w,0),p+=w}function y(m){let R=g,w=new ue,C=new F,D=0,b=m===!0?e:t,S=m===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,_*S,0),d.push(0,S,0),f.push(.5,.5),g++;let T=g;for(let k=0;k<=i;k++){let P=k/i*c+a,O=Math.cos(P),U=Math.sin(P);C.x=b*U,C.y=_*S,C.z=b*O,u.push(C.x,C.y,C.z),d.push(0,S,0),w.x=O*.5+.5,w.y=U*.5*S+.5,f.push(w.x,w.y),g++}for(let k=0;k<i;k++){let V=R+k,P=T+k;m===!0?h.push(P,P+1,V):h.push(P+1,P,V),D+=3}l.addGroup(p,D,m===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ur=class s extends Ht{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kc=class s extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new F,m=new F,R=new F;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],m),f(t[w+2],R),c(y,m,R,M)}function c(M,y,m,R){let w=R+1,C=[];for(let D=0;D<=w;D++){C[D]=[];let b=M.clone().lerp(m,D/w),S=y.clone().lerp(m,D/w),T=w-D;for(let k=0;k<=T;k++)k===0&&D===w?C[D][k]=b:C[D][k]=b.clone().lerp(S,k/T)}for(let D=0;D<w;D++)for(let b=0;b<2*(w-D)-1;b++){let S=Math.floor(b/2);b%2===0?(d(C[D][S+1]),d(C[D+1][S]),d(C[D][S])):(d(C[D][S+1]),d(C[D+1][S+1]),d(C[D+1][S]))}}function l(M){let y=new F;for(let m=0;m<r.length;m+=3)y.x=r[m+0],y.y=r[m+1],y.z=r[m+2],y.normalize().multiplyScalar(M),r[m+0]=y.x,r[m+1]=y.y,r[m+2]=y.z}function h(){let M=new F;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let m=_(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;o.push(m,1-R)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],m=o[M+2],R=o[M+4],w=Math.max(y,m,R),C=Math.min(y,m,R);w>.9&&C<.1&&(y<.2&&(o[M+0]+=1),m<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){let m=M*3;y.x=e[m+0],y.y=e[m+1],y.z=e[m+2]}function g(){let M=new F,y=new F,m=new F,R=new F,w=new ue,C=new ue,D=new ue;for(let b=0,S=0;b<r.length;b+=9,S+=6){M.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),m.set(r[b+6],r[b+7],r[b+8]),w.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),R.copy(M).add(y).add(m).divideScalar(3);let T=_(R);v(w,S+0,M,T),v(C,S+2,y,T),v(D,S+4,m,T)}}function v(M,y,m,R){R<0&&M.x===1&&(o[y]=M.x-1),m.x===0&&m.z===0&&(o[y]=R/2/Math.PI+.5)}function _(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var ws=class extends Oo{constructor(e){super(e),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Oo().fromJSON(i))}return this}},ex={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=rd(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=rx(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return dr(r,o,t,a,c,f,0),o}};function rd(s,e,t,n,i){let r,o;if(i===gx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Au(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Au(r,s[r],s[r+1],o);return o&&ea(o,o.next)&&(pr(o),o=o.next),o}function Ui(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ea(t,t.next)||xt(t.prev,t,t.next)===0)){if(pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function dr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&hx(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?nx(s,n,i,r):tx(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),pr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ix(Ui(s),e,t),dr(s,e,t,n,i,r,2)):o===2&&sx(s,e,t,n,i,r):dr(Ui(s),e,t,n,i,r,1);break}}}function tx(s){let e=s.prev,t=s,n=s.next;if(xt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&cs(i,a,r,c,o,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nx(s,e,t,n){let i=s.prev,r=s,o=s.next;if(xt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,_=h>u?h>d?h:d:u>d?u:d,p=$c(f,g,e,t,n),M=$c(v,_,e,t,n),y=s.prevZ,m=s.nextZ;for(;y&&y.z>=p&&m&&m.z<=M;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=_&&y!==i&&y!==o&&cs(a,h,c,u,l,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0||(y=y.prevZ,m.x>=f&&m.x<=v&&m.y>=g&&m.y<=_&&m!==i&&m!==o&&cs(a,h,c,u,l,d,m.x,m.y)&&xt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=_&&y!==i&&y!==o&&cs(a,h,c,u,l,d,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;m&&m.z<=M;){if(m.x>=f&&m.x<=v&&m.y>=g&&m.y<=_&&m!==i&&m!==o&&cs(a,h,c,u,l,d,m.x,m.y)&&xt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function ix(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!ea(i,r)&&od(i,n,n.next,r)&&fr(i,r)&&fr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),pr(n),pr(n.next),n=s=r),n=n.next}while(n!==s);return Ui(n)}function sx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fx(o,a)){let c=ad(o,a);o=Ui(o,o.next),c=Ui(c,c.next),dr(o,e,t,n,i,r,0),dr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function rx(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=rd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(dx(l));for(i.sort(ox),r=0;r<i.length;r++)t=ax(i[r],t);return t}function ox(s,e){return s.x-e.x}function ax(s,e){let t=cx(s,e);if(!t)return e;let n=ad(t,s);return Ui(n,n.next),Ui(t,t.next)}function cx(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&cs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),fr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&lx(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function lx(s,e){return xt(s.prev,s,e.prev)<0&&xt(e.next,s,s.next)<0}function hx(s,e,t,n){let i=s;do i.z===0&&(i.z=$c(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ux(i)}function ux(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function $c(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function dx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function cs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function fx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!px(s,e)&&(fr(s,e)&&fr(e,s)&&mx(s,e)&&(xt(s.prev,s,e.prev)||xt(s,e.prev,e))||ea(s,e)&&xt(s.prev,s,s.next)>0&&xt(e.prev,e,e.next)>0)}function xt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ea(s,e){return s.x===e.x&&s.y===e.y}function od(s,e,t,n){let i=io(xt(s,e,t)),r=io(xt(s,e,n)),o=io(xt(t,n,s)),a=io(xt(t,n,e));return!!(i!==r&&o!==a||i===0&&no(s,t,e)||r===0&&no(s,n,e)||o===0&&no(t,s,n)||a===0&&no(t,e,n))}function no(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function io(s){return s>0?1:s<0?-1:0}function px(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&od(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function fr(s,e){return xt(s.prev,s,s.next)<0?xt(s,e,s.next)>=0&&xt(s,s.prev,e)>=0:xt(s,e,s.prev)<0||xt(s,s.next,e)<0}function mx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ad(s,e){let t=new jc(s.i,s.x,s.y),n=new jc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Au(s,e,t,n){let i=new jc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Js=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ru(e),Cu(n,e);let o=e.length;t.forEach(Ru);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Cu(n,t[c]);let a=ex.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ru(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Cu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var mr=class s extends vt{constructor(e=new ws([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new $e(i,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:_x,y,m=!1,R,w,C,D;p&&(y=p.getSpacedPoints(h),m=!0,d=!1,R=p.computeFrenetFrames(h,!1),w=new F,C=new F,D=new F),d||(_=0,f=0,g=0,v=0);let b=a.extractPoints(l),S=b.shape,T=b.holes;if(!Js.isClockWise(S)){S=S.reverse();for(let z=0,q=T.length;z<q;z++){let A=T[z];Js.isClockWise(A)&&(T[z]=A.reverse())}}let V=Js.triangulateShape(S,T),P=S;for(let z=0,q=T.length;z<q;z++){let A=T[z];S=S.concat(A)}function O(z,q,A){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(q,A)}let U=S.length,G=V.length;function H(z,q,A){let J,oe,re,j=z.x-q.x,ve=z.y-q.y,ge=A.x-z.x,I=A.y-z.y,x=j*j+ve*ve,N=j*I-ve*ge;if(Math.abs(N)>Number.EPSILON){let Y=Math.sqrt(x),Q=Math.sqrt(ge*ge+I*I),te=q.x-ve/Y,fe=q.y+j/Y,pe=A.x-I/Q,we=A.y+ge/Q,Ze=((pe-te)*I-(we-fe)*ge)/(j*I-ve*ge);J=te+j*Ze-z.x,oe=fe+ve*Ze-z.y;let me=J*J+oe*oe;if(me<=2)return new ue(J,oe);re=Math.sqrt(me/2)}else{let Y=!1;j>Number.EPSILON?ge>Number.EPSILON&&(Y=!0):j<-Number.EPSILON?ge<-Number.EPSILON&&(Y=!0):Math.sign(ve)===Math.sign(I)&&(Y=!0),Y?(J=-ve,oe=j,re=Math.sqrt(x)):(J=j,oe=ve,re=Math.sqrt(x/2))}return new ue(J/re,oe/re)}let ee=[];for(let z=0,q=P.length,A=q-1,J=z+1;z<q;z++,A++,J++)A===q&&(A=0),J===q&&(J=0),ee[z]=H(P[z],P[A],P[J]);let ne=[],he,ye=ee.concat();for(let z=0,q=T.length;z<q;z++){let A=T[z];he=[];for(let J=0,oe=A.length,re=oe-1,j=J+1;J<oe;J++,re++,j++)re===oe&&(re=0),j===oe&&(j=0),he[J]=H(A[J],A[re],A[j]);ne.push(he),ye=ye.concat(he)}for(let z=0;z<_;z++){let q=z/_,A=f*Math.cos(q*Math.PI/2),J=g*Math.sin(q*Math.PI/2)+v;for(let oe=0,re=P.length;oe<re;oe++){let j=O(P[oe],ee[oe],J);_e(j.x,j.y,-A)}for(let oe=0,re=T.length;oe<re;oe++){let j=T[oe];he=ne[oe];for(let ve=0,ge=j.length;ve<ge;ve++){let I=O(j[ve],he[ve],J);_e(I.x,I.y,-A)}}}let Oe=g+v;for(let z=0;z<U;z++){let q=d?O(S[z],ye[z],Oe):S[z];m?(C.copy(R.normals[0]).multiplyScalar(q.x),w.copy(R.binormals[0]).multiplyScalar(q.y),D.copy(y[0]).add(C).add(w),_e(D.x,D.y,D.z)):_e(q.x,q.y,0)}for(let z=1;z<=h;z++)for(let q=0;q<U;q++){let A=d?O(S[q],ye[q],Oe):S[q];m?(C.copy(R.normals[z]).multiplyScalar(A.x),w.copy(R.binormals[z]).multiplyScalar(A.y),D.copy(y[z]).add(C).add(w),_e(D.x,D.y,D.z)):_e(A.x,A.y,u/h*z)}for(let z=_-1;z>=0;z--){let q=z/_,A=f*Math.cos(q*Math.PI/2),J=g*Math.sin(q*Math.PI/2)+v;for(let oe=0,re=P.length;oe<re;oe++){let j=O(P[oe],ee[oe],J);_e(j.x,j.y,u+A)}for(let oe=0,re=T.length;oe<re;oe++){let j=T[oe];he=ne[oe];for(let ve=0,ge=j.length;ve<ge;ve++){let I=O(j[ve],he[ve],J);m?_e(I.x,I.y+y[h-1].y,y[h-1].x+A):_e(I.x,I.y,u+A)}}}ae(),le();function ae(){let z=i.length/3;if(d){let q=0,A=U*q;for(let J=0;J<G;J++){let oe=V[J];E(oe[2]+A,oe[1]+A,oe[0]+A)}q=h+_*2,A=U*q;for(let J=0;J<G;J++){let oe=V[J];E(oe[0]+A,oe[1]+A,oe[2]+A)}}else{for(let q=0;q<G;q++){let A=V[q];E(A[2],A[1],A[0])}for(let q=0;q<G;q++){let A=V[q];E(A[0]+U*h,A[1]+U*h,A[2]+U*h)}}n.addGroup(z,i.length/3-z,0)}function le(){let z=i.length/3,q=0;be(P,q),q+=P.length;for(let A=0,J=T.length;A<J;A++){let oe=T[A];be(oe,q),q+=oe.length}n.addGroup(z,i.length/3-z,1)}function be(z,q){let A=z.length;for(;--A>=0;){let J=A,oe=A-1;oe<0&&(oe=z.length-1);for(let re=0,j=h+_*2;re<j;re++){let ve=U*re,ge=U*(re+1),I=q+J+ve,x=q+oe+ve,N=q+oe+ge,Y=q+J+ge;B(I,x,N,Y)}}}function _e(z,q,A){c.push(z),c.push(q),c.push(A)}function E(z,q,A){X(z),X(q),X(A);let J=i.length/3,oe=M.generateTopUV(n,i,J-3,J-2,J-1);W(oe[0]),W(oe[1]),W(oe[2])}function B(z,q,A,J){X(z),X(q),X(J),X(q),X(A),X(J);let oe=i.length/3,re=M.generateSideWallUV(n,i,oe-6,oe-3,oe-2,oe-1);W(re[0]),W(re[1]),W(re[3]),W(re[1]),W(re[2]),W(re[3])}function X(z){i.push(c[z*3+0]),i.push(c[z*3+1]),i.push(c[z*3+2])}function W(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Uo[i.type]().fromJSON(i)),new s(n,e.options)}},_x={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ue(r,o),new ue(a,c),new ue(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[r*3],_=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ue(o,1-c),new ue(l,1-u),new ue(d,1-g),new ue(v,1-p)]:[new ue(a,1-c),new ue(h,1-u),new ue(f,1-g),new ue(_,1-p)]}};function xx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var gr=class s extends Kc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Bo=class s extends vt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/i,f=new F,g=new ue;for(let v=0;v<=i;v++){for(let _=0;_<=n;_++){let p=r+_/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<i;v++){let _=v*(n+1);for(let p=0;p<n;p++){let M=p+_,y=M,m=M+n+1,R=M+n+2,w=M+1;a.push(y,m,w),a.push(m,R,w)}}this.setIndex(a),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var di=class s extends vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new F,d=new F,f=[],g=[],v=[],_=[];for(let p=0;p<=n;p++){let M=[],y=p/n,m=0;p===0&&o===0?m=.5/t:p===n&&c===Math.PI&&(m=-.5/t);for(let R=0;R<=t;R++){let w=R/t;u.x=-e*Math.cos(i+w*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),_.push(w+m,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let y=h[p][M+1],m=h[p][M],R=h[p+1][M],w=h[p+1][M+1];(p!==0||o>0)&&f.push(y,m,w),(p!==n-1||c<Math.PI)&&f.push(m,R,w)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var As=class s extends vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new F,u=new F,d=new F;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let v=g/i*r,_=f/n*Math.PI*2;u.x=(e+t*Math.cos(_))*Math.cos(v),u.y=(e+t*Math.cos(_))*Math.sin(v),u.z=t*Math.sin(_),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let v=(i+1)*f+g-1,_=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(v,_,M),o.push(_,p,M)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var _r=class s extends vt{constructor(e=new Do(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,c=new F,l=new ue,h=new F,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function v(){for(let y=0;y<t;y++)_(y);_(r===!1?t:0),M(),p()}function _(y){h=e.getPointAt(y/t,h);let m=o.normals[y],R=o.binormals[y];for(let w=0;w<=i;w++){let C=w/i*Math.PI*2,D=Math.sin(C),b=-Math.cos(C);c.x=b*m.x+D*R.x,c.y=b*m.y+D*R.y,c.z=b*m.z+D*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let m=1;m<=i;m++){let R=(i+1)*(y-1)+(m-1),w=(i+1)*y+(m-1),C=(i+1)*y+m,D=(i+1)*(y-1)+m;g.push(R,w,D),g.push(w,C,D)}}function M(){for(let y=0;y<=t;y++)for(let m=0;m<=i;m++)l.x=y/t,l.y=m/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ko=class extends Zt{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Ve=class extends Zt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ku,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},mt=class extends Ve{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function so(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Iu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function cd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var fi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends fi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rs,endingEnd:rs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case os:r=e,a=2*t-n;break;case ho:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case os:o=e,c=2*n-t;break;case ho:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,_=v*g,p=-d*_+2*d*v-d*g,M=(1+d)*_+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-f)*_+(1.5+f)*v+.5*g,m=f*_-f*v;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+M*o[l+R]+y*o[c+R]+m*o[u+R];return r}},zo=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Qc=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xs:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xs;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&yx(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=ys;var pi=class extends un{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=xs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends un{};Ho.prototype.ValueTypeName="color";var Yn=class extends un{};Yn.prototype.ValueTypeName="number";var el=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let h=l+a;l!==h;l+=4)Dt.slerpFlat(r,0,o,l-a,o,l,c);return r}},dn=class extends un{InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}};dn.prototype.ValueTypeName="quaternion";dn.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends un{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=xs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends un{};Zn.prototype.ValueTypeName="vector";var Kn=class{constructor(e="",t=-1,n=[],i=Ml){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=vx(c);c=Iu(c,1,h),l=Iu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Yn(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,v){if(f.length!==0){let _=[],p=[];cd(f,_,p,g),_.length!==0&&v.push(new u(d,_,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(let v in f){let _=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){let y=d[g];_.push(y.time),p.push(y.morphTarget===v?1:0)}i.push(new Yn(".morphTargetInfluence["+v+"]",_,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(Zn,f+".position",d,"pos",i),n(dn,f+".quaternion",d,"rot",i),n(Zn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Mx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return Zn;case"color":return Ho;case"quaternion":return dn;case"bool":case"boolean":return pi;case"string":return mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function bx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Mx(s.type);if(s.times===void 0){let t=[],n=[];cd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var li={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},tl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Sx=new tl,$n=class{constructor(e){this.manager=e!==void 0?e:Sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$n.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn={},nl=class extends Error{constructor(e,t){super(e),this.response=t}},xr=class extends $n{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:i});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=kn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,_=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:m})=>{if(y)p.close();else{v+=m.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,C=h.length;w<C;w++){let D=h[w];D.onProgress&&D.onProgress(R)}p.enqueue(m),M()}},y=>{p.error(y)})}}});return new Response(_)}else throw new nl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{li.add(e,l);let h=kn[e];delete kn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=kn[e];if(h===void 0)throw this.manager.itemError(e),l;delete kn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var il=class extends $n{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=tr("img");function c(){h(),li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Vo=class extends $n{constructor(e){super(e)}load(e,t,n,i){let r=new Lt,o=new il(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Oi=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yr=class extends Oi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Va=new ze,Pu=new F,Lu=new F,vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pu),Lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lu),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sl=class extends vr{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Go=class extends Oi{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Du=new ze,Gs=new F,Ga=new F,rl=class extends vr{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),Ga.copy(n.position),Ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ga),n.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du)}},Rs=class extends Oi{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ol=class extends vr{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends Oi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new ol}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wo=class extends Oi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var gi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Xo=class extends $n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=li.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return li.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),li.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(e,c),r.manager.itemStart(e)}};var al=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Dt.multiplyQuaternionsFlat(e,o,e,t,e,n),Dt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},Tl="\\[\\]\\.:\\/",Ex=new RegExp("["+Tl+"]","g"),wl="[^"+Tl+"]",Tx="[^"+Tl.replace("\\.","")+"]",wx=/((?:WC+[\/:])*)/.source.replace("WC",wl),Ax=/(WCOD+)?/.source.replace("WCOD",Tx),Rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),Cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),Ix=new RegExp("^"+wx+Ax+Rx+Cx+"$"),Px=["material","materials","bones","map"],cl=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ex,"")}static parseTrackName(e){let t=Ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Px.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=cl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ll=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:rs,endingEnd:rs};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=xf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case vf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Ml:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===yf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===_f){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=os,i.endingEnd=os):(e?i.endingStart=this.zeroSlopeAtStart?os:rs:i.endingStart=ho,t?i.endingEnd=this.zeroSlopeAtEnd?os:rs:i.endingEnd=ho)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Lx=new Float32Array(1),qo=class extends Rn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;g=new al(ut.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new zo(new Float32Array(2),new Float32Array(2),1,Lx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?Kn.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ml),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new ll(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Kn.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Nu=new ze,Yo=class{constructor(e,t,n=0,i=1/0){this.ray=new qn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(e,t=!0,n=[]){return hl(e,this,n,t),n.sort(Uu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)hl(e[i],this,n,t);return n.sort(Uu),n}};function Uu(s,e){return s.distance-e.distance}function hl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)hl(r[o],e,t,!0)}}var Mr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Zo=class extends Rn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);var ld={type:"change"},Rl={type:"start"},ud={type:"end"},ta=new qn,hd=new Mn,Dx=Math.cos(70*Cs.DEG2RAD),It=new F,jt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Al=1e-6,na=class extends Zo{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Dt,this._lastTargetPosition=new F,this._quat=new Dt().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mr,this._sphericalDelta=new Mr,this._scale=1,this._panOffset=new F,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new F,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ux.bind(this),this._onPointerDown=Nx.bind(this),this._onPointerUp=Ox.bind(this),this._onContextMenu=Gx.bind(this),this._onMouseWheel=kx.bind(this),this._onKeyDown=zx.bind(this),this._onTouchStart=Hx.bind(this),this._onTouchMove=Vx.bind(this),this._onMouseDown=Fx.bind(this),this._onMouseMove=Bx.bind(this),this._interceptControlDown=Wx.bind(this),this._interceptControlUp=Xx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ld),this.update(),this.state=ht.NONE}update(e=null){let t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=jt:n>Math.PI&&(n-=jt),i<-Math.PI?i+=jt:i>Math.PI&&(i-=jt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=It.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ta.origin.copy(this.object.position),ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ta.direction))<Dx?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ta.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Al||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Al||this._lastTargetPosition.distanceToSquared(this.target)>Al?(this.dispatchEvent(ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jt/60*this.autoRotateSpeed*e:jt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;It.copy(i).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Nx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Ux(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ox(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=ht.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fx(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ht.DOLLY;break;case Bi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ht.ROTATE}break;case Bi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Rl)}function Bx(s){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function kx(s){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(s.preventDefault(),this.dispatchEvent(Rl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ud))}function zx(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Hx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ht.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ht.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Rl)}function Vx(s){switch(this._trackPointer(s),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ht.NONE}}function Gx(s){this.enabled!==!1&&s.preventDefault()}function Wx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jn(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new vt,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=dd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);let g=dd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function dd(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new bt(o,t,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Cl(s,e){if(e===Zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Sr||e===jo){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Sr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var ia=class extends $n{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ol(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new Yl(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new kl(t)}),this.register(function(t){return new zl(t)}),this.register(function(t){return new Hl(t)}),this.register(function(t){return new Vl(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Gl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new Xl(t)}),this.register(function(t){return new Wl(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new $l(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=gi.extractUrlBase(e);o=gi.resolveURL(l,this.path)}else o=gi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new xr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_d){try{o[je.KHR_BINARY_GLTF]=new jl(e)}catch(u){i&&i(u);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new sh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new Nl;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new Jl(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new Ql;break;case je.KHR_MESH_QUANTIZATION:o[u]=new eh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function qx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Dl=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ke(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Vt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Fi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Rs(h),l.distance=u;break;case"spot":l=new Go(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Nl=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Kt}extendParams(e,t,n){let i=[];e.color=new ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Vt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}},Ul=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ol=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(r)}},Fl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Bl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},kl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Vt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,nt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},zl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Hl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],Vt),Promise.all(r)}},Vl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Gl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],Vt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,nt)),Promise.all(r)}},Wl=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Xl=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},ql=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Yl=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Zl=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Kl=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},$l=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==fn.TRIANGLES&&l.mode!==fn.TRIANGLE_STRIP&&l.mode!==fn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let v=new ze,_=new F,p=new Dt,M=new F(1,1,1),y=new Eo(g.geometry,g.material,d);for(let m=0;m<d;m++)c.TRANSLATION&&_.fromBufferAttribute(c.TRANSLATION,m),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,m),c.SCALE&&M.fromBufferAttribute(c.SCALE,m),y.setMatrixAt(m,v.compose(_,p,M));for(let m in c)if(m==="_COLOR_0"){let R=c[m];y.instanceColor=new Ni(R.array,R.itemSize,R.normalized)}else m!=="TRANSLATION"&&m!=="ROTATION"&&m!=="SCALE"&&g.geometry.setAttribute(m,c[m]);yt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},_d="glTF",Er=12,fd={JSON:1313821514,BIN:5130562},jl=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Er,r=new DataView(e,Er),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===fd.JSON){let l=new Uint8Array(e,Er+o,a);this.content=n.decode(l)}else if(c===fd.BIN){let l=Er+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Jl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=nh[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=nh[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ps[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],_=c[g];_!==void 0&&(v.normalized=_)}u(f)},a,l,Vt,d)})})}},Ql=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},eh=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},sa=class extends fi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,v=g-l,_=-2*f+3*d,p=f-d,M=1-_,y=p-d+u;for(let m=0;m!==a;m++){let R=o[v+m+a],w=o[v+m+c]*h,C=o[g+m+a],D=o[g+m]*h;r[m]=M*R+y*w+_*C+p*D}return r}},Yx=new Dt,th=class extends sa{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Yx.fromArray(r).normalize().toArray(r),r}},fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pd={9728:kt,9729:qt,9984:fl,9985:qs,9986:ss,9987:An},md={33071:Hn,33648:Qs,10497:Yt},Il={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zx={CUBICSPLINE:void 0,LINEAR:ys,STEP:xs},Pl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ve({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cn})),s.DefaultMaterial}function zi(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $x(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function jx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jx(s){let e,t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ll(t.attributes):e=s.indices+":"+Ll(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ll(s.targets[n]);return e}function Ll(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ih(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ey=new ze,sh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Vo(this.options.manager):this.textureLoader=new Xo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return zi(r,a,i),Jn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(gi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Il[i.type],a=Ps[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new bt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Il[i.type],l=Ps[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,v,_;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,y=t.cache.get(M);y||(v=new l(a,p*f,i.count*f/h),y=new rr(v,f/h),t.cache.add(M,y)),_=new or(y,c,d%f/h,g)}else a===null?v=new l(i.count*c):v=new l(a,d,i.count*c),_=new bt(v,c,g);if(i.sparse!==void 0){let p=Il.SCALAR,M=Ps[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,m=i.sparse.values.byteOffset||0,R=new M(o[1],y,i.sparse.count*p),w=new l(o[2],m,i.sparse.count*c);a!==null&&(_=new bt(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let C=0,D=R.length;C<D;C++){let b=R[C];if(_.setX(b,w[C*c]),c>=2&&_.setY(b,w[C*c+1]),c>=3&&_.setZ(b,w[C*c+2]),c>=4&&_.setW(b,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=g}return _})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=pd[d.magFilter]||qt,h.minFilter=pd[d.minFilter]||An,h.wrapS=md[d.wrapS]||Yt,h.wrapT=md[d.wrapT]||Yt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==qt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){let _=new Lt(v);_.needsUpdate=!0,d(_)}),t.load(gi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Jn(u,o),u.userData.mimeType=o.mimeType||Qx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new lr,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new cr,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ve}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let u=i[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Vt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=At);let h=r.alphaMode||Pl.OPAQUE;if(h===Pl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Pl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Kt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ue(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Kt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Kt){let u=r.emissiveFactor;a.emissive=new ke().setRGB(u[0],u[1],u[2],Vt)}return r.emissiveTexture!==void 0&&o!==Kt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&zi(i,u,r),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return gd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Jx(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=gd(new vt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Kx(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],_=o[f],p,M=l[f];if(_.mode===fn.TRIANGLES||_.mode===fn.TRIANGLE_STRIP||_.mode===fn.TRIANGLE_FAN||_.mode===void 0)p=r.isSkinnedMesh===!0?new Mo(v,M):new Se(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),_.mode===fn.TRIANGLE_STRIP?p.geometry=Cl(p.geometry,jo):_.mode===fn.TRIANGLE_FAN&&(p.geometry=Cl(p.geometry,Sr));else if(_.mode===fn.LINES)p=new Ao(v,M);else if(_.mode===fn.LINE_STRIP)p=new Es(v,M);else if(_.mode===fn.LINE_LOOP)p=new Ro(v,M);else if(_.mode===fn.POINTS)p=new Co(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(p.geometry.morphAttributes).length>0&&jx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Jn(p,r),_.extensions&&zi(i,p,_),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&zi(i,u[0],r),u[0];let d=new et;r.extensions&&zi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(Cs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new bs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new So(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],v=f.target,_=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],_=u[4],p=[];for(let M=0,y=d.length;M<y;M++){let m=d[M],R=f[M],w=g[M],C=v[M],D=_[M];if(m===void 0)continue;m.updateMatrix&&m.updateMatrix();let b=n._createAnimationTracks(m,R,w,C,D);if(b)for(let S=0;S<b.length;S++)p.push(b[S])}return new Kn(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ey)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ar:l.length>1?h=new et:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Jn(h,r),r.extensions&&zi(n,h,r),r.matrix!==void 0){let u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new et;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&zi(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Zt||d instanceof Lt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];xi[r.path]===xi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(xi[r.path]){case xi.weights:l=Yn;break;case xi.rotation:l=dn;break;case xi.position:case xi.scale:l=Zn;break;default:switch(n.itemSize){case 1:l=Yn;break;case 2:case 3:default:l=Zn;break}break}let h=i.interpolation!==void 0?Zx[i.interpolation]:ys,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+xi[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ih(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof dn?th:sa;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ty(s,e,t){let n=e.attributes,i=new ln;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),a.normalized){let h=ih(Ps[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,c=new F;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=ih(Ps[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new nn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function gd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=nh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qe.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Jn(s,e),ty(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$x(s,e.targets,t):s})}var ra=class extends Di{constructor(){super();let e=new pt;e.deleteAttribute("uv");let t=new Ve({side:Bt}),n=new Ve,i=new Rs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Se(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Se(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Se(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Se(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Se(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Se(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Se(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Se(e,Ls(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Se(e,Ls(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Se(e,Ls(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new Se(e,Ls(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let _=new Se(e,Ls(20));_.position.set(3.235,11.486,-12.541),_.scale.set(2.5,2,.1),this.add(_);let p=new Se(e,Ls(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ls(s){let e=new Kt;return e.color.setScalar(s),e}function oa(s){let e=new et;e.name=s.name,e.userData.agentId=s.id;let t=new Map;function n(l,h,u,d,f,g,v,_=e){let p=t.get(v);p||(p=new Ve({color:v,roughness:.86}),t.set(v,p));let M=new Se(new pt(d,f,g),p);return M.position.set(l,h,u),M.castShadow=!0,M.receiveShadow=!0,_.add(M),M}let i=[];for(let l of[-1,1]){let h=new et;h.name=l<0?"LegL":"LegR",h.position.set(l*.18,1.05,0),e.add(h),n(0,-.36,0,.29,.94,.3,s.pants||"#dfd5bf",h),n(0,-.94,.04,.25,.15,.37,s.skin,h);let u=n(0,-.93,.08,.29,.22,.49,s.shoe,h);u.name=l<0?"ShoeL":"ShoeR",u.userData.keep=!0,i.push(h)}n(0,1.4,0,.74,.67,.38,s.color),n(0,1.05,0,.71,.08,.37,"#716455"),n(0,1.74,0,.22,.15,.23,s.skin),n(0,2.06,0,.67,.61,.54,s.skin),n(-.365,2.03,0,.09,.2,.16,s.skin),n(.365,2.03,0,.09,.2,.16,s.skin),n(0,2.38,-.015,.72,.18,.58,s.hair),n(0,2.17,-.255,.7,.37,.08,s.hair),n(-.31,2.26,0,.1,.27,.53,s.hair),["long","bob","bun"].includes(s.style)&&(n(.32,2.15,-.1,.13,.48,.38,s.hair),n(-.32,2.15,-.1,.13,.48,.38,s.hair),s.style==="long"&&n(0,1.8,-.26,.66,.52,.16,s.hair),s.style==="bun"&&n(.15,2.42,-.29,.28,.28,.25,s.hair));for(let l=0;l<6;l++){let h=-.29+l*.115;n(h,2.45+l%3*.025,-.04,.13,.09,.49,s.hair),s.style==="curly"&&n(h,2.34+l%2*.04,.23,.12,.16,.12,s.hair)}s.style==="swept"&&n(.13,2.33,.24,.45,.19,.13,s.hair),n(-.145,2.08,.28,.065,.095,.025,"#282723"),n(.145,2.08,.28,.065,.095,.025,"#282723"),n(0,1.99,.295,.08,.07,.07,s.skin);for(let l=0;l<3;l++)n(.04,1.26+l*.17,.199,.025,.025,.02,"#4b5b58");let r=[];for(let l of[-1,1]){let h=new et;h.name=l<0?"ArmL":"ArmR",h.position.set(l*.48,1.63,0),e.add(h),n(0,-.12,0,.23,.3,.34,s.color,h),n(0,-.42,0,.2,.36,.25,s.skin,h),r.push(h)}switch(s.accessory){case"watch":n(-.48,1.12,0,.23,.09,.29,"#252c2d"),n(-.48,1.12,.155,.13,.1,.03,"#666f6e");break;case"glasses":for(let l of[-.17,.17])n(l,2.09,.313,.28,.035,.035,"#20282a"),n(l,1.94,.313,.28,.035,.035,"#20282a"),n(l-.12,2.015,.313,.035,.15,.035,"#20282a"),n(l+.12,2.015,.313,.035,.15,.035,"#20282a");n(0,2.06,.32,.1,.035,.035,"#20282a");break;case"headphones":n(0,2.48,0,.85,.08,.19,"#343c40"),n(-.41,2.15,0,.14,.27,.23,"#343c40"),n(.41,2.15,0,.14,.27,.23,"#343c40");break;case"pencil":n(.53,1.08,.21,.055,.44,.055,"#e9b14b");break;case"camera":n(.53,1.02,.23,.29,.2,.12,"#374547"),n(.53,1.02,.31,.12,.12,.07,"#789d9e");break;default:n(.53,1.01,.2,.27,.36,.065,s.accessory==="blueprint"?"#76b3c1":s.accessory==="tablet"?"#303c42":"#d5b987"),n(.53,1.01,.24,.21,.27,.015,"#e8e1cd")}let o=new Ve({vertexColors:!0,roughness:.86});for(let l of[e,...r,...i]){l.updateMatrix();let h=[];for(let d of[...l.children])if(d.isMesh&&!d.userData.keep){d.updateMatrix();let f=d.geometry.clone().applyMatrix4(d.matrix),g=new Float32Array(f.attributes.position.count*3);for(let v=0;v<g.length;v+=3)g[v]=d.material.color.r,g[v+1]=d.material.color.g,g[v+2]=d.material.color.b;f.setAttribute("color",new bt(g,3)),h.push(f),l.remove(d),d.geometry.dispose()}let u=new Se(jn(h),o);u.castShadow=!0,u.receiveShadow=!0,l.add(u),h.forEach(d=>d.dispose())}e.traverse(l=>{l.userData.agentId=s.id});let a=r.map((l,h)=>new dn(l.name+".quaternion",[0,1.5,3],[0,0,0,1,0,0,(h?1:-1)*Math.sin(.0175),Math.cos(.0175),0,0,0,1])),c=[...r,...i].map((l,h)=>{let u=h%2?1:-1,d=[0,1,2,3,4].flatMap(f=>{let g=Math.sin(f*Math.PI/2)*.55*u*(h<2?-1:1);return[Math.sin(g/2),0,0,Math.cos(g/2)]});return new dn(l.name+".quaternion",[0,.25,.5,.75,1],d)});return e.animations=[new Kn("Idle",3,a),new Kn("Walk",1,c)],e}function xd(s){let e=[0,6,12].map(P=>{let O=new et;return O.position.y=P,s.add(O),O});function t(P){let O=document.createElement("canvas");O.width=O.height=512;let U=O.getContext("2d"),G=47,H=()=>(G=G*16807%2147483647,G/2147483647);if(U.fillStyle=P==="wood"?"#c9ad83":P==="tile"?"#cbcfc7":"#ede9dc",U.fillRect(0,0,512,512),P==="wood"){for(let ne=0;ne<1400;ne++){U.strokeStyle=`rgba(91,61,32,${H()*.15})`;let he=H()*512;U.beginPath(),U.moveTo(0,he),U.bezierCurveTo(180,he+H()*8,300,he-4,512,he+H()*5),U.stroke()}for(let ne=0;ne<512;ne+=64)U.fillStyle="#7a604032",U.fillRect(0,ne,512,2)}else if(P==="tile"){U.strokeStyle="#f6f5e8",U.lineWidth=3;for(let ne=0;ne<=512;ne+=128)U.beginPath(),U.moveTo(ne,0),U.lineTo(ne,512),U.moveTo(0,ne),U.lineTo(512,ne),U.stroke()}else for(let ne=0;ne<4e3;ne++)U.fillStyle=`rgba(91,75,48,${H()*.08})`,U.fillRect(H()*512,H()*512,H()*2+1,1);let ee=new zt(O);return ee.colorSpace=nt,ee.wrapS=ee.wrapT=Yt,ee.repeat.set(P==="tile"?7:2,P==="tile"?6:2),ee}let n=new Ve({map:t("wood"),roughness:.55,color:"#dfc79f"}),i=new Ve({map:t("tile"),roughness:.82}),r=new Ve({map:t("stone"),color:"#e5dfcc",roughness:.9});n.userData.themeRole="wood",i.userData.themeRole="tile",r.userData.themeRole="stone",n.bumpMap=n.map,n.bumpScale=.012,r.bumpMap=r.map,r.bumpScale=.008,i.bumpMap=i.map,i.bumpScale=.006;let o=document.createElement("canvas");o.width=o.height=128;let a=o.getContext("2d");a.fillStyle="#aaa",a.fillRect(0,0,128,128);for(let P=0;P<128;P+=4)a.fillStyle=P%8===0?"#bbb":"#888",a.fillRect(P,0,1,128),a.fillRect(0,P,128,1);let c=new zt(o);c.wrapS=c.wrapT=Yt,c.repeat.set(3,3);let l=new Map,h=(P,O=.8)=>(l.has(P)||l.set(P,new Ve({color:P,roughness:O,bumpMap:["#c0c6b5","#bcbca9","#c2bfae","#c5c7b6","#b6be9f","#d2cbb3"].includes(P)?c:null,bumpScale:.009})),l.get(P)),u=new mt({color:"#bdd4cc",transparent:!0,opacity:.19,roughness:.15,metalness:.05,depthWrite:!1});function d(P,O,U,G,H,ee,ne,he){let ye=new Se(new pt(H,ee,ne),typeof he=="string"?h(he):he);return ye.position.set(O,U,G),ye.castShadow=!0,ye.receiveShadow=!0,P.add(ye),ye}function f(P,O,U,G,H,ee,ne,he=H,ye=12){let Oe=new Se(new Ht(he,H,ee,ye),typeof ne=="string"?h(ne):ne);return Oe.position.set(O,U,G),Oe.castShadow=!0,Oe.receiveShadow=!0,P.add(Oe),Oe}function g(P,O,U,G=1,H=0){f(P,O,H+.28*G,U,.28*G,.56*G,"#c8bea5",.36*G),f(P,O,H+1*G,U,.035*G,1.3*G,"#71694a",.025*G,6);for(let ee=0;ee<9;ee++){let ne=ee*2.399,he=new Se(new di(1,10,6),h(ee%2?"#637d46":"#456543"));he.scale.set(.19*G,.52*G,.1*G),he.position.set(O+Math.cos(ne)*.32*G,H+(1+ee*.075)*G,U+Math.sin(ne)*.32*G),he.rotation.set(.4,0,ne),he.castShadow=!0,P.add(he)}}function v(P,O,U,G,H,ee,ne,he,ye=.1){let Oe=new ws,ae=-H/2,le=-ne/2;Oe.moveTo(ae+ye,le),Oe.lineTo(ae+H-ye,le),Oe.quadraticCurveTo(ae+H,le,ae+H,le+ye),Oe.lineTo(ae+H,le+ne-ye),Oe.quadraticCurveTo(ae+H,le+ne,ae+H-ye,le+ne),Oe.lineTo(ae+ye,le+ne),Oe.quadraticCurveTo(ae,le+ne,ae,le+ne-ye),Oe.lineTo(ae,le+ye),Oe.quadraticCurveTo(ae,le,ae+ye,le);let be=new Se(new mr(Oe,{depth:ee,bevelEnabled:!1,curveSegments:4}),typeof he=="string"?h(he):he);return be.rotation.x=-Math.PI/2,be.position.set(O,U-ee/2,G),be.castShadow=!0,be.receiveShadow=!0,P.add(be),be}function _(P,O,U,G=0,H="#c0c6b5",ee=0){let ne=new et;ne.position.set(O,ee,U),ne.rotation.y=G,P.add(ne),v(ne,0,.52,0,.7,.19,.69,H,.13);let he=v(ne,0,.92,-.29,.7,.72,.18,H,.08);he.rotation.z=.04,d(ne,-.34,.73,0,.08,.1,.52,H),d(ne,.34,.73,0,.08,.1,.52,H),f(ne,0,.26,0,.045,.4,"#5f665f",.045,8);for(let ye=0;ye<4;ye++){let Oe=ye*Math.PI/2;d(ne,Math.cos(Oe)*.19,.075,Math.sin(Oe)*.19,.07,.07,.07,"#424b45")}d(ne,0,.12,0,.62,.045,.06,"#778078"),d(ne,0,.12,0,.06,.045,.62,"#778078")}function p(P,O,U,G=1.45,H=0){let ee=new et;ee.position.set(O,G,U),ee.rotation.y=H,P.add(ee),d(ee,0,0,0,.86,.54,.055,"#4b5650"),d(ee,0,.01,.034,.78,.46,.008,"#aabfbb"),d(ee,0,-.36,0,.04,.22,.04,"#707c72"),d(ee,0,-.47,.02,.32,.025,.23,"#758174"),d(ee,0,-.44,.42,.5,.025,.18,"#d4d6c9");for(let ne=0;ne<3;ne++)d(ee,-.15,.12-ne*.075,.042,.32-ne*.06,.018,.008,ne===0?"#ecdfb6":"#d8e4d7")}function M(P,O,U,G=0){let H=new et;H.position.set(O,0,U),H.rotation.y=G,P.add(H),d(H,0,1.02,0,3.7,.12,1.65,n);for(let ee of[-1.6,1.6])for(let ne of[-.6,.6])d(H,ee,.5,ne,.07,1,.07,"#eeeae0");d(H,0,1.31,0,3.55,.5,.055,"#b3c3b6");for(let ee of[-1,1])for(let ne of[-.95,.95])p(H,ne,ee*.2,1.49,ee<0?Math.PI:0),_(H,ne,ee*1.26,ee<0?0:Math.PI),d(H,ne+.45,1.1,ee*.5,.26,.04,.32,"#eee5cd");g(H,1.53,.12,.25,1.08)}function y(P,O,U,G=0,H="#c4c2af",ee=2.5){let ne=new et;ne.userData.workspaceSofa={width:ee,color:H},ne.position.set(O,0,U),ne.rotation.y=G,P.add(ne),d(ne,0,.35,0,ee,.35,.95,H),d(ne,0,.8,-.46,ee,.92,.2,H);for(let he of[-1,1])d(ne,he*(ee/2-.1),.58,0,.2,.55,1.1,H);for(let he=0;he<3;he++)d(ne,-ee*.3+he*ee*.3,.57,.04,ee*.28,.15,.84,H);d(ne,-ee*.27,.9,-.19,.46,.38,.17,"#e6dec7")}function m(P,O,U,G=.8){f(P,O,.69,U,G,.11,n),f(P,O,.33,U,.1,.65,"#5d6c5c",.08)}function R(P,O,U,G){d(P,O,1.01,U,G,1.8,.05,u),d(P,O,1.9,U,G,.055,.055,"#a5ad99");for(let H=-G/2;H<=G/2;H+=2)d(P,O+H,.95,U,.04,1.9,.04,"#a0aa98")}let w=[];function C(P){let O=[];for(let G=0;G<18;G++){let H=new pt(2,.32,.48);H.translate(13.2,G*.32+.16,-2-G*.47),O.push(H)}let U=new Se(jn(O),n);O.forEach(G=>G.dispose()),U.position.y=P*6,U.castShadow=!0,U.receiveShadow=!0,U.name=`Stairs ${P+1}\u2013${P+2}`,s.add(U),w.push(U)}function D(P,O,U,G=6){d(P,O,1.9,U,G,3.8,.45,n);for(let H=.5;H<3.8;H+=.65){d(P,O,H,U+.28,G,.06,.65,n);for(let ee=0;ee<Math.floor(G*6);ee++){let ne=.28+ee%4*.055;d(P,O-G/2+.15+ee*.16,H+ne/2+.04,U+.25,.11,ne,.25,["#7c8a69","#c1a075","#dfd5b9","#9baeb0","#8c6955"][ee%5])}}}let b=e[0];d(b,0,-.32,0,30,.65,24,r),d(b,0,.02,0,29.7,.06,23.7,i),d(b,0,2.2,-11.8,30,4.4,.22,"#e6e2d5"),d(b,-14.8,2.2,0,.22,4.4,24,"#e6e2d5");for(let P=-13;P<15;P+=3)d(b,P,2.5,-11.62,2.7,3.6,.07,u),d(b,P-1.4,2.5,-11.55,.065,3.8,.1,n),d(b,P,.66,-11.45,2.8,.11,.42,n);for(let P=-9;P<12;P+=3)d(b,-14.62,2.5,P,.07,3.6,2.7,u),d(b,-14.55,2.5,P-1.4,.1,3.8,.065,n);d(b,-6.6,.07,3,12,.035,12,"#547b80"),d(b,7.1,.07,3,11.8,.035,12,"#778a71");for(let P of[-8.4,-3.6,4.5,9.3])for(let O of[0,4.8])M(b,P,O);for(let P=-9;P<11;P+=3.8)g(b,-13.8,P,.9);for(let P=-11;P<14;P+=3.6)g(b,P,10.8,.8);y(b,-9,8.5,0,"#d49555",3.2),y(b,-12,7,Math.PI/2,"#c5c7b6",2.3),m(b,-10.2,7,.7),g(b,-12.9,9.3,.7),y(b,11,8.6,0,"#ce7954",2.8),m(b,10.7,7.2,.7),D(b,2.5,-11.2,5.6),g(b,13.7,-10,1.2);for(let P of[1.3,3.7])_(b,P,-8.2,0,"#819b9c"),m(b,P,-6.8,.55);let S=new et;S.position.set(-8,0,-7.6),b.add(S),d(S,0,.08,0,10.4,.06,6.7,n),d(S,0,1.9,-3.4,10.5,3.8,.12,"#3f4a42");for(let P=-4.9;P<5;P+=.32)d(S,P,1.9,-3.3,.045,3.75,.06,"#727963");d(S,0,2.1,-3.15,3.9,2.05,.09,"#d8decf"),d(S,0,2.05,-3.09,3.7,1.86,.02,"#eaeadb");for(let P of[-4.15,4.15])d(S,P,2.3,-3.1,.13,.65,.11,new Ve({color:"#fff1bc",emissive:"#f5cc81",emissiveIntensity:1.3})),g(S,P,-2.6,.65);let T=new ws;T.moveTo(-3.4,2.2),T.lineTo(-3.4,-1.9),T.quadraticCurveTo(-3.4,-2.7,-2.6,-2.7),T.lineTo(2.6,-2.7),T.quadraticCurveTo(3.4,-2.7,3.4,-1.9),T.lineTo(3.4,2.2),T.lineTo(2.3,2.2),T.lineTo(2.3,-1.6),T.lineTo(-2.3,-1.6),T.lineTo(-2.3,2.2),T.closePath();for(let[P,O,U]of[[.88,.14,n],[.06,.82,h("#444d43")]]){let G=new Se(new mr(T,{depth:O,bevelEnabled:!1,curveSegments:12}),U);G.rotation.x=-Math.PI/2,G.position.y=P,G.castShadow=!0,G.receiveShadow=!0,S.add(G)}for(let P of[-1,1])for(let O=0;O<6;O++){let U=-1.85+O*.72;_(S,P*4,U,P>0?-Math.PI/2:Math.PI/2,"#bcbca9"),d(S,P*2.85,1.04,U,.63,.025,.5,"#e4e1cb"),d(S,P*2.5,1.07,U,.08,.045,.21,"#5a655b"),f(S,P*2.42,1.14,U,.022,.17,"#4e574c",.018,6),f(S,P*3.05,1.12,U-.35,.055,.18,"#d2dbcd")}for(let P of[-2.5,-1.5,-.5,.5,1.5,2.5])_(S,P,3.45,Math.PI,"#c2bfae"),d(S,P,1.04,2.15,.7,.025,.5,"#e4e1cb");d(S,0,.35,0,1.4,.7,1.4,n),g(S,0,0,.67,.7),d(S,5.25,1.55,-.7,.04,3.1,5.5,u),d(S,5.25,0,-.7,.07,.08,5.5,"#939d88"),C(0);let k=e[1];d(k,0,-.2,-5,30,.4,13,r),d(k,0,.03,-5,29.8,.06,12.8,n),d(k,0,1.7,-11.4,30,3.4,.15,"#dedfd2");for(let P of[-4.8,5]){d(k,P,1.6,-6,.09,3.2,10,u);for(let O=-10;O<-1;O+=1)d(k,P,1.6,O,.12,3.2,.06,n)}y(k,-10,-7,0,"#b6be9f",3.5),y(k,-11,-3,Math.PI/2,"#d2cbb3",2.5),m(k,-9,-4.7,1),d(k,-8,.08,-5,6,.06,5,"#d4d3bd"),g(k,-13,-10,1.1),D(k,-10,-11,5),y(k,0,-4.2,Math.PI,"#c28c65",3.2),g(k,3.8,-10,1),_(k,8,-6,.5,"#c6b5a2"),_(k,11,-6,-.5,"#b4c1aa"),m(k,9.5,-5.2,.65);for(let P of[-9,-7,-5])g(k,13.5,P,1.1);d(k,10,.1,-6,6,.05,6,"#b6bea6"),C(1);let V=e[2];for(let[P,O,U,G]of[[-13.1,-5,3.8,13],[7.2,-5,15.6,13],[-6,-10,10.8,2.7],[-6,-.1,10.8,3.1]])d(V,P,-.2,O,U,.4,G,r),d(V,P,.03,O,U-.05,.06,G-.05,n);R(V,0,1.45,30),R(V,0,-11.4,30);for(let P of[-12,0])for(let O of[-8,-3])d(V,P,.36,O,1,.25,2.3,"#dfd8be"),d(V,P,.6,O-.8,1,.6,.25,"#e6dfc9");for(let P of[4,13])for(let O of[-10,0])d(V,P,1.8,O,.13,3.6,.13,n);for(let P=-10;P<1;P+=.8)d(V,8.5,3.65,P,10,.1,.13,n);d(V,8.8,.5,-9,6,1,1.2,"#c1b597"),d(V,8.8,1.04,-9,6.2,.12,1.4,r);for(let P of[6,10])m(V,P,-4,.7),_(V,P-.9,-4,Math.PI/2,"#a4ae90"),_(V,P+.9,-4,-Math.PI/2,"#a4ae90");for(let P=-13;P<15;P+=3.2)g(V,P,-10.5,.8),g(V,P,.7,.6);for(let P of e){P.updateMatrixWorld(!0);let O=new Map,U=[];P.traverse(G=>{if(G.isMesh&&!G.material.transparent&&!G.parent?.userData.workspaceSofa){let H=G.geometry.index?G.geometry.toNonIndexed():G.geometry.clone();H.applyMatrix4(new ze().copy(P.matrixWorld).invert().multiply(G.matrixWorld)),O.has(G.material)||O.set(G.material,[]),O.get(G.material).push(H),U.push(G)}});for(let G of U)G.removeFromParent(),G.geometry.dispose();for(let[G,H]of O){let ee=new Se(jn(H),G);ee.castShadow=!0,ee.receiveShadow=!0,P.add(ee),H.forEach(ne=>ne.dispose())}}return{floors:e,stairs:w}}var Tr=new F;function pn(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Tr.copy(e),Tr[n]=0,Tr.normalize();let l=.5*o/(o+a),h=1-Tr.angleTo(s)/c;return Math.sign(Tr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var yi=class extends pt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new F,c=new F,l=new F(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new F,v=.5/i;for(let _=0,p=0;_<h.length;_+=3,p+=2)switch(a.fromArray(h,_),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[_+0]=l.x*Math.sign(a.x)+c.x*r,h[_+1]=l.y*Math.sign(a.y)+c.y*r,h[_+2]=l.z*Math.sign(a.z)+c.z*r,u[_+0]=c.x,u[_+1]=c.y,u[_+2]=c.z,Math.floor(_/f)){case 0:g.set(1,0,0),d[p+0]=pn(g,c,"z","y",r,n),d[p+1]=1-pn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-pn(g,c,"z","y",r,n),d[p+1]=1-pn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-pn(g,c,"x","z",r,e),d[p+1]=pn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-pn(g,c,"x","z",r,e),d[p+1]=1-pn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-pn(g,c,"x","y",r,e),d[p+1]=1-pn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=pn(g,c,"x","y",r,e),d[p+1]=1-pn(g,c,"y","x",r,t);break}}};function yd(s,e){let t=new et;t.name="Nexa Office \u2014 opaque exterior",s.add(t);let n=new et;n.name="Entrance and landscape",s.add(n);let i=new Map,r=(T,k=.7,V=0)=>{let P=[T,k,V].join();return i.has(P)||i.set(P,new Ve({color:T,roughness:k,metalness:V})),i.get(P)};function o(T){let k=document.createElement("canvas");k.width=k.height=512;let V=k.getContext("2d"),P=63,O=()=>(P=P*16807%2147483647,P/2147483647);V.fillStyle=T==="wood"?"#72553a":"#d0c5ad",V.fillRect(0,0,512,512);for(let G=0;G<1800;G++){V.strokeStyle=T==="wood"?`rgba(28,20,13,${O()*.2})`:`rgba(94,82,61,${O()*.07})`;let H=O()*512;V.beginPath(),V.moveTo(0,H),V.bezierCurveTo(180,H+O()*6,350,H-O()*9,512,H+O()*3),V.stroke()}let U=new zt(k);return U.colorSpace=nt,U.wrapS=U.wrapT=Yt,U.repeat.set(2,2),new Ve({map:U,bumpMap:U,bumpScale:T==="wood"?.012:.008,roughness:T==="wood"?.48:.7})}let a=o("wood"),c=o("stone");a.userData.themeRole="wood",c.userData.themeRole="stone";let l=r("#81715a",.3,.75),h=r("#202c30",.48,.5),u=r("#b8b29e",.95),d=r("#4a473e",.5);l.userData.themeRole="metal",h.userData.themeRole="frame",u.userData.themeRole="fabric";let f=document.createElement("canvas");f.width=256,f.height=512;let g=f.getContext("2d"),v=g.createLinearGradient(0,0,0,512);v.addColorStop(0,"#263f4b"),v.addColorStop(.35,"#456a7e"),v.addColorStop(.64,"#829eac"),v.addColorStop(.72,"#627f8e"),v.addColorStop(1,"#28434f"),g.fillStyle=v,g.fillRect(0,0,256,512),g.fillStyle="#c5d5da15",g.beginPath(),g.moveTo(0,130),g.bezierCurveTo(80,110,130,180,256,130),g.lineTo(256,154),g.bezierCurveTo(110,190,90,135,0,154),g.fill();let _=new zt(f);_.colorSpace=nt;let p=new mt({color:"#a9c1cd",map:_,metalness:.65,roughness:.1,clearcoat:1,clearcoatRoughness:.08,transparent:!1,opacity:1,transmission:0,envMapIntensity:2.2});p.userData.themeRole="facade";let M=[p],y=new Ve({color:"#fff2d0",emissive:"#ffd591",emissiveIntensity:1.8,roughness:.3});function m(T,k,V,P,O,U,G,H,ee=0){let ne=ee?new yi(O,U,G,2,ee):new pt(O,U,G),he=new Se(ne,typeof H=="string"?r(H):H);return he.position.set(k,V,P),he.castShadow=!0,he.receiveShadow=!0,T.add(he),he}function R(T,k,V,P,O,U,G,H=O){let ee=new Se(new Ht(H,O,U,24),G);return ee.position.set(k,V,P),ee.castShadow=!0,ee.receiveShadow=!0,T.add(ee),ee}function w(T,k,V,P,O,U,G,H,{darkBackground:ee=!0,rotation:ne=0}={}){let he=document.createElement("canvas");he.width=1536,he.height=512;let ye=he.getContext("2d");ye.fillStyle=ee?"#17272c":"#d8ceb7",ye.fillRect(0,0,1536,512),ye.fillStyle=ee?"#e4cda3":"#3c443d",ye.textAlign="center",ye.font="500 130px Arial",ye.fillText(k,768,270),ye.font="32px Arial",ye.letterSpacing="8px",ye.fillText(V,768,375);let Oe=new zt(he);Oe.colorSpace=nt;let ae=new Ve({map:Oe,roughness:.55,emissive:"#c1a16e",emissiveMap:Oe,emissiveIntensity:.16}),le=new Se(new Nt(G,H),ae);return le.position.set(P,O,U),le.rotation.y=ne,T.add(le),le.userData.sign=k,le}function C(T,k,V,P,O=1){R(T,k,V+.32*O,P,.3*O,.64*O,c,.4*O),R(T,k,V+.63*O,P,.31*O,.035*O,r("#403c2c"));for(let U=0;U<15;U++){let G=U*2.4,H=new Se(new di(1,10,6),r(U%2?"#4c6441":"#344e37",.84));H.position.set(k+Math.cos(G)*.27*O,V+(1+U*.055)*O,P+Math.sin(G)*.27*O),H.scale.set(.14*O,.44*O,.065*O),H.rotation.set(.25,0,Math.cos(G)*.8),H.castShadow=!0,T.add(H)}}let D=[{y:0,z:0,d:24},{y:6,z:0,d:24},{y:12,z:-5,d:13}];for(let T of D){let k=T.y,V=T.z,P=T.d;for(let O of[-1,1]){for(let U=0;U<12;U++){let G=-13.75+U*2.5;m(t,G,k+2.73,V+O*(P/2+.12),2.42,5.4,.18,p),m(t,G-1.25,k+2.75,V+O*(P/2+.25),.065,5.55,.12,l)}for(let U=0;U<Math.round(P/2);U++){let G=V-P/2+(U+.5)*P/Math.round(P/2);m(t,O*15.1,k+2.73,G,.18,5.4,P/Math.round(P/2)-.07,p),m(t,O*15.23,k+2.75,G-P/Math.round(P/2)/2,.12,5.55,.065,l)}}m(t,0,k+5.7,V,30.7,.34,P+.7,h,.08),m(t,0,k+.03,V,30.5,.18,P+.5,c,.04),m(t,0,k+5.48,V+P/2+.27,30,.025,.04,y)}m(t,0,11.93,0,30.6,.3,24.6,c,.06),m(t,0,17.85,-5,30.7,.34,13.7,h,.08);for(let T=-14;T<=14;T+=2.8)m(t,T,18.05,-5,1.9,.08,7.4,r("#253b43",.25,.6),.02);m(t,0,12.15,7.1,29.2,.4,9.4,r("#697660"),.03);for(let T=-13;T<14;T+=1.4)C(t,T,12.38,10.2,.45);m(t,0,1.8,12.3,5.9,3.6,.42,c,.1),m(t,0,1.65,12.55,4.7,3.25,.12,p),m(t,0,1.65,12.65,.055,3.3,.08,l);for(let T of[-.35,.35])m(t,T,1.65,12.78,.045,.65,.07,l,.015);m(t,0,3.8,13.4,7.2,.2,3.8,h,.08),m(t,0,3.67,13.4,6.5,.025,3.1,y),w(t,"NEXA OFFICE","CREATIVE WORKSPACE",0,4.65,12.34,12,1.65),w(t,"NEXA","OFFICE",15.38,8.5,-1,5,1.9,{rotation:Math.PI/2}),m(n,0,-.56,1.5,36,.25,32,c,.16),m(n,0,-.4,16.6,7,.12,6,a,.03);for(let T=0;T<4;T++)m(n,0,-.3-T*.07,13.1+T*.7,7+T*.3,.16,.75,c,.03);for(let T of[-12,12]){m(n,T,-.12,14.7,7,.7,2,r("#515e4b"),.12);for(let k=0;k<4;k++)C(n,T-2.4+k*1.6,.24,14.7,.65)}for(let T of[-5,5])for(let k of[13.8,16.7])m(n,T,.25,k,.14,1.2,.14,h,.03),m(n,T,.65,k+.09,.1,.2,.025,y);let b=e[1];m(b,0,-.2,7,30,.4,11,c),m(b,0,.04,7,29.7,.08,10.7,a);for(let T of[-14.7,0,14.7])m(b,T,1.85,7,.14,3.7,10.6,r("#c8c2b1"));for(let[T,k]of[[-11.55,6.9],[0,13],[11.55,6.9]])m(b,T,1.85,1.7,k,3.7,.14,r("#d7cbb4"));for(let T of[-7.3,7.3])m(b,T,3.12,1.7,1.6,1.16,.14,r("#d7cbb4"));for(let[T,k,V]of[[-7.3,"ZUNO","LEAD OFFICE"],[7.3,"ZULNAN","OWNER OFFICE"]]){for(let O=T-6.8;O<T+6.8;O+=.25)Math.abs(O-T)>.85&&m(b,O,1.82,1.86,.07,3.6,.1,a);let P=m(b,T-.74,1.23,2.6,1.48,2.46,.08,a,.025);P.rotation.y=-Math.PI/2;for(let O of[-.8,.8])m(b,T+O,1.28,1.97,.055,2.56,.055,l);m(b,T,2.57,1.97,1.65,.06,.055,l),m(b,T-.67,1.12,3.13,.05,.035,.22,l,.01),w(b,k,V,T+3.2,2.58,1.97,4.8,1.35),m(b,T,1.05,6,4.7,.16,1.85,c,.07),m(b,T-1.65,.52,6,.9,1,1.45,a,.04),m(b,T+1.75,.52,6,.07,1,.07,l);for(let O=0;O<3;O++)m(b,T-1.65,.2+O*.3,6.74,.82,.025,.035,l);m(b,T,1.15,6.2,1.7,.025,.85,d,.03),m(b,T,1.65,5.65,1.35,.78,.08,h,.04),m(b,T,1.65,5.7,1.24,.65,.012,r("#779398",.3)),m(b,T,1.26,5.65,.05,.35,.05,l),m(b,T,1.14,5.65,.5,.025,.32,l),m(b,T,1.19,6.42,.85,.04,.23,r("#505a57"),.03);for(let O=0;O<5;O++)m(b,T-.3+O*.14,1.215,6.41,.08,.008,.15,r("#8c958c"));R(b,T+1.8,1.18,5.7,.19,.08,l),m(b,T+1.8,1.65,5.7,.025,.9,.025,l),m(b,T+1.5,2.1,5.7,.65,.045,.28,h,.03),m(b,T+1.5,2.07,5.7,.55,.012,.21,y),m(b,T-1,1.18,6.1,.43,.06,.58,r("#e8ddc2")),R(b,T+1.1,1.27,6.5,.085,.2,r("#e7e2d2"));for(let[O,U,G]of[[T,4.55,!0],[T-.95,7.6,!1],[T+.95,7.6,!1]]){m(b,O,.58,U,G?.92:.8,.22,.82,G?d:u,.1),m(b,O,1.1,U+(G?-.35:.35),.82,G?1.1:.84,.16,G?d:u,.07),R(b,O,.29,U,.04,.5,l),m(b,O,.1,U,.76,.05,.08,l),m(b,O,.1,U,.08,.05,.76,l);for(let H of[-1,1])m(b,O+H*.45,.83,U,.07,.07,.65,l,.02)}m(b,T-4.7,.6,3.4,2.8,1.2,.7,a,.06);for(let O=0;O<9;O++)m(b,T-5.8+O*.22,1.4,3.4,.13,.4+O%3*.06,.25,r(["#a79771","#d5c6a6","#596b62"][O%3]));m(b,T+4.5,.35,9,3,.5,1.1,u,.12),m(b,T+4.5,.9,9.45,3,1,.25,u,.1),R(b,T+4.4,.6,7.7,.6,.1,a),R(b,T+4.4,.3,7.7,.12,.55,l),C(b,T-6,0,10.2,1.2),C(b,T+6,0,3.3,1.1),m(b,T,.1,6.5,8,.035,6,r(T<0?"#657b78":"#8a8370",.95));for(let O of[T-1.4,T+1.4])R(b,O,3.8,5.9,.015,.6,l),R(b,O,3.48,5.9,.35,.12,h),R(b,O,3.4,5.9,.3,.015,y)}let S=e[0];m(S,0,1.35,9.3,5.7,2.7,.18,a,.06),w(S,"NEXA STUDIO","IDEAS INTO REALITY",0,1.7,9.42,4.9,1.6),m(S,0,.65,10.25,4.8,1.3,.85,c,.08),m(S,0,1.34,10.25,5,.08,1,a,.03),C(S,-3.4,0,9.8,.9),C(S,3.4,0,9.8,.9);for(let T of[t,n,...e]){T.updateMatrixWorld(!0);let k=new Map,V=[];T.traverse(P=>{if(P.isMesh&&!P.userData.sign&&!P.parent?.userData.workspaceSofa){let O=P.geometry.index?P.geometry.toNonIndexed():P.geometry.clone();O.applyMatrix4(new ze().copy(T.matrixWorld).invert().multiply(P.matrixWorld)),k.has(P.material)||k.set(P.material,[]),k.get(P.material).push(O),V.push(P)}});for(let P of V)P.removeFromParent(),P.geometry.dispose();for(let[P,O]of k){let U=new Se(jn(O),P);U.castShadow=!0,U.receiveShadow=!0,T.add(U),O.forEach(G=>G.dispose())}}return{shell:t,context:n,glassMaterials:M}}function vd(s){let e=new Map,t=(m,R=0,w=.65)=>{let C=[m,R,w].join();return e.has(C)||e.set(C,new Ve({color:m,metalness:R,roughness:w})),e.get(C)},n=t("#a6b2b1",.85,.23),i=t("#202c30",.25,.4),r=t("#e8e5da",.05,.3),o=t("#775c40");o.userData.themeRole="wood";let a=new mt({color:"#dcebe3",transparent:!0,opacity:.48,roughness:.08,metalness:.08}),c=[];function l(m,R,w,C,D,b,S,T,k=.02){let V=new Se(new yi(D,b,S,2,Math.min(k,D/3,b/3,S/3)),typeof T=="string"?t(T):T);return V.position.set(R,w,C),V.castShadow=!0,V.receiveShadow=!0,m.add(V),V}function h(m,R,w,C,D,b,S,T=D){let k=new Se(new Ht(T,D,b,20),S);return k.position.set(R,w,C),k.castShadow=!0,m.add(k),k}function u(m,R,w,C,D,b,S,T=[Math.PI/2,0,0]){let k=new Se(new As(D,b,6,20),S);return k.position.set(R,w,C),k.rotation.set(...T),m.add(k),k}function d(m,R,w,C,D,b,S){let T=document.createElement("canvas");T.width=768,T.height=432;let k=T.getContext("2d"),V=k.createLinearGradient(0,0,768,432);V.addColorStop(0,"#13232d"),V.addColorStop(1,"#356b71"),k.fillStyle=V,k.fillRect(0,0,768,432),k.strokeStyle="#95cbb4",k.lineWidth=3;for(let U=0;U<9;U++)k.beginPath(),k.moveTo(0,280+U*15),k.bezierCurveTo(240,100+U*23,430,390-U*20,768,90+U*26),k.stroke();k.fillStyle="#e7edce",k.textAlign="center",k.font="600 50px Arial",k.fillText(R,384,185),k.font="20px Arial",k.fillText("NEXA \u2022 PLAY LOUNGE",384,230);let P=new zt(T);P.colorSpace=nt,l(m,w,C,D,b+.13,S+.13,.1,i);let O=new Se(new Nt(b,S),new Ve({map:P,emissiveMap:P,emissive:"#ffffff",emissiveIntensity:.38,roughness:.23}));O.position.set(w,C,D+.062),m.add(O)}function f(m,R,w,C,D,b=2.8){let S=document.createElement("canvas");S.width=768,S.height=192;let T=S.getContext("2d");T.fillStyle="#243a34",T.fillRect(0,0,768,192),T.fillStyle="#e1d2ae",T.font="44px Arial",T.textAlign="center",T.fillText(R,384,110);let k=new zt(S);k.colorSpace=nt;let V=new Se(new Nt(b,b/4),new Ve({map:k}));V.position.set(w,C,D),V.userData.sign=R,m.add(V)}function g(m,R,w,C,{clear:D=!1,coffee:b=!0}={}){let S=[new ue(.055,0),new ue(.085,.015),new ue(.095,.17),new ue(.078,.17),new ue(.067,.032),new ue(.055,.025)],T=new Se(new Fo(S,20),D?a:r);return T.position.set(R,w,C),m.add(T),u(m,R+.115,w+.09,C,.055,.012,D?a:r,[0,0,0]),h(m,R,w-.013,C,.145,.018,r),b&&h(m,R,w+.135,C,.075,.008,t("#4b2e1a",0,.22)),T}let v=new et;v.position.y=-.95,s[2].add(v),l(v,8,2.36,-9,1.75,.64,.7,n,.06),l(v,8,2.72,-9,1.9,.1,.77,i),l(v,8,2.12,-8.63,1.67,.07,.51,n),l(v,8,2.14,-8.59,1.4,.018,.34,i);for(let m of[7.55,8.42])h(v,m,2.36,-8.58,.1,.18,n),l(v,m,2.25,-8.36,.05,.05,.36,i),g(v,m,2.18,-8.47),h(v,m,2.61,-8.62,.07,.025,i).rotation.x=Math.PI/2;for(let m=0;m<12;m++)l(v,7.38+m*.11,2.159,-8.59,.018,.01,.3,n,.003);l(v,9.43,2.32,-9,.48,.53,.46,i),h(v,9.43,2.72,-9,.19,.3,a,.23),h(v,9.43,2.61,-9,.17,.08,t("#473524")),h(v,9.43,2.89,-9,.24,.025,i),l(v,9.43,2.36,-8.68,.13,.12,.22,n);let _=h(v,10.33,2.21,-8.75,.11,.3,n,.15);u(v,10.48,2.25,-8.75,.065,.012,n,[0,0,0]);for(let m=0;m<4;m++)g(v,6.25+m*.32,2.12,-9.05,{clear:m>1,coffee:m===0}),g(v,6.2+m*.32,2.12,-9.55,{coffee:!1});for(let m of[6,10])g(s[2],m,.76,-4,{clear:m===10}),l(s[2],m+.28,.77,-4.1,.26,.035,.24,r);f(v,"NEXA COFFEE",8.6,3.1,-10.86,3.2),c.push("espresso-machine","coffee-cups","glassware");let p=s[1];d(p,"PLAY / PAUSE",0,2.35,-11.22,3.65,2.05),l(p,0,.7,-10.6,4.2,1.2,.7,o),l(p,0,1.36,-10.6,4.4,.1,.79,i),l(p,0,1.52,-10.66,1.9,.12,.17,i),l(p,1.3,1.84,-10.53,.12,.86,.48,r,.06),l(p,1.63,1.84,-10.53,.12,.86,.48,r,.06),l(p,1.465,1.84,-10.53,.2,.82,.4,i,.035),l(p,1.46,1.9,-10.3,.018,.55,.016,t("#4983a6",.3,.3),.003);function M(m,R,w,C){l(m,R,w,C,.34,.1,.18,r,.04);for(let D of[-.13,.13])l(m,R+D,w-.035,C+.06,.1,.13,.11,r,.035);for(let D of[-.07,.07])h(m,R+D,w+.06,C,.028,.018,i);for(let D of[-.12,.12])h(m,R+D,w+.06,C-.05,.018,.014,i)}M(p,-.75,1.46,-10.5),M(p,-1.25,1.46,-10.5);for(let m of[-3.3,3.3]){l(p,m,1,-8.7,2.3,.12,1.05,o);for(let R of[-.95,.95])l(p,m+R,.5,-8.7,.07,1,.07,i);d(p,"NEXA PLAY",m,1.63,-8.92,1.24,.72),l(p,m,1.2,-8.95,.035,.36,.035,n),l(p,m,1.08,-8.95,.45,.03,.25,i),l(p,m+.84,1.43,-8.55,.38,.72,.59,i,.045),l(p,m+.84,1.43,-8.24,.31,.64,.015,a,.01);for(let R=0;R<3;R++)u(p,m+.84,1.21+R*.22,-8.22,.074,.012,t(["#77b9a5","#8a9fcd","#d5b873"][R],.1,.35),[0,0,0]);l(p,m-.08,1.1,-8.37,.79,.035,.22,i);for(let R=0;R<8;R++)l(p,m-.38+R*.085,1.122,-8.37,.055,.006,.16,t("#8bbdaf"),.002);l(p,m+.51,1.11,-8.36,.11,.055,.17,i,.025),l(p,m,.55,-7.65,.76,.18,.72,i,.07),l(p,m,1.1,-7.28,.78,1.05,.18,i,.07),l(p,m,1.11,-7.17,.45,.4,.025,t("#557f78")),h(p,m,.27,-7.65,.045,.48,n),l(p,m,.1,-7.65,.75,.04,.06,n),l(p,m,.1,-7.65,.06,.04,.75,n)}l(p,0,.57,-7.1,2.2,.12,1,o);for(let m of[-.9,.9])l(p,m,.28,-7.1,.06,.55,.06,i);M(p,-.35,.68,-7.1),M(p,.35,.68,-7.1),f(p,"GAME ROOM",0,3.7,-11.3,2.5),c.push("tv","gaming-pcs","playstation-style-console","controllers");let y=s[0];l(y,9.45,.07,-7.25,6.1,.08,7.7,t("#d9d0b8")),l(y,6.4,1.65,-7.25,.13,3.3,7.7,o),l(y,9.45,1.65,-11.1,6.1,3.3,.12,t("#d3c5a5"));for(let[m,R]of[[7.2,1.6],[11.4,2.2]])l(y,m,1.1,-3.4,R,2.2,.12,t("#c6b99b"));l(y,9.05,2.4,-3.4,5.5,.16,.14,o),l(y,9.4,1.2,-11,1.5,2.4,.1,t("#b4a079")),f(y,"MUSHOLA",9.4,2.8,-10.91,2.5);for(let m=0;m<2;m++)for(let R=0;R<4;R++){let w=7.25+R*1.4,C=-9.1+m*2.35;l(y,w,.15,C,1.12,.035,1.92,t("#58786c")),l(y,w,.173,C-.77,.87,.008,.025,t("#d8c394"));for(let D of[-.46,.46])l(y,w+D,.173,C,.015,.008,1.74,t("#d8c394"))}l(y,6.95,.7,-10.1,.7,1.3,.6,o);for(let m=0;m<4;m++)l(y,6.95,.35+m*.28,-10.1,.66,.04,.65,r);l(y,11.6,.37,-2.8,1.9,.7,.54,o);for(let m=0;m<3;m++)l(y,11.6,.12+m*.27,-2.8,1.9,.035,.57,r);for(let m=0;m<4;m++)l(y,11+m*.38,.18,-2.8,.16,.09,.29,i,.025);return l(y,7,.65,-4.15,1,1.1,.6,t("#c9c8b8")),h(y,7,1.23,-4.15,.34,.12,r),l(y,7,1.46,-4.38,.035,.44,.035,n),l(y,7,1.66,-4.25,.035,.035,.3,n),f(y,"LEPAS ALAS KAKI",11.3,1.1,-3.31,1.8),c.push("mushola","prayer-mats","ablution-basin"),{features:c}}function Md(s){let e=new Nt(10.4,6.3,64,40);e.rotateX(-Math.PI/2);let t=new mt({color:"#73b9b7",roughness:.12,metalness:.12,transparent:!0,opacity:.86,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:1.5,side:At}),n={time:{value:0}};t.onBeforeCompile=f=>{f.uniforms.poolTime=n.time,f.vertexShader=`uniform float poolTime;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
   float dx=0.025*2.1*cos(position.x*2.1+poolTime*.85)+.014*3.9*cos(position.x*3.9+position.z*1.7-poolTime*1.1);
   float dz=.022*2.7*cos(position.z*2.7-poolTime*.7)+.014*1.7*cos(position.x*3.9+position.z*1.7-poolTime*1.1);
   objectNormal=normalize(vec3(-dx,1.,-dz));`),f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
   transformed.y+=.025*sin(position.x*2.1+poolTime*.85)+.022*sin(position.z*2.7-poolTime*.7)+.014*sin(position.x*3.9+position.z*1.7-poolTime*1.1);`)};let i=new Se(e,t);i.position.set(-6,.105,-5),i.name="Animated pool water",s.add(i);let r=document.createElement("canvas");r.width=r.height=256;let o=r.getContext("2d");o.fillStyle="#6aa9a5",o.fillRect(0,0,256,256),o.strokeStyle="#bed6c7",o.lineWidth=1.5;for(let f=0;f<=256;f+=16)o.beginPath(),o.moveTo(f,0),o.lineTo(f,256),o.moveTo(0,f),o.lineTo(256,f),o.stroke();let a=new zt(r);a.colorSpace=nt;let c=new Se(new pt(10.7,.12,6.6),new Ve({map:a,roughness:.45,color:"#73aeaa"}));c.position.set(-6,-.87,-5),c.receiveShadow=!0,s.add(c);let l=new Ve({color:"#cdc8b1",roughness:.7});for(let[f,g,v,_]of[[-11.37,-5,.15,6.75],[-.63,-5,.15,6.75],[-6,-8.37,10.9,.15],[-6,-1.63,10.9,.15]]){let p=new Se(new pt(v,1,_),l);p.position.set(f,-.35,g),s.add(p)}let h=new $t({transparent:!0,depthWrite:!1,uniforms:{time:n.time},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float time;void main(){vec2 p=vUv*22.;float a=sin(p.x+sin(p.y*1.3+time*.5))*sin(p.y+cos(p.x*.7-time*.4));float b=pow(1.-abs(a),14.);gl_FragColor=vec4(.76,.94,.82,b*.30);}"}),u=new Se(new Nt(10.3,6.2),h);u.rotation.x=-Math.PI/2,u.position.set(-6,-.79,-5),s.add(u);let d=new Ve({color:"#b0bdba",metalness:.85,roughness:.22});for(let f of[-5.5,-4.5]){let g=new Se(new Ht(.035,.035,1.35,12),d);g.position.set(-.3,-.22,f),s.add(g)}for(let f=0;f<4;f++){let g=new Se(new Ht(.028,.028,1,12),d);g.rotation.x=Math.PI/2,g.position.set(-.3,-.7+f*.25,-5),s.add(g)}return{update(f){n.time.value=f},get time(){return n.time.value},mesh:i}}var aa={coffee:{room:"coffee",floor:2,point:[8.2,12,-7.8],approach:[[12.2,12,-.6],[11.7,12,-6.8],[8.2,12,-6.8]],activity:"Menyiapkan kopi",pose:"coffee"},game:{room:"game",floor:1,point:[-.7,6,-4.75],approach:[[.6,6,.65],[-1.9,6,-1.7],[-1.9,6,-5.6]],activity:"Bermain konsol",pose:"game"},pc:{room:"game",floor:1,point:[-3.3,6,-7.65],approach:[[.6,6,.65],[-1.9,6,-1.7],[-1.9,6,-6.4],[-3.3,6,-6.4]],activity:"Bermain PC gaming",pose:"game"},rest:{room:"rest",floor:1,point:[-9.6,6,-6.4],approach:[[.6,6,.65],[-6.4,6,.65],[-6.4,6,-6.2]],activity:"Beristirahat di lounge",pose:"rest"},library:{room:"library",floor:0,point:[.1,0,-9],approach:[[.6,0,-2.8],[.1,0,-2.8]],activity:"Membaca buku",pose:"read"},prayer:{room:"prayer",floor:0,point:[10.05,0,-6.75],approach:[[.6,0,-2.8],[9.4,0,-2.8],[9.4,0,-4.4],[10.05,0,-4.4]],activity:"Di mushola",pose:"prayer"},pool:{room:"pool",floor:2,point:[-5,11.05,-5],approach:[[12.2,12,-.6],[2,12,-.6],[2,12,-5],[.3,12,-5],[-1.2,11.05,-5]],activity:"Berenang santai",pose:"swim"}},wr=[[.6,0,-2.8],[.6,6,.65],[12.2,12,-.6]],bd=[[13.2,0,-1.5],[13.2,6,-1.5],[13.2,12,-10.45]];function ny(s,e){let t=[],n=s;for(;n!==e;)if(n<e){n===0?t.push([12,0,-2.8],[12,0,-1.5],bd[0]):t.push([12.2,6,.65],[12.2,6,-1.5],bd[1]);for(let i=1;i<=18;i++)t.push([13.2,n*6+i/18*6,-1.5-i/18*8.95]);n++,t.push([12.2,n*6,-10.45],[12.2,n*6,n===2?-.6:.65])}else{t.push([12.2,n*6,n===2?-.6:.65],[12.2,n*6,-10.45],[13.2,n*6,-10.45]);for(let i=1;i<=18;i++)t.push([13.2,n*6-i/18*6,-10.45+i/18*8.95]);n--,t.push([12,n*6,-1.5]),n===0?t.push([12,0,-2.8]):t.push([12.2,n*6,n===2?-.6:.65])}return t}var Sd=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1],s[2]-e[2]);function Ed(s,e){let t=0,n=!1,i=2,r=[],o=new Map,a=s.map((M,y)=>({id:M.id,index:y,home:[...e[M.id]],pos:[...e[M.id]],floor:M.floor,room:M.room,homeRoom:M.room,homeFloor:M.floor,phase:"work",activity:M.job,pose:"work",path:[],routeHistory:[],walked:0,cycles:0,manual:null,desired:null,wait:1+y*.8,legPhase:0,heading:M.id==="L.0"?0:Math.PI,busy:y%3!==1,target:null})),c=M=>a.find(y=>y.id===M);function l(M){let[y,m,R]=M.home;if(M.homeFloor===1)return[[y,m,3],[y,m,.65],wr[1]];if(M.homeRoom==="library")return[[y,m,-5.6],[.6,m,-5.6],wr[0]];let w=R<0?-2.5:R<3?2.5:7.1;return[[y,m,w],[.6,m,w],wr[0]]}function h(M){return[...l(M)].reverse().concat([M.home])}function u(M,y){let m=[];M.phase==="work"?m=l(M):M.target?m=[...M.target.approach].reverse():m=[wr[M.floor]],M.floor!==y.floor&&m.push(wr[M.floor],...ny(M.floor,y.floor)),m.push(...y.approach,y.point);let R=[],w=M.pos;for(let C of m)Sd(w,C)>.01&&(R.push([...C]),w=C);return R}function d(M,y,m){M.path=u(M,y),M.target=y,M.destinationKind=m,M.phase="walking",M.pose="walk",M.activity=m==="work"?"Menuju tempat kerja":`Menuju ${y.room==="prayer"?"mushola":y.activity.toLowerCase()}`,M.routeHistory=M.path.map(R=>[...R]),M.wait=0}function f(M){d(M,{floor:M.homeFloor,room:M.homeRoom,point:M.home,approach:h(M).slice(0,-1),pose:"work",activity:s[M.index].job},"work")}function g(M,y){let m=Object.keys(aa),R=y||m[(M.index+M.cycles++)%m.length],C=[R,...m.filter(D=>D!==R)].find(D=>!a.some(b=>b!==M&&b.target===aa[D]&&b.phase!=="work"));if(!C){M.wait=4;return}d(M,aa[C],C)}function v(M){let y=M.target;M.floor=y.floor,M.room=y.room,M.pose=y.pose,M.phase=M.destinationKind==="work"?"work":"leisure",M.activity=y.activity,M.wait=M.phase==="work"?22+M.index*.9:16+M.index*.5,M.heading=["coffee","game","read","work"].includes(M.pose)?Math.PI:0,M.id==="L.0"&&M.phase==="work"&&(M.heading=0)}function _(M){if(n){t+=M;for(let y of a)if(y.path.length){let m=1.35*M;for(;m>0&&y.path.length;){let R=y.path[0];if(y.stair!==void 0&&Math.abs(y.pos[0]-13.2)>.45&&(o.delete(y.stair),delete y.stair),Math.abs(R[0]-13.2)<.01){let D=y.path.find(T=>Math.abs(T[1]-y.pos[1])>.01)||R,b=Math.max(0,Math.min(1,Math.floor((Math.min(y.pos[1],D[1])+.001)/6))),S=o.get(b);if(S&&S!==y.id){y.activity="Menunggu tangga";break}o.set(b,y.id),y.stair=b}let w=Sd(y.pos,R),C=Math.min(w,m);if(w>0){let D=R[0]-y.pos[0],b=R[2]-y.pos[2];Math.hypot(D,b)>.001&&(y.heading=Math.atan2(D,b));for(let S=0;S<3;S++)y.pos[S]+=(R[S]-y.pos[S])*C/w;y.walked+=C,y.legPhase+=C*7}if(m-=C,w<=C+1e-5)y.path.shift();else break}y.floor=Math.max(0,Math.min(2,Math.round(y.pos[1]/6))),y.path.length||v(y)}else if(y.wait-=M,y.desired){let m=y.desired;y.desired=null,m==="work"?f(y):g(y,m==="free"?void 0:m)}else y.wait<=0&&(y.phase==="work"&&y.manual!==!0?g(y):y.phase==="leisure"&&y.manual!==!1?f(y):y.phase==="leisure"?g(y):y.wait=12);r.forEach(y=>y())}}function p(){t=0,n=!1,o.clear(),a.forEach((M,y)=>{Object.assign(M,{pos:[...M.home],floor:M.homeFloor,room:M.homeRoom,phase:"work",activity:s[y].job,pose:"work",path:[],walked:0,routeHistory:[],cycles:0,manual:null,desired:null,wait:y%3===1?1+y*.6:24+y*.8,target:null,stair:void 0,legPhase:0,heading:M.id==="L.0"?0:Math.PI})}),r.forEach(M=>M())}return p(),{actors:a,get time(){return t},get running(){return n},get speed(){return i},setSpeed(M){i=Math.max(.5,Math.min(4,Number(M)||1))},start(){n=!0},pause(){n=!1},reset:p,step(M){_(M*i)},advance(M){for(let y=0;y<M;y+=.1)_(Math.min(.1,M-y))},setWork(M,y){let m=c(M);m&&(m.manual=y,m.desired=y?"work":"free",m.phase==="work"&&y&&(m.desired=null))},visit(M,y){let m=c(M);!m||!aa[y]||(m.manual=!1,m.desired=y)},subscribe(M){r.push(M)},snapshot(){return a.map(M=>({id:M.id,position:[...M.pos],floor:M.floor,room:M.room,phase:M.phase,activity:M.activity,walked:M.walked,remaining:M.path.length}))}}}function Td({agents:s,models:e,homes:t,scene:n,wrap:i,camera:r,visibleFloor:o,onSelect:a,ownerModel:c,onOwner:l}){let h=Ed(s,t),u=h.actors,d=document.createElement("div");d.className="agent-label-layer",d.setAttribute("aria-label","Nama, jabatan dan kegiatan agen"),i.append(d);let f=new Map,g=new Map,v=new Ve({color:"#eee6d1",roughness:.3});function _(m,R){let w={};R.userData.activityRig=!0;for(let b of["ArmL","ArmR","LegL","LegR","ShoeL","ShoeR"])w[b]=R.getObjectByName(b);let C=new Se(new Ht(.1,.075,.16,16),v);C.position.set(0,-.4,.1),C.visible=!1,w.ArmR?w.ArmR.add(C):R.add(C),w.cup=C;let D=new Se(new pt(.48,.1,.2),new Ve({color:"#dadfd9",roughness:.4}));D.position.set(0,1.37,.38),D.visible=!1,R.add(D),w.controller=D,g.set(m,w)}for(let m of s){let R=document.createElement("button");R.className="agent-label",R.dataset.agentLabel=m.id,R.title=`${m.name} \xB7 ${m.job}`,R.innerHTML="<b></b><span></span><small></small>",R.querySelector("b").textContent=m.name,R.querySelector("span").textContent=m.title||m.job,R.addEventListener("click",()=>a(m.id)),d.append(R),f.set(m.id,R),_(m.id,e.get(m.id))}let p=document.createElement("button");p.className="agent-label",p.dataset.ownerLabel="true",p.innerHTML="<b>Zulnan</b><span>Owner</span>",p.onclick=l,d.append(p);let M=new F;function y(m=0){for(let R of u){let w=e.get(R.id);if(!w)continue;(!g.has(R.id)||w.userData.activityRig!==!0)&&(_(R.id,w),w.userData.activityRig=!0);let C=h.running||h.time>0,D=R.pose==="work",b=D||["game","rest"].includes(R.pose);w.position.set(...R.pos),w.position.y+=C&&b?-.12:0;let S=Cs.euclideanModulo(R.heading-w.rotation.y+Math.PI,Math.PI*2)-Math.PI;w.rotation.y+=S*Math.min(1,m*9||1);let T=g.get(R.id);if(!C)for(let U of["LegL","LegR","ArmL","ArmR"])T[U]&&(T[U].rotation.x=0);if(C)for(let U of["ArmL","ArmR","LegL","LegR"])T[U]&&T[U].rotation.set(0,0,0);let k=h.time,V=R.phase==="walking";if(C&&V){for(let[U,G]of[["ArmL",1],["ArmR",-1],["LegL",-1],["LegR",1]])T[U]&&(T[U].rotation.x=Math.sin(R.legPhase)*.55*G);w.position.y+=Math.abs(Math.sin(R.legPhase))*.022}else if(C){if(b)for(let U of["LegL","LegR"])T[U]&&(T[U].rotation.x=-1.05);if(D&&(T.ArmL&&(T.ArmL.rotation.x=-.85+Math.sin(k*8+R.index)*.07),T.ArmR&&(T.ArmR.rotation.x=-.85+Math.cos(k*8+R.index)*.07)),R.pose==="coffee"&&T.ArmR&&(T.ArmR.rotation.x=-.8-1.15*(.5+.5*Math.sin(k*1.5))),R.pose==="game"&&(T.ArmL&&(T.ArmL.rotation.x=-.95,T.ArmL.rotation.z=1),T.ArmR&&(T.ArmR.rotation.x=-.95,T.ArmR.rotation.z=-1)),(R.pose==="read"||R.pose==="prayer")&&(T.ArmL&&(T.ArmL.rotation.x=-.5),T.ArmR&&(T.ArmR.rotation.x=-.5)),R.pose==="swim"){w.position.y+=Math.sin(k*2)*.055;for(let[U,G]of[["ArmL",1],["ArmR",-1]])T[U]&&(T[U].rotation.x=Math.sin(k*2)*.7,T[U].rotation.z=G*(.8+Math.cos(k*2)*.5))}}T.cup.visible=C&&!V&&R.pose==="coffee",T.controller.visible=C&&!V&&R.pose==="game";for(let U of["ShoeL","ShoeR"])T[U]&&(T[U].visible=!(C&&R.floor===0&&R.pos[0]>6.5&&R.pos[0]<12.5&&R.pos[2]<-3.5));w.visible=o(R.floor);let P=f.get(R.id);M.copy(w.position),M.y+=1.95,M.project(r);let O=w.visible&&M.z<1&&Math.abs(M.x)<1.05&&Math.abs(M.y)<1.05;P.hidden=!O,O&&(P.style.transform=`translate(-50%,-100%) translate(${(M.x+1)*i.clientWidth/2}px,${(1-M.y)*i.clientHeight/2}px)`,P.dataset.phase=R.phase,P.dataset.distant=String(r.position.distanceTo(w.position)>22),P.querySelector("small").textContent=C?R.activity:"Preview")}c&&(c.getWorldPosition(M),M.y+=1.95,M.project(r),p.hidden=!o(1)||Math.abs(M.x)>1||Math.abs(M.y)>1||M.z>1,p.style.transform=`translate(-50%,-100%) translate(${(M.x+1)*i.clientWidth/2}px,${(1-M.y)*i.clientHeight/2}px)`)}for(let m of u){let R=e.get(m.id);n.attach(R),R.position.set(...m.pos)}return{simulation:h,sync:y,register(m,R){n.attach(R),R.userData.activityRig=!1,_(m,R)},get(m){return u.find(R=>R.id===m)},labelCount:()=>f.size}}var vi=s=>()=>(s=s*16807%2147483647,s/2147483647);function In(s,e,t,n=[1,1]){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let r=new zt(i);return r.colorSpace=nt,r.wrapS=r.wrapT=Yt,r.repeat.set(...n),r.anisotropy=4,r}function wd({glass:s,glowTop:e,glowBottom:t,frame:n,seed:i}){return In(512,512,(r,o,a)=>{let c=vi(i),l=r.createLinearGradient(0,0,0,a);l.addColorStop(0,s[0]),l.addColorStop(1,s[1]),r.fillStyle=l,r.fillRect(0,0,o,a);for(let h=0;h<4;h++){let u=h*128;if(!(c()>.18))continue;let f=r.createLinearGradient(0,70,0,a);f.addColorStop(0,e),f.addColorStop(1,t),r.globalAlpha=.55+c()*.4,r.fillStyle=f,r.fillRect(u+6,62,116,a-70),r.globalAlpha=1,r.fillStyle="#fff6dd";for(let v=0;v<3;v++)r.beginPath(),r.arc(u+22+v*40,74,3,0,7),r.fill();r.fillStyle="rgba(20,14,10,.55)";let g=Math.floor(c()*4);g===0?(r.fillRect(u+16,a-120,90,34),r.fillRect(u+16,a-150,90,30)):g===1?(r.fillRect(u+40,a-150,10,90),r.beginPath(),r.arc(u+45,a-170,28,0,7),r.fill()):g===2?(r.fillRect(u+20,a-110,80,10),r.fillRect(u+30,a-100,6,40),r.fillRect(u+84,a-100,6,40),r.fillRect(u+50,a-160,30,40)):(r.fillRect(u+70,a-210,8,150),r.fillRect(u+56,a-220,36,14))}r.fillStyle=n,r.fillRect(0,0,o,46),r.fillRect(0,a-14,o,14);for(let h=0;h<=o;h+=128)r.fillRect(h-4,0,8,a);r.fillStyle="rgba(255,255,255,.07)",r.beginPath(),r.moveTo(0,a*.7),r.lineTo(o*.55,0),r.lineTo(o*.7,0),r.lineTo(0,a*.92),r.fill()})}function Ad(s,e){return In(256,256,(t,n,i)=>{let r=vi(s);t.fillStyle="#161d2b",t.fillRect(0,0,n,i);for(let o=4;o<i;o+=16)for(let a=12;a<n;a+=30){let c=r()<.48;t.fillStyle=c?r()<e?"#ffcf86":"#cde6ff":"#283246",t.fillRect(a,o,22,10)}t.fillStyle="#111722",t.fillRect(0,0,8,i)})}function iy(s,e,t,n,i=!1){return In(512,512,(r,o,a)=>{let c=vi(t);r.fillStyle=s,r.fillRect(0,0,o,a);for(let l=0;l<5e3;l++)r.fillStyle=e[l%e.length],r.fillRect(c()*o,c()*a,1+c()*2,1+c()*2);if(i){r.strokeStyle="rgba(0,0,0,.18)",r.lineWidth=3;for(let l=0;l<=o;l+=128)r.beginPath(),r.moveTo(l,0),r.lineTo(l,a),r.moveTo(0,l),r.lineTo(o,l),r.stroke()}},n)}function Rd(s,e,t,n,i){return In(512,512,(r,o,a)=>{let c=vi(t);r.fillStyle=s,r.fillRect(0,0,o,a);for(let l=0;l<90;l++){let h=c()*a;r.strokeStyle=e,r.globalAlpha=.08+c()*.18,r.lineWidth=.6+c()*1.8,r.beginPath(),r.moveTo(0,h),r.bezierCurveTo(o*.3,h+(c()-.5)*220,o*.6,h+(c()-.5)*180,o,h+(c()-.5)*200),r.stroke()}if(r.globalAlpha=1,i){r.fillStyle="rgba(120,110,95,.35)";for(let l=0;l<o;l+=i)r.fillRect(l,0,2,a),r.fillRect(0,l,o,2)}},n)}function sy(){return In(512,512,(s,e,t)=>{let n=vi(91);s.fillStyle="#3b2618",s.fillRect(0,0,e,t);for(let i=-2;i<10;i++)for(let r=-2;r<10;r++){let o=r*64,a=i*64;for(let[c,l,h]of[[0,0,Math.PI/4],[32,32,-Math.PI/4]]){s.save(),s.translate(o+c,a+l),s.rotate(h);let u=n();s.fillStyle=`rgb(${92+u*40},${58+u*26},${34+u*16})`,s.fillRect(0,0,88,20),s.strokeStyle="rgba(20,12,6,.6)",s.lineWidth=2,s.strokeRect(0,0,88,20),s.restore()}}},[5,4])}function ry(){return In(512,384,(s,e,t)=>{s.fillStyle="#1d3a2e",s.fillRect(0,0,e,t),s.strokeStyle="#c8a25a",s.lineWidth=10,s.strokeRect(18,18,e-36,t-36),s.lineWidth=3,s.strokeRect(40,40,e-80,t-80),s.fillStyle="#284b3c",s.beginPath(),s.ellipse(e/2,t/2,120,80,0,0,7),s.fill(),s.strokeStyle="#d7b26a",s.lineWidth=4,s.beginPath(),s.ellipse(e/2,t/2,120,80,0,0,7),s.stroke();for(let n=0;n<8;n++){let i=n*Math.PI/4;s.fillStyle="#b88a47",s.beginPath(),s.ellipse(e/2+Math.cos(i)*70,t/2+Math.sin(i)*45,14,7,i,0,7),s.fill()}})}function oy(){return In(512,512,(s,e,t)=>{let n=vi(17);s.fillStyle="#1f3d22",s.fillRect(0,0,e,t);for(let i=0;i<2600;i++){let r=n()*e,o=n()*t,a=6+n()*16;s.fillStyle=["#2f6b34","#3f8a3e","#5aa04a","#24552b","#78b55a"][i%5],s.beginPath(),s.ellipse(r,o,a,a*.45,n()*3,0,7),s.fill()}},[2,2])}function ay(){return In(256,256,(s,e,t)=>{let n=vi(5);s.fillStyle="#4f8a34",s.fillRect(0,0,e,t);for(let i=0;i<4e3;i++)s.fillStyle=["#5c9a3c","#447a2c","#6aa748"][i%3],s.fillRect(n()*e,n()*t,1,3)},[8,8])}function Cd(s,{bg:e="#1b2420",fg:t="#e6c98f",w:n=1024,h:i=512,font:r="Georgia"}={}){return In(n,i,o=>{o.fillStyle=e,o.fillRect(0,0,n,i),o.fillStyle=t,o.textAlign="center";let a=i*.52;for(let[c,l,h]of s)o.font=`${l}px ${r}`,o.letterSpacing=`${h||0}px`,o.fillText(c,n/2,a),a+=l*.95})}function Id(s="#e9c983",e="rgba(0,0,0,0)"){return In(512,512,(t,n,i)=>{t.fillStyle=e,t.fillRect(0,0,n,i),t.strokeStyle=s,t.lineWidth=26,t.beginPath(),t.arc(n/2,i/2,210,0,7),t.stroke(),t.lineWidth=10,t.beginPath(),t.arc(n/2,i/2,176,0,7),t.stroke(),t.lineWidth=34,t.lineJoin="round",t.beginPath(),t.moveTo(178,360),t.lineTo(178,152),t.lineTo(334,360),t.lineTo(334,152),t.stroke()})}function cy(s,e,t,n,i=!1){let r=new pt(s,e,t),o=r.attributes.uv,a=[[t,e],[t,e],[s,t],[s,t],[s,e],[s,e]];for(let c=0;c<6;c++)for(let l=0;l<4;l++){let h=c*4+l;i&&(c===2||c===3)?o.setXY(h,.01,.5):o.setXY(h,o.getX(h)*a[c][0]/n[0],o.getY(h)*a[c][1]/n[1])}return r}function Pd({scene:s,floors:e,shell:t,context:n,glassMaterials:i}){let r=new Map,o=(E,{metalness:B=0,roughness:X=.7,glow:W=0,side:z}={})=>{let q=[E,B,X,W,z].join();return r.has(q)||r.set(q,new Ve({color:E,metalness:B,roughness:X,emissive:W?E:"#000000",emissiveIntensity:W,side:z||cn})),r.get(q)},a={value:0};function c(E,B){return new $t({uniforms:{time:a,deep:{value:new ke(E)},shallow:{value:new ke(B)}},vertexShader:"varying vec3 wp;void main(){vec4 w=modelMatrix*vec4(position,1.);wp=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:"uniform float time;uniform vec3 deep;uniform vec3 shallow;varying vec3 wp;void main(){vec2 q=wp.xz*1.25;float a=sin(q.x*1.6+time*.9+sin(q.y*1.2+time*.45))*cos(q.y*1.8-time*.7);float c=pow(1.-abs(a),12.);vec3 col=mix(deep,shallow,.5+.4*sin(q.x*.33+q.y*.29));col+=vec3(.8,.97,1.)*c*.38;gl_FragColor=vec4(col,1.);}"})}function l(E,B,X,W,z,q,A){let J=new Se(B,typeof X=="string"?o(X):X);return J.position.set(W,z,q),A&&J.rotation.set(...A),J.castShadow=!0,J.receiveShadow=!0,E.add(J),J}let h=(E,B,X,W,z,q,A,J,oe=0,re)=>l(E,oe?new yi(z,q,A,2,Math.min(oe,z/2.1,q/2.1,A/2.1)):new pt(z,q,A),J,B,X,W,re),u=(E,B,X,W,z,q,A,J,oe,re)=>l(E,cy(z,q,A,oe,re),J,B,X,W),d=(E,B,X,W,z,q,A,J=z,oe=18,re)=>l(E,new Ht(J,z,q,oe),A,B,X,W,re),f=(E,B,X,W,z,q,A)=>{let J=l(E,new di(z,14,10),q,B,X,W);return A&&J.scale.set(...A),J},g=(E,B,X,W,z,q,A,J=[-Math.PI/2,0,0])=>{let oe=l(E,new Nt(z,q),A,B,X,W,J);return oe.castShadow=!1,oe};function v(E,B,X,W,z,q,A,J=Math.PI*2,oe=[0,0,0]){return l(E,new As(z,q,8,40,J),A,B,X,W,oe)}function _(E){return E.userData.keep=!0,E}function p(E){E.updateMatrixWorld(!0);let B=new Map,X=[];E.traverse(W=>{if(!W.isMesh||W.userData.keep||W===E)return;let z=W.geometry.index?W.geometry.toNonIndexed():W.geometry.clone();for(let A of Object.keys(z.attributes))["position","normal","uv"].includes(A)||z.deleteAttribute(A);z.applyMatrix4(new ze().copy(E.matrixWorld).invert().multiply(W.matrixWorld));let q=W.material;B.has(q)||B.set(q,[]),B.get(q).push(z),X.push(W)});for(let W of X)W.removeFromParent(),W.geometry.dispose();for(let[W,z]of B){let q=jn(z);if(!q)continue;let A=new Se(q,W);A.castShadow=!0,A.receiveShadow=!0,E.add(A),z.forEach(J=>J.dispose())}}let M=[new Ve({color:"#4f7d3f",roughness:.85,side:At}),new Ve({color:"#6d9a4c",roughness:.85,side:At})],y=(()=>{let E=[],B=[],X=[];for(let z=0;z<=8;z++){let q=z/8,A=.34*Math.sin(q*Math.PI);for(let J of[-1,1])E.push(J*A,Math.sin(q*Math.PI)*.38-q*.95,q*2.6),B.push(J<0?0:1,q);if(z<8){let J=z*2;X.push(J,J+1,J+2,J+1,J+3,J+2)}}let W=new vt;return W.setAttribute("position",new $e(E,3)),W.setAttribute("uv",new $e(B,2)),W.setIndex(X),W.computeVertexNormals(),W})();function m(E,B,X,W,z=5,q=1){let A=new Ts([new F(B,X,W),new F(B+.18*q,X+z*.5,W+.1*q),new F(B+.42*q,X+z,W)]);l(E,new _r(A,10,.13*q,7,!1),"#8b7552",0,0,0);for(let J=0;J<10;J++){let oe=l(E,y.clone(),M[J%2],B+.42*q,X+z,W);oe.scale.setScalar(q),oe.rotation.set(0,J*Math.PI*2/10,0),oe.castShadow=!0}}function R(E,B,X,W,z=1,q="#3f6b35"){l(E,new gr(.55*z,1),q,B,X+.4*z,W).scale.set(1.2,.8,1.2)}function w(E,B,X,W,z=4,q=1.6){d(E,B,X+z/2,W,.14,z,"#6e5537",.1,8);for(let[A,J,oe,re]of[[0,z,0,1],[.6,z-.4,.3,.75],[-.5,z-.3,-.4,.8],[.2,z+.6,-.2,.7]])l(E,new gr(re*q*.8,1),"#4e7d3a",B+A*q*.7,X+J,W+oe*q*.7)}function C(E,B,X,W,z,q,A="#d9cdb8"){h(E,B,X+.3,W,z,.6,q,A,.05);for(let J=0;J<Math.max(1,Math.round(z/.9));J++)R(E,B-z/2+.45+J*(z-.9)/Math.max(1,Math.round(z/.9)-1||1),X+.45,W,.65,J%2?"#4a7a3c":"#3a6532")}function D(E,B,X,W,z=0,q="#f1ece2"){let A=new et;A.position.set(B,X,W),A.rotation.y=z,E.add(A),h(A,0,.32,0,.75,.14,1.9,q,.04),h(A,0,.55,-.75,.75,.5,.12,q,.04,[-.6,0,0]);for(let J of[-.3,.3])for(let oe of[-.8,.8])h(A,J,.14,oe,.06,.28,.06,"#3a3a3a")}function b(E,B,X,W,z="#f3efe6"){d(E,B,X+1.3,W,.04,2.6,"#5a4a3a"),l(E,new ur(1.5,.6,12),z,B,X+2.65,W)}function S(E,B,X,W,z,q){let A=new et;A.position.set(B,X,W),A.rotation.y=z,E.add(A),h(A,0,.42,0,1.9,.55,4.3,q,.18),h(A,0,.86,-.2,1.7,.45,2.3,"#1c2430",.16);for(let J of[-.85,.85])for(let oe of[-1.35,1.35])d(A,J,.32,oe,.32,.24,"#151515",.32,12,[0,0,Math.PI/2]);for(let J of[-.6,.6])h(A,J,.5,2.16,.32,.12,.04,o("#fff5d6",{glow:1.6})),h(A,J,.5,-2.16,.32,.1,.04,o("#ff4a3a",{glow:1.3}))}function T(E,B,X,W,z=3.2,q="#ffd890"){d(E,B,X+z/2,W,.06,z,"#2c2a26",.05,8),f(E,B,X+z+.1,W,.22,o(q,{glow:1.8}))}function k(E,B,X,W,z,q=0,A=1.1){let J=new et;J.position.set(B,X,W),J.rotation.y=q,E.add(J);let oe=new mt({color:"#cfe6ee",transparent:!0,opacity:.28,roughness:.05,metalness:.1,depthWrite:!1}),re=new Se(new pt(z,A,.04),oe);re.position.y=A/2,_(re),J.add(re),h(J,0,A+.02,0,z,.05,.08,"#c9c6bd",0)}function V(E,B,X,W,z=.6,q=12){for(let A=0;A<=q;A++){let J=A/q;f(E,B[0]+(X[0]-B[0])*J,W-Math.sin(J*Math.PI)*z,B[1]+(X[1]-B[1])*J,.07,o("#ffe2a0",{glow:2.2}))}}function P(E,B,X,W,z,q,A,J=0,oe=.5){let re=new Ve({map:B,emissive:"#ffffff",emissiveMap:B,emissiveIntensity:oe,roughness:.5,transparent:!0}),j=new Se(new Nt(q,A),re);return j.position.set(X,W,z),j.rotation.y=J,_(j),E.add(j),j}function O(E,{seed:B,count:X,rMin:W,rMax:z,hMin:q,hMax:A,base:J,warm:oe,avoid:re=()=>!1,low:j=()=>!1}){let ve=vi(B),ge=[0,1,2].map(I=>new Ve({map:Ad(B+I*13,oe),emissive:"#ffffff",emissiveMap:null,emissiveIntensity:0,roughness:.6,metalness:.2}));ge.forEach(I=>{I.emissiveMap=I.map,I.emissiveIntensity=.9});for(let I=0;I<X;I++){let x=ve()*Math.PI*2,N=W+ve()*(z-W),Y=Math.cos(x)*N,Q=Math.sin(x)*N;if(re(Y,Q))continue;let te=7+ve()*11,fe=7+ve()*11,pe=q+Math.pow(ve(),1.6)*(A-q);j(Y,Q,N)&&(pe=Math.min(pe,q*.6+ve()*4)),u(E,Y,J+pe/2,Q,te,pe,fe,ge[I%3],[16,32],!0),ve()<.3&&h(E,Y,J+pe+.6,Q,te*.5,1.2,fe*.5,"#1d2431")}}let U=[...t.children],G=[...n.children];U.forEach(E=>E.visible=!1),G.forEach(E=>E.visible=!1);let H=[];s.traverse(E=>{E.userData.workspaceSofa&&H.push(E)}),H.forEach(p);let ee=new Map,ne=(E,B)=>(B.visible=!1,ee.has(E)||ee.set(E,[]),ee.get(E).push(B),B),he=(E,B,X)=>{let W=new et;return W.name=B,X.add(W),ne(E,W)};{let E=he("senja","Menara Senja \u2014 tower",t),B=he("senja","Menara Senja \u2014 podium & city",n),X="#ece2cf",W=o("#9a7a4c",{metalness:.7,roughness:.35}),z=o("#4a3122",{roughness:.5}),q="#3a3430",A=new mt({transmission:0,map:wd({glass:["#2b2730","#3a2c26"],glowTop:"#ffd9a0",glowBottom:"#b9773f",frame:"#1d1814",seed:3}),roughness:.18,metalness:.35,emissive:"#ffffff",emissiveIntensity:.62,transparent:!1,opacity:1});A.emissiveMap=A.map,A.userData.facade=!0,i.push(A);let J=o("#ffd28a",{glow:2.4}),oe=5,re=6,j=oe*re;for(let x=0;x<oe;x++){let N=x*re;u(E,-9.8,N+2.9,11.75,10.4,5.4,.3,A,[6,6]),u(E,9.8,N+2.9,11.75,10.4,5.4,.3,A,[6,6]),u(E,0,N+2.9,12.35,9,5.4,.3,A,[6,6]),u(E,0,N+2.9,-11.95,30,5.4,.3,A,[6,6]);for(let Y of[-1,1])u(E,Y*14.95,N+2.9,0,.3,5.4,24,A,[6,6]);h(E,0,N+5.85,0,30.8,.5,24.8,X,.04),h(E,0,N+5.58,12.42,30.4,.05,.06,J);for(let Y of[-14.2,-11.5,-8.1,-5.2,5.2,8.1,11.5,14.2])h(E,Y,N+2.9,12.05,.32,5.4,.5,X);for(let Y of[-1,1])for(let Q=-10;Q<=10;Q+=4)h(E,Y*15.15,N+2.9,Q,.5,5.4,.32,X);for(let Y=-12;Y<=12;Y+=4)h(E,Y,N+2.9,-12.15,.32,5.4,.5,X);if(x>0){let Y=x%2?-9.6:9.6;h(E,Y,N+.12,13.6,8.6,.24,3.2,X,.04),h(E,Y,N-.02,15.14,8.6,.05,.05,J),k(E,Y,N+.24,15.15,8.6),C(E,Y,N+.24,14.75,8.2,.5,"#d8ccb4"),D(E,Y-2.2,N+.24,13.4,Math.PI/2),D(E,Y+1.4,N+.24,13.4,Math.PI/2),m(E,Y+3.6,N+.6,13.3,2.6,.55)}}for(let x=-4.3;x<=4.31;x+=.43)h(E,x,j/2+.2,12.75,.16,j-.6,.5,x%.86<.1?z:W);h(E,0,j/2,12.95,9.6,1e-4+j,.06,o("#1a1410"));for(let x of[-1,1])h(E,x*4.85,j/2,12.8,.7,j,.9,X),h(E,x*4.85,j/2,13.27,.08,j-.4,.04,J);h(E,0,18.2,13.25,4.3,4.3,.12,o("#211915")),P(E,Id("#f0cf8a"),0,18.2,13.33,3.9,3.9,0,1.1);for(let x of[-1,1])for(let N of[-1,1])h(E,x*15.2,j/2,N*12.2,1.1,j+.4,1.1,X,.05),h(E,x*15.78,j/2,N*12.2,.05,j-1,.08,J);h(E,0,2.4,13.05,7.6,4.8,.2,o("#16110d")),u(E,0,2.3,13.17,7,4.4,.1,A,[3.5,4.4]),h(E,0,4.95,15,9.4,.32,4.4,X,.06),h(E,0,4.76,15,8.6,.05,3.6,J);for(let x of[-1,1])h(E,x*4.2,2.4,16.9,.3,4.8,.3,W);for(let x=0;x<4;x++)h(E,0,-.1-x*.08,13.6+x*.55,10-x*.2,.16,.6,"#e3d8c4");P(E,Cd([["NEXA OFFICE",150,18],["CREATIVE TOWER",44,14]],{bg:"#14100d"}),0,6.5,12.98,7.2,1.6,0,.9),h(E,0,j+.15,0,30.8,.3,24.8,X,.05),h(E,0,j+.33,0,30,.06,24,o("#8b6a4c",{roughness:.6})),h(E,-2,j+.5,3.6,17.6,.34,10.4,"#e8decb",.04);let ve=_(g(E,-2,j+.69,3.6,16.6,9.4,c("#0b5b78","#3fc6d6")));ve.castShadow=!1,h(E,-2,j+.45,8.85,16.6,.5,.12,o("#6fe2ef",{glow:1.6})),h(E,-2,j+.2,9.2,17.6,.12,.05,o("#7ff0ff",{glow:2.2}));for(let x=0;x<5;x++)D(E,-12.6,j+.36,-1+x*2.2,Math.PI/2);for(let x of[-8,0,6])b(E,x,j+.36,-3.2);for(let x of[-1,1]){let N=x*10.6;h(E,N,j+2.1,-8.2,8,3.5,6.2,o("#222"),0),u(E,N,j+2.1,-5.05,7.8,3.4,.1,A,[3.9,3.4]),h(E,N,j+4.05,-7.9,9.2,.3,7.4,"#1d1a17",.05),h(E,N,j+3.88,-4.25,9,.04,.05,J)}h(E,0,j+1.2,-9.6,6,2.2,1.4,z,.05),h(E,0,j+2.35,-9.6,6.4,.12,1.8,"#e6dccb");for(let x of[-3,3])for(let N of[-11,-7])h(E,x,j+2.2,N,.18,3.7,.18,W);for(let x=-3;x<=3;x+=.5)h(E,x,j+4.1,-9,.1,.12,4.4,z);h(E,0,j+2.9,-11.3,3.6,2,.15,"#151515"),g(E,0,j+2.9,-11.21,3.3,1.75,o("#7fb8d8",{glow:1.2}),[0,0,0]);for(let[x,N]of[[-13.6,-10.8],[13.6,-10.8],[-13.6,10.6],[13.6,10.6],[7.6,-1]])h(E,x,j+.75,N,1.4,.8,1.4,"#d8ccb4",.05),m(E,x,j+1.1,N,3.4,.75);for(let[x,N,Y,Q]of[[30,0,12.3,0],[30,0,-12.3,0],[24.6,-15.3,0,Math.PI/2],[24.6,15.3,0,Math.PI/2]])k(E,N,j+.36,Y,x,Q,1);V(E,[-14,-12],[14,-12],j+3.4,.5,16),h(B,0,-.55,6,56,.4,52,"#d8cdb9",.1),h(B,0,-.33,19,56,.02,12,o("#cfc3ad")),g(B,0,-.32,6,56,52,new Ve({map:iy("#d9cfbd",["#cbbfaa","#e4dccb"],8,[14,13],!0),roughness:.85})),h(B,-10,-.15,19.5,9,.5,6,q,.08),_(g(B,-10,.12,19.5,8.4,5.4,c("#0d4a63","#4cc0d0")));for(let x=0;x<14;x++){let N=-13.6+x*.55;d(B,N,.6+Math.sin(x)*.15,17.4,.03,1.3+Math.sin(x*1.7)*.3,o("#d9f6ff",{glow:1.4}),.02,6),d(B,N,.45,21.6,.03,.9,o("#d9f6ff",{glow:1.4}),.02,6)}for(let x of[18.6,20.4])for(let N=0;N<6;N++)h(B,-12.5+N*1,-.05,x,.12,.08,.12,o("#ffe4a0",{glow:2}));h(B,-10,.9,24.2,4.6,2.4,.5,"#1e1915",.05),P(B,Id("#e8c784"),-10,.9,24.48,1.9,1.9,0,1),h(B,10.5,-.3,21,9,.06,12,o("#34363b",{roughness:.9})),S(B,8.2,-.27,19,0,"#1c1f26"),S(B,12.7,-.27,22.5,Math.PI,"#e9e6df"),S(B,0,-.3,17.2,Math.PI/2,"#26303a");for(let x=-26;x<=26;x+=4)Math.abs(x)>4&&(h(B,x,.15,31.6,4,.9,.5,X,.04),h(B,x+2,.6,31.6,.6,1.8,.6,X,.05),h(B,x+2,1.55,31.6,.4,.12,.4,J));for(let x of[-1,1])for(let N=-18;N<=30;N+=4)h(B,x*27.6,.15,N,.5,.9,4,X,.04),h(B,x*27.6,.6,N+2,.6,1.8,.6,X,.05);for(let x=-24;x<=24;x+=4.2)m(B,x,-.35,29.4,5.2+x*7%3,1);for(let x of[-1,1])for(let N=-16;N<=26;N+=5)m(B,x*24.8,-.35,N,5+N*3%2,1);for(let x of[-1,1]){C(B,x*10,-.35,14.3,9,.8);for(let N=16;N<=28;N+=4)T(B,x*4.6,-.35,N,3.4)}let ge=o("#2a2c31",{roughness:.95});h(B,0,-.9,0,420,.2,420,ge);for(let x of[-1,1])h(B,0,-.79,34+x*0,420,.02,.25,o("#d9d2c2"));for(let x=-200;x<200;x+=6)h(B,x,-.78,38,3,.02,.22,o("#e9e2d0"));for(let x=-200;x<200;x+=6)for(let N of[-1,1])h(B,N*36,-.78,x,.22,.02,3,o("#e9e2d0"));for(let x=0;x<7;x++)h(B,-6+x*1.2,-.78,41.5,.6,.02,4,o("#efe9db"));h(B,0,-.7,33,64,.18,2.6,"#bdb5a6");for(let x of[-1,1])h(B,x*30.5,-.7,6,2.6,.18,56,"#bdb5a6");h(B,0,-.7,-21,64,.18,2.6,"#bdb5a6"),[[-20,40,0],[14,40.5,0],[36,-12,Math.PI/2],[-36,20,Math.PI/2],[34,52,0],[-50,36,0]].forEach(([x,N,Y],Q)=>S(B,x,-.8,N,Y,["#c9c3b6","#1f2a33","#7c2e2a","#e8e4da","#3d4a3e","#2b2b2b"][Q])),_(g(B,-78,-.75,0,30,420,c("#29345a","#6a6390")));let I=(x,N)=>{let Y=Math.atan2(N,x)*180/Math.PI;return Y>-5&&Y<110};O(B,{seed:21,count:110,rMin:56,rMax:190,hMin:10,hMax:72,base:-.8,warm:.75,avoid:(x,N)=>x<-60&&x>-96||I(x,N)&&Math.hypot(x,N)<120,low:(x,N,Y)=>I(x,N)}),p(E),p(B)}{let j=function(x,N,Y,Q,te,fe,{front:pe=!0,back:we=!0,left:Ze=!0,right:me=!0}={}){h(E,x,N+te-.2,Y,Q+.6,.4,fe+.6,re,.04),h(E,x,N+.15,Y,Q+.3,.3,fe+.3,re);let Ie=(Le,Be,Pe,Je)=>{let We=u(E,Le,N+te/2-.05,Be,Pe,te-.6,.2,q,[5,te-.6]);We.rotation.y=Je};pe&&Ie(x,Y+fe/2,Q-1.2,0),we&&Ie(x,Y-fe/2,Q-1.2,0),Ze&&Ie(x-Q/2,Y,fe-1.2,Math.PI/2),me&&Ie(x+Q/2,Y,fe-1.2,Math.PI/2);for(let Le of[-1,1])for(let Be of[-1,1])h(E,x+Le*Q/2,N+te/2,Y+Be*fe/2,.7,te,.7,re);for(let Le=-Q/2+5;Le<Q/2-1;Le+=5)for(let Be of[-1,1])h(E,x+Le,N+te/2,Y+Be*(fe/2+.08),.12,te-.6,.14,W);for(let Le=-fe/2+5;Le<fe/2-1;Le+=5)for(let Be of[-1,1])h(E,x+Be*(Q/2+.08),N+te/2,Y+Le,.14,te-.6,.12,W)},E=he("langit","Griya Langit \u2014 penthouse",t),B=he("langit","Griya Langit \u2014 tower & city",n),X="#f3f1ec",W=o("#141618",{roughness:.4,metalness:.4}),z=new Ve({map:Rd("#eeebe4","#9e978b",4,[6,5],128),roughness:.3}),q=new mt({transmission:0,map:wd({glass:["#1d2c44","#2c3c55"],glowTop:"#fff1d2",glowBottom:"#d8b886",frame:"#101214",seed:11}),roughness:.12,metalness:.45,emissive:"#ffffff",emissiveIntensity:.55,transparent:!1,opacity:1});q.emissiveMap=q.map,q.userData.facade=!0,i.push(q);let A=o("#e9f6ff",{glow:2.2}),J=new Ve({map:Ad(77,.55),roughness:.35,metalness:.5});J.emissiveMap=J.map,J.emissive=new ke("#ffffff"),J.emissiveIntensity=.65,u(B,0,-46,1,30,90,24,J,[16,32],!0);for(let x of[-1,1])for(let N of[-1,1])h(B,x*15.2,-46,1+N*12.2,.8,90,.8,"#9aa3ad",0);h(E,0,-.55,3,46,1.1,40,X,.12),h(E,0,-1.12,3,45.4,.05,39.4,A),g(E,0,.012,3,46,40,z);let oe=new Ve({map:ay(),roughness:.95,color:"#93ad80"});for(let[x,N,Y,Q]of[[-19,3,7.6,38],[0,20,30,5.6],[19,-6,7.6,20]])g(E,x,.03,N,Y,Q,oe);for(let x=0;x<7;x++)h(E,-19,.05,-12+x*4.2,1.8,.05,.9,"#e6e2da");for(let[x,N,Y,Q]of[[46,0,22.9,0],[46,0,-16.9,0],[39.6,-22.9,3,Math.PI/2],[39.6,22.9,3,Math.PI/2]])k(E,N,0,Y,x,Q,1.15);h(E,18.2,.25,15.6,8.4,.5,9.4,"#e9e5dc",.05),_(g(E,18.2,.51,15.6,7.6,8.6,c("#0f5f82","#55d2e4"))),h(E,18.2,.3,20.35,8.4,.05,.06,o("#86f2ff",{glow:2}));for(let x of[9.4,11.6])D(E,13.2,0,x,Math.PI/2,"#f7f5f0");h(E,-8,.32,18.8,7,.5,1.1,"#d9d4ca",.12),h(E,-8,.75,18.35,7,.8,.25,"#d9d4ca",.08),h(E,-11.8,.32,16.8,1.1,.5,4.6,"#d9d4ca",.12),h(E,-8,.3,16.6,2.4,.5,1.4,"#3a3a3a",.06),h(E,-8,.58,16.6,1.8,.06,.6,o("#ff9a4a",{glow:2.4}));for(let[x,N]of[[-21,-14.5],[-21,20.5],[21,-14.5],[6,20.6],[-21,9]])d(E,x,.45,N,.8,.9,"#e4e0d7",.85,16),w(E,x,.9,N,2.6,1.1);let re=o(X,{roughness:.55});j(0,0,0,30,6,24),j(-1.5,6,-4,33,6.4,16.6),h(E,-1.5,12.6,-4,35,.35,18.4,X,.08),h(E,-1.5,12.38,5.25,34.4,.05,.06,A),h(E,-1.5,5.78,12.42,30.6,.05,.06,A),g(E,0,6.32,8.4,28,6.8,oe);for(let x of[-9,-4,1])D(E,x,6.3,8.6,0,"#f7f5f0");for(let x of[6,10])b(E,x,6.3,9,"#ffffff");h(E,0,6.4,11.6,6,.5,1.2,"#e4e0d7",.1),k(E,0,6.2,12.3,30);for(let x of[-1,1])k(E,x*15.2,6.2,8.4,8,Math.PI/2);g(E,-1.5,12.8,-4,30,14,oe);for(let[x,N]of[[-12,-9],[9,-9],[-1,0]])d(E,x,13.2,N,.7,.8,"#e4e0d7",.75,16),w(E,x,13.6,N,2.2,.9);h(E,-21,6.1,4,8,.3,9,X,.06),h(E,-21,5.92,4,7.6,.04,8.6,A),k(E,-25,6.25,4,9,Math.PI/2),k(E,-21,6.25,8.5,8);for(let x of[-23,-20])D(E,x,6.25,2.5,Math.PI,"#f7f5f0");let ve=-18.6,ge=13.6;d(E,ve,.4,ge,1.1,.8,"#e4e0d7",1.15,24),w(E,ve,.8,ge,5.2,1.3);for(let x=0;x<20;x++){let N=x/20*Math.PI*1.7+.6,Y=x*.3+.3,Q=h(E,ve+Math.cos(N)*2,Y,ge+Math.sin(N)*2,1.5,.12,.62,o("#a77c55",{roughness:.5}));Q.rotation.y=-N;let te=h(E,ve+Math.cos(N)*2.78,Y+.35,ge+Math.sin(N)*2.78,.08,.9,.1,"#f3f1ec");te.rotation.y=-N}let I=new Ts(Array.from({length:24},(x,N)=>{let Y=N/23*Math.PI*1.7+.6;return new F(ve+Math.cos(Y)*2.8,N/23*6+1.1,ge+Math.sin(Y)*2.8)}));l(E,new _r(I,60,.06,6,!1),"#d9d6cf",0,0,0),h(E,0,3.1,12.25,6,5.6,.3,W),P(E,Cd([["NEXA OFFICE",140,22],["SKY HOUSE",40,16]],{bg:"#f3f1ec",fg:"#1b1d20",font:"Arial"}),0,4.6,12.42,5.4,1.2,0,.25),_(g(B,0,-92,0,600,600,o("#0c1424"))),_(g(B,60,-91,40,40,600,c("#0d1f38","#2a4f7a"),[-Math.PI/2,0,.3])),O(B,{seed:51,count:150,rMin:55,rMax:220,hMin:24,hMax:80,base:-92,warm:.55}),O(B,{seed:63,count:9,rMin:120,rMax:220,hMin:92,hMax:120,base:-92,warm:.3,avoid:(x,N)=>{let Y=Math.atan2(N,x)*180/Math.PI;return Y>0&&Y<100}}),p(E),p(B)}function ye(E,B){let X=new et;X.position.copy(E.position),X.rotation.copy(E.rotation),E.parent.add(X);let W=E.userData.workspaceSofa.width;if(B==="senja"){let z=o("#b9767c",{roughness:.9}),q=o("#c9a35a",{metalness:.8,roughness:.3});h(X,0,.42,0,W,.42,1,z,.16),h(X,0,.92,-.38,W,.9,.32,z,.15);for(let A of[-W/2+.14,W/2-.14]){let J=d(X,A,.82,0,.2,1.08,z,.2,16);J.rotation.x=Math.PI/2}for(let A of[-W*.28,0,W*.28])h(X,A,.66,.05,W*.27,.16,.8,o("#c48990",{roughness:.9}),.07);for(let A=0;A<Math.max(3,Math.floor(W*2.4));A++){let J=-W*.4+A*W*.8/(Math.max(3,Math.floor(W*2.4))-1);for(let oe of[.8,1.1])f(X,J,oe,-.215,.03,q)}for(let A of[-W/2+.2,W/2-.2])for(let J of[-.35,.35])d(X,A,.12,J,.04,.24,q,.025,8);f(X,-W*.28,1.02,-.12,1,o("#2f5a43",{roughness:.9}),[.24,.24,.1])}else{let z=o("#6c8fae",{roughness:.9});h(X,0,.42,0,W,.32,.95,z,.05),h(X,0,.86,-.4,W,.66,.18,z,.05);for(let q of[-W/2+.07,W/2-.07])h(X,q,.62,0,.14,.4,.95,z,.04);for(let q of[-W*.25,W*.25])h(X,q,.66,.04,W*.46,.14,.8,o("#7c9ebb",{roughness:.9}),.05);for(let q of[-W/2+.12,W/2-.12])for(let A of[-.35,.35])h(X,q,.13,A,.05,.26,.05,"#151515")}return p(X),X}let Oe=sy(),ae=Rd("#e6dccb","#a99a82",12,[6,5],170),le=ry(),be=oy();{let W=function(re,j,ve,ge,I=1){d(re,j,ve+.7,ge,.02,1.4,E,.02,6),v(re,j,ve,ge,.62*I,.035,E,Math.PI*2,[Math.PI/2,0,0]),v(re,j,ve+.32,ge,.38*I,.03,E,Math.PI*2,[Math.PI/2,0,0]);for(let x=0;x<10;x++){let N=x/10*Math.PI*2;f(re,j+Math.cos(N)*.62*I,ve+.08,ge+Math.sin(N)*.62*I,.07,B),f(re,j+Math.cos(N)*.62*I,ve-.12,ge+Math.sin(N)*.62*I,.035,X)}for(let x=0;x<6;x++){let N=x/6*Math.PI*2;f(re,j+Math.cos(N)*.38*I,ve+.4,ge+Math.sin(N)*.38*I,.06,B)}f(re,j,ve-.25,ge,.12,X)},z=function(re,j,ve,ge,I,x=.1){g(re,j,x,ve,ge,I,new Ve({map:le,roughness:.95}))},E=o("#caa25a",{metalness:.85,roughness:.28}),B=o("#ffe3a3",{glow:2.4}),X=o("#fff6dc",{glow:1.4,roughness:.1}),q=[0,1,2].map(re=>{let j=new et;return j.name=`Senja studio floor ${re+1}`,e[re].add(j),ne("senja",j)}),[A,J,oe]=q;h(A,0,4.42,-11.66,29.6,.14,.22,E),h(A,-14.66,4.42,0,.22,.14,23.6,E);for(let re=-13.5;re<14;re+=3)for(let j of[.35])h(A,re,j,-11.55,2.4,.5,.04,o("#173127")),h(A,re,j+.27,-11.53,2.4,.03,.03,E);for(let re of[-2,1,4,7,10]){let j=A;d(j,-14.55,2.1,re,.62,.04,o("#d5d3cb",{metalness:.9,roughness:.08}),.62,24,[0,0,Math.PI/2]).scale.set(1,1,1),v(j,-14.5,2.1,re,.66,.04,E,Math.PI*2,[0,Math.PI/2,0]),f(j,-14.45,3.05,re,.08,B)}for(let[re,j,ve]of[[-10.5,7.6,1.2],[11,8,1.1],[-8,-7.6,1.25],[2.5,-8.4,.9],[0,10.8,.8]])W(A,re,4.1,j,ve);for(let re of[-8.4,-3.6,4.5,9.3])for(let j of[0,4.8])d(A,re,3.75,j,.01,1.1,E,.01,4),d(A,re,3.15,j,.28,.18,E,.08,14),f(A,re,3.06,j,.09,B);z(A,-10.6,7.6,6,4.4),z(A,11,7.8,5,3.6),z(A,2.4,-7.6,5,2.6);for(let re of[-1,1])h(A,re*3.25,1.35,9.12,.42,2.7,.42,o("#173127"),.05),h(A,re*3.25,2.75,9.12,.55,.1,.55,E);v(A,0,2.75,9.12,3.25,.12,o("#173127"),Math.PI,[0,0,0]).scale.set(1,.42,1),v(A,0,2.75,9.02,3.12,.04,E,Math.PI).scale.set(1,.42,1);for(let[re,j]of[[-10.2,7],[10.7,7.2]])d(A,re,.95,j,.12,.06,E,.12,12),d(A,re,1.15,j,.02,.35,E,.02,6),l(A,new ur(.2,.22,14,1,!0),o("#f4dfb0",{glow:.9,side:At}),re,1.38,j);for(let[re,j]of[[-13.6,10.6],[13.5,10.6],[-13.6,-10.4]])m(A,re,0,j,3.2,.6);h(J,0,3.2,-11.25,29.6,.12,.2,E);for(let re=-13.5;re<14;re+=3)h(J,re,1.2,-11.3,2.4,1.9,.04,o("#173127")),h(J,re,2.18,-11.28,2.4,.03,.03,E);W(J,-9.5,4.4,-5.2,1.1),W(J,10,4.4,-5.4,.9),z(J,-9.4,-5,5.6,4.4,.1),z(J,9.6,-5.6,4.6,4,.1);for(let[re,j]of[[-13.8,.4],[2.8,-10.6]])m(oe,re,0,j,3.6,.8);V(oe,[4,-10],[13,-10],3.5,.35,12),V(oe,[4,0],[13,0],3.5,.35,12);for(let re=-13;re<=13;re+=4.3)h(oe,re,.25,.95,.3,.5,.3,"#1d1a17"),f(oe,re,.62,.95,.13,B);q.forEach(p)}{let q=function(I,x,N,Y,Q=!0,te=3.2){for(let pe=0;pe<=Y;pe+=1.25){let we=Q?x:x-Y/2+pe,Ze=Q?N-Y/2+pe:N;h(I,we,te/2,Ze,.06,te,.06,E)}let fe=_(new Se(new pt(Q?.03:Y,te,Q?Y:.03),z));fe.position.set(x,te/2,N),I.add(fe),h(I,x,te,N,Q?.08:Y,.08,Q?Y:.08,E),h(I,x,.04,N,Q?.08:Y,.08,Q?Y:.08,E)},A=function(I,x,N,Y=.5,Q=1.6,te=1.7){for(let fe of[-1,1])for(let pe of[-1,1])h(I,x+fe*Y/2,te/2,N+pe*Q/2,.04,te,.04,E);for(let fe=.05;fe<=te;fe+=te/3)h(I,x,fe,N,Y,.04,Q,B);for(let fe=-Q/2+Q/3;fe<Q/2;fe+=Q/3)h(I,x,te/2,N+fe,.04,te,.04,E);R(I,x,te/3+.05,N-Q/3,.35,"#4a8a3e"),h(I,x,te*2/3+.2,N+Q/3,.3,.32,.26,"#e9e4da"),R(I,x,te+.03,N,.4,"#3f7a36")},J=function(I,x,N,Y,Q,te,fe=!0){for(let pe=0;pe<Q;pe+=.22)h(I,fe?x-Q/2+pe:x,N+te/2,fe?Y:Y-Q/2+pe,fe?.1:.08,te,fe?.08:.1,B)},oe=function(I,x,N,Y,Q,te,fe){let pe=h(I,x,N+te/2,Y,Q,te,.12,o("#24442a"));return pe.rotation.y=fe,g(I,x+(fe?.07:0),N+te/2,Y+(fe?0:.07),Q,te,X,[0,fe,0])},E=o("#121315",{roughness:.45,metalness:.4}),B=o("#c9a77a",{roughness:.55}),X=new Ve({map:be,roughness:.95}),W=o("#fbfbf6",{glow:1.6}),z=new mt({color:"#e7f1f1",transparent:!0,opacity:.22,roughness:.05,metalness:.05,depthWrite:!1}),re=[0,1,2].map(I=>{let x=new et;return x.name=`Langit studio floor ${I+1}`,e[I].add(x),ne("langit",x)}),[j,ve,ge]=re;oe(j,-14.6,.25,6.6,7.4,3.9,Math.PI/2),oe(j,-1.6,.25,-11.55,2.2,3.9,0),J(j,-8,.05,-11.05,10,3.7),J(j,-14.58,.05,-3.2,5.6,3.7,!1),q(j,-2.75,-7.6,6.3);for(let I of[-6,6.9])for(let x of[0,4.8])A(j,I,x);for(let[I,x]of[[-13.4,10.6],[13.4,10.6],[-13.4,-10.3]])d(j,I,.35,x,.38,.7,"#f2f1ec",.32,16),w(j,I,.7,x,1.6,.7);J(ve,9.8,.05,-11.05,8,3.2),oe(ve,-9.6,.25,-11.1,7.4,2.9,0);for(let[I,x]of[[-13,-1.2],[4,-10.4]])d(ve,I,.35,x,.38,.7,"#f2f1ec",.32,16),w(ve,I,.7,x,1.6,.7);for(let[I,x]of[[-13.8,.4],[3,-10.6],[13.6,.4]])d(ge,I,.4,x,.45,.8,"#f2f1ec",.38,16),w(ge,I,.8,x,2,.85);re.forEach(p)}for(let E of["senja","langit"])for(let B of H){let X=ye(B,E);ne(E,X)}return{textures:{parquet:Oe,marbleBeige:ae},apply(E){H.forEach(B=>B.visible=!1);for(let[B,X]of ee)X.forEach(W=>W.visible=B===E)},update(E){a.value=E},snapshot:()=>[...ee].map(([E,B])=>({id:E,active:B.every(X=>X.visible),groups:B.length}))}}var mn=[{id:"senja",previewBackground:"#3b2f3c",name:"Menara Senja",tag:"Menara mewah \xB7 interior hangat",description:"Office: menara sirip perunggu dengan balkon taman dan kolam infinity di atap. Studio: hijau tua, kuningan, kayu walnut dan chandelier.",colors:["#1d3a2e","#c9a35a","#e9a06c"],exteriorTitle:"Nexa Office \xB7 Menara Senja",exteriorText:"Menara bersirip perunggu, balkon taman, kolam infinity di atap.",exteriorCamera:{target:[0,14,4],offset:[52,24,64]},roles:{wood:"#5b3c27",stone:"#2f2a26",tile:"#7a5537",wall:"#1d3a2e",metal:"#c9a35a",frame:"#16130f",fabric:"#2f5a43",rug:"#22392f",panel:"#173127",slat:"#b48a4a"},textures:{tile:"parquet"},views:{exterior:{background:"linear-gradient(180deg,#2c3356 0%,#6d5478 38%,#d98a6a 72%,#f2b984 100%)",fog:["#a7768a",95,320],sun:["#ffb37c",2.3,[-40,24,34]],hemi:.75,environment:.75},interior:{background:"radial-gradient(ellipse at 50% 45%,#3a2c22,#120d0a)",fog:["#1e1712",90,300],sun:["#ffd9aa",1.9,[-18,32,15]],hemi:.95,environment:.75}}},{id:"langit",previewBackground:"#1d2c4a",name:"Griya Langit",tag:"Penthouse \xB7 kantor terang",description:"Office: penthouse di puncak gedung dengan teras rumput, kolam dan tangga spiral mengelilingi pohon. Studio: putih, kayu oak, kaca berbingkai hitam, dinding tanaman.",colors:["#f3f1ec","#c9a77a","#1d2c4a"],exteriorTitle:"Nexa Office \xB7 Griya Langit",exteriorText:"Penthouse dua level di atas kota, teras rumput dan kolam.",exteriorCamera:{target:[0,3,3],offset:[48,32,56]},roles:{wood:"#cfae80",stone:"#f2f0eb",tile:"#e6dccb",wall:"#f7f6f2",metal:"#1a1b1d",frame:"#121315",fabric:"#2c2f33",rug:"#e3dacb",panel:"#f4f2ee",slat:"#c9a77a"},textures:{tile:"marbleBeige"},views:{exterior:{background:"linear-gradient(180deg,#0b1730 0%,#1f3a66 50%,#5f82b2 100%)",fog:["#223a63",90,300],sun:["#cdd9ff",1.4,[-20,40,25]],hemi:.7,environment:.55},interior:{background:"radial-gradient(ellipse at 50% 50%,#eceeea,#c9cbc6)",fog:["#d6d8d3",90,300],sun:["#fffaf0",2.7,[-18,32,15]],hemi:1.35,environment:.45}}}],Ld={wall:["#e6e2d5","#dedfd2","#c8c2b1","#d7cbb4","#d3c5a5","#c6b99b"],fabric:["#c0c6b5","#bcbca9","#c2bfae","#c5c7b6","#b6be9f","#d2cbb3","#b8b29e","#c4c2af"],rug:["#547b80","#778a71","#d4d3bd","#b6bea6","#657b78","#8a8370"],metal:["#81715a"],frame:["#202c30"],panel:["#3f4a42"],slat:["#727963"]};function Dd({scene:s,floors:e,shell:t,context:n,glassMaterials:i,sun:r,hemi:o,camera:a,groundPlane:c,viewport:l,onChange:h}){let u=new Map;s.traverse(y=>{if(y.isMesh)for(let m of Array.isArray(y.material)?y.material:[y.material]){if(u.has(m)||!m.color)continue;let R=m.userData.themeRole;if(!R){let w="#"+m.color.getHexString();R=Object.keys(Ld).find(C=>Ld[C].includes(w))}R&&u.set(m,{role:R,color:m.color.clone(),map:m.map,bumpMap:m.bumpMap,bumpScale:m.bumpScale,roughness:m.roughness,metalness:m.metalness})}});let d=Pd({scene:s,floors:e,shell:t,context:n,glassMaterials:i}),f=mn[0].id,g="exterior",v=!0;a.far=640,a.updateProjectionMatrix();function _(){let y=mn.find(R=>R.id===f),m=y.views[g];r.color.set(m.sun[0]),r.intensity=m.sun[1],r.position.set(...m.sun[2]),o.intensity=m.hemi,s.environmentIntensity=m.environment,s.fog.color.set(m.fog[0]),s.fog.near=m.fog[1],s.fog.far=m.fog[2],l.style.background=m.background,c&&(c.visible=g!=="exterior"),document.documentElement.dataset.officeView=g}function p(y,{save:m=!0}={}){let R=mn.find(w=>w.id===y);if(!R)return!1;for(let[w,C]of u){w.color.copy(C.color),w.map=C.map,w.bumpMap=C.bumpMap,w.bumpScale=C.bumpScale,w.roughness=C.roughness,w.metalness=C.metalness,R.roles[C.role]&&w.color.set(R.roles[C.role]);let D=R.textures[C.role]&&d.textures[R.textures[C.role]];D&&(w.map=D,w.bumpMap=D,w.bumpScale=.01,w.color.set("#ffffff"),w.roughness=y==="langit"?.32:.5),w.needsUpdate=!0}if(d.apply(y),f=y,_(),document.documentElement.dataset.officeTheme=y,m)try{localStorage.setItem("nexa-office-theme",y)}catch{v=!1}return h?.(R),!0}let M;try{M=localStorage.getItem("nexa-office-theme")}catch{v=!1}return p(mn.some(y=>y.id===M)?M:mn[0].id,{save:!1}),{apply:p,setView(y){g=y==="exterior"?"exterior":"interior",_()},get view(){return g},get theme(){return mn.find(y=>y.id===f)},update:y=>d.update(y),get active(){return f},get storageAvailable(){return v},snapshot:()=>({id:f,materials:[...u].map(([y,m])=>({role:m.role,color:"#"+y.color.getHexString(),roughness:y.roughness,metalness:y.metalness,map:y.map?.uuid||null})),decorations:d.snapshot()})}}function Nd({asset:s,onPick:e}){let t=r=>document.getElementById(r),n=t("theme-dialog");t("theme-options").insertAdjacentHTML("beforeend",mn.map(r=>`<label class="theme-card" data-theme-card="${r.id}"><input class="sr-only" type="radio" name="office-theme" value="${r.id}" ${r.id===mn[0].id?"checked":""}><div class="theme-image" style="--theme-swatch:${r.previewBackground||r.colors[0]}"><img src="${s(`/assets/themes/${r.id}.png`)}" alt="Preview ${r.name}" width="400" height="260"><span class="theme-badge">Dipakai</span></div><div class="theme-card-copy"><span>${r.tag}</span><h3>${r.name}</h3><p>${r.description}</p><div class="theme-swatches" aria-hidden="true">${r.colors.map(o=>`<i style="background:${o}"></i>`).join("")}</div></div></label>`).join("")),t("open-themes").onclick=()=>n.showModal(),t("close-themes").onclick=()=>n.close(),t("done-themes").onclick=()=>n.close(),n.addEventListener("close",()=>t("open-themes").focus()),t("theme-options").onchange=r=>{r.target.name==="office-theme"&&!e(r.target.value)&&(t("theme-status").textContent="WebGL tidak tersedia. Tema 3D belum dapat ditampilkan.")};function i(r){t("theme-persistence").textContent=r?"Pilihan tema disimpan di browser ini.":"Pilihan berlaku selama sesi ini; penyimpanan browser tidak tersedia."}return{storage:i,select(r,o=!0){t("theme-current").textContent=r.name,document.querySelectorAll("input[name=office-theme]").forEach(a=>a.checked=a.value===r.id),t("theme-status").textContent=`Tema ${r.name} aktif.`,i(o)}}}var Hi=[{id:"lead",name:"Ruang ZUNO",floor:1,pos:[-7.3,6,6],detail:"Kantor Lead: meja eksekutif, layar koordinasi, perpustakaan kecil dan area diskusi."},{id:"owner",name:"Ruang Zulnan",floor:1,pos:[7.3,6,6],detail:"Kantor Owner: meja pribadi, kursi tamu, rak buku, lounge dan lampu kerja."},{id:"konten",name:"Studio Konten",floor:0,pos:[-7,0,3],detail:"Meja kolaborasi, monitor, papan ide, dan ruang produksi kreatif."},{id:"engineering",name:"Engineering",floor:0,pos:[7,0,3],detail:"Sayap pengembangan terpisah, workstation ganda dan papan arsitektur."},{id:"meeting",name:"Ruang Meeting",floor:0,pos:[-8,0,-7],detail:"Meja U, kursi berlapis kain, mikrofon, layar presentasi dan tanaman tengah."},{id:"library",name:"Perpustakaan",floor:0,pos:[3,0,-8],detail:"Rak buku kayu, bangku baca dan cahaya jendela."},{id:"rest",name:"Rest Room",floor:1,pos:[-9,6,-5],detail:"Ruang istirahat tersendiri, sofa nyaman dan pencahayaan hangat."},{id:"game",name:"Game Room",floor:1,pos:[0,6,-5],detail:"TV layar besar, dua PC gaming, konsol bergaya PlayStation, controller dan sofa."},{id:"curhat",name:"Tempat Curhat",floor:1,pos:[10,6,-5],detail:"Sudut percakapan privat dengan dua kursi dan tanaman pembatas."},{id:"prayer",name:"Mushola",floor:0,pos:[9.4,0,-7.1],detail:"Ruang sholat terpisah dengan sajadah, rak Al-Quran, rak alas kaki dan sudut wudu."},{id:"pool",name:"Kolam Renang",floor:2,pos:[-6,12,-5],detail:"Air bergelombang dengan kilau, pola caustic, ubin dasar kolam, tangga dan kursi berjemur."},{id:"coffee",name:"Balkon Kopi",floor:2,pos:[9,12,-5],detail:"Mesin espresso, grinder, cangkir, gelas, bar kopi dan pergola."}],ly=[["L.0","ZUNO","Lead","Orkestrasi & koordinasi","#257e83","#3b2921","short","glasses","meeting"],["L.1","Lia","Konten","Komunikasi & laporan","#d7a566","#442b24","bob","tablet","konten"],["R.1","Raka","Konten","Riset tren & verifikasi","#657c4f","#302621","curly","glasses","konten"],["R.2","Nara","Konten","Strategi & angle konten","#b37582","#222c30","long","tablet","konten"],["P.1","Dika","Konten","Naskah & storyboard","#c27c47","#4c3020","swept","notebook","konten"],["P.2","Vino","Konten","Retensi video & hook","#7894a7","#25262b","short","headphones","konten"],["D.1","Sari","Konten","Visual & carousel","#d1b55e","#633b27","bun","pencil","konten"],["E.1","Edo","Konten","Arahan editing & efek","#657a93","#1e252e","swept","headphones","konten"],["E.2","Bima","Konten","Perencanaan Remotion","#9b755c","#3a2924","curly","headphones","konten"],["E.3","Fira","Konten","Perencanaan Google Flow","#7f9c8e","#7b492f","bob","camera","konten"],["Q.1","Tara","Konten","Fakta & brand voice","#8f7898","#2a2227","bun","notebook","library"],["Q.2","Nita","Konten","Bukti & kepatuhan format","#af8f74","#42302c","long","glasses","library"],["M.1","Maya","Konten","Caption & antrian posting","#c38d7c","#623c2a","bob","tablet","konten"],["T.1","Arga","Engineering","PRD & arsitektur","#4c7777","#252c2c","short","blueprint","engineering"],["T.2","Rani","Engineering","UI/UX & wireframe","#9e9fbc","#432f2b","bun","pencil","engineering"],["T.3","Fajar","Engineering","Implementasi aplikasi","#5b6d83","#24282a","curly","glasses","engineering"],["T.4","Tio","Engineering","Testing & paket rilis","#8d9760","#47302a","swept","tablet","engineering"],["T.5","Damar","Engineering","Audit statis bug & security","#585b61","#26252b","short","notebook","engineering"]],En=ly.map((s,e)=>({id:s[0],name:s[1],division:s[2],job:s[3],color:s[4],hair:s[5],style:s[6],accessory:s[7],room:e===0?"lead":s[8],floor:e===0?1:0,skin:["#dba477","#bb825a","#e4b68c","#ce9369"][e%4],shoe:["#dcae35","#f1e7d4","#4b5559"][e%3]})),Ud={id:"OWNER",name:"Zulnan",color:"#e9e8df",hair:"#272321",style:"curly",accessory:"watch",skin:"#dba477",shoe:"#eeeee7",pants:"#486780"},hy=["Lead","Juru Kabar","Peneliti Tren","Strategi Media Sosial","Penulis Naskah","Optimasi Video","Desainer Visual","Editor Video","Spesialis Remotion","Spesialis Flow","Penjaga Merek","Verifikator Bukti","Kurator Instagram","Arsitek Aplikasi","Desainer UI/UX","Pengembang Aplikasi","Penguji & Rilis","Auditor Security"];En.forEach((s,e)=>s.title=hy[e]);var Ee=s=>document.getElementById(s),Ds=matchMedia("(prefers-reduced-motion: reduce)").matches,rh=s=>globalThis.ZUNO_OFFLINE_ASSETS?.[s]||s,uy=["\u2654","\u2659","\u25A6","\u2318","\u25B1","\u25A4","\u263E","\u25C7","\u2661","\u2302","\u2248","\u2667"],ot=null,Pn=null;Ee("rooms").innerHTML=Hi.map((s,e)=>`<button class="room" data-room="${s.id}" aria-pressed="false"><span class="icon" aria-hidden="true">${uy[e]}</span>${s.name}</button>`).join("");function Qn(){let s=Ee("search").value.trim().toLocaleLowerCase("id"),e=En.filter(t=>`${t.name} ${t.job} ${t.division}`.toLocaleLowerCase("id").includes(s));Ee("agents").innerHTML=e.map(t=>`<button class="agent-button" data-agent="${t.id}" aria-pressed="${He.selected===t.id}"><img class="avatar" src="${rh(`/assets/agents/${t.id}.png`)}" alt="" width="30" height="33"><span><b>${t.name}</b><small>${t.division}</small></span></button>`).join(""),Ee("empty").hidden=e.length>0}var He={theme:mn[0].id,view:"exterior",floor:"all",selected:null,room:null,loaded:0,assetFailures:0,fps:0,quality:"high",ready:!1};Qn();Ee("search").addEventListener("input",Qn);var Od=Nd({asset:rh,onPick:s=>Pn?.apply(s)}),Jt=Ee("canvas-wrap"),St;try{St=new sr({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{Ee("loading").className="error",Ee("loading").textContent="Tampilan 3D tidak tersedia. Aktifkan WebGL / akselerasi grafis lalu muat ulang. Daftar ruangan dan 18 profil agen tetap dapat dibaca.",dy()}function dy(){document.querySelectorAll("[data-room]").forEach(s=>s.onclick=()=>{let e=Hi.find(t=>t.id===s.dataset.room);Ee("view-name").textContent=e.name,Ee("view-description").textContent=e.detail}),Ee("agents").onclick=s=>{let e=s.target.closest("[data-agent]");e&&Fd(En.find(t=>t.id===e.dataset.agent))}}function Fd(s){let e=ot?.get(s.id);He.selected=s.id,Ee("inspector").hidden=!1,Ee("agent-id").textContent=`${s.id} / ${s.division.toUpperCase()}`,Ee("agent-name").textContent=s.name,Ee("agent-job").textContent=s.job,Ee("agent-meta").textContent=`Lantai ${String((e?.floor??s.floor)+1).padStart(2,"0")} \xB7 ${e?.phase==="walking"?"Dalam perjalanan":Hi.find(t=>t.id===(e?.room||s.room)).name}`,Ee("agent-look").textContent=ot?.simulation.time>0?`Demo: ${e?.activity||s.job}`:"Pilih demo aktivitas untuk melihat agen bekerja, berjalan dan mengisi waktu luang.",Ee("announcement").textContent=`${s.name}, ${s.job}. Preview visual.`,Qn()}Ee("close-agent").onclick=()=>{He.selected=null,Ee("inspector").hidden=!0,Qn()};St&&fy();function fy(){St.setPixelRatio(Math.min(devicePixelRatio,1.6)),St.setSize(Jt.clientWidth,Jt.clientHeight),St.shadowMap.enabled=!0,St.shadowMap.type=dl,St.toneMapping=Ko,St.toneMappingExposure=1.05,Jt.append(St.domElement),St.domElement.setAttribute("aria-label","Kantor 3D. Gunakan daftar ruangan dan agen untuk navigasi keyboard.");let s=!0,e=new Di;e.fog=new vo("#e2e6dc",65,145);let t=new wt(38,Jt.clientWidth/Jt.clientHeight,.1,220);t.position.set(31,31,37);let n=new na(t,St.domElement);n.enableDamping=!Ds,n.dampingFactor=.08,n.minDistance=3,n.maxDistance=90,n.maxPolarAngle=Math.PI*.47,n.target.set(0,0,0),n.autoRotateSpeed=.45;let i=new Ss(St),r=new ra,o=i.fromScene(r,.04);e.environment=o.texture,e.environmentIntensity=.35,r.dispose(),i.dispose();let a=new yr("#fef8df","#82907d",1.25);e.add(a);let c=new Fi("#fff1cf",2.8);c.position.set(-18,32,15),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:.5,far:90}),c.shadow.bias=-3e-4,c.shadow.normalBias=.035,e.add(c),e.add(new Wo("#e6eee4",.3));let l=new Se(new Nt(240,240),new ko({color:"#5f7059",opacity:.19}));l.rotation.x=-Math.PI/2,l.position.y=-.67,l.receiveShadow=!0,e.add(l);let{floors:h,stairs:u}=xd(e),d=vd(h),f=yd(e,h),g=Md(h[2]);Pn=Dd({scene:e,floors:h,shell:f.shell,context:f.context,glassMaterials:f.glassMaterials,sun:c,hemi:a,camera:t,groundPlane:l,viewport:document.querySelector(".viewport"),onChange(E){He.theme=E.id,Od.select(E,Pn?.storageAvailable??!0),s=!0,He.ready&&He.view==="exterior"&&V()}}),Od.storage(Pn.storageAvailable);let v=oa(Ud);v.position.set(7.3,0,4.45),v.scale.setScalar(.7),h[1].add(v);let _=new Map,p=[],M=new ia,y={},m=0,R=0,w=0;for(let E of En){let B;if(E.id==="L.0")B=[-7.3,6,4.45];else if(E.room==="engineering"){let W=R++;B=[[3.55,5.45,8.35,10.25][W%4],0,W<4?1.26:6.06]}else if(E.room==="library")B=[.1+w++*4.8,0,-9.6];else{let W=m++;B=[[-9.35,-7.45,-4.55,-2.65][W%4],0,W<4?1.26:W<8?6.06:-1.26]}y[E.id]=B;let X=oa(E);X.scale.setScalar(.7),X.position.set(B[0],B[1]-E.floor*6,B[2]),h[E.floor].add(X),_.set(E.id,X),M.load(rh(`/assets/agents/${E.id}.glb`),W=>{let z=W.scene;if(z.traverse(q=>{q.userData.agentId=E.id,q.isMesh&&(q.castShadow=!0,q.receiveShadow=!0)}),z.scale.setScalar(.7),z.position.copy(X.position),z.rotation.y=E.division==="Engineering"?-.35:.25,X.removeFromParent(),X.traverse(q=>{q.isMesh&&q.geometry.dispose()}),h[E.floor].add(z),_.set(E.id,z),W.animations.length){let q=new qo(z);q.clipAction(W.animations[0]).play(),p.push(q)}He.loaded++,ot&&(ot.register(E.id,z),ot.sync()),s=!0},void 0,()=>{He.assetFailures++,Ee("announcement").textContent="Sebagian GLB gagal dimuat; model voxel prosedural ditampilkan sebagai pengganti."})}ot=Td({agents:En,models:_,homes:y,scene:e,wrap:Jt,camera:t,visibleFloor:E=>He.view==="interior"&&(He.floor==="all"||Number(He.floor)===E),onSelect:O,ownerModel:v,onOwner:()=>P("owner")});let C=new Se(new Bo(.65,.72,48),new Kt({color:"#eac46f",side:At}));C.rotation.x=-Math.PI/2,C.position.y=.13,C.visible=!1,e.add(C);let D=null,b=null;function S(E,B){s=!0,D={from:t.position.clone(),fromTarget:n.target.clone(),to:new F(...E).add(new F(...B)),target:new F(...E),start:performance.now(),duration:Ds?1:850},n.autoRotate=!1,Ee("orbit").setAttribute("aria-pressed","false")}function T(E,{moveCamera:B=!0}={}){if(k(),s=!0,u.forEach((W,z)=>W.visible=E==="all"||Number(E)===z||Number(E)===z+1),He.floor=String(E),h.forEach((W,z)=>W.visible=E==="all"||String(z)===String(E)),document.querySelectorAll("[data-floor]").forEach(W=>W.setAttribute("aria-pressed",String(W.dataset.floor===String(E)))),C.visible=!!He.selected&&(E==="all"||String(E)===String(ot?.get(He.selected)?.floor??En.find(W=>W.id===He.selected)?.floor)),B){let W=E==="all"?6:Number(E)*6;S([0,W,E==="0"?0:-4],E==="all"?[43,37,47]:E==="0"?[31,31,37]:[30,28,34])}let X={all:"Seluruh kantor",0:"Nexa Studio",1:"Mezzanine",2:"Teras & balkon"};Ee("view-name").textContent=X[E],Ee("view-description").textContent=E==="all"?"Tiga lantai. Satu ruang bersama.":E==="0"?"Kayu hangat, cahaya alami, ide yang mengalir.":E==="1"?"Jeda sejenak. Kembali dengan perspektif baru.":"Kopi, udara terbuka, dan ruang untuk bernapas.",Ee("announcement").textContent=X[E]}function k(){He.view="interior",Pn.setView("interior"),f.shell.visible=!1,f.context.visible=!1,document.getElementById("view-exterior").setAttribute("aria-pressed","false"),document.getElementById("view-interior").setAttribute("aria-pressed","true"),s=!0}function V(){He.view="exterior",Pn.setView("exterior");let E=Pn.theme;He.floor="all",He.selected=null,He.room=null,h.forEach(B=>B.visible=!1),u.forEach(B=>B.visible=!1),f.shell.visible=!0,f.context.visible=!0,C.visible=!1,Ee("inspector").hidden=!0,Qn(),document.querySelectorAll("[data-floor],[data-room]").forEach(B=>B.setAttribute("aria-pressed","false")),Ee("view-exterior").setAttribute("aria-pressed","true"),Ee("view-interior").setAttribute("aria-pressed","false"),S(E.exteriorCamera.target,E.exteriorCamera.offset),Ee("view-name").textContent=E.exteriorTitle,Ee("view-description").textContent=E.exteriorText,Ee("announcement").textContent=`${E.exteriorTitle}. Interior tertutup oleh fasad opak.`}Ee("view-exterior").onclick=V,Ee("view-interior").onclick=()=>{He.selected=null,Ee("inspector").hidden=!0,C.visible=!1,Qn(),T("0")};function P(E){let B=Hi.find(X=>X.id===E);B&&(He.room=E,He.selected=null,Ee("inspector").hidden=!0,C.visible=!1,Qn(),T(String(B.floor),{moveCamera:!1}),S([B.pos[0],B.pos[1]+.8,B.pos[2]],E==="meeting"?[9,10,13]:E==="pool"?[13,14,16]:[11,12,14]),document.querySelectorAll("[data-room]").forEach(X=>X.setAttribute("aria-pressed",String(X.dataset.room===E))),Ee("view-name").textContent=B.name,Ee("view-description").textContent=B.detail,Ee("announcement").textContent=B.name)}function O(E){let B=En.find(z=>z.id===E);if(!B)return;let X=ot.get(E);T(String(X.floor),{moveCamera:!1}),Fd(B);let W=X.pos;b=new F(...W),S([W[0],W[1]+1.05,W[2]],[3.4,2.5,5.8]),C.position.set(W[0],W[1]+.13,W[2]),C.visible=!0,document.querySelectorAll("[data-room]").forEach(z=>z.setAttribute("aria-pressed","false")),Ee("view-name").textContent=B.name,Ee("view-description").textContent=B.job}Ee("rooms").onclick=E=>{let B=E.target.closest("[data-room]");B&&P(B.dataset.room)},Ee("agents").onclick=E=>{let B=E.target.closest("[data-agent]");B&&O(B.dataset.agent)},document.querySelectorAll("[data-floor]").forEach(E=>E.onclick=()=>{He.selected=null,Ee("inspector").hidden=!0,Qn(),C.visible=!1,T(E.dataset.floor)}),Ee("reset").onclick=()=>{He.selected=null,He.room=null,Ee("inspector").hidden=!0,C.visible=!1,Qn(),document.querySelectorAll("[data-room]").forEach(E=>E.setAttribute("aria-pressed","false")),He.view==="exterior"?V():T(He.floor)};let U=Ee("close-agent").onclick;Ee("close-agent").onclick=()=>{U(),C.visible=!1,s=!0};function G(){let E=ot.simulation;Ee("demo-toggle").textContent=E.running?"\u2161 Jeda demo":E.time>0?"\u25B6 Lanjut demo":"\u25B6 Demo aktivitas",Ee("demo-toggle").setAttribute("aria-pressed",String(E.running)),Ee("demo-status").textContent=E.running?"SIMULASI BERJALAN":E.time>0?"SIMULASI DIJEDA":"SIMULASI VISUAL",He.demo=E.running}function H(E=!0){E&&He.view==="exterior"&&T("0"),ot.simulation.start(),G(),s=!0}function ee(){ot.simulation.reset(),ot.sync(),b=null,G(),s=!0}Ee("demo-toggle").onclick=()=>{ot.simulation.running?ot.simulation.pause():H(),G(),s=!0},Ee("demo-reset").onclick=ee,Ee("demo-speed").onchange=()=>ot.simulation.setSpeed(Ee("demo-speed").value),Ee("show-names").onchange=()=>{Jt.querySelector(".agent-label-layer").hidden=!Ee("show-names").checked},Ee("agent-work").onclick=()=>{He.selected&&(ot.simulation.setWork(He.selected,!0),H(!1))},Ee("agent-free").onclick=()=>{He.selected&&(ot.simulation.setWork(He.selected,!1),H(!1))},Ee("agent-visit").onclick=()=>{He.selected&&(ot.simulation.visit(He.selected,Ee("agent-destination").value),H(!1))},Ee("orbit").onclick=()=>{D=null,n.autoRotate=!n.autoRotate,Ee("orbit").setAttribute("aria-pressed",String(n.autoRotate))},Ee("quality").onchange=()=>{s=!0,He.quality=Ee("quality").value,St.setPixelRatio(He.quality==="low"?1:Math.min(devicePixelRatio,1.6)),c.castShadow=He.quality!=="low",St.shadowMap.enabled=He.quality!=="low",e.traverse(E=>{E.material&&(E.material.needsUpdate=!0)})},n.addEventListener("start",()=>{D=null,s=!0,Ee("follow-agent").checked=!1}),n.addEventListener("change",()=>{s=!0});let ne=new Yo,he=new ue,ye;St.domElement.addEventListener("pointerdown",E=>{ye=[E.clientX,E.clientY]}),St.domElement.addEventListener("pointerup",E=>{if(!ye||Math.hypot(E.clientX-ye[0],E.clientY-ye[1])>5||He.view==="exterior")return;let B=St.domElement.getBoundingClientRect();he.set((E.clientX-B.left)/B.width*2-1,-(E.clientY-B.top)/B.height*2+1),ne.setFromCamera(he,t);let X=ne.intersectObjects([..._.values()].filter(W=>W.visible),!0).find(W=>W.object.userData.agentId);X&&O(X.object.userData.agentId)}),new ResizeObserver(()=>{t.aspect=Jt.clientWidth/Jt.clientHeight,t.updateProjectionMatrix(),St.setSize(Jt.clientWidth,Jt.clientHeight),s=!0}).observe(Jt),St.domElement.addEventListener("webglcontextlost",E=>{E.preventDefault(),Ee("loading").hidden=!1,Ee("loading").className="error",Ee("loading").textContent="Koneksi grafis terputus. Muat ulang halaman untuk membuka kantor kembali."}),V(),Ee("loading").hidden=!0,He.ready=!0;let ae=0,le=performance.now(),be=le;function _e(E){if(requestAnimationFrame(_e),document.hidden){be=E;return}let B=Math.min((E-be)/1e3,.4);if(be=E,D){let z=Math.min((E-D.start)/D.duration,1),q=1-(1-z)**3;t.position.lerpVectors(D.from,D.to,q),n.target.lerpVectors(D.fromTarget,D.target,q),z===1&&(D=null)}!Ds&&!ot.simulation.running&&p.forEach(z=>z.update(B));let X=ot.simulation;X.running&&X.step(B);let W=He.selected&&ot.get(He.selected);if(W){if(C.position.set(W.pos[0],W.pos[1]+.13,W.pos[2]),X.running&&Ee("follow-agent").checked&&!D){String(W.floor)!==He.floor&&He.floor!=="all"&&T(String(W.floor),{moveCamera:!1});let z=new F(...W.pos);if(b){let q=z.clone().sub(b);t.position.add(q),n.target.add(q)}b=z}X.time>0&&(Ee("agent-meta").textContent=`Lantai ${W.floor+1} \xB7 ${W.phase==="walking"?"Dalam perjalanan":Hi.find(z=>z.id===W.room)?.name}`,Ee("agent-look").textContent="Demo: "+W.activity)}n.update(),ot.sync(B),g.update(X.running?X.time:Ds?0:E/1e3),Pn.update(Ds&&!X.running?0:E/1e3),!(Ds&&!s&&!D&&!n.autoRotate&&!X.running)&&(s=!1,St.render(e,t),ae++,E-le>=1e3&&(He.fps=Math.round(ae*1e3/(E-le)),Ee("fps").textContent=He.fps+" fps",ae=0,le=E))}requestAnimationFrame(_e),window.zunoOffice={state:He,agents:En,rooms:Hi,themes:{list:mn.map(({id:E,name:B})=>({id:E,name:B})),apply:E=>Pn.apply(E),snapshot:()=>Pn.snapshot(),agentColors:()=>[..._].map(([E,B])=>{let X=[];return B.traverse(W=>{if(W.isMesh)for(let z of Array.isArray(W.material)?W.material:[W.material])z.color&&X.push(z.color.getHexString())}),{id:E,colors:X}})},selectAgent:O,focusRoom:P,floor:T,exterior:V,interior:()=>T("0"),privacy:()=>({opaque:f.glassMaterials.every(E=>!E.transparent&&E.opacity===1&&E.transmission===0),shell:f.shell.visible,interiorFloorsHidden:h.every(E=>!E.visible),owner:!0}),projectAgent(E){let B=_.get(E).position.clone();return B.y+=1,B.project(t),{x:(B.x+1)/2*Jt.clientWidth,y:(1-B.y)/2*Jt.clientHeight,visible:Math.abs(B.x)<1&&Math.abs(B.y)<1&&B.z<1}},amenities:()=>({features:d.features,waterTime:g.time,labels:ot.labelCount()}),demo:{start:H,pause(){ot.simulation.pause(),G()},reset:ee,advance(E){ot.simulation.advance(E),ot.sync(),s=!0},snapshot:()=>ot.simulation.snapshot(),pose(E){let B=_.get(E);return{position:B.position.toArray(),legs:["LegL","LegR"].map(X=>B.getObjectByName(X)?.rotation.x),arms:["ArmL","ArmR"].map(X=>B.getObjectByName(X)?.rotation.x),shoes:["ShoeL","ShoeR"].map(X=>B.getObjectByName(X)?.visible)}},visit:(E,B)=>ot.simulation.visit(E,B),setWork:(E,B)=>ot.simulation.setWork(E,B),get running(){return ot.simulation.running}},stairVisibility:()=>u.map(E=>E.visible),sceneAgents:()=>e.children.filter(E=>En.some(B=>B.id===E.userData.agentId)).map(E=>({id:E.userData.agentId,uuid:E.uuid,visible:E.visible,position:E.getWorldPosition(new F).toArray()})),stats:()=>({calls:St.info.render.calls,triangles:St.info.render.triangles,models:_.size}),async portraits(){let E=new sr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});E.setSize(180,220),E.setPixelRatio(1),E.toneMapping=Ko,E.toneMappingExposure=1.4;let B=new Di;B.add(new yr("#fff7dc","#83927b",3));let X=new Fi("#fff3dd",4);X.position.set(-3,6,5),B.add(X);let W=new wt(33,180/220,.1,30);W.position.set(2.6,2.5,5.8),W.lookAt(0,1.3,0);let z={};for(let q of En){let A=oa(q);B.add(A),E.render(B,W),z[q.id]=E.domElement.toDataURL("image/png"),B.remove(A),A.traverse(J=>{J.isMesh&&J.geometry.dispose()})}return E.dispose(),z}}}
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
