let feature = "https://script.google.com/macros/s/AKfycbzD8GcgXkv9CzyjSIduuaakwFOZWkU-V4d6iw7UFvl25QmHxeL_MQnxOC7N5pEQKkIr/exec"


fetch(`${feature}`)
    .then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data => {
        
        let featured = data.filter(o => o.Type === 'featured');
        let katana = data.filter(o => o.Type === 'katana');
        let skins = data.filter(o => o.Type === 'wraps');
        // console.log(featured)
        // console.log(data[0]);

        //featured
        const featured_html = featured.map((f, i) => {
            return `
        <div class="product text-center col-lg-3 col-md-6 col-12">
            <img class="img-fluid mb-3" src="${featured[i].Image}" width="217px" heigth="217px" alt="">
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
        <a href="shop.html"><button class="buy-button">Shop Now</button></a>

        </div>`;
        }).join('');
        document.querySelector("#featuredl").insertAdjacentHTML("afterbegin", featured_html);

        //katana
        const katana_html = katana.map((f, i) => {
            return `
            <div class="product text-center col-lg-3 col-md-6 col-12">
            <img class="img-fluid mb-3" src="${katana[i].Image}" alt="">
            <div class="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
            </div>
            <h5 class="p-name">${katana[i].Name}</h5>
            <h4 class="p-price">₹${katana[i].Price}</h4>
            <h4 class="p-price" style="display: none;">${katana[i].Tags}</h4>
            <a href="shop.html"><button class="buy-button">Shop Now</button></a>
    
          </div>

        </div>`;
        }).join('');
        document.querySelector("#katanas").insertAdjacentHTML("afterbegin", katana_html);

        //skins
        const skins_html = skins.map((f, i) => {
            return `
            <div class="product text-center col-lg-3 col-md-6 col-12">
            <img class="img-fluid mb-3" src="${skins[i].Image}" alt="">
            <div class="star">
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
              <i class='bx bxs-star'></i>
            </div>
            <h5 class="p-name">${skins[i].Name}</h5>
            <h4 class="p-price">₹${skins[i].Price}</h4>
            <h4 class="p-price" style="display: none;">${skins[i].Tags}</h4>
            <a href="shop.html"><button class="buy-button">Shop Now</button></a>
    
          </div>

        </div>`;
        }).join('');
        document.querySelector("#skins").insertAdjacentHTML("afterbegin", skins_html);
    })