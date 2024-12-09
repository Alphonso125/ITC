var payroll=[];
console.log(payroll); 

function addEmployee() {
    let name = document.getElementById("newName").value;
    let daysWorked = parseFloat(document.getElementById("newDaysWorked").value);
    let dailyRate = parseFloat(document.getElementById("newDailyRate").value);
    let deduction = parseFloat(document.getElementById("newDeduction").value);

    if (name && !isNaN(daysWorked) && !isNaN(dailyRate) && !isNaN(deduction)) {
        let grossPay = (daysWorked * dailyRate).toFixed(2);
        let netPay = (grossPay - deduction).toFixed(2);

        let employee = {
            name: name,
            daysWorked: daysWorked,
            dailyRate: dailyRate,
            grossPay: grossPay,
            deduction: deduction,
            netPay: netPay
        };

        payroll.push(employee);
        showEmployees();
        clearInputs();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

function addEmployees() {
    payroll = []; 
    let emp1 = {
        name: "John Von Nuemann",
        daysworked: 10.00,
        dailyrate: 500.00,
        grosspay: (10.00 * 500.00).toFixed(2),
        deduction: 100.00,
        netpay: ((10.00 * 500.00) - 100.00).toFixed(2),
    };
    payroll.push(emp1);

    let emp2 = {
        name: "Charles W. Babbage",
        daysworked: 12.00,
        dailyrate: 600.00,
        grosspay: (12.00 * 600.00).toFixed(2),
        deduction: 200.00,
        netpay: ((12.00 * 600.00) - 200.00).toFixed(2),
    };
    payroll.push(emp2);

    let emp3 = {
        name: "Vint E. Cerf",
        daysworked: 15.00,
        dailyrate: 550.00,
        grosspay: (15.00 * 550.00).toFixed(2),
        deduction: 200.00,
        netpay: ((15.00 * 550.00) - 200.00).toFixed(2),
    };
    payroll.push(emp3);
}

function showEmployees() {
    let tb = "", trec = "", tgpay = 0.00, tded = 0.00, tnetpay = 0.00;
    let lno = 1;

    for (emp of payroll) {
        trec = "<tr>"
            + '<td style="text-align:right">' + lno.toFixed(0) + "</td>"
            + "<td>" + emp.name + "</td>"
            + '<td class="ndata">' + emp.daysworked.toFixed(2) + "</td>"
            + '<td class="ndata">' + emp.dailyrate.toFixed(2) + "</td>"
            + '<td class="ndata">' + emp.grosspay + "</td>"
            + '<td class="ndata">' + emp.deduction.toFixed(2) + "</td>"
            + '<td class="ndata">' + emp.netpay + "</td>"
            + "</tr>";
        tb += trec;
        tgpay += emp.grosspay * 1;
        ++lno;
    }
    document.getElementById("tablebody").innerHTML = tb;
    document.getElementById("tGrossPay").innerHTML = tgpay.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
    addEmployees();
    showEmployees();

    let dlgConfirmCancel = document.getElementById("dlgConfirmCancel");

    document.getElementById("btndelete").addEventListener("click", () => {
        let x = document.getElementById("delemployee").value * 1 - 1;
        if ((x >= 0) && (x < payroll.length)) {
            document.getElementById("dlgmsg").innerHTML = "Delete the employee " + (x + 1) + " " + payroll[x].name + "?";
            dlgConfirmCancel.showModal();
        }
    });

    document.getElementById("btndeleteall").addEventListener("click", () => {
        document.getElementById("dlgmsg").innerHTML = "Delete all records?";
        dlgConfirmCancel.showModal();
    });

    dlgConfirmCancel.addEventListener("close", (e) => {
        var rst = e.target.returnValue;
        if (rst === "confirm") {
            let dlgmsg = document.getElementById("dlgmsg").innerHTML;
            if (dlgmsg == "Delete all records?") {
                let dlgAreYouSure = document.getElementById("dlgAreYouSure");
                document.getElementById("dlgmsg2").innerHTML = "Are you sure?";
                dlgAreYouSure.showModal();
            } else {
                let x = document.getElementById("delemployee").value * 1 - 1;
                payroll.splice(x, 1);
                showEmployees();
                document.getElementById("delemployee").value = '';
            }
        }
    });

    let dlgAreYouSure = document.getElementById("dlgAreYouSure");

    dlgAreYouSure.addEventListener("close", (e) => {
        var rst = e.target.returnValue;
        if (rst === "yes") {
            payroll = [];
            showEmployees();
        }
    });
});
