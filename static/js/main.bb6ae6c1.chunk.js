(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){},19:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r.n(o),s=r(7),n=r.n(s),i=(r(15),r(1)),l=r(2),c=r(4),d=r(3),h=r(5),p=(r(17),r(8)),u=r.n(p),m=function(e){function t(e){var r;Object(i.a)(this,t),r=Object(c.a)(this,Object(d.a)(t).call(this,e));var o=e.event_data.isMorning?"am-btn":"pm-btn";return r.state={timeLong:e.event_data.timeLong,btn:o},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"matchLocation",value:function(){var e=this.props.filterObj.location;if(""!==e&&(e=e.toLowerCase().trim(),!new RegExp(".*"+e+".*").test(this.props.event_data.videoStream.toLowerCase().trim())))return!1;return!0}},{key:"matchDate",value:function(){var e=this.props.filterObj.date,t=this.props.event_data.date;if(e){if(console.log("date: ",t.getDate()),e.day!==t.getDate())return!1;if(e.month!==t.getMonth()+1)return!1;if(e.year!==t.getFullYear())return!1}return!0}},{key:"shouldRender",value:function(){if(!this.matchLocation())return!1;if(!this.matchDate())return!1;var e=this.props.filterObj.score,t=this.props.filterObj.prediction;if(0===e||""===t||""===t.trim())return!0;var r=this.props.event_data.predictions;t=t.toLowerCase().trim();var o,a,s=new RegExp(".*"+t+".*");for(var n in r)for(var i in r[n].scores)if(o=r[n].scores[i].score,a=r[n].scores[i].label.toLowerCase().trim(),s.test(a)&&o>=e)return!0;return!1}},{key:"render",value:function(){var e=this,t="timestamp cursorPointer table "+(-1!==this.props.imageIndex.indexOf(this.props.index)?"open":"")+" "+this.state.btn;return this.shouldRender()?a.a.createElement("label",{className:"timeBtn"},a.a.createElement("div",{className:t,onClick:function(){return e.props.handleImage(e.props.index)}},a.a.createElement("div",null,this.state.timeLong))):null}}]),t}(o.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"w-154"},a.a.createElement("h1",{className:"title"},"Date"),a.a.createElement("ol",{className:"timeBtnList"},this.props.event_data.map(function(t){return a.a.createElement("li",{key:t.timestamp},a.a.createElement(m,{event_data:t,index:parseInt(e.props.event_data.indexOf(t)),handleImage:e.props.handleImage,imageIndex:e.props.imageIndex,filterObj:e.props.filterObj}))})))}}]),t}(o.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="checkmark "+this.props.checkmarkClass[this.props.index];return a.a.createElement(o.Fragment,null,a.a.createElement("div",{className:"relative cursorPointer",onClick:function(){return e.props.handleCheck(e.props.index)}},this.props.s.label,a.a.createElement("svg",{version:"1.1",id:"Capa_1",className:t,x:"0px",y:"0px",viewBox:"0 0 191.667 191.667",style:{enableBackground:"new 0 0 191.667 191.667"}},a.a.createElement("path",{d:"M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z\r M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685\r c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971\r l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969\r C156.146,65.765,156.146,74.362,150.862,79.646z"}))),a.a.createElement("div",null,this.props.s.score))}}]),t}(o.Component),f=function(e){function t(e){var r;Object(i.a)(this,t),r=Object(c.a)(this,Object(d.a)(t).call(this,e));var o=e.event_data.isMorning?"am-border":"pm-border",a=e.prediction.boundingBox,s={top:100*a.top+"%",left:100*a.left+"%",height:100*a.height+"%",width:100*a.width+"%"};return r.state={borderClass:"prediction cursorPointer "+o,styleBorder:s,checkmarkClass:new Array(e.prediction.scores.length).fill("")},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleCheck",value:function(e){var t=new Array(this.props.prediction.scores.length).fill("");""===this.state.checkmarkClass[e]&&(t[e]="open"),this.setState({checkmarkClass:t})}},{key:"render",value:function(){var e=this,t=this.props.prediction.scores;return a.a.createElement("div",{className:this.state.borderClass,style:this.state.styleBorder},a.a.createElement("div",{className:"scoreContainer"},a.a.createElement("h1",null,"Scores"),a.a.createElement("ul",null,t.map(function(r){return a.a.createElement("li",{className:"flex",key:t.indexOf(r)},a.a.createElement(g,{s:r,checkmarkClass:e.state.checkmarkClass,index:t.indexOf(r),handleCheck:e.handleCheck.bind(e)}))}))))}}]),t}(o.Component),v=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={event_data:e.event_data[e.index]},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"matchLocation",value:function(){var e=this.props.filterObj.location;if(""!==e&&(e=e.toLowerCase().trim(),!new RegExp(".*"+e+".*").test(this.state.event_data.videoStream.toLowerCase().trim())))return!1;return!0}},{key:"shouldRender",value:function(){if(!this.matchLocation())return!1;var e=this.props.filterObj.score,t=this.props.filterObj.prediction;if(0===e||""===t||""===t.trim())return!0;var r=this.state.event_data.predictions;t=t.toLowerCase().trim();var o,a,s=new RegExp(".*"+t+".*");for(var n in r)for(var i in r[n].scores)if(o=r[n].scores[i].score,a=r[n].scores[i].label.toLowerCase().trim(),s.test(a)&&o>=e)return!0;return!1}},{key:"render",value:function(){var e=this,t=this.state.event_data,r=t.predictions;return this.shouldRender()?a.a.createElement("div",{className:"column"},a.a.createElement("h1",{className:"flex"},a.a.createElement("div",null,t.videoStream+" - "+t.timeShort),a.a.createElement("svg",{className:"cursorPointer",onClick:function(){return e.props.handleImage(e.props.index)},version:"1.1",viewBox:"0 0 15.642 15.642",enableBackground:"new 0 0 15.642 15.642",width:"15px",height:"15px"},a.a.createElement("path",{fillRule:"evenodd",d:"M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z",fill:"#FFFFFF"}))),a.a.createElement("div",{className:"imageContainer"},a.a.createElement("img",{src:t.imageSource,className:"w-400",alt:"object"}),a.a.createElement("div",null,r.map(function(e){return a.a.createElement(f,{key:r.indexOf(e),prediction:e,event_data:t})})))):null}}]),t}(o.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"flex-grow-1"},a.a.createElement("h1",{className:"title"},"Image"),a.a.createElement("ol",{className:"imageContainerList flex"},this.props.imageIndex.map(function(t){return a.a.createElement("li",{key:t},a.a.createElement(v,{index:t,event_data:e.props.event_data,handleImage:e.props.handleImage,filterObj:e.props.filterObj}))})))}}]),t}(o.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"filter w-154"},a.a.createElement("h1",{className:"title"},"Filter"),a.a.createElement("div",{className:"table"},a.a.createElement("div",null,"Location"),a.a.createElement("input",{placeholder:"Bus Stop",type:"text",pattern:"[A-Za-z]*",onChange:function(t){return e.props.handleLocation(t.target.value)}})),a.a.createElement("div",{className:"table"},a.a.createElement("div",null,"Label"),a.a.createElement("input",{placeholder:"Bike",type:"text",pattern:"[A-Za-z]*",onChange:function(t){return e.props.handlePrediction(t.target.value)}})),a.a.createElement("div",{className:"table"},a.a.createElement("div",null,"Score (>)"),a.a.createElement("input",{placeholder:"10",type:"number",pattern:"[0-9]*",onChange:function(t){return e.props.handleScore(t.target.value)}})),a.a.createElement("div",{className:"column"},a.a.createElement("div",{style:{textAlign:"center"}},"Date"),a.a.createElement("input",{type:"date",onChange:function(t){return e.props.handleDate(t.target.value)}})))}}]),t}(o.Component),C=function(e){function t(){var e;Object(i.a)(this,t),e=Object(c.a)(this,Object(d.a)(t).call(this));var r=u.a.mockResponse.events.slice();return r=e.sortByKey(r,"timestamp"),e.readableDatetime(r),e.state={event_data:r,imageIndex:[],score:0,prediction:"",location:"",date:null},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"sortByKey",value:function(e,t){return e.sort(function(e,r){var o=e[t],a=r[t];return o<a?-1:o>a?1:0})}},{key:"sortNumber",value:function(e,t){return(e=parseInt(e))-(t=parseInt(t))}},{key:"readableDatetime",value:function(e){var t,r;for(r in e)t=new Date(1e3*e[r].timestamp),e[r].timeShort=this.convert_12_hour(t),e[r].isMorning="AM"===e[r].timeShort.slice(-2),e[r].timeLong=this.convertLongDate(t),e[r].date=t}},{key:"convert_12_hour",value:function(e){var t=e.getHours(),r=e.getMinutes(),o=r>=10?r:"0"+r;return t<12?t+":"+o+" AM":12===t?t+":"+o+" PM":t>12?t%12+":"+o+" PM":void 0}},{key:"convertLongDate",value:function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+", "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}},{key:"handleImage",value:function(e){var t=this.state.imageIndex.slice(),r=t.indexOf(e);-1===r?t.push(e):t.splice(r,1),t.sort(this.sortNumber),this.setState({imageIndex:t})}},{key:"handleScore",value:function(e){e?this.setState({score:e}):this.setState({score:0})}},{key:"handlePrediction",value:function(e){e?this.setState({prediction:e}):this.setState({prediction:""})}},{key:"handleLocation",value:function(e){e?this.setState({location:e}):this.setState({location:""})}},{key:"handleDate",value:function(e){if(e){var t=parseInt(e.slice(0,4)),r=parseInt(e.slice(5,7)),o=parseInt(e.slice(8));this.setState({date:{year:t,month:r,day:o}})}else this.setState({date:null})}},{key:"render",value:function(){return a.a.createElement(o.Fragment,null,a.a.createElement(x,{handleScore:this.handleScore.bind(this),handlePrediction:this.handlePrediction.bind(this),handleLocation:this.handleLocation.bind(this),handleDate:this.handleDate.bind(this)}),a.a.createElement(b,{event_data:this.state.event_data,handleImage:this.handleImage.bind(this),imageIndex:this.state.imageIndex,filterObj:{score:this.state.score,prediction:this.state.prediction,location:this.state.location,date:this.state.date}}),a.a.createElement(y,{event_data:this.state.event_data,handleImage:this.handleImage.bind(this),imageIndex:this.state.imageIndex,filterObj:{score:this.state.score,prediction:this.state.prediction,location:this.state.location,date:this.state.date}}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t){e.exports={mockResponse:{events:[{videoStream:"Warriors Game",timestamp:1506866940,imageSource:"https://uproxx.files.wordpress.com/2016/04/draymond-green-steph-curry.jpg",predictions:[{boundingBox:{top:.228,left:.3723,height:.314,width:.135},scores:[{label:"Steph Curry",score:3},{label:"Draymond Green",score:94}]},{boundingBox:{top:.0951,left:.615,height:.311,width:.135},scores:[{label:"Steph Curry",score:97},{label:"Draymond Green",score:2}]}]},{videoStream:"Warriors Game",timestamp:1506867e3,imageSource:"https://uproxx.files.wordpress.com/2016/04/draymond-green-steph-curry.jpg",predictions:[{boundingBox:{top:.228,left:.3723,height:.314,width:.135},scores:[{label:"Steph Curry",score:3},{label:"Draymond Green",score:94}]},{boundingBox:{top:.0951,left:.615,height:.311,width:.135},scores:[{label:"Steph Curry",score:97},{label:"Draymond Green",score:2}]}]},{videoStream:"Bus Stop",timestamp:1506867254,imageSource:"http://media.bizj.us/view/img/10183383/passenger-boarding-bus*1200xx3948-2221-0-220.jpg",predictions:[{boundingBox:{top:0,left:.068,height:.877,width:.811},scores:[{label:"Bus",score:99},{label:"Bike",score:3},{label:"Person",score:1}]},{boundingBox:{top:.469,left:.736,height:.34,width:.193},scores:[{label:"Bus",score:9},{label:"Bike",score:83},{label:"Person",score:2}]},{boundingBox:{top:.299,left:.395,height:.543,width:.104},scores:[{label:"Bus",score:6},{label:"Bike",score:3},{label:"Person",score:92}]}]},{videoStream:"Vet Hospital",timestamp:1506867328,imageSource:"https://cdn.shopify.com/s/files/1/0344/6469/products/New-Cute-Pet-Cat-Costume-Cartoon-Funny-Pet-Cat-Clothes-Hot-Puppy-Clothing-Doctor-Uniform-Hat_copy_1024x1024.jpg?v=1504800100",predictions:[{boundingBox:{top:.113,left:.254,height:.754,width:.498},scores:[{label:"Doctor Cat",score:99},{label:"Doctor Dog",score:10}]}]},{videoStream:"Warriors Game",timestamp:1506867500,imageSource:"https://uproxx.files.wordpress.com/2016/04/draymond-green-steph-curry.jpg",predictions:[{boundingBox:{top:.228,left:.3723,height:.314,width:.135},scores:[{label:"Steph Curry",score:3},{label:"Draymond Green",score:94}]},{boundingBox:{top:.0951,left:.615,height:.311,width:.135},scores:[{label:"Steph Curry",score:97},{label:"Draymond Green",score:2}]}]},{videoStream:"Warriors Game",timestamp:1506869500,imageSource:"https://uproxx.files.wordpress.com/2016/04/draymond-green-steph-curry.jpg",predictions:[{boundingBox:{top:.228,left:.3723,height:.314,width:.135},scores:[{label:"Steph Curry",score:3},{label:"Draymond Green",score:94}]},{boundingBox:{top:.0951,left:.615,height:.311,width:.135},scores:[{label:"Steph Curry",score:97},{label:"Draymond Green",score:2}]}]},{videoStream:"Vet Hospital",timestamp:1506869555,imageSource:"https://cdn.shopify.com/s/files/1/0344/6469/products/New-Cute-Pet-Cat-Costume-Cartoon-Funny-Pet-Cat-Clothes-Hot-Puppy-Clothing-Doctor-Uniform-Hat_copy_1024x1024.jpg?v=1504800100",predictions:[{boundingBox:{top:.113,left:.254,height:.754,width:.498},scores:[{label:"Doctor Cat",score:99},{label:"Doctor Dog",score:10}]}]},{videoStream:"Warriors Game",timestamp:1506869600,imageSource:"https://uproxx.files.wordpress.com/2016/04/draymond-green-steph-curry.jpg",predictions:[{boundingBox:{top:.228,left:.3723,height:.314,width:.135},scores:[{label:"Steph Curry",score:3},{label:"Draymond Green",score:94}]},{boundingBox:{top:.0951,left:.615,height:.311,width:.135},scores:[{label:"Steph Curry",score:97},{label:"Draymond Green",score:2}]}]},{videoStream:"Warriors Game",timestamp:1506873678,imageSource:"https://uproxx.files.wordpress.com/2016/04/draymond-green-steph-curry.jpg",predictions:[{boundingBox:{top:.228,left:.3723,height:.314,width:.135},scores:[{label:"Steph Curry",score:3},{label:"Draymond Green",score:94}]},{boundingBox:{top:.0951,left:.615,height:.311,width:.135},scores:[{label:"Steph Curry",score:97},{label:"Draymond Green",score:2}]}]},{videoStream:"Bus Stop",timestamp:1506873702,imageSource:"http://media.bizj.us/view/img/10183383/passenger-boarding-bus*1200xx3948-2221-0-220.jpg",predictions:[{boundingBox:{top:0,left:.068,height:.877,width:.811},scores:[{label:"Bus",score:99},{label:"Bike",score:3},{label:"Person",score:1}]},{boundingBox:{top:.469,left:.736,height:.34,width:.193},scores:[{label:"Bus",score:9},{label:"Bike",score:83},{label:"Person",score:2}]},{boundingBox:{top:.299,left:.395,height:.543,width:.104},scores:[{label:"Bus",score:6},{label:"Bike",score:3},{label:"Person",score:92}]}]},{videoStream:"Vet Hospital",timestamp:1506873872,imageSource:"https://cdn.shopify.com/s/files/1/0344/6469/products/New-Cute-Pet-Cat-Costume-Cartoon-Funny-Pet-Cat-Clothes-Hot-Puppy-Clothing-Doctor-Uniform-Hat_copy_1024x1024.jpg?v=1504800100",predictions:[{boundingBox:{top:.113,left:.254,height:.754,width:.498},scores:[{label:"Doctor Cat",score:99},{label:"Doctor Dog",score:10}]}]},{videoStream:"Bus Stop",timestamp:1506873999,imageSource:"http://media.bizj.us/view/img/10183383/passenger-boarding-bus*1200xx3948-2221-0-220.jpg",predictions:[{boundingBox:{top:0,left:.068,height:.877,width:.811},scores:[{label:"Bus",score:99},{label:"Bike",score:3},{label:"Person",score:1}]},{boundingBox:{top:.469,left:.736,height:.34,width:.193},scores:[{label:"Bus",score:9},{label:"Bike",score:83},{label:"Person",score:2}]},{boundingBox:{top:.299,left:.395,height:.543,width:.104},scores:[{label:"Bus",score:6},{label:"Bike",score:3},{label:"Person",score:92}]}]},{videoStream:"Vet Hospital",timestamp:1506874236,imageSource:"https://cdn.shopify.com/s/files/1/0344/6469/products/New-Cute-Pet-Cat-Costume-Cartoon-Funny-Pet-Cat-Clothes-Hot-Puppy-Clothing-Doctor-Uniform-Hat_copy_1024x1024.jpg?v=1504800100",predictions:[{boundingBox:{top:.113,left:.254,height:.754,width:.498},scores:[{label:"Doctor Cat",score:99},{label:"Doctor Dog",score:10}]}]},{videoStream:"Warriors Game",timestamp:1506874378,imageSource:"https://uproxx.files.wordpress.com/2016/04/draymond-green-steph-curry.jpg",predictions:[{boundingBox:{top:.228,left:.3723,height:.314,width:.135},scores:[{label:"Steph Curry",score:3},{label:"Draymond Green",score:94}]},{boundingBox:{top:.0951,left:.615,height:.311,width:.135},scores:[{label:"Steph Curry",score:97},{label:"Draymond Green",score:2}]}]},{videoStream:"Bus Stop",timestamp:1506875012,imageSource:"http://media.bizj.us/view/img/10183383/passenger-boarding-bus*1200xx3948-2221-0-220.jpg",predictions:[{boundingBox:{top:0,left:.068,height:.877,width:.811},scores:[{label:"Bus",score:99},{label:"Bike",score:3},{label:"Person",score:1}]},{boundingBox:{top:.469,left:.736,height:.34,width:.193},scores:[{label:"Bus",score:9},{label:"Bike",score:83},{label:"Person",score:2}]},{boundingBox:{top:.299,left:.395,height:.543,width:.104},scores:[{label:"Bus",score:6},{label:"Bike",score:3},{label:"Person",score:92}]}]},{videoStream:"Vet Hospital",timestamp:1506875478,imageSource:"https://cdn.shopify.com/s/files/1/0344/6469/products/New-Cute-Pet-Cat-Costume-Cartoon-Funny-Pet-Cat-Clothes-Hot-Puppy-Clothing-Doctor-Uniform-Hat_copy_1024x1024.jpg?v=1504800100",predictions:[{boundingBox:{top:.113,height:.754,width:.498},scores:[{label:"Doctor Cat",score:99},{label:"Doctor Dog",score:10}]}]},{videoStream:"Vet Hospital",timestamp:1506903236,imageSource:"https://cdn.shopify.com/s/files/1/0344/6469/products/New-Cute-Pet-Cat-Costume-Cartoon-Funny-Pet-Cat-Clothes-Hot-Puppy-Clothing-Doctor-Uniform-Hat_copy_1024x1024.jpg?v=1504800100",predictions:[{boundingBox:{top:.113,left:.254,height:.754,width:.498},scores:[{label:"Doctor Cat",score:99},{label:"Doctor Dog",score:10}]}]},{videoStream:"Vet Hospital",timestamp:1506914790,imageSource:"https://cdn.shopify.com/s/files/1/0344/6469/products/New-Cute-Pet-Cat-Costume-Cartoon-Funny-Pet-Cat-Clothes-Hot-Puppy-Clothing-Doctor-Uniform-Hat_copy_1024x1024.jpg?v=1504800100",predictions:[{boundingBox:{top:.113,left:.254,height:.754,width:.498},scores:[{label:"Doctor Cat",score:99},{label:"Doctor Dog",score:10}]}]},{videoStream:"Bus Stop",timestamp:1506917012,imageSource:"http://media.bizj.us/view/img/10183383/passenger-boarding-bus*1200xx3948-2221-0-220.jpg",predictions:[{boundingBox:{top:0,left:.068,height:.877,width:.811},scores:[{label:"Bus",score:99},{label:"Bike",score:3},{label:"Person",score:1}]},{boundingBox:{top:.469,left:.736,height:.34,width:.193},scores:[{label:"Bus",score:9},{label:"Bike",score:83},{label:"Person",score:2}]},{boundingBox:{top:.299,left:.395,height:.543,width:.104},scores:[{label:"Bus",score:6},{label:"Bike",score:3},{label:"Person",score:92}]}]},{videoStream:"Warriors Game",timestamp:1506924378,imageSource:"https://uproxx.files.wordpress.com/2016/04/draymond-green-steph-curry.jpg",predictions:[{boundingBox:{top:.228,left:.3723,height:.314,width:.135},scores:[{label:"Steph Curry",score:3},{label:"Draymond Green",score:94}]},{boundingBox:{top:.0951,left:.615,height:.311,width:.135},scores:[{label:"Steph Curry",score:97},{label:"Draymond Green",score:2}]}]},{videoStream:"Bus Stop",timestamp:1506927366,imageSource:"http://media.bizj.us/view/img/10183383/passenger-boarding-bus*1200xx3948-2221-0-220.jpg",predictions:[{boundingBox:{top:0,left:.068,height:.877,width:.811},scores:[{label:"Bus",score:99},{label:"Bike",score:3},{label:"Person",score:1}]},{boundingBox:{top:.469,left:.736,height:.34,width:.193},scores:[{label:"Bus",score:9},{label:"Bike",score:83},{label:"Person",score:2}]},{boundingBox:{top:.299,left:.395,height:.543,width:.104},scores:[{label:"Bus",score:6},{label:"Bike",score:3},{label:"Person",score:92}]}]}]}}},9:function(e,t,r){e.exports=r(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.bb6ae6c1.chunk.js.map