let feature = "https://script.google.com/macros/s/AKfycbw1uZq2LRy6YrlmKI8xPWS39180cJC8oZWTAP2ieIvP4mjOLElyEZYIAs0X_nVbpnM/exec"

;(async ()=>{
    try {
        let data = await (await fetch(`${feature}`)).json();
        let featured = data.filter(o => o.Type === 'featured');
        let oversize = data.filter(o => o.Type === 'oversize');
        let baggie = data.filter(o => o.Type === 'baggy');
        let accessories = data.filter(o => o.Type === 'accessories');

        featured = featured.slice(0,8)
        baggie = baggie.slice(0,4)
        accessories = accessories.slice(0,4)

        //featured
        const featured_html = featured.map((f, i) => {
            return `
        <div class="product text-center col-lg-3 col-md-6 col-12">
            <img src="${featured[i].Image}" width="auto" height="217px" alt="">
            <div class="star">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
            </div>
        <h5 class="p-name">${(featured[i].Name)}</h5>
        <h4 class="p-price">₹${featured[i].Price}</h4>
        <h4 class="p-price" style="display: none;">${featured[i].Tags}</h4>
        <a href="shop.html?filter=oversize&product=${i+1}"><button class="buy-button">Shop Now</button></a>

        </div>`;
        }).join('');
        document.querySelector("#featuredl").insertAdjacentHTML("afterbegin", featured_html);

        //accessories
        const accessories_html = accessories.map((f, i) => {
            return `
            <div class="product text-center col-lg-3 col-md-6 col-12">
            <img src="${accessories[i].Image}" width="auto" height="217px" alt="">
            <div class="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
            </div>
            <h5 class="p-name">${accessories[i].Name}</h5>
            <h4 class="p-price">₹${accessories[i].Price}</h4>
            <h4 class="p-price" style="display: none;">${accessories[i].Tags}</h4>
            <a href="shop.html?filter=accessories&product=${i+1}"><button class="buy-button">Shop Now</button></a>
    
          </div>

        </div>`;
        }).join('');
        document.querySelector("#accessories").insertAdjacentHTML("afterbegin", accessories_html);


        //baggie
        const baggy_html = baggie.map((f, i) => {
            return `
            <div class="product text-center col-lg-3 col-md-6 col-12">
            <img  src="${baggie[i].Image}" width="auto" height="217px" alt="">
            <div class="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
            </div>
            <h5 class="p-name">${baggie[i].Name}</h5>
            <h4 class="p-price">₹${baggie[i].Price}</h4>
            <h4 class="p-price" style="display: none;">${baggie[i].Tags}</h4>
            <a href="shop.html?filter=baggy&product=${i+1}"><button class="buy-button">Shop Now</button></a>
    
          </div>

        </div>`;
        }).join('');
        document.querySelector("#baggy").insertAdjacentHTML("afterbegin", baggy_html);
        

    } catch (error) {
        console.log("River",error)
    }
    
})();