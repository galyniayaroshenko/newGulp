// angular.module('app').directive('closeEditing', function () {
//     var KEYS = {
//         ESCAPE: 27
//     };
//
//     return {
//         scope: {
//             isEditing: '='
//         },
//         link: function (scope, element, attrs) {
//             console.log('do it!');
//             console.log('KEYS.ESCAPE', KEYS.ESCAPE);
//             element.on('keyup', function (e) {
//                 console.log('asd');
//                 if (_.isEqual(e.keyCode, KEYS.ESCAPE)) {
//                     scope.isEditing = false;
//                     scope.$apply();
//                 }
//             });
//         }
//     };
// });
