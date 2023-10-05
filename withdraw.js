document.getElementById("btn-withdraw").addEventListener('click', function(){
    const withdrawFieldElement = document.getElementById("withdraw-field");
    const withdrawFieldAmount = withdrawFieldElement.value;
    const valWithdrawFieldAmount = parseFloat(withdrawFieldAmount);
    withdrawFieldElement.value = '';

    if(isNaN(withdrawFieldAmount) || withdrawFieldAmount === ''){
        alert("Please provide a valid number!");
        return;
    }

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const withdrawTotalAmount = withdrawTotalElement.innerText;
    const valWithdrawTotalAmount = parseFloat(withdrawTotalAmount);

    
    
    const balanceTotalElement = document.getElementById("balance-total");
    const prevBalanceTotal = balanceTotalElement.innerText;
    const valPrevBalanceTotal = parseFloat(prevBalanceTotal);
    
    if(valWithdrawFieldAmount > valPrevBalanceTotal){
        alert("Aap er bank e eto taka nai!");
        return;
    }

    const newWithdrawTotal = valWithdrawFieldAmount + valWithdrawTotalAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const newBalanceTotal = valPrevBalanceTotal - valWithdrawFieldAmount;

    balanceTotalElement.innerText = newBalanceTotal;
    
});