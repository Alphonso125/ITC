 let payroll = [];

function addEmployees() {
    payroll = [
        {
            name: "John Von Neumann",
            daysworked: 10,
            dailyrate: 500,
            deduction: 100,
        },
        {
            name: "Charles W. Babbage",
            daysworked: 12,
            dailyrate: 600,
            deduction: 200,
        },
        {
            name: "Vint E. Cerf",
            daysworked: 15,
            dailyrate: 550,
            deduction: 200,
        },
    ];
}


function calculatePay(emp) {
    emp.grosspay = (emp.daysworked * emp.dailyrate).toFixed(2);
    emp.netpay = (emp.grosspay - emp.deduction).toFixed(2);
}


function showEmployees() {
    let tbody = "";
    payroll.forEach((emp, index) => {
        calculatePay(emp); 
        tbody += `
            <tr>
                <td class="ndata">${index + 1}</td>
                <td>${emp.name}</td>
                <td contenteditable="true" class="ndata" onblur="updateDaysWorked(${index}, this.innerText)">${emp.daysworked.toFixed(2)}</td>
                <td class="ndata">${emp.dailyrate.toFixed(2)}</td>
                <td class="ndata">${emp.grosspay}</td>
                <td class="ndata">${emp.deduction.toFixed(2)}</td>
                <td class="ndata">${emp.netpay}</td>
            </tr>
        `;
    });
    document.getElementById("tablebody").innerHTML = tbody;
}


function updateDaysWorked(index, value) {
    const days = parseFloat(value);
    if (!isNaN(days) && days >= 0) {
        payroll[index].daysworked = days;
        showEmployees(); 
}

document.addEventListener("DOMContentLoaded", () => {
    addEmployees();
    showEmployees();

    document.getElementById("btnAddEmployee").addEventListener("click", () => {
        const name = document.getElementById("newName").value;
        const dailyRate = parseFloat(document.getElementById("newDailyRate").value);
        const daysWorked = parseFloat(document.getElementById("newDaysWorked").value);

    
        if (name && !isNaN(dailyRate) && dailyRate > 0 && !isNaN(daysWorked) && daysWorked >= 0) {
            payroll.push({
                name,
                dailyrate: dailyRate,
                daysworked: daysWorked,
                deduction: 0, 
            });

            showEmployees();

        
            document.getElementById("newName").value = "";
            document.getElementById("newDailyRate").value = "";
            document.getElementById("newDaysWorked").value = "";
        } else {
            alert("Please enter valid employee details.");
        }
    });


    document.getElementById("btndelete").addEventListener("click", () => {
        const index = parseInt(document.getElementById("delemployee").value) - 1;

        if (index >= 0 && index < payroll.length) {
            document.getElementById("dlgmsg").innerText = `Delete the employee ${index + 1} (${payroll[index].name})?`;
            dlgConfirmCancel.showModal();
        } else {
            alert("Invalid employee number.");
        }
    });


    dlgConfirmCancel.addEventListener("close", (e) => {
        if (e.target.returnValue === "confirm") {
            const index = parseInt(document.getElementById("delemployee").value) - 1;

            if (index >= 0 && index < payroll.length) {
                payroll.splice(index, 1);
                showEmployees(); 
                document.getElementById("delemployee").value = "";
            }
        }
    });
});
