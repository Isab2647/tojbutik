"use strict";
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const productContainer = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=100`)
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);

    function showProducts(productsArr) {
      productContainer.innerHTML = `<h2>${category}</h2>`;
      productsArr.forEach((product) => {
        productContainer.innerHTML += `<article class="smallProduct ${product.soldout ? "soldOut" : ""} ${product.discount ? "discounted" : ""}">
        
          <a href="product.html?id=${product.id}"
            ><img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="Produkt billede"
          /></a>

          <p class="soldoutTxt color_me_black_and_red">SOLDOUT</p>

          <h3><strong>${product.productdisplayname}</strong></h3>
          <p class="opacity">${product.articletype} | ${product.brandname}</p>
          <p class="price">DKK <span>${product.price}</span>,-</p>
          <div class="discounted_element">
            <p>Nu DKK <span>${Math.ceil(product.price * (1 - product.discount / 100))}</span>,-</p>
            <p class="color_me_red"><span>${product.discount}</span>%</p>
          </div>
          <a href="product.html?id=${product.id}">Læs mere</a>
        </article>`;
      });
    }
  });
