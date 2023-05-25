const total = document.getElementById("total")
const profit = document.getElementById("profit")    


document.getElementById("interestForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get input values
    let money = parseFloat(document.getElementById("money").value);
    let sum = money;
    let years = parseInt(document.getElementById("years").value);
    let percents = parseFloat(document.getElementById("percents").value);

    // check if they are numbers 
    if (isNaN(money) || isNaN(years) || isNaN(percents)) {
            alert("Invalid input data");
            return;
    }else if(money < 1000 || years < 1 || percents > 100){
        alert("Invalid input data");
        return;
    }else{
        for (let i = 1; i <= years; i++) {
            money = money + money * (percents / 100);
        }

        let totalProfit = money-sum;

        total.innerHTML = `Total: ${sum}`
        profit.innerHTML = `Profit: ${totalProfit}`

}


  
    
});






const CODE = [
    {
      _id: "5b5e3168c6bf40f2c1235cd6",
      index: 0,
      age: 39,
      eyeColor: "green",
      name: "Stein",
      favoriteFruit: "apple"
    },
    {
      _id: "5b5e3168e328c0d72e4f27d8",
      index: 1,
      age: 38,
      eyeColor: "blue",
      name: "Cortez",
      favoriteFruit: "strawberry"
    },
    {
      _id: "5b5e3168cc79132b631c666a",
      index: 2,
      age: 2,
      eyeColor: "blue",
      name: "Suzette",
      favoriteFruit: "apple"
    },
    {
      _id: "5b5e31682093adcc6cd0dde5",
      index: 3,
      age: 17,
      eyeColor: "green",
      name: "Weiss",
      favoriteFruit: "banana"
    }
]
function task2_1(array, callback, param=0){
    let resultArray = [];
    for (let i = 0, j=0; i < array.length; i++) {
        let result = callback(array[i], param);
        if(typeof result === 'boolean' && result === true ){
            resultArray[j++] = array[i];
        }
            if (!(typeof result === 'boolean')) {
                resultArray[i] = result;
            }
    }
    return resultArray;
}
function call_a_function(num){
    return num
}
function addNumber(num, param){
    return num + param
}
function multiplyNumber(num, param){
    return num * param
}
function getAdultAppleLovers(arr, param){
    return arr.favoriteFruit === param && greaterThan(arr.age, 18)
}   
function greaterThan(num, param){
    return num > param
}
function isEven(num){
    return num % 2 === 0
}
function ObjKeys(arr){
    return Object.keys(arr);
}
function ObjValues(arr){
    return Object.values(arr);
}

// ex. 1
console.log(task2_1([2,5,8], call_a_function))
// ex. 2
console.log(task2_1([2,5,8], addNumber, 3))
console.log(task2_1([1, 2, 3, 4, 5], multiplyNumber, 2))
//ex. 3
 console.log(task2_1([2, 5, 1, 3, 8, 6], greaterThan, 3))
 console.log(task2_1([2, 5, 1, 3, 8, 6], isEven))
   //ex. 4
 console.log(task2_1(CODE, getAdultAppleLovers, "apple"))
//   //ex. 5
console.log(ObjKeys({keyOne: 1, keyTwo: 2, keyThree: 3}));
//   //ex.6
console.log(ObjValues({keyOne: 1, keyTwo: 2, keyThree: 3}));