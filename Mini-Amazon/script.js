// 1. Fake Login Logic
const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-page');
const productPage = document.getElementById('product-page');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Beginner level check
    if(email === "ruksharkhatoon436@gmail.com" && password === "Ayruhi@456") {
        loginPage.classList.add('hidden');
        productPage.classList.remove('hidden');
        loadProducts();
    } else {
        alert("Invalid login! Use user@test.com and 123456");
    }
});

// 2. Load Products Dynamically
function loadProducts() {
    const products = [
        { name: "iPhone 15 Pro", price: "$999", img: "https://m.media-amazon.com/images/I/81SigAnN7pL._AC_SL1500_.jpg" },
        { name: "Sony Headphones", price: "$299", img: "https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SL1500_.jpg" },
        { name: "Echo Dot 5th Gen", price: "$49", img: "https://m.media-amazon.com/images/I/71Yp-iR8WYL._AC_SL1500_.jpg" }
    ];

    const grid = document.querySelector('.product-grid');
    grid.innerHTML = products.map(p => `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p class="price">${p.price}</p>
            <button class="btn-primary">Add to Cart</button>
        </div>
    `).join('');
}

// 3. Logout Logic
document.getElementById('logout-btn').addEventListener('click', () => {
    productPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
});