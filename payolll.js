var payroll = [];

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

function showEmployees() {
  let tableBody = document.getElementById("tablebody");
  tableBody.innerHTML = "";

  payroll.forEach((emp, index) => {
    let row = document.createElement("tr");

    let empNo = document.createElement("td");
    empNo.textContent = (index + 1);
    row.appendChild(empNo);

    let empName = document.createElement("td");
    empName.textContent = emp.name;
    row.appendChild(empName);

    let empDaysWorked = document.createElement("td");
    empDaysWorked.className = "ndata";
    empDaysWorked.textContent = emp.daysWorked.toFixed(2);
    row.appendChild(empDaysWorked);

    let empDailyRate = document.createElement("td");
    empDailyRate.className = "ndata";
    empDailyRate.textContent = emp.dailyRate.toFixed(2);
    row.appendChild(empDailyRate);

    let empGrossPay = document.createElement("td");
    empGrossPay.className = "ndata";
    empGrossPay.textContent = emp.grossPay;
    row.appendChild(empGrossPay);

    let empDeduction = document.createElement("td");
    empDeduction.className = "ndata";
    empDeduction.textContent = emp.deduction.toFixed(2);
    row.appendChild(empDeduction);

    let empNetPay = document.createElement("td");
    empNetPay.className = "ndata";
    empNetPay.textContent = emp.netPay;
    row.appendChild(empNetPay);

    tableBody.appendChild(row);
  });
}

function clearInputs() {
  document.getElementById("newName").value = "";
  document.getElementById("newDaysWorked").value = "";
  document.getElementById("newDailyRate").value = "";
  document.getElementById("newDeduction").value = "";
}

document.getElementById("btnAddEmployee").addEventListener("click", addEmployee);
