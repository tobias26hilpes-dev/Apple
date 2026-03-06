function renderCart() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        container.textContent = "Dein Warenkorb ist leer.";
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";

        if (item.image) {
            const img = document.createElement("img");
            img.className = "cart-item-image";
            img.src = item.image;
            img.alt = item.name;
            itemDiv.appendChild(img);
        }

        const infoDiv = document.createElement("div");
        infoDiv.className = "cart-item-info";

        const nameDiv = document.createElement("div");
        nameDiv.textContent = item.name;

        const priceDiv = document.createElement("div");
        priceDiv.textContent = item.price;

        infoDiv.appendChild(nameDiv);
        infoDiv.appendChild(priceDiv);

        const buyButton = document.createElement("button");
        buyButton.className = "buy-button";
        buyButton.textContent = "Kaufen";
        buyButton.addEventListener("click", () => {
            alert("Danke für deinen Einkauf von " + item.name + "!");
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            removeFromCart(index);
        });

        itemDiv.appendChild(deleteButton);
        itemDiv.appendChild(infoDiv);
        itemDiv.appendChild(buyButton);

        container.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);
