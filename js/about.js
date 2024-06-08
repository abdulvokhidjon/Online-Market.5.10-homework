// document.addEventListener("DOMContentLoaded", () => {
//   // Get the product ID from the URL
//   const urlParams = new URLSearchParams(window.location.search);
//   const productId = urlParams.get("id");

//   // Fetch and display product details
//   if (productId) {
//     fetch(`https://dummyjson.com/products/${productId}`)
//       .then((response) => response.json())
//       .then((product) => {
//         displayProductDetails(product);
//       })
//       .catch((error) => {
//         console.error("Error fetching product details:", error);
//       });
//   }

//   // Function to display product details
//   function displayProductDetails(product) {
//     const productImage = document.getElementById("product-image");
//     const productTitle = document.getElementById("product-title");
//     const productDescription = document.getElementById("product-description");
//     const productPrice = document.getElementById("product-price");
//     const productCategory = document.getElementById("product-category");
//     const productRating = document.getElementById("product-rating");
//     const productStock = document.getElementById("product-stock");

//     productImage.innerHTML = `<img src="${product.thumbnail}" alt="${product.title}" class="w-full h-64 object-cover rounded-md" />`;
//     productTitle.textContent = product.title;
//     productDescription.textContent = product.description;
//     productPrice.textContent = `Price: $${product.price}`;
//     productCategory.textContent = `Category: ${product.category}`;
//     productRating.textContent = `Rating: ${product.rating}`;
//     productStock.textContent = `Stock: ${product.stock}`;
//   }
// });
