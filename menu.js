// corinne's code // 

document.addEventListener("DOMContentLoaded", () => {
    
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        const plusBtn = item.querySelector(".plus-btn");
        const minusBtn = item.querySelector(".minus-btn");
        const quantityInput = item.querySelector(".quantity"); 
        const addToCartBtn = item.querySelector(".add-to-cart-btn");

        const getCurrentQuantity = () => {
            let value = parseInt(quantityInput.value, 10);
            
            if (isNaN(value) || value < 0) {
                value = 0;
            }
            return value;
        };
        

        plusBtn.addEventListener("click", () => {
            let currentQuantity = getCurrentQuantity();
            currentQuantity++;
            quantityInput.value = currentQuantity; 
        });

        minusBtn.addEventListener("click", () => {
            let currentQuantity = getCurrentQuantity();
            if (currentQuantity > 0) {
                currentQuantity--;
                quantityInput.value = currentQuantity; 
            }
        });

        quantityInput.addEventListener("blur", () => {
            let currentQuantity = getCurrentQuantity();
            quantityInput.value = currentQuantity;
        });

        // Add to cart functionality
        addToCartBtn.addEventListener("click", () => {
            const quantity = getCurrentQuantity();
            
            if (quantity === 0) {
                alert("Please select a quantity greater than 0");
                return;
            }

            const itemName = item.dataset.name;
            const itemImage = item.dataset.image;
            const itemPrice = parseFloat(item.dataset.price);

            // Get existing cart from localStorage or create new array
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if item already exists in cart
            const existingItemIndex = cart.findIndex(cartItem => cartItem.name === itemName);

            if (existingItemIndex > -1) {
                // Item exists, update quantity
                cart[existingItemIndex].quantity += quantity;
            } else {
                // Add new item to cart
                cart.push({
                    name: itemName,
                    image: itemImage,
                    price: itemPrice,
                    quantity: quantity
                });
            }

            // Save cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Show confirmation
            alert(`${quantity} x ${itemName} added to cart!`);

            // Reset quantity to 0
            quantityInput.value = 0;
        });
    });

});
// corinne's code ^ //