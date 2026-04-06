let allProducts = [];

fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(products => {
    allProducts = products;
    displayProducts(products);
  });

function displayProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <a href="product.html?id=${p._id}">View Details</a>
        <button onclick="addToCart('${p._id}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

/* SEARCH FUNCTION */
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});