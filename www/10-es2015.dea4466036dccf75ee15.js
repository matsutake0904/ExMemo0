(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(t,n,e){"use strict";e.r(n),e.d(n,"HomePageModule",(function(){return u}));var o=e("ofXK"),i=e("TEn/"),c=e("3Pt+"),r=e("tyNb"),s=e("fXoL"),a=e("gbi4");let b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-item-table"]],decls:2,vars:0,template:function(t,n){1&t&&(s.Kb(0,"p"),s.ec(1," item-table works!\n"),s.Jb())},styles:[""]}),t})();function l(t,n){if(1&t&&(s.Kb(0,"ion-item"),s.Kb(1,"ion-label"),s.ec(2),s.Jb(),s.Jb()),2&t){const t=n.$implicit;s.xb(2),s.fc(t.name)}}const m=[{path:"",component:(()=>{class t{constructor(t){this.commonService=t,this.title="Resist",this.items=[]}addItem(){this.items.push({id:this.commonService.getIdCount(),name:this.name,branch:0}),localStorage.items=JSON.stringify(this.items),this.name=""}refresh(){localStorage.items=[],this.items=[],localStorage.idCount=0,console.log("Refreshed!!")}ionViewWillEnter(){"items"in localStorage&&(this.items=JSON.parse(localStorage.items))}}return t.\u0275fac=function(n){return new(n||t)(s.Hb(a.a))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-home"]],decls:20,vars:4,consts:[[3,"translucent"],[3,"click"],["slot","icon-only","name","person-circle"],[1,"ion-padding",3,"submit"],["f","ngForm"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["type","text","name","item","required","","minlength","2",3,"ngModel","ngModelChange"],["expand","block","type","submit",3,"disabled"],[4,"ngFor","ngForOf"],["expand","block","href","http://localhost:8100/items"]],template:function(t,n){if(1&t&&(s.Kb(0,"ion-header",0),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-title"),s.ec(3," Blank "),s.Jb(),s.Kb(4,"ion-button",1),s.Sb("click",(function(){return n.refresh()})),s.Ib(5,"ion-icon",2),s.Jb(),s.Jb(),s.Jb(),s.Kb(6,"ion-content"),s.Kb(7,"form",3,4),s.Sb("submit",(function(){return n.addItem()})),s.Kb(9,"ion-item",5),s.Kb(10,"ion-label",6),s.ec(11,"Item"),s.Jb(),s.Kb(12,"ion-input",7),s.Sb("ngModelChange",(function(t){return n.name=t})),s.Jb(),s.Jb(),s.Kb(13,"ion-button",8),s.ec(14,"add"),s.Jb(),s.Jb(),s.Kb(15,"ion-list"),s.dc(16,l,3,1,"ion-item",9),s.Jb(),s.Kb(17,"ion-button",10),s.ec(18,"List"),s.Jb(),s.Ib(19,"app-item-table"),s.Jb()),2&t){const t=s.Zb(8);s.Xb("translucent",!0),s.xb(12),s.Xb("ngModel",n.name),s.xb(1),s.Xb("disabled",!t.form.valid),s.xb(3),s.Xb("ngForOf",n.items)}},directives:[i.f,i.n,i.m,i.d,i.g,i.e,c.j,c.f,c.g,i.i,i.j,i.h,i.r,c.i,c.b,c.e,c.h,i.k,o.h,b],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[r.i.forChild(m)],r.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[o.b,c.a,i.o,p]]}),t})()}}]);