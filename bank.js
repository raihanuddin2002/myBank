// handle all with one function
function totalBalance(inputId) {

    let inputField = document.getElementById(inputId);
    // Total Balanace
    const currentBalance = document.getElementById('balance-ammount').innerText;

    const inputFieldId = document.getElementById(inputId).getAttribute('id');
    if (inputFieldId == "deposit-input") {
        let inputFieldValue = inputField.value;
        if (inputFieldValue == "") {
            inputFieldValue = 0;
        }
        // negative check
        if (inputFieldValue >= 0) {
            // Deposite Calculation
            const currentDeposite = document.getElementById('deposit-ammount').innerText;
            const totalDeposit = parseFloat(currentDeposite) + parseFloat(inputFieldValue);
            // Total Deposit Balnace
            const newDepositeValue = document.getElementById("deposit-ammount").innerText = totalDeposit;

            //New Balance
            const newBalance = document.getElementById('balance-ammount').innerText = parseFloat(currentBalance) + parseFloat(inputFieldValue);
        } else {
            alert('Your value must be positive number');
        }


        inputField.value = "";
    } else if (inputFieldId == "withdraw-input") {
        let inputFieldValue = inputField.value;

        if (inputFieldValue == "") {
            inputFieldValue = 0;
        }
        // negative check
        if (inputFieldValue >= 0) {
            const currentWithdrawAmmount = document.getElementById('withdraw-ammount').innerText;

            if (parseFloat(currentBalance) >= parseFloat(inputFieldValue)) {
                const totalWithdraw = parseFloat(currentWithdrawAmmount) + parseFloat(inputFieldValue);
                // Total Withdraw Balnace
                const newWithdrawValue = document.getElementById("withdraw-ammount").innerText = totalWithdraw;
                //New Balance
                const newBalance = document.getElementById('balance-ammount').innerText = parseFloat(currentBalance) - parseFloat(inputFieldValue);
            } else {
                alert('Your have not sufficient balance');
            }
        } else {
            alert('Your value must be positive number');
        }

        inputField.value = "";
    } else {
        return 0;
    }
}

// Deposite button
document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositId = totalBalance("deposit-input");
    // Total Deposit Balnace
    // document.getElementById("deposit-ammount").innerText = depositId;
});

// Withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawId = totalBalance("withdraw-input");
    // Total withdraw Balnace
    // document.getElementById("withdraw-ammount").innerText = withdrawId;
});

/* =================================================================================================================
    // Handle deposit button
    document.getElementById('deposit-btn').addEventListener('click', function() {
    // Deposite value
    const depositeInput = document.getElementById('deposit-input');
    let depositInputValue = depositeInput.value;
    // Current deposite
    const currentDeposite = document.getElementById('deposit-ammount').innerText;
    if (depositInputValue == "") {
        depositInputValue = 0;
    }
    const totalDeposit = parseFloat(currentDeposite) + parseFloat(depositInputValue);

    document.getElementById('deposit-ammount').innerText = totalDeposit;

    // Update account balance
    const currentBalance = document.getElementById('balance-ammount').innerText;
    const totalBalance = parseFloat(currentBalance) + parseFloat(depositInputValue);
    document.getElementById('balance-ammount').innerText = totalBalance;

    depositeInput.value = "";


});

// Withdraw handle
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    let withdrawInputValue = withdrawInput.value;
    if (withdrawInputValue == "") {
        withdrawInputValue = 0;
    }
    const currentWithdrawAmmount = document.getElementById('withdraw-ammount').innerText;
    const totalWithdrawBalance = parseFloat(currentWithdrawAmmount) + parseFloat(withdrawInputValue);
    document.getElementById('withdraw-ammount').innerText = totalWithdrawBalance;

    // Update account balance
    const currentBalance = document.getElementById('balance-ammount').innerText;
    const totalBalance = parseFloat(currentBalance) - parseFloat(withdrawInputValue);
    document.getElementById('balance-ammount').innerText = totalBalance;

    withdrawInput.value = "";
}); 
==================================================================================================================*/