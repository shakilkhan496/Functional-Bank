document.getElementById('btn-deposit').addEventListener('click',
    function () {
        const newDepositAmount = getInputValue('deposit-field');

        const previousDepositTotal = getElementText('deposit-total');

        const newDepositTotal = previousDepositTotal + newDepositAmount;
        setElement('deposit-total', newDepositTotal);
        const previousBalanceTotal = getElementText('balance-total');
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
        setElement('balance-total', newBalanceTotal);
    }

)

