!function(){function a(a,b,d){function e(){$.each(c,function(b,c){a.words[b]={name:c.name,word:"",example:c.word}})}function f(){var b=!0;return $.each(a.words,function(a,c){null!=c.word&&c.word||(b=!1)}),b}a.show=!0,d(function(){a.words=c}),a.genders=[{title:"Male",value:"male"},{title:"Female",value:"female"}],a.$on("start-over",function(){e(),a.show=!0}),a.submit=function(){f()&&(a.show=!1,b.$broadcast("ready",a.words,a.gender))},a.split=function(a){return a.split("_").join(" ")}}function b(a,b){a.show=!1,a.$on("ready",function(b,c,d){a.show=!0,a.words=c,a.gender=d}),a.reset=function(){a.show=!1,b.$broadcast("start-over")},a.get=function(b){var c;return null==a.words?"":(a.words.forEach(function(a){return a.name===b?(c=a.word,!1):void 0}),c)}}var c=[{name:"name",word:"Harold"},{name:"sweetheart",word:"Mary"},{name:"noun",word:"Sandwich"},{name:"superlative",word:"Fastest"},{name:"noun2",word:"Banana"},{name:"body_part",word:"Elbow"},{name:"continuous_verb",word:"Hum-diddling"},{name:"noun3",word:"Pizza"},{name:"verb",word:"Throw"},{name:"event",word:"Moon Landing"},{name:"day",word:"Election"},{name:"verb2",word:"Jump"},{name:"verb3",word:"Roll"},{name:"place",word:"Papa joes"},{name:"time_span",word:"5 seconds"},{name:"verb4",word:"Frolic"},{name:"adverb",word:"Glumly"}];angular.module("MadLibs",["ngAnimate"]).controller("MadLibController",["$scope","$rootScope","$timeout",a]).controller("ResultController",["$scope","$rootScope",b])}();