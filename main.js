// corinnes code
  (function () {
    const deliveryBtn = document.querySelector('.delivery-btn');
    const deliveryOverlay = document.getElementById('deliveryOverlay');

    if (deliveryBtn && deliveryOverlay) {
      deliveryBtn.addEventListener('click', () => deliveryOverlay.style.display = 'flex');
      deliveryOverlay.addEventListener('click', e => { if (e.target === deliveryOverlay) deliveryOverlay.style.display = 'none'; });
    }
  })();

  (function () {
    const pickupBtn = document.querySelector('.pickup-btn');
    const pickupOverlay = document.getElementById('pickupOverlay');

    if (pickupBtn && pickupOverlay) {
      pickupBtn.addEventListener('click', () => pickupOverlay.style.display = 'flex');
      pickupOverlay.addEventListener('click', e => { if (e.target === pickupOverlay) pickupOverlay.style.display = 'none'; });
    }
  })();

  (function () {
    const cartBtn = document.querySelector('.cart-btn');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.querySelector('.close-cart');
    const checkoutBtn = document.querySelector('.checkout-btn');

    if (cartBtn && cartOverlay) {
      cartBtn.addEventListener('click', () => {
        refreshAllCarts(); 
        cartOverlay.style.display = 'flex';
      });
    }
    if (closeCart) closeCart.addEventListener('click', () => cartOverlay.style.display = 'none');
    if (cartOverlay) cartOverlay.addEventListener('click', e => { if (e.target === cartOverlay) cartOverlay.style.display = 'none'; });
    if (checkoutBtn) checkoutBtn.addEventListener('click', () => window.location.href = 'cart.html');

    const dealBtn = document.getElementById('dealButton');
    if (dealBtn) {
      dealBtn.addEventListener('click', () => {
        addToCart('Weekly Taco Deal (Buy 2 Get 2 Free)', 9.99, '', 1);
        alert('Weekly deal added to cart!');
      });
    }
  })();

  
(function() {
    const signInBtn = document.querySelector('.sign-in-btn');
    const signinOverlay = document.getElementById('signinOverlay');
    const closeSignin = document.querySelector('.close-signin');

    if (signInBtn && signinOverlay) {
        signInBtn.addEventListener('click', () => {
            signinOverlay.style.display = 'flex';
        });

        closeSignin.addEventListener('click', () => {
            signinOverlay.style.display = 'none';
        });

        signinOverlay.addEventListener('click', e => {
            if (e.target === signinOverlay) {
                signinOverlay.style.display = 'none';
            }
        });
    }
})();



const signinOverlay = document.getElementById("signinOverlay");
const signInIcon = document.getElementById("signInIcon");
const signOutBtn = document.getElementById("signOutBtn");
const userProfile = document.getElementById("userProfile");

if (signInIcon) {
    signInIcon.addEventListener("click", () => {
        signinOverlay.style.display = "flex";
    });
}

document.querySelector(".close-signin").addEventListener("click", () => {
    signinOverlay.style.display = "none";
});

document.querySelector(".signin-continue").addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    location.reload();
});

// Faculty Sign In Handler
const facultyLink = document.getElementById('facultyLink');
const facultyOverlay = document.getElementById('facultyOverlay');
const closeFaculty = document.querySelector('.close-faculty');
const facultyLoginBtn = document.getElementById('facultyLoginBtn');

if (facultyLink) {
    facultyLink.addEventListener('click', () => {
        signinOverlay.style.display = 'none';
        facultyOverlay.style.display = 'flex';
    });
}

if (closeFaculty) {
    closeFaculty.addEventListener('click', () => {
        facultyOverlay.style.display = 'none';
    });
}

if (facultyOverlay) {
    facultyOverlay.addEventListener('click', (e) => {
        if (e.target === facultyOverlay) {
            facultyOverlay.style.display = 'none';
        }
    });
}

if (facultyLoginBtn) {
    facultyLoginBtn.addEventListener('click', () => {
        const username = document.getElementById('faculty-username').value.trim();
        const password = document.getElementById('faculty-password').value.trim();

        if (username === 'admin' && password === 'manager123') {
            window.location.href = 'manager.html';
        } else {
            alert('Invalid manager credentials. Please try again.');
        }
    });
}


if (signOutBtn) {
    signOutBtn.addEventListener("click", () => {
        localStorage.removeItem("userLoggedIn");
        localStorage.removeItem("userEmail");
        location.reload();
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("userLoggedIn");

    if (isLoggedIn) {
        if (signInIcon) signInIcon.style.display = "none";

        if (userProfile) userProfile.style.display = "flex";
    }
});

// corinnes code 