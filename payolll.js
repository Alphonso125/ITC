var payroll = [];

function clearInputs() {
  document.getElementById("empName").value = "";
  document.getElementById("daysWorked").value = "";
  document.getElementById("dailyRate").value = "";
  document.getElementById("deduction").value = "";
  document.getElementById("delemployee").value = "";
}

function addEmployee() {
  const name = document.getElementById("empName").value;
  const daysWorked = parseFloat(document.getElementById("daysWorked").value);
  const dailyRate = parseFloat(document.getElementById("dailyRate").value);
  const deduction = parseFloat(document.getElementById("deduction").value);

  if (name && !isNaN(daysWorked) && !isNaN(dailyRate) && !isNaN(deduction)) {
    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deduction;
    payroll.push({ name, daysWorked, dailyRate, grossPay, deduction, netPay });
    showEmployees();
  }
  clearInputs();
}

function showEmployees() {
  let tableContent = "";
  payroll.forEach((emp, index) => {
    tableContent += `
      <tr>
        <td>${index + 1}</td>
        <td>${emp.name}</td>
        <td class="ndata">${emp.daysWorked.toFixed(2)}</td>
        <td class="ndata">${emp.dailyRate.toFixed(2)}</td>
        <td class="ndata">${emp.grossPay.toFixed(2)}</td>
        <td class="ndata">${emp.deduction.toFixed(2)}</td>
        <td class="ndata">${emp.netPay.toFixed(2)}</td>
      </tr>`;
  });
  document.getElementById("tablebody").innerHTML = tableContent;
}

document.addEventListener("DOMContentLoaded", () => {
  const dlgConfirmCancel = document.getElementById("dlgConfirmCancel");
  const dlgAreYouSure = document.getElementById("dlgAreYouSure");

  document.getElementById("btnAddEmployee").addEventListener("click", addEmployee);

  document.getElementById("btndelete").addEventListener("click", () => {
    const index = parseInt(document.getElementById("delemployee").value) - 1;
    if (index >= 0 && index < payroll.length) {
      document.getElementById("dlgmsg").innerHTML = `Delete employee ${index + 1}: ${payroll[index].name}?`;
      dlgConfirmCancel.showModal();

      dlgConfirmCancel.addEventListener(
        "close",
        () => {
          if (dlgConfirmCancel.returnValue === "confirm") {
            payroll.splice(index, 1);
            showEmployees();
          }
          clearInputs();
        },
        { once: true }
      );
    }
  });

  document.getElementById("btndeleteall").addEventListener("click", () => {
    document.getElementById("dlgmsg").innerHTML = "Delete all records?";
    dlgConfirmCancel.showModal();

    dlgConfirmCancel.addEventListener(
      "close",
      () => {
        if (dlgConfirmCancel.returnValue === "confirm") {
          document.getElementById("dlgmsg2").innerHTML = "Are you sure?";
          dlgAreYouSure.showModal();

          dlgAreYouSure.addEventListener(
            "close",
            () => {
              if (dlgAreYouSure.returnValue === "yes") {
                payroll = [];
                showEmployees();
              }
              clearInputs();
            },
            { once: true }
          );
        }
      },
      { once: true }
    );
  });
});
