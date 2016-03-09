/*bitballs@0.0.1#components/tournament/viewmodel*/
define("bitballs@0.0.1#components/tournament/viewmodel",function(e,t,n){var a=e("can/map/"),l=(e("bitballs/models/team"),e("bitballs/models/game/"),e("bitballs/models/player"),e("bitballs/models/tournament/"));e("can/map/define/"),n.exports=a.extend({define:{tournament:{Type:l,Value:l}},createTournament:function(e){e&&e.preventDefault();var t=this,n=this.attr("tournament").save().then(function(e){t.attr("tournament",new l)});return this.attr("savePromise",n),n}})});
/*bitballs@0.0.1#components/tournament/list.stache!can@2.3.18#view/stache/system*/
define("bitballs@0.0.1#components/tournament/list.stache!can@2.3.18#view/stache/system",["module","can/view/stache/stache","can/view/stache/mustache_core"],function(e,t,a){var r=t([{tokenType:"start",args:["h2",!1]},{tokenType:"end",args:["h2",!1]},{tokenType:"chars",args:["Tournaments"]},{tokenType:"close",args:["h2"]},{tokenType:"chars",args:["\n"]},{tokenType:"start",args:["tournament-model",!1]},{tokenType:"attrStart",args:["get-list"]},{tokenType:"attrValue",args:["{}"]},{tokenType:"attrEnd",args:["get-list"]},{tokenType:"end",args:["tournament-model",!1]},{tokenType:"special",args:["#if isPending"]},{tokenType:"chars",args:["\n		"]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["info"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["Loading"]},{tokenType:"close",args:["div"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\n	"]},{tokenType:"special",args:["#each value"]},{tokenType:"chars",args:["\n		"]},{tokenType:"start",args:["h3",!1]},{tokenType:"end",args:["h3",!1]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["href"]},{tokenType:"special",args:["routeUrl tournamentId=id"]},{tokenType:"attrEnd",args:["href"]},{tokenType:"end",args:["a",!1]},{tokenType:"special",args:["year"]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:[" "]},{tokenType:"special",args:["#if appState.isAdmin"]},{tokenType:"chars",args:["\n			"]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["type"]},{tokenType:"attrValue",args:["button"]},{tokenType:"attrEnd",args:["type"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-danger"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["destroy()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"special",args:["#isDestroying"]},{tokenType:"attrStart",args:["disabled"]},{tokenType:"attrEnd",args:["disabled"]},{tokenType:"special",args:["/isDestroying"]},{tokenType:"end",args:["button",!1]},{tokenType:"chars",args:["\n					"]},{tokenType:"start",args:["span",!0]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["glyphicon glyphicon-remove"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["span",!0]},{tokenType:"chars",args:["\n			"]},{tokenType:"close",args:["button"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\n		"]},{tokenType:"close",args:["h3"]},{tokenType:"chars",args:["	"]},{tokenType:"special",args:["else"]},{tokenType:"chars",args:["\n		"]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["text-center lead"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["No Tournaments"]},{tokenType:"close",args:["div"]},{tokenType:"special",args:["/each"]},{tokenType:"chars",args:["\n"]},{tokenType:"close",args:["tournament-model"]},{tokenType:"special",args:["#if appState.isAdmin"]},{tokenType:"chars",args:["\n"]},{tokenType:"start",args:["h2",!1]},{tokenType:"end",args:["h2",!1]},{tokenType:"chars",args:["New Tournament"]},{tokenType:"close",args:["h2"]},{tokenType:"chars",args:["\n"]},{tokenType:"start",args:["form",!1]},{tokenType:"attrStart",args:["($submit)"]},{tokenType:"attrValue",args:["createTournament(%event)"]},{tokenType:"attrEnd",args:["($submit)"]},{tokenType:"attrStart",args:["action"]},{tokenType:"attrEnd",args:["action"]},{tokenType:"end",args:["form",!1]},{tokenType:"chars",args:["\n	"]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-group"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n	    "]},{tokenType:"start",args:["label",!1]},{tokenType:"attrStart",args:["for"]},{tokenType:"attrValue",args:["tournament-date"]},{tokenType:"attrEnd",args:["for"]},{tokenType:"end",args:["label",!1]},{tokenType:"chars",args:["Date"]},{tokenType:"close",args:["label"]},{tokenType:"chars",args:["\n	    "]},{tokenType:"start",args:["input",!0]},{tokenType:"attrStart",args:["type"]},{tokenType:"attrValue",args:["date"]},{tokenType:"attrEnd",args:["type"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-control"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["id"]},{tokenType:"attrValue",args:["tournament-date"]},{tokenType:"attrEnd",args:["id"]},{tokenType:"attrStart",args:["placeholder"]},{tokenType:"attrValue",args:["date"]},{tokenType:"attrEnd",args:["placeholder"]},{tokenType:"attrStart",args:["{($value)}"]},{tokenType:"attrValue",args:["tournament.date"]},{tokenType:"attrEnd",args:["{($value)}"]},{tokenType:"end",args:["input",!0]},{tokenType:"chars",args:["\n	"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n	"]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["type"]},{tokenType:"attrValue",args:["submit"]},{tokenType:"attrEnd",args:["type"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["create-btn btn btn-default"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"special",args:["#if tournament.isSaving"]},{tokenType:"attrStart",args:["disabled"]},{tokenType:"attrEnd",args:["disabled"]},{tokenType:"special",args:["/if"]},{tokenType:"end",args:["button",!1]},{tokenType:"chars",args:["Create"]},{tokenType:"close",args:["button"]},{tokenType:"special",args:["#if savePromise.isRejected"]},{tokenType:"chars",args:["\n		"]},{tokenType:"special",args:["#each savePromise.reason.responseJSON"]},{tokenType:"chars",args:["\n			"]},{tokenType:"start",args:["p",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["text-danger"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["p",!1]},{tokenType:"special",args:["."]},{tokenType:"close",args:["p"]},{tokenType:"special",args:["/each"]},{tokenType:"chars",args:["\n	"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\n"]},{tokenType:"close",args:["form"]},{tokenType:"special",args:["/if"]},{tokenType:"done",args:[]}]);return function(t,s,n){var o={module:e};return s instanceof a.Options||(s=new a.Options(s||{})),r(t,s.add(o),n)}});
/*bitballs@0.0.1#components/tournament/list*/
define("bitballs@0.0.1#components/tournament/list",function(t,e,n){var o=t("can/component/component"),a=t("./viewmodel");t("bootstrap/dist/css/bootstrap.css!"),t("can/map/define/"),t("can/route/"),t("can/view/href/");t("bitballs/models/tournament/");o.extend({tag:"tournament-list",template:t("./list.stache!"),viewModel:a,leakScope:!1})});