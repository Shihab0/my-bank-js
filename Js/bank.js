document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmountField = document.getElementById('deposit-field');
    const newDepositAmountString = newDepositAmountField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    newDepositAmountField.value = '';
    if(isNaN(newDepositAmount) === true){
        alert('Enter Valid Number');
        return;
    }
    
    const depositField = document.getElementById('total-deposit');
    const previousDepositTotalString = depositField.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
   
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositField.innerText = currentDepositTotal;

    // balance total
    const balanceField = document.getElementById('total-balance');
    const preTotalBalance = parseFloat(balanceField.innerText);
    const newTotalbalance = newDepositAmount + preTotalBalance;
    balanceField.innerText = newTotalbalance;


    // const withdrawField = document.getElementById('withdraw-field');
    // const withdraw = withdrawField.value;
    // const newBalance = parseFloat(withdraw);

    
   
})