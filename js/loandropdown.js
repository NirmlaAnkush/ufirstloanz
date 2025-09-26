document.getElementById('goLoanType').addEventListener('click', function() {
    var select = document.getElementById('loanTypeSelect');
    var value = select.value;
    // Map dropdown values to HTML pages
    if (value === 'business') {
        window.location.href = 'loans/business-loan.html';
    } else if (value === 'term') {
        window.location.href = 'loans/term-loan.html';
    } else if (value === 'overdraft') {
        window.location.href = 'loans/overdraft.html';
    } else if (value === 'home') {
        window.location.href = 'loans/home-loan.html';
    } else if (value === 'personal') {
        window.location.href = 'loans/personal-loan.html';
    } else if (value === 'lap') {
        window.location.href = 'loans/loan-against-property.html';
    } else if (value === 'machine') {
        window.location.href = 'loans/machine-loan.html';
    } else if (value === 'personal') {
        window.location.href = 'loans/personal-loan.html';
    } else if (value === 'project') {
        window.location.href = 'loans/project-loan.html';
    } else if (value === 'govt') {
        window.location.href = 'loans/govt-loan.html';
    } else if (value === 'cash') {
        window.location.href = 'loans/cash-credit.html';
    } else if (value === 'dod') {
        window.location.href = 'loans/dod.html';
    } else if (value === 'edu') {
        window.location.href = 'loans/education-loan.html';
    } else {
        alert('Please select a loan type.');
    }
});