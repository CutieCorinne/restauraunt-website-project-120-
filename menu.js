// menu.js - attaches quantity controls and Add to Cart actions

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    const plusBtn = item.querySelector('.plus-btn') || item.querySelector('.quantity-controls .plus-btn');
    const minusBtn = item.querySelector('.minus-btn') || item.querySelector('.quantity-controls .minus-btn');
    const qtyInput = item.querySelector('.quantity');
    const addBtn = item.querySelector('.add-to-cart-btn');

    // Use dataset values
    const name = item.dataset.name;
    const price = parseFloat(item.dataset.price || 0);
    const image = item.dataset.image || '';

    const getQty = () => {
      const v = parseInt(qtyInput.value, 10);
      return (isNaN(v) || v < 0) ? 0 : v;
    };

    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        qtyInput.value = getQty() + 1;
      });
    }

    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        const q = getQty();
        if (q > 0) qtyInput.value = q - 1;
      });
    }

    if (qtyInput) {
      // ensure non-negative numbers only
      qtyInput.addEventListener('input', () => {
        if (qtyInput.value === '') return;
        let v = parseInt(qtyInput.value, 10);
        if (isNaN(v) || v < 0) v = 0;
        qtyInput.value = v;
      });
    }

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const q = getQty();
        // per your choice, do nothing when q === 0
        if (q === 0) {
          // no alert; silent
          return;
        }
        addToCart(name, price, image, q);
        qtyInput.value = 0;

        // quick UI feedback
        const prev = addBtn.textContent;
        addBtn.textContent = '✓ Added';
        addBtn.disabled = true;
        setTimeout(() => {
          addBtn.textContent = prev;
          addBtn.disabled = false;
        }, 900);
      });
    }
  });
});
