const params = new URLSearchParams(document.location.search);
let filter = params.get("filter");
let product = params.get("product");


let feature = "https://script.google.com/macros/s/AKfycbw1uZq2LRy6YrlmKI8xPWS39180cJC8oZWTAP2ieIvP4mjOLElyEZYIAs0X_nVbpnM/exec"

const cartContainer = document.querySelector('.cart-container');

const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-list');
const cartTotalValue = document.getElementById('cart-total-value');

let cartItemID = 0;
let phoneNumber = `8437793637` //your company whatsapp number


eventListeners();


function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });
    productList.addEventListener('click', purchaseProduct);
}
// show & hide Cart

function toggleHide() {
    let container = document.getElementById('cart');

    if (container.style.display != 'none') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
}



async function loadJSON() {
    try {
        let data=[]
        let d = await (await fetch(`${feature}`)).json();
        await data.push(d.filter(o => o.Type === 'featured'))
        await data.push(d.filter(o => o.Type === 'oversize'))
        await data.push(d.filter(o => o.Type === 'baggy'))
        await data.push(d.filter(o => o.Type === 'accessories'))
        data = data.flat()
        if (typeof filter === 'undefined' || filter === null) {}
        if (filter == "oversize") {
            let oversize = data.filter(o => o.Type === 'oversize');
            if ((oversize).length != 0) {

                data = oversize


            }
        }
        if (filter == "baggy") {
            let baggy = data.filter(o => o.Type === 'baggy');
            if ((baggy).length != 0) {

                data = baggy

            }
        }
        if (filter == "accessories") {
            let accessories = data.filter(o => o.Type === 'accessories');
            if ((accessories).length != 0) {

                data = accessories

            }
        }
        console.log(data)

        const html = data.map((f, i) => {
            return `
            <div class="product text-center col-lg-3 col-md-6 col-12">
            <img class="ccimgh" src="${data[i].Image}" width="auto" height="217px" alt="">
            <div class="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
            </div>
            <h5 class="p-name">${data[i].Name}</h5>
            <h4 class="p-price">₹${data[i].Price}</h4>
            <h4 class="p-price" style="display: none;">${data[i].Tags}</h4>
            <button class="buy-button" onclick="msg()">Add to Cart</button>
            </div>`;
        }).join('');
        document.querySelector("#alls").insertAdjacentHTML("afterbegin", html);

    } catch (error) {

    }
}

//cart hide/show and show cart items

function toggleHide() {
    let cart = document.getElementById('cart');

    if (cart.style.display != 'none') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
    //To show items in cart after clicking on bag icon
    for (i = 0; i < itemArray.length; i++) {
        document.getElementById('cart-list').innerHTML = itemArray[i];
    }


    window.scrollTo(0, 0);
}
// Add to cart 

function purchaseProduct(e) {
    if (e.target.classList.contains('buy-button')) {
        let product = e.target.parentElement;
        getProductInfo(product);
    }
    cartItemID++;

}

function getProductInfo(product) {
    let productInfo = {
        id: cartItemID,
        imgsrc: product.querySelector('.ccimgh').src,
        name: product.querySelector('.p-name').textContent,
        price: product.querySelector('.p-price').textContent,
    }
    addtocart(productInfo);
}

let item = '';
let itemArray = new Array();
let cartItems = new Array();
let itemPrice = 0

function addtocart(productInfo) {
    item += `<tr>
            <td><a href="#"><i class='bx bxs-trash-alt'></i></a></td>
            <td><img src="${productInfo.imgsrc}" width="auto" alt="Loading"></td>
            <td><h5 class="cart-item-name"> ${productInfo.name}</h5></td>
            <td><h5 class="cart-item-price"> ${productInfo.price} </h5></td>
          </tr>`;
    itemPrice += parseInt((productInfo.price).replaceAll("₹", ""));
    //storing sleceted item in array

    itemArray[cartItemID] = item;
    cartItems[cartItemID] = productInfo.name;
    document.getElementById('count').innerHTML = itemArray.length;
    if (itemArray.length > 1) {
        document.getElementById('item-count').innerHTML = `Total-Price: ₹ ${itemPrice}`;
        document.getElementById('checkout').innerHTML = `<button id="checkout" onclick="whatsapp(cartItems,itemPrice)">CheckOut</button>`;
    }
}

function whatsapp(cartItems, itemPrice) {
    console.log(cartItems)
    let chatMessage = cartItems.toString();
    chatMessage = chatMessage.replaceAll("empty", "")
    chatMessage = chatMessage.replaceAll(",", "%0A")
    chatMessage = `⭐Hi River Clothing i want to order%0A` + chatMessage + `%0A%0A🚚Cart Value ${itemPrice}`
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${chatMessage}`)
}


//To show aknowledgement msg after clicking on add to cart button

function msg() {
    let msg = document.getElementById('msg-appear');
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.display = 'none';
    }, 1500);
}
let countArr = [];

function toggleHides() {
    toggleHide()
    toggleHide()
}





// let feature = "https://script.google.com/macros/s/AKfycbxa6iiG3ohmI6ZaEmBcp8vGzRmM61MN542Lpe0fmnVjIise9VTrBQECY8oPjlk-RGSZ/exec"



// //Loading products from JSON to our Shop page
// function loadJSON() {
//     let feature = "https://script.google.com/macros/s/AKfycbzD8GcgXkv9CzyjSIduuaakwFOZWkU-V4d6iw7UFvl25QmHxeL_MQnxOC7N5pEQKkIr/exec"
//     fetch(`${feature}`)
//     .then(response => {
//         if (!response.ok) {
//             throw Error("ERROR");
//         }
//         return response.json();
//     })
//     .then(data => {
//         // console.log(featured)
//         // console.log(data[0]);

//         //featured
//         const html = data.map((f, i) => {
//             return `
//             <div class="product text-center col-lg-3 col-md-6 col-12">
//             <img class="img-fluid mb-3 p-img" src="${data[i].Image}" alt="">
//             <div class="star">
//               <i class='bx bxs-star'></i>
//               <i class='bx bxs-star'></i>
//               <i class='bx bxs-star'></i>
//               <i class='bx bxs-star'></i>
//               <i class='bx bxs-star'></i>
//             </div>
//             <h5 class="p-name">${data[i].Name}</h5>
//             <h4 class="p-price">₹${data[i].Price}</h4>
//             <h4 class="p-price" style="display: none;">${data[i].Tags}</h4>
//             <button class="buy-button" onclick ="msg()">Add to Cart</button>

//           </div>`;
//         }).join('');
//         document.querySelector("#all").insertAdjacentHTML("afterbegin", html);
//         // document.getElementById('all').innerHTML = html;
//     })
// }