// Get references to the gadgets list and shopping cart
      const gadgetsList = document.querySelector("#gadgets");
      const cart = document.querySelector("#cart");

      // Create an array to store the items in the shopping cart
      const shoppingCart = [];

      // Add an event listener to the "Add to Cart" button
      document.querySelector("#add-to-cart").addEventListener("click", () => {
        // Loop through the gadgets list and get all selected items
        for (let i = 0; i < gadgetsList.children.length; i++) {
          const gadget = gadgetsList.children[i];
          const checkbox = gadget.querySelector("input[type='checkbox']");
          if (checkbox.checked) {
            // Add the selected item to the shopping cart
            shoppingCart.push(gadget.querySelector("label").innerText);
}
}
// Clear the current contents of the cart
cart.innerHTML = "";

    // Loop through the shopping cart and add each item to the cart list
    for (let i = 0; i < shoppingCart.length; i++) {
      const item = document.createElement("li");
      item.textContent = shoppingCart[i];
      cart.appendChild(item);
    }
  });
