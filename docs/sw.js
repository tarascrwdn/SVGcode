if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const f={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return f;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a59a8da5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/colorworker.665108fa.js",revision:"bbc203432be93537eb987537d0f76deb"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.3e65b783.js",revision:"982f22e64de59daf2e3a8507b4f82fc5"},{url:"assets/directory-open.50884122.js",revision:"ff4fc4b5676c121225f74a153b4a3071"},{url:"assets/en-US.0fae2168.js",revision:"6261fdab778ed5f727917ccf63131a01"},{url:"assets/file-open.0c34edcf.js",revision:"97f00860044f1d47c08b58971febca3c"},{url:"assets/file-open.73377f9f.js",revision:"111a4bbca60275a76e86ba82d0c4b573"},{url:"assets/file-save.1c3d3b86.js",revision:"38924faf7e0fc59a92cf205db37a8108"},{url:"assets/file-save.e8805cf5.js",revision:"83283e9f805d0d595d8edc59f475f419"},{url:"assets/filehandling.5b975ead.js",revision:"820c0292d090a8ed7f9cea0fe58c4ace"},{url:"assets/index.6af996f6.js",revision:"97affdd42a8ea70b4b8dc9da5627554d"},{url:"assets/index.d5786f20.css",revision:"1176b120b6423107aa26f49575e98520"},{url:"assets/monochromeworker.a07b995d.js",revision:"6fdb1de9bf1460e1d8e0b3f681761f74"},{url:"assets/svgoworker.81c3ef57.js",revision:"538459660c2df45f1a0aed536edf1a1f"},{url:"assets/vendor.e3820820.js",revision:"afa03dd295991fb8f61bf12107345a4d"},{url:"index.html",revision:"6cb3a2b310be3f0e646d9750ef03f366"},{url:"./favicon.svg",revision:"6eacb5d2a1a84592a9ddc5a1c5391d4c"},{url:"./favicon.png",revision:"5d22a0509833181006c5661787527aa1"},{url:"manifest.webmanifest",revision:"58c4f8364049154280198753a5824beb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
