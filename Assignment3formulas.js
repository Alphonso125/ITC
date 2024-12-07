 document.getElementById("number").addEventListener("input", () => {
    const n = parseInt(document.getElementById("number").value);

    if (n > 0) {
        document.getElementById("factorial").value = calculateFactorial(n);
        document.getElementById("sum").value = calculateSum(n);
        document.getElementById("average").value = calculateAverage(n);
    } else {
        document.getElementById("factorial").value = "";
        document.getElementById("sum").value = "";
        document.getElementById("average").value = "";
    }
});

function calculateFactorial(n) {
    let result = 1;
    let a = 1;
    while (a <= n) {
        result *= a;
        a++;
    }
    return result;
}

function calculateSum(n) {
    let sum = 0;
    let a = 1;
    do {
        sum += a;
        a++;
    } while (a <= n);
    return sum;
}

function calculateAverage(n) {
    let sum = 0;
    for (let a = 1; a <= n; a++) {
        sum += a;
    }
    return sum / n;
}
