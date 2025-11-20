//function to show the cart page
function showCart() {
    alert('Cart button clicked!'); // Quick test
    
    // Hide menu elements
    document.querySelector('.button-container').style.display = 'none';
    document.querySelector('.header').style.display = 'none';
    
    // Show cart page (fullscreen)
    document.getElementById('cartPage').style.display = 'block';
}

function goBackToMenu() {
    // Hide cart page
    document.getElementById('cartPage').style.display = 'none';
    
    // Show menu elements
    document.querySelector('.button-container').style.display = 'block';
    document.querySelector('.header').style.display = 'block';
}


//show the menu buttons
document.getElementById('button-container').style.display= 'block';
document.getElementById('header').style.display = 'block';





//deselect all items in the cart
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
            //add $10 for each selected item
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

//Simple cart 
let carTotal = 0;
let itemCount = 0;

//add items
function addToCart(itemName, price) {
    cartTotal += price;
    itemCount +=1;

    document.getElementById('cartTotal').textContent = '$' + cartTotal.toFixed(2);
    document.getElementById('itemCount').textContent = itemCount + ' items';
    
    alert(itemName + ' added! New total: $' + cartTotal.toFixed(2));
}