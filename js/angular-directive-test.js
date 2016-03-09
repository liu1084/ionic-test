/**
 * Created by neusoft on 2016/3/7.
 */
var module = angular.module('mModule', []);
module.directive('counter', function(){
   return {
       restrict: 'E',
       template: '<div class="circle counter">counter</div>',
       replace: true
   };
});

module.directive('counterWrap', function(){
    return {
        restrict: 'E',
        template: '<div><span ng-transclude></span><div ng-transclude></div></div>',
        transclude: true,
        link: function(scope, ele, attrs, controller){
            var counter = ele.find('counter')[0];
            console.log(counter);
        }
    };
});