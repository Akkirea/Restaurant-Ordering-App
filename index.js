import { menuArray } from "./data.js"

const productsContainer = document.getElementById('products-container')

function getMenuHtml() {
    let productsHtml = ''

    menuArray.forEach(function(product){
        productsHtml +=
        `
        <div class="products-container">
            <div>
            <h2 class="product-emoji">${product.emoji}</h2>
            </div>

            <div>
            <h2 class="product-name">${product.name}</h2>
            <h3 class="product-ingredients">${product.ingredients}</h3>
            <h2 class="price">$${product.price}.00</h2>
            </div>

            <div>
            <button class="add-btn" data-add='${product.id}'>+</button>
            </div>
        </div>

        `
    })
    return productsHtml
}

function renderProducts() {
    productsContainer.innerHTML = getMenuHtml()
}

renderProducts()