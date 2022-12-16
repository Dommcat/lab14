/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}
  let cartDom = document.getElementById('cart');
  for (let i = cartDom.rows.length -1; i>0; i--){
    console.log('start of loop ' + i);
    console.dir(cartDom.rows);
    cartDom.deleteRow(i);
  }

  
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  let tableBody =   document.querySelector('tbody');
  console.log(tableBody);
  
  // TODO: Iterate over the items in the cart
  let trElem;
  let tdElem;
  let tempString;
  
  for (let i=0; i < state.cart.items.length; i++){
    // TODO: Create a TR
    // create row
    trElem = document.createElement('tr');
    tableBody.appendChild(trElem);

    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    // add cell with 'delete'
    tdElem = document.createElement('td');
    tdElem.textContent = 'delete';
    tdElem.id = i;
    trElem.appendChild(tdElem);

    // add cell with product name
    tdElem = document.createElement('td');
    tdElem.textContent = state.cart.items[i].product;
    console.log(state.cart.items[i].product);
    trElem.appendChild(tdElem);

    // add cell with quantity
    tdElem = document.createElement('td');
    tdElem.textContent = state.cart.items[i].quantity;
    trElem.appendChild(tdElem);
  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.dir(event.srcElement.id);
  state.cart.removeItem(Number(event.srcElement.id));

  // TODO: Save the cart back to local storage
  state.cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
