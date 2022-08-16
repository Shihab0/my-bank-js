

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);
    
    // set withdraw amount to withdraw section
    const totalWithdrawField = document.getElementById('total-withdraw');
    const totalWithdrawAmountString = totalWithdrawField.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawAmountString);



    // total balance handle
    const preTotalBalanceField = document.getElementById('total-balance');
    const preTotalBalanceString = preTotalBalanceField.innerText;
    const preTotalBalance = parseFloat(preTotalBalanceString)

    withdrawField.value = '';
    if(preTotalBalance < newWithdraw){
        alert('Please Deposite!! You have not enough balance')
        return;
    }
    if(isNaN(newWithdraw) === true){
        alert('Enter Valid Number');
        return;
    }
    
    const totalWithdraw = newWithdraw + totalWithdrawAmount;
    totalWithdrawField.innerText = totalWithdraw;


    const currentTotalBalnce = preTotalBalance - newWithdraw;
    preTotalBalanceField.innerText = currentTotalBalnce;
    // newWithdrawString = '';     Why This not work???????????????
})