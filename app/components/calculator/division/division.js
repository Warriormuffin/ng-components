(function(){

  angular.module('wat')
    .component('divisionComponent', {
      templateUrl: 'app/components/calculator/division/division.html',
      controller: DivisionController,
      bindings: {
        bwa: '<',
        formula: '<'
      } 
    })

    function DivisionController(){
      

    }

}())