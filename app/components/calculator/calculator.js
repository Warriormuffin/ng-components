(function(){

  angular.module('wat')
    .component('calculatorComponent', {
      templateUrl: 'app/components/calculator/calculator.html',
      controller: CalculatorController 
    })

    function CalculatorController(){
      var cc = this
      this.myFavNum = 0;
      this.addX = function(x){
        cc.myFavNum = x + cc.myFavNum;
      }
      this.subX = function(x){
        cc.myFavNum = cc.myFavNum - x;

      }
      this.multX = function(x){
        cc.myFavNum = x * cc.myFavNum;
      }
      this.divX = function(x){
        cc.myFavNum = cc.myFavNum / x;
      }
    }

}())