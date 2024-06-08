document.addEventListener("DOMContentLoaded", function () {
  fetchProducts();

  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get("id");
  if (productId) {
    fetchProductDetails(productId);
  }
});

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

async function fetchProductDetails(id) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    displayProductDetails(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

function displayProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className =
      "card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300";
    productCard.innerHTML = `
          <figure><img src="${product.thumbnail}" alt="${product.title}" class="rounded-t-lg" /></figure>
          <div class="card-body">
              <h2 class="card-title ">${product.title}</h2>
              <p>${product.description}</p>
               
              <p class="text-lg font-bold">$${product.price}</p>
              <div class="card-actions justify-end">
                  <a href="about.html?id=${product.id}" class="btn btn-primary">View Details</a>
              </div>
          </div>
      `;
    productList.appendChild(productCard);
  });
}

function displayProductDetails(product) {
  const productDetails = document.getElementById("productDetails");
  productDetails.innerHTML = `
      <h1 class="text-3xl font-bold mb-4">${product.title}</h1>
      <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-auto rounded-lg mb-4" />
      <p class="text-lg mb-2"><strong>Description:</strong> ${product.description}</p>
        <p class="text-lg mb-2"><strong>Description:</strong> ${product.rating}</p>
      <p class="text-lg mb-2"><strong>Price:</strong> $${product.price}</p>
      <p class="text-lg mb-2"><strong>Category:</strong> ${product.category}</p>
      <p class="text-lg mb-2"><strong>Brand:</strong> ${product.brand}</p>
  `;
}

function searchProducts() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const productList = document.getElementById("productList");
  const cards = productList.getElementsByClassName("card");
  Array.from(cards).forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(searchInput)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}
