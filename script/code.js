// Function to add a product to the table 
function addProduct(event) { 
    event.preventDefault(); 
    const productName = document.getElementById("productName").value; 
    const productPrice = document.getElementById("productPrice").value; 
    
    // Create a new table row 
    const newRow = document.createElement("tr"); 
    
    // Create table cells for the product name, price, and actions 
    const nameCell = document.createElement("td"); 
    nameCell.textContent = productName; 
    newRow.appendChild(nameCell); 
    
    const priceCell = document.createElement("td"); 
    priceCell.textContent = productPrice; 
    newRow.appendChild(priceCell); 
    
    const actionsCell = document.createElement("td"); 
    const deleteButton = document.createElement("button"); 
    deleteButton.textContent = "Delete"; 
    deleteButton.addEventListener("click", deleteProduct); 
    actionsCell.appendChild(deleteButton); 
    newRow.appendChild(actionsCell); 
    
    // Add the new row to the table 
    document.getElementById("productTable").getElementsByTagName('tbody')[0].appendChild(newRow); 
    
    // Clear the form inputs 
    document.getElementById("productForm").reset(); 
} 

// Function to delete a product 
function deleteProduct(event) { 
    event.preventDefault(); 
    const row = event.target.parentNode.parentNode; 
    row.parentNode.removeChild(row); 
} 

// Attach event listener to the form submission 
document.getElementById("productForm").addEventListener("submit", addProduct); 