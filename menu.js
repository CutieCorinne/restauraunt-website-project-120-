// corinne's code // 

document.addEventListener("DOMContentLoaded", () => {
    
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        const plusBtn = item.querySelector(".plus-btn");
        const minusBtn = item.querySelector(".minus-btn");
        const quantityInput = item.querySelector(".quantity"); 

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
    });

});
// corinne's code ^ //