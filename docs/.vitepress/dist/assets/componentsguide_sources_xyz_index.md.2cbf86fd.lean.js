import{r as a,d as n,o as s,c as t,e,j as o,b as p,g as l,t as c,w as u,F as r,a as i}from"./app.6d9b5d69.js";const k={setup:()=>({center:a([40,40]),projection:a("EPSG:4326"),zoom:a(8),rotation:a(0),selected:a("https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png")})},d=p("option",{value:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"},"OSM",-1),g=p("option",{value:"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"},"GOOGLE",-1);k.render=function(a,i,k,h,m,y){const f=n("ol-view"),q=n("ol-source-xyz"),z=n("ol-tile-layer"),v=n("ol-map");return s(),t(r,null,[e(p("select",{"onUpdate:modelValue":i[1]||(i[1]=a=>h.selected=a)},[d,g],512),[[o,h.selected]]),l(" "+c(h.selected)+" ",1),p(v,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px"}},{default:u((()=>[p(f,{ref:"view",center:h.center,rotation:h.rotation,zoom:h.zoom,projection:h.projection},null,8,["center","rotation","zoom","projection"]),p(z,null,{default:u((()=>[p(q,{url:h.selected},null,8,["url"])])),_:1})])),_:1})],64)};const h=i('',9),m=i('',27),y='{"title":"ol-source-xyz","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Properties","slug":"properties"}],"relativePath":"componentsguide/sources/xyz/index.md","lastUpdated":1624275977753}',f={};const q=Object.assign(f,{expose:[],setup:function(a){return(a,n)=>(s(),t("div",null,[h,p(k),m]))}});export default q;export{y as __pageData};
