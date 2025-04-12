"use strict";(self.webpackChunk_loomhq_web_client=self.webpackChunk_loomhq_web_client||[]).push([[3841],{34007:function(e,t,a){a.d(t,{i:function(){return r}});let r={PENDING:"pending",APPROVED:"approved",DECLINED:"declined",VOIDED:"voided"}},47560:function(e,t,a){a.d(t,{L:function(){return o}});var r=a(77848),n=a.n(r),l=a(66420),i={visible:"fade-callout_visible_3Vk",initial:"fade-callout_initial_1SS",hidden:"fade-callout_hidden_50n",widthExpanded:"fade-callout_widthExpanded_3bv",widthCollapsed:"fade-callout_widthCollapsed_3Nr"};function o({visible:e,width:t,children:a,...r}){let o=(0,l.useRef)(!0),[s,d]=(0,l.useState)();return(0,l.useEffect)(()=>{let t=o.current;d(e?[i.visible,t&&i.initial]:[i.hidden,t&&i.initial])},[e]),(0,l.useEffect)(()=>{o.current=!1},[]),"expanded"===t?t=i.widthExpanded:"collapsed"===t&&(t=i.widthCollapsed),l.createElement("div",{...r,className:n()(s,t,r.className)},a)}},93686:function(e,t,a){a.d(t,{f:function(){return d}});var r=a(22947),n=a(64018),l=a(36351);let i=matchMedia(`(max-width: ${r.Jp}px)`),o=matchMedia(`(min-width: ${r.r$}px)`),s=function(){let e=function(){let e=localStorage?.getItem("navBar");if(!e?.includes(","))return!0;let t=e.split(",")[2];return"true"===t||"false"!==t&&void 0}();return{preferCollapsed:e,isCollapsed:!i.matches&&(e??!o.matches)}}(),d=(0,n.Z)((0,l.tJ)((e,t)=>({isDrawerOpen:!1,preferCollapsed:s.preferCollapsed,isCollapsed:s.isCollapsed,toggleDrawer(a=!t().isDrawerOpen){return e({isDrawerOpen:a,isCollapsed:!1})},toggleSidebar(a=!t().isCollapsed,{updatePreference:r=!0}={}){return e(r?{isCollapsed:a,preferCollapsed:a}:{isCollapsed:a})}}),{name:"navigation-sidebar-state",partialize:e=>({preferCollapsed:e.preferCollapsed,isCollapsed:e.isCollapsed})}));function c(e,t){e.addEventListener?e.addEventListener("change",t):e.addListener?.(t)}c(i,({matches:e})=>{let t=d.getState();e?d.setState({isCollapsed:!1}):t.isDrawerOpen&&d.setState({isDrawerOpen:!1,isCollapsed:t.preferCollapsed})}),c(o,({matches:e})=>{let{preferCollapsed:t}=d.getState();d.setState({isCollapsed:!e||(t??!1)})})},83037:function(e,t,a){a.d(t,{MT:function(){return M},ZH:function(){return Z},cR:function(){return B}});var r=a(3851),n=a(73032),l=a(22562),i=a(49003),o=a(63968),s=a(26998),d=a(27307),c=a(76625),m=a(54086),u=a(36890),p=a(56977),h=a(66420),g=a(59182),E=a(6180),C=a(91353),f=a(62189),b=a(80686),y=a(45218),k=a(73433),v=a(34007),_=a(12207);function I(){let e=(0,s.useIsCurrentUserLoggedIn)();return{result:(0,_.ks)({fetchPolicy:"cache-first",skip:!e})}}var x=a(92027),w=a(19267),S=a(20537),T=a(18369),L=a(24616),W=a(74431),A=a(20076),V=a(14728),F=a(67159),O=a(47560),N=a(18617);function D({displayMode:e,children:t}){return h.createElement(h.Fragment,null,h.createElement(O.L,{className:"absolute bottom:small",visible:"COLLAPSED"===e,width:"collapsed"},h.createElement(N.Z,{className:"bottom:small",color:"var(--lns-color-background)",backgroundColor:"var(--lns-color-body)",width:"var(--navSidebarInnerWidthCollapsed)"},h.createElement(V.ggW,{alignItems:"start",gap:"small"},h.createElement(V.JO$,{color:"background",icon:h.createElement(F._,null)})))),h.createElement(O.L,{className:"absolute bottom:small",visible:"COLLAPSED"!==e,width:"expanded"},h.createElement(N.Z,{className:"bottom:small",color:"var(--lns-color-background)",backgroundColor:"var(--lns-color-body)",width:"var(--navSidebarInnerWidthExpanded)"},h.createElement(V.ggW,{alignItems:"start",gap:"small"},h.createElement(V.JO$,{color:"background",icon:h.createElement(F._,null)}),t))))}let P=e=>({hasAutojoinSidebarScope:e.includes(b.gf),hasFavoritesScope:e.includes(b.I_),hasInviteCreatorActionScope:e.includes(b.INVITE_CREATOR_ACTION),hasInviteViewerActionScope:e.includes(b.INVITE_VIEWER_ACTION),hasPersonalArchiveReadScope:e.includes(b.A1),hasPersonalArchiveWriteScope:e.includes(b.AS),hasPersonalLibraryReadScope:e.includes(b.fY),hasPersonalLibraryWriteScope:e.includes(b.xN),hasSuggestedWorkspaceSidebarScope:e.includes(b.lW),hasTeamArchiveReadScope:e.includes(b.Z4),hasTeamArchiveWriteScope:e.includes(b.Xn),hasTeamLibraryReadScope:e.includes(b.ly),hasTeamLibraryWriteScope:e.includes(b.hx),hasWatchLaterScope:e.includes(b.xK),hasWorkspaceJoinManageScope:e.includes(b.c8)}),z=(0,A.r)(()=>Promise.all([a.e(1046),a.e(9516)]).then(a.bind(a,29516))),U=(0,A.r)(()=>Promise.all([a.e(1046),a.e(1672)]).then(a.bind(a,31672))),R=(0,A.r)(()=>a.e(1974).then(a.bind(a,62680)).then(e=>({default:e.InviteCallout}))),M={INVITE_CALLOUT:n.LZ,GET_STARTED_CHECKLIST_CALLOUT:n._R,JOIN_TEAM_CALLOUT:n.X2,AUTO_JOIN_CALLOUT:n.Z4};function Z({displayMode:e,setShowInviteToolTip:t}){let a=I(),n=B(),l=(0,w.iG)(),s=a?.result?.data?.result,d=a?.result?.called&&!a?.result?.loading,c=u.b()?.workspace_state,m=(0,g.TH)().pathname,p=x.q()?.videos?.total_personal_active_videos;switch(n){case M.INVITE_CALLOUT:return h.createElement(h.Suspense,{fallback:null},h.createElement(R,{displayMode:e,setShowInviteToolTip:t}));case M.GET_STARTED_CHECKLIST_CALLOUT:return void 0===c||void 0===p?null:h.createElement(h.Suspense,{fallback:null},!m.startsWith(i.kc)||l||p>1?h.createElement(o.u0,{inSidebar:!0,isCollapsed:"COLLAPSED"===e}):null);case M.JOIN_TEAM_CALLOUT:if(r.ub){if(!d)return null;if(!s)return h.createElement(D,{displayMode:e},"Cannot display join team callout because there is no suggested workspace")}return h.createElement(h.Suspense,{fallback:null},h.createElement(z,{displayMode:e,requestPending:s.requestStatus===v.i.PENDING,autoJoin:s.autoJoin,workspace:s.workspace}));case M.AUTO_JOIN_CALLOUT:if(r.ub){if(!d)return null;if(!s)return h.createElement(D,{displayMode:e},"Cannot display autojoin callout because there is no suggested workspace")}return h.createElement(h.Suspense,{fallback:null},h.createElement(U,{displayMode:e,workspace:s.workspace}));default:return null}}let $=new URLSearchParams(window.location.search);function B(){let e=(0,s.useCurrentUserSelector)(e=>e.createdAt,new Date),t=(0,p.hP)(),a=(0,w.K)(),i=I(),o=function(){let[e]=(0,L.jd)(),[t,a]=(0,L.EE)();return(0,W.UW)({manualDismissed:e,timeDismissal:t,setTimedDismissal:a})}(),u=function(){let[e]=(0,L.IS)(),[t,a]=(0,L.ew)();return(0,W.UW)({manualDismissed:e,timeDismissal:t,setTimedDismissal:a})}(),g=(0,p.hP)(),_=(0,m.e$)([b.INVITE_VIEWER_ACTION,b.INVITE_CREATOR_ACTION,b.INVITE_ADMIN_ACTION,b.INVITE_CREATOR_LITE_ACTION]),x=(0,s.useCurrentUserSelector)(e=>P(e.scopes),{}),A=function(){let{value:e={}}=(0,S.h)(y.aM.WORKSPACE_DOMAIN_JOIN_INFO);return(0,h.useMemo)(()=>Object.values(e).some(({autoJoin:e})=>e),[e])}(),V=(0,c.j)(),F=(0,d._)(k.yF),[O]=(0,T.z)(l.xS,!1),N=i.hasFlag,D=i.result,z=i?.result?.data?.result,U=!O&&_;if(r.ub){let e=$.get(n.hQ);if(e&&M[e])return e}if(F){let r=t?.memberRole===f.b3;if(Math.floor((new Date-e)/864e5)>C.B1)V(k.yF);else{if(r)return null;if("desktop"===E.VV.type)return a?null:M.GET_STARTED_CHECKLIST_CALLOUT}}if(N){if(N&&z?.workspace&&!z.hasPendingInvitation&&!z.isCurrentUserMember&&z.requestStatus!==v.i.APPROVED&&!o&&x.hasSuggestedWorkspaceSidebarScope)return M.JOIN_TEAM_CALLOUT;if(D&&!D.loading){let e=x.hasInviteViewerActionScope||x.hasInviteCreatorActionScope;return x.hasWorkspaceJoinManageScope&&x.hasAutojoinSidebarScope&&e&&!A&&z?.workspace&&z.workspace.id===g?.id&&z.isCurrentUserMember&&!u?M.AUTO_JOIN_CALLOUT:U?M.INVITE_CALLOUT:null}}return void 0===N?null:U?M.INVITE_CALLOUT:null}},18617:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(77848),n=a.n(r),l=a(66420),i=a(14728),o=a(68066),s=a(93686),d={sidebarCtaContainer:"sidebar-cta-container_sidebarCtaContainer_19c",isCollapsed:"sidebar-cta-container_isCollapsed_oc3"},c=function({className:e="items:center",color:t="var(--lns-color-body)",backgroundColor:a="var(--lns-color-highlight)",onDismiss:r,children:c,onClick:m,width:u="var(--navSidebarInnerWidth)"}){let{toggleSidebar:p,isCollapsed:h}=(0,s.f)();return l.createElement(m?"button":"aside",{onClick:()=>h&&p(),style:{width:u,backgroundColor:a,color:t},className:n()("flex flexDirection:column relative items:center radius:large p:medium mt:auto",e,d.sidebarCtaContainer,h&&d.isCollapsed)},!h&&r&&l.createElement("div",{className:"absolute top:xsmall right:xsmall"},l.createElement(i.hU,{altText:"Dismiss",icon:l.createElement(o.G,null),onClick:e=>r(e)})),c)}},27843:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(26998),n=a(66420),l=a(89895),i=a(91353),o=a(57063);function s(){let e=(0,l.v9)(e=>e.checklist.first_video_recording),t=(0,l.v9)(e=>e.checklist.first_video_viewed),a=(0,l.v9)(e=>e.checklist.share_video),s=(0,l.v9)(e=>e.checklist.add_teammate),d=(0,l.v9)(e=>e.checklist.download_recorder),c=(0,r.useCurrentUserSelector)(e=>e.hasActivatedDesktopApp,null),m=(0,r.useCurrentUserSelector)(e=>e.hasActivatedChromeExtension,null),u=(0,o.L)(),p=d||c||m||u;return(0,n.useMemo)(()=>({[i.cG]:!0,[i.DL]:p,[i.ev]:e,[i.x1]:a,[i.bp]:t,[i.gl]:s}),[p,e,a,t,s])}},18369:function(e,t,a){a.d(t,{z:function(){return h}});var r=a(26998),n=a(15695),l=a.n(n),i=a(29483),o=a.n(i),s=a(28487),d=a.n(s),c=a(66420),m=a(89895),u=a(41233),p=a(94149);function h(e,t){let a=(0,r.useCurrentUserSelector)(e=>e.id,null),n=(0,m.v9)(p.UX),i=`${a}:${n}`,[s,h]=(0,u.Z)(e),g=t;s&&a&&n&&(g=s[i]);let E=(0,c.useCallback)(e=>{let t=o()(s)?s:{};h({...t,[i]:e})},[i,h,s]),C=(0,c.useCallback)(()=>{l()(s,i)&&h(d()(s,i))},[i,h,s]);return[g,E,C]}},24616:function(e,t,a){a.d(t,{DZ:function(){return u},EE:function(){return d},IS:function(){return i},au:function(){return o},ew:function(){return c},jd:function(){return s},jp:function(){return l},kp:function(){return m}});var r=a(22562),n=a(74431);let l=()=>(0,n.PQ)(r.iz),i=()=>(0,n.PQ)(r.sI),o=()=>(0,n.PQ)(r.nH),s=()=>(0,n.PQ)(r.d8),d=()=>(0,n.PQ)(r.Cv),c=()=>(0,n.PQ)(r.Iw),m=()=>(0,n.PQ)(r.VP),u=()=>(0,n.PQ)(r.Ks)},74431:function(e,t,a){a.d(t,{PQ:function(){return l},UW:function(){return i}});var r=a(26998);a(66420);var n=a(41233);function l(e){let[t,a]=(0,n.Z)(e),l=(0,r.useCurrentUserSelector)(e=>e.id,void 0);return[t?.[l],(e=!0)=>{a(t=>({...t,[l]:e}))}]}function i({manualDismissed:e,timeDismissal:t,setTimedDismissal:a}){return!!e||!0===t||!(typeof t>"u")&&Date.now()>Number(t)&&(a(!0),!0)}a(60557)},11745:function(e,t,a){a.d(t,{A:function(){return i}});var r=a(66420),n=a(14728),l=a(16741);let i=({callback:e=()=>null,timeout:t=3e3})=>((0,r.useEffect)(()=>{let a=setTimeout(()=>{e()},t);return()=>clearTimeout(a)},[e,t]),r.createElement(n.ggW,{justifyContent:"center"},r.createElement("div",{id:"myid",className:"LoomLogoCheckAnimation_loomLogoCheckContainer_GbW"},r.createElement("div",{className:"LoomLogoCheckAnimation_logoSpinnerContainer_2nD"},r.createElement(n.m9_,{animation:"spin 2s 0.2s steps(49) forwards"})),r.createElement(l.y,{className:"LoomLogoCheckAnimation_checkCircle_SDs"}))))},63968:function(e,t,a){a.d(t,{Z_:function(){return eS},u0:function(){return Q},JO:function(){return L},ZX:function(){return eR}});var r,n,l,i=a(72931),o=a(77848),s=a.n(o),d=a(34077),c=a.n(d),m=a(66420),u=a(14728),p={progressWrapper:"ExpChecklistV2_progressWrapper_yE7",taskList:"ExpChecklistV2_taskList_38w",taskItem:"ExpChecklistV2_taskItem_1MQ",taskItemIncomplete:"ExpChecklistV2_taskItemIncomplete_38V",taskItemMedium:"ExpChecklistV2_taskItemMedium_3n7",taskItemSmall:"ExpChecklistV2_taskItemSmall_3q8"},h=((r=h||{}).Small="small",r.Medium="medium",r);let g=["linear-gradient(to right, #eeaa55, #eeaa55)","linear-gradient(to right, #eeaa55, #df7a73)","linear-gradient(to right, #dd7179, #c736b7)","linear-gradient(to right, #c137b9, #9d41cc)"],E=["linear-gradient(to right, #eeaa55, #f0863d)","linear-gradient(to right, #f0863d, #d8009c)","linear-gradient(to right, #d8009c, #9d41cc)"];function C({tasks:e,taskHeight:t="medium"}){let a=e.reduce((e,t)=>t.isComplete?e+1:e,0),r=Array(e.length).fill(!1);return c()(r,!0,0,a),m.createElement(u.xMy,null,m.createElement("div",{className:s()(p.progressWrapper,"flex","items:center","width:full"),"aria-hidden":"true"},m.createElement("ol",{className:p.taskList},r.map((a,r)=>m.createElement("li",{key:`${r}${a}`},m.createElement("div",{style:{background:a?3===e.length?E[r]:g[r]:"var(--lns-color-grey3)"},className:s()(p.taskItem,!a&&p.taskItemIncomplete,"medium"===t?p.taskItemMedium:p.taskItemSmall)}))))))}var f=a(41897),b=a(84553),y=a(36311),k={details:"ExpChecklistV2_details_26P",completionAnimation:"ExpChecklistV2_completionAnimation_3xC",summary:"ExpChecklistV2_summary_3Uf",disabled:"ExpChecklistV2_disabled_MbQ",statusIcon:"ExpChecklistV2_statusIcon_3Nv",isCurrentTask:"ExpChecklistV2_isCurrentTask_3Qk",isComplete:"ExpChecklistV2_isComplete_1Ks",content:"ExpChecklistV2_content_3Rm",toggleIcon:"ExpChecklistV2_toggleIcon_eNj",transitionEnter:"ExpChecklistV2_transitionEnter_2EP",transitionEnterActive:"ExpChecklistV2_transitionEnterActive_3n_",transitionExit:"ExpChecklistV2_transitionExit_ckm",transitionExitActive:"ExpChecklistV2_transitionExitActive_1D6"},v=a(2677);let _={enter:k.transitionEnter,enterActive:k.transitionEnterActive,exit:k.transitionExit,exitActive:k.transitionExitActive};function I({isOpen:e,isComplete:t,isCurrent:a,showCompletionAnimation:r,title:n,children:l,onOpen:o,onClose:d,task:c,displayContext:p}){let h=!!l,g=e?"bold":"book",E=t?"bodyDimmed":"body";return m.createElement("details",{className:s()(k.details,t&&k.isComplete,a&&k.isCurrentTask,e&&k.isOpen,!h&&k.disabled,r&&k.completionAnimation),open:e},m.createElement("summary",{className:k.summary,onClick:t=>{t.preventDefault(),e?d(t):h&&o(t),v.track(i.W10,{displayContext:p})},tabIndex:h?0:-1},m.createElement("span",{className:k.statusIcon}),m.createElement(b.Z,{classNames:_,timeout:300},m.createElement(u.xvT,{fontWeight:g,color:E},n)),h&&m.createElement("span",{className:k.toggleIcon},m.createElement(u.JO$,{icon:m.createElement(y.u,{className:k.toggleIcon,style:{transform:`rotate(${e?180:0}deg)`}}),color:E}))),m.createElement(f.Z,{id:`${c.id}-panel`,duration:300,height:e?"auto":0},m.createElement("div",{className:s()(k.content,t&&k.isComplete)},l)))}var x=a(11745),w=a(76625),S=a(73433),T={allComplete:"ExpChecklistV2_allComplete_1Z7",collapseButton:"ExpChecklistV2_collapseButton_wwj"},L=((n=L||{}).Full="full",n.Compact="compact",n.Collapsed="collapsed",n);function W({openTaskId:e,currentTaskId:t,openTask:a,tasks:r,canBeMinimized:n,closeChecklist:l,displayContext:o=L.Full}){let s=(0,w.j)();return t?m.createElement(u.W20,{bottom:"small",overflow:"hidden",radius:"large",zIndex:"1"},m.createElement(u.W20,{padding:"large",paddingTop:"large",backgroundColor:o===L.Compact?"blurpleLight":"background"},m.createElement(u.ggW,{alignItems:"center",justifyContent:o===L.Full?"center":"space-between"},m.createElement(u.xvT,{color:"body",size:o===L.Full?"heading-sm":"body-md",fontWeight:"bold"},"Start your Loom journey"),n&&m.createElement("div",{className:T.collapseButton},m.createElement(u.hU,{altText:"Minimize checklist",size:"medium",icon:m.createElement(y.u,null),onClick:()=>l()}))),m.createElement(u.xMy,null,o===L.Full&&m.createElement(m.Fragment,null,m.createElement(u.LZC,{top:"small"}),m.createElement(u.xvT,{color:"bodyDimmed",size:"body-md"},r.length," easy steps to becoming a Loom pro")),m.createElement(u.LZC,{top:o===L.Full?"large":"medium"}),m.createElement(C,{tasks:r,taskHeight:o===L.Full?h.Medium:h.Small}))),m.createElement(u.W20,{paddingTop:o===L.Full?"":"small",paddingBottom:"medium",backgroundColor:"background",position:"relative"},m.createElement("ol",null,r.map(r=>m.createElement("li",{className:"block",key:r.id},m.createElement(I,{task:r,title:r.title,isCurrent:t===r.id,isComplete:r.isComplete,isOpen:r.id===e,onOpen:()=>a(r.id),onClose:()=>a(null),showCompletionAnimation:!1,displayContext:o},r.cta?.(o===L.Full?"medium":"small")||null)))))):o!==L.Full?m.createElement(u.W20,{bottom:"small",overflow:"hidden",radius:"large",zIndex:"1"},m.createElement(u.W20,{paddingTop:"large",paddingBottom:"xlarge",backgroundColor:"background",position:"relative"},m.createElement("div",{className:T.allComplete},m.createElement(u.xMy,{alignment:"center"},m.createElement(u.ggW,{alignItems:"center",justifyContent:"center",gap:"large",autoFlow:"row"},m.createElement(x.A,{callback:()=>{s(S.yF),v.track(i.hPj,{displayContext:o})},timeout:5e3}),m.createElement(u.ggW,{autoFlow:"row"},m.createElement(u.xvT,{size:"body-md",fontWeight:"bold",alignment:"center"},"Congrats!"),m.createElement(u.xvT,{size:"body-md",fontWeight:"bold",alignment:"center"},"You're becoming a pro")),m.createElement(C,{tasks:r})))))):null}var A=a(20345),V=a(35692),F=a(39014),O=a(14374),N=a(16741),D=a(91353),P=a(58461),z=a(27843),U=a(22562),R=a(74431);let M=()=>(0,R.PQ)(U.sp);var Z={tasksRemainingPill:"ExpChecklistV2_tasksRemainingPill_3c9",checkmark:"ExpChecklistV2_checkmark_zl8"},$=a(69815);function B({isOpen:e=!1,onClick:t,tasks:a}){return m.createElement(m.Fragment,null,m.createElement(u.ggW,{justifyContent:"space-between"},m.createElement("button",{className:"ExpChecklistV2_titleButton_2F4",onClick:t},m.createElement(u.xvT,{color:"body",size:"body-md",fontWeight:"bold"},"Start your Loom journey")),m.createElement("div",{className:"ExpChecklistV2_chevron_1Tw"},m.createElement(u.hU,{altText:"Minimize checklist",size:"medium",icon:e?m.createElement(y.u,null):m.createElement($.I,null),onClick:t}))),m.createElement(u.LZC,{top:"medium"}),m.createElement(C,{taskHeight:h.Small,tasks:a}))}var j=((l=j||{}).FullPage="fullPage",l.SidebarChecklistMaximized="sidebarMaximized",l.SidebarOpenMinimized="sidebarOpenMinimized",l.SidebarClosedMinimized="sidebarClosedMinimized",l);let J=[D.DL,D.ev,D.x1,D.gl],G=()=>{let e=(0,V.m)();return(0,m.useMemo)(()=>e?J.filter(e=>e!==D.gl):J,[e])},H=(e,t,a)=>e?a?t?"sidebarClosedMinimized":"sidebarOpenMinimized":"sidebarMaximized":"fullPage",K=e=>{switch(e){case"fullPage":return L.Full;case"sidebarMaximized":return L.Compact;default:return L.Collapsed}},Q=({inSidebar:e=!1,isCollapsed:t=!1})=>{let a=(0,z.Z)(),[r,n]=M(),l=G(),o=H(e,t,r),s=K(o),[d,c]=(0,m.useState)(()=>(0,A.V)(a,s)),[p,h]=(0,m.useState)(null),g=(0,m.useRef)(a),E=(0,m.useRef)(),C=A.c(d)?.id||null;(0,m.useEffect)(()=>{h(C)},[C]);let f=()=>{v.track(i.m7l),n(!1)},b=()=>{v.track(i.GpO),n(!0)},y=(0,m.useCallback)(e=>{let t=d.find(t=>t.id===e);if(t&&(t.isComplete=!0,c([...d])),clearTimeout(E.current),p===e){let t=d.find(t=>!t.isComplete&&t.id!==e);t&&(E.current=setTimeout(()=>{h(t.id)},450))}},[p,d]);(0,m.useEffect)(()=>{l.forEach(e=>{let t=g.current[e],r=a[e];r!==t&&(g.current[e]=r,y(e))})},[a,y,l]),(0,F.b)(()=>{v.track(i.GFU,{displayContext:s})});let k=null;switch(o){case"fullPage":k=m.createElement(W,{currentTaskId:C,openTaskId:p,closeChecklist:b,openTask:e=>h(e),tasks:d,canBeMinimized:e,displayContext:L.Full});break;case"sidebarMaximized":k=m.createElement(W,{currentTaskId:C,openTaskId:p,closeChecklist:b,openTask:e=>h(e),tasks:d,canBeMinimized:e,displayContext:L.Compact});break;case"sidebarOpenMinimized":k=m.createElement(u.W20,{padding:"large",backgroundColor:"blurpleLight",borderSide:"all",radius:"large"},m.createElement(B,{isOpen:!r,onClick:f,tasks:d}));break;case"sidebarClosedMinimized":k=m.createElement(u.W20,{backgroundColor:"blurpleLight",radius:"full",height:"100%",onClick:f},m.createElement("div",{className:Z.checkmark},m.createElement(u.JO$,{icon:m.createElement(N.y,null),color:"primary",size:3}),m.createElement("span",{className:Z.tasksRemainingPill},m.createElement(u.xvT,{size:"body-sm",fontWeight:"bold",color:"white"},d.reduce((e,t)=>t.isComplete?e:e+1,0)))));break;default:O.error(Error("Invalid controller state"),{message:"Error in ChecklistV2 Controller"},{team:P.SZ.Outreach})}return m.createElement(u.W20,{..."fullPage"===o?{}:"sidebarClosedMinimized"===o?{position:"absolute",width:"2.75rem",height:"2.75rem",bottom:"8px",radius:"full",borderSide:"all",borderWidth:"1px",borderColor:"primary",shadow:"small"}:{position:"absolute",width:"15.5rem",bottom:"8px",borderSide:"all",borderWidth:"1px",borderColor:"primary",shadow:"small",radius:"large"}},k)};var q=a(49003),X=a(26998),Y=a(41245),ee=a(89895),et=a(36564),ea=a(29256),er=a(28668);let en=(0,er.Ps)`
    fragment VideoCardVisibilityFragment on RegularUserVideo {
  visibility
  spaces {
    name
    id
    privacy
    isArchived
  }
  organization {
    id
    name
  }
  privacy
  currentUserCanEdit
}
    `;var el=a(38045),ei=a(84515);let eo={},es=(0,er.Ps)`
    query GetMostRecentVideo($startDate: String!, $endDate: String!, $offset: Int!, $limit: Int!) {
  recentUserVideos(
    startDate: $startDate
    endDate: $endDate
    offset: $offset
    limit: $limit
  ) {
    id
    name
    video_properties {
      width
      height
    }
    ... on RegularUserVideo {
      ...VideoCardVisibilityFragment
      ...VideoPlayerV2Fragment
    }
  }
}
    ${en}
${el.N}`;function ed(e){let t={...eo,...e};return ei.a(es,t)}let ec=new Date(Date.now()+864e5);var em={videoCardThumbnailWrapper:"OnboardingTipsAndTricks_videoCardThumbnailWrapper_22Y"};let eu=()=>{let e=(0,ee.I0)(),t=(0,X.useCurrentUserSelector)(e=>e.createdAt,new Date).toISOString(),{error:a,loading:r,data:n,startPolling:l,stopPolling:i}=ed({variables:{startDate:t,endDate:ec.toISOString(),limit:1,offset:0}});(0,m.useEffect)(()=>{(n?.recentUserVideos?n?.recentUserVideos[0]:void 0)&&!r?(i(),e((0,et.KS)({item:ea.d8.FirstVideoRecording,value:!0}))):l(3e4)},[l,i,n,r,e]);let o=n?.recentUserVideos?n?.recentUserVideos[0]:void 0,d=o?.name,c=!r&&!a&&o,p=c?m.createElement(u.ggW,{gap:"small",autoFlow:"row"},m.createElement(u.ggW,{autoFlow:"column",gap:"small"},m.createElement(u.TRl,{variant:"symbol",maxWidth:3}),m.createElement(u.xvT,{fontWeight:"bold",size:"body-lg"},d)),m.createElement(u.W20,null,m.createElement("div",{className:s()(em.videoCardThumbnailWrapper,"radius:large","overflow:hidden")},m.createElement(Y.VZ,{videoModel:o})))):m.createElement(u.W20,null,m.createElement("iframe",{allowFullScreen:!0,style:{aspectRatio:"16/9",border:"none",maxWidth:"28.5rem",minWidth:"24rem"},className:"width:full radius:large",src:`${q.cu}/embed/99d30063c8874f87b004d53b8099befd?minimal_player=true`,title:"Loom"}));return r?null:m.createElement(u.W20,{paddingTop:"large"},m.createElement(u.ggW,{gap:"medium",justifyContent:"center",autoFlow:"row"},m.createElement(u.ggW,{justifyContent:"center",autoFlow:"row",gap:"small"},m.createElement(u.xvT,{color:"body",size:"heading-sm",fontWeight:"bold",alignment:"center"},c?"Share your Loom":"Let's get started"),m.createElement(u.xvT,{color:"bodyDimmed",size:"body-md",alignment:"center"},c?"Easily copy the link or send your Loom in an email":"Learn how to record your first Loom")),p,m.createElement(eR,{includeUploadButton:!0,includeShareButton:!0,displayContext:L.Full})))};var ep=a(93572),eh=a(60748),eg=a(33315),eE=a(89536),eC=a(85056),ef=a(84888),eb=a(27584),ey=a(6621),ek=a(19559);let ev={},e_=(0,er.Ps)`
    query GetChecklistV2CommunityLooms($returnAll: Boolean) {
  getCommunityLoomIdsForEmptyStates(returnAll: $returnAll) {
    ... on GetCommunityLoomIdsForEmptyStatesPayload {
      watchSortedAndRandomizedIds
      starterVideos {
        ...VideoFields
        ...VideoPlayerV2Fragment
      }
    }
    ... on Error {
      message
    }
  }
}
    ${ek.b}
${el.N}`,eI=e=>{let t=e?.getCommunityLoomIdsForEmptyStates?.__typename==="GetCommunityLoomIdsForEmptyStatesPayload"?e?.getCommunityLoomIdsForEmptyStates.starterVideos:[];return{videoIds:e?.getCommunityLoomIdsForEmptyStates?.__typename==="GetCommunityLoomIdsForEmptyStatesPayload"?e?.getCommunityLoomIdsForEmptyStates.watchSortedAndRandomizedIds:[],starterVideos:t}},ex=()=>{let{data:e,loading:t}=function(e){let t={...ev};return ei.a(e_,t)}(),{starterVideos:a,videoIds:r}=eI(e),{selectedWorkspace:n}=(0,ef.mf)(),l=(0,eb.df)(n)?ep.C.LIBRARY_ATLASSIAN:ep.C.LIBRARY,i=(0,eE.W9)(ey.SRG),{carouselTitle:o,carouselVideos:s,showConfigVideos:d}=(0,eC.L)()[l],c=i&&d?i.videos:s;return m.createElement(u.W20,{width:"auto"},!t&&r.length>0?m.createElement(eh.Z,{videoIds:r,starterVideos:a}):m.createElement(eg.Z,{title:o,videoIds:c}))};var ew={outlineFade:"ExpChecklistV2_outlineFade_7Xl"};function eS(){return m.createElement(u.ggW,{gap:"xxlarge",autoFlow:"row",width:"100%",justifyContent:"center"},m.createElement(u.ggW,{justifyContent:"center"},m.createElement(u.ggW,{columns:["1fr","1fr"],gap:"xlarge",height:65},m.createElement(u.W20,{className:ew.outlineFade,padding:"large",borderSide:"all",borderWidth:"2px",borderColor:"primary",radius:"xlarge",shadow:"medium",height:"100%",width:55},m.createElement(Q,{inSidebar:!1,isCollapsed:!1})),m.createElement(u.W20,{className:ew.outlineFade,padding:"large",borderSide:"all",borderWidth:"2px",borderColor:"primary",radius:"xlarge",shadow:"medium",height:"100%",width:55},m.createElement(eu,null)))),m.createElement(u.W20,{maxWidth:118},m.createElement(ex,null)))}var eT=a(79839),eL=a(10284),eW=a(2658),eA=a(99046),eV=a(57063),eF=a(49470),eO=a(80512),eN=a(7910),eD=a(80686),eP=a(25320),ez=a(24861),eU=a(72021);function eR({includeUploadButton:e,includeShareButton:t,displayContext:a}){let r=(0,ee.I0)(),n=(0,X.useCurrentUserSelector)(e=>e.createdAt,new Date).toISOString(),l=(0,eV.L)(),{error:o,loading:s,data:d}=ed({variables:{startDate:n,endDate:ec.toISOString(),limit:1,offset:0}}),[c,p]=(0,eF.Z)(1e4),{completeChecklistItem:h}=(0,eA.c)(ea.d8.ShareVideo),g=d?.recentUserVideos?d?.recentUserVideos[0]:void 0,E=`${q.OA}/share/${g?.id}`,C=l?m.createElement(eP.RecordButton,{priorityList:[ez.fl],shouldLaunchExtensionTutorial:!0,source:eP.ONBOARDING_CHECKLIST},m.createElement(u.zxk,{hasFullWidth:!0,variant:"neutral",onClick:()=>v.track(i.kWo,{displayContext:L.Full})},"Watch demo")):m.createElement(eW.Z,{name:eD.Vc},m.createElement(eU.Z,{hasFullWidth:!0,buttonVariant:"neutral"})),f="Copy last video link";c?f="Link copied!":a!==L.Full&&(f="Copy link");let b=a===L.Full?"neutral":"primary",y=a===L.Full?"medium":"small";return s||o||!g?m.createElement(u.xMy,null,e&&m.createElement(m.Fragment,null,m.createElement(eU.f,null),C,m.createElement(u.LZC,{top:"medium"})),m.createElement(eP.RecordButton,{source:eP.ONBOARDING_CHECKLIST},m.createElement(u.zxk,{size:y,hasFullWidth:!0,variant:"primary"},"Record a Loom"))):m.createElement(u.xMy,null,m.createElement(m.Fragment,null,a===L.Full?m.createElement(u.zxk,{size:y,hasFullWidth:!0,variant:b,href:E,target:"_blank",htmlTag:"a",onClick:()=>null},"Edit video"):m.createElement(u.zxk,{size:y,hasFullWidth:!0,variant:b,onClick:e=>{e.stopPropagation();let[,t]=(0,eN.t1)({videoUrl:E});p(),h(),v.track(i.IiW,{displayContext:L.Full})}},f),m.createElement(u.LZC,{top:"medium"})),t&&m.createElement(u.zxk,{hasFullWidth:!0,variant:"primary",onClick:()=>{r((0,eO.h7)({modalType:eT.cc,options:{source:eL.B.TipsAndTricksShareButton,videoId:g?.id}})),v.track(i.SK6,{displayContext:L.Full})}},"Share video"))}},20345:function(e,t,a){a.d(t,{V:function(){return L},c:function(){return T}});var r=a(66420),n=a(91353),l=a(72931),i=a(49003),o=a(99046),s=a(52877),d=a(68365),c=a(14728),m=a(71216),u=a(17990),p=a(29256),h=a(2677);let g=({displayContext:e,buttonSize:t="medium"})=>{let{completeChecklistItem:a}=(0,o.c)(p.d8.DownloadRecorder),n=(0,d.mF)(),g=(0,d.uh)(),E=(0,s._)();return r.createElement(r.Fragment,null,r.createElement(c.zxk,{icon:r.createElement(m.j,null),onClick:()=>{h.track(l.E6t,{displayContext:e}),a(),window.open(i.rl,"_blank")},hasFullWidth:!0,size:t,disabled:!E},"Install Chrome Extension"),g&&r.createElement(c.LZC,{top:"small"},r.createElement(u.Z,{variant:"primary",size:t,hasFullWidth:!0,afterOnClick:()=>{h.track(l.J1D,{platform:n,displayContext:e}),a()}})))};var E=a(79839),C=a(51512),f=a(89895),b=a(80512),y=a(93323);let k=({displayContext:e,buttonSize:t="medium"})=>{let a=(0,f.I0)(),{showInviteButton:n}=(0,C.Q)();return n?r.createElement(r.Fragment,null,r.createElement(c.xvT,{color:"bodyDimmed"},"Loom is better when you know who you’re working with. Invite your team for free!"),r.createElement(c.LZC,{bottom:"small"}),r.createElement(c.zxk,{hasFullWidth:!0,size:t,icon:r.createElement(y.X,null),onClick:()=>{h.track(l.MZz,{displayContext:e}),a((0,b.h7)({modalType:E.Hz}))}},"Invite teammates")):null};var v=a(29458),_=a(25320),I=a(27843);let x=({buttonSize:e,displayContext:t})=>{let{recorder:a}=(0,v.P)(),i=(0,I.Z)(),o=a.chrome||a.desktop,s=!o&&!i[n.DL];return r.createElement(r.Fragment,null,r.createElement(c.xvT,{color:"bodyDimmed"},"Record a short video to share with your teammates. Try introducing yourself or replacing a meeting."),r.createElement(c.LZC,{top:"small"}),r.createElement(c.zxk,{hasFullWidth:!0,size:e,href:"https://www.loom.com/share/6670e3eba3c84dc09ada8306c7138075?t=0",target:"_blank",htmlTag:"a",onClick:()=>h.track(l.MSX,{displayContext:t})},"Learn how to record"),r.createElement(c.LZC,{top:"small"}),r.createElement(c.ua7,{isInline:!1,tabIndex:-1,content:o?null:"Download Loom, then start recording!",placement:"bottomCenter",maxWidth:32},r.createElement(_.RecordButton,{source:_.ONBOARDING_CHECKLIST},r.createElement(c.zxk,{hasFullWidth:!0,variant:"primary",disabled:s,size:e,onClick:()=>{h.track(l.yhO,{displayContext:t})}},"Start Recording"))))};var w=a(63968);let S=({displayContext:e,hasRecordedFirstVideo:t=!1})=>r.createElement(r.Fragment,null,r.createElement(c.xvT,{color:"bodyDimmed"},t?"Now it’s time to get some views. Try sharing your last video.":"Record a Loom first to start sharing it with your team."),r.createElement(c.LZC,{top:"medium"}),r.createElement(c.zxk,{size:e===w.JO.Full?"medium":"small",hasFullWidth:!0,href:"https://www.loom.com/share/29f210bc12484eaa81ca462381fb4415?t=0",target:"_blank",htmlTag:"a",onClick:()=>{h.track(l.wxp,{displayContext:e})}},"Learn how to share"),e!==w.JO.Full&&r.createElement(r.Fragment,null,r.createElement(c.LZC,{top:"small"}),r.createElement(w.ZX,{includeUploadButton:!1,includeShareButton:!1,displayContext:e})));function T(e){return e.find(e=>!e.isComplete)||null}let L=(e,t)=>[{id:n.DL,title:"Download",cta:e=>r.createElement(g,{displayContext:t,buttonSize:e}),isComplete:e[n.DL],tooltipLabel:"Download a recorder to record anywhere, anytime"},{id:n.ev,title:"Record",cta:e=>r.createElement(x,{displayContext:t,buttonSize:e}),isComplete:e[n.ev],tooltipLabel:"Record your first video to have better and fewer meetings"},{id:n.x1,title:"Share",cta:a=>r.createElement(S,{hasRecordedFirstVideo:e[n.ev],displayContext:t}),isComplete:e[n.x1],tooltipLabel:"Share your video to get your ideas out"},{id:n.gl,title:"Invite",cta:e=>r.createElement(k,{displayContext:t,buttonSize:e}),isComplete:e[n.gl],tooltipLabel:"Invite a teammate to start collaborating"}]},60748:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(49003),n=a(18987),l=a(35979),i=a(97020),o=a(74816),s=a(66420),d=a(73845),c=a(14728),m=a(67491),u=a(19267),p=a(28668),h=a(19559),g=a(38045),E=a(14095);let C={},f=(0,p.Ps)`
    query FetchVideosById($videoIds: [ID!]!) {
  fetchVideosById(videoIds: $videoIds) {
    ... on FetchVideosByIdPayload {
      __typename
      videos {
        ...VideoFields
        ...VideoPlayerV2Fragment
      }
    }
    ... on Error {
      message
    }
  }
}
    ${h.b}
${g.N}`;var b=({videoIds:e,starterVideos:t})=>{let[a,p]=(0,s.useState)(20),[h,g]=(0,s.useState)(!1),b=(0,s.useRef)(null),[y,k]=(0,s.useState)(t),{isExpUpdatedMobileOnboarding:v}=(0,o.y)(),[_,{data:I,loading:x}]=function(e){let t={...C,...e};return E.t(f,t)}({fetchPolicy:"no-cache"}),w=(0,s.useMemo)(()=>(I?.fetchVideosById?.__typename==="FetchVideosByIdPayload"&&I?.fetchVideosById?.videos?.map(e=>e),[]),[I]);(0,s.useMemo)(()=>{k([...y,...w]),g(y.length===e.length)},[w,k,g]);let S=(0,s.useCallback)(()=>{x||(_({variables:{videoIds:e.slice(a,a+20)}}),p(a+20))},[_,p,x]);(0,m.Z)(b,S);let T=(0,u.K)()&&v;return s.createElement(s.Fragment,null,s.createElement(c.W20,{paddingLeft:T?0:1.5},s.createElement(c.ggW,{gap:"xsmall"},s.createElement(c.xvT,{htmlTag:"h2",size:"body-lg",fontWeight:"bold"},"Inspiration from the"," ",s.createElement(c.rUS,{href:r.EW},"Loom Community")),T?null:s.createElement(l.e,null))),s.createElement(c.LZC,{top:"xsmall"}),s.createElement(c.ggW,{columns:T?"1fr":"1fr 1fr"},y.map(e=>T&&e?s.createElement(c.W20,{key:e.id,paddingY:"small"},s.createElement(n.q,{title:e.name,videoUrl:`${r.OA}/share/${e.id}`,thumbnailUrl:(0,d.Qo)(e.signedDefaultThumbnails.default),duration:e.playable_duration,ownerAvatarUrl:(0,d.kV)(e.owner.avatars),ownerName:e.owner.display_name})):e?s.createElement(c.W20,{key:e.id,padding:1.5},s.createElement(i.Z,{video:e,showProfileOnHover:!0})):null),!h&&s.createElement("div",{ref:b})))}},93572:function(e,t,a){a.d(t,{C:function(){return F.CV},Z:function(){return P}});var r=a(49003),n=a(72931),l=a(77848),i=a.n(l),o=a(26998),s=a(66420),d=a(14728),c=a(31010),m=a(25320),u=a(24861),p={emptyStateCard:"extension-empty-state_emptyStateCard_2yv",emptyStateImg:"extension-empty-state_emptyStateImg_sTT",guided:"extension-empty-state_guided_KTz",unguided:"extension-empty-state_unguided_5Pl"};let h=()=>{let e=(0,o.useCurrentUserSelector)(e=>e.persona?.persona_v1?.role,null),t="";switch(e){case c.E1:t="63db3d7546374b5dba0929a8701842e0";break;case c.DI:t="be70a4ea100942fb88c6ad9ea355e651";break;case c.Re:t="af6d3f5045d6484692e25bb1fef99bdc";break;default:t="b8424c2d163544f8a5135141caa788da"}return s.createElement(d.xMy,null,s.createElement(d.LZC,{top:4}),s.createElement(d.xvT,{htmlTag:"h1",alignment:"center",fontWeight:"bold",size:"heading-lg"},"Hey there, ready to record?"),s.createElement(d.LZC,{top:"xlarge"}),s.createElement(d.ggW,{gap:"large",autoFlow:{default:"row",small:"column"}},[{heading:"I want to practice",cta:"Start a 1 minute demo",source:n.Pqs},{heading:"I’ll explore on my own",cta:"Start recording",source:n.msI}].map(e=>s.createElement(m.RecordButton,{key:e.heading,source:e.source,priorityList:[u.fl],shouldLaunchExtensionTutorial:e.source===n.Pqs},s.createElement("div",{className:p.emptyStateCard},s.createElement(d.xMy,null,s.createElement("div",{className:i()(p.emptyStateImg,e.source.includes("unguided")?p.unguided:p.guided)}),s.createElement(d.LZC,{y:"large"},s.createElement(d.xvT,{alignment:"center",htmlTag:"h2",size:"heading-sm",fontWeight:"bold"},e.heading)),s.createElement(d.W20,{backgroundColor:"#f0f1ff",radius:"full",width:"100%"},s.createElement(d.zxk,{hasFullWidth:!0},e.cta))))))),s.createElement(d.LZC,{top:11}),s.createElement(d.xvT,{color:"bodyDimmed",size:"body-lg",fontWeight:"bold"},"Inspiration to get you started"),s.createElement(d.LZC,{top:"medium"}),s.createElement("iframe",{allowFullScreen:!0,style:{aspectRatio:"16/9",border:"none",maxWidth:"28.5rem"},className:"width:full radius:large",src:`${r.cu}/embed/${t}?hide_owner=true`,title:"Loom"}))};var g=a(57063),E=a(89536),C=a(36890),f=a(59182),b=a(9294),y=a(6621),k=a(53422),v=a(84515),_=a(65655),I=a(74816),x=a(48928),w=a(54526),S=a(46020),T=a(60748),L=a(46937),W=a(87817),A=a.n(W),V=a(8093),F=a(6806),O=({type:e})=>{let{showErrorBar:t}=(0,_.gV)(),{isExpUpdatedMobileOnboarding:a}=(0,I.y)(),{title:r,subtitle:n,buttonText:l}=L.rm[e],{data:i}=(0,v.a)(A(),{fetchPolicy:"no-cache",onError:()=>{t({message:"Oops! Failed to load community content.",severity:k.W9.ERROR})}}),o=i?.getCommunityLoomIdsForEmptyStates?.watchSortedAndRandomizedIds,c=i?.getCommunityLoomIdsForEmptyStates?.starterVideos;if(!o||!c)return null;let m=a?"left":"center";return s.createElement(d.W20,null,s.createElement(d.ggW,{justifyContent:"center"},s.createElement(d.W20,{maxWidth:"480px"},s.createElement(d.ggW,{autoFlow:"row",gap:a?"medium":1},s.createElement(d.xvT,{alignment:m,size:a?"xlarge":"large",fontWeight:"bold"},r),s.createElement(d.xvT,{className:V.Z.textWithNewline,alignment:m,size:a?"medium":"large",fontWeight:"book",color:"bodyDimmed"},n),a?null:s.createElement(d.LZC,{top:"medium"}),s.createElement(d.ggW,{width:"100%",justifyContent:a?"stretch":"center"},a?s.createElement(S.c,{buttonText:l}):l?s.createElement(x.Z,{type:e,isCommunity:!0}):null)))),s.createElement(d.LZC,{id:w.vx,top:a?5:9}),s.createElement(T.Z,{videoIds:o,starterVideos:c}))},N=a(14535);let{WorkspaceDestinationState:D}=b;var P=({type:e})=>{let t=(0,f.TH)().pathname,a=(0,E.W9)(y.DNX),n=(0,E.Mr)({flag:y.wDH,activationValues:y.ZoH}),l=a?.videos?a.videos:[],i=(0,g.L)(),o=n&&l?.length>0,d=(0,C.b)();return void 0===n||void 0===a?null:d?.workspace_state===D.EMPTY&&t.startsWith(r.kc)&&i?s.createElement(h,null):o?s.createElement(O,{type:e}):s.createElement(N.Z,{type:e})}},12207:function(e,t,a){a.d(t,{ks:function(){return s}});var r=a(28668),n=a(70836),l=a(84515);let i={},o=(0,r.Ps)`
    query GetSuggestedWorkspaceForSidebarBanner {
  result: getSuggestedWorkspaceForCurrentUser {
    __typename
    ... on JoinableWorkspace {
      ...SuggestedWorkspaceFragment
    }
  }
}
    ${n.t}`;function s(e){let t={...i,...e};return l.a(o,t)}},70836:function(e,t,a){a.d(t,{t:function(){return n}});var r=a(28668);let n=(0,r.Ps)`
    fragment SuggestedWorkspaceFragment on JoinableWorkspace {
  id
  workspace {
    id
    counts {
      users
    }
    name
    workspaceLogoPath
    members: membersConnection(first: 4) {
      nodes {
        id
        member_role
        user {
          id
          first_name
          display_name
          last_name
          avatars {
            thumb
          }
        }
      }
    }
  }
  autoJoin
  isCurrentUserMember
  requestStatus
  hasPendingInvitation
}
    `},38045:function(e,t,a){a.d(t,{N:function(){return n}});var r=a(28668);let n=(0,r.Ps)`
    fragment VideoPlayerV2Fragment on RegularUserVideo {
  id
  name
  clips {
    id
    processing_information {
      trim_ranges {
        from
        to
      }
    }
    playable_duration
    source_duration
    video_properties {
      duration
      trim_duration
    }
  }
  signedDefaultThumbnails {
    default
    static
  }
  signedThumbnails {
    animatedPreview
  }
  tags
  owner {
    id
    display_name
    avatars {
      thumb
    }
  }
  cta {
    enabled
    text
    url
    mods
  }
  totalComments
  totalReactions
  views {
    total
  }
  playable_duration
  video_properties {
    duration
    trim_duration
    width
    height
    screen_type
    os
    recording_version
    mediaMetadataRotation
    ingestion_type
  }
  flipped_camera
  processing_information {
    trim_id
    instant_editing_enabled
    videoUploadValid
    trim_ranges {
      from
      to
    }
    noise_cancellation_type
  }
  use_emojis
  comments_enabled
  createdAt
  needs_password
  loom_branded_player
  complete
  current_user_is_owner
  white_label_player
  organization {
    brandPrimaryColor
    id
    name
    type
    site_id
    planIncludesAI
  }
}
    `},73032:function(e,t,a){a.d(t,{LZ:function(){return o},X2:function(){return s},Z4:function(){return l},_R:function(){return i},hQ:function(){return n},j0:function(){return r}});let r="onboarding-step",n="sidebar-callout",l="AUTO_JOIN_CALLOUT",i="GET_STARTED_CHECKLIST_CALLOUT",o="INVITE_CALLOUT",s="JOIN_TEAM_CALLOUT"},19559:function(e,t,a){a.d(t,{b:function(){return n}});var r=a(28668);let n=(0,r.Ps)`
    fragment VideoFields on RegularUserVideo {
  id
  name
  complete
  archived
  createdAt
  s3_id
  totalReactions
  totalComments
  organization_id
  currentUserHasWatched
  views {
    total
  }
  thumbnails {
    default
    defaultPlay
    ogFull
    full
    fullPlay
    defaultGif
    defaultGifPlay
    animatedPreview
  }
  owner {
    first_name
    last_name
    id
    avatars {
      name
      large
      thumb
      isAtlassianMastered
    }
  }
  processing_information {
    videoUploadValid
    videoUploadMessage
    trim_id
  }
  playable_duration
  video_properties {
    thumbnail_is_png
    duration
    trim_duration
    recording_version
    width
    height
  }
  organization {
    id
    name
  }
  owner_id
  current_user_is_owner
  download_enabled
  downloadable
  downloadableBy
  currentUserCanEdit
  tags
  use_gif
  visibility
  is_protected
  privacy
  isCommunityLoom
  spaces {
    name
    id
    isArchived
    privacy
    is_primary
    data_age_limit_in_seconds
  }
  folder {
    id
    name
    special_id
    owner_id
    visibility
    owner {
      first_name
      id
      last_name
    }
  }
  isParentOfPersonalizedCopies
  personalizationType
}
    `},99046:function(e,t,a){a.d(t,{c:function(){return d}});var r=a(89895),n=a(36564),l=a(28668),i=a(34017);let o={},s=(0,l.Ps)`
    mutation CompleteChecklistItem($checklistItem: ChecklistItem!) {
  result: completeChecklistItem(checklistItem: $checklistItem) {
    ... on UpdateChecklistItemPayload {
      success
    }
    ... on Error {
      message
    }
  }
}
    `,d=e=>{let t=(0,r.I0)(),a=(0,r.v9)(e=>e.checklist),[l,{loading:d,error:c}]=function(e){let t={...o,...e};return i.D(s,t)}({onCompleted:({result:a})=>{a?.__typename==="UpdateChecklistItemPayload"&&a?.success&&t((0,n.KS)({item:e,value:!0}))}});return{completeChecklistItem:()=>{a[e]||l({variables:{checklistItem:e}})},loading:d,error:c}}},49470:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(66420);function n(e=2e3){let[t,a]=(0,r.useState)(!1);return[t,(0,r.useCallback)(()=>{a(!0),setTimeout(()=>a(!1),e)},[e])]}},29458:function(e,t,a){a.d(t,{P:function(){return E}});var r=a(53422),n=a(17563),l=a(26998),i=a(65655),o=a(79839),s=a(66420),d=a(89895),c=a(80512),m=a(14374),u=a(62353),p=a(58461),h=a(80935),g=a(39014);function E(){let e=(0,d.I0)(),{showErrorBar:t}=(0,i.gV)(),[a,E]=s.useState(!1),C=(0,l.useCurrentUserSelector)(e=>e.hasActivatedChromeExtension,null),f=(0,l.useCurrentUserSelector)(e=>e.hasActivatedDesktopApp,null);return(0,g.b)(()=>{(0,h.Ts)(E)}),{record:()=>{if(C&&a){(0,h.kX)("first-video-share-modal",e=>{e||(m.error("Unable to re-record with the browser extension from the get started checklist",{},{team:p.SZ.Outreach}),t({message:"An error occurred attempting to start a recording",severity:r.W9.ERROR}))});return}if(f){document.location.href=`${(0,u.g1)(n.lC)}://`;return}e((0,c.h7)({modalType:o.K$}))},recorder:{chrome:!!(C&&a),desktop:!!f}}}},8093:function(e,t){t.Z={subtitleText:"community-empty-state_subtitleText_1bj",textWithNewline:"community-empty-state_textWithNewline_3yX"}}}]);
//# sourceMappingURL=https://www.loom.com/admin/sourcemaps/js/3841-fe5822b2b927eff334d4.js.map