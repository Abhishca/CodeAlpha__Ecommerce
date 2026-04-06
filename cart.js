if (!localStorage.getItem("token")) {
  window.location.href = "login.html";
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(products => {
    let total = 0;
    const container = document.getElementById("cartItems");

    cart.forEach(id => {
      const p = products.find(x => x._id === id);
      total += p.price;

      container.innerHTML += `
        <div class="cart-item">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
        </div>
      `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
  });

function checkout() {
  fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      userId: "demo",
      products: cart,
      totalPrice: 0
    })
  });

  alert("Order placed!");
  localStorage.removeItem("cart");
  location.reload();
}