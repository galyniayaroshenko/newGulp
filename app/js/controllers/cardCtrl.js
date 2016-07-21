// angular.module('app').controller('cardCtrl', function (cardFactory) {
//     console.log('cardCtrl');
//
//     this.isEditing = false;
//     this.editingCard = null;
//
//     this.deleteCard = function (card) {
//         cardFactory.deleteCard(card);
//     };
//
//     this.editCard = function (card) {
//         this.isEditing = true;
//         this.editingCard = angular.copy(card);
//         console.log("card!!!", card);
//     };
//
//     this.updateCard = function () {
//         cardFactory.updateCard(this.editingCard);
//         this.editingCard = null;
//         this.isEditing = false;
//     }
// });
