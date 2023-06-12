// Toggle navbar to active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Toggle and remove to click anywhere
const hamburgerClick = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerClick.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//DOM Fetch Product Merch

const productContainer = document.querySelector(".row-product ul");

fetch("json/merch-product.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)

    let contentHTML = "";
    data.products.forEach((product) => {
      contentHTML += `
      <div class="card">
      <img src="${product.image}" alt="${product.name}" style="width: 100%" />
      <h1>${product.name}</h1>
      <p class="price">${product.price}</p>
      <p>${product.description}</p>
      <p><button>Add to Cart</button></p>
      </div>
      `;
    });
    // console.log(isiHTML)
    productContainer.innerHTML = contentHTML;
  })
  .catch((err) => {
    console.log(err);
  });
