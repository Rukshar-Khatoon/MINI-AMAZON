// 1. Data: Our products
const products = [
    { id: 1, name: "Wireless Headphones", price: 99, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Smart Watch", price: 199, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Gaming Mouse", price: 49, img: "https://via.placeholder.com/200" }
];

let cart = JSON.parse(localStorage.getItem('myCart')) || [];

// 2. Login Logic
function login() {
    const user = document.getElementById('username').value;
    if (user) {
        document.getElementById('login-screen').style.display = 'none';
        renderProducts();
        updateCartCount();
    }
}

function logout() {
    location.reload(); // Simple way to reset state
}

// 3. Render Products to Page
function renderProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// 4. Cart Logic
function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    cart.push(item);
    
    // Save to LocalStorage
    localStorage.setItem('myCart', JSON.stringify(cart));
    
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Check if already logged in (optional feature)
window.onload = () => {
    if(cart.length > 0) updateCartCount();
};