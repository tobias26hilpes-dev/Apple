function addToCart(name, price, image) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: name, price: price, image: image || null });
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(name + " wurde in den Warenkorb gelegt.");
}

function i17oclick() {
    console.log("iphone 17 orange");
    addToCart("iPhone 17 orange", "1499,99€", "bilder/iphone1.png");
}

function i17bclick() {
    console.log("iphone 17 schwarz");
    addToCart("iPhone 17 schwarz", "1499,99€", "bilder/iphone2.png");
}

function i17wclick() {
    console.log("iphone 17 weiß");
    addToCart("iPhone 17 weiß", "1499,99€", "bilder/iphone3.png");
}

function ipad1click() {
    console.log("iPad Air Pink");
    addToCart("iPad Air Pink", "899,99€", "bilder/Ipad1.png");
}

function ipad2click() {
    console.log("iPad Air Weiß");
    addToCart("iPad Air Weiß", "899,99€", "bilder/Ipad2.png");
}

function ipad3click() {
    console.log("iPad Air Hellblau");
    addToCart("iPad Air Hellblau", "899,99€", "bilder/Ipad3.png");
}

function apmMidnightClick() {
    console.log("AirPods Max Mitternacht");
    addToCart("AirPods Max Mitternacht", "629,99€", "bilder/AirPods Max (Mitternacht).png");
}

function apmOrangeClick() {
    console.log("AirPods Max Orange");
    addToCart("AirPods Max Orange", "629,99€", "bilder/AirPods Max (Orange).png");
}

function apmStarlightClick() {
    console.log("AirPods Max Starlight");
    addToCart("AirPods Max Starlight", "629,99€", "bilder/AirPods Max (Starlight).png");
}
