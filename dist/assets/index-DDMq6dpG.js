(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const bo="187",zh=0,nl=1,Gh=2,gr=1,Ec=2,_s=3,ti=0,Xt=1,pn=2,ki=0,Ss=1,Ts=2,il=3,sl=4,kh=5,zi=100,Hh=101,Vh=102,Wh=103,Xh=104,qh=200,Yh=201,Kh=202,$h=203,yc=204,bc=205,Zh=206,Jh=207,Qh=208,jh=209,eu=210,tu=211,nu=212,iu=213,su=214,Ca=0,La=1,Pa=2,As=3,Da=4,Ia=5,Na=6,Ua=7,Tc=0,ru=1,au=2,On=0,Ac=1,wc=2,Rc=3,To=4,Cc=5,Lc=6,Pc=7,Dc=300,Ki=301,ws=302,Wr=303,Xr=304,Rs=1e3,Un=1001,Fa=1002,Ct=1003,ou=1004,vs=1005,Wt=1006,qr=1007,Fn=1008,jt=1009,Ic=1010,Nc=1011,Cs=1012,Ao=1013,Tn=1014,mn=1015,An=1016,wo=1017,Ro=1018,$i=1020,Uc=35902,Fc=35899,Oc=1021,Bc=1022,yn=1023,ni=1026,jn=1027,Co=1028,Lo=1029,xi=1030,Po=1031,Do=1033,_r=33776,vr=33777,xr=33778,Mr=33779,Oa=35840,Ba=35841,za=35842,Ga=35843,ka=36196,Ha=37492,Va=37496,Wa=37488,Xa=37489,Er=37490,qa=37491,Ya=37808,Ka=37809,$a=37810,Za=37811,Ja=37812,Qa=37813,ja=37814,eo=37815,to=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,oo=36492,lo=36494,co=36495,ho=36283,uo=36284,yr=36285,fo=36286,lu=3200,po=0,cu=1,Qn="",Vt="srgb",br="srgb-linear",Tr="linear",tt="srgb",Yr=7680,hu=519,uu=512,du=513,fu=514,zc=515,pu=516,mu=517,Gc=518,kc=519,gu=35044,Ir=35048,rl="300 es",gn=2e3,Ls=2001;function _u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){const i=Ar("canvas");return i.style.display="block",i}const al={};function ol(...i){const e="THREE."+i.shift();console.log(e,...i)}function Hc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=Hc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=Hc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Hi(...i){const e=i.join(" ");e in al||(al[e]=!0,Le(...i))}function xu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Mu={[Ca]:Ca,[Pa]:Na,[Da]:Da,[As]:Ia,[La]:La,[Na]:Pa,[Ua]:Ua,[Ia]:As};class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const Vi=Math.PI/180,Ps=180/Math.PI;function is(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function Io(i,e){return(i%e+e)%e}function Su(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Eu(i,e,t){return i!==e?(t-i)/(e-i):0}function Es(i,e,t){return(1-t)*i+t*e}function yu(i,e,t,n){return Es(i,e,1-Math.exp(-t*n))}function bu(i,e=1){return e-Math.abs(Io(i,e*2)-e)}function Tu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Au(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ru(i,e){return i+Math.random()*(e-i)}function Cu(i){return i*(.5-Math.random())}function Lu(i){i!==void 0&&(ll=i);let e=ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pu(i){return i*Vi}function Du(i){return i*Ps}function Iu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uu(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*d,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*_,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*_,o*l);break;case"ZYZ":i.set(c*_,c*p,o*h,o*l);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function No(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wc(i,e){if(e.constructor===Float32Array)return i;const t=No(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Xc(i,e){if(e.constructor===Float32Array)return i;const t=No(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Wi={DEG2RAD:Vi,RAD2DEG:Ps,generateUUID:is,clamp:He,euclideanModulo:Io,mapLinear:Su,inverseLerp:Eu,lerp:Es,damp:yu,pingpong:bu,smoothstep:Tu,smootherstep:Au,randInt:wu,randFloat:Ru,randFloatSpread:Cu,seededRandom:Lu,degToRad:Pu,radToDeg:Du,isPowerOfTwo:Iu,ceilPowerOfTwo:Nu,floorPowerOfTwo:Vc,setQuaternionFromProperEuler:Uu,normalize:Xc,denormalize:Wc},ko=class ko{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ko.prototype.isVector2=!0;let Ke=ko;class ri{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(d!==M||c!==u||l!==p||h!==_){let m=c*u+l*p+h*_+d*M;m<0&&(u=-u,p=-p,_=-_,M=-M,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);f=Math.sin(f*S)/w,o=Math.sin(o*S)/w,c=c*f+u*o,l=l*f+p*o,h=h*f+_*o,d=d*f+M*o}else{c=c*f+u*o,l=l*f+p*o,h=h*f+_*o,d=d*f+M*o;const S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*d+c*p-l*u,e[t+1]=c*_+h*u+l*d-o*p,e[t+2]=l*_+h*p+o*u-c*d,e[t+3]=h*_-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),u=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"YZX":this._x=u*h*d+l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d-u*p*_;break;case"XZY":this._x=u*h*d-l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d+u*p*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ho=class Ho{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ho.prototype.isVector3=!0;let U=Ho;const Kr=new U,cl=new ri,Vo=class Vo{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],_=n[8],M=s[0],m=s[3],f=s[6],S=s[1],w=s[4],b=s[7],R=s[2],T=s[5],g=s[8];return r[0]=a*M+o*S+c*R,r[3]=a*m+o*w+c*T,r[6]=a*f+o*b+c*g,r[1]=l*M+h*S+d*R,r[4]=l*m+h*w+d*T,r[7]=l*f+h*b+d*g,r[2]=u*M+p*S+_*R,r[5]=u*m+p*w+_*T,r[8]=u*f+p*b+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,_=t*d+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(s*l-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($r.makeScale(e,t)),this}rotate(e){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($r.makeRotation(-e)),this}translate(e,t){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vo.prototype.isMatrix3=!0;let Ue=Vo;const $r=new Ue,hl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fu(){const i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===tt&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:e,whitePoint:n,transfer:Tr,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const Ye=Fu();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class Ou{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bi===void 0&&(bi=Ar("canvas")),bi.width=e.width,bi.height=e.height;const s=bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bu=0;class Uo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zr(s[a].image)):r.push(Zr(s[a]))}else r=Zr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let zu=0;const Jr=new U;class Gt extends Si{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Un,s=Un,r=Wt,a=Fn,o=yn,c=jt,l=Gt.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=is(),this.name="",this.source=new Uo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rs:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rs:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Dc;Gt.DEFAULT_ANISOTROPY=1;const Wo=class Wo{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],_=c[9],M=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,b=(p+1)/2,R=(f+1)/2,T=(h+u)/4,g=(d+M)/4,E=(_+m)/4;return w>b&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=g/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=E/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=g/r,s=E/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-M)/S,this.z=(u-h)/S,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wo.prototype.isVector4=!0;let ft=Wo;class Gu extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Gt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Uo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends Gu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qc extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Dr=class Dr{constructor(e,t,n,s,r,a,o,c,l,h,d,u,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,d,u,p,_,M,m)}set(e,t,n,s,r,a,o,c,l,h,d,u,p,_,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*d,_=o*h,M=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+_*l,t[5]=u-M*l,t[9]=-o*c,t[2]=M-u*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,p=c*d,_=l*h,M=l*d;t[0]=u+M*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=M+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,p=c*d,_=l*h,M=l*d;t[0]=u-M*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,p=a*d,_=o*h,M=o*d;t[0]=c*h,t[4]=_*l-p,t[8]=u*l+M,t[1]=c*d,t[5]=M*l+u,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,_=o*c,M=o*l;t[0]=c*h,t[4]=M-u*d,t[8]=_*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+_,t[10]=u-M*d}else if(e.order==="XZY"){const u=a*c,p=a*l,_=o*c,M=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+M,t[5]=a*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hu,e,Vu)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Hn.crossVectors(n,Zt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Hn.crossVectors(n,Zt)),Hn.normalize(),Gs.crossVectors(Zt,Hn),s[0]=Hn.x,s[4]=Gs.x,s[8]=Zt.x,s[1]=Hn.y,s[5]=Gs.y,s[9]=Zt.y,s[2]=Hn.z,s[6]=Gs.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],_=n[2],M=n[6],m=n[10],f=n[14],S=n[3],w=n[7],b=n[11],R=n[15],T=s[0],g=s[4],E=s[8],O=s[12],P=s[1],I=s[5],k=s[9],q=s[13],L=s[2],H=s[6],J=s[10],z=s[14],ne=s[3],W=s[7],Q=s[11],ee=s[15];return r[0]=a*T+o*P+c*L+l*ne,r[4]=a*g+o*I+c*H+l*W,r[8]=a*E+o*k+c*J+l*Q,r[12]=a*O+o*q+c*z+l*ee,r[1]=h*T+d*P+u*L+p*ne,r[5]=h*g+d*I+u*H+p*W,r[9]=h*E+d*k+u*J+p*Q,r[13]=h*O+d*q+u*z+p*ee,r[2]=_*T+M*P+m*L+f*ne,r[6]=_*g+M*I+m*H+f*W,r[10]=_*E+M*k+m*J+f*Q,r[14]=_*O+M*q+m*z+f*ee,r[3]=S*T+w*P+b*L+R*ne,r[7]=S*g+w*I+b*H+R*W,r[11]=S*E+w*k+b*J+R*Q,r[15]=S*O+w*q+b*z+R*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],_=e[3],M=e[7],m=e[11],f=e[15],S=c*p-l*u,w=o*p-l*d,b=o*u-c*d,R=a*p-l*h,T=a*u-c*h,g=a*d-o*h;return t*(M*S-m*w+f*b)-n*(_*S-m*R+f*T)+s*(_*w-M*R+f*g)-r*(_*b-M*T+m*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],_=e[12],M=e[13],m=e[14],f=e[15],S=t*o-n*a,w=t*c-s*a,b=t*l-r*a,R=n*c-s*o,T=n*l-r*o,g=s*l-r*c,E=h*M-d*_,O=h*m-u*_,P=h*f-p*_,I=d*m-u*M,k=d*f-p*M,q=u*f-p*m,L=S*q-w*k+b*I+R*P-T*O+g*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/L;return e[0]=(o*q-c*k+l*I)*H,e[1]=(s*k-n*q-r*I)*H,e[2]=(M*g-m*T+f*R)*H,e[3]=(u*T-d*g-p*R)*H,e[4]=(c*P-a*q-l*O)*H,e[5]=(t*q-s*P+r*O)*H,e[6]=(m*b-_*g-f*w)*H,e[7]=(h*g-u*b+p*w)*H,e[8]=(a*k-o*P+l*E)*H,e[9]=(n*P-t*k-r*E)*H,e[10]=(_*T-M*b+f*S)*H,e[11]=(d*b-h*T-p*S)*H,e[12]=(o*O-a*I-c*E)*H,e[13]=(t*I-n*O+s*E)*H,e[14]=(M*w-_*R-m*S)*H,e[15]=(h*R-d*w+u*S)*H,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,_=r*d,M=a*h,m=a*d,f=o*d,S=c*l,w=c*h,b=c*d,R=n.x,T=n.y,g=n.z;return s[0]=(1-(M+f))*R,s[1]=(p+b)*R,s[2]=(_-w)*R,s[3]=0,s[4]=(p-b)*T,s[5]=(1-(u+f))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(_+w)*g,s[9]=(m-S)*g,s[10]=(1-(u+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ti.set(s[0],s[1],s[2]).length();const o=Ti.set(s[4],s[5],s[6]).length(),c=Ti.set(s[8],s[9],s[10]).length();r<0&&(a=-a),un.copy(this);const l=1/a,h=1/o,d=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=gn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let _,M;if(c)_=r/(a-r),M=a*r/(a-r);else if(o===gn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ls)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s);let _,M;if(c)_=1/(a-r),M=a/(a-r);else if(o===gn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ls)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Dr.prototype.isMatrix4=!0;let nt=Dr;const Ti=new U,un=new nt,Hu=new U(0,0,0),Vu=new U(1,1,1),Hn=new U,Gs=new U,Zt=new U,dl=new nt,fl=new ri;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wu=0;const pl=new U,Ai=new ri,Cn=new nt,ks=new U,ls=new U,Xu=new U,qu=new ri,ml=new U(1,0,0),gl=new U(0,1,0),_l=new U(0,0,1),vl={type:"added"},Yu={type:"removed"},wi={type:"childadded",child:null},Qr={type:"childremoved",child:null};class Lt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new U,t=new zn,n=new ri,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ue}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(_l,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(_l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ls,ks,this.up):Cn.lookAt(ks,ls,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),wi.child=e,this.dispatchEvent(wi),wi.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yu),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,e,Xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,qu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _i extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),f=this._getHandJoint(l,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ye.workingColorSpace){if(e=Io(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ea(a,r,e+1/3),this.g=ea(a,r,e),this.b=ea(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Ye.workingToColorSpace(Ot.copy(this),e),Math.round(He(Ot.r*255,0,255))*65536+Math.round(He(Ot.g*255,0,255))*256+Math.round(He(Ot.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Vt){Ye.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,s=Ot.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vn),this.setHSL(Vn.h+e,Vn.s+t,Vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Hs);const n=Es(Vn.h,Hs.h,t),s=Es(Vn.s,Hs.s,t),r=Es(Vn.l,Hs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ie;Ie.NAMES=Kc;class Fo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new Fo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $u extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new U,Ln=new U,ta=new U,Pn=new U,Ri=new U,Ci=new U,xl=new U,na=new U,ia=new U,sa=new U,ra=new ft,aa=new ft,oa=new ft;class on{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),Ln.subVectors(n,t),ta.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Ln),c=dn.dot(ta),l=Ln.dot(Ln),h=Ln.dot(ta),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ra.setScalar(0),aa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ra,r.x),a.addScaledVector(aa,r.y),a.addScaledVector(oa,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),Ln.subVectors(e,t),dn.cross(Ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),dn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ri.subVectors(s,n),Ci.subVectors(r,n),na.subVectors(e,n);const c=Ri.dot(na),l=Ci.dot(na);if(c<=0&&l<=0)return t.copy(n);ia.subVectors(e,s);const h=Ri.dot(ia),d=Ci.dot(ia);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ri,a);sa.subVectors(e,r);const p=Ri.dot(sa),_=Ci.dot(sa);if(_>=0&&p<=_)return t.copy(r);const M=p*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ci,o);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return xl.subVectors(r,s),o=(d-h)/(d-h+(p-_)),t.copy(s).addScaledVector(xl,o);const f=1/(m+M+u);return a=M*f,o=u*f,t.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ei{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Ws.subVectors(this.max,cs),Li.subVectors(e.a,cs),Pi.subVectors(e.b,cs),Di.subVectors(e.c,cs),Wn.subVectors(Pi,Li),Xn.subVectors(Di,Pi),ui.subVectors(Li,Di);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ui.z,ui.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ui.z,0,-ui.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ui.y,ui.x,0];return!la(t,Li,Pi,Di,Ws)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Li,Pi,Di,Ws))?!1:(Xs.crossVectors(Wn,Xn),t=[Xs.x,Xs.y,Xs.z],la(t,Li,Pi,Di,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new U,new U,new U,new U,new U,new U,new U,new U],fn=new U,Vs=new Ei,Li=new U,Pi=new U,Di=new U,Wn=new U,Xn=new U,ui=new U,cs=new U,Ws=new U,Xs=new U,di=new U;function la(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=e.dot(di),l=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const vt=new U,qs=new Ke;let Zu=0;class ei extends Si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gu,this.updateRanges=[],this.gpuType=mn,this.version=0,this._normalizationScale=e!==void 0?No(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xc(e,this.array)}}class $c extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zc extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Ju=new Ei,hs=new U,ca=new U;class ss{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ju.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(ca)),this.expandByPoint(hs.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qu=0;const rn=new nt,ha=new Lt,Ii=new U,Jt=new Ei,us=new Ei,wt=new U;class wn extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?Zc:$c)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];us.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Jt.min,us.min),Jt.expandByPoint(wt),wt.addVectors(Jt.max,us.max),Jt.expandByPoint(wt)):(Jt.expandByPoint(us.min),Jt.expandByPoint(us.max))}Jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)wt.fromBufferAttribute(o,l),c&&(Ii.fromBufferAttribute(e,l),wt.add(Ii)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ei(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new U,c[O]=new U;const h=new U,d=new U,u=new U,p=new Ke,_=new Ke,M=new Ke,m=new U,f=new U;function S(O,P,I){l[O]=l[P]=l[I]=1,h.fromBufferAttribute(n,O),d.fromBufferAttribute(n,P),u.fromBufferAttribute(n,I),p.fromBufferAttribute(r,O),_.fromBufferAttribute(r,P),M.fromBufferAttribute(r,I),d.sub(h),u.sub(h),_.sub(p),M.sub(p);const k=1/(_.x*M.y-M.x*_.y);isFinite(k)&&(m.copy(d).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(k),f.copy(u).multiplyScalar(_.x).addScaledVector(d,-M.x).multiplyScalar(k),o[O].add(m),o[P].add(m),o[I].add(m),c[O].add(f),c[P].add(f),c[I].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,P=w.length;O<P;++O){const I=w[O],k=I.start,q=I.count;for(let L=k,H=k+q;L<H;L+=3)S(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new U,R=new U,T=new U,g=new U;function E(O){T.fromBufferAttribute(s,O),g.copy(T);const P=o[O];b.copy(P),b.sub(T.multiplyScalar(T.dot(P))).normalize(),R.crossVectors(g,P);const k=R.dot(c[O])<0?-1:1;a.setXYZW(O,b.x,b.y,b.z,k)}for(let O=0,P=n.count;O<P;++O)l[O]&&E(O);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(e)for(let u=0,p=e.count;u<p;u+=3){const _=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,_=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*h;for(let f=0;f<h;f++)u[_++]=l[p++]}return new ei(u,h,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new U,ju=new U,ed=new Ue;class Zn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ua.subVectors(n,t).cross(ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ua),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ed.getNormalMatrix(e),s=this.coplanarPoint(ua).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let td=0;class rs extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Ss,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yc,this.blendDst=bc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const In=new U,da=new U,Ys=new U,Ks=new U;class Jc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){da.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=Ks.dot(this.direction),c=-Ks.dot(Ys),l=Ks.lengthSq(),h=Math.abs(1-a*a);let d,u,p,_;if(h>0)if(d=a*c-o,u=a*o-c,_=r*h,d>=0)if(u>=-_)if(u<=_){const M=1/h;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(da).addScaledVector(Ys,u),p}intersectSphere(e,t){if(e.radius<0)return null;In.subVectors(e.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,p=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,f=n.x-a.x,S=n.y-a.y,w=n.z-a.z,b=Math.abs(c),R=Math.abs(l),T=Math.abs(h);let g,E,O,P,I,k,q,L,H,J,z,ne;if(b>=R&&b>=T?(O=c,k=d,H=_,ne=f,c>=0?(g=l,E=h,P=u,I=p,q=M,L=m,J=S,z=w):(g=h,E=l,P=p,I=u,q=m,L=M,J=w,z=S)):R>=T?(O=l,k=u,H=M,ne=S,l>=0?(g=h,E=c,P=p,I=d,q=m,L=_,J=w,z=f):(g=c,E=h,P=d,I=p,q=_,L=m,J=f,z=w)):(O=h,k=p,H=m,ne=w,h>=0?(g=c,E=l,P=d,I=u,q=_,L=M,J=f,z=S):(g=l,E=c,P=u,I=d,q=M,L=_,J=S,z=f)),O===0)return null;const W=g/O,Q=E/O,ee=1/O,ye=P-W*k,Fe=I-Q*k,K=q-W*H,me=L-Q*H,Me=J-W*ne,we=z-Q*ne,ge=Me*me-we*K,Be=ye*we-Fe*Me,gt=K*Fe-me*ye;if(s){if(ge<0||Be<0||gt<0)return null}else if((ge<0||Be<0||gt<0)&&(ge>0||Be>0||gt>0))return null;const Pe=ge+Be+gt;if(Pe===0)return null;const je=ee*(ge*k+Be*H+gt*ne);return(Pe>0?je<0:je>0)?null:this.at(je/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qi extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ml=new nt,fi=new Jc,$s=new ss,Sl=new U,Zs=new U,Js=new U,Qs=new U,fa=new U,js=new U,El=new U,er=new U;class $t extends Lt{constructor(e=new wn,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(fa.fromBufferAttribute(d,e),a?js.addScaledVector(fa,h):js.addScaledVector(fa.sub(t),h))}t.add(js)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),fi.copy(e.ray).recast(e.near),!($s.containsPoint(fi.origin)===!1&&(fi.intersectSphere($s,Sl)===null||fi.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(Ml.copy(r).invert(),fi.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,R=w;b<R;b+=3){const T=o.getX(b),g=o.getX(b+1),E=o.getX(b+2);s=tr(this,f,e,n,l,h,d,T,g,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const S=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=tr(this,a,e,n,l,h,d,S,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],f=a[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=S,R=w;b<R;b+=3){const T=b,g=b+1,E=b+2;s=tr(this,f,e,n,l,h,d,T,g,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){const S=m,w=m+1,b=m+2;s=tr(this,a,e,n,l,h,d,S,w,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function nd(i,e,t,n,s,r,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ti,o),c===null)return null;er.copy(o),er.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(er);return l<t.near||l>t.far?null:{distance:l,point:er.clone(),object:i}}function tr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Zs),i.getVertexPosition(c,Js),i.getVertexPosition(l,Qs);const h=nd(i,e,t,n,Zs,Js,Qs,El);if(h){const d=new U;on.getBarycoord(El,Zs,Js,Qs,d),s&&(h.uv=on.getInterpolatedAttribute(s,o,c,l,d,new Ke)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,c,l,d,new Ke)),a&&(h.normal=on.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new U,materialIndex:0};on.getNormal(Zs,Js,Qs,u.normal),h.face=u,h.barycoord=d}return h}class Qc extends Gt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ct,h=Ct,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl extends ei{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new nt,bl=new nt,nr=[],Tl=new Ei,id=new nt,ds=new $t,fs=new ss;class Nr extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,id)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Tl.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Tl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ss),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),fs.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),e.ray.intersectsSphere(fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),bl.multiplyMatrices(n,Ni),ds.matrixWorld=bl,ds.raycast(e,nr);for(let a=0,o=nr.length;a<o;a++){const c=nr[a];c.instanceId=r,c.object=this,t.push(c)}nr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qc(new Float32Array(s*this.count),s,this.count,Co,mn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pi=new ss,sd=new Ke(.5,.5),ir=new U;class Ds{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],_=r[8],M=r[9],m=r[10],f=r[11],S=r[12],w=r[13],b=r[14],R=r[15];if(s[0].setComponents(l-a,p-h,f-_,R-S).normalize(),s[1].setComponents(l+a,p+h,f+_,R+S).normalize(),s[2].setComponents(l+o,p+d,f+M,R+w).normalize(),s[3].setComponents(l-o,p-d,f-M,R-w).normalize(),n)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,p-u,f-m,R-b).normalize();else if(s[4].setComponents(l-c,p-u,f-m,R-b).normalize(),t===gn)s[5].setComponents(l+c,p+u,f+m,R+b).normalize();else if(t===Ls)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){pi.center.set(0,0,0);const t=sd.distanceTo(e.center);return pi.radius=.7071067811865476+t,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ir.x=s.normal.x>0?e.max.x:e.min.x,ir.y=s.normal.y>0?e.max.y:e.min.y,ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Al=new nt;class Oo{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Al.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ds),n[s].setFromProjectionMatrix(Al,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ds),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Oo().copy(this)}}class jc extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wr=new U,Rr=new U,wl=new nt,ps=new Jc,sr=new ss,pa=new U,Rl=new U;class rd extends Lt{constructor(e=new wn,t=new jc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wr.fromBufferAttribute(t,s-1),Rr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wr.distanceTo(Rr);e.setAttribute("lineDistance",new zt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(s),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;wl.copy(s).invert(),ps.copy(e.ray).applyMatrix4(wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=l){const f=h.getX(M),S=h.getX(M+1),w=rr(this,e,ps,c,f,S,M);w&&t.push(w)}if(this.isLineLoop){const M=h.getX(_-1),m=h.getX(p),f=rr(this,e,ps,c,M,m,_-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=l){const f=rr(this,e,ps,c,M,M+1,M);f&&t.push(f)}if(this.isLineLoop){const M=rr(this,e,ps,c,_-1,p,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(wr.fromBufferAttribute(o,s),Rr.fromBufferAttribute(o,r),t.distanceSqToSegment(wr,Rr,pa,Rl)>n)return;pa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(pa);if(!(l<e.near||l>e.far))return{distance:l,point:Rl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Cl=new U,Ll=new U;class ad extends rd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cl.fromBufferAttribute(t,s),Ll.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cl.distanceTo(Ll);e.setAttribute("lineDistance",new zt(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eh extends Gt{constructor(e=[],t=Ki,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class th extends Gt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi extends Gt{constructor(e,t,n=Tn,s,r,a,o=Ct,c=Ct,l,h=ni,d=1){if(h!==ni&&h!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class nh extends Zi{constructor(e,t=Tn,n=Ki,s,r,a=Ct,o=Ct,c,l=ni){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ih extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Kt extends wn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function _(M,m,f,S,w,b,R,T,g,E,O){const P=b/g,I=R/E,k=b/2,q=R/2,L=T/2,H=g+1,J=E+1;let z=0,ne=0;const W=new U;for(let Q=0;Q<J;Q++){const ee=Q*I-q;for(let ye=0;ye<H;ye++){const Fe=ye*P-k;W[M]=Fe*S,W[m]=ee*w,W[f]=L,l.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[f]=T>0?1:-1,h.push(W.x,W.y,W.z),d.push(ye/g),d.push(1-Q/E),z+=1}}for(let Q=0;Q<E;Q++)for(let ee=0;ee<g;ee++){const ye=u+ee+H*Q,Fe=u+ee+H*(Q+1),K=u+(ee+1)+H*(Q+1),me=u+(ee+1)+H*Q;c.push(ye,Fe,me),c.push(Fe,K,me),ne+=6}o.addGroup(p,ne,O),p+=ne,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const ar=new U,or=new U,ma=new U,lr=new on;class od extends wn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Vi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,p=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:M,b:m,c:f}=lr;if(M.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),lr.getNormal(ma),d[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const w=(S+1)%3,b=d[S],R=d[w],T=lr[h[S]],g=lr[h[w]],E=`${b}_${R}`,O=`${R}_${b}`,P=u.get(O);P?(ma.dot(P.normal)<=r&&(p.push(T.x,T.y,T.z),p.push(g.x,g.y,g.z)),u.set(O,null)):u.has(E)||u.set(E,{index0:l[S],index1:l[w],normal:ma.clone()})}}for(const _ of u.values())if(_){const{index0:M,index1:m}=_;ar.fromBufferAttribute(o,M),or.fromBufferAttribute(o,m),p.push(ar.x,ar.y,ar.z),p.push(or.x,or.y,or.z)}this.setAttribute("position",new zt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ur extends wn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,p=[],_=[],M=[],m=[];for(let f=0;f<h;f++){const S=f*u-a;for(let w=0;w<l;w++){const b=w*d-r;_.push(b,-S,0),M.push(0,0,1),m.push(w/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const w=S+l*f,b=S+l*(f+1),R=S+1+l*(f+1),T=S+1+l*f;p.push(w,b,T),p.push(b,R,T)}this.setIndex(p),this.setAttribute("position",new zt(_,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Pl(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const s in n)e[s]=n[s]}return e}function Pl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ld(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const cd={clone:Ji,merge:Ht};var hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class dd extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Is extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dl extends Is{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Hi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class fd extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pd extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fr extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class md extends Fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ga=new nt,Il=new U,Nl=new U;class rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ga,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cr=new U,hr=new ri,xn=new U;class ah extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cr,hr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cr,hr,xn),xn.x===1&&xn.y===1&&xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qn=new U,Ul=new Ke,Fl=new Ke;class an extends ah{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Fl),t.subVectors(Fl,Ul)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gd extends rh{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}}class _d extends Fr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class oh extends ah{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends rh{constructor(){super(new oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ol extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new vd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class xd extends Fr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ui=-90,Fi=1;class mo extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Ui,Fi,e,t);s.layers=this.layers,this.add(s);const r=new an(Ui,Fi,e,t);r.layers=this.layers,this.add(r);const a=new an(Ui,Fi,e,t);a.layers=this.layers,this.add(a);const o=new an(Ui,Fi,e,t);o.layers=this.layers,this.add(o);const c=new an(Ui,Fi,e,t);c.layers=this.layers,this.add(c);const l=new an(Ui,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Md extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Sd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bl(i,e,t,n){const s=Ed(n);switch(t){case Oc:return i*e;case Co:return i*e/s.components*s.byteLength;case Lo:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case Po:return i*e*2/s.components*s.byteLength;case Bc:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Do:return i*e*4/s.components*s.byteLength;case _r:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:case Ga:return Math.max(i,16)*Math.max(e,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(e,8)/2;case ka:case Ha:case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:case Er:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oo:case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ho:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yr:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ed(i){switch(i){case jt:case Ic:return{byteLength:1,components:1};case Cs:case Nc:case An:return{byteLength:2,components:1};case wo:case Ro:return{byteLength:2,components:4};case Tn:case Ao:case mn:return{byteLength:4,components:1};case Uc:case Fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);function lh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yd(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){const _=d[u],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){const M=d[p];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uf=`#ifdef USE_GRADIENTMAP
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
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,gf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Ef=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
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
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,Kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
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
}`,Pp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dp=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,kp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Hp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qp=`#define PHONG
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
}`,Yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Kp=`#define STANDARD
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
}`,$p=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Zp=`#define TOON
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
}`,Jp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Qp=`uniform float size;
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
}`,jp=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:bd,alphahash_pars_fragment:Td,alphamap_fragment:Ad,alphamap_pars_fragment:wd,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Ld,aomap_pars_fragment:Pd,batching_pars_vertex:Dd,batching_vertex:Id,begin_vertex:Nd,beginnormal_vertex:Ud,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:kd,clipping_planes_vertex:Hd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:$d,displacementmap_vertex:Zd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:jd,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:sf,envmap_pars_vertex:rf,envmap_physical_pars_fragment:gf,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:hf,gradientmap_pars_fragment:uf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:vf,lights_phong_fragment:xf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:yf,lights_fragment_maps:bf,lights_fragment_end:Tf,lightprobes_pars_fragment:Af,logdepthbuf_fragment:wf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Lf,map_fragment:Pf,map_pars_fragment:Df,map_particle_fragment:If,map_particle_pars_fragment:Nf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:Gf,morphtarget_vertex:kf,normal_fragment_begin:Hf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:Kf,clearcoat_normal_fragment_maps:$f,clearcoat_pars_fragment:Zf,iridescence_pars_fragment:Jf,opaque_fragment:Qf,packing:jf,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:sp,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:xp,uv_pars_fragment:Mp,uv_pars_vertex:Sp,uv_vertex:Ep,worldpos_vertex:yp,background_vert:bp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:wp,cube_vert:Rp,cube_frag:Cp,depth_vert:Lp,depth_frag:Pp,distance_vert:Dp,distance_frag:Ip,equirect_vert:Np,equirect_frag:Up,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:Gp,meshlambert_frag:kp,meshmatcap_vert:Hp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:Kp,meshphysical_frag:$p,meshtoon_vert:Zp,meshtoon_frag:Jp,points_vert:Qp,points_frag:jp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},pe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},En={basic:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ht([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ht([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ht([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ht([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ht([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ht([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ht([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ht([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ht([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Ht([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Ht([pe.lights,pe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};En.physical={uniforms:Ht([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ur={r:0,b:0,g:0},sm=new nt,ch=new Ue;ch.set(-1,0,0,0,1,0,0,0,1);function rm(i,e,t,n,s,r){const a=new Ie(0);let o=s===!0?0:1,c,l,h=null,d=0,u=null;function p(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const b=S.backgroundBlurriness>0;w=e.get(w,b)}return w}function _(S){let w=!1;const b=p(S);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,w){const b=p(w);b&&b.isCubeTexture?(l===void 0&&(l=new $t(new Kt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Ji(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ch),l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==tt,(h!==b||d!==b.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new $t(new Ur(2,2),new ii({name:"BackgroundMaterial",uniforms:Ji(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,w){S.getRGB(ur,sh(i)),t.buffers.color.setClear(ur.r,ur.g,ur.b,w,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:M,dispose:f}}function am(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(I,k,q,L,H){let J=!1;const z=d(I,L,q,k);r!==z&&(r=z,l(r.object)),J=p(I,L,q,H),J&&_(I,L,q,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,b(I,k,q,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,k,q,L){const H=L.wireframe===!0;let J=n[k.id];J===void 0&&(J={},n[k.id]=J);const z=I.isInstancedMesh===!0?I.id:0;let ne=J[z];ne===void 0&&(ne={},J[z]=ne);let W=ne[q.id];W===void 0&&(W={},ne[q.id]=W);let Q=W[H];return Q===void 0&&(Q=u(c()),W[H]=Q),Q}function u(I){const k=[],q=[],L=[];for(let H=0;H<t;H++)k[H]=0,q[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:L,object:I,attributes:{},index:null}}function p(I,k,q,L){const H=r.attributes,J=k.attributes;let z=0;const ne=q.getAttributes();for(const W in ne)if(ne[W].location>=0){const ee=H[W];let ye=J[W];if(ye===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),ee===void 0||ee.attribute!==ye||ye&&ee.data!==ye.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function _(I,k,q,L){const H={},J=k.attributes;let z=0;const ne=q.getAttributes();for(const W in ne)if(ne[W].location>=0){let ee=J[W];ee===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor));const ye={};ye.attribute=ee,ee&&ee.data&&(ye.data=ee.data),H[W]=ye,z++}r.attributes=H,r.attributesNum=z,r.index=L}function M(){const I=r.newAttributes;for(let k=0,q=I.length;k<q;k++)I[k]=0}function m(I){f(I,0)}function f(I,k){const q=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;q[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),H[I]!==k&&(i.vertexAttribDivisor(I,k),H[I]=k)}function S(){const I=r.newAttributes,k=r.enabledAttributes;for(let q=0,L=k.length;q<L;q++)k[q]!==I[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function w(I,k,q,L,H,J,z){z===!0?i.vertexAttribIPointer(I,k,q,H,J):i.vertexAttribPointer(I,k,q,L,H,J)}function b(I,k,q,L){M();const H=L.attributes,J=q.getAttributes(),z=k.defaultAttributeValues;for(const ne in J){const W=J[ne];if(W.location>=0){let Q=H[ne];if(Q===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const ee=Q.normalized,ye=Q.itemSize,Fe=e.get(Q);if(Fe===void 0)continue;const K=Fe.buffer,me=Fe.type,Me=Fe.bytesPerElement,we=me===i.INT||me===i.UNSIGNED_INT||Q.gpuType===Ao;if(Q.isInterleavedBufferAttribute){const ge=Q.data,Be=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,gt=Q.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Pe=0;Pe<W.locationSize;Pe++)f(W.location+Pe,ge.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)m(W.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Pe=0;Pe<W.locationSize;Pe++)w(W.location+Pe,ye/W.locationSize,me,ee,Be*Me,(gt+ye/W.locationSize*Pe)*Me,we)}else{if(Q.isInstancedBufferAttribute){for(let ge=0;ge<W.locationSize;ge++)f(W.location+ge,Q.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<W.locationSize;ge++)m(W.location+ge);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ge=0;ge<W.locationSize;ge++)w(W.location+ge,ye/W.locationSize,me,ee,ye*Me,ye/W.locationSize*ge*Me,we)}}else if(z!==void 0){const ee=z[ne];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}S()}function R(){O();for(const I in n){const k=n[I];for(const q in k){const L=k[q];for(const H in L){const J=L[H];for(const z in J)h(J[z].object),delete J[z];delete L[H]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const k=n[I.id];for(const q in k){const L=k[q];for(const H in L){const J=L[H];for(const z in J)h(J[z].object),delete J[z];delete L[H]}}delete n[I.id]}function g(I){for(const k in n){const q=n[k];for(const L in q){const H=q[L];if(H[I.id]===void 0)continue;const J=H[I.id];for(const z in J)h(J[z].object),delete J[z];delete H[I.id]}}}function E(I){for(const k in n){const q=n[k],L=I.isInstancedMesh===!0?I.id:0,H=q[L];if(H!==void 0){for(const J in H){const z=H[J];for(const ne in z)h(z[ne].object),delete z[ne];delete H[J]}delete q[L],Object.keys(q).length===0&&delete n[k]}}}function O(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function om(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==yn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const E=g===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==jt&&g!==mn&&!E&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Le("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:b,maxSamples:R,samples:T}}function cm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Zn,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,w=S*4;let b=f.clippingState||null;c.value=b,b=h(_,u,w,p);for(let R=0;R!==w;++R)b[R]=t[R];f.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const f=p+M*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,b=p;w!==M;++w,b+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}class Bo extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new eh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:ki});r.uniforms.tEquirect.value=t;const a=new $t(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Wt),new mo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const zl=256,hm=3,um=20,hh=256,uh=16,dm=3,fm=new U,pm=new Ie;class Cr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mo(1,10,null),this._boxMesh=new $t(new Kt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=fm}=r,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,_=c.autoClearStencil,M=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(e.background=c.getClearColor(pm));const m=new mo(n,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=_,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zl,Vc(e))}_fromTexture(e,t){e.mapping===Ki||e.mapping===ws?this._setSize(e.image.length===0?zl:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Gl(e,!1,!1),n=Math.log2(e)-hm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Gl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ki||e.mapping===ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mm(),this._integrationMaterial=gm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/uh);for(let a=0;a<=n;a++){const o=Cr.lodToRoughness(a,n);if(a>n-dm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(hh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_m());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Gl(i,e,t){return new Bo(i,{minFilter:Fn,generateMipmaps:e,type:An,colorSpace:br,depthBuffer:t})}function Us(i,e,t){return new ii({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Xt,blending:ki,depthTest:!1,depthWrite:!1})}function mm(){return Us("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${hh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gm(){return Us("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:uh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _m(){return Us("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${um}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kl(){return Us("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Hl(){return Us("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){const p=u.mapping;if(p===Wr||p===Xr)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new Bo(_.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const p=u.mapping,_=p===Wr||p===Xr,M=p===Ki||p===ws;if(_||M){let m=t.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return n===null&&(n=new Cr(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return _&&S&&S.height>0||M&&S&&c(S)?(n===null&&(n=new Cr(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Wr?u.mapping=Ki:p===Xr&&(u.mapping=ws),u}function c(u){let p=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function l(u){const p=u.target;p.removeEventListener("dispose",l);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){const p=u.target;p.removeEventListener("dispose",h);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function Mm(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);const M=r.get(_);M&&(e.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(_){const M=_.attributes;for(const m in M)e.update(M[m],i.ARRAY_BUFFER)}function d(_){const M=_.index,m=_.attributes.position;let f=0;if(m===void 0)return;const S=M!==null?M.array.length:m.array.length/3-1,w=m.count>=65535?Zc:$c,b=new w(Math.ceil(S/3)*6,1),R=b.array;if(M!==null){const g=M.array;f=M.version;for(let E=0,O=0;E<S;E+=3){const P=g[E+0],I=g[E+1],k=g[E+2];R[O++]=P,R[O++]=I,R[O++]=I,R[O++]=k,R[O++]=k,R[O++]=P}}else{f=m.version;for(let g=0,E=0;g<S;g+=3){const O=g+0,P=g+1,I=g+2;R[E++]=O,R[E++]=P,R[E++]=P,R[E++]=I,R[E++]=I,R[E++]=O}}b.version=f;const T=r.get(_);T&&e.remove(T),r.set(_,b)}function u(_){const M=r.get(_);if(M){const m=_.index;m!==null&&M.version<m.version&&d(_)}else d(_);return r.get(_)}function p(){for(const _ in s){const M=s[_].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:u,dispose:p}}function Sm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,d*a,p),t.update(u,n,p))}function h(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Em(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,e,t){const n=new WeakMap,s=new ft;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let P=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),M===!0&&(b=2),m===!0&&(b=3);let R=o.attributes.position.count*b,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const g=new Float32Array(R*T*4*d),E=new qc(g,R,T,d);E.type=mn,E.needsUpdate=!0;const O=b*4;for(let I=0;I<d;I++){const k=f[I],q=S[I],L=w[I],H=R*T*4*I;for(let J=0;J<k.count;J++){const z=J*O;_===!0&&(s.fromBufferAttribute(k,J),g[H+z+0]=s.x,g[H+z+1]=s.y,g[H+z+2]=s.z,g[H+z+3]=0),M===!0&&(s.fromBufferAttribute(q,J),g[H+z+4]=s.x,g[H+z+5]=s.y,g[H+z+6]=s.z,g[H+z+7]=0),m===!0&&(s.fromBufferAttribute(L,J),g[H+z+8]=s.x,g[H+z+9]=s.y,g[H+z+10]=s.z,g[H+z+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new Ke(R,T)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function bm(i,e,t,n,s){let r=new WeakMap;function a(l){const h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Tm={[Ac]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[Rc]:"CINEON_TONE_MAPPING",[To]:"ACES_FILMIC_TONE_MAPPING",[Lc]:"AGX_TONE_MAPPING",[Pc]:"NEUTRAL_TONE_MAPPING",[Cc]:"CUSTOM_TONE_MAPPING"};function Am(i,e,t,n,s,r){const a=new bn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const h=new wn;h.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new zt([0,2,0,0,2,0],2));const d=new dd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $t(h,d),p=new oh(-1,1,1,-1,0,1);let _=null,M=null,m=!1,f,S=null,w=[],b=!1;this.setSize=function(R,T){a.setSize(R,T),o!==null&&o.setSize(R,T),c!==null&&c.setSize(R,T);for(let g=0;g<w.length;g++){const E=w[g];E.setSize&&E.setSize(R,T)}},this.setEffects=function(R){w=R,b=w.length>0&&w[0].isRenderPass===!0;const T=a.width,g=a.height;w.length>0&&o===null&&(o=new bn(T,g,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new bn(T,g,{type:An,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&w.some(O=>O.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new Zi(T,g),r===!0&&(l.format=jn,l.type=$i)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let O=0;O<w.length;O++){const P=w[O];P.setSize&&P.setSize(T,g),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(R,T){if(m||R.toneMapping===On&&w.length===0)return!1;if(S=T,T!==null){const g=T.width,E=T.height;(a.width!==g||a.height!==E)&&this.setSize(g,E)}return b===!1&&R.setRenderTarget(a),f=R.toneMapping,R.toneMapping=On,!0},this.hasRenderPass=function(){return b},this.end=function(R,T){R.toneMapping=f,m=!0;let g=a,E=o;for(let O=0;O<w.length;O++){const P=w[O];P.enabled!==!1&&(P.render(R,E,g,T),P.needsSwap!==!1&&(g=E,E=E===o?c:o))}if(_!==R.outputColorSpace||M!==R.toneMapping){_=R.outputColorSpace,M=R.toneMapping,d.defines={},Ye.getTransfer(_)===tt&&(d.defines.SRGB_TRANSFER="");const O=Tm[M];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,R.setRenderTarget(S),R.render(u,p),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}const dh=new Gt,fh=new Zi(1,1),ph=new nh(1),mh=new qc,gh=new ku,_h=new eh,Vl=[],Wl=[],Xl=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function as(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Vl[s];if(r===void 0&&(r=new Float32Array(s),Vl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Or(i,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),yt(t,n)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),yt(t,n)}}function Im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),yt(t,n)}}function Nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Br(i){return i.version===0&&(i.compareFunction=kc,i.needsUpdate=!0),i}function Hm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Br(fh):r=dh,t.setTexture2D(e||r,s)}function Vm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gh,s)}function Wm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Br(ph):r=_h,t.setTextureCube(e||r,s)}function Xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mh,s)}function qm(i){switch(i){case 5126:return wm;case 35664:return Rm;case 35665:return Cm;case 35666:return Lm;case 35674:return Pm;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Nm;case 35667:case 35671:return Um;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return Gm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function Km(i,e){const t=as(e,this.size,2);i.uniform2fv(this.addr,t)}function $m(i,e){const t=as(e,this.size,3);i.uniform3fv(this.addr,t)}function Zm(i,e){const t=as(e,this.size,4);i.uniform4fv(this.addr,t)}function Jm(i,e){const t=as(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qm(i,e){const t=as(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jm(i,e){const t=as(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eg(i,e){i.uniform1iv(this.addr,e)}function tg(i,e){i.uniform2iv(this.addr,e)}function ng(i,e){i.uniform3iv(this.addr,e)}function ig(i,e){i.uniform4iv(this.addr,e)}function sg(i,e){i.uniform1uiv(this.addr,e)}function rg(i,e){i.uniform2uiv(this.addr,e)}function ag(i,e){i.uniform3uiv(this.addr,e)}function og(i,e){i.uniform4uiv(this.addr,e)}function lg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Br(fh):a=dh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function cg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gh,r[a])}function hg(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Br(ph):a=_h;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ug(i,e,t){const n=this.cache,s=e.length,r=Or(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||mh,r[a])}function dg(i){switch(i){case 5126:return Ym;case 35664:return Km;case 35665:return $m;case 35666:return Zm;case 35674:return Jm;case 35675:return Qm;case 35676:return jm;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}class fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}}class pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dg(t.type)}}class mg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Kl(i,e){i.seq.push(e),i.map[e.id]=e}function gg(i,e,t){const n=i.name,s=n.length;for(_a.lastIndex=0;;){const r=_a.exec(n),a=_a.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Kl(t,l===void 0?new fg(o,i,e):new pg(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new mg(o),Kl(t,d)),t=d}}}class Sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);gg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function $l(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _g=37297;let vg=0;function xg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zl=new Ue;function Mg(i){Ye._getMatrix(Zl,Ye.workingColorSpace,i);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Tr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xg(i.getShaderSource(e),o)}else return r}function Sg(i,e){const t=Mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Eg={[Ac]:"Linear",[wc]:"Reinhard",[Rc]:"Cineon",[To]:"ACESFilmic",[Lc]:"AgX",[Pc]:"Neutral",[Cc]:"Custom"};function yg(i,e){const t=Eg[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dr=new U;function bg(){Ye.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),e=dr.y.toFixed(4),t=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Ag(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xs(i){return i!==""}function Ql(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace(Rg,Cg)}function Cg(i,e){const t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return go(t)}const Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(i){return i.replace(Lg,Pg)}function Pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dg={[gr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function Ig(i){return Dg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ng={[ws]:"ENVMAP_MODE_REFRACTION"};function Ug(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ng[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fg={[Tc]:"ENVMAP_BLENDING_MULTIPLY",[ru]:"ENVMAP_BLENDING_MIX",[au]:"ENVMAP_BLENDING_ADD"};function Og(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Fg[i.combine]||"ENVMAP_BLENDING_NONE"}function Bg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ig(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ug(t),d=Og(t),u=Tg(t),p=Ag(r),_=s.createProgram();let M,m,f=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xs).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xs).join(`
`),m.length>0&&(m+=`
`)):(M=[tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),m=[tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?ke.tonemapping_pars_fragment:"",t.toneMapping!==On?yg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Sg("linearToOutputTexel",t.outputColorSpace),bg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xs).join(`
`)),a=go(a),a=Ql(a,t),a=jl(a,t),o=go(o),o=Ql(o,t),o=jl(o,t),a=ec(a),o=ec(o),t.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=f+M+a,w=f+m+o,b=$l(s,s.VERTEX_SHADER,S),R=$l(s,s.FRAGMENT_SHADER,w);s.attachShader(_,b),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(b)||"",q=s.getShaderInfoLog(R)||"",L=I.trim(),H=k.trim(),J=q.trim();let z=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,R);else{const W=Jl(s,b,"vertex"),Q=Jl(s,R,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+W+`
`+Q)}else L!==""?Le("WebGLProgram: Program Info Log:",L):(H===""||J==="")&&(ne=!1);ne&&(P.diagnostics={runnable:z,programLog:L,vertexShader:{log:H,prefix:M},fragmentShader:{log:J,prefix:m}})}s.deleteShader(b),s.deleteShader(R),g=new Sr(s,_),E=wg(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(_,_g)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let zg=0;class Gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kg(e),t.set(e,n)),n}}class kg{constructor(e){this.id=zg++,this.code=e,this.usedTimes=0}}function Hg(i){return i===xi||i===Er||i===yr}function Vg(i,e,t,n,s,r){const a=new Yc,o=new Gg,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,E,O,P,I,k){const q=P.fog,L=I.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,J=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=e.get(g.envMap||H,J),ne=u[g.type];let W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=Q!==void 0?Q.length:0;let ye=0;L.morphAttributes.position!==void 0&&(ye=1),L.morphAttributes.normal!==void 0&&(ye=2),L.morphAttributes.color!==void 0&&(ye=3);let Fe,K,me,Me;if(ne){const fe=En[ne];Fe=fe.vertexShader,K=fe.fragmentShader}else{Fe=g.vertexShader,K=g.fragmentShader;const fe=o.getVertexShaderStage(g),et=o.getFragmentShaderStage(g);o.update(g,fe,et),me=fe.id,Me=et.id}const we=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Be=I.isInstancedMesh===!0,gt=I.isBatchedMesh===!0,Pe=!!g.map,je=!!g.matcap,it=!!z,Ve=it&&z.isPMREMTexture===!0,Pt=!!g.aoMap,Mt=!!g.lightMap,qt=!!g.bumpMap&&g.wireframe===!1,ht=!!g.normalMap,vn=!!g.displacementMap,bt=!!g.emissiveMap,en=!!g.metalnessMap,tn=!!g.roughnessMap,nn=g.anisotropy>0,D=g.clearcoat>0,sn=g.diffuseRoughness>0,ot=g.dispersion>0,lt=g.retroreflectivity>0,de=g.iridescence>0,St=g.sheen>0,Re=g.transmission>0,Ne=nn&&!!g.anisotropyMap,y=D&&!!g.clearcoatMap,v=D&&!!g.clearcoatNormalMap,F=D&&!!g.clearcoatRoughnessMap,te=sn&&!!g.diffuseRoughnessMap,Z=de&&!!g.iridescenceMap,re=de&&!!g.iridescenceThicknessMap,he=St&&!!g.sheenColorMap,X=St&&!!g.sheenRoughnessMap,Y=!!g.specularMap,oe=!!g.specularColorMap,A=!!g.specularIntensityMap,$=Re&&!!g.transmissionMap,V=Re&&!!g.thicknessMap,le=!!g.gradientMap,se=!!g.alphaMap,ae=g.alphaTest>0,Te=!!g.alphaHash,Ge=!!g.extensions;let ie=On;g.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(ie=i.toneMapping);const Ae=Ve?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,ze={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Fe,fragmentShader:K,defines:g.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:gt,batchingColor:gt&&I._colorsTexture!==null,instancing:Be,instancingColor:Be&&I.instanceColor!==null,instancingMorph:Be&&I.morphTexture!==null,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:je,envMap:it,envMapMode:it&&z.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?Ae.length-1:null,envMapSize:Ve?Ae[0].width:null,aoMap:Pt,lightMap:Mt,bumpMap:qt,normalMap:ht,displacementMap:vn,emissiveMap:bt,normalMapObjectSpace:ht&&g.normalMapType===cu,normalMapTangentSpace:ht&&g.normalMapType===po,packedNormalMap:ht&&g.normalMapType===po&&Hg(g.normalMap.format),metalnessMap:en,roughnessMap:tn,anisotropy:nn,anisotropyMap:Ne,clearcoat:D,clearcoatMap:y,clearcoatNormalMap:v,clearcoatRoughnessMap:F,diffuseRoughness:sn,diffuseRoughnessMap:te,dispersion:ot,retroreflection:lt,iridescence:de,iridescenceMap:Z,iridescenceThicknessMap:re,sheen:St,sheenColorMap:he,sheenRoughnessMap:X,specularMap:Y,specularColorMap:oe,specularIntensityMap:A,transmission:Re,transmissionMap:$,thicknessMap:V,gradientMap:le,opaque:g.transparent===!1&&g.blending===Ss&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Te,combine:g.combine,mapUv:Pe&&p(g.map.channel),aoMapUv:Pt&&p(g.aoMap.channel),lightMapUv:Mt&&p(g.lightMap.channel),bumpMapUv:qt&&p(g.bumpMap.channel),normalMapUv:ht&&p(g.normalMap.channel),displacementMapUv:vn&&p(g.displacementMap.channel),emissiveMapUv:bt&&p(g.emissiveMap.channel),metalnessMapUv:en&&p(g.metalnessMap.channel),roughnessMapUv:tn&&p(g.roughnessMap.channel),anisotropyMapUv:Ne&&p(g.anisotropyMap.channel),clearcoatMapUv:y&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:Z&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:X&&p(g.sheenRoughnessMap.channel),specularMapUv:Y&&p(g.specularMap.channel),specularColorMapUv:oe&&p(g.specularColorMap.channel),specularIntensityMapUv:A&&p(g.specularIntensityMap.channel),transmissionMapUv:$&&p(g.transmissionMap.channel),thicknessMapUv:V&&p(g.thicknessMap.channel),alphaMapUv:se&&p(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ht||nn),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Pe||se),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&ht===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&Ye.getTransfer(g.map.colorSpace)===tt,decodeVideoTextureEmissive:bt&&g.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(g.emissiveMap.colorSpace)===tt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===pn,flipSided:g.side===Xt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ge&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&g.extensions.multiDraw===!0||gt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function M(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)E.push(O),E.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(m(E,g),f(E,g),E.push(i.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function m(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapPMREM),g.push(E.envMapMaxLod),g.push(E.envMapSize),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.diffuseRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.numSunLights),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numSunLightShadows),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.numLightProbeGrids),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function f(g,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){const E=u[g.type];let O;if(E){const P=En[E];O=cd.clone(P.uniforms)}else O=g.uniforms;return O}function w(g,E){let O=h.get(E);return O!==void 0?++O.usedTimes:(O=new Bg(i,E,g,s),l.push(O),h.set(E,O)),O}function b(g){if(--g.usedTimes===0){const E=l.indexOf(g);l[E]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function R(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:S,acquireProgram:w,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:T}}function Wg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ic(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,m,f){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},i[e]=S):(S.id=u.id,S.object=u,S.geometry=p,S.material=_,S.materialVariant=a(u),S.groupOrder=M,S.renderOrder=u.renderOrder,S.z=m,S.group=f),e++,S}function c(u,p,_,M,m,f,S){S.reversedDepth===!0&&(m=-m);const w=o(u,p,_,M,m,f);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function l(u,p,_,M,m,f){const S=o(u,p,_,M,m,f);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,p){t.length>1&&t.sort(u||Xg),n.length>1&&n.sort(p||nc),s.length>1&&s.sort(p||nc)}function d(){for(let u=e,p=i.length;u<p;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function qg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ic,i.set(n,[a])):s>=r.length?(a=new ic,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Ie};break;case"SpotLight":t={position:new U,direction:new U,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Kg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $g=0;function Zg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jg(i){const e=new Yg,t=Kg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new nt,a=new nt;function o(l){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,S=0,w=0,b=0,R=0,T=0,g=0,E=0,O=0,P=0;l.sort(Zg);for(let k=0,q=l.length;k<q;k++){const L=l[k],H=L.color,J=L.intensity,z=L.distance;let ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xi?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*J,d+=H.g*J,u+=H.b*J;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],J);P++}else if(L.isSunLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=ne;const ye=Q.getViewportCount();for(let Fe=0;Fe<ye;Fe++)n.sunShadowMatrix[M+Fe]=Q.getMatrix(Fe),n.sunShadowCascade[M+Fe]=Q._cascadeData[Fe];M+=ye,_++}n.sun[p]=W,p++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=L.shadow.matrix,R++}n.directional[m]=W,m++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(H).multiplyScalar(J),W.distance=z,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[S]=W;const Q=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,Q.updateMatrices(L),L.castShadow&&O++),n.spotLightMatrix[S]=Q.matrix,L.castShadow){const ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,n.spotShadow[S]=ee,n.spotShadowMap[S]=ne,g++}S++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(H).multiplyScalar(J),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=W,w++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const Q=L.shadow,ee=t.get(L);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=ne,n.pointShadowMatrix[f]=L.shadow.matrix,T++}n.point[f]=W,f++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(J),W.groundColor.copy(L.groundColor).multiplyScalar(J),n.hemi[b]=W,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.sunLength!==p||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==S||I.rectAreaLength!==w||I.hemiLength!==b||I.numSunShadows!==_||I.numDirectionalShadows!==R||I.numPointShadows!==T||I.numSpotShadows!==g||I.numSpotMaps!==E||I.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=f,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+E-O,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=P,I.sunLength=p,I.directionalLength=m,I.pointLength=f,I.spotLength=S,I.rectAreaLength=w,I.hemiLength=b,I.numSunShadows=_,I.numDirectionalShadows=R,I.numPointShadows=T,I.numSpotShadows=g,I.numSpotMaps=E,I.numLightProbes=P,n.version=$g++)}function c(l,h){let d=0,u=0,p=0,_=0,M=0,m=0;const f=h.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){const b=l[S];if(b.isSunLight){const R=n.sun[d];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(f),d++}else if(b.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),u++}else if(b.isSpotLight){const R=n.spot[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),_++}else if(b.isRectAreaLight){const R=n.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),a.identity(),r.copy(b.matrixWorld),r.premultiply(f),a.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){const R=n.point[p];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(f),p++}else if(b.isHemisphereLight){const R=n.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function sc(i){const e=new Jg(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Qg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new sc(i),e.set(s,[o])):r>=a.length?(o=new sc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,t0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],n0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],rc=new nt,ms=new U,va=new U;function i0(i,e,t){let n=new Ds;const s=new Ke,r=new Ke,a=new ft,o=new fd,c=new pd,l={},h=t.maxTextureSize,d={[ti]:Xt,[Xt]:ti,[pn]:pn},u=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:jg,fragmentShader:e0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new wn;_.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $t(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let f=this.type;this.render=function(T,g,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Ec&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gr);const O=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ki),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=f!==this.type;q&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=T.length;L<H;L++){const J=T[L],z=J.shadow;if(z===void 0){Le("WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ne=z.getFrameExtents();s.multiply(ne),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===_s){if(J.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new bn(s.x,s.y,{format:xi,type:An,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),z.map.texture.name=J.name+".shadowMap",z.map.depthTexture=new Zi(s.x,s.y,mn),z.map.depthTexture.name=J.name+".shadowMapDepth",z.map.depthTexture.format=ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct}else J.isPointLight?(z.map=new Bo(s.x),z.map.depthTexture=new nh(s.x,Tn)):(z.map=new bn(s.x,s.y),z.map.depthTexture=new Zi(s.x,s.y,Tn)),z.map.depthTexture.name=J.name+".shadowMap",z.map.depthTexture.format=ni,this.type===gr?(z.map.depthTexture.compareFunction=W?Gc:zc,z.map.depthTexture.minFilter=Wt,z.map.depthTexture.magFilter=Wt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();J.isPointLight!==!0&&z.updateMatrices(J,E);const ee=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:E.layers;for(let ye=0;ye<Q;ye++){const Fe=z.getCamera(ye);if(J.isPointLight){const K=z.camera,me=z.matrix,Me=J.distance||K.far;Me!==K.far&&(K.far=Me,K.updateProjectionMatrix()),ms.setFromMatrixPosition(J.matrixWorld),K.position.copy(ms),va.copy(K.position),va.add(t0[ye]),K.up.copy(n0[ye]),K.lookAt(va),K.updateMatrixWorld(),me.makeTranslation(-ms.x,-ms.y,-ms.z),rc.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z._frustum.setFromProjectionMatrix(rc,K.coordinateSystem,K.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ye),i.clear();else{ye===0&&(i.setRenderTarget(z.map),i.clear());const K=z.getViewport(ye);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),k.viewport(a)}n=z.getFrustum(ye),b(g,E,Fe,J,ee,this.type)}z.isPointLightShadow!==!0&&this.type===_s&&S(z,E),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(O,P,I)};function S(T,g){const E=e.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new bn(s.x,s.y,{format:xi,type:An}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,E,u,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,E,p,M,null)}function w(T,g,E,O){let P=null;const I=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)P=I;else if(P=E.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const k=P.uuid,q=g.uuid;let L=l[k];L===void 0&&(L={},l[k]=L);let H=L[q];H===void 0&&(H=P.clone(),L[q]=H,g.addEventListener("dispose",R)),P=H}if(P.visible=g.visible,P.wireframe=g.wireframe,O===_s?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:d[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const k=i.properties.get(P);k.light=E}return P}function b(T,g,E,O,P,I){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===_s)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const L=e.update(T),H=T.material;if(Array.isArray(H)){const J=L.groups;for(let z=0,ne=J.length;z<ne;z++){const W=J[z],Q=H[W.materialIndex];if(Q&&Q.visible){const ee=w(T,Q,O,I);T.onBeforeShadow(i,T,g,E,L,ee,W),i.renderBufferDirect(E,null,L,ee,T,W),T.onAfterShadow(i,T,g,E,L,ee,W)}}}else if(H.visible){const J=w(T,H,O,I);T.onBeforeShadow(i,T,g,E,L,J,null),i.renderBufferDirect(E,null,L,J,T,null),T.onAfterShadow(i,T,g,E,L,J,null)}}const q=T.children;for(let L=0,H=q.length;L<H;L++)b(q[L],g,E,O,P,I)}function R(T){T.target.removeEventListener("dispose",R);for(const E in l){const O=l[E],P=T.target.uuid;P in O&&(O[P].dispose(),delete O[P])}}}function s0(i,e){function t(){let A=!1;const $=new ft;let V=null;const le=new ft(0,0,0,0);return{setMask:function(se){V!==se&&!A&&(i.colorMask(se,se,se,se),V=se)},setLocked:function(se){A=se},setClear:function(se,ae,Te,Ge,ie){ie===!0&&(se*=Ge,ae*=Ge,Te*=Ge),$.set(se,ae,Te,Ge),le.equals($)===!1&&(i.clearColor(se,ae,Te,Ge),le.copy($))},reset:function(){A=!1,V=null,le.set(-1,0,0,0)}}}function n(){let A=!1,$=!1,V=null,le=null,se=null;return{setReversed:function(ae){if($!==ae){const Te=e.get("EXT_clip_control");ae?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),$=ae;const Ge=se;se=null,this.setClear(Ge)}},getReversed:function(){return $},setTest:function(ae){ae?ge(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(ae){V!==ae&&!A&&(i.depthMask(ae),V=ae)},setFunc:function(ae){if($&&(ae=Mu[ae]),le!==ae){switch(ae){case Ca:i.depthFunc(i.NEVER);break;case La:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){A=ae},setClear:function(ae){se!==ae&&(se=ae,$&&(ae=1-ae),i.clearDepth(ae))},reset:function(){A=!1,V=null,le=null,se=null,$=!1}}}function s(){let A=!1,$=null,V=null,le=null,se=null,ae=null,Te=null,Ge=null,ie=null;return{setTest:function(Ae){A||(Ae?ge(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Ae){$!==Ae&&!A&&(i.stencilMask(Ae),$=Ae)},setFunc:function(Ae,ze,fe){(V!==Ae||le!==ze||se!==fe)&&(i.stencilFunc(Ae,ze,fe),V=Ae,le=ze,se=fe)},setOp:function(Ae,ze,fe){(ae!==Ae||Te!==ze||Ge!==fe)&&(i.stencilOp(Ae,ze,fe),ae=Ae,Te=ze,Ge=fe)},setLocked:function(Ae){A=Ae},setClear:function(Ae){ie!==Ae&&(i.clearStencil(Ae),ie=Ae)},reset:function(){A=!1,$=null,V=null,le=null,se=null,ae=null,Te=null,Ge=null,ie=null}}}const r=new t,a=new n,o=new s;let c={};const l=new WeakMap;let h={},d={},u={},p=new WeakMap,_=[],M=null,m=!1,f=null,S=null,w=null,b=null,R=null,T=null,g=null,E=new Ie(0,0,0),O=0,P=!1,I=null,k=null,q=null,L=null,H=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=ne>=2);let Q=null,ee={};const ye=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),K=new ft().fromArray(ye),me=new ft().fromArray(Fe);function Me(A,$,V,le){const se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(A,ae),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<V;Te++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D($+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}const we={};we[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(As),qt(!1),ht(nl),ge(i.CULL_FACE),Pt(ki);function ge(A){h[A]!==!0&&(i.enable(A),h[A]=!0)}function Be(A){h[A]!==!1&&(i.disable(A),h[A]=!1)}function gt(A,$){return u[A]!==$?(i.bindFramebuffer(A,$),u[A]=$,A===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),A===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Pe(A,$){let V=_,le=!1;if(A){V=p.get($),V===void 0&&(V=[],p.set($,V));const se=A.textures;if(V.length!==se.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Te=se.length;ae<Te;ae++)V[ae]=i.COLOR_ATTACHMENT0+ae;V.length=se.length,le=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,le=!0);le&&i.drawBuffers(V)}function je(A){return M!==A?(i.useProgram(A),M=A,!0):!1}const it={[zi]:i.FUNC_ADD,[Hh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};it[Wh]=i.MIN,it[Xh]=i.MAX;const Ve={[qh]:i.ZERO,[Yh]:i.ONE,[Kh]:i.SRC_COLOR,[yc]:i.SRC_ALPHA,[eu]:i.SRC_ALPHA_SATURATE,[Qh]:i.DST_COLOR,[Zh]:i.DST_ALPHA,[$h]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Jh]:i.ONE_MINUS_DST_ALPHA,[tu]:i.CONSTANT_COLOR,[nu]:i.ONE_MINUS_CONSTANT_COLOR,[iu]:i.CONSTANT_ALPHA,[su]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(A,$,V,le,se,ae,Te,Ge,ie,Ae){if(A===ki){m===!0&&(Be(i.BLEND),m=!1);return}if(m===!1&&(ge(i.BLEND),m=!0),A!==kh){if(A!==f||Ae!==P){if((S!==zi||R!==zi)&&(i.blendEquation(i.FUNC_ADD),S=zi,R=zi),Ae)switch(A){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ts:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",A);break}else switch(A){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",A);break}w=null,b=null,T=null,g=null,E.set(0,0,0),O=0,f=A,P=Ae}return}se=se||$,ae=ae||V,Te=Te||le,($!==S||se!==R)&&(i.blendEquationSeparate(it[$],it[se]),S=$,R=se),(V!==w||le!==b||ae!==T||Te!==g)&&(i.blendFuncSeparate(Ve[V],Ve[le],Ve[ae],Ve[Te]),w=V,b=le,T=ae,g=Te),(Ge.equals(E)===!1||ie!==O)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ie),E.copy(Ge),O=ie),f=A,P=!1}function Mt(A,$){A.side===pn?Be(i.CULL_FACE):ge(i.CULL_FACE);let V=A.side===Xt;$&&(V=!V),qt(V),A.blending===Ss&&A.transparent===!1?Pt(ki):Pt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);const le=A.stencilWrite;o.setTest(le),le&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),bt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(A){I!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),I=A)}function ht(A){A!==zh?(ge(i.CULL_FACE),A!==k&&(A===nl?i.cullFace(i.BACK):A===Gh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),k=A}function vn(A){A!==q&&(z&&i.lineWidth(A),q=A)}function bt(A,$,V){A?(ge(i.POLYGON_OFFSET_FILL),(L!==$||H!==V)&&(L=$,H=V,a.getReversed()&&($=-$,V=-V),i.polygonOffset($,V))):Be(i.POLYGON_OFFSET_FILL)}function en(A){A?ge(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function tn(A){A===void 0&&(A=i.TEXTURE0+J-1),Q!==A&&(i.activeTexture(A),Q=A)}function nn(A,$,V){V===void 0&&(Q===null?V=i.TEXTURE0+J-1:V=Q);let le=ee[V];le===void 0&&(le={type:void 0,texture:void 0},ee[V]=le),(le.type!==A||le.texture!==$)&&(Q!==V&&(i.activeTexture(V),Q=V),i.bindTexture(A,$||we[A]),le.type=A,le.texture=$)}function D(){const A=ee[Q];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function sn(){try{i.compressedTexImage2D(...arguments)}catch(A){Je("WebGLState:",A)}}function ot(){try{i.compressedTexImage3D(...arguments)}catch(A){Je("WebGLState:",A)}}function lt(){try{i.texSubImage2D(...arguments)}catch(A){Je("WebGLState:",A)}}function de(){try{i.texSubImage3D(...arguments)}catch(A){Je("WebGLState:",A)}}function St(){try{i.compressedTexSubImage2D(...arguments)}catch(A){Je("WebGLState:",A)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(A){Je("WebGLState:",A)}}function Ne(){try{i.texStorage2D(...arguments)}catch(A){Je("WebGLState:",A)}}function y(){try{i.texStorage3D(...arguments)}catch(A){Je("WebGLState:",A)}}function v(){try{i.texImage2D(...arguments)}catch(A){Je("WebGLState:",A)}}function F(){try{i.texImage3D(...arguments)}catch(A){Je("WebGLState:",A)}}function te(A){return d[A]!==void 0?d[A]:i.getParameter(A)}function Z(A,$){d[A]!==$&&(i.pixelStorei(A,$),d[A]=$)}function re(A){K.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function he(A){me.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),me.copy(A))}function X(A,$){let V=l.get($);V===void 0&&(V=new WeakMap,l.set($,V));let le=V.get(A);le===void 0&&(le=i.getUniformBlockIndex($,A.name),i.uniformBlockBinding($,le,le),V.set(A,le))}function Y(A,$,V){const se=l.get($).get(A);c[se]!==V&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,V),c[se]=V)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,ee={},u={},c={},p=new WeakMap,_=[],M=null,m=!1,f=null,S=null,w=null,b=null,R=null,T=null,g=null,E=new Ie(0,0,0),O=0,P=!1,I=null,k=null,q=null,L=null,H=null,K.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Be,bindFramebuffer:gt,drawBuffers:Pe,useProgram:je,setBlending:Pt,setMaterial:Mt,setFlipSided:qt,setCullFace:ht,setLineWidth:vn,setPolygonOffset:bt,setScissorTest:en,activeTexture:tn,bindTexture:nn,unbindTexture:D,compressedTexImage2D:sn,compressedTexImage3D:ot,texImage2D:v,texImage3D:F,pixelStorei:Z,getParameter:te,updateUBOMapping:X,uniformBlockBinding:Y,texStorage2D:Ne,texStorage3D:y,texSubImage2D:lt,texSubImage3D:de,compressedTexSubImage2D:St,compressedTexSubImage3D:Re,scissor:re,viewport:he,reset:oe}}function r0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ke,h=new WeakMap,d=new Set;let u;const p=new WeakMap,_=new Set,M=new FinalizationRegistry(y=>_.delete(y));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(y,v){return m?new OffscreenCanvas(y,v):Ar("canvas")}function S(y,v,F){let te=1;const Z=Ne(y);if((Z.width>F||Z.height>F)&&(te=F/Math.max(Z.width,Z.height)),te<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const re=Math.floor(te*Z.width),he=Math.floor(te*Z.height);u===void 0&&(u=f(re,he));const X=v?f(re,he):u;return X.width=re,X.height=he,X.getContext("2d").drawImage(y,0,0,re,he),Le("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+re+"x"+he+")."),X}else return"data"in y&&Le("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),y;return y}function w(y){return y.generateMipmaps}function b(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,v,F,te,Z,re=!1){if(y!==null){if(i[y]!==void 0)return i[y];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let he;te&&(he=e.get("EXT_texture_norm16"),he||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8),F===i.UNSIGNED_SHORT&&he&&(X=he.R16_EXT),F===i.SHORT&&he&&(X=he.R16_SNORM_EXT)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),v===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8),F===i.UNSIGNED_SHORT&&he&&(X=he.RG16_EXT),F===i.SHORT&&he&&(X=he.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_SHORT&&he&&(X=he.RGB16_EXT),F===i.SHORT&&he&&(X=he.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const Y=re?Tr:Ye.getTransfer(Z);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=Y===tt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&he&&(X=he.RGBA16_EXT),F===i.SHORT&&he&&(X=he.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function g(y,v){let F;return y?v===null||v===Tn||v===$i?F=i.DEPTH24_STENCIL8:v===mn?F=i.DEPTH32F_STENCIL8:v===Cs&&(F=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Tn||v===$i?F=i.DEPTH_COMPONENT24:v===mn?F=i.DEPTH_COMPONENT32F:v===Cs&&(F=i.DEPTH_COMPONENT16),F}function E(y,v){return w(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ct&&y.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function O(y){const v=new WeakRef(y);n.get(y).__ref=v,_.add(v),M.register(y,v,v)}function P(y){const v=n.get(y).__ref;v!==void 0&&(_.delete(v),M.unregister(v))}function I(y){q(y.target)}function k(y){L(y.target)}function q(y){y.removeEventListener("dispose",I),P(y),J(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function L(y){y.removeEventListener("dispose",k),P(y),ne(y)}function H(){for(const y of _){const v=y.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):q(v))}_.clear(),d.clear()}function J(y){const v=n.get(y);if(v.__webglInit===void 0)return;const F=y.source,te=p.get(F);if(te){const Z=te[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&z(y),Object.keys(te).length===0&&p.delete(F)}n.remove(y)}function z(y){const v=n.get(y);i.deleteTexture(v.__webglTexture);const F=y.source,te=p.get(F);delete te[v.__cacheKey],a.memory.textures--}function ne(y){const v=n.get(y);v.__depthDisposeCallback&&v.__depthDisposeCallback();const F=y.depthTexture;if(F&&F.renderTarget===y&&q(F),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let re=0;re<v.__webglFramebuffer[Z].length;re++)i.deleteFramebuffer(v.__webglFramebuffer[Z][re]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const te=y.textures;for(let Z=0,re=te.length;Z<re;Z++){const he=n.get(te[Z]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(te[Z])}n.remove(y)}let W=0;function Q(){W=0}function ee(){return W}function ye(y){W=y}function Fe(){const y=W;return y>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,y}function K(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.mipmapsAutoUpdate),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function me(y,v){const F=n.get(y);if(y.isVideoTexture&&St(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const te=y.image;if(te===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(F,y,v);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function Me(y,v){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){Mt(F,y,v);return}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function we(y,v){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){Mt(F,y,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function ge(y,v){const F=n.get(y);if(y.version>0&&F.__version!==y.version){qt(F,y,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const Be={[Rs]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},gt={[Ct]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},Pe={[uu]:i.NEVER,[kc]:i.ALWAYS,[du]:i.LESS,[zc]:i.LEQUAL,[fu]:i.EQUAL,[Gc]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function je(y,v){if(v.type===mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Wt||v.magFilter===qr||v.magFilter===vs||v.magFilter===Fn||v.minFilter===Wt||v.minFilter===qr||v.minFilter===vs||v.minFilter===Fn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Be[v.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Be[v.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Be[v.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,gt[v.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==vs&&v.minFilter!==Fn||v.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function it(y,v){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",I),O(v));const te=v.source;let Z=p.get(te);Z===void 0&&(Z={},p.set(te,Z));const re=K(v);if(re!==y.__cacheKey){Z[re]===void 0&&(Z[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[re].usedTimes++;const he=Z[y.__cacheKey];he!==void 0&&(Z[y.__cacheKey].usedTimes--,he.usedTimes===0&&z(v)),y.__cacheKey=re,y.__webglTexture=Z[re].texture}return F}function Ve(y,v,F){return Math.floor(Math.floor(y/F)/v)}function Pt(y,v,F,te){const re=y.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,te,v.data);else{re.sort((A,$)=>A.start-$.start);let he=0;for(let A=1;A<re.length;A++){const $=re[he],V=re[A],le=$.start+$.count,se=Ve(V.start,v.width,4),ae=Ve($.start,v.width,4);V.start<=le+1&&se===ae&&Ve(V.start+V.count-1,v.width,4)===se?$.count=Math.max($.count,V.start+V.count-$.start):(++he,re[he]=V)}re.length=he+1;const X=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let A=0,$=re.length;A<$;A++){const V=re[A],le=Math.floor(V.start/4),se=Math.ceil(V.count/4),ae=le%v.width,Te=Math.floor(le/v.width),Ge=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te),t.texSubImage2D(i.TEXTURE_2D,0,ae,Te,Ge,ie,F,te,v.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function Mt(y,v,F){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);const Z=it(y,v),re=v.source;t.bindTexture(te,y.__webglTexture,i.TEXTURE0+F);const he=n.get(re);if(re.version!==he.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const ie=Ye.getPrimaries(Ye.workingColorSpace),Ae=v.colorSpace===Qn?null:Ye.getPrimaries(v.colorSpace),ze=v.colorSpace===Qn||ie===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Y=S(v.image,!1,s.maxTextureSize);Y=Re(v,Y);const oe=r.convert(v.format,v.colorSpace),A=r.convert(v.type);let $=T(v.internalFormat,oe,A,v.normalized,v.colorSpace,v.isVideoTexture);je(te,v);let V;const le=v.mipmaps,se=v.isVideoTexture!==!0,ae=he.__version===void 0||Z===!0,Te=re.dataReady,Ge=E(v,Y);if(v.isDepthTexture)$=g(v.format===jn,v.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,$,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,$,Y.width,Y.height,0,oe,A,null));else if(v.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,Ge,$,le[0].width,le[0].height);for(let ie=0,Ae=le.length;ie<Ae;ie++)V=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,V.width,V.height,oe,A,V.data):t.texImage2D(i.TEXTURE_2D,ie,$,V.width,V.height,0,oe,A,V.data);v.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,Ge,$,Y.width,Y.height),Te&&Pt(v,Y,oe,A)):t.texImage2D(i.TEXTURE_2D,0,$,Y.width,Y.height,0,oe,A,Y.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,$,le[0].width,le[0].height,Y.depth);for(let ie=0,Ae=le.length;ie<Ae;ie++)if(V=le[ie],v.format!==yn)if(oe!==null)if(se){if(Te)if(v.layerUpdates.size>0){const ze=Bl(V.width,V.height,v.format,v.type);for(const fe of v.layerUpdates){const et=V.data.subarray(fe*ze/V.data.BYTES_PER_ELEMENT,(fe+1)*ze/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,fe,V.width,V.height,1,oe,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,V.width,V.height,Y.depth,oe,V.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,$,V.width,V.height,Y.depth,0,V.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,V.width,V.height,Y.depth,oe,A,V.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,$,V.width,V.height,Y.depth,0,oe,A,V.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,Ge,$,le[0].width,le[0].height);for(let ie=0,Ae=le.length;ie<Ae;ie++)V=le[ie],v.format!==yn?oe!==null?se?Te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,V.width,V.height,oe,V.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,$,V.width,V.height,0,V.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,V.width,V.height,oe,A,V.data):t.texImage2D(i.TEXTURE_2D,ie,$,V.width,V.height,0,oe,A,V.data)}else if(v.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,$,Y.width,Y.height,Y.depth),Te)if(v.layerUpdates.size>0){const ie=Bl(Y.width,Y.height,v.format,v.type);for(const Ae of v.layerUpdates){const ze=Y.data.subarray(Ae*ie/Y.data.BYTES_PER_ELEMENT,(Ae+1)*ie/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,Y.width,Y.height,1,oe,A,ze)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,oe,A,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Y.width,Y.height,Y.depth,0,oe,A,Y.data);else if(v.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,Ge,$,Y.width,Y.height,Y.depth),Te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,oe,A,Y.data)):t.texImage3D(i.TEXTURE_3D,0,$,Y.width,Y.height,Y.depth,0,oe,A,Y.data);else if(v.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,Ge,$,Y.width,Y.height);else{let ie=Y.width,Ae=Y.height;for(let ze=0;ze<Ge;ze++)t.texImage2D(i.TEXTURE_2D,ze,$,ie,Ae,0,oe,A,null),ie>>=1,Ae>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Y.parentNode!==ie){ie.appendChild(Y),d.add(v),ie.onpaint=Ae=>{const ze=Ae.changedElements;for(const fe of d)ze.includes(fe.image)&&(fe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{const ze=i.RGBA,fe=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,fe,et,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){const ie=Ne(le[0]);t.texStorage2D(i.TEXTURE_2D,Ge,$,ie.width,ie.height)}for(let ie=0,Ae=le.length;ie<Ae;ie++)V=le[ie],se?Te&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,A,V):t.texImage2D(i.TEXTURE_2D,ie,$,oe,A,V);v.generateMipmaps=!1}else if(se){if(ae){const ie=Ne(Y);t.texStorage2D(i.TEXTURE_2D,Ge,$,ie.width,ie.height)}Te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,A,Y)}else t.texImage2D(i.TEXTURE_2D,0,$,oe,A,Y);w(v)&&v.mipmapsAutoUpdate===!0&&b(te),he.__version=re.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function qt(y,v,F){if(v.image.length!==6)return;const te=it(y,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const re=n.get(Z);if(Z.version!==re.__version||te===!0){t.activeTexture(i.TEXTURE0+F);const he=Ye.getPrimaries(Ye.workingColorSpace),X=v.colorSpace===Qn?null:Ye.getPrimaries(v.colorSpace),Y=v.colorSpace===Qn||he===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const oe=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,$=[];for(let fe=0;fe<6;fe++)!oe&&!A?$[fe]=S(v.image[fe],!0,s.maxCubemapSize):$[fe]=A?v.image[fe].image:v.image[fe],$[fe]=Re(v,$[fe]);const V=$[0],le=r.convert(v.format,v.colorSpace),se=r.convert(v.type);let ae=T(v.internalFormat,le,se,v.normalized,v.colorSpace);const Te=v.isVideoTexture!==!0,Ge=re.__version===void 0||te===!0,ie=Z.dataReady;let Ae=E(v,V);je(i.TEXTURE_CUBE_MAP,v);let ze;if(v.isDepthTexture){if(ae=g(v.format===jn,v.type),Ge)if(Te)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,V.width,V.height);else for(let fe=0;fe<6;fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,V.width,V.height,0,le,se,null)}else if(oe){Te&&Ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ae,V.width,V.height);for(let fe=0;fe<6;fe++){ze=$[fe].mipmaps;for(let et=0;et<ze.length;et++){const Tt=ze[et];v.format!==yn?le!==null?Te?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,et,0,0,Tt.width,Tt.height,le,Tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,et,ae,Tt.width,Tt.height,0,Tt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,et,0,0,Tt.width,Tt.height,le,se,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,et,ae,Tt.width,Tt.height,0,le,se,Tt.data)}}}else{if(ze=v.mipmaps,Te&&Ge){ze.length>0&&Ae++;const fe=Ne($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ae,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(A){Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,$[fe].width,$[fe].height,le,se,$[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,$[fe].width,$[fe].height,0,le,se,$[fe].data);for(let et=0;et<ze.length;et++){const Gn=ze[et].image[fe].image;Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,et+1,0,0,Gn.width,Gn.height,le,se,Gn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,et+1,ae,Gn.width,Gn.height,0,le,se,Gn.data)}}else{Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,le,se,$[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,le,se,$[fe]);for(let et=0;et<ze.length;et++){const Tt=ze[et];Te?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,et+1,0,0,le,se,Tt.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,et+1,ae,le,se,Tt.image[fe])}}}w(v)&&v.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),re.__version=Z.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ht(y,v,F,te,Z,re){const he=r.convert(F.format,F.colorSpace),X=r.convert(F.type),Y=T(F.internalFormat,he,X,F.normalized,F.colorSpace),oe=n.get(v),A=n.get(F);if(A.__renderTarget=v,!oe.__hasExternalTextures){const $=Math.max(1,v.width>>re),V=Math.max(1,v.height>>re);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,re,Y,$,V,v.depth,0,he,X,null):t.texImage2D(Z,re,Y,$,V,0,he,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,A.__webglTexture,0,lt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,A.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function vn(y,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),v.depthBuffer){const te=v.depthTexture,Z=te&&te.isDepthTexture?te.type:null,re=g(v.stencilBuffer,Z),he=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(v),re,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(v),re,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,re,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,y)}else{const te=v.textures;for(let Z=0;Z<te.length;Z++){const re=te[Z],he=r.convert(re.format,re.colorSpace),X=r.convert(re.type),Y=T(re.internalFormat,he,X,re.normalized,re.colorSpace);de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(v),Y,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(v),Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(y,v,F){const te=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(v.depthTexture);Z.__renderTarget=v;const re=te?v.depthTexture.image[0]:v.depthTexture.image;(!Z.__webglTexture||re.width!==v.width||re.height!==v.height)&&(re.width=v.width,re.height=v.height,v.depthTexture.needsUpdate=!0),te?ge(v.depthTexture,0):me(v.depthTexture,0);const he=Z.__webglTexture,X=lt(v),Y=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,oe=v.depthTexture.format===jn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ni)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,he,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,he,0);else if(v.depthTexture.format===jn)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Y,he,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Y,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function en(y){const v=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const te=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),te){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,te.removeEventListener("dispose",Z)};te.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=te}if(y.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let te=0;te<6;te++)bt(v.__webglFramebuffer[te],y,te);else y.texture.mipmaps.length>0?bt(v.__webglFramebuffer[0],y,0):bt(v.__webglFramebuffer,y,0);else if(F){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]===void 0)v.__webglDepthbuffer[te]=i.createRenderbuffer(),vn(v.__webglDepthbuffer[te],y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,re)}}else if(y.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),vn(v.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tn(y,v,F){const te=n.get(y);v!==void 0&&ht(te.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&en(y)}function nn(y){const v=y.texture,F=n.get(y),te=n.get(v);y.addEventListener("dispose",k),O(y);const Z=y.textures,re=y.isWebGLCubeRenderTarget===!0,he=Z.length>1;if(he||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,a.memory.textures++),re){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let Y=0;Y<v.mipmaps.length;Y++)F.__webglFramebuffer[X][Y]=i.createFramebuffer()}else F.__webglFramebuffer[X]=i.createFramebuffer()}else{if(v.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)F.__webglFramebuffer[X]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(he)for(let X=0,Y=Z.length;X<Y;X++){const oe=n.get(Z[X]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&de(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<Z.length;X++){const Y=Z[X];F.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[X]);const oe=r.convert(Y.format,Y.colorSpace),A=r.convert(Y.type),$=T(Y.internalFormat,oe,A,Y.normalized,Y.colorSpace,y.isXRRenderTarget===!0),V=lt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,F.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),vn(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),je(i.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps.length>0)for(let Y=0;Y<v.mipmaps.length;Y++)ht(F.__webglFramebuffer[X][Y],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Y);else ht(F.__webglFramebuffer[X],y,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);w(v)?b(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(he){for(let X=0,Y=Z.length;X<Y;X++){const oe=Z[X],A=n.get(oe);let $=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&($=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,A.__webglTexture),je($,oe),ht(F.__webglFramebuffer,y,oe,i.COLOR_ATTACHMENT0+X,$,0),w(oe)&&b($)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(X=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,te.__webglTexture),je(X,v),v.mipmaps.length>0)for(let Y=0;Y<v.mipmaps.length;Y++)ht(F.__webglFramebuffer[Y],y,v,i.COLOR_ATTACHMENT0,X,Y);else ht(F.__webglFramebuffer,y,v,i.COLOR_ATTACHMENT0,X,0);w(v)?b(X):v.mipmaps.length>0&&i.texParameteri(X,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}y.depthBuffer&&en(y)}function D(y){const v=y.textures;for(let F=0,te=v.length;F<te;F++){const Z=v[F];if(w(Z)&&Z.mipmapsAutoUpdate===!0){const re=R(y),he=n.get(Z).__webglTexture;t.bindTexture(re,he),b(re),t.unbindTexture()}}}const sn=[];function ot(y){if(y.samples>0){if(de(y)===!1){const v=y.textures,F=y.width,te=y.height;let Z=i.COLOR_BUFFER_BIT;const re=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(y),X=v.length>1;if(X)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);const A=n.get(v[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,A,0)}i.blitFramebuffer(0,0,F,te,0,0,F,te,Z,i.NEAREST),c===!0&&(sn.length=0,sn.push(i.COLOR_ATTACHMENT0+oe),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&sn.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,sn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);const A=n.get(v[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,A,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){const v=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function lt(y){return Math.min(s.maxSamples,y.samples)}function de(y){const v=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(y){const v=a.render.frame;h.get(y)!==v&&(h.set(y,v),y.update())}function Re(y,v){const F=y.colorSpace,te=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==br&&F!==Qn&&(Ye.getTransfer(F)===tt?(te!==yn||Z!==jt)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",F)),v}function Ne(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=Fe,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=ye,this.setTexture2D=me,this.setTexture2DArray=Me,this.setTexture3D=we,this.setTextureCube=ge,this.rebindTextures=tn,this.setupRenderTarget=nn,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=en,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=de,this.dispose=H}function a0(i,e){function t(n,s=Qn){let r;const a=Ye.getTransfer(s);if(n===jt)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ic)return i.BYTE;if(n===Nc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===Oc)return i.ALPHA;if(n===Bc)return i.RGB;if(n===yn)return i.RGBA;if(n===ni)return i.DEPTH_COMPONENT;if(n===jn)return i.DEPTH_STENCIL;if(n===Co)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===Po)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===_r||n===vr||n===xr||n===Mr)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ha||n===Va||n===Wa||n===Xa||n===Er||n===qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Ha)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wa)return r.COMPRESSED_R11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Er)return r.COMPRESSED_RG11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ya||n===Ka||n===$a||n===Za||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ya)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===to)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===lo||n===co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ho||n===uo||n===yr||n===fo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const o0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l0=`
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

}`;class c0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ih(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ii({vertexShader:o0,fragmentShader:l0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new Ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h0 extends Si{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,_=null;const M=typeof XRWebGLBinding<"u",m=new c0,f={},S=t.getContextAttributes();let w=null,b=null;const R=[],T=[],g=new Ke;let E=null,O=null;const P=new an;P.viewport=new ft;const I=new an;I.viewport=new ft;const k=[P,I],q=new Md;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=R[K];return me===void 0&&(me=new jr,R[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=R[K];return me===void 0&&(me=new jr,R[K]=me),me.getGripSpace()},this.getHand=function(K){let me=R[K];return me===void 0&&(me=new jr,R[K]=me),me.getHandSpace()};function J(K){const me=T.indexOf(K.inputSource);if(me===-1)return;const Me=R[me];Me!==void 0&&(Me.update(K.inputSource,K.frame,l||a),Me.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ne);for(let K=0;K<R.length;K++){const me=T[K];me!==null&&(T[K]=null,R[K].disconnect(me))}L=null,H=null,m.reset();for(const K in f)delete f[K];if(e.setRenderTarget(w),p=null,u=null,d=null,s=null,b=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(g.width,g.height,!1),O!==null){const K=O.camera;K.fov=O.fov,K.zoom=O.zoom,K.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,we=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?jn:ni,we=S.stencil?$i:Tn);const Be={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new bn(u.textureWidth,u.textureHeight,{format:yn,type:jt,depthTexture:new Zi(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new bn(p.framebufferWidth,p.framebufferHeight,{format:yn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(K){for(let me=0;me<K.removed.length;me++){const Me=K.removed[me],we=T.indexOf(Me);we>=0&&(T[we]=null,R[we].disconnect(Me))}for(let me=0;me<K.added.length;me++){const Me=K.added[me];let we=T.indexOf(Me);if(we===-1){for(let Be=0;Be<R.length;Be++)if(Be>=T.length){T.push(Me),we=Be;break}else if(T[Be]===null){T[Be]=Me,we=Be;break}if(we===-1)break}const ge=R[we];ge&&ge.connect(Me)}}function W(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let me=K.near,Me=K.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),q.near=I.near=P.near=me,q.far=I.far=P.far=Me,(L!==q.near||H!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),L=q.near,H=q.far),q.layers.mask=K.layers.mask|6,P.layers.mask=q.layers.mask&-5,I.layers.mask=q.layers.mask&-3;const we=K.parent,ge=q.cameras;W(q,we);for(let Be=0;Be<ge.length;Be++)W(ge[Be],we);q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse),O===null&&K.isPerspectiveCamera&&(O={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,q,we)};function Q(K,me,Me){Me===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(Me.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(K){return f[K]};let ee=null;function ye(K,me){if(h=me.getViewerPose(l||a),_=me,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let we=!1;Me.length!==q.cameras.length&&(q.cameras.length=0,we=!0);for(let Pe=0;Pe<Me.length;Pe++){const je=Me[Pe];let it=null;if(p!==null)it=p.getViewport(je);else{const Pt=d.getViewSubImage(u,je);it=Pt.viewport,Pe===0&&(e.setRenderTargetTextures(b,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(b))}let Ve=k[Pe];Ve===void 0&&(Ve=new an,Ve.layers.enable(Pe),Ve.viewport=new ft,k[Pe]=Ve),Ve.matrix.fromArray(je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(it.x,it.y,it.width,it.height),Pe===0&&(q.matrix.copy(Ve.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),we===!0&&q.cameras.push(Ve)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const Pe=d.getDepthInformation(Me[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,s.renderState)}if(ge&&ge.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<Me.length;Pe++){const je=Me[Pe].camera;if(je){let it=f[je];it||(it=new ih,f[je]=it);const Ve=d.getCameraImage(je);it.sourceTexture=Ve}}}}for(let Me=0;Me<R.length;Me++){const we=T[Me],ge=R[Me];we!==null&&ge!==void 0&&ge.update(we,me,l||a)}ee&&ee(K,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),_=null}const Fe=new lh;Fe.setAnimationLoop(ye),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}}const u0=new nt,vh=new Ue;vh.set(-1,0,0,0,1,0,0,0,1);function d0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,sh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,w,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),M(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=e.get(f),w=S.envMap,b=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(u0.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,t(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const S=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f0(i,e,t,n){let s={},r={};function a(S,w){const b=w.program;n.uniformBlockBinding(S,b,s[S.id])}function o(S,w){let b=s[S.id];b===void 0&&(_(S),b=c(S),s[S.id]=b,S.addEventListener("dispose",m));const R=w.program;n.updateUBOMapping(S,R);const T=e.render.frame;r[S.id]!==T&&(l(S),r[S.id]=T)}function c(S){const w=i.createBuffer(),b=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(S){const w=s[S.id],b=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,g=b.length;T<g;T++){const E=b[T];if(Array.isArray(E))for(let O=0,P=E.length;O<P;O++)h(E[O],T,O,R);else h(E,T,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,w,b,R){if(u(S,w,b,R)===!0){const T=S.__offset,g=S.value;if(Array.isArray(g)){let E=0;for(let O=0;O<g.length;O++){const P=g[O],I=M(P,!0);d(P,S.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function d(S,w,b){typeof S=="number"||typeof S=="boolean"?w[b]=S:S.isMatrix3?(w[b]=S.elements[0],w[b+1]=S.elements[1],w[b+2]=S.elements[2],w[b+3]=0,w[b+4]=S.elements[3],w[b+5]=S.elements[4],w[b+6]=S.elements[5],w[b+7]=0,w[b+8]=S.elements[6],w[b+9]=S.elements[7],w[b+10]=S.elements[8],w[b+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-b),b):S.toArray(w,b)}function u(S,w,b,R){const T=S.value,g=w+"_"+b;if(Array.isArray(T)){R[g]===void 0&&(R[g]=[]);const E=R[g];let O=!1;for(let P=0;P<T.length;P++)p(T[P],E,P)===!0&&(O=!0);return O}return p(T,R,g)}function p(S,w,b){if(w[b]===void 0)return typeof S=="number"||typeof S=="boolean"?w[b]=S:ArrayBuffer.isView(S)?w[b]=S.slice():w[b]=S.clone(),!0;{const R=w[b];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return w[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function _(S){const w=S.uniforms;let b=0;const R=16;for(let g=0,E=w.length;g<E;g++){const O=Array.isArray(w[g])?w[g]:[w[g]];for(let P=0,I=O.length;P<I;P++){const k=O[P],q=Array.isArray(k.value)?k.value:[k.value],L=Array.isArray(w[g])||Array.isArray(k.value);let H=b;for(let z=0,ne=q.length;z<ne;z++){const W=q[z],Q=M(W,L),ee=b%R,ye=ee%Q.boundary,Fe=ee+ye;b+=ye,Fe!==0&&R-Fe<Q.storage&&(b+=R-Fe),z===0&&(H=b),b+=Q.storage}const J=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new J((b-H)/Float32Array.BYTES_PER_ELEMENT),k.__offset=H}}const T=b%R;return T>0&&(b+=R-T),S.__size=b,S.__cache={},this}function M(S,w){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(S){const w=S.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:f}}const p0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function m0(){return Mn===null&&(Mn=new Qc(p0,16,16,xi,An),Mn.name="DFG_LUT",Mn.minFilter=Wt,Mn.magFilter=Wt,Mn.wrapS=Un,Mn.wrapT=Un,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class g0{constructor(e={}){const{canvas:t=vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=jt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=p,m=new Set([Do,Po,Lo]),f=new Set([jt,Tn,Cs,$i,wo,Ro]),S=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let R=null,T=null;const g=[],E=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,k=null,q=null,L=null,H=null;this._outputColorSpace=Vt;let J=0,z=0,ne=null,W=-1,Q=null;const ee=new ft,ye=new ft;let Fe=null;const K=new Ie(0);let me=0,Me=t.width,we=t.height,ge=1,Be=null,gt=null;const Pe=new ft(0,0,Me,we),je=new ft(0,0,Me,we);let it=!1;const Ve=new Ds,Pt=new Oo;let Mt=!1,qt=!1;const ht=new nt,vn=new U,bt=new ft,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tn=!1;function nn(){return ne===null?ge:1}let D=n;function sn(x,C){return t.getContext(x,C)}let ot,lt,de,St,Re,Ne,y,v,F,te,Z,re,he,X,Y,oe,A,$,V,le,se,ae,Te;try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bo}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const C="webgl2";if(D=sn(C,x),D===null)throw sn(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(x){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Je("WebGLRenderer: "+x.message),x}function Ge(){ot=new xm(D),ot.init(),se=new a0(D,ot),lt=new lm(D,ot,e,se),de=new s0(D,ot),lt.reversedDepthBuffer&&u&&de.buffers.depth.setReversed(!0),q=D.createFramebuffer(),L=D.createFramebuffer(),H=D.createFramebuffer(),St=new Em(D),Re=new Wg,Ne=new r0(D,ot,de,Re,lt,se,St),y=new vm(P),v=new yd(D),ae=new am(D,v),F=new Mm(D,v,St,ae),te=new bm(D,F,v,ae,St),$=new ym(D,lt,Ne),Y=new cm(Re),Z=new Vg(P,y,ot,lt,ae,Y),re=new d0(P,Re),he=new qg,X=new Qg(ot),A=new rm(P,y,de,te,_,c),oe=new i0(P,te,lt),Te=new f0(D,St,lt,de),V=new om(D,ot,St),le=new Sm(D,ot,St),St.programs=Z.programs,P.capabilities=lt,P.extensions=ot,P.properties=Re,P.renderLists=he,P.shadowMap=oe,P.state=de,P.info=St}M!==jt&&(O=new Am(M,t.width,t.height,o,s,r));const ie=new h0(P,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=ot.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ot.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(x){x!==void 0&&(ge=x,this.setSize(Me,we,!1))},this.getSize=function(x){return x.set(Me,we)},this.setSize=function(x,C,G=!0){if(ie.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=x,we=C,t.width=Math.floor(x*ge),t.height=Math.floor(C*ge),G===!0&&(t.style.width=x+"px",t.style.height=C+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(Me*ge,we*ge).floor()},this.setDrawingBufferSize=function(x,C,G){Me=x,we=C,ge=G,t.width=Math.floor(x*G),t.height=Math.floor(C*G),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(M===jt){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ee)},this.getViewport=function(x){return x.copy(Pe)},this.setViewport=function(x,C,G,N){x.isVector4?Pe.set(x.x,x.y,x.z,x.w):Pe.set(x,C,G,N),de.viewport(ee.copy(Pe).multiplyScalar(nn()).round())},this.getScissor=function(x){return x.copy(je)},this.setScissor=function(x,C,G,N){x.isVector4?je.set(x.x,x.y,x.z,x.w):je.set(x,C,G,N),de.scissor(ye.copy(je).multiplyScalar(nn()).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(x){de.setScissorTest(it=x)},this.setOpaqueSort=function(x){Be=x},this.setTransparentSort=function(x){gt=x},this.getClearColor=function(x){return x.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,G=!0){let N=0;if(x){let B=!1;if(ne!==null){const ue=ne.texture.format;B=m.has(ue)}if(B){const ue=ne.texture.type,xe=f.has(ue),ce=A.getClearColor(),_e=A.getClearAlpha(),be=ce.r,Oe=ce.g,We=ce.b;xe?(S[0]=be,S[1]=Oe,S[2]=We,S[3]=_e,D.clearBufferuiv(D.COLOR,0,S)):(w[0]=be,w[1]=Oe,w[2]=We,w[3]=_e,D.clearBufferiv(D.COLOR,0,w))}else N|=D.COLOR_BUFFER_BIT}C&&(N|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(N|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&D.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),k=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),A.dispose(),he.dispose(),X.dispose(),Ne.dispose(),Re.dispose(),y.dispose(),te.dispose(),F.dispose(),ae.dispose(),Te.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",qo),ie.removeEventListener("sessionend",Yo),li.stop()};function Ae(x){x.preventDefault(),ol("WebGLRenderer: Context Lost."),I=!0}function ze(){ol("WebGLRenderer: Context Restored."),I=!1;const x=St.autoReset,C=oe.enabled,G=oe.autoUpdate,N=oe.needsUpdate,B=oe.type;Ge(),St.autoReset=x,oe.enabled=C,oe.autoUpdate=G,oe.needsUpdate=N,oe.type=B}function fe(x){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function et(x){const C=x.target;C.removeEventListener("dispose",et),Tt(C)}function Tt(x){Gn(x),Re.remove(x)}function Gn(x){const C=Re.get(x).programs;C!==void 0&&(C.forEach(function(G){Z.releaseProgram(G)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,G,N,B,ue){C===null&&(C=en);const xe=B.isMesh&&B.matrixWorld.determinantAffine()<0,ce=Fh(x,C,G,N,B);de.setMaterial(N,xe);let _e=G.index,be=1;if(N.wireframe===!0){if(_e=F.getWireframeAttribute(G),_e===void 0)return;be=2}const Oe=G.drawRange,We=G.attributes.position;let Se=Oe.start*be,Xe=(Oe.start+Oe.count)*be;ue!==null&&(Se=Math.max(Se,ue.start*be),Xe=Math.min(Xe,(ue.start+ue.count)*be)),_e!==null?(Se=Math.max(Se,0),Xe=Math.min(Xe,_e.count)):We!=null&&(Se=Math.max(Se,0),Xe=Math.min(Xe,We.count));const _t=Xe-Se;if(_t<0||_t===1/0)return;ae.setup(B,N,ce,G,_e);let rt,st=V;if(_e!==null&&(rt=v.get(_e),st=le,st.setIndex(rt)),B.isMesh)N.wireframe===!0?(de.setLineWidth(N.wireframeLinewidth*nn()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(B.isLine){let Nt=N.linewidth;Nt===void 0&&(Nt=1),de.setLineWidth(Nt*nn()),B.isLineSegments?st.setMode(D.LINES):B.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else B.isPoints?st.setMode(D.POINTS):B.isSprite&&st.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Nt=B._multiDrawStarts,Ee=B._multiDrawCounts,kt=B._multiDrawCount,Ze=_e?v.get(_e).bytesPerElement:1,ci=Re.get(N).currentProgram.getUniforms();for(let Ut=0;Ut<kt;Ut++)ci.setValue(D,"_gl_DrawID",Ut),st.render(Nt[Ut]/Ze,Ee[Ut])}else if(B.isInstancedMesh)st.renderInstances(Se,_t,B.count);else if(G.isInstancedBufferGeometry){const Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ee=Math.min(G.instanceCount,Nt);st.renderInstances(Se,_t,Ee)}else st.render(Se,_t)};function Xo(x,C,G,N){k!==null&&x.isNodeMaterial&&k.setObject(N,x),Mt===!0&&Y.setState(x,G,!1),x.transparent===!0&&x.side===pn&&x.forceSinglePass===!1?(x.side=Xt,x.needsUpdate=!0,os(x,C,N),x.side=ti,x.needsUpdate=!0,os(x,C,N),x.side=pn):os(x,C,N)}this.compile=function(x,C,G=null){G===null&&(G=x),k!==null&&k.renderStart(x,C,G),T=X.get(G),T.init(C),E.push(T),G.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),x!==G&&x.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),qt=this.localClippingEnabled,Mt=Y.init(this.clippingPlanes,qt),Mt===!0&&Y.setGlobalState(this.clippingPlanes,C),k!==null&&oe.render(T.state.shadowsArray,G,C);const N=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const ce=ue[xe];Xo(ce,G,C,B),N.add(ce)}else Xo(ue,G,C,B),N.add(ue)}),T=E.pop(),k!==null&&k.renderEnd(),N},this.compileAsync=function(x,C,G=null){const N=this.compile(x,C,G);return new Promise(B=>{function ue(){if(N.forEach(function(xe){const _e=Re.get(xe).currentProgram;(_e===void 0||_e.isReady())&&N.delete(xe)}),N.size===0){B(x);return}setTimeout(ue,10)}ot.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Hr=null;function Nh(x){Hr&&Hr(x)}function qo(){li.stop()}function Yo(){li.start()}const li=new lh;li.setAnimationLoop(Nh),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(x){Hr=x,ie.setAnimationLoop(x),x===null?li.stop():li.start()},ie.addEventListener("sessionstart",qo),ie.addEventListener("sessionend",Yo),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(x,C);const G=ie.enabled===!0&&ie.isPresenting===!0,N=O!==null&&(ne===null||G)&&O.begin(P,ne);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(C),C=ie.getCamera()),x.isScene===!0&&x.onBeforeRender(P,x,C,ne),T=X.get(x,E.length),T.init(C),T.state.textureUnits=Ne.getTextureUnits(),E.push(T),ht.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?Pt.setFromArrayCamera(C):Ve.setFromProjectionMatrix(ht,gn,C.reversedDepth),qt=this.localClippingEnabled,Mt=Y.init(this.clippingPlanes,qt),R=he.get(x,g.length),R.init(),g.push(R),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){const xe=P.xr.getDepthSensingMesh();xe!==null&&Vr(xe,C,-1/0,P.sortObjects)}Vr(x,C,0,P.sortObjects),R.finish(),k!==null&&k.updateLights(T.state.lightsArray),P.sortObjects===!0&&R.sort(Be,gt),tn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,tn&&A.addToRenderList(R,x),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Y.beginShadows();const B=T.state.shadowsArray;if(oe.render(B,x,C),Mt===!0&&Y.endShadows(),(N&&O.hasRenderPass())===!1){const xe=R.opaque,ce=R.transmissive;if(T.setupLights(),C.isArrayCamera){const _e=C.cameras;if(ce.length>0)for(let be=0,Oe=_e.length;be<Oe;be++){const We=_e[be];$o(xe,ce,x,We)}tn&&A.render(x);for(let be=0,Oe=_e.length;be<Oe;be++){const We=_e[be];Ko(R,x,We,We.viewport)}}else ce.length>0&&$o(xe,ce,x,C),tn&&A.render(x),Ko(R,x,C)}ne!==null&&z===0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne)),N&&O.end(P),x.isScene===!0&&x.onAfterRender(P,x,C),ae.resetDefaultState(),W=-1,Q=null,E.pop(),E.length>0?(T=E[E.length-1],Ne.setTextureUnits(T.state.textureUnits),Mt===!0&&Y.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?R=g[g.length-1]:R=null,k!==null&&k.renderEnd()};function Vr(x,C,G,N){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){const xe=C.isArrayCamera?Pt:Ve;if(!x.frustumCulled||x.intersectsFrustum(xe)){N&&bt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ht);const ce=te.update(x),_e=x.material;_e.visible&&R.push(x,ce,_e,G,bt.z,null,C)}}else if(x.isMesh||x.isLine||x.isPoints){const xe=C.isArrayCamera?Pt:Ve;if(!x.frustumCulled||x.intersectsFrustum(xe)){const ce=te.update(x),_e=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),bt.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),bt.copy(ce.boundingSphere.center)),bt.applyMatrix4(x.matrixWorld).applyMatrix4(ht)),Array.isArray(_e)){const be=ce.groups;for(let Oe=0,We=be.length;Oe<We;Oe++){const Se=be[Oe],Xe=_e[Se.materialIndex];Xe&&Xe.visible&&R.push(x,ce,Xe,G,bt.z,Se,C)}}else _e.visible&&R.push(x,ce,_e,G,bt.z,null,C)}}}const ue=x.children;for(let xe=0,ce=ue.length;xe<ce;xe++)Vr(ue[xe],C,G,N)}function Ko(x,C,G,N){const{opaque:B,transmissive:ue,transparent:xe}=x;T.setupLightsView(G),Mt===!0&&Y.setGlobalState(P.clippingPlanes,G),N&&de.viewport(ee.copy(N)),B.length>0&&Bs(B,C,G),ue.length>0&&Bs(ue,C,G),xe.length>0&&Bs(xe,C,G),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function $o(x,C,G,N){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[N.id]===void 0){const Se=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[N.id]=new bn(1,1,{generateMipmaps:!0,type:Se?An:jt,minFilter:Fn,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ue=T.state.transmissionRenderTarget[N.id],xe=N.viewport||ee;ue.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);const ce=P.getRenderTarget(),_e=P.getActiveCubeFace(),be=P.getActiveMipmapLevel();P.setRenderTarget(ue),P.getClearColor(K),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),tn&&A.render(G);const Oe=P.toneMapping;P.toneMapping=On;const We=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),T.setupLightsView(N),Mt===!0&&Y.setGlobalState(P.clippingPlanes,N),Bs(x,G,N),Ne.updateMultisampleRenderTarget(ue),Ne.updateRenderTargetMipmap(ue),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Xe=0,_t=C.length;Xe<_t;Xe++){const rt=C[Xe],{object:st,geometry:Nt,material:Ee,group:kt}=rt;if(Ee.side===pn&&st.layers.test(N.layers)){const Ze=Ee.side;Ee.side=Xt,Ee.needsUpdate=!0,Zo(st,G,N,Nt,Ee,kt),Ee.side=Ze,Ee.needsUpdate=!0,Se=!0}}Se===!0&&(Ne.updateMultisampleRenderTarget(ue),Ne.updateRenderTargetMipmap(ue))}P.setRenderTarget(ce,_e,be),P.setClearColor(K,me),We!==void 0&&(N.viewport=We),P.toneMapping=Oe}function Bs(x,C,G){const N=C.isScene===!0?C.overrideMaterial:null;for(let B=0,ue=x.length;B<ue;B++){const xe=x[B],{object:ce,geometry:_e,group:be}=xe;let Oe=xe.material;Oe.allowOverride===!0&&N!==null&&(Oe=N),ce.layers.test(G.layers)&&Zo(ce,C,G,_e,Oe,be)}}function Zo(x,C,G,N,B,ue){k!==null&&B.isNodeMaterial&&k.setObject(x,B),x.onBeforeRender(P,C,G,N,B,ue),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(P,C,G,N,x,ue),B.transparent===!0&&B.side===pn&&B.forceSinglePass===!1?(B.side=Xt,B.needsUpdate=!0,P.renderBufferDirect(G,C,N,B,x,ue),B.side=ti,B.needsUpdate=!0,P.renderBufferDirect(G,C,N,B,x,ue),B.side=pn):P.renderBufferDirect(G,C,N,B,x,ue),x.onAfterRender(P,C,G,N,B,ue)}function Jo(x){let C=0;for(const G of x)G.texture!==null&&C++;return C}function os(x,C,G){C.isScene!==!0&&(C=en);const N=Re.get(x),B=T.state.lights,ue=T.state.shadowsArray,xe=B.state.version,ce=Z.getParameters(x,B.state,ue,C,G,T.state.lightProbeGridArray),_e=Z.getProgramCacheKey(ce);let be=N.programs;N.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,N.fog=C.fog;const Oe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;N.envMap=y.get(x.envMap||N.environment,Oe),N.envMapRotation=N.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,be===void 0&&(x.addEventListener("dispose",et),be=new Map,N.programs=be,N.programVariants=new Map);let We=be.get(_e);if(We!==void 0){if(N.currentProgram===We&&N.lightsStateVersion===xe)return jo(x,ce),We}else ce.uniforms=Z.getUniforms(x),k!==null&&x.isNodeMaterial&&k.build(x,G,ce),x.onBeforeCompile(ce,P),We=Z.acquireProgram(ce,_e),be.set(_e,We),N.uniforms=ce.uniforms;const Se=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Se.clippingPlanes=Y.uniform),jo(x,ce),N.needsLights=Bh(x),N.lightsStateVersion=xe,N.needsLights&&(Se.ambientLightColor.value=B.state.ambient,Se.lightProbe.value=B.state.probe,Se.sunLights.value=B.state.sun,Se.sunLightShadows.value=B.state.sunShadow,Se.directionalLights.value=B.state.directional,Se.directionalLightShadows.value=B.state.directionalShadow,Se.spotLights.value=B.state.spot,Se.spotLightShadows.value=B.state.spotShadow,Se.rectAreaLights.value=B.state.rectArea,Se.ltc_1.value=B.state.rectAreaLTC1,Se.ltc_2.value=B.state.rectAreaLTC2,Se.pointLights.value=B.state.point,Se.pointLightShadows.value=B.state.pointShadow,Se.hemisphereLights.value=B.state.hemi,Se.sunShadowMatrix.value=B.state.sunShadowMatrix,Se.sunShadowCascade.value=B.state.sunShadowCascade,Se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Se.spotLightMatrix.value=B.state.spotLightMatrix,Se.spotLightMap.value=B.state.spotLightMap,Se.pointShadowMatrix.value=B.state.pointShadowMatrix),N.numLightProbeGrids=Jo(T.state.lightProbeGridArray),N.currentProgram=We,N.uniformsList=null,We}function Uh(x,C,G,N,B){const ue=Re.get(x),xe=ue.currentProgram.id+","+N+","+B;let ce=ue.programVariants.get(xe);return ce===void 0?(ce=os(x,C,G),ue.programVariants.set(xe,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=N,ue.toneMapping=B),ce}function Qo(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=Sr.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function jo(x,C){const G=Re.get(x);G.outputColorSpace=C.outputColorSpace,G.batching=C.batching,G.batchingColor=C.batchingColor,G.instancing=C.instancing,G.instancingColor=C.instancingColor,G.instancingMorph=C.instancingMorph,G.skinning=C.skinning,G.morphTargets=C.morphTargets,G.morphNormals=C.morphNormals,G.morphColors=C.morphColors,G.morphTargetsCount=C.morphTargetsCount,G.numClippingPlanes=C.numClippingPlanes,G.numIntersection=C.numClipIntersection,G.vertexAlphas=C.vertexAlphas,G.vertexTangents=C.vertexTangents,G.toneMapping=C.toneMapping}function Fh(x,C,G,N,B){C.isScene!==!0&&(C=en),Ne.resetTextureUnits();const ue=C.fog,xe=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?C.environment:null,ce=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ye.workingColorSpace,_e=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,be=y.get(N.envMap||xe,_e),Oe=N.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,We=!!G.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Se=!!G.morphAttributes.position,Xe=!!G.morphAttributes.normal,_t=!!G.morphAttributes.color;let rt=On;N.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(rt=P.toneMapping);const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Nt=st!==void 0?st.length:0,Ee=Re.get(N),kt=T.state.lights;if(Mt===!0&&(qt===!0||x!==Q)){const ut=x===Q&&N.id===W;Y.setState(N,x,ut)}let Ze=!1,ci=!1;N.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==kt.state.version||B.isBatchedMesh&&Ee.batching===!1||!B.isBatchedMesh&&Ee.batching===!0||B.isBatchedMesh&&Ee.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Ee.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Ee.instancing===!1||!B.isInstancedMesh&&Ee.instancing===!0||B.isSkinnedMesh&&Ee.skinning===!1||!B.isSkinnedMesh&&Ee.skinning===!0||B.isInstancedMesh&&Ee.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ee.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ee.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ee.instancingMorph===!1&&B.morphTexture!==null||Ee.envMap!==be||N.fog===!0&&Ee.fog!==ue||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==Y.numPlanes||Ee.numIntersection!==Y.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==We||Ee.morphTargets!==Se||Ee.morphNormals!==Xe||Ee.morphColors!==_t||Ee.morphTargetsCount!==Nt||Ee.numLightProbeGrids!==Jo(T.state.lightProbeGridArray)?Ze=!0:(Ee.outputColorSpace!==ce||Ee.toneMapping!==rt)&&(ci=!0):(Ze=!0,Ee.__version=N.version);let Ut=Ee.currentProgram;(Ze===!0||ci===!0)&&(Ut=ci===!0?Uh(N,C,B,ce,rt):os(N,C,B),k&&N.isNodeMaterial&&k.onUpdateProgram(N,Ut,Ee));let zs=!1,kn=!1,hi=!1;const $e=Ut.getUniforms(),Dt=Ee.uniforms;if(de.useProgram(Ut.program)&&(zs=!0,kn=!0,hi=!0),N.id!==W&&(W=N.id,kn=!0),zs||Q!==x){de.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),$e.setValue(D,"projectionMatrix",x.projectionMatrix),$e.setValue(D,"viewMatrix",x.matrixWorldInverse);const At=$e.map.cameraPosition;At!==void 0&&At.setValue(D,vn.setFromMatrixPosition(x.matrixWorld)),lt.logarithmicDepthBuffer&&$e.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&$e.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),Q!==x&&(Q=x,kn=!0,hi=!0)}if(Ee.needsLights&&(kt.state.sunShadowMap.length>0&&$e.setValue(D,"sunShadowMap",kt.state.sunShadowMap,Ne),kt.state.directionalShadowMap.length>0&&$e.setValue(D,"directionalShadowMap",kt.state.directionalShadowMap,Ne),kt.state.spotShadowMap.length>0&&$e.setValue(D,"spotShadowMap",kt.state.spotShadowMap,Ne),kt.state.pointShadowMap.length>0&&$e.setValue(D,"pointShadowMap",kt.state.pointShadowMap,Ne)),B.isSkinnedMesh){$e.setOptional(D,B,"bindMatrix"),$e.setOptional(D,B,"bindMatrixInverse");const ut=B.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),$e.setValue(D,"boneTexture",ut.boneTexture,Ne))}B.isBatchedMesh&&($e.setOptional(D,B,"batchingTexture"),$e.setValue(D,"batchingTexture",B._matricesTexture,Ne),$e.setOptional(D,B,"batchingIdTexture"),$e.setValue(D,"batchingIdTexture",B._indirectTexture,Ne),$e.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&$e.setValue(D,"batchingColorTexture",B._colorsTexture,Ne));const hn=G.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&$.update(B,G,Ut),(kn||Ee.receiveShadow!==B.receiveShadow)&&(Ee.receiveShadow=B.receiveShadow,$e.setValue(D,"receiveShadow",B.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&C.environment!==null&&(Dt.envMapIntensity.value=C.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=m0()),kn){if($e.setValue(D,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&Oh(Dt,hi),ue&&N.fog===!0&&re.refreshFogUniforms(Dt,ue),re.refreshMaterialUniforms(Dt,N,ge,we,T.state.transmissionRenderTarget[x.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){const ut=b;let At=0;for(const Rn of T.state.lightProbeGridArray)Rn.texture!==null&&(ut.textures[At]=Rn.texture,ut.min[At]=Rn.boundingBox.min,ut.max[At]=Rn.boundingBox.max,ut.resolution[At]=Rn.resolution,At++);for(const Rn in ut)ut[Rn].length=At;Dt.probesSH.value=ut.textures,Dt.probesMin.value=ut.min,Dt.probesMax.value=ut.max,Dt.probesResolution.value=ut.resolution}Sr.upload(D,Qo(Ee),Dt,Ne)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Sr.upload(D,Qo(Ee),Dt,Ne),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&$e.setValue(D,"center",B.center),$e.setValue(D,"modelViewMatrix",B.modelViewMatrix),$e.setValue(D,"normalMatrix",B.normalMatrix),$e.setValue(D,"modelMatrix",B.matrixWorld),N.uniformsGroups!==void 0){const ut=N.uniformsGroups;for(let At=0,Rn=ut.length;At<Rn;At++){const tl=ut[At];Te.update(tl,Ut),Te.bind(tl,Ut)}}return Ut}function Oh(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function Bh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(x,C,G){const N=Re.get(x);N.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Re.get(x.texture).__webglTexture=C,Re.get(x.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:G,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const G=Re.get(x);G.__webglFramebuffer=C,G.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,G=0){ne=x,J=C,z=G;let N=null,B=!1,ue=!1;if(x){const ce=Re.get(x);if(ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(D.FRAMEBUFFER,ce.__webglFramebuffer),ee.copy(x.viewport),ye.copy(x.scissor),Fe=x.scissorTest,de.viewport(ee),de.scissor(ye),de.setScissorTest(Fe),W=-1;return}else if(ce.__webglFramebuffer===void 0)Ne.setupRenderTarget(x);else if(ce.__hasExternalTextures)Ne.rebindTextures(x,Re.get(x.texture).__webglTexture,Re.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Oe=x.depthTexture;if(ce.__boundDepthTexture!==Oe){if(Oe!==null&&Re.has(Oe)&&(x.width!==Oe.image.width||x.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ne.setupDepthRenderbuffer(x)}}const _e=x.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);const be=Re.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(be[C])?N=be[C][G]:N=be[C],B=!0):x.samples>0&&Ne.useMultisampledRTT(x)===!1?N=Re.get(x).__webglMultisampledFramebuffer:Array.isArray(be)?N=be[G]:N=be,ee.copy(x.viewport),ye.copy(x.scissor),Fe=x.scissorTest}else ee.copy(Pe).multiplyScalar(ge).floor(),ye.copy(je).multiplyScalar(ge).floor(),Fe=it;if(G!==0&&(N=q),de.bindFramebuffer(D.FRAMEBUFFER,N)&&de.drawBuffers(x,N),de.viewport(ee),de.scissor(ye),de.setScissorTest(Fe),B){const ce=Re.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,ce.__webglTexture,G)}else if(ue){const ce=C;for(let _e=0;_e<x.textures.length;_e++){const be=Re.get(x.textures[_e]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_e,be.__webglTexture,G,ce)}}else if(x!==null&&G!==0){const ce=Re.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ce.__webglTexture,G)}W=-1};function el(x){const C=Re.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=lt.textureFormatReadable(x.format),C.__typeReadable=lt.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,G,N,B,ue,xe,ce=0){if(!(x&&x.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe],Array.isArray(_e)&&(_e=_e[0])),_e){de.bindFramebuffer(D.FRAMEBUFFER,_e);try{const be=x.textures[ce],Oe=be.format,We=be.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ce);const Se=el(be);if(Se.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-N&&G>=0&&G<=x.height-B&&D.readPixels(C,G,N,B,se.convert(Oe),se.convert(We),ue)}finally{const be=ne!==null?Re.get(ne).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,C,G,N,B,ue,xe,ce=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Re.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe],Array.isArray(_e)&&(_e=_e[0])),_e)if(C>=0&&C<=x.width-N&&G>=0&&G<=x.height-B){de.bindFramebuffer(D.FRAMEBUFFER,_e);const be=x.textures[ce],Oe=be.format,We=be.type;x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ce);const Se=el(be);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(C,G,N,B,se.convert(Oe),se.convert(We),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const _t=ne!==null?Re.get(ne).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,_t);const rt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xu(D,rt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Xe),D.deleteSync(rt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,G=0){const N=Math.pow(2,-G),B=Math.floor(x.image.width*N),ue=Math.floor(x.image.height*N),xe=C!==null?C.x:0,ce=C!==null?C.y:0;Ne.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,xe,ce,B,ue),de.unbindTexture()},this.copyTextureToTexture=function(x,C,G=null,N=null,B=0,ue=0){let xe,ce,_e,be,Oe,We,Se,Xe,_t;const rt=x.isCompressedTexture?x.mipmaps[ue]:x.image;if(G!==null)xe=G.max.x-G.min.x,ce=G.max.y-G.min.y,_e=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Oe=G.min.y,We=G.isBox3?G.min.z:0;else{const $e=Math.pow(2,-B);xe=Math.floor(rt.width*$e),ce=Math.floor(rt.height*$e),x.isDataArrayTexture?_e=rt.depth:x.isData3DTexture?_e=Math.floor(rt.depth*$e):_e=1,be=0,Oe=0,We=0}N!==null?(Se=N.x,Xe=N.y,_t=N.z):(Se=0,Xe=0,_t=0);const st=se.convert(C.format),Nt=se.convert(C.type);let Ee;C.isData3DTexture?(Ne.setTexture3D(C,0),Ee=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ne.setTexture2DArray(C,0),Ee=D.TEXTURE_2D_ARRAY):(Ne.setTexture2D(C,0),Ee=D.TEXTURE_2D),de.activeTexture(D.TEXTURE0),de.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),de.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),de.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const kt=de.getParameter(D.UNPACK_ROW_LENGTH),Ze=de.getParameter(D.UNPACK_IMAGE_HEIGHT),ci=de.getParameter(D.UNPACK_SKIP_PIXELS),Ut=de.getParameter(D.UNPACK_SKIP_ROWS),zs=de.getParameter(D.UNPACK_SKIP_IMAGES);de.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),de.pixelStorei(D.UNPACK_SKIP_PIXELS,be),de.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),de.pixelStorei(D.UNPACK_SKIP_IMAGES,We);const kn=x.isDataArrayTexture||x.isData3DTexture,hi=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const $e=Re.get(x),Dt=Re.get(C),hn=Re.get($e.__renderTarget),ut=Re.get(Dt.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,hn.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let At=0;At<_e;At++)kn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(x).__webglTexture,B,We+At),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.get(C).__webglTexture,ue,_t+At)),D.blitFramebuffer(be,Oe,be+xe,Oe+ce,Se,Xe,Se+xe,Xe+ce,D.DEPTH_BUFFER_BIT,D.NEAREST);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||x.isRenderTargetTexture||Re.has(x)){const $e=Re.get(x),Dt=Re.get(C);de.bindFramebuffer(D.READ_FRAMEBUFFER,L),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,H);for(let hn=0;hn<_e;hn++)kn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$e.__webglTexture,B,We+hn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$e.__webglTexture,B),hi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,ue,_t+hn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,ue),B!==0?D.blitFramebuffer(be,Oe,be+xe,Oe+ce,Se,Xe,Se+xe,Xe+ce,D.COLOR_BUFFER_BIT,D.NEAREST):hi?D.copyTexSubImage3D(Ee,ue,Se,Xe,_t+hn,be,Oe,xe,ce):D.copyTexSubImage2D(Ee,ue,Se,Xe,be,Oe,xe,ce);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else hi?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(Ee,ue,Se,Xe,_t,xe,ce,_e,st,Nt,rt.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,ue,Se,Xe,_t,xe,ce,_e,st,rt.data):D.texSubImage3D(Ee,ue,Se,Xe,_t,xe,ce,_e,st,Nt,rt):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Se,Xe,xe,ce,st,Nt,rt.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Se,Xe,rt.width,rt.height,st,rt.data):D.texSubImage2D(D.TEXTURE_2D,ue,Se,Xe,xe,ce,st,Nt,rt);de.pixelStorei(D.UNPACK_ROW_LENGTH,kt),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),de.pixelStorei(D.UNPACK_SKIP_PIXELS,ci),de.pixelStorei(D.UNPACK_SKIP_ROWS,Ut),de.pixelStorei(D.UNPACK_SKIP_IMAGES,zs),ue===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&D.generateMipmap(Ee),de.unbindTexture()},this.initRenderTarget=function(x){Re.get(x).__webglFramebuffer===void 0&&Ne.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ne.setTextureCube(x,0):x.isData3DTexture?Ne.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ne.setTexture2DArray(x,0):Ne.setTexture2D(x,0),de.unbindTexture()},this.resetState=function(){J=0,z=0,ne=null,de.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const j=Object.freeze({AIR:0,GRASS:1,DIRT:2,STONE:3,COBBLE:4,SAND:5,LOG:6,LEAVES:7,PLANKS:8,GLASS:9,GLOWSTONE:10,WATER:11,SNOW:12,BEDROCK:13,BRICK:14,GRAVEL:15}),Qt=i=>({top:i,side:i,bottom:i}),si=Object.freeze({[j.AIR]:{name:"Air",solid:!1,opaque:!1},[j.GRASS]:{name:"Grass Block",tiles:{top:"grass_top",side:"grass_side",bottom:"dirt"},particle:8298059,solid:!0,opaque:!0},[j.DIRT]:{name:"Dirt",tiles:Qt("dirt"),particle:8083516,solid:!0,opaque:!0},[j.STONE]:{name:"Stone",tiles:Qt("stone"),particle:8751242,solid:!0,opaque:!0},[j.COBBLE]:{name:"Cobblestone",tiles:Qt("cobblestone"),particle:7830137,solid:!0,opaque:!0},[j.SAND]:{name:"Sand",tiles:Qt("sand"),particle:14074253,solid:!0,opaque:!0},[j.LOG]:{name:"Oak Log",tiles:{top:"log_top",side:"log_side",bottom:"log_top"},particle:8413242,solid:!0,opaque:!0},[j.LEAVES]:{name:"Oak Leaves",tiles:Qt("leaves"),particle:5012789,solid:!0,opaque:!0},[j.PLANKS]:{name:"Oak Planks",tiles:Qt("planks"),particle:10976588,solid:!0,opaque:!0},[j.GLASS]:{name:"Glass",tiles:Qt("glass"),particle:11196380,solid:!0,opaque:!1,transparent:!0},[j.GLOWSTONE]:{name:"Glowstone",tiles:Qt("glowstone"),particle:15774808,solid:!0,opaque:!0,glow:!0},[j.WATER]:{name:"Water",tiles:Qt("water"),particle:5217723,solid:!1,opaque:!1,liquid:!0},[j.SNOW]:{name:"Snow",tiles:Qt("snow"),particle:15266290,solid:!0,opaque:!0},[j.BEDROCK]:{name:"Bedrock",tiles:Qt("bedrock"),particle:4737865,solid:!0,opaque:!0},[j.BRICK]:{name:"Brick",tiles:Qt("brick"),particle:10114371,solid:!0,opaque:!0},[j.GRAVEL]:{name:"Gravel",tiles:Qt("gravel"),particle:9209725,solid:!0,opaque:!0}}),mi=Object.freeze([j.GRASS,j.STONE,j.COBBLE,j.SAND,j.LOG,j.LEAVES,j.PLANKS,j.GLASS,j.GLOWSTONE]),_0=Object.freeze(["grass_top","grass_side","dirt","stone","cobblestone","sand","log_side","log_top","leaves","planks","glass","glowstone","snow","bedrock","brick","gravel"]);function fr(i){return!!si[i]?.opaque}function ac(i){return!!si[i]?.liquid}function Ns(i){return si[i]?.name??"Block"}const xt=16,xa=4;function qe(i,e,t=0){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function ai(i,e,t,n=1){return`rgba(${Math.max(0,Math.min(255,Math.round(i)))},${Math.max(0,Math.min(255,Math.round(e)))},${Math.max(0,Math.min(255,Math.round(t)))},${n})`}function v0(i,e){const t=document.createElement("canvas");t.width=xt,t.height=xt;const n=t.getContext("2d");return n.imageSmoothingEnabled=!1,e(n,i),t}function _n(i,e,t,n,s=1){const[r,a,o]=e;for(let c=0;c<xt;c+=1)for(let l=0;l<xt;l+=1){const d=(qe(l,c,n)-.5)*t;i.fillStyle=ai(r+d,a+d,o+d,s),i.fillRect(l,c,1,1)}}function ln(i,e,t,n,s=1,r=1){for(let a=0;a<t;a+=1){const o=Math.floor(qe(a,1,e)*xt),c=Math.floor(qe(a,2,e)*xt);i.fillStyle=ai(n[0],n[1],n[2],s),i.fillRect(o,c,r,r)}}function x0(i){_n(i,[92,133,59],34,11);for(let e=0;e<18;e+=1){const t=Math.floor(qe(e,3,12)*16),n=Math.floor(qe(e,4,12)*16),s=qe(e,5,12)>.5;i.fillStyle=s?"rgba(132,171,80,0.8)":"rgba(55,90,39,0.75)",i.fillRect(t,n,1,1),qe(e,6,12)>.6&&i.fillRect(t+1,n,1,1)}i.fillStyle="rgba(237,209,108,0.8)",i.fillRect(4,11,1,1),i.fillRect(12,4,1,1)}function M0(i){_n(i,[121,89,61],28,21);for(let e=0;e<xt;e+=1){const t=2+Math.floor(qe(e,0,22)*4);for(let n=0;n<t;n+=1){const r=(qe(e,n,23)-.5)*28;i.fillStyle=ai(86+r,127+r,56+r),i.fillRect(e,n,1,1)}qe(e,8,24)>.72&&(i.fillStyle="rgba(61,96,42,0.9)",i.fillRect(e,t,1,1))}ln(i,25,10,[80,56,37],.8),ln(i,26,5,[154,119,83],.65)}function S0(i){_n(i,[121,89,61],28,31),ln(i,32,13,[86,61,41],.85),ln(i,33,9,[151,116,81],.7)}function E0(i){_n(i,[126,129,128],24,41);for(let e=0;e<7;e+=1){const t=Math.floor(qe(e,1,42)*15),n=Math.floor(qe(e,2,42)*15),s=1+Math.floor(qe(e,3,42)*3);i.fillStyle="rgba(82,86,86,0.65)",i.fillRect(t,n,s,1)}ln(i,43,11,[161,164,161],.55)}function y0(i){i.fillStyle="#4f5352",i.fillRect(0,0,16,16),[[1,1,7,6],[9,1,6,5],[1,8,5,7],[7,7,8,8],[9,6,6,2],[2,6,4,2]].forEach(([t,n,s,r],a)=>{const o=102+Math.floor(qe(a,1,51)*38);for(let c=0;c<r;c+=1)for(let l=0;l<s;l+=1){const h=(qe(l,c,52+a)-.5)*20;i.fillStyle=ai(o+h,o+h+2,o+h+1),i.fillRect(t+l,n+c,1,1)}i.fillStyle="rgba(185,189,185,0.25)",i.fillRect(t,n,s,1),i.fillStyle="rgba(45,49,48,0.45)",i.fillRect(t,n+r-1,s,1)})}function b0(i){_n(i,[214,196,143],20,61),ln(i,62,18,[185,164,112],.65),ln(i,63,10,[239,224,177],.7),ln(i,64,3,[156,139,100],.45)}function T0(i){for(let e=0;e<xt;e+=1){const t=(qe(e,0,71)-.5)*24;for(let n=0;n<xt;n+=1){const s=(qe(e,n,72)-.5)*16;i.fillStyle=ai(113+t+s,81+t*.8+s,49+t*.55+s),i.fillRect(e,n,1,1)}}for(let e=0;e<6;e+=1){const t=Math.floor(qe(e,1,73)*15),n=Math.floor(qe(e,2,73)*12);i.fillStyle="rgba(70,48,29,0.6)",i.fillRect(t,n,1,2+Math.floor(qe(e,3,73)*4))}i.fillStyle="rgba(165,125,78,0.45)",i.fillRect(3,2,1,5),i.fillRect(11,8,1,4)}function A0(i){_n(i,[170,134,84],16,81);const e=7.5;for(let t=0;t<xt;t+=1)for(let n=0;n<xt;n+=1){const s=Math.max(Math.abs(n-e),Math.abs(t-e)),r=Math.floor(s)%3;r===0?(i.fillStyle="rgba(124,91,52,0.55)",i.fillRect(n,t,1,1)):r===1&&(i.fillStyle="rgba(197,157,102,0.3)",i.fillRect(n,t,1,1))}i.fillStyle="rgba(85,61,35,0.75)",i.fillRect(7,7,2,2),i.fillStyle="rgba(210,171,113,0.4)",i.fillRect(6,5,1,1)}function w0(i){for(let e=0;e<xt;e+=1)for(let t=0;t<xt;t+=1){const n=qe(t,e,91);let s;n<.13?s=[40,70,29]:n<.3?s=[58,96,37]:n<.72?s=[72,117,45]:n<.93?s=[91,137,55]:s=[113,157,70];const r=(qe(t,e,92)-.5)*14;i.fillStyle=ai(s[0]+r,s[1]+r,s[2]+r),i.fillRect(t,e,1,1)}i.fillStyle="rgba(31,54,23,0.7)",i.fillRect(2,6,1,1),i.fillRect(9,12,1,1),i.fillRect(13,3,1,1)}function R0(i){_n(i,[166,124,76],16,101);for(let e=0;e<xt;e+=4)i.fillStyle="rgba(91,62,34,0.72)",i.fillRect(0,e+3,16,1),i.fillStyle="rgba(209,165,108,0.25)",i.fillRect(0,e,16,1);for(let e=0;e<8;e+=1){const t=Math.floor(qe(e,1,102)*16),n=Math.floor(qe(e,2,102)*16);i.fillStyle="rgba(118,83,47,0.5)",i.fillRect(t,n,1,1)}i.fillStyle="rgba(86,59,34,0.5)",i.fillRect(4,1,1,2),i.fillRect(12,9,1,2)}function C0(i){i.clearRect(0,0,xt,xt),i.fillStyle="rgba(178,225,232,0.12)",i.fillRect(1,1,14,14),i.strokeStyle="rgba(206,242,246,0.7)",i.strokeRect(1.5,1.5,13,13),i.fillStyle="rgba(226,249,251,0.58)",i.fillRect(3,3,2,1),i.fillRect(3,4,1,2),i.fillRect(10,9,3,1),i.fillStyle="rgba(142,202,213,0.42)",i.fillRect(4,10,1,3),i.fillRect(11,4,1,3)}function L0(i){_n(i,[222,161,70],26,111);for(let e=0;e<22;e+=1){const t=Math.floor(qe(e,1,112)*16),n=Math.floor(qe(e,2,112)*16),s=qe(e,3,112)>.35;i.fillStyle=s?"rgba(255,226,139,0.95)":"rgba(167,105,43,0.75)",i.fillRect(t,n,s?1+Math.floor(qe(e,4,112)*2):1,1)}i.fillStyle="rgba(255,244,190,0.7)",i.fillRect(4,3,2,1),i.fillRect(10,11,2,1)}function P0(i){_n(i,[236,243,245],10,121),ln(i,122,10,[207,225,233],.5),ln(i,123,4,[255,255,255],.8)}function D0(i){_n(i,[63,66,64],24,131),ln(i,132,16,[34,37,36],.7,2),ln(i,133,9,[95,99,96],.45)}function I0(i){i.fillStyle="#a89f8c",i.fillRect(0,0,16,16);const e=[150,77,58];for(let t=0;t<4;t+=1){const n=t%2===0?-4:0;for(let s=-1;s<3;s+=1){const r=n+s*8,a=t*4;for(let o=0;o<3;o+=1)for(let c=0;c<7;c+=1){const l=r+c;if(l<0||l>=16)continue;const h=(qe(l,a+o,141)-.5)*18;i.fillStyle=ai(e[0]+h,e[1]+h*.6,e[2]+h*.6),i.fillRect(l,a+o,1,1)}}}}function N0(i){_n(i,[126,121,111],28,151);const e=[[92,88,81],[155,149,137],[111,106,96],[170,163,148]];for(let t=0;t<20;t+=1){const n=Math.floor(qe(t,1,152)*15),s=Math.floor(qe(t,2,152)*15),r=e[t%e.length];i.fillStyle=ai(r[0],r[1],r[2],.75),i.fillRect(n,s,2,1),qe(t,3,152)>.6&&i.fillRect(n,s+1,1,1)}}const U0={grass_top:x0,grass_side:M0,dirt:S0,stone:E0,cobblestone:y0,sand:b0,log_side:T0,log_top:A0,leaves:w0,planks:R0,glass:C0,glowstone:L0,snow:P0,bedrock:D0,brick:I0,gravel:N0};function F0(){const e=32*xa,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");n.imageSmoothingEnabled=!1;const s={},r={};_0.forEach((o,c)=>{const l=v0(c*37+5,U0[o]);r[o]=l;const h=c%xa,d=Math.floor(c/xa);n.drawImage(l,h*32,d*32,32,32),s[o]={index:c,col:h,row:d}});const a=new th(t);return a.colorSpace=Vt,a.magFilter=Ct,a.minFilter=vs,a.generateMipmaps=!0,a.anisotropy=4,a.needsUpdate=!0,{canvas:t,texture:a,tiles:s,tileCanvases:r}}function O0(){const i=document.createElement("canvas");i.width=64,i.height=64;const e=i.getContext("2d"),t=e.createImageData(64,64);for(let s=0;s<64;s+=1)for(let r=0;r<64;r+=1){const a=qe(r,s,201),o=Math.sin(r*.32+s*.18)*.5+Math.sin(s*.44-r*.08)*.5,c=Math.max(0,o)*10,l=(s*64+r)*4;t.data[l]=38+a*14+c,t.data[l+1]=108+a*18+c,t.data[l+2]=142+a*18+c,t.data[l+3]=255}e.putImageData(t,0,0);for(let s=0;s<9;s+=1){const r=Math.floor(qe(s,1,202)*64),a=Math.floor(qe(s,2,202)*64);e.fillStyle="rgba(196,236,238,0.22)",e.fillRect(a,r,4+Math.floor(qe(s,3,202)*9),1)}const n=new th(i);return n.colorSpace=Vt,n.wrapS=Rs,n.wrapT=Rs,n.magFilter=Wt,n.minFilter=Fn,n.anisotropy=4,n.needsUpdate=!0,n}function oc(i,e){const t=i.tiles[e];if(!t)return null;const n=i.tileCanvases[e];return{tile:t,tileCanvas:n}}function Ma(i,e,t,n){const[s,r,a,o]=t;i.save(),i.beginPath(),i.moveTo(s[0],s[1]),i.lineTo(r[0],r[1]),i.lineTo(a[0],a[1]),i.lineTo(o[0],o[1]),i.closePath(),i.clip();const c=(r[0]-s[0])/xt,l=(r[1]-s[1])/xt,h=(o[0]-s[0])/xt,d=(o[1]-s[1])/xt;i.setTransform(c,l,h,d,s[0],s[1]),i.imageSmoothingEnabled=!1,i.drawImage(e,0,0),i.setTransform(1,0,0,1,0,0),n>0&&(i.fillStyle=`rgba(15,18,10,${n})`,i.fillRect(0,0,96,96)),i.restore()}function B0(i,e,t){const n=si[e];if(!n)return;const s=Math.min(window.devicePixelRatio||1,2),r=64;i.width=r*s,i.height=r*s;const a=i.getContext("2d");a.setTransform(s,0,0,s,0,0),a.clearRect(0,0,r,r);const o=oc(t,n.tiles.top),c=oc(t,n.tiles.side);if(!o||!c)return;const l=32,h=10,d=26,u=51,p=10,_=54;a.save(),a.shadowColor="rgba(0,0,0,0.3)",a.shadowBlur=8,a.shadowOffsetY=4,a.fillStyle="rgba(0,0,0,0.18)",a.beginPath(),a.ellipse(l,55,19,5,0,0,Math.PI*2),a.fill(),a.restore(),Ma(a,o.tileCanvas,[[l,h],[_,d],[l,d+15],[p,d]],0),Ma(a,c.tileCanvas,[[p,d],[l,d+15],[l,u],[p,d+24]],.18),Ma(a,c.tileCanvas,[[l,d+15],[_,d],[_,d+24],[l,u]],.32),n.name==="Glass"&&(a.strokeStyle="rgba(232,251,253,0.62)",a.lineWidth=.8,a.beginPath(),a.moveTo(l,h),a.lineTo(_,d),a.lineTo(_,d+24),a.lineTo(l,u),a.lineTo(p,d+24),a.lineTo(p,d),a.closePath(),a.stroke())}const at=16,dt=128,Oi=64,Sn=13,zr=817243,Rt=-dt/2,Yn=dt/2-1,Bt=Object.freeze({x:8,z:28,yaw:.03,pitch:-.1}),Jn=64;function gs(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function It(i,e,t=0){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function z0(i,e,t=0){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=It(n,s,t),h=It(n+1,s,t),d=It(n,s+1,t),u=It(n+1,s+1,t),p=l+(h-l)*o,_=d+(u-d)*o;return p+(_-p)*c}function gi(i,e,t=4,n=0){let s=0,r=.5,a=1,o=0;for(let c=0;c<t;c+=1)s+=z0(i*a,e*a,n+c*131)*r,o+=r,r*=.5,a*=2;return s/o}function G0(i,e){const t=gi(i*.017+12.7,e*.017-4.2,5,11),n=gi(i*.05-8.3,e*.05+3.9,3,31),s=gi(i*.15+4.1,e*.15-7.7,2,47);let r=11.6+t*6.2+(n-.5)*2.6+(s-.5)*1;const a=Math.hypot((i-8)/26,(e-32)/19),o=Math.exp(-a*a*2.1);r+=o*8.5;const c=Math.hypot(i/48,(e+22)/34)+(gi(i*.08,e*.08,2,71)-.5)*.12,l=1-gs(.4,1.02,c),h=8.1+n*2.2+s*.7;r=r*(1-l*.98)+h*(l*.98);const d=gs(-32,-62,e+Math.sin(i*.05)*6),u=gi(i*.035+4.2,e*.035+9.1,4,51),p=gi(i*.075-13.1,e*.075-2.4,3,57),_=.5+.5*Math.sin(i*.16+u*7+e*.03),M=16*Math.exp(-Math.pow((i+20)/16,2)),m=22*Math.exp(-Math.pow((i-24)/20,2)),f=Math.pow(u,1.5)*26+Math.pow(p,1.35)*11+_*5;r+=d*(7+f+M+m)*(.55+t*.6);const S=gs(30,62,i)*gs(-45,5,e);r+=S*(7+u*10);const w=Math.hypot(i,e)/66,b=gs(.78,1.06,w);return r=r*(1-b)+4.6*b,Math.max(2,Math.floor(r))}function lc(i,e,t){const n=(s,r)=>{const a=Math.max(0,Math.min(dt-1,s+Jn)),o=Math.max(0,Math.min(dt-1,r+Jn));return i[o*dt+a]};return Math.max(Math.abs(n(e,t)-n(e+1,t)),Math.abs(n(e,t)-n(e-1,t)),Math.abs(n(e,t)-n(e,t+1)),Math.abs(n(e,t)-n(e,t-1)))}const Bi=[{dir:[1,0,0],corners:[[1,0,0],[1,1,0],[1,1,1],[1,0,1]],uvs:[[0,0],[0,1],[1,1],[1,0]],normal:[1,0,0],shade:.84,kind:"side"},{dir:[-1,0,0],corners:[[0,0,1],[0,1,1],[0,1,0],[0,0,0]],uvs:[[0,0],[0,1],[1,1],[1,0]],normal:[-1,0,0],shade:.8,kind:"side"},{dir:[0,1,0],corners:[[0,1,0],[0,1,1],[1,1,1],[1,1,0]],uvs:[[0,0],[0,1],[1,1],[1,0]],normal:[0,1,0],shade:1,kind:"top"},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],uvs:[[0,0],[1,0],[1,1],[0,1]],normal:[0,-1,0],shade:.52,kind:"bottom"},{dir:[0,0,1],corners:[[1,0,1],[1,1,1],[0,1,1],[0,0,1]],uvs:[[0,0],[0,1],[1,1],[1,0]],normal:[0,0,1],shade:.76,kind:"side"},{dir:[0,0,-1],corners:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],uvs:[[0,0],[0,1],[1,1],[1,0]],normal:[0,0,-1],shade:.7,kind:"side"}],k0=[.54,.68,.84,1];class H0{constructor(e,t={}){this.scene=e,this.seed=t.seed??zr,this.data=new Uint8Array(dt*Oi*dt),this.heightMap=new Int16Array(dt*dt),this.chunks=new Map,this.edits=new Map,this.decorLights=[],this.chimney=null,this.atlas=F0(),this.waterTexture=O0(),this.materials=this.createMaterials(),this.generated=!1,this.visibleDistance=8,this.waterTime=0}createMaterials(){const e=new Is({map:this.atlas.texture,vertexColors:!0,roughness:.93,metalness:0,side:ti,dithering:!0}),t=new Dl({map:this.atlas.texture,vertexColors:!0,transparent:!0,opacity:.62,roughness:.08,metalness:.12,depthWrite:!1,side:pn,envMapIntensity:.6}),n=new Dl({map:this.waterTexture,vertexColors:!0,transparent:!0,opacity:.82,roughness:.14,metalness:.08,depthWrite:!1,side:pn}),s=new Is({map:this.atlas.texture,vertexColors:!0,emissiveMap:this.atlas.texture,emissive:new Ie(16754765),emissiveIntensity:1.15,roughness:.74,metalness:0});return{opaque:e,glass:t,water:n,glow:s}}index(e,t,n){return(t*dt+(n+Jn))*dt+(e+Jn)}inBounds(e,t,n){return e>=Rt&&e<=Yn&&n>=Rt&&n<=Yn&&t>=0&&t<Oi}getBlock(e,t,n){return t<0?j.BEDROCK:t>=Oi||e<Rt||e>Yn||n<Rt||n>Yn?j.AIR:this.data[this.index(e,t,n)]}setRaw(e,t,n,s){this.inBounds(e,t,n)&&(this.data[this.index(e,t,n)]=s)}setIfAir(e,t,n,s){this.getBlock(e,t,n)===j.AIR&&this.setRaw(e,t,n,s)}heightAt(e,t){const n=Math.max(0,Math.min(dt-1,e+Jn)),s=Math.max(0,Math.min(dt-1,t+Jn));return this.heightMap[s*dt+n]}surfaceY(e,t){for(let n=Oi-1;n>=0;n-=1){const s=this.getBlock(e,n,t);if(s!==j.AIR&&s!==j.WATER)return n}return 0}generate(){this.data.fill(0),this.edits.clear();for(let e=Rt;e<=Yn;e+=1)for(let t=Rt;t<=Yn;t+=1)this.heightMap[(e+Jn)*dt+(t+Jn)]=G0(t,e);for(let e=Rt;e<=Yn;e+=1)for(let t=Rt;t<=Yn;t+=1){const n=this.heightAt(t,e),s=lc(this.heightMap,t,e),r=n<=Sn+1,a=n>=34,o=n<Sn;for(let c=0;c<=n;c+=1){let l=j.STONE;c===0?l=j.BEDROCK:c===n?o?l=n<Sn-3?j.GRAVEL:j.SAND:r?l=j.SAND:a?l=j.SNOW:s>=2&&n>18||s>=3?l=j.STONE:l=j.GRASS:c>n-4&&(o||r?l=j.SAND:a||s>=2&&n>18||s>=3?l=j.STONE:l=j.DIRT),this.setRaw(t,c,e,l)}for(let c=n+1;c<=Sn;c+=1)this.setRaw(t,c,e,j.WATER)}this.decorLights=[],this.chimney=null,this.addTrees(),this.addBoulders(),this.addCabin(24,2),this.generated=!0}addTrees(){for(let e=-58;e<58;e+=4)for(let t=-58;t<58;t+=4){const n=t+Math.floor(It(t,e,301)*4),s=e+Math.floor(It(t,e,302)*4),r=this.heightAt(n,s);if(r<Sn+2||r>35||lc(this.heightMap,n,s)>1||Math.hypot(n-Bt.x,s-Bt.z)<7||n>19&&n<30&&s>-4&&s<8)continue;const a=n-Bt.x,o=s-Bt.z;if(o<0&&Math.abs(Math.atan2(a,-o))<.62&&Math.hypot(a,o)<42)continue;const c=gi(n*.045+2.7,s*.045-5.1,2,303);if(It(t,e,304)>.045+c*.055)continue;const l=It(t,e,305)>.76?"pine":"oak";this.plantTree(n,s,l)}this.plantTree(-8,30,"oak",1.08),this.plantTree(22,35,"oak",1.18),this.plantTree(-17,18,"pine",1.06)}plantTree(e,t,n="oak",s=1){const r=this.heightAt(e,t);if(this.getBlock(e,r,t)!==j.GRASS||r<Sn+1)return;const a=r+1;if(n==="pine"){const l=Math.round((6+Math.floor(It(e,t,311)*3))*s);for(let u=0;u<l;u+=1)this.setRaw(e,a+u,t,j.LOG);const h=a+l-1;[[2,0],[2,1],[1,2],[2,3],[1,4],[1,5],[0,6]].forEach(([u,p],_)=>{const M=h-p;for(let m=-u;m<=u;m+=1)for(let f=-u;f<=u;f+=1)Math.abs(m)===u&&Math.abs(f)===u||It(e+m,t+f,320+_)<.18||this.setIfAir(e+m,M,t+f,j.LEAVES)}),this.setIfAir(e,h+1,t,j.LEAVES);return}const o=Math.round((4+Math.floor(It(e,t,312)*3))*s);for(let l=0;l<o;l+=1)this.setRaw(e,a+l,t,j.LOG);const c=a+o;for(let l=-2;l<=2;l+=1){const h=l===2?1:2;for(let d=-h;d<=h;d+=1)for(let u=-h;u<=h;u+=1)Math.abs(d)+Math.abs(u)+Math.max(0,l)*1.15>(l===2?1.5:3.6)||It(e+d*3+l,t+u*5-l,313)<.14||this.setIfAir(e+d,c+l,t+u,j.LEAVES)}this.setIfAir(e,c+3,t,j.LEAVES)}addBoulders(){[[-23,26],[18,29],[31,14],[-18,10],[-34,18],[-31,1],[37,24],[-6,43]].forEach(([t,n],s)=>{const r=this.heightAt(t,n)+1,a=1+Math.floor(It(t,n,401)*2);for(let o=-a;o<=a;o+=1)for(let c=-a;c<=a;c+=1){const l=Math.hypot(o,c);if(l>a+.2)continue;const h=Math.max(1,Math.round((a-l+.8)*(.8+It(t+o,n+c,402)*.7)));for(let d=0;d<h;d+=1){const u=It(t+o*3,n+c*7+d,403)>.55?j.COBBLE:j.STONE;this.setIfAir(t+o,r+d,n+c,u)}}s%3===0&&this.setIfAir(t,r+2,n,j.LEAVES)})}addCabin(e,t){const n=Math.max(this.heightAt(e,t),Sn+2),s=n;for(let a=-6;a<=6;a+=1)for(let o=-5;o<=7;o+=1){const c=e+a,l=t+o,h=this.heightAt(c,l);for(let d=n+1;d<=Math.min(Oi-1,n+13);d+=1)this.setRaw(c,d,l,j.AIR);if(h<n)for(let d=h+1;d<=n;d+=1)this.setRaw(c,d,l,j.DIRT);else if(h>n)for(let d=n+1;d<=h;d+=1)this.setRaw(c,d,l,j.AIR);this.setRaw(c,n,l,j.GRASS)}for(let a=-3;a<=3;a+=1)for(let o=-2;o<=3;o+=1)this.setRaw(e+a,s,t+o,j.PLANKS);const r=n+4;for(let a=n+1;a<=r;a+=1)for(let o=-3;o<=3;o+=1)for(let c=-2;c<=3;c+=1){if(!(Math.abs(o)===3||c===-2||c===3))continue;const h=Math.abs(o)===3&&(c===-2||c===3);let d=h?j.LOG:j.PLANKS;!h&&a<=n+2&&(c===3&&o===0&&(d=j.AIR),(c===3||c===-2)&&(o===-2||o===2)&&a===n+2&&(d=j.GLASS),Math.abs(o)===3&&c===0&&a===n+2&&(d=j.GLASS)),this.setRaw(e+o,a,t+c,d)}this.setRaw(e,n+4,t+3,j.GLOWSTONE),this.setRaw(e,n+4,t,j.GLOWSTONE),this.setRaw(e+1,n+4,t-1,j.GLOWSTONE);for(let a=-4;a<=4;a+=1)for(let o=-3;o<=4;o+=1)this.setRaw(e+a,n+5,t+o,j.PLANKS);for(let a=-3;a<=3;a+=1)for(let o=-2;o<=3;o+=1)this.setRaw(e+a,n+6,t+o,j.PLANKS);for(let a=-2;a<=2;a+=1)for(let o=-2;o<=3;o+=1)this.setRaw(e+a,n+7,t+o,j.PLANKS);for(let a=-1;a<=1;a+=1)for(let o=-2;o<=3;o+=1)this.setRaw(e+a,n+8,t+o,j.PLANKS);for(let a=-3;a<=4;a+=1)this.setRaw(e,n+9,t+a,j.LOG);for(let a=n+1;a<=n+10;a+=1)this.setRaw(e+2,a,t-1,a===n+10?j.BRICK:j.COBBLE);this.chimney={x:e+2.5,y:n+11,z:t-.5},this.decorLights.push({x:e+.5,y:n+4.2,z:t+3.6,color:16758120,intensity:14,distance:13}),this.decorLights.push({x:e+.5,y:n+2.6,z:t+.5,color:16758120,intensity:8,distance:8}),this.buildPath(Bt.x,Bt.z+3,Bt.x,13),this.buildPath(Bt.x,13,20,11),this.buildPath(20,11,30,10),this.buildPath(30,10,26,18),this.buildPath(26,18,16,24),this.buildPath(16,24,Bt.x,Bt.z+3);for(let a=-13;a<=-3;a+=1){for(let o=-1;o<=1;o+=1)o===0&&a%2===0||this.setRaw(e+o,Sn+1,t+a,j.PLANKS);if(a%3===0)for(let o=this.surfaceY(e+2,t+a)+1;o<=Sn;o+=1)this.setRaw(e+2,o,t+a,j.LOG)}}buildPath(e,t,n,s){const r=Math.max(Math.abs(n-e),Math.abs(s-t));for(let a=0;a<=r;a+=1){const o=a/Math.max(1,r),c=Math.round(e+(n-e)*o),l=Math.round(t+(s-t)*o);for(let h=-1;h<=1;h+=1)for(let d=-1;d<=1;d+=1){if(Math.abs(h)+Math.abs(d)>1)continue;const u=this.heightAt(c+h,l+d);if(!(u<Sn)){this.setRaw(c+h,u,l+d,It(c+h,l+d,501)>.25?j.GRAVEL:j.COBBLE);for(let p=u+1;p<=u+5;p+=1)this.setRaw(c+h,p,l+d,j.AIR)}}}}buildAll(){for(let e=0;e<dt/at;e+=1)for(let t=0;t<dt/at;t+=1)this.buildChunk(t,e)}chunkKey(e,t){return`${e},${t}`}buildChunk(e,t){const n=this.chunkKey(e,t);let s=this.chunks.get(n);if(s){for(const l of Object.values(s.meshes))s.group.remove(l),l.geometry.dispose();s.meshes={},s.geometries=[]}else{const l=new _i;l.position.set(Rt+e*at,0,Rt+t*at),this.scene.add(l),s={group:l,cx:e,cz:t,meshes:{},geometries:[]},this.chunks.set(n,s)}const r={opaque:{positions:[],normals:[],uvs:[],colors:[],indices:[]},glass:{positions:[],normals:[],uvs:[],colors:[],indices:[]},water:{positions:[],normals:[],uvs:[],colors:[],indices:[]},glow:{positions:[],normals:[],uvs:[],colors:[],indices:[]}},a=Rt+e*at,o=Rt+t*at;for(let l=0;l<at;l+=1)for(let h=0;h<at;h+=1){const d=a+h,u=o+l;for(let p=0;p<Oi;p+=1){const _=this.getBlock(d,p,u);if(_!==j.AIR){if(_===j.WATER){this.addBlockFaces(r.water,d,p,u,_,h,l,!0);continue}if(_===j.GLASS){this.addBlockFaces(r.glass,d,p,u,_,h,l,!1);continue}if(_===j.GLOWSTONE){this.addBlockFaces(r.glow,d,p,u,_,h,l,!1);continue}this.addBlockFaces(r.opaque,d,p,u,_,h,l,!1)}}}const c=[["opaque",this.materials.opaque,!0,!1],["glass",this.materials.glass,!1,!0],["water",this.materials.water,!1,!0],["glow",this.materials.glow,!1,!1]];for(const[l,h,d,u]of c){const p=this.createGeometry(r[l]);if(!p)continue;const _=new $t(p,h);_.castShadow=d,_.receiveShadow=l!=="water",_.renderOrder=u?2:0,_.matrixAutoUpdate=!1,_.updateMatrix(),s.group.add(_),s.meshes[l]=_,s.geometries.push(p)}this.applyVisibility(s)}addBlockFaces(e,t,n,s,r,a,o,c){const l=si[r];if(!l)return;const h=this.blockTint(r,t,n,s),d=c?[Bi[2],Bi[0],Bi[1],Bi[4],Bi[5]]:Bi;for(const u of d){const p=t+u.dir[0],_=n+u.dir[1],M=s+u.dir[2],m=this.getBlock(p,_,M);if(c){if(m===j.WATER||fr(m)&&m!==j.GLASS)continue}else if(r===j.GLASS){if(fr(m)||m===j.GLASS)continue}else if(fr(m)||m===j.WATER&&u.kind==="bottom")continue;const f=u.kind==="top"?l.tiles.top:u.kind==="bottom"?l.tiles.bottom:l.tiles.side,S=this.tileUV(f),w=u.normal,b=e.positions.length/3;for(let R=0;R<4;R+=1){const T=u.corners[R];if(e.positions.push(a+T[0],n+T[1],o+T[2]),e.normals.push(w[0],w[1],w[2]),c){const O=u.uvs[R];e.uvs.push(O[0],O[1])}else{const O=u.uvs[R];e.uvs.push(S.u0+O[0]*(S.u1-S.u0),S.v0+O[1]*(S.v1-S.v0))}const g=this.vertexAO(t,n,s,u,T),E=u.shade*k0[g];e.colors.push(E*h[0],E*h[1],E*h[2])}e.indices.push(b,b+1,b+2,b,b+2,b+3)}}vertexAO(e,t,n,s,r){const a=s.normal[0]!==0?0:s.normal[1]!==0?1:2,o=[0,1,2].filter(p=>p!==a),c=o.map(p=>r[p]===1?1:-1),l=[s.dir[0],s.dir[1],s.dir[2]],h=this.occludesAt(e+l[0]+(o[0]===0?c[0]:0),t+l[1]+(o[0]===1?c[0]:0),n+l[2]+(o[0]===2?c[0]:0)),d=this.occludesAt(e+l[0]+(o[1]===0?c[1]:0),t+l[1]+(o[1]===1?c[1]:0),n+l[2]+(o[1]===2?c[1]:0)),u=this.occludesAt(e+l[0]+(o[0]===0?c[0]:0)+(o[1]===0?c[1]:0),t+l[1]+(o[0]===1?c[0]:0)+(o[1]===1?c[1]:0),n+l[2]+(o[0]===2?c[0]:0)+(o[1]===2?c[1]:0));return h&&d?0:3-(Number(h)+Number(d)+Number(u))}occludesAt(e,t,n){const s=this.getBlock(e,t,n);return fr(s)&&s!==j.GLASS}blockTint(e,t,n,s){const r=It(t*3+n,s*5-n,601);if(e===j.LEAVES){const o=.82+r*.26;return[o*.94,o,o*.82]}if(e===j.GRASS){const o=.94+r*.1;return[o*.98,o,o*.92]}if(e===j.STONE||e===j.COBBLE){const o=.94+r*.09;return[o,o,o]}if(e===j.SAND){const o=.96+r*.07;return[o,o*.99,o*.94]}if(e===j.GLOWSTONE)return[1.05,1.02,.94];const a=.97+r*.05;return[a,a,a]}tileUV(e){const t=this.atlas.tiles[e];if(!t)return{u0:0,u1:1,v0:0,v1:1};const n=1/4,s=.5/128,r=t.col*n+s,a=(t.col+1)*n-s,o=1-t.row*n-s,c=1-(t.row+1)*n+s;return{u0:r,u1:a,v0:c,v1:o}}createGeometry(e){if(!e.indices.length)return null;const t=new wn;return t.setAttribute("position",new zt(e.positions,3)),t.setAttribute("normal",new zt(e.normals,3)),t.setAttribute("uv",new zt(e.uvs,2)),t.setAttribute("color",new zt(e.colors,3)),t.setIndex(e.indices),t.computeBoundingSphere(),t}applyVisibility(e){const t=Math.hypot((e.cx+.5)*at-dt/2,(e.cz+.5)*at-dt/2);e.group.visible=t<=this.visibleDistance*at+at*.7}updateVisibility(e,t=this.visibleDistance){this.visibleDistance=t;const n=e.x+dt/2,s=e.z+dt/2;for(const r of this.chunks.values()){const a=(r.cx+.5)*at,o=(r.cz+.5)*at;r.group.visible=Math.hypot(a-n,o-s)<=t*at+at*.7}}rebuildChunk(e,t){e<0||t<0||e>=dt/at||t>=dt/at||this.buildChunk(e,t)}rebuildAround(e,t){const n=Math.floor((e-Rt)/at),s=Math.floor((t-Rt)/at),r=e-Rt-n*at,a=t-Rt-s*at;this.rebuildChunk(n,s),r===0&&this.rebuildChunk(n-1,s),r===at-1&&this.rebuildChunk(n+1,s),a===0&&this.rebuildChunk(n,s-1),a===at-1&&this.rebuildChunk(n,s+1)}setBlock(e,t,n,s){return!this.inBounds(e,t,n)||this.getBlock(e,t,n)===s?!1:(this.setRaw(e,t,n,s),this.edits.set(`${e},${t},${n}`,s),this.rebuildAround(e,n),!0)}applyEdits(e=[]){for(const t of e){if(!Array.isArray(t)||t.length<4)continue;const[n,s,r,a]=t;this.inBounds(n,s,r)&&(this.setRaw(n,s,r,a),this.edits.set(`${n},${s},${r}`,a))}}serializeEdits(){const e=[];for(const[t,n]of this.edits){const[s,r,a]=t.split(",").map(Number);e.push([s,r,a,n])}return e}get editCount(){return this.edits.size}isBlocking(e,t,n){const s=this.getBlock(e,t,n);return!!si[s]?.solid}raycast(e,t,n=7){let s=Math.floor(e.x),r=Math.floor(e.y),a=Math.floor(e.z);const o=t.x>=0?1:-1,c=t.y>=0?1:-1,l=t.z>=0?1:-1,h=t.x===0?1/0:Math.abs(1/t.x),d=t.y===0?1/0:Math.abs(1/t.y),u=t.z===0?1/0:Math.abs(1/t.z);let p=t.x===0?1/0:(t.x>0?s+1-e.x:e.x-s)*h,_=t.y===0?1/0:(t.y>0?r+1-e.y:e.y-r)*d,M=t.z===0?1/0:(t.z>0?a+1-e.z:e.z-a)*u,m=[0,0,0],f=0;for(;f<=n;){const S=this.getBlock(s,r,a);if(S!==j.AIR&&S!==j.WATER)return{x:s,y:r,z:a,id:S,normal:[...m],distance:f};p<_&&p<M?(s+=o,f=p,p+=h,m=[-o,0,0]):_<M?(r+=c,f=_,_+=d,m=[0,-c,0]):(a+=l,f=M,M+=u,m=[0,0,-l])}return null}update(e){this.waterTime+=e,this.waterTexture.offset.x=Math.sin(this.waterTime*.035)*.045,this.waterTexture.offset.y=this.waterTime*.012}dispose(){for(const e of this.chunks.values()){for(const t of Object.values(e.meshes))e.group.remove(t),t.geometry.dispose();this.scene.remove(e.group)}this.chunks.clear(),Object.values(this.materials).forEach(e=>e.dispose()),this.atlas.texture.dispose(),this.waterTexture.dispose()}}const cc=1.62,hc=1.78,Kn=.31,uc=27,V0=8.9;function Nn(i,e,t,n){return Wi.lerp(i,e,1-Math.exp(-t*n))}class W0{constructor({camera:e,world:t,settings:n,callbacks:s={}}){this.camera=e,this.camera.rotation.order="YXZ",this.world=t,this.settings=n,this.callbacks=s,this.position=new U(0,30,0),this.velocity=new U,this.yaw=0,this.pitch=0,this.onGround=!1,this.fly=!1,this.inWater=!1,this.enabled=!1,this.selected=0,this.target=null,this.bobPhase=0,this.walkDistance=0,this.stepTimer=0,this.sprinting=!1,this.keys=new Set,this.touchMove={x:0,z:0},this.lookPointer=null,this.touchLook=null,this.baseFov=n.fov??78,this._lastFov=this.baseFov,this._dir=new U,this._temp=new U,this._bindInput()}get selectedBlock(){return mi[this.selected]}_bindInput(){window.addEventListener("keydown",n=>{if(this.enabled&&(n.code==="Tab"&&n.preventDefault(),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),this.keys.add(n.code),n.code==="KeyF"&&!n.repeat&&this.toggleFly(),n.code.startsWith("Digit"))){const s=Number(n.code.slice(5))-1;s>=0&&s<mi.length&&this.setSelected(s)}}),window.addEventListener("keyup",n=>{this.keys.delete(n.code)}),window.addEventListener("blur",()=>{this.keys.clear()}),document.addEventListener("mousemove",n=>{!this.enabled||document.pointerLockElement!==document.getElementById("scene")||this.look(n.movementX,n.movementY)});const e=document.getElementById("scene");e.addEventListener("mousedown",n=>{this.enabled&&document.pointerLockElement===e&&(n.button===0&&this.breakBlock(),n.button===2&&this.placeBlock())}),e.addEventListener("contextmenu",n=>n.preventDefault()),e.addEventListener("wheel",n=>{if(!this.enabled)return;n.preventDefault();const s=Math.sign(n.deltaY),r=(this.selected+s+mi.length)%mi.length;this.setSelected(r)},{passive:!1}),e.addEventListener("pointerdown",n=>{!this.enabled||n.pointerType!=="touch"||this.touchLook||(this.touchLook={id:n.pointerId,x:n.clientX,y:n.clientY},e.setPointerCapture?.(n.pointerId),n.preventDefault())}),e.addEventListener("pointermove",n=>{if(!this.touchLook||this.touchLook.id!==n.pointerId)return;const s=n.clientX-this.touchLook.x,r=n.clientY-this.touchLook.y;this.touchLook.x=n.clientX,this.touchLook.y=n.clientY,this.look(s*1.55,r*1.55),n.preventDefault()});const t=n=>{!this.touchLook||this.touchLook.id!==n.pointerId||(this.touchLook=null)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)}look(e,t){const n=(this.settings.sensitivity??1)*.00215;this.yaw-=e*n;const s=this.settings.invertY?-1:1;this.pitch-=t*n*s,this.pitch=Wi.clamp(this.pitch,-Math.PI/2+.02,Math.PI/2-.02)}setSelected(e){e!==this.selected&&(this.selected=e,this.callbacks.onSelect?.(mi[e],e))}toggleFly(){this.fly=!this.fly,this.velocity.y=0,this.callbacks.onFlyChange?.(this.fly)}setBaseFov(e){this.baseFov=e}spawnAt(e,t,n,s=0,r=0){this.position.set(e,t,n),this.velocity.set(0,0,0),this.yaw=s,this.pitch=r,this.fly=!1,this.onGround=!1,this.updateCamera(0)}setEnabled(e){this.enabled=e,e||(this.keys.clear(),this.touchLook=null,this.velocity.x=0,this.velocity.z=0)}getDirection(){const e=Math.cos(this.pitch);return this._dir.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e),this._dir}getEyePosition(){return this._temp.set(this.position.x,this.position.y+cc,this.position.z)}updateTarget(){const e=this.world.raycast(this.getEyePosition(),this.getDirection(),7.2);return this.target=e,e}intersectsPlayer(e,t,n){const s=this.position.x-Kn,r=this.position.x+Kn,a=this.position.y,o=this.position.y+hc,c=this.position.z-Kn,l=this.position.z+Kn;return r>e&&s<e+1&&o>t&&a<t+1&&l>n&&c<n+1}breakBlock(){const e=this.updateTarget();return e?e.id===j.BEDROCK?(this.callbacks.onDenied?.("Bedrock cannot be broken"),!1):this.world.setBlock(e.x,e.y,e.z,j.AIR)?(this.callbacks.onBreak?.(e),!0):!1:(this.callbacks.onMiss?.(),!1)}placeBlock(){const e=this.updateTarget();if(!e)return this.callbacks.onMiss?.(),!1;const t=e.x+e.normal[0],n=e.y+e.normal[1],s=e.z+e.normal[2];if(n<0||n>=64)return!1;const r=this.world.getBlock(t,n,s);if(r!==j.AIR&&r!==j.WATER)return!1;if(this.intersectsPlayer(t,n,s))return this.callbacks.onDenied?.("No room to build there"),!1;const a=this.selectedBlock;return this.world.setBlock(t,n,s,a)?(this.callbacks.onPlace?.({x:t,y:n,z:s,id:a,block:this.world.getBlock(t,n,s)}),!0):!1}collides(){const e=Math.floor(this.position.x-Kn),t=Math.floor(this.position.x+Kn),n=Math.floor(this.position.y+.001),s=Math.floor(this.position.y+hc-.001),r=Math.floor(this.position.z-Kn),a=Math.floor(this.position.z+Kn);for(let o=n;o<=s;o+=1)for(let c=r;c<=a;c+=1)for(let l=e;l<=t;l+=1)if(this.world.isBlocking(l,o,c))return!0;return!1}moveAxis(e,t){if(t===0)return!1;const n=Math.max(1,Math.ceil(Math.abs(t)/.018)),s=t/n;for(let r=0;r<n;r+=1)if(this.position[e]+=s,this.collides())return this.position[e]-=s,e==="y"&&s<0&&(this.onGround=!0),!0;return!1}checkWater(){const e=Math.floor(this.position.x),t=Math.floor(this.position.z),n=Math.floor(this.position.y+.35),s=Math.floor(this.position.y+1.1);this.inWater=ac(this.world.getBlock(e,n,t))||ac(this.world.getBlock(e,s,t))}update(e){const t=Math.min(e,.05);this.checkWater();const n=this.onGround;if(this.onGround=!1,this.enabled){const s=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),r=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),a=s+(this.touchMove?.z??0),o=r+(this.touchMove?.x??0),c=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight");this.sprinting=!this.fly&&c&&(a!==0||o!==0);const l=this.fly?c?17:9.5:this.inWater?3.4:this.sprinting?7.1:4.65;let h=0,d=0;if(a!==0||o!==0){const M=Math.hypot(a,o),m=a/M,f=o/M,S=Math.sin(this.yaw),w=Math.cos(this.yaw);h=(-S*m+w*f)*l,d=(-w*m-S*f)*l}if(this.velocity.x=Nn(this.velocity.x,h,this.onGround||this.fly?14:5,t),this.velocity.z=Nn(this.velocity.z,d,this.onGround||this.fly?14:5,t),this.fly){let M=0;this.keys.has("Space")&&(M+=l),c&&!this.keys.has("Space")&&(M-=l),this.velocity.y=Nn(this.velocity.y,M,11,t)}else this.inWater?this.velocity.y=Nn(this.velocity.y,this.keys.has("Space")?3.8:-1.4,5,t):(this.velocity.y-=uc*t,this.velocity.y=Math.max(this.velocity.y,-42),this.keys.has("Space")&&n&&(this.velocity.y=V0,this.onGround=!1,this.callbacks.onJump?.()));const u=this.position.x,p=this.position.z;this.moveAxis("x",this.velocity.x*t),this.moveAxis("z",this.velocity.z*t),this.moveAxis("y",this.velocity.y*t),this.onGround&&(this.velocity.y=Math.min(0,this.velocity.y)),this.position.y<-8&&this.callbacks.onVoid?.();const _=Math.hypot(this.position.x-u,this.position.z-p);this.walkDistance+=_,!this.fly&&this.onGround&&_>.001?(this.bobPhase+=_*2.5,this.stepTimer+=_,this.stepTimer>1.65&&(this.stepTimer=0,this.callbacks.onStep?.(this.position))):this.bobPhase=Nn(this.bobPhase,Math.round(this.bobPhase/Math.PI)*Math.PI,6,t)}else this.velocity.x=Nn(this.velocity.x,0,12,t),this.velocity.z=Nn(this.velocity.z,0,12,t),this.fly||(this.velocity.y-=uc*t,this.moveAxis("y",this.velocity.y*t));this.updateCamera(t),this.updateTarget()}updateCamera(e){const t=Math.abs(this.velocity.x)+Math.abs(this.velocity.z)>.8,n=this.settings.cameraBob!==!1,s=n&&t&&this.onGround&&!this.fly?Math.sin(this.bobPhase*2)*.038:0,r=n&&t&&this.onGround&&!this.fly?Math.sin(this.bobPhase)*.0026:0;this.camera.position.set(this.position.x,this.position.y+cc+s,this.position.z),this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=Nn(this.camera.rotation.z,r,10,e||.016);const a=this.baseFov+(this.sprinting?3.5:0);Math.abs(a-this._lastFov)>.02&&(this.camera.fov=Nn(this.camera.fov,a,8,e||.016),this.camera.updateProjectionMatrix(),Math.abs(this.camera.fov-a)<.02&&(this.camera.fov=a,this.camera.updateProjectionMatrix(),this._lastFov=a))}serialize(){return{x:this.position.x,y:this.position.y,z:this.position.z,yaw:this.yaw,pitch:this.pitch,fly:this.fly,selected:this.selected}}load(e){e&&(this.position.set(e.x,e.y,e.z),this.yaw=e.yaw??0,this.pitch=e.pitch??0,this.fly=!!e.fly,this.selected=Number.isInteger(e.selected)?Wi.clamp(e.selected,0,mi.length-1):0,this.velocity.set(0,0,0),this.updateCamera(0))}getBlockNameAtTarget(){return this.target?Ns(this.target.id):""}}const X0=`
  varying vec3 vWorldPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,q0=`
  uniform vec3 topColor;
  uniform vec3 horizonColor;
  uniform vec3 groundColor;
  uniform vec3 sunColor;
  uniform vec3 sunDirection;
  varying vec3 vWorldPosition;
  void main() {
    vec3 direction = normalize(vWorldPosition - cameraPosition);
    float height = direction.y;
    vec3 color;
    if (height > 0.0) {
      color = mix(horizonColor, topColor, pow(clamp(height, 0.0, 1.0), 0.58));
    } else {
      color = mix(horizonColor, groundColor, clamp(-height * 2.8, 0.0, 1.0));
    }
    float sunAmount = max(dot(direction, sunDirection), 0.0);
    color += sunColor * pow(sunAmount, 220.0) * 1.5;
    color += sunColor * pow(sunAmount, 8.0) * 0.11;
    float haze = smoothstep(-0.05, 0.32, height) * (1.0 - smoothstep(0.05, 0.65, height));
    color += vec3(0.14, 0.075, 0.03) * haze;
    gl_FragColor = vec4(color, 1.0);
  }
`;function Y0(i){let e=i;return()=>(e=(e*1664525+1013904223)%4294967296,e/4294967296)}class K0{constructor(e,t,n={}){this.scene=e,this.renderer=t,this.settings=n,this.sunDirection=new U(-.62,.44,.34).normalize(),this.focus=new U,this.time=0,this.setupSky(),this.setupLights(),this.setupClouds(),this.setupSun(),this.scene.fog=new Fo(14659716,55,148),this.setQuality(n.quality??"high")}setupSky(){this.skyMaterial=new ii({uniforms:{topColor:{value:new Ie(5012905)},horizonColor:{value:new Ie(16169075)},groundColor:{value:new Ie(6446929)},sunColor:{value:new Ie(16768416)},sunDirection:{value:this.sunDirection}},vertexShader:X0,fragmentShader:q0,side:Xt,depthWrite:!1,fog:!1}),this.sky=new $t(new Kt(680,680,680),this.skyMaterial),this.sky.renderOrder=-1e3,this.sky.frustumCulled=!1,this.scene.add(this.sky)}setupSun(){this.sunGroup=new _i;const e=new $t(new Kt(11,11,11),new qi({color:16773576,toneMapped:!1})),t=new $t(new Kt(22,22,22),new qi({color:16764030,transparent:!0,opacity:.19,blending:Ts,depthWrite:!1,toneMapped:!1})),n=new $t(new Kt(40,40,40),new qi({color:16756056,transparent:!0,opacity:.065,blending:Ts,depthWrite:!1,toneMapped:!1}));this.sunGroup.add(n,t,e),this.sunGroup.renderOrder=-900,this.scene.add(this.sunGroup)}setupLights(){this.hemisphere=new md(13229810,5588270,1.3),this.scene.add(this.hemisphere),this.sun=new Ol(16765338,3.1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.left=-52,this.sun.shadow.camera.right=52,this.sun.shadow.camera.top=52,this.sun.shadow.camera.bottom=-52,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=240,this.sun.shadow.bias=-45e-5,this.sun.shadow.normalBias=.035,this.sun.target.position.set(0,18,0),this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new Ol(10336212,.4),this.fill.position.set(55,40,-60),this.scene.add(this.fill),this.bounce=new xd(16770235,.12),this.scene.add(this.bounce)}setupClouds(){const e=Y0(9417),t=[];for(let a=0;a<24;a+=1){const o=(e()-.5)*300,c=(e()-.5)*300,l=53+e()*18,h=3+Math.floor(e()*5);for(let d=0;d<h;d+=1)t.push({x:o+(e()-.5)*28,y:l+(e()-.5)*4,z:c+(e()-.5)*18,sx:4+e()*11,sy:1.2+e()*1.8,sz:3+e()*8,speed:.22+e()*.18,tint:.9+e()*.1})}this.cloudPuffs=t;const n=new Kt(1,1,1),s=new Is({color:16773855,roughness:1,metalness:0,transparent:!0,opacity:.72,depthWrite:!1,fog:!0});this.clouds=new Nr(n,s,t.length),this.clouds.instanceMatrix.setUsage(Ir),this.clouds.frustumCulled=!1,this.clouds.castShadow=!1,this.clouds.receiveShadow=!1;const r=new Ie;t.forEach((a,o)=>{r.setRGB(a.tint,a.tint*.97,a.tint*.92),this.clouds.setColorAt(o,r)}),this.clouds.instanceColor&&(this.clouds.instanceColor.needsUpdate=!0),this.scene.add(this.clouds),this.cloudMatrix=new nt,this.cloudQuat=new ri,this.cloudScale=new U,this.cloudPosition=new U,this.updateClouds(0)}updateClouds(e){for(let t=0;t<this.cloudPuffs.length;t+=1){const n=this.cloudPuffs[t];n.x+=n.speed*e,n.x>165&&(n.x=-165),this.cloudPosition.set(n.x,n.y,n.z),this.cloudScale.set(n.sx,n.sy,n.sz),this.cloudMatrix.compose(this.cloudPosition,this.cloudQuat,this.cloudScale),this.clouds.setMatrixAt(t,this.cloudMatrix)}this.clouds.instanceMatrix.needsUpdate=!0}addPointLights(e=[]){this.pointLights=[],e.forEach(t=>{const n=new _d(t.color??16758120,t.intensity??8,t.distance??10,2);n.position.set(t.x,t.y,t.z),n.userData.base=t.intensity??8,this.scene.add(n),this.pointLights.push(n)})}setQuality(e){this.quality=e,e==="high"?this.sun.shadow.mapSize.set(2048,2048):e==="balanced"?this.sun.shadow.mapSize.set(1536,1536):this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)}setShadows(e){this.sun.castShadow=e,this.renderer.shadowMap.enabled=e,this.sun.shadow.needsUpdate=!0}update(e,t,n){this.time+=e,n&&this.focus.copy(n),this.sky.position.copy(t.position),this.sunGroup.position.copy(t.position).addScaledVector(this.sunDirection,260),this.sun.target.position.set(this.focus.x,this.focus.y+6,this.focus.z),this.sun.target.updateMatrixWorld(),this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDirection,120),this.fill.position.set(this.focus.x+55,this.focus.y+40,this.focus.z-60),this.updateClouds(e),this.pointLights&&this.pointLights.forEach((s,r)=>{s.intensity=(this.pointLights[r].userData?.base??s.intensity)*(.96+Math.sin(this.time*3.1+r)*.04)})}}class $0{constructor(e){this.settings=e,this.ctx=null,this.master=null,this.ambientGain=null,this.noiseBuffer=null,this.ambientStarted=!1,this.birdTimer=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.settings.volume??.7,this.master.connect(this.ctx.destination),this.noiseBuffer=this.createNoiseBuffer(2.5),this.startAmbient())}createNoiseBuffer(e){const t=Math.floor(this.ctx.sampleRate*e),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);let r=0;for(let a=0;a<t;a+=1){const o=Math.random()*2-1;r=(r+.02*o)/1.02,s[a]=r*3.4}return n}setVolume(e){this.settings.volume=e,!(!this.master||!this.ctx)&&this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.06)}setAmbient(e){this.settings.ambient=e,!(!this.ambientGain||!this.ctx)&&this.ambientGain.gain.setTargetAtTime(e?.055:0,this.ctx.currentTime,.8)}startAmbient(){if(this.ambientStarted||!this.ctx)return;this.ambientStarted=!0;const e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=620,t.Q.value=.3,this.ambientGain=this.ctx.createGain(),this.ambientGain.gain.value=this.settings.ambient===!1?0:.055,e.connect(t),t.connect(this.ambientGain),this.ambientGain.connect(this.master),e.start(),this.scheduleBird()}scheduleBird(){clearTimeout(this.birdTimer),this.birdTimer=setTimeout(()=>{this.settings.ambient!==!1&&this.ctx?.state==="running"&&this.bird(),this.scheduleBird()},6e3+Math.random()*11e3)}bird(){if(!this.ctx)return;const e=this.ctx.currentTime,t=1450+Math.random()*850;for(let n=0;n<2+Math.floor(Math.random()*3);n+=1){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(t*(1+n*.08),e+n*.09),s.frequency.exponentialRampToValueAtTime(t*1.45,e+n*.09+.05),r.gain.setValueAtTime(1e-4,e+n*.09),r.gain.exponentialRampToValueAtTime(.012,e+n*.09+.012),r.gain.exponentialRampToValueAtTime(1e-4,e+n*.09+.1),s.connect(r),r.connect(this.master),s.start(e+n*.09),s.stop(e+n*.09+.13)}}tone(e,t,n,s="sine",r=0){if(!this.ctx||this.ctx.state!=="running")return;const a=this.ctx.currentTime,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=s,o.frequency.setValueAtTime(e,a),r&&o.frequency.exponentialRampToValueAtTime(Math.max(30,e+r),a+t),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(n,a+.008),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c),c.connect(this.master),o.start(a),o.stop(a+t+.02)}noise(e,t,n,s="bandpass"){if(!this.ctx||this.ctx.state!=="running"||!this.noiseBuffer)return;const r=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const o=this.ctx.createBiquadFilter();o.type=s,o.frequency.value=t,o.Q.value=.7;const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(n,r+.008),c.gain.exponentialRampToValueAtTime(1e-4,r+e),a.connect(o),o.connect(c),c.connect(this.master),a.start(r),a.stop(r+e+.02)}click(){this.tone(520,.045,.03,"triangle",120)}select(){this.tone(420,.055,.022,"triangle",80)}breakBlock(){this.noise(.18,680,.12,"bandpass"),this.tone(112,.13,.07,"sine",-35)}placeBlock(){this.tone(118,.1,.09,"sine",-30),this.noise(.06,900,.035,"highpass")}step(){this.noise(.075,330,.026,"lowpass")}jump(){this.tone(210,.08,.03,"sine",40)}denied(){this.tone(140,.14,.04,"square",-20)}whoosh(){this.noise(.22,1200,.045,"bandpass")}save(){this.tone(660,.09,.03,"sine"),setTimeout(()=>this.tone(880,.14,.025,"sine"),70)}}const Yt=new nt,Qi=new U,ji=new ri,es=new U,Lr=new zn,dc=new Ie;class Z0{constructor(e,t=180){this.count=t,this.items=new Array(t).fill(null),this.cursor=0;const n=new Kt(.13,.13,.13),s=new Is({roughness:.92,metalness:0,vertexColors:!1});this.mesh=new Nr(n,s,t),this.mesh.instanceMatrix.setUsage(Ir),this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,e.add(this.mesh);for(let r=0;r<t;r+=1)Yt.makeScale(0,0,0),this.mesh.setMatrixAt(r,Yt),this.mesh.setColorAt(r,dc.set(16777215));this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}spawnBurst(e,t,n,s,r=16){for(let a=0;a<r;a+=1){const o=this.cursor;this.cursor=(this.cursor+1)%this.count;const c=Math.random()*Math.PI*2,l=.7+Math.random()*2.4,h={x:e+.5+(Math.random()-.5)*.6,y:t+.5+(Math.random()-.5)*.6,z:n+.5+(Math.random()-.5)*.6,vx:Math.cos(c)*l*.55,vy:1.2+Math.random()*2.4,vz:Math.sin(c)*l*.55,life:.55+Math.random()*.55,maxLife:1.1,size:.45+Math.random()*.8,rot:Math.random()*Math.PI,spin:(Math.random()-.5)*10};this.items[o]=h;const d=new Ie(s);d.offsetHSL((Math.random()-.5)*.035,0,(Math.random()-.5)*.13),this.mesh.setColorAt(o,d)}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}spawnPlace(e,t,n,s){for(let r=0;r<7;r+=1){const a=this.cursor;this.cursor=(this.cursor+1)%this.count,this.items[a]={x:e+.5+(Math.random()-.5)*.9,y:t+.05,z:n+.5+(Math.random()-.5)*.9,vx:(Math.random()-.5)*.6,vy:.4+Math.random()*.9,vz:(Math.random()-.5)*.6,life:.32+Math.random()*.24,maxLife:.56,size:.3+Math.random()*.4,rot:Math.random()*Math.PI,spin:(Math.random()-.5)*8},this.mesh.setColorAt(a,dc.set(s).offsetHSL(0,0,(Math.random()-.5)*.1))}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(e){let t=!1;for(let n=0;n<this.count;n+=1){const s=this.items[n];if(!s)continue;if(t=!0,s.life-=e,s.life<=0){this.items[n]=null,Yt.makeScale(0,0,0),this.mesh.setMatrixAt(n,Yt);continue}s.vy-=14*e,s.x+=s.vx*e,s.y+=s.vy*e,s.z+=s.vz*e,s.rot+=s.spin*e,s.y<0&&(s.y=0,s.vy*=-.25,s.vx*=.7,s.vz*=.7);const r=Math.min(1,s.life/.32),a=s.size*r;Qi.set(s.x,s.y,s.z),Lr.set(s.rot,s.rot*.7,s.rot*.4),ji.setFromEuler(Lr),es.set(a,a,a),Yt.compose(Qi,ji,es),this.mesh.setMatrixAt(n,Yt)}t&&(this.mesh.instanceMatrix.needsUpdate=!0)}}class J0{constructor(e,t=80){this.count=t,this.items=new Array(t).fill(null),this.cursor=0,this.timer=0;const n=new Kt(.2,.2,.2),s=new qi({color:13289145,transparent:!0,opacity:.2,depthWrite:!1,fog:!0});this.mesh=new Nr(n,s,t),this.mesh.instanceMatrix.setUsage(Ir),this.mesh.frustumCulled=!1,e.add(this.mesh);for(let r=0;r<t;r+=1)Yt.makeScale(0,0,0),this.mesh.setMatrixAt(r,Yt);this.mesh.instanceMatrix.needsUpdate=!0}update(e,t,n=!0){if(this.timer-=e,n&&t&&this.timer<=0){this.timer=.16+Math.random()*.12;const r=this.cursor;this.cursor=(this.cursor+1)%this.count,this.items[r]={x:t.x+(Math.random()-.5)*.5,y:t.y,z:t.z+(Math.random()-.5)*.5,vx:(Math.random()-.5)*.2,vy:.35+Math.random()*.45,vz:(Math.random()-.5)*.2,life:3.2+Math.random()*2.4,maxLife:5.6,size:.7+Math.random()*.6,rot:Math.random()*Math.PI,spin:(Math.random()-.5)*.5}}let s=!1;for(let r=0;r<this.count;r+=1){const a=this.items[r];if(!a)continue;if(s=!0,a.life-=e,a.life<=0){this.items[r]=null,Yt.makeScale(0,0,0),this.mesh.setMatrixAt(r,Yt);continue}a.x+=a.vx*e,a.y+=a.vy*e,a.z+=a.vz*e,a.vx+=Math.sin(a.y*1.7+r)*.012*e,a.vz+=Math.cos(a.y*1.2+r)*.01*e,a.rot+=a.spin*e;const o=a.maxLife-a.life,c=Math.min(1,o/.5)*Math.min(1,a.life/1.3),l=a.size*(.7+o*.55)*c;Qi.set(a.x,a.y,a.z),Lr.set(a.rot,a.rot*.6,a.rot*.3),ji.setFromEuler(Lr),es.set(l,l,l),Yt.compose(Qi,ji,es),this.mesh.setMatrixAt(r,Yt)}s&&(this.mesh.instanceMatrix.needsUpdate=!0)}}class Q0{constructor(e,t=110){this.count=t,this.group=new _i,e.add(this.group);const n=new Kt(.032,.032,.032),s=new qi({color:16768416,transparent:!0,opacity:.46,blending:Ts,depthWrite:!1,fog:!1});this.mesh=new Nr(n,s,t),this.mesh.instanceMatrix.setUsage(Ir),this.mesh.frustumCulled=!1,this.group.add(this.mesh),this.items=[];for(let r=0;r<t;r+=1)this.items.push({x:(Math.random()-.5)*36,y:1+Math.random()*17,z:(Math.random()-.5)*36,phase:Math.random()*Math.PI*2,speed:.1+Math.random()*.25,scale:.6+Math.random()*1.5});this.group.position.set(0,0,0),this.time=0}update(e,t){this.time+=e,this.group.position.x=Wi.lerp(this.group.position.x,t.x,.025),this.group.position.y=Wi.lerp(this.group.position.y,t.y-8.5,.025),this.group.position.z=Wi.lerp(this.group.position.z,t.z,.025);for(let n=0;n<this.count;n+=1){const s=this.items[n],r=s.x+Math.sin(this.time*s.speed+s.phase)*.65,a=s.y+Math.sin(this.time*s.speed*1.7+s.phase*1.4)*.7,o=s.z+Math.cos(this.time*s.speed*.8+s.phase)*.65,c=.45+.55*Math.abs(Math.sin(this.time*.7+s.phase)),l=s.scale*c;Qi.set(r,a,o),ji.set(0,0,0,1),es.set(l,l,l),Yt.compose(Qi,ji,es),this.mesh.setMatrixAt(n,Yt)}this.mesh.instanceMatrix.needsUpdate=!0}}const xh="cubehaven.settings.v1",Mh="cubehaven.save.v2",_o={renderDistance:8,fov:78,quality:"high",shadows:!0,showHud:!0,sensitivity:1,invertY:!1,cameraBob:!0,volume:.7,ambient:!0};function j0(){try{const i=JSON.parse(localStorage.getItem(xh)||"{}");return{..._o,...i}}catch{return{..._o}}}function e_(){try{const i=JSON.parse(localStorage.getItem(Mh)||"null");return!i||i.version!==2||i.seed!==zr?null:i}catch{return null}}const Ce=j0(),Pr=e_();let Qe="menu",pr=0,Sh=!1,vo=!1,xo=!1,Eh="menu",yh="menu",fc=0,pc=0,mc=0,Sa=0,Ea=0,mr=0,gc=60,ya=0;const ve=i=>document.getElementById(i),bh=ve("menu"),ys=ve("hud"),yi=ve("pause"),Fs=ve("settings"),Os=ve("controls"),Mo=ve("hotbar"),ba=ve("block-label"),Ta=ve("target-label"),_c=document.querySelector(".crosshair"),vc=ve("toast"),t_=ve("toast-text"),Aa=ve("flash"),xc=ve("hint-strip"),n_=ve("btn-play"),ts=window.matchMedia?.("(pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window;document.body.classList.toggle("is-touch",ts);ve("mobile-controls").setAttribute("aria-hidden",String(!ts));n_.addEventListener("click",()=>{if(!Sh){vo=!0;return}Lh()});const Gr=ve("scene"),cn=new g0({canvas:Gr,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});cn.outputColorSpace=Vt;cn.toneMapping=To;cn.toneMappingExposure=1.1;cn.shadowMap.enabled=Ce.shadows;cn.shadowMap.type=Ec;const oi=new $u,ct=new an(Ce.fov,window.innerWidth/window.innerHeight,.08,820);ct.rotation.order="YXZ";const pt=new H0(oi);pt.generate();Pr&&pt.applyEdits(Pr.edits);pt.buildAll();const vi=new K0(oi,cn,Ce);vi.addPointLights(pt.decorLights);const bs=new Z0(oi),wa=new J0(oi),Ra=new Q0(oi),mt=new $0(Ce),i_=new Kt(1.006,1.006,1.006),s_=new od(i_),Yi=new ad(s_,new jc({color:16769952,transparent:!0,opacity:.88,depthTest:!0}));Yi.renderOrder=5;Yi.visible=!1;oi.add(Yi);const De=new W0({camera:ct,world:pt,settings:Ce,callbacks:{onSelect:i=>{Ah(),Th(i),mt.select()},onFlyChange:i=>{mt.whoosh(),Mi(i?"Flight enabled — Space to rise, Shift to descend":"Flight disabled",2300)},onBreak:i=>{const e=si[i.id];bs.spawnBurst(i.x,i.y,i.z,e?.particle??10066329,18),mt.breakBlock(),xo=!0},onPlace:i=>{const e=si[i.id];bs.spawnPlace(i.x,i.y,i.z,e?.particle??10066329),mt.placeBlock(),xo=!0},onDenied:i=>{Mi(i,1600),mt.denied()},onMiss:()=>{mt.denied()},onStep:()=>mt.step(),onJump:()=>mt.jump(),onVoid:()=>l_()}});function So(){const i=pt.surfaceY(Bt.x,Bt.z)+1.02;De.spawnAt(Bt.x,i,Bt.z,Bt.yaw,Bt.pitch),De.setSelected(0)}Pr?.player?(De.load(Pr.player),(De.collides()||De.position.y<2||De.position.y>60)&&So()):So();De.setBaseFov(Ce.fov);function zo(i){pr+=i;const e=.675+Math.sin(pr*.035)*.035,t=64;ct.position.set(4+Math.sin(e)*t,37.5+Math.sin(pr*.13)*.55,8+Math.cos(e)*t),ct.lookAt(2,17.5,-10),ct.rotation.z=Math.sin(pr*.05)*.008}ct.fov=58;ct.updateProjectionMatrix();zo(0);function Mi(i,e=2200){t_.textContent=i,vc.classList.add("is-visible"),clearTimeout(pc),pc=setTimeout(()=>vc.classList.remove("is-visible"),e)}function Th(i){ba.textContent=Ns(i),ba.classList.remove("is-hidden"),clearTimeout(mc),mc=setTimeout(()=>ba.classList.add("is-hidden"),1500)}function Ah(){Mo.querySelectorAll(".hotbar-slot").forEach((i,e)=>{i.classList.toggle("is-selected",e===De.selected),i.setAttribute("aria-pressed",String(e===De.selected))})}function r_(){Mo.innerHTML="",mi.forEach((i,e)=>{const t=document.createElement("button");t.type="button",t.className="hotbar-slot",t.title=Ns(i),t.setAttribute("aria-label",`${e+1}: ${Ns(i)}`);const n=document.createElement("span");n.className="slot-key",n.textContent=String(e+1);const s=document.createElement("canvas");B0(s,i,pt.atlas),t.append(n,s),t.addEventListener("click",()=>{Qe==="game"&&De.setSelected(e)}),Mo.appendChild(t)}),Ah()}function wh(){const i=Qe!=="menu"&&Ce.showHud;return ys.classList.toggle("is-hidden",Qe==="menu"),ys.classList.toggle("is-minimal",!Ce.showHud),Qe!=="menu"&&!Ce.showHud&&ys.classList.remove("is-hidden"),i}function Ms(i){const e=Number(i.min)||0,t=Number(i.max)||100,n=Number(i.value);i.style.setProperty("--fill",`${(n-e)/(t-e)*100}%`)}function Go(){ve("set-render").value=String(Ce.renderDistance),ve("out-render").textContent=`${Ce.renderDistance} chunks`,ve("set-fov").value=String(Ce.fov),ve("out-fov").textContent=`${Ce.fov}°`,ve("set-sensitivity").value=String(Ce.sensitivity),ve("out-sensitivity").textContent=`${Number(Ce.sensitivity).toFixed(1)}×`,ve("set-volume").value=String(Math.round(Ce.volume*100)),ve("out-volume").textContent=`${Math.round(Ce.volume*100)}%`,ve("set-quality").value=Ce.quality,Gi(ve("set-shadows"),Ce.shadows),Gi(ve("set-hud"),Ce.showHud),Gi(ve("set-invert"),Ce.invertY),Gi(ve("set-bob"),Ce.cameraBob),Gi(ve("set-ambient"),Ce.ambient),["set-render","set-fov","set-sensitivity","set-volume"].forEach(i=>Ms(ve(i)))}function Gi(i,e){i.classList.toggle("is-on",!!e),i.setAttribute("aria-checked",String(!!e))}function Rh(){const i=window.devicePixelRatio||1;return Ce.quality==="low"?1:Ce.quality==="balanced"?Math.min(i,1.5):Math.min(i,2)}function $n({persist:i=!0}={}){if(cn.setPixelRatio(Rh()),cn.setSize(window.innerWidth,window.innerHeight,!1),vi.setQuality(Ce.quality),vi.setShadows(Ce.shadows),pt.updateVisibility(Qe==="menu"?ct.position:De.position,Ce.renderDistance),De.setBaseFov(Ce.fov),(Qe==="game"||Qe==="paused")&&(ct.fov=Ce.fov,ct.updateProjectionMatrix()),mt.setVolume(Ce.volume),mt.setAmbient(Ce.ambient),wh(),i)try{localStorage.setItem(xh,JSON.stringify(Ce))}catch{}}function ns(i=!1){const e={version:2,seed:zr,savedAt:Date.now(),edits:pt.serializeEdits(),player:De.serialize()};try{localStorage.setItem(Mh,JSON.stringify(e)),xo=!1,ve("menu-blocks").textContent=String(pt.editCount),ve("pause-edits").textContent=String(pt.editCount),i&&(Mi("World saved",1800),mt.save())}catch{i&&Mi("Could not save in this browser",2200)}}function Ch(){ve("pause-coords").textContent=`${Math.floor(De.position.x)} / ${Math.floor(De.position.y)} / ${Math.floor(De.position.z)}`,ve("pause-edits").textContent=String(pt.editCount)}function Lh(){if(Qe!=="game"&&(mt.unlock(),Qe="game",bh.classList.add("is-hidden"),yi.classList.add("is-hidden"),Fs.classList.add("is-hidden"),Os.classList.add("is-hidden"),document.body.classList.add("in-game"),ys.classList.remove("is-hidden"),De.setEnabled(!0),De.setBaseFov(Ce.fov),ct.fov=Ce.fov,ct.updateProjectionMatrix(),De.updateCamera(0),pt.updateVisibility(De.position,Ce.renderDistance),wh(),Ch(),Th(De.selectedBlock),xc.classList.remove("is-faded"),clearTimeout(fc),fc=setTimeout(()=>xc.classList.add("is-faded"),14e3),Aa.classList.remove("is-active"),Aa.offsetWidth,Aa.classList.add("is-active"),Mi(`Golden Valley · Seed ${zr}`,3200),!ts))try{Gr.requestPointerLock?.()}catch{}}function kr(){Qe==="game"&&(Qe="paused",De.setEnabled(!1),document.exitPointerLock?.(),yi.classList.remove("is-hidden"),Ch(),ns(!1),mt.click())}function Ph(){if(Qe==="paused"&&(Qe="game",yi.classList.add("is-hidden"),De.setEnabled(!0),mt.click(),!ts))try{Gr.requestPointerLock?.()}catch{}}function a_(){Qe!=="menu"&&(ns(!1),Qe="menu",De.setEnabled(!1),document.exitPointerLock?.(),yi.classList.add("is-hidden"),Fs.classList.add("is-hidden"),Os.classList.add("is-hidden"),bh.classList.remove("is-hidden"),ys.classList.add("is-hidden"),document.body.classList.remove("in-game"),ct.fov=58,ct.updateProjectionMatrix(),zo(0),ve("menu-blocks").textContent=String(pt.editCount),mt.click())}function Mc(i){Eh=i,Fs.classList.remove("is-hidden"),i==="pause"&&yi.classList.add("is-hidden"),Go(),mt.click()}function Eo(){Fs.classList.add("is-hidden"),Eh==="pause"&&yi.classList.remove("is-hidden"),mt.click()}function o_(i){yh=i,Os.classList.remove("is-hidden"),mt.click()}function yo(){Os.classList.add("is-hidden"),yh==="pause"&&yi.classList.remove("is-hidden"),mt.click()}function l_(){So(),Mi("Returned to the trailhead",1800)}function c_(){const i=ve("set-render");i.addEventListener("input",()=>{Ce.renderDistance=Number(i.value),ve("out-render").textContent=`${Ce.renderDistance} chunks`,Ms(i),$n()});const e=ve("set-fov");e.addEventListener("input",()=>{Ce.fov=Number(e.value),ve("out-fov").textContent=`${Ce.fov}°`,Ms(e),$n()});const t=ve("set-sensitivity");t.addEventListener("input",()=>{Ce.sensitivity=Number(t.value),ve("out-sensitivity").textContent=`${Ce.sensitivity.toFixed(1)}×`,Ms(t),$n()});const n=ve("set-volume");n.addEventListener("input",()=>{Ce.volume=Number(n.value)/100,ve("out-volume").textContent=`${n.value}%`,Ms(n),$n()}),ve("set-quality").addEventListener("change",r=>{Ce.quality=r.target.value,$n()}),[["set-shadows","shadows"],["set-hud","showHud"],["set-invert","invertY"],["set-bob","cameraBob"],["set-ambient","ambient"]].forEach(([r,a])=>{ve(r).addEventListener("click",()=>{Ce[a]=!Ce[a],Gi(ve(r),Ce[a]),$n(),mt.click()})}),ve("btn-reset-settings").addEventListener("click",()=>{Object.assign(Ce,_o),Go(),$n(),mt.click(),Mi("Settings reset to defaults",1600)}),ve("btn-settings-close").addEventListener("click",Eo),ve("btn-settings-done").addEventListener("click",Eo)}function h_(){ve("btn-settings").addEventListener("click",()=>Mc("menu")),ve("btn-controls").addEventListener("click",()=>o_("menu")),ve("btn-controls-close").addEventListener("click",yo),ve("btn-controls-done").addEventListener("click",yo),ve("btn-resume").addEventListener("click",Ph),ve("btn-pause").addEventListener("click",kr),ve("btn-pause-settings").addEventListener("click",()=>Mc("pause")),ve("btn-save").addEventListener("click",()=>ns(!0)),ve("btn-title").addEventListener("click",a_)}function u_(){document.addEventListener("pointerlockchange",()=>{Qe==="game"&&document.pointerLockElement!==Gr&&!ts&&kr()}),document.addEventListener("pointerlockerror",()=>{Qe==="game"&&!ts&&De.setEnabled(!0)})}function d_(){window.addEventListener("keydown",i=>{if(i.code==="Escape"){if(!Os.classList.contains("is-hidden")){yo();return}if(!Fs.classList.contains("is-hidden")){Eo();return}if(Qe==="paused"){Ph();return}Qe==="game"&&kr()}})}function f_(){const i=ve("joystick"),e=ve("joystick-knob");let t=null;const n=(o,c)=>{const l=i.getBoundingClientRect(),h=l.left+l.width/2,d=l.top+l.height/2,u=l.width/2-13;let p=(o-h)/u,_=(c-d)/u;const M=Math.hypot(p,_);M>1&&(p/=M,_/=M),De.touchMove.x=p,De.touchMove.z=-_,e.style.transform=`translate(${p*27}px, ${_*27}px)`},s=()=>{t=null,De.touchMove.x=0,De.touchMove.z=0,e.style.transform="translate(0px, 0px)"};i.addEventListener("pointerdown",o=>{Qe==="game"&&(t=o.pointerId,i.setPointerCapture?.(o.pointerId),n(o.clientX,o.clientY),o.preventDefault())}),i.addEventListener("pointermove",o=>{o.pointerId===t&&(n(o.clientX,o.clientY),o.preventDefault())}),i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),i.addEventListener("lostpointercapture",s);const r=ve("btn-mobile-jump"),a=o=>{o?De.keys.add("Space"):De.keys.delete("Space")};r.addEventListener("pointerdown",o=>{Qe==="game"&&(a(!0),o.preventDefault())}),["pointerup","pointercancel","pointerleave"].forEach(o=>{r.addEventListener(o,()=>a(!1))}),ve("btn-mobile-fly").addEventListener("click",()=>{Qe==="game"&&De.toggleFly()}),ve("btn-mobile-break").addEventListener("pointerdown",o=>{Qe==="game"&&(De.breakBlock(),o.preventDefault())}),ve("btn-mobile-place").addEventListener("pointerdown",o=>{Qe==="game"&&(De.placeBlock(),o.preventDefault())})}function p_(i){if(Ea+=1,mr+=i,mr>=.5&&(gc=Math.round(Ea/mr),Ea=0,mr=0,ve("hud-fps").textContent=String(gc)),ya+=i,ya<.14)return;ya=0;const e=Math.floor(De.position.x),t=Math.floor(De.position.y),n=Math.floor(De.position.z);ve("hud-coords").textContent=`${e} / ${t} / ${n}`,ve("hud-chunk").textContent=`${Math.floor((e-Rt)/at)} / ${Math.floor((n-Rt)/at)}`,De.target&&Qe==="game"?(Ta.textContent=Ns(De.target.id),Ta.classList.remove("is-hidden"),_c.classList.add("is-target")):(Ta.classList.add("is-hidden"),_c.classList.remove("is-target"))}function Sc(){if(Qe!=="game"||!De.target){Yi.visible=!1;return}Yi.visible=!0,Yi.position.set(De.target.x+.5,De.target.y+.5,De.target.z+.5)}function m_(){ct.aspect=window.innerWidth/window.innerHeight,ct.updateProjectionMatrix(),cn.setPixelRatio(Rh()),cn.setSize(window.innerWidth,window.innerHeight,!1)}function g_(){r_(),c_(),h_(),u_(),d_(),f_(),Go(),$n({persist:!1}),ve("menu-blocks").textContent=String(pt.editCount),ve("pause-edits").textContent=String(pt.editCount),window.addEventListener("resize",m_),window.addEventListener("beforeunload",()=>{Qe!=="menu"&&ns(!1)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(Qe==="game"&&kr(),Qe!=="menu"&&ns(!1))}),Sh=!0,vo&&(vo=!1,Lh()),Dh.start(),requestAnimationFrame(Ih)}const Dh=new Sd(!1),__=new U(0,18,-4);function Ih(){requestAnimationFrame(Ih);const i=Math.min(Dh.getDelta(),.05);Qe==="game"?(De.update(i),Sc(),p_(i),Sa+=i,Sa>.35&&(Sa=0,pt.updateVisibility(De.position,Ce.renderDistance)),vi.update(i,ct,De.position),wa.update(i,pt.chimney,!0),Ra.update(i,ct.position),bs.update(i)):Qe==="paused"?(Sc(),vi.update(i,ct,De.position),wa.update(i,pt.chimney,!0),Ra.update(i,ct.position),bs.update(i)):(zo(i),vi.update(i,ct,__),wa.update(i,pt.chimney,!0),Ra.update(i,ct.position),bs.update(i)),pt.update(i),cn.render(oi,ct)}window.__cubehaven={world:pt,player:De,camera:ct,scene:oi,renderer:cn,settings:Ce,environment:vi,saveWorld:ns};g_();
