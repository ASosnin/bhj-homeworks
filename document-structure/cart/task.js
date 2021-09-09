const ready = () => {
  const products = document.querySelectorAll(".product");
  const Cart = document.querySelector(".cart__products");

  const createOrUpdateCartProduct = (id, srcImage, count) => {
    const cartProduct = [...Cart.querySelectorAll(".cart__product")].find(
      (item) => {
        return item.dataset.id === id;
      }
    );
    if (cartProduct) {
      const currentCount = parseInt(
        cartProduct.querySelector(".cart__product-count").innerText
      );
      cartProduct.querySelector(".cart__product-count").innerText = (
        currentCount + parseInt(count)
      ).toString();
    } else {
      const CartProduct = document.createElement("div");
      const Img = document.createElement("img");
      const Count = document.createElement("div");
      CartProduct.classList.add("cart__product");
      CartProduct.dataset.id = id;
      Img.classList.add("cart__product-image");
      Img.src = srcImage;
      Count.classList.add("cart__product-count");
      Count.innerText = count;
      CartProduct.appendChild(Img);
      CartProduct.appendChild(Count);
      Cart.appendChild(CartProduct);
    }
  };

  const onProductIncrement = (event) => {
    const ControlValue = event.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    ControlValue.innerText = (
      parseInt(ControlValue.innerText.trim()) + 1
    ).toString();
  };

  const onProductDecrement = (event) => {
    const ControlValue = event.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    const currentValue = parseInt(ControlValue.innerText.trim());
    if (currentValue === 1) {
      return;
    }
    ControlValue.innerText = (currentValue - 1).toString();
  };

  const onProductAdd = (event) => {
    const Product = event.target.closest(".product");
    const id = Product.dataset.id;
    const srcImage = Product.querySelector("img").src;
    const count = Product.querySelector(".product__quantity-value").innerText;

    createOrUpdateCartProduct(id, srcImage, count);
  };

  products.forEach((item) => {
    const ButtonProductAdd = item.querySelector(".product__add");
    const ButtonIncrement = item.querySelector(
      ".product__quantity-control_inc"
    );
    const ButtonDecrement = item.querySelector(
      ".product__quantity-control_dec"
    );
    ButtonProductAdd.addEventListener("click", onProductAdd);
    ButtonIncrement.addEventListener("click", onProductIncrement);
    ButtonDecrement.addEventListener("click", onProductDecrement);
  });
};

document.addEventListener("DOMContentLoaded", ready);
