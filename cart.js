//corinne's code//
function showCart() {
    alert('Cart button clicked!'); 
    document.querySelector('.button-container').style.display = 'none';
    document.querySelector('.header').style.display = 'none';
    
    document.getElementById('cartPage').style.display = 'block';
}

function goBackToMenu() {
    document.getElementById('cartPage').style.display = 'none';
    
    document.querySelector('.button-container').style.display = 'block';
    document.querySelector('.header').style.display = 'block';
}

if (document.getElementById('button-container')) {
    document.getElementById('button-container').style.display = 'block';
}
if (document.getElementById('header')) {
    document.getElementById('header').style.display = 'block';
}
// corinne's code // 




//chris code //
function deselectAllItems() {
    var checkboxes =document.getElementsByClassName('cart-checkbox');

    for (var i =0; i < checkboxes.length; i ++) {
        checkboxes[i].checked= false;

    }
alert('All items  have been deleted from the cart :(');
}

function calculateTotal() {
    var total = 0;
    var checkboxes = document.getElementsByClassName('cart-checkbox');

    for( var i = 0; i < checkboxes.length; i ++) {
        if (checkboxes[i].checked) {
           
            total+10;


        }
    }


    document.getElementById('total-amount').innerHTML = '$' + total + '.00';
}

function removeItem(button) {

    var item =  button.parentNode;
    item.style.display='none';

    calculateTotal();

}


let carTotal = 0;
let itemCount = 0;

function addToCart(itemName, price) {
    cartTotal += price;
    itemCount +=1;

    document.getElementById('cartTotal').textContent = '$' + cartTotal.toFixed(2);
    document.getElementById('itemCount').textContent = itemCount + ' items';
    
    alert(itemName + ' added! New total: $' + cartTotal.toFixed(2));
}

// Chris code ^ //


function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cart-items-list');
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p>Your cart is currently empty</p>';
        updateCartSummary(0, 0);
        return;
    }
    
  
    cartItemsList.innerHTML = '';
    
    let subtotal = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = (item.price || 0) * item.quantity;
        subtotal += itemTotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Price: $${(item.price || 0).toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p><strong>Total: $${itemTotal.toFixed(2)}</strong></p>
            </div>
            <button class="remove-item-btn" onclick="removeCartItem(${index})">Remove</button>
        `;
        cartItemsList.appendChild(itemDiv);
    });
    
    updateCartSummary(subtotal, cart.length);
}


function updateCartSummary(subtotal, itemCount) {
    const taxRate = 0.08; // 8% tax
    const tax = subtotal * taxRate;
    const tipInput = document.getElementById('tip-amount');
    const tip = parseFloat(tipInput ? tipInput.value : 0) || 0;
    const total = subtotal + tax + tip;
    
    document.getElementById('cart-subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('cart-tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
}


function updateTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += (item.price || 0) * item.quantity;
    });
    
    updateCartSummary(subtotal, cart.length);
}


function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); 
}


document.addEventListener('DOMContentLoaded', loadCart);