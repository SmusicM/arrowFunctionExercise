//Refactor for arrow functions

//function double(arr) {
//    return arr.map(function(val) {
//      return val * 2;
//    });
//  }

//function double(arr){
//    arr.map((val)=>{
//        val *2;
//    })
//}
const array = [1,2,3,4];

const double = (arr) => arr.map((val) => val * 2);


//function squareAndFindEvens(numbers){
//    var squares = numbers.map(function(num){
//      return num ** 2;
//    });
//    var evens = squares.filter(function(square){
//      return square % 2 === 0;
//    });
//    return evens;
//  }
const numbers = [1,2,3,4];
const squareAndFindEvens = ((numbers)=>{
    const squares = numbers.map((num) => num ** 2);
    const evens = squares.filter((square)=> square % 2 === 0);
    return evens;
})