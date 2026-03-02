"use strict";
const productContainer = document.querySelector(".product_list_container");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  //   console.log("productsArr", productsArr);
  productContainer.innerHTML = "";
  productsArr.forEach((product) => {
    console.log("product", product.id);

    productContainer.innerHTML += `<article class="smallProduct">
          <a href="product.html"
            ><img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="Produkt billede"
          /></a>

          <p class="soldoutTxt color_me_black_and_red">SOLD OUT</p>

          <h3><strong>Nike sweatshirt</strong></h3>
          <p class="opacity">${product.articletype} | ${product.brandname}</p>
          <p class="price">DKK <span>299</span>,-</p>
          <div class="discounted_element">
            <p>Nu DKK <span></span>,-</p>
            <p class="color_me_red"><span></span>%</p>
          </div>
          <a href="product.html">Læs mere</a>
        </article>`;
  });
}
