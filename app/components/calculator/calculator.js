(function(){

  angular.module('wat')
    .component('calculatorComponent', {
      templateUrl: 'app/components/calculator/calculator.html',
      controller: CalculatorController 
    })

    function CalculatorController(){
      var cc = this
      this.myFavNum = 43-1;
      this.addX = function(x){
        cc.myFavNum = x + cc.myFavNum;
      }
    }

}())