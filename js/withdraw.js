document.getElementById('btn-withdraw').addEventListener('click', function(){
 
 const withdrawInput = document.getElementById('withdraw-check');
 const withdrawValue = withdrawInput.value;
 const withdrawValueNumber = parseFloat(withdrawValue);
 if(isNaN(withdrawValueNumber)){
  alert('sorry valid number please')
  return;
 }
 
 
 const balanceTotalAmound = document.getElementById('total-balance');
 const balanceInnerTotal = balanceTotalAmound.innerText;
 const balanceTotalNumber = parseFloat(balanceInnerTotal);
 if(balanceTotalNumber < withdrawValueNumber){
  alert('Your Corrent balance not Available')
  return;
 }


 const correntWithdraw = balanceTotalNumber - withdrawValueNumber;
 balanceTotalAmound.innerText = correntWithdraw;

 const withdrawField = document.getElementById('withdraw-total');
 const withdrawText = withdrawField.innerText;
 const withdrawTextNumber = parseFloat(withdrawText);

 const totalWithdraw = withdrawValueNumber + withdrawTextNumber;
 withdrawField.innerText = totalWithdraw;
 withdrawInput.value = '';

 
})