(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{246:function(e,t,n){e.exports=n(247)},247:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(5),o=n(6),c=n(13),i=n(19),s=n(14),l=n(75),u=n.n(l),f=n(224),d=n.n(f);n(252);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(s.a)(e);if(t){var r=Object(s.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var v=n(272),p=function(e){Object(c.a)(n,e);var t=m(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).videoRef=u.a.createRef(),e.canvasRef=u.a.createRef(),e.state={model:null},e.runInference=function(){var t=e.videoRef.current,n=e.canvasRef.current,a=n.getContext("2d");navigator.mediaDevices.getUserMedia({video:!0}).then(function(r){t.srcObject=r,t.play(),e.processVideoFrame(t,n,a)}).catch(function(e){console.log("Error accessing camera: ",e)})},e.processVideoFrame=function(t,n,r){if(!t.paused&&!t.ended){r.drawImage(t,0,0,n.width,n.height);var o=e.state.model.inputs[0].shape.slice(1,3),c=Object(a.a)(o,2),i=c[0],s=c[1],l=v.tidy(function(){return v.image.resizeBilinear(v.browser.fromPixels(n),[i,s]).div(255).expandDims(0)});e.state.model.executeAsync(l).then(function(o){var c="16px sans-serif";r.font=c,r.textBaseline="top";var i=Object(a.a)(o,4),s=i[0],l=i[1],u=i[2],f=i[3],d=s.dataSync(),m=l.dataSync(),p=u.dataSync(),h=f.dataSync()[0];v.dispose(o);for(var y=0;y<h;++y){var g=d.slice(4*y,4*(y+1)),w=Object(a.a)(g,4),R=w[0],b=w[1],F=w[2],j=w[3];R*=n.width,F*=n.width,b*=n.height;var x=F-R,O=(j*=n.height)-b,E=m[y].toFixed(2);if(!(E<=.3||3!==p[y])){r.strokeStyle="#00FFFF",r.lineWidth=4,r.strokeRect(R,b,x,O),r.fillStyle="#00FFFF";var S=r.measureText("pothole:"+E).width,D=parseInt(c,10);r.fillRect(R,b,S+4,D+4),r.fillStyle="#000000",r.fillText("pothole:"+E,R,b)}}requestAnimationFrame(function(){return e.processVideoFrame(t,n,r)})})}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.loadGraphModel("/web_model/model.json").then(function(t){e.setState({model:t}),e.runInference()})}},{key:"render",value:function(){return u.a.createElement("div",{className:"Dropzone-page"},this.state.model?u.a.createElement(u.a.Fragment,null,u.a.createElement("video",{ref:this.videoRef,className:"Dropzone-video",autoPlay:!0,muted:!0}),u.a.createElement("canvas",{ref:this.canvasRef,id:"canvas",width:"640",height:"480",className:"Dropzone-canvas"})):u.a.createElement("div",{className:"Dropzone"},"Loading model..."))}}]),n}(u.a.Component),h=document.getElementById("root");d.a.render(u.a.createElement(p,null),h)},252:function(e,t,n){},257:function(e,t){},258:function(e,t){},266:function(e,t){},269:function(e,t){},270:function(e,t){},271:function(e,t){}},[[246,1,2]]]);
//# sourceMappingURL=main.bca66dce.chunk.js.map