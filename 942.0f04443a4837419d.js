"use strict";(self.webpackChunkhorizons=self.webpackChunkhorizons||[]).push([[942],{1942:(te,T,r)=>{r.r(T),r.d(T,{VillagersModule:()=>ee});var m=r(9808),d=r(4894),f=r(5616),P=r(3659),A=r(1446),C=r(6696),V=r(7520),F=r(655),S=r(9300),e=r(5e3),y=r(4004),J=r(520);let N=(()=>{class n{constructor(t){this.httpClient=t}getAll(){return this.httpClient.get("/v1/villagers").pipe((0,y.U)(t=>Object.keys(t).map(i=>this.convertToVillager(t[i]))))}convertToVillager(t){return{id:t.id,fileName:t["file-name"],name:t.name,birthday:t.birthday,birthdayString:t["birthday-string"],personality:t.personality,subtype:t.subtype,bubbleColor:t.bubbleColor,catchPhrase:t["catch-phrase"],catchTranslations:t["catch-translations"],gender:t.gender,hobby:t.hobby,iconUri:t.icon_uri,imageUri:t.image_uri,saying:t.saying,species:t.species,textColor:t["text-color"]}}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(J.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var Y=r(3270),Z=r(2638),O=r(4594),_=r(1125),h=r(6688),q=r(4623),b=r(7423);function k(n,a){if(1&n&&(e.TgZ(0,"mat-chip",2),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.xp6(1),e.Oqu(t.value)}}function Q(n,a){if(1&n&&(e.TgZ(0,"mat-list-option",17),e._uU(1,"\n          "),e.TgZ(2,"span",2),e._uU(3),e.qZA(),e._uU(4,"\n        "),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(3),e.Oqu(t)}}function w(n,a){if(1&n&&(e.TgZ(0,"mat-chip",2),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.xp6(1),e.hij("\n              ",t.value,"\n            ")}}function z(n,a){if(1&n&&(e.TgZ(0,"mat-list-option",17),e._uU(1,"\n          "),e.TgZ(2,"span",2),e._uU(3),e.qZA(),e._uU(4,"\n        "),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(3),e.Oqu(t)}}function H(n,a){if(1&n&&(e.TgZ(0,"mat-chip",2),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.xp6(1),e.hij("\n              ",t.value,"\n            ")}}function L(n,a){if(1&n&&(e.TgZ(0,"mat-list-option",17),e._uU(1,"\n          "),e.TgZ(2,"span",2),e._uU(3),e.qZA(),e._uU(4,"\n        "),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(3),e.Oqu(t)}}function j(n,a){if(1&n&&(e.TgZ(0,"mat-chip",2),e._uU(1),e.qZA()),2&n){const t=a.$implicit;e.xp6(1),e.hij("\n              ",t.value,"\n            ")}}function $(n,a){if(1&n&&(e.TgZ(0,"mat-list-option",17),e._uU(1,"\n          "),e.TgZ(2,"span",2),e._uU(3),e.qZA(),e._uU(4,"\n        "),e.qZA()),2&n){const t=a.$implicit;e.Q6J("value",t),e.xp6(3),e.Oqu(t)}}let I=(()=>{class n{constructor(){this.villagers=[],this.filterParametersChanged=new e.vpe}ngOnInit(){}get availableSpecies(){return this.villagers.map(t=>t.species).filter((t,i,l)=>l.indexOf(t)==i)}get availablePersonalities(){return this.villagers.map(t=>t.personality).filter((t,i,l)=>l.indexOf(t)==i)}get availableHobbies(){return this.villagers.map(t=>t.hobby).filter((t,i,l)=>l.indexOf(t)==i)}get availableGenders(){return this.villagers.map(t=>t.gender).filter((t,i,l)=>l.indexOf(t)==i)}submitSelctions(t,i,l,s){const c=new Map([["species",t.map(o=>o.value)],["personality",i.map(o=>o.value)],["hobby",l.map(o=>o.value)],["gender",s.map(o=>o.value)]]);this.filterParametersChanged.emit(c)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-villager-filter"]],inputs:{villagers:"villagers"},outputs:{filterParametersChanged:"filterParametersChanged"},decls:122,vars:8,consts:[[1,"container"],["color","primary"],["translate",""],[1,"content"],["aria-label","Selected Species"],["translate","",4,"ngFor","ngForOf"],["species",""],[3,"value",4,"ngFor","ngForOf"],["aria-label","Selected Personalities"],["personalities",""],["aria-label","Selected Hobbies"],["hobbies",""],["aria-label","Selected Genders"],["genders",""],[1,"footer-bar"],["mat-raised-button","","color","warn",1,"clear-filter-button",3,"click"],["mat-raised-button","","color","primary",1,"filter-button",3,"click"],[3,"value"]],template:function(t,i){if(1&t){const l=e.EpF();e.TgZ(0,"div",0),e._uU(1,"\n  "),e.TgZ(2,"mat-toolbar",1),e._uU(3," "),e.TgZ(4,"span",2),e._uU(5,"Filter"),e.qZA(),e._uU(6,"\xa0"),e.TgZ(7,"span",2),e._uU(8,"Villagers"),e.qZA(),e._uU(9," "),e.qZA(),e._uU(10,"\n  "),e.TgZ(11,"mat-accordion",3),e._uU(12,"\n    "),e.TgZ(13,"mat-expansion-panel"),e._uU(14,"\n      "),e.TgZ(15,"mat-expansion-panel-header"),e._uU(16,"\n        "),e.TgZ(17,"mat-panel-title",2),e._uU(18," Species "),e.qZA(),e._uU(19,"\n        "),e.TgZ(20,"mat-panel-description"),e._uU(21,"\n          "),e.TgZ(22,"mat-chip-list",4),e._uU(23,"\n            "),e.YNc(24,k,2,1,"mat-chip",5),e._uU(25,"\n          "),e.qZA(),e._uU(26,"\n        "),e.qZA(),e._uU(27,"\n      "),e.qZA(),e._uU(28,"\n      "),e.TgZ(29,"mat-selection-list",null,6),e._uU(31,"\n        "),e.YNc(32,Q,5,2,"mat-list-option",7),e._uU(33,"\n      "),e.qZA(),e._uU(34,"\n    "),e.qZA(),e._uU(35,"\n\n    "),e.TgZ(36,"mat-expansion-panel"),e._uU(37,"\n      "),e.TgZ(38,"mat-expansion-panel-header"),e._uU(39,"\n        "),e.TgZ(40,"mat-panel-title",2),e._uU(41," Personality "),e.qZA(),e._uU(42,"\n        "),e.TgZ(43,"mat-panel-description"),e._uU(44,"\n          "),e.TgZ(45,"mat-chip-list",8),e._uU(46,"\n            "),e.YNc(47,w,2,1,"mat-chip",5),e._uU(48,"\n          "),e.qZA(),e._uU(49,"\n        "),e.qZA(),e._uU(50,"\n      "),e.qZA(),e._uU(51,"\n      "),e.TgZ(52,"mat-selection-list",null,9),e._uU(54,"\n        "),e.YNc(55,z,5,2,"mat-list-option",7),e._uU(56,"\n      "),e.qZA(),e._uU(57,"\n    "),e.qZA(),e._uU(58,"\n\n    "),e.TgZ(59,"mat-expansion-panel"),e._uU(60,"\n      "),e.TgZ(61,"mat-expansion-panel-header"),e._uU(62,"\n        "),e.TgZ(63,"mat-panel-title",2),e._uU(64," Hobby "),e.qZA(),e._uU(65,"\n        "),e.TgZ(66,"mat-panel-description"),e._uU(67,"\n          "),e.TgZ(68,"mat-chip-list",10),e._uU(69,"\n            "),e.YNc(70,H,2,1,"mat-chip",5),e._uU(71,"\n          "),e.qZA(),e._uU(72,"\n        "),e.qZA(),e._uU(73,"\n      "),e.qZA(),e._uU(74,"\n      "),e.TgZ(75,"mat-selection-list",null,11),e._uU(77,"\n        "),e.YNc(78,L,5,2,"mat-list-option",7),e._uU(79,"\n      "),e.qZA(),e._uU(80,"\n    "),e.qZA(),e._uU(81,"\n\n    "),e.TgZ(82,"mat-expansion-panel"),e._uU(83,"\n      "),e.TgZ(84,"mat-expansion-panel-header"),e._uU(85,"\n        "),e.TgZ(86,"mat-panel-title",2),e._uU(87," Gender "),e.qZA(),e._uU(88,"\n        "),e.TgZ(89,"mat-panel-description"),e._uU(90,"\n          "),e.TgZ(91,"mat-chip-list",12),e._uU(92,"\n            "),e.YNc(93,j,2,1,"mat-chip",5),e._uU(94,"\n          "),e.qZA(),e._uU(95,"\n        "),e.qZA(),e._uU(96,"\n      "),e.qZA(),e._uU(97,"\n      "),e.TgZ(98,"mat-selection-list",null,13),e._uU(100,"\n        "),e.YNc(101,$,5,2,"mat-list-option",7),e._uU(102,"\n      "),e.qZA(),e._uU(103,"\n    "),e.qZA(),e._uU(104,"\n  "),e.qZA(),e._uU(105,"\n  "),e.TgZ(106,"mat-toolbar",14),e._uU(107,"\n    "),e.TgZ(108,"button",15),e.NdJ("click",function(){e.CHM(l);const c=e.MAs(30),o=e.MAs(53),v=e.MAs(76),U=e.MAs(99);return c.deselectAll(),o.deselectAll(),v.deselectAll(),U.deselectAll(),i.submitSelctions(c.selectedOptions.selected,o.selectedOptions.selected,v.selectedOptions.selected,U.selectedOptions.selected)}),e._uU(109,"\n      "),e.TgZ(110,"span",2),e._uU(111,"Clear"),e.qZA(),e._uU(112,"\n    "),e.qZA(),e._uU(113,"\n    "),e.TgZ(114,"button",16),e.NdJ("click",function(){e.CHM(l);const c=e.MAs(30),o=e.MAs(53),v=e.MAs(76),U=e.MAs(99);return i.submitSelctions(c.selectedOptions.selected,o.selectedOptions.selected,v.selectedOptions.selected,U.selectedOptions.selected)}),e._uU(115,"\n      "),e.TgZ(116,"span",2),e._uU(117,"Apply"),e.qZA(),e._uU(118,"\n    "),e.qZA(),e._uU(119,"\n  "),e.qZA(),e._uU(120,"\n"),e.qZA(),e._uU(121,"\n")}if(2&t){const l=e.MAs(30),s=e.MAs(53),c=e.MAs(76),o=e.MAs(99);e.xp6(24),e.Q6J("ngForOf",l.selectedOptions.selected),e.xp6(8),e.Q6J("ngForOf",i.availableSpecies),e.xp6(15),e.Q6J("ngForOf",s.selectedOptions.selected),e.xp6(8),e.Q6J("ngForOf",i.availablePersonalities),e.xp6(15),e.Q6J("ngForOf",c.selectedOptions.selected),e.xp6(8),e.Q6J("ngForOf",i.availableHobbies),e.xp6(15),e.Q6J("ngForOf",o.selectedOptions.selected),e.xp6(8),e.Q6J("ngForOf",i.availableGenders)}},directives:[O.Ye,d.Pi,_.pp,_.ib,_.yz,_.yK,_.u4,h.qn,m.sg,q.Ub,b.lW,h.HS,q.vS],styles:[".container[_ngcontent-%COMP%]{min-width:90vw;position:relative;height:calc(100vh - 56px)}@media screen and (min-width: 500px){.container[_ngcontent-%COMP%]{min-width:33vw;height:calc(100vh - 64px)}}.container[_ngcontent-%COMP%]   .footer-bar[_ngcontent-%COMP%]{position:absolute;bottom:0;justify-content:center;width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1em;gap:1em}.container[_ngcontent-%COMP%]   .footer-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;text-transform:uppercase}.mat-selection-list[_ngcontent-%COMP%]{max-height:50vh;overflow:auto}"]}),n})();var M=r(5245),p=r(8966),x=r(3824),E=r(379);let G=(()=>{class n{constructor(t,i,l,s){this.translationService=t,this.savedEntityService=i,this.data=l,this.dialogRef=s,this.icon$=this.savedEntityService.isSaved(this.data.fileName).pipe((0,y.U)(c=>c?"star":"star_border"))}ngOnInit(){}toggleSaveState(){this.savedEntityService.isSaved(this.data.fileName).subscribe(t=>{t?this.savedEntityService.remove(this.data.fileName):this.savedEntityService.save(this.data.fileName,"Villager"),this.dialogRef.close()})}getValue(t,i){return this.translationService.getValue(t,i)}getMonthName(t){return t.split(" ")[0]}getDate(t){return parseInt(t.split(" ")[1].replace("th","").replace("nd","").replace("st",""))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.D),e.Y36(E.v),e.Y36(p.WI),e.Y36(p.so))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-villager-modal"]],decls:51,vars:13,consts:[["color","primary",1,"open-sans"],["mat-dialog-title",""],[1,"spacer"],["mat-icon-button","",3,"click"],[1,"container"],["aria-label","Personality"],["translate",""],["aria-label","Birthday"],["color","primary"],["aria-label","Hobby"],["color","accent","translate",""]],template:function(t,i){1&t&&(e.TgZ(0,"mat-toolbar",0),e._uU(1,"\n  "),e.TgZ(2,"h2",1),e._uU(3),e.qZA(),e._uU(4,"\n  "),e._UZ(5,"span",2),e._uU(6,"\n  "),e.TgZ(7,"button",3),e.NdJ("click",function(){return i.toggleSaveState()}),e._uU(8,"\n    "),e.TgZ(9,"mat-icon"),e._uU(10),e.ALo(11,"async"),e.qZA(),e._uU(12,"\n  "),e.qZA(),e._uU(13,"\n"),e.qZA(),e._uU(14,"\n"),e.TgZ(15,"mat-dialog-content"),e._uU(16,"\n  "),e.TgZ(17,"div",4),e._uU(18,"\n    "),e.TgZ(19,"mat-chip-list",5),e._uU(20,"\n      "),e.TgZ(21,"mat-chip",6),e._uU(22),e.qZA(),e._uU(23,"\n    "),e.qZA(),e._uU(24,"\n    "),e.TgZ(25,"mat-chip-list",7),e._uU(26,"\n      "),e.TgZ(27,"mat-chip",8),e._uU(28,"\n        "),e.TgZ(29,"span",6),e._uU(30),e.qZA(),e._uU(31,"\xa0\n        "),e.TgZ(32,"span",6),e._uU(33),e.qZA(),e._uU(34,"\n      "),e.qZA(),e._uU(35,"\n    "),e.qZA(),e._uU(36,"\n    "),e.TgZ(37,"mat-chip-list",9),e._uU(38,"\n      "),e.TgZ(39,"mat-chip",10),e._uU(40),e.qZA(),e._uU(41,"\n    "),e.qZA(),e._uU(42,"\n  "),e.qZA(),e._uU(43,"\n"),e.qZA(),e._uU(44,"\n"),e.TgZ(45,"mat-dialog-actions"),e._uU(46,"\n  "),e.TgZ(47,"blockquote"),e._uU(48),e.qZA(),e._uU(49,"\n"),e.qZA(),e._uU(50,"\n")),2&t&&(e.xp6(3),e.Oqu(i.getValue(i.data.name,"name")),e.xp6(7),e.Oqu(e.lcZ(11,11,i.icon$)),e.xp6(5),e.Udp("background-image","url("+i.data.imageUri+")"),e.xp6(7),e.Oqu(i.data.personality),e.xp6(8),e.Oqu(i.getMonthName(i.data.birthdayString)),e.xp6(3),e.Oqu(i.getDate(i.data.birthdayString)),e.xp6(7),e.Oqu(i.data.hobby),e.xp6(7),e.Tol(i.data.gender),e.xp6(1),e.hij("\n    ",i.getValue(i.data.catchTranslations,"catch"),"\n  "))},directives:[O.Ye,p.uh,b.lW,M.Hw,p.xY,h.qn,h.HS,d.Pi,p.H8],pipes:[m.Ov],styles:['.mat-dialog-content[_ngcontent-%COMP%]{max-height:95vh;margin:0;padding:24px 24px 0;min-width:25vw;min-height:50vh;aspect-ratio:1;background-size:contain;background-repeat:no-repeat}blockquote[_ngcontent-%COMP%]{background:linear-gradient(to right,var(--col) 4px,transparent 4px) 0 100%,linear-gradient(to left,var(--col) 4px,transparent 4px) 100% 0,linear-gradient(to bottom,var(--col) 4px,transparent 4px) 100% 0,linear-gradient(to top,var(--col) 4px,transparent 4px) 0 100%;background-repeat:repeat,repeat,repeat,repeat;background-size:auto,auto,auto,auto;background-repeat:no-repeat;background-size:20px 20px;margin:0;width:100%;text-align:center;font-family:Open Sans,sans-serif;padding:8px;position:relative}blockquote.Male[_ngcontent-%COMP%]{--col: #039be5}blockquote.Female[_ngcontent-%COMP%]{--col: #ee0290}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after{font-family:FontAwesome;position:absolute;color:var(--col);font-size:24px}blockquote[_ngcontent-%COMP%]:before{content:"\\f10d";top:-12px;margin-right:-20px;right:100%}blockquote[_ngcontent-%COMP%]:after{content:"\\f10e";margin-left:-20px;left:100%;top:auto;bottom:-12px}']}),n})();var u=r(9224);let R=(()=>{class n{constructor(t,i){this.translationService=t,this.matDialog=i,this.language="USen",this.villager={id:1,fileName:"file-name",birthday:"01-01",birthdayString:"January 01",bubbleColor:"red",textColor:"white",catchPhrase:"",imageUri:"assets/villagers.png",iconUri:"assets/villagers.png",gender:"",hobby:"",personality:"",saying:"",species:"",subtype:"",name:new Map,catchTranslations:new Map}}ngOnInit(){}getValue(t,i){return this.translationService.getValue(t,i)}openModal(){this.matDialog.open(G,{data:this.villager})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.D),e.Y36(p.uw))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-villager-tile"]],inputs:{villager:"villager"},decls:16,vars:6,consts:[[3,"click"],["mat-card-avatar","",1,"avatar"],["translate",""],["mat-card-image","","defaultImage","assets/villagers.png",3,"lazyLoad"]],template:function(t,i){1&t&&(e.TgZ(0,"mat-card",0),e.NdJ("click",function(){return i.openModal()}),e._uU(1,"\n  "),e.TgZ(2,"mat-card-header"),e._uU(3,"\n    "),e._UZ(4,"div",1),e._uU(5,"\n    "),e.TgZ(6,"mat-card-title"),e._uU(7),e.qZA(),e._uU(8,"\n    "),e.TgZ(9,"mat-card-subtitle",2),e._uU(10),e.qZA(),e._uU(11,"\n  "),e.qZA(),e._uU(12,"\n  "),e._UZ(13,"img",3),e._uU(14,"\n"),e.qZA(),e._uU(15,"\n")),2&t&&(e.xp6(4),e.Udp("background-image","url("+i.villager.iconUri+")"),e.xp6(3),e.Oqu(i.getValue(i.villager.name,"name")),e.xp6(3),e.Oqu(i.villager.species),e.xp6(3),e.Q6J("lazyLoad",i.villager.imageUri),e.uIk("alt",i.getValue(i.villager.name,"name")))},directives:[u.a8,u.dk,u.kc,u.n5,u.$j,d.Pi,u.G2,A.z1],styles:[".avatar[_ngcontent-%COMP%]{background-size:contain}.mat-card[_ngcontent-%COMP%]{padding-bottom:0;overflow:hidden}.mat-card[_ngcontent-%COMP%]   .mat-card-image[_ngcontent-%COMP%]{margin-bottom:-4px}"]}),n})();const D=["villagerfilter"];function B(n,a){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.AsE("(",t.filteredVillagers.length," / ",t.villagers.length,")\xa0")}}function X(n,a){if(1&n&&(e.TgZ(0,"div",10),e._uU(1,"\n        "),e._UZ(2,"app-villager-tile",11),e._uU(3,"\n      "),e.qZA()),2&n){const t=a.$implicit;e.xp6(2),e.Q6J("villager",t)}}let g=class{constructor(a,t){this.villagerService=a,this.media=t,this.villagers=[],this.filterParameters=new Map}ngOnInit(){this.villagerService.getAll().subscribe(a=>this.villagers=a),this.media.asObservable().pipe((0,S.h)(a=>a.some(t=>"xs"!==t.mqAlias&&"sm"!==t.mqAlias)),(0,f.tm)(this)).subscribe(()=>this.villagerfilter.close())}onFilterChanged(a){this.villagerfilter.toggle(),this.filterParameters=a}get filteredVillagers(){const a=[...this.filterParameters.keys()].filter(t=>{var i,l;return null!==(l=null===(i=this.filterParameters.get(t))||void 0===i?void 0:i.length)&&void 0!==l&&l});return 0==this.filterParameters.size||0==a.length?this.villagers:this.villagers.filter(t=>a.map(i=>{const l=this.filterParameters.get(i);return null==l||null==l||0==l.length||l.includes(t[i])}).reduce((i,l)=>i&&l,!0))}};g.\u0275fac=function(a){return new(a||g)(e.Y36(N),e.Y36(Y.u0))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-villager-list"]],viewQuery:function(a,t){if(1&a&&e.Gf(D,5),2&a){let i;e.iGM(i=e.CRH())&&(t.villagerfilter=i.first)}},decls:31,vars:3,consts:[["mode","over","ngClass.gt-sm","has-border","position","end",1,"filter-sidenav"],["villagerfilter",""],[1,"villager-filter",3,"villagers","filterParametersChanged"],[1,"main-container"],[1,"filter-container"],["mat-stroked-button","","color","primary",1,"filter-villagers",3,"click"],["translate",""],[4,"ngIf"],[1,"container"],["class","tile",4,"ngFor","ngForOf"],[1,"tile"],[3,"villager"]],template:function(a,t){if(1&a){const i=e.EpF();e.TgZ(0,"mat-sidenav-container"),e._uU(1,"\n  "),e.TgZ(2,"mat-sidenav",0,1),e._uU(4,"\n    "),e.TgZ(5,"app-villager-filter",2),e.NdJ("filterParametersChanged",function(s){return t.onFilterChanged(s)}),e.qZA(),e._uU(6,"\n  "),e.qZA(),e._uU(7,"\n  "),e.TgZ(8,"mat-sidenav-content",3),e._uU(9,"\n    "),e.TgZ(10,"div",4),e._uU(11,"\n      "),e.TgZ(12,"button",5),e.NdJ("click",function(){return e.CHM(i),e.MAs(3).toggle()}),e._uU(13,"\n        "),e.TgZ(14,"span",6),e._uU(15,"Filter"),e.qZA(),e._uU(16,"\xa0\n        "),e.YNc(17,B,2,2,"span",7),e._uU(18,"\n        "),e.TgZ(19,"mat-icon"),e._uU(20,"filter_list"),e.qZA(),e._uU(21,"\n      "),e.qZA(),e._uU(22,"\n    "),e.qZA(),e._uU(23,"\n    "),e.TgZ(24,"div",8),e._uU(25,"\n      "),e.YNc(26,X,4,1,"div",9),e._uU(27,"\n    "),e.qZA(),e._uU(28,"\n  "),e.qZA(),e._uU(29,"\n"),e.qZA(),e._uU(30,"\n")}2&a&&(e.xp6(5),e.Q6J("villagers",t.villagers),e.xp6(12),e.Q6J("ngIf",t.filteredVillagers.length!=t.villagers.length),e.xp6(9),e.Q6J("ngForOf",t.filteredVillagers))},directives:[Z.TM,Z.JX,I,Z.Rh,b.lW,d.Pi,m.O5,M.Hw,m.sg,R],styles:[".main-container[_ngcontent-%COMP%]{height:calc(100vh - 56px);overflow:hidden}@media screen and (min-width: 599px){.main-container[_ngcontent-%COMP%]{height:calc(100vh - 64px)}}.main-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-right:3em;margin-top:1em}.main-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{overflow-x:hidden;display:grid;grid-template-columns:1fr;grid-gap:1em;gap:1em;margin:1em 1em 0;height:calc(100% - 68px)}@media screen and (min-width: 500px){.main-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{margin-right:0;grid-template-columns:repeat(2,1fr)}}@media screen and (min-width: 599px){.main-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (min-width: 1000px){.main-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr)}}@media screen and (min-width: 1500px){.main-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{grid-template-columns:repeat(7,1fr)}}.main-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;cursor:pointer}"]}),g=(0,F.gn)([(0,f.cg)()],g);const W=[{path:"",component:g,data:{title:(0,V.J)("Villagers")}}];let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[],imports:[[C.Bz.forChild(W)],C.Bz]}),n})(),ee=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[m.ez,d.aw,f.m8,P.q,A.mZ,K]]}),n})()}}]);