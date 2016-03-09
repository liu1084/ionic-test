/**
 * Created by neusoft on 2016/3/7.
 */
// third-party code - cannot be modified
angular.module('ui-rangeSlider', [])
    .directive('rangeSlider', [function() {
    return {
        restrict: 'A',
        replace: true,
        template: '<div>base</div>'
    };
}]);


// this is your extension overriding the original template
angular.module('ui-rangeSlider')
    .config(['$provide', function($provide) {
    $provide.decorator('rangeSliderDirective', function($delegate) {
        var dir = $delegate[0];
        dir.name = 'rangeSlider2'; //not work

        dir.template = ['<div>', dir.template, '<div>extended</div></div>'].join('');

        return $delegate;
    })
}]);

// this is your app
angular.module('sample', ['ui-rangeSlider']);