import { menuArray } from "./data.js"

let orderArray = []

// addEventListeners

document.addEventListener('click', function(e){
    if(e.target.dataset.add) {
        addOrderItem(e.target.dataset.add)
    }
})

// Get menu from /Data.js and create HTML 

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

// render products into productsContainer

function renderProducts() {
   document.getElementById('products-container').innerHTML = getMenuHtml()
}

renderProducts()


// Locate id using addEventListener and push its object into orderArray then render the order

function addOrderItem(selectIdItem) {
    const targetItemObj = menuArray.filter(function(item){
        return item.id == selectIdItem
    })[0]
    orderArray.push(targetItemObj)
    renderOrder()
}


function getOrderHtml() {
    let totalPrice = 0
    let orderHtml = 
    `
    <h2 class="order-title">Your Order</h2> 
    `
    
    orderArray.forEach(function(orderItem, index){
        orderHtml +=
        `
        <div class="order-container">
            <div>
            <h3 class="order-items">${orderItem.name}</h3> 
            </div>

            <div>
            <p class="remove-btn" data-remove='${index}'>remove</p>
            </div>

            <div>
            <h3 class="order-price">$${orderItem.price}.00</h3>
            </div>
        </div>
        `

        totalPrice += orderItem.price
    })
    return orderHtml
}

function renderOrder() {
    document.getElementById('order-container').innerHTML = getOrderHtml()
}
