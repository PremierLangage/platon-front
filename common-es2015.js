(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"Gvy/":function(t,n,i){"use strict";function e(){return{alphabet:[],initialStates:[],acceptingStates:[],states:[],transitions:[],position:{}}}function s(t){const n=t.split(/\r?\n/);let i=[],e=[],s=[],o=[];const a=[];let r=null;const c={states:0,initials:0,accepting:0,alphabet:0,transitions:0};for(let l=0;l<n.length;l++){const t=n[l].replace(/\s/g,"");if(0!==t.length)if("#"===t[0]){if(r=t.substr(1),void 0===c[r])throw new Error("Line "+(l+1).toString()+": invalid section name "+r+". Must be one of: states, initials,                                 accepting, alphabet, transitions.");if(c[r]+=1,c[r]>1)throw new Error(`Line ${l+1}: duplicate section name ${r}.`)}else{if(null==r)throw new Error("Line "+(l+1).toString()+": no #section declared.                                 Add one section: states, initial, accepting,                                 alphabet, transitions.");if("states"===r)i=i.concat(t.split(";"));else if("initials"===r)e=e.concat(t.split(";"));else if("accepting"===r)s=s.concat(t.split(";"));else if("alphabet"===r)o=o.concat(t.split(";"));else if("transitions"===r){const n=t.split(";");for(const t of n){const n=t.split(":"),i=n[0],e=n[1].split(">"),s=e[0].split(",");a.push({fromState:i,toState:e[1],symbols:s})}}}}for(const l in c)if(1!==c[l])throw new Error("Specification missing #"+c[l]+" section.");const p={alphabet:[],initialStates:[],acceptingStates:[],states:[],transitions:[],position:{}};return p.states=i,p.initialStates=e,p.alphabet=o,p.acceptingStates=s,p.transitions=a,p}function o(t){const n=["digraph finite_state_machine {","  rankdir=LR;"],i=["  node [shape = doublecircle];"];let e=0,s=[];for(e=0;e<t.acceptingStates.length;e++)i.push(t.acceptingStates[e].toString());return i.push(";"),i.length>2&&n.push(i.join(" ")),n.push("  node [shape = circle];"),e=0,t.initialStates.forEach(t=>{n.push(`  secret_node${e} [style=invis, shape=point]`);const i=[`  secret_node${e} ->`];i.push(t),i.push("[style=bold];"),n.push(i.join(" ")),e++}),t.transitions.forEach(i=>{let e=!1;t.initialStates.forEach(t=>{if(t===i.toState)return s=[" "],s.push(i.toState),s.push("->"),s.push(i.fromState),s.push("["),s.push("label ="),s.push('"'+i.symbols.join(",")+'"'),s.push(" dir = back];"),n.push(s.join(" ")),e=!0,!0}),e||(s=[" "],s.push(i.fromState.toString()),s.push("->"),s.push(i.toState.toString()),s.push("["),s.push("label ="),s.push('"'+i.symbols.join(",")+'"'),s.push(" ];"),n.push(s.join(" ")))}),n.push("}"),n.join("\n").replace(/\$/g,"$")}function a(t){return"string"==typeof t?s(t):t}i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){return s})),i.d(n,"b",(function(){return o})),i.d(n,"d",(function(){return a}))},OS2g:function(t,n,i){"use strict";i.d(n,"a",(function(){return s})),i.d(n,"b",(function(){return o}));var e=i("vOrQ");let s=(()=>{class t{transform(t,n){var i;const e=(t||"").split("<>");return"class"===n?(e.find(t=>!t.includes(":"))||"").trim():null===(i=(e.find(t=>t.includes(":"))||"").trim().match(/([\w-]+)\s*:([^;]+)/gm)||[])||void 0===i?void 0:i.reduce((t,n)=>{const i=n.split(":"),e=i[0].trim(),s=i[1].trim();return t[e]=s,t},{})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e["\u0275\u0275definePipe"]({name:"css",type:t,pure:!0}),t})(),o=(()=>{class t{}return t.\u0275mod=e["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=e["\u0275\u0275defineInjector"]({factory:function(n){return new(n||t)}}),t})()}}]);