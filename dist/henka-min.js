!function(a){a.define||(a.define=function(a,b,c){var d=[];if("string"==typeof a)d[a]=c;else if("object"==typeof a){c=b,b=a;var e=[];for(i=0;i<b.length;i++)e.push(b[i]);c.apply(c,e)}})}(window);define("henka",[],function(){var e=function(e,t,n){var r={props:{nodes:[],lastWidth:0,body:{},currentBreak:"",originalHenka:e.henka||{}},init:function(){r.props.body=t.getElementsByTagName("body")[0],r.core.update(),r.tools.attach()},core:{set:function(e){var t=JSON.parse(e.getAttribute("data-henka")),i="",s=e.className.split(" ");if(t)for(var o=t.length-1;o>=0;o--){r.core.check(t[o])&&(i="bp"+t[o]);var u=r.tools.indexOf(s,"bp"+t[o]);u>=0&&s.splice(u,1)}i.length>0?(s.push(i),r.props.currentBreak=i):r.props.currentBreak=n,e.className!=s.join(" ")&&(e.className=s.join(" ").replace(/^\s+|\s+$/g,""),typeof yobidashi!="undefined"&&yobidashi.pub("/henka/updated"))},update:function(){r.core.set(r.props.body),typeof yobidashi!="undefined"&&yobidashi.pub("/henka/resized")},check:function(e){return r.tools.innerWidth()<=e}},tools:{indexOf:function(e,t){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t);for(var n=e.length-1;n>=0;n--)if(t===e[n])return n;return-1},innerWidth:function(){return e.innerWidth||t.documentElement.clientWidth},isMobileDevice:function(){var t=0,n=["iPad","iPhone","iPod","Android","webOS","BlackBerry","Windows Phone"];for(;t<n.length;t++)if(e.navigator.platform===n[t])return!0;return!1},attach:function(){var t=new Date("2000-01-01T12:00:00.000Z"),n=!1,i=100,s=!1,o=function(){s===!1&&(s=!0,e.setTimeout(function(){r.core.update()},0))},u=function(){new Date-t<i?e.setTimeout(u,0):(n=!1,s=!1,r.tools.isMobileDevice()||o())},a=function(){var s=r.tools.innerWidth();r.props.lastWidth!=s&&(r.tools.isMobileDevice()&&o(),t=new Date,n===!1&&(n=!0,e.setTimeout(u,i))),r.props.lastWidth=s};e.addEventListener?e.addEventListener("resize",a,!1):e.attachEvent("onresize",a)}}},i=e.setInterval(function(){t.readyState==="complete"&&(e.clearInterval(i),r.init())},10);return r.api=function(){return{noConflict:function(){return e.henka=r.props.originalHenka,r.api},currentBreak:function(){return r.props.currentBreak}}}(),r.api}(window,document);return window.henka=e,e});define(["henka"], function (henka) { return henka; });