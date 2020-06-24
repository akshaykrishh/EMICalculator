function calculate() {

    var dis = document.getElementById('results');
    if (dis.style.display === "none") {
        dis.style.display = "block";
    } else {
        dis.style.display = "none";
    }


    var Lamnt = document.getElementById('amnt').value;
    console.log('Amount is ' + Lamnt);

    var interestRate = document.getElementById('interestR').value;
    console.log('Interest Rate is ' + interestRate);

    var loanTime = document.getElementById('time').value;
    console.log('Loan Tenure is ' + loanTime);

    var interest = ((interestRate / 100) / 12);
    var x = 1 + interest;
    console.log(x);

    var mi = Lamnt * interest * Math.pow(x, loanTime) / (Math.pow(x, loanTime) - 1);
    var totalP = mi * loanTime;
    var interestP = totalP - Lamnt;
    document.getElementById('emi').innerHTML = mi;
    document.getElementById('total').innerHTML = totalP;
    document.getElementById('interest').innerHTML = interestP;
}