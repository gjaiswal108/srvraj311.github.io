(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{14:function(e,t,a){},20:function(e){e.exports=JSON.parse('[{"id":"1","title":"Sourabh","note":"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."},{"id":"2","title":"John Doe","note":"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."},{"id":"3","title":"favourites","note":"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a grne idea at a time to your broader argument. think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."},{"id":"4","title":"Holaaaaa","note":"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."},{"id":"5","title":"Wacom","note":"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."},{"id":"6","title":"Apple and Google","note":"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."}]')},21:function(e){e.exports=JSON.parse('[{"id":"1","time":"12:45","instance":"am","date":"25 December","message":"Go to Hell","colour":"#FFFFFF","alarm":"yes"},{"id":"2","time":"01:25","instance":"pm","date":"28 July","message":"Give food to the fishes","colour":"#E4BEA8","alarm":"no"}]')},23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(5),i=a(4),o=a(0),c=a.n(o),l=a(10),u=a(1),m=a(19),d=a.n(m),p=a(20),h=(a(14),function(e){var t=e.JSONnotes.map((function(t){function a(){return c.a.createElement("div",{key:n,className:"cardSmall"},c.a.createElement("div",{className:"noteName"},r,c.a.createElement("i",{onClick:function(t){return e.deleteMe(n,r,s)},className:"fas fa-trash"}),c.a.createElement("i",{onClick:function(t){return e.editNote(n,r,s)},className:"fas fa-edit"})),c.a.createElement("div",{className:"savedNotes",id:"style-10"},s))}var n=t.id,r=t.title,s=t.note,i=e.searchText.toLowerCase();return""===i?a():""===i||-1===r.toLowerCase().indexOf(i)&&-1===s.toLowerCase().indexOf(i)?void 0:a()}));return c.a.createElement("div",{className:"container"},t)}),f=(a(28),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"toolbox"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("textarea",{id:"searchBox",type:"text",onChange:this.props.searchNotes,placeholder:"Type Something to Search"})),c.a.createElement("li",{onClick:this.props.clearSearchbox}," ",c.a.createElement("i",{className:"fas fa-times"}," ")," ")))}}]),a}(o.Component)),g=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={deletedOne:0,searchText:""},e.deleteMe=function(t,a,n){e.props.JSONnotes.map((function(r,s){return r.id===t&&r.title===a&&r.note===n&&(e.props.bin.push(r),console.log(e.props.bin),e.props.JSONnotes.splice(s,1)),e.setState({deletedOne:s})}))},e.searchNotes=function(t){e.setState({searchText:t.target.value})},e.clearSearchbox=function(){document.getElementById("searchBox").value="",e.setState({searchText:""})},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,Object.assign({clearSearchbox:this.clearSearchbox,searchNotes:this.searchNotes},this.props)),c.a.createElement(h,Object.assign({editMe:this.editMe,deleteMe:this.deleteMe,searchText:this.state.searchText},this.props)))}}]),a}(o.Component),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={userinput:"",titleInput:"",status:"writing",bin:[]},e.titleInputChange=function(t){e.setState({titleInput:t.target.value})},e.userInputChangeHandler=function(t){e.setState({userinput:t.target.value})},e.saveNote=function(){if(""!==e.state.userinput){var t=e.props.JSONnotes.length,a=t+1;e.props.JSONnotes.push({id:a,title:e.state.titleInput,note:e.state.userinput});for(var n=0;n<=t;n++)e.setState({userinput:"",titleInput:"",status:n});e.clearNote(),e.updateNotes()}},e.clearNote=function(){document.getElementById("titleInputBox").value="",document.getElementById("userInputBox").value=""},e.updateNotes=function(){},e.editNote=function(t,a,n){document.getElementById("titleInputBox").value="".concat(a),document.getElementById("userInputBox").value="".concat(n),e.setState({userinput:"".concat(a),titleInput:"".concat(n)})},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"btn-Small",onClick:this.clearNote}," + "),c.a.createElement("p",{className:"heading-1"},"Title"),c.a.createElement("textarea",{type:"text",id:"titleInputBox",onChange:this.titleInputChange,className:"titlebox",placeholder:"Give me a Name"}),c.a.createElement("p",{className:"heading-2"},"enWrite Here"),c.a.createElement("textarea",{type:"text",id:"userInputBox",onChange:this.userInputChangeHandler,className:"inputBox",placeholder:"What's On Your Mind"}),c.a.createElement("div",null,c.a.createElement("button",{className:"button",align:"center",onClick:this.saveNote},"Save"),c.a.createElement("button",{className:"button",onClick:this.clearNote},"Clear"))),c.a.createElement("br",null),c.a.createElement(g,Object.assign({bin:this.state.bin,editNote:this.editNote,userinput:this.state.userinput,JSONnotes:this.props.JSONnotes},this.props)))}}]),a}(o.Component),v=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b,this.props))}}]),a}(o.Component),E=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={JSONnotes:p},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(v,{JSONnotes:this.state.JSONnotes}))}}]),a}(o.Component),N=(a(29),new Date),y=N.getFullYear(),S=N.getMonth()+1,O=N.getDate(),k=N.getHours(),x=N.getMinutes();x<10&&(x="0".concat(x));var C=["January","February","March","April","May","June","July","August","September","October","November","December"][S-1],j="";k>12?j="pm":k<12&&(j="am");var B=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.call(this)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"timeHolder"},c.a.createElement("div",{className:"timeSelector"},c.a.createElement("div",{className:"hourSelector"},c.a.createElement("i",{className:"fas fa-angle-up",onClick:function(t){e.props.increaseHour()}}),c.a.createElement("div",{className:"timeBox"},c.a.createElement("p",null,this.props.hour)),c.a.createElement("i",{className:"fas fa-angle-down",onClick:function(t){e.props.decreaseHour()}})),c.a.createElement("div",{className:"hourSelector"},c.a.createElement("i",{className:"fas fa-angle-up",onClick:function(t){e.props.increaseMinute()}}),c.a.createElement("div",{className:"timeBox"},c.a.createElement("p",null,this.props.minute)),c.a.createElement("i",{className:"fas fa-angle-down",onClick:function(t){e.props.decreaseMinute()}})),c.a.createElement("div",{className:"hourSelector"},c.a.createElement("i",{className:"fas fa-angle-up",onClick:function(t){e.props.toggleInstancee()}}),c.a.createElement("div",{className:"timeBox"},c.a.createElement("p",null,this.props.instance)),c.a.createElement("i",{className:"fas fa-angle-down",onClick:function(t){e.props.toggleInstancee()}}))),c.a.createElement("div",{className:"dateSelector"},c.a.createElement("div",{className:"hourSelector"},c.a.createElement("i",{className:"fas fa-angle-up",onClick:function(t){e.props.increaseDate()}}),c.a.createElement("div",{className:"timeBox"},c.a.createElement("p",null,this.props.date)),c.a.createElement("i",{className:"fas fa-angle-down",onClick:function(t){e.props.decreaseDate()}})),c.a.createElement("div",{className:"hourSelector"},c.a.createElement("i",{className:"fas fa-angle-up",onClick:function(t){e.props.increaseMonth()}}),c.a.createElement("div",{className:"monthBox"},c.a.createElement("p",null,this.props.month)),c.a.createElement("i",{className:"fas fa-angle-down",onClick:function(t){e.props.decreaseMonth()}})),c.a.createElement("div",{className:"hourSelector"},c.a.createElement("i",{className:"fas fa-angle-up",onClick:function(t){e.props.increaseYear()}}),c.a.createElement("div",{className:"yearBox"},c.a.createElement("p",null,this.props.year)),c.a.createElement("i",{className:"fas fa-angle-down",onClick:function(t){e.props.decreaseYear()}}))))}}]),a}(o.Component),J=function(e){return e.ReminderJSON.map((function(e,t){var a=e.id,n=e.time,r=e.instance,s=e.date,i=e.message.slice(0,20)+"..",o=e.colour,l="grey";return"yes"===e.alarm&&(l="#404040"),c.a.createElement("div",{key:a,style:{backgroundColor:"".concat(o)},className:"reminder"},c.a.createElement("div",{className:"reminder-info"},c.a.createElement("p",{className:"time"}," ",n," ",c.a.createElement("span",null,r)),c.a.createElement("p",{className:"date"},s),c.a.createElement("p",{className:"message"},i)),c.a.createElement("div",{className:"reminder-tools"},c.a.createElement("div",null,c.a.createElement("i",{className:"fas fa-trash"}),c.a.createElement("i",{style:{color:"".concat(l)},className:"fas fa-bell"})),c.a.createElement("div",{className:"colour-changer"})))}))},M=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={colors:["#999999","#E4BEA8","#FAE07A","#EEA2AD","#CCFFCC","#B266B2"],hour:"".concat(k),minute:"".concat(x),instance:"".concat(j),date:"".concat(O),month:"".concat(C),year:"".concat(y),alarm:"no",color:"#FFFFFF",message:"",status:"0"},r.randomColor=r.state.colors.map((function(e,t){return c.a.createElement("div",{onClick:function(t){r.changeColor(e)},key:t,style:{backgroundColor:"".concat(e)},className:"colorCircle"})})),r.increaseHour=function(){var e=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];if("23"===r.state.hour||void 0===r.state.hour)r.setState({hour:"00"});else{var t=e.indexOf(r.state.hour)+1;r.setState({hour:e[t]})}},r.decreaseHour=function(){var e=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];if("00"===r.state.hour||void 0===r.state.hour)r.setState({hour:"23"});else{var t=e.indexOf(r.state.hour)-1;r.setState({hour:e[t]})}},r.increaseMinute=function(){var e=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];if("59"===r.state.minute||void 0===r.state.minute)r.setState({minute:"00"});else{var t=e.indexOf(r.state.minute)+1;r.setState({minute:e[t]})}},r.decreaseMinute=function(){var e=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];if("00"===r.state.minute||void 0===r.state.minute)r.setState({minute:"59"});else{var t=e.indexOf(r.state.minute)-1;r.setState({minute:e[t]})}},r.toggleInstancee=function(){"am"===r.state.instance?r.setState({instance:"pm"}):"pm"===r.state.instance&&r.setState({instance:"am"})},r.increaseDate=function(){var e=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];if("February"===r.state.month&&e.splice(28,4),"April"!==r.state.month&&"June"!==r.state.month&&"September"!==r.state.month&&"November"!==r.state.month||e.splice(30,1),"31"===r.state.date)r.setState({date:"01"});else{var t=e.indexOf(r.state.date)+1;r.setState({date:e[t]})}},r.decreaseDate=function(){var e=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];if("February"===r.state.month&&e.splice(28,4),"April"!==r.state.month&&"June"!==r.state.month&&"September"!==r.state.month&&"November"!==r.state.month||e.splice(30,1),"01"===r.state.date)r.setState({date:e[e.length-1]});else{var t=e.indexOf(r.state.date)-1;r.setState({date:e[t]})}},r.increaseMonth=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];if("December"===r.state.month)r.setState({month:"January"});else{var t=e.indexOf(r.state.month)+1;r.setState({month:e[t]})}},r.decreaseMonth=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];if("January"===r.state.month)r.setState({month:"December"});else{var t=e.indexOf(r.state.month)-1;r.setState({month:e[t]})}},r.increaseYear=function(){for(var e=[],t=1970;t<=2050;t++)t=t.toString(),e.push(t);e.map((function(t,a){if(t===r.state.year)return a+=1,r.setState({year:e[a]})}))},r.decreaseYear=function(){for(var e=[],t=1970;t<=2050;t++)t=t.toString(),e.push(t);e.map((function(t,a){t===r.state.year&&(a-=1,r.setState({year:e[a]}))}))},r.toggleAlarm=function(){"no"===r.state.alarm?r.setState({alarm:"yes"}):"yes"===r.state.alarm&&r.setState({alarm:"no"})},r.changeColor=function(e){r.setState({color:e})},r.messageInput=function(e){r.setState({message:e.target.value})},r.saveReminder=function(){var e=r.props.ReminderJSON.length;r.props.ReminderJSON.push({id:"".concat(e+1),time:"".concat(r.state.hour,":").concat(r.state.minute),instance:"".concat(r.state.instance),date:"".concat(r.state.date," ").concat(r.state.month),message:"".concat(r.state.message),colour:"".concat(r.state.color),alarm:"".concat(r.state.alarm)}),e=r.props.ReminderJSON.length+1;for(var t=0;t<=e;t++)r.setState({status:t})},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{style:{maxHeight:"".concat(this.props.inputBox)},className:"new-reminder"},c.a.createElement(B,{colors:this.state.colors,hour:this.state.hour,minute:this.state.minute,instance:this.state.instance,date:this.state.date,month:this.state.month,year:this.state.year,increaseHour:this.increaseHour,decreaseHour:this.decreaseHour,increaseMinute:this.increaseMinute,decreaseMinute:this.decreaseMinute,toggleInstancee:this.toggleInstancee,increaseDate:this.increaseDate,decreaseDate:this.decreaseDate,increaseMonth:this.increaseMonth,decreaseMonth:this.decreaseMonth,decreaseYear:this.decreaseYear,increaseYear:this.increaseYear}),c.a.createElement("div",{className:"alarmBox"},c.a.createElement("p",{className:"switchText"},"Ding Dong ?"),c.a.createElement("input",{onClick:function(t){return e.toggleAlarm()},id:"switchcheckbox",type:"checkbox",className:"hidden"}),c.a.createElement("label",{htmlFor:"switchcheckbox",id:"switch"})),c.a.createElement("div",{className:"colorBox"},this.randomColor),c.a.createElement("input",{className:"messageBox",type:"text",placeholder:"Message",onChange:function(t){e.messageInput(t)}}),c.a.createElement("div",{onClick:this.saveReminder,className:"saveButton"},"SAVE")),c.a.createElement("div",{className:"reminder-holder"},c.a.createElement(J,this.props)))}}]),a}(o.Component),A=a(21),I=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).state={ReminderJSON:A,inputBox:"0px",update:"false"},e.showInput=function(){"0px"===e.state.inputBox?e.setState({inputBox:"70%"}):"70%"===e.state.inputBox&&e.setState({inputBox:"0px"})},e.update=function(){e.setState({update:"True"})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"holder"},c.a.createElement("div",{className:"circle"},c.a.createElement("div",{onClick:function(t){e.showInput()},className:"circle-add"},c.a.createElement("i",{className:"fas fa-plus"}))),c.a.createElement(M,{update:this.update,inputBox:this.state.inputBox,ReminderJSON:this.state.ReminderJSON}))}}]),a}(o.Component),w=(a(30),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).openSidebar=function(){return"closed"===e.props.sidebar?e.props.sidebarUpdate("opened"):"opened"===e.props.sidebar?e.props.sidebarUpdate("closed"):void 0},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"navbar"},c.a.createElement("i",{className:"fas fa-bars",onClick:this.openSidebar}),c.a.createElement("h1",{className:"main-title"},"enwrite"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("li",null,c.a.createElement("i",{className:"fas fa-user"})))))}}]),a}(o.Component)),F=(a(31),function(e){var t="0px",a="none";return"opened"===e.sidebar?(t="300px",a="block"):"closed"===e.sidebar&&(t="0px",a="none"),c.a.createElement("div",null,c.a.createElement("div",{style:{width:t},className:"sidebarContainer"},c.a.createElement("i",{onClick:function(t){return e.sidebarUpdate("closed")},className:"fas fa-times","aria-hidden":"true"}," "),c.a.createElement("div",{className:"ul"},c.a.createElement(l.b,{onClick:function(t){return e.sidebarUpdate("closed")},className:"sidebarLink",to:"/"}," ",c.a.createElement("i",{className:"fas fa-sticky-note"}),"My Notes "),c.a.createElement(l.b,{onClick:function(t){return e.sidebarUpdate("closed")},className:"sidebarLink",to:"/reminders"}," ",c.a.createElement("i",{className:"fas fa-bell"}),"Reminders "),c.a.createElement(l.b,{onClick:function(t){return e.sidebarUpdate("closed")},className:"sidebarLink",to:"/bin"}," ",c.a.createElement("i",{className:"fas fa-trash"})," Bin "),c.a.createElement(l.b,{onClick:function(t){return e.sidebarUpdate("closed")},className:"sidebarLink",to:"/about"}," ",c.a.createElement("i",{className:"fas fa-info-circle"}),"About us "),c.a.createElement(l.b,{onClick:function(t){return e.sidebarUpdate("closed")},className:"sidebarLink",to:"/settings"}," ",c.a.createElement("i",{className:"fas fa-cog"}),"Settings "),c.a.createElement(l.b,{onClick:function(t){return e.sidebarUpdate("closed")},className:"sidebarLink",to:"/logout"}," ",c.a.createElement("i",{className:"fas fa-sign-out-alt"}),"Log-Out "))),c.a.createElement("div",{style:{display:a},className:"fullscreen",onClick:function(t){return e.sidebarUpdate("closed")}}))}),D=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={sidebar:"closed"},e.sidebarUpdate=function(t){e.setState({sidebar:t})},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(l.a,null,c.a.createElement(w,{sidebar:this.state.sidebar,sidebarUpdate:this.sidebarUpdate}),c.a.createElement(F,{sidebar:this.state.sidebar,sidebarUpdate:this.sidebarUpdate}),c.a.createElement(u.a,{path:"/",exact:!0,component:E}),c.a.createElement(u.a,{path:"/reminders",component:I}),c.a.createElement(u.a,{path:"/bin",component:"{Bin}"}))}}]),a}(o.Component);d.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2e1ac655.chunk.js.map