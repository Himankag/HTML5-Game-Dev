function addExpense() {
  // Get the expense and amount values from the form
  var expense = document.getElementById("expense").value;
  var amount = document.getElementById("amount").value;

  // Create a new row in the table for the expense
  var table = document.getElementById("expenses");
  var row = table.insertRow();
  var expenseCell = row.insertCell(0);
  var amountCell = row.insertCell(1);
  expenseCell.innerHTML = expense;
  amountCell.innerHTML = "₹" + amount;

  // Clear the form fields
  document.getElementById("expense").value = "";
  document.getElementById("amount").value = "";
}
