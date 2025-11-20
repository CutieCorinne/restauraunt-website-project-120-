function showAddCard() {
    document.getElementById('addCardForm').style.display = 'block';
    document.querySelector('.add-payment-btn').style.display = 'none';
}

function cancelAddCard() {
    document.getElementById('addCardForm').style.display = 'none';
    document.querySelector('.add-payment-btn').style.display = 'block';
    clearCardForm();
}

function saveCard()  {
    //get card info
    const cardName = document.querySelector('input[placeholder="Cardholder Name"]').value;
    const cardNumber = document.querySelector('input[placeholder="Card Number"]').value;
    const cardType =document.querySelector('input[name="cardType"]:checked').value;


    if (cardName && cardNumber) {
        //card list
        const cardsList = document.querySelector('.payment-methods-list');
        const maskedNumber = '**** **** **** ' + cardNumber.slice(-4);


        cardsList.innerHTML += `
            <div class="saved-card">
                <span class="card-info">${cardType.toUpperCase()} ending in ${cardNumber.slice(-4)}</span>
                <span class="cardholder-name">${cardName}</span>
            </div>
        `;

        cancelAddCard();
        alert('Card saved successfully!');
    } else {
        alert('please fill in all required fields');
    }
    }
    
function clearCardForm() {
    const inputs = document.querySelectorAll('#addCardForm input[type="text"]');
    inputs.forEach(input => input.value = '');

}

function deselectAllItems() {
    // Reset cart total and item count
    document.getElementById('cartTotal').textContent = '$0.00';
    document.getElementById('itemCount').textContent = '0 items';
    
    // Show empty cart message
    document.querySelector('.empty-cart').style.display = 'block';
    
    // Hide any cart items if they exist
    const cartItems = document.querySelector('.cart-items');
    if (cartItems) {
        cartItems.innerHTML = '';
    }
    
    alert('All items have been removed from your cart');
}