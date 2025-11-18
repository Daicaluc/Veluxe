let cart = [];

    function addToCart(productName, price, image) {
        cart.push({ productName, price, image });
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        const cartElement = document.getElementById('cart');
        cartElement.innerHTML = '<h2>Carrito</h2>';

        let total = 0;

        cart.forEach((item, index) => {
            cartElement.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.productName}" style="width: 50px; height: 50px;">
                    <p>${item.productName} - $${item.price}</p>
                    <button onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            `;
            total += item.price;
        });

        cartElement.innerHTML += `<p><strong>Total: $${total.toFixed(2)}</strong></p>`;
    }