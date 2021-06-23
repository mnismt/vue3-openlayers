import{r as n,d as s,o as a,c as t,w as p,b as o,a as e,g as l}from"./app.6d9b5d69.js";const c={setup:()=>({center:n([116.54875,40.45064]),projection:n("EPSG:4326"),zoom:n(17),rotation:n(0),radius:n(40),strokeWidth:n(10),strokeColor:n("red")})};c.render=function(n,e,l,c,u,i){const r=s("ol-view"),k=s("ol-source-osm"),g=s("ol-tile-layer"),d=s("ol-geom-multi-line-string"),m=s("ol-style-stroke"),h=s("ol-style"),f=s("ol-feature"),q=s("ol-source-vector"),y=s("ol-vector-layer"),v=s("ol-map");return a(),t(v,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:p((()=>[o(r,{ref:"view",center:c.center,rotation:c.rotation,zoom:c.zoom,projection:c.projection},null,8,["center","rotation","zoom","projection"]),o(g,null,{default:p((()=>[o(k)])),_:1}),o(y,null,{default:p((()=>[o(q,null,{default:p((()=>[o(f,null,{default:p((()=>[o(d,{coordinates:[[[116.544921,40.451633],[116.545264,40.451649],[116.545865,40.451698],[116.546144,40.451551],[116.546337,40.451274],[116.546788,40.451143],[116.547324,40.451078]],[[116.547839,40.450719],[116.54844,40.450506],[116.548933,40.450604],[116.549448,40.450604],[116.550242,40.450376],[116.550865,40.450163],[116.551702,40.449935],[116.552581,40.449576]]]},null,8,["coordinates"]),o(h,null,{default:p((()=>[o(m,{color:c.strokeColor,width:c.strokeWidth},null,8,["color","width"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})};const u=e('',6),i=o("h2",{id:"properties"},[o("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),l(" Properties")],-1),r=o("h1",{id:"coordinates"},[o("a",{class:"header-anchor",href:"#coordinates","aria-hidden":"true"},"#"),l(" coordinates")],-1),k=o("ul",null,[o("li",null,[o("strong",null,"Type"),l(": "),o("code",null,"number[][][]"),l(" An array of lines, each of which is a line string in units of the map's projection.")])],-1),g='{"title":"ol-geom-multi-line-string","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/geometries/geommultilinestring/index.md","lastUpdated":1624436017946}',d={};const m=Object.assign(d,{expose:[],setup:function(n){return(n,s)=>(a(),t("div",null,[u,o(c),i,r,k]))}});export default m;export{g as __pageData};
