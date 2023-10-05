document.getElementById("btn-deposite").addEventListener("click", function(){
    const depositeField = document.getElementById("deposite-field");
    const newDepositeAmount = depositeField.value;

    depositeField.value = '';
    if(isNaN(newDepositeAmount) || newDepositeAmount === ''){
        alert("Please provide a valid number!");
        return;
    }

    const depositeTotalElement = document.getElementById("deposite-total");
    const prevDepositeTotal = depositeTotalElement.innerText;
    const currentDepositeTotal = parseFloat(prevDepositeTotal) + parseFloat(newDepositeAmount);
    depositeTotalElement.innerText = currentDepositeTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const prevBalanceTotal = balanceTotalElement.innerText;
    console.log(prevBalanceTotal);

    const currentBalanceTotal = parseFloat(prevBalanceTotal) + parseFloat(newDepositeAmount);
    balanceTotalElement.innerText = currentBalanceTotal;
})