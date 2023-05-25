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






