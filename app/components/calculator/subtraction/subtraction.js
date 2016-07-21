(function(){

  angular.module('wat')
    .component('subtractionComponent', {
      templateUrl: 'app/components/calculator/subtraction/subtraction.html',
      controller: SubtractionController,
      bindings: {
        bwa: '<',
        formula: '<'
      } 
    })

    function SubtractionController(){
      

    }

}())