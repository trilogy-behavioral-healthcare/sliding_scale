(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(27)},17:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=(a(17),a(4)),h=a(5),s=a(7),u=a(6),i=a(8),m=a(2),d=a(9),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={householdMembers:1,householdIncome:0,medicadeFee:92.99},a.handleHouseholdIncomeChange=a.handleHouseholdIncomeChange.bind(Object(m.a)(Object(m.a)(a))),a.handleHouseholdMembersChange=a.handleHouseholdMembersChange.bind(Object(m.a)(Object(m.a)(a))),a.calculatePovertyLevel=a.calculatePovertyLevel.bind(Object(m.a)(Object(m.a)(a))),a}return Object(i.a)(t,e),Object(h.a)(t,[{key:"handleHouseholdMembersChange",value:function(e){var t=e.target.value;this.setState({householdMembers:t}),this.calculatePovertyLevel(t)}},{key:"calculatePovertyLevel",value:function(e){var t=12140+4320*(e-1);this.setState({povertyLevels:[t,1.25*t,1.5*t,1.75*t,2*t,2.5*t]})}},{key:"handleHouseholdIncomeChange",value:function(e,t,a){this.setState({householdIncome:t})}},{key:"render",value:function(){var e=this.state.medicadeFee,t=[{percentOfServiceCost:0,hourlyServiceCharge:5},{percentOfServiceCost:20,hourlyServiceCharge:.2*e},{percentOfServiceCost:40,hourlyServiceCharge:.4*e},{percentOfServiceCost:60,hourlyServiceCharge:.6*e},{percentOfServiceCost:80,hourlyServiceCharge:.8*e},{percentOfServiceCost:100,hourlyServiceCharge:e}];return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"Household Members:",l.a.createElement("input",{className:"form-control",name:"householdMembers",type:"number",value:this.state.householdMembers,onChange:this.handleHouseholdMembersChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Household Income:",l.a.createElement(d.a,{className:"form-control",name:"householdIncome",precision:"0",value:this.state.householdIncome,prefix:"$",onChangeEvent:this.handleHouseholdIncomeChange})),l.a.createElement("br",null),l.a.createElement("label",null,"Medicade Fee:",l.a.createElement(d.a,{className:"form-control",name:"medicadeFee",value:this.state.medicadeFee,prefix:"$",onChangeEvent:this.handleInputChange})),l.a.createElement("br",null)),l.a.createElement("p",null,"% of Total Service Cost:"),l.a.createElement("h3",null,t[3].percentOfServiceCost),l.a.createElement("p",null,"Hourly Service Charge:"),l.a.createElement("h3",null,t[3].hourlyServiceCharge))}}]),t}(n.Component),b=(a(23),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h2",null,"Sliding Scale Calculator"),l.a.createElement(v,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.09a3f846.chunk.js.map