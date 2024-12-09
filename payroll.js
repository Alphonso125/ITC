let payroll = [];

function addEmployees() {
    payroll = [
        { name: "John Von Neumann", daysworked: 10, dailyrate: 500, deduction: 100 },
        { name: "Charles Babbage", daysworked: 12, dailyrate: 600, deduction: 200 },
        { name: "Vint Cerf", daysworked: 15, dailyrate: 550, deduction: 200 }
    ];
    payroll.forEach(emp => {
        emp.grosspay = (emp.daysworked * emp.dailyrate).toFixed(2);
        emp.netpay = (emp.grosspay - emp.deduction).toFixed(2);
    });
}

function showEmployees() {
    let tableBody = "", totalGross = 0, totalDeduction = 0, totalNetPay = 0, index = 1;
    payroll.forEach(emp => {
        tableBody += `<tr>
            <td>${index++}</td>
            <td>${emp.name}</td>
            <td class="ndata">${emp.daysworked.toFixed(2)}</td>
            <td class="ndata">${emp.dailyrate.toFixed(2)}</td>
            <td class="ndata">${emp.grosspay}</td>
            <td class="ndata">${emp.deduction.toFixed(2)}</td>
            <td class="ndata">${emp.netpay}</td>
        </tr>`;
        totalGross += parseFloat(emp.grosspay);
        totalDeduction += emp.deduction;
        totalNetPay += parseFloat(emp.netpay);
    });
    document.getElementById("tablebody").innerHTML = tableBody;
    document.getElementById("tGrossPay").textContent = totalGross.toFixed(2);
    document.getElementById("tDeduction").textContent = totalDeduction.toFixed(2);
    document.getElementById("tNetPay").textContent = totalNetPay.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
    addEmployees();
    showEmployees();

    document.getElementById("btnAddEmployee").addEventListener("click", () => {
        let name = document.getElementById("newName").value.trim();
        let daysWorked = parseFloat(document.getElementById("newDaysWorked").value);
        let dailyRate = parseFloat(document.getElementById("newDailyRate").value);
        let deduction = parseFloat(document.getElementById("newDeduction").value);

        if (name && !isNaN(daysWorked) && !isNaN(dailyRate) && !isNaN(deduction)) {
            let grossPay = (daysWorked * dailyRate).toFixed(2);
            let netPay = (grossPay - deduction).toFixed(2);
            payroll.push({ name, daysworked: daysWorked, dailyr
            showEmployees();
            document.getElementById("newName").value = '';
            document.getElementById("newDaysWorked").value = '';
            document.getElementById("newDailyRate").value = '';
            document.getElementById("newDeduction").value = '';
        }
    });

    document.getElementById("btndelete").addEventListener("click", () => {
        let empNo = parseInt(document.getElementById("delemployee").value, 10) - 1;
        if (empNo >= 0 && empNo < payroll.length) {
            document.getElementById("dlgmsg").innerText = `Delete the employee ${empNo + 1} - ${payroll[empNo].name}?`;
            document.getElementById("dlgConfirmCancel").showModal();
        }
    });

    document.getElementById("btndeleteall").addEventListener("click", () => {
        document.getElementById("dlgmsg").innerText = "Delete all records?";
        document.getElementById("dlgConfirmCancel").showModal();
    });

    document.getElementById("dlgConfirmCancel").addEventListener("close", (e) => {
        if (e.target.returnValue === "confirm") {
            let message = document.getElementById("dlgmsg").innerText;
            if (message === "Delete all records?") {
                document.getElementById("dlgmsg2").innerText = "Are you sure?";
                document.getElementById("dlgAreYouSure").showModal();
            } else {
                let empNo = parseInt(document.getElementById("delemployee").value, 10) - 1;
                payroll.splice(empNo, 1);
                showEmployees();
                document.getElementById("delemployee").value = '';
            }
        }
    });

    document.getElementById("dlgAreYouSure").addEventListener("close", (e) => {
        if (e.target.returnValue === "yes") {
            payroll = [];
            showEmployees();
        }
    });
});
