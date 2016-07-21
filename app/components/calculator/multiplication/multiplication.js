(function(){

  angular.module('wat')
    .component('multiplicationComponent', {
      templateUrl: 'app/components/calculator/multiplication/multiplication.html',
      controller: MultiplicationController,
      bindings: {
        bwa: '<',
        formula: '<'
      } 
    })

    function MultiplicationController(){
      

    }

}())