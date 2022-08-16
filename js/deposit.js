document.getElementById('btn-deposit').addEventListener('click', function(){
 const depositField = document.getElementById('deposit-check');
 const depositAmound = depositField.value;
 const depositAmoundNumber = parseFloat(depositAmound);

const depositTotal = document.getElementById('deposit-total');
const depositAmoundTolal = depositTotal.innerText;
const depositTotalNumber = parseFloat(depositAmoundTolal)
const depositAmoundAdd =depositTotalNumber + depositAmoundNumber;
depositTotal.innerText = depositAmoundAdd;

const balanceField = document.getElementById('total-balance');
const  balanceTotal = balanceField.innerText;
const balanceAmoundNumber = parseFloat(balanceTotal);
const correntBlance = depositAmoundNumber + balanceAmoundNumber;
balanceField.innerText = correntBlance;
depositField.value = '';

})