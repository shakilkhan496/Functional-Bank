document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-field');
    const prevoiusWithdrawTotal = getElementText('withdraw-total');
    const newWithdrawTotal = prevoiusWithdrawTotal + newWithdrawAmount;
    setElement('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getElementText('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElement('balance-total', newBalanceTotal);

})