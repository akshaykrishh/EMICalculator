function calculate() {

    var dis = document.getElementById('results');
    if (dis.style.display === "none") {
        dis.style.display = "block";
    } else {
        dis.style.display = "none";
    }

    // Getting Inputs
    var Lamnt = document.getElementById('amnt').value;
    console.log('Amount is ' + Lamnt);

    var interestRate = document.getElementById('interestR').value;
    console.log('Interest Rate is ' + interestRate);

    var loanTime = document.getElementById('time').value;
    console.log('Loan Tenure is ' + loanTime);
    // 

    //Annual Interest Rate coverted to monthly
    var interest = ((interestRate / 100) / 12);
    // 
    var x = 1 + interest;

    // EMI Formula
    var mi = Lamnt * interest * Math.pow(x, loanTime) / (Math.pow(x, loanTime) - 1);
    // Total Amount to Pay
    var totalP = mi * loanTime;
    // Interest Amount
    var interestP = totalP - Lamnt;

    // Printing the results
    document.getElementById('emi').innerHTML = mi;
    document.getElementById('total').innerHTML = totalP;
    document.getElementById('interest').innerHTML = interestP;
}