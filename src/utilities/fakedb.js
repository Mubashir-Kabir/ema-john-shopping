// use local storage to manage cart data
const addToDb = (id) => {
  let shoppingCart = [];
  let flag;

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  shoppingCart.forEach((element) => {
    if (id === element.id) {
      element.quantity += 1;
      flag = true;
    }
  });

  if (!flag) {
    const product = {
      id: id,
      quantity: 1,
    };
    shoppingCart.push(product);
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, deleteShoppingCart };
