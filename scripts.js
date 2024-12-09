var payroll = [];

// Add employees to payroll
function addEmployees() {
  payroll = [];
  payroll.push({
    name: "John Von Nuemann",
    daysworked: 10.0,
    dailyrate: 500.0,
    grosspay: (10.0 * 500.0).toFixed(2),
    deduction: 100.0,
    netpay: ((10.0 * 500.0) - 100.0).toFixed(2),
  });
  payroll.push({
    name: "Charles W. Babbage",
    daysworked: 12.0,
    dailyrate: 600.0,
    grosspay: (12.0 * 600.0).toFixed(2),
    deduction: 200.0,
    netpay: ((12.0 * 600.0) - 200.0).toFixed(2),
  });
  payroll.push({
    name: "Vint E. Cerf",
    daysworked: 15.0,
    dailyrate: 550.0,
    grosspay: (15.0 * 550.0).toFixed(2),
    deduction: 200.0,
    netpay: ((15.0 * 550.0) - 200.0).toFixed(2),
  });
}

// Show employees in the table
function showEmployees() {
  let tb = "", trec = "", tgpay = 0.0;
  let lno = 1;

  for (const emp of payroll) {
    trec = `
      <tr>
        <td style="text-align:right">${lno.toFixed(0)}</td>
        <td>${emp.name}</td>
        <td class="ndata">${emp.daysworked.toFixed(2)}</td>
        <td class="ndata">${emp.dailyrate.toFixed(2)}</td>
        <td class="ndata">${emp.grosspay}</td>
        <td class="ndata">${emp.deduction.toFixed(2)}</td>
        <td class="ndata">${emp.netpay}</td>
      </tr>`;
    tb += trec;
    tgpay += emp.grosspay * 1;
    lno++;
  }

  document.getElementById("tablebody").innerHTML = tb;
  document.getElementById("tGrossPay").innerHTML = tgpay.toFixed(2);
}

// Add Employee Feature
document.getElementById("btnAddEmployee").addEventListener("click", () => {
  const name = document.getElementById("empName").value.trim();
  const days = parseFloat(document.getElementById("empDays").value);
  const rate = parseFloat(document.getElementById("empRate").value);
  const deduction = parseFloat(document.getElementById("empDeduction").value);

  if (!name || isNaN(days) || isNaN(rate) || isNaN(deduction) || days < 0 || rate < 0 || deduction < 0) {
    alert("Please enter valid details for the employee.");
    return;
  }

  const grosspay = (days * rate).toFixed(2);
  const netpay = (grosspay - deduction).toFixed(2);

  payroll.push({
    name: name,
    daysworked: days,
    dailyrate: rate,
    grosspay: grosspay,
    deduction: deduction,
    netpay: netpay,
  });

  showEmployees();

  document.getElementById("empName").value = "";
  document.getElementById("empDays").value = "";
  document.getElementById("empRate").value = "";
  document.getElementById("empDeduction").value = "";

  alert("Employee added successfully!");
});

// Main Program
document.addEventListener("DOMContentLoaded", () => {
  addEmployees();
  showEmployees();
});
