if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,l)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const o=e=>s(e,a),d={module:{uri:a},exports:n,require:o};i[a]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(l(...e),n)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App-B5SbfHFy.js",revision:null},{url:"assets/Avatar-CKd9292f.js",revision:null},{url:"assets/CardGroup-DDlvw2CV.js",revision:null},{url:"assets/colors-Cv6p-LpM.js",revision:null},{url:"assets/index-B0VB9cw8.js",revision:null},{url:"assets/index-B8XKR8T2.js",revision:null},{url:"assets/index-BEBJOieW.css",revision:null},{url:"assets/index-CYKaNvZU.js",revision:null},{url:"assets/index-DIztvq74.js",revision:null},{url:"assets/index-Ed1cNSF8.js",revision:null},{url:"assets/index-F0jv3Yaq.js",revision:null},{url:"assets/index-JbO_3pKo.js",revision:null},{url:"assets/index-zDJg4nIg.js",revision:null},{url:"assets/pdf.worker-BgPpApnW.js",revision:null},{url:"assets/Root-BLivGUvc.js",revision:null},{url:"assets/Stack-BSWavb7L.js",revision:null},{url:"assets/styled-Cb0PxjCK.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"index.html",revision:"c1303848e6ddc2ad9366d2b073a109fa"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"images/artwork/archengel/archengel_Icon_gray.png",revision:"87415e6fd9ce6b7b6e15f37b1af3750b"},{url:"images/artwork/archengel/archengel_Icon_small.jpg",revision:"e6ed42528fc8ce9e32dae6b29ccec214"},{url:"images/artwork/good_evil/good_evil_color_cropped.jpg",revision:"7ca70deeb4424cf120150d63dcf85104"},{url:"images/artwork/good_evil/good_evil_color.jpg",revision:"3deefe888d975211a135820d0aa527bd"},{url:"images/ol_calibrator/calibrator-logo.png",revision:"d7ef29262f9fbf835e811bacea09f08f"},{url:"images/ol_clai_prg/configure.png",revision:"e9c7d9ff055f069aa926f3aa31fd728d"},{url:"images/ol_clai_prg/create.png",revision:"60638a89089713dcb7658d64f4a758dc"},{url:"images/ol_clai_prg/dashboard.png",revision:"17745a38d0e756ca2abf1f40586efa9c"},{url:"images/ol_clai_prg/report.png",revision:"88949807807a68af3cd42d68cab7f6a9"},{url:"images/ol_clai_prg/welcome.png",revision:"fedc34573f8665cb5548aae378f57d14"},{url:"images/ol_clai_tf/slide-01.png",revision:"14c5c3000c2aebb480693f084e6dc7e9"},{url:"images/ol_clai_tf/slide-02.png",revision:"dae87e0598fdc17fceb85ebb48ecd699"},{url:"images/ol_clai_tf/slide-03.png",revision:"f86cf0ca9d84bb3e42988d079127a9f2"},{url:"images/ol_clai_tf/slide-04.png",revision:"8ec260f72f36fbce44f79eb9cd1d6cdb"},{url:"images/ol_clai_tf/slide-05.gif",revision:"e27ea2c9d5541e47b346d6835c06f443"},{url:"images/ol_clai_tf/slide-06.png",revision:"fd5fff984afb5019069832d263bb615d"},{url:"images/ol_clai_tf/slide-07.png",revision:"210b01312d61d5adc6f435f175820d5b"},{url:"images/ol_clay_designs/designs-icon.png",revision:"3449768bd909b5f1f592fe73964d7e46"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"0b386a8b67048c795b8fb1e0bbb47be6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
