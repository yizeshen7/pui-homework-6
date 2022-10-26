var cart = JSON.parse(localStorage.getItem("cart"));

function displayCart() {
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
    var child = document.createElement("div");
    child.className = "row";

    var childImage = document.createElement("div");
    childImage.className = "column";

    var childData = document.createElement("div");
    childData.className = "column";

    const name = document.createTextNode("Type: " + cart[i].type + "  ");
    const glazing = document.createTextNode(
      "Glazing: " + cart[i].galzing + " "
    );
    const size = document.createTextNode("Size: " + cart[i].size + "  ");
    const price = document.createTextNode("Price: " + cart[i].basePrice + "  ");
    var image = document.createElement("img");
    image.src = "assets/original-cinnamon-roll.jpg";
    image.style =
      "display: block; width: 200px; height: 200px;border: 5px solid #555;";

    childImage.appendChild(image);
    childData.appendChild(name);
    childData.appendChild(glazing);
    childData.appendChild(size);
    childData.appendChild(price);

    child.appendChild(childImage);
    child.appendChild(childData);

    document.getElementById("cards-checkout").appendChild(child);
  }
}

displayCart();
