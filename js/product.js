const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const productContainer = document.querySelector("#productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
<div class="grid_1-1-1"> 
        <div class="information">
          <h2 class="h2">Produkt information</h2>
          <dl>
            <dt><strong>Model navn</strong></dt>
            <dd>${data.articletype}</dd>
            <dt><strong>Farve</strong></dt>
            <dd>${data.basecolour}</dd>
            <dt><strong>Produktnummer</strong></dt>
            <dd>26145</dd>
            <dt><strong>Pris</strong></dt>
            <p class="price">DKK <span>${data.price}</span>,-</p>
            <p class="price">DKK ${Math.ceil(data.price * (1 - data.discount / 100))} ,-</p>
          </dl>
          ${data.discount ? "  <span class='saleLabel' >Udsalg!</span> " : ""}
         
        </div>
      
       <img class="order" src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="" />


        <div class="boks">
          <h3>Levi's bukser - herre</h3>
          <p class="opacity">Bukser / Herre</p>

          <ul class="menu">
            <li class="dropdown">
              <input type="checkbox" id="toggle" />
              <label for="toggle">Størrelse ▾</label>
              <ul class="dropdown-content">
                <li><a href="#">S</a></li>
                <li><a href="#">M</a></li>
                <li><a href="#">L</a></li>
              </ul>
            </li>
          </ul> 
         
          <button class="kob">Køb</button>
        </div>
      </div>`;
  });
