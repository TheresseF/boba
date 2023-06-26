var drinkRows = [];

function addRow(product, type) {
  var table = document.getElementById("orderTable");
  var tbody = document.getElementById("otBody");

  var row = tbody.insertRow();
  var cellProd = row.insertCell();
  var cellSize = row.insertCell();
  var cellExtra = row.insertCell();
  var cellQty = row.insertCell();
  var cellUnitP = row.insertCell();
  var cellTotalP = row.insertCell();
  var cellDel = row.insertCell();

  cellProd.innerHTML = product;
  cellExtra.innerHTML = " ";
  cellSize.innerHTML = " ";
  cellQty.innerHTML = createQuantitySlider();
  cellUnitP.innerHTML = " ";
  cellTotalP.innerHTML = " ";
  cellDel.innerHTML = "<img class='deleteButton' src='x.png' alt='Delete' style='width:1.5vw;cursor:pointer;'>";

  var deleteButton = cellDel.getElementsByClassName("deleteButton")[0];
  deleteButton.addEventListener("click", function() {
    deleteRow(this);
  });

  if (type === "drink") {
    drinkRows.unshift(row);
    
  }
  if (type === "food") {
    drinkRows = [];
  }
}



function addSize(size) {
  for (var i = 0; i < drinkRows.length; i++) {
    var row = drinkRows[i];
    var cells = row.getElementsByTagName("td");

    if (cells.length > 1) {
      var cellSize = cells[1];
      cellSize.innerHTML = size;
    }

    break;
  }
}

function addBoba() {
  for (var i = 0; i < drinkRows.length; i++) {
    var row = drinkRows[i];
    var cells = row.getElementsByTagName("td");

    if (cells.length > 1) {
      var cellExtra = cells[2];
      cellExtra.innerHTML = "B";
    }

    break;
  }
}

function createQuantitySlider() {
  return `
    <div class="quantity-slider">
      <img src="minus.png" alt="-" style="width:1.0vw;cursor:pointer;" onclick="decreaseQuantity(this)">
      <input type="number" value="1" min="1">
      <img src="plus.png" alt="+" style="width:1.0vw;cursor:pointer;" onclick="increaseQuantity(this)">
    </div>
  `;
}

function decreaseQuantity(button) {
  var quantityInput = button.parentNode.querySelector("input[type='number']");
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function increaseQuantity(button) {
  var quantityInput = button.parentNode.querySelector("input[type='number']");
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);

  if (drinkRows.includes(row)) {
    drinkRows.splice(drinkRows.indexOf(row), 1);
  }
}

function clearTable() {
  var tbody = document.getElementById("otBody");
  tbody.innerHTML = "";
}

function addOrders() { // New function to add all orders
  var table = document.getElementById("orderTable");
  var rows = table.getElementsByTagName("tr");

  var orders = [];

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var cells = row.getElementsByTagName("td");

    var product = cells[0].innerHTML.trim();
    var size = cells[2].innerHTML.trim();
    var quantity = parseInt(cells[3].querySelector("input[type='number']").value);

    var order = {
      product: product,
      size: size,
      quantity: quantity
    };

    orders.push(order);
  }

  // Send the orders data to your Node.js server for processing
  // You can use AJAX or fetch API to send a POST request to your server endpoint

  var requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orders)
  };

  fetch("/addOrders", requestOptions)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("Orders added successfully:", data);
      // Handle any UI updates or notifications
    })
    .catch(function(error) {
      console.error("Error adding orders:", error);
      // Handle error cases
    });
}