
const ElectronicProduct = [
    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/k6qsn0w0/tablet/3/q/z/lenovo-za5g0047in-original-imafp4w7qvpnprv5.jpeg?q=70",
        name : "Deals on Lenovo",
        price : 8999,
        brand : "Affordable & feature!"
    },
    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/xif0q/power-bank/0/p/b/aerosync-pb-10-a-10000-aerosync-pb-10-a-ambrane-original-imagjvjqzzvhtkye.jpeg?q=70",
        name : "Power Bank",
        price : 499,
        brand : "Ambrane,Mi & more"
    },
    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/kwpam4w0/cases-covers/back-cover/j/d/r/enfl-3d-relif-ip-13-mixlilies-enflamo-original-imag9bg9humexnp9.jpeg?q=70",
        name : "Designer Cases",
        price : 199,
        brand : "New Designs"
    },
    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/kwpam4w0/cases-covers/back-cover/j/d/r/enfl-3d-relif-ip-13-mixlilies-enflamo-original-imag9bg9humexnp9.jpeg?q=70",
        name : "Designer Cases",
        price : 149,
        brand : "New Designs"
    },
    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/l1nwnm80/selfie-stick/e/t/c/700-xt-02-500-nafa-original-imagd6jtfqwhtxgf.jpeg?q=70",
        name : "Camera Accessories",
        price : 284,
        brand : "KODAK"
    },
    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",
        name : "Mirrorless Camera",
        price : 43995,
        brand : "Sony"
    },
    {
        imgurl : "https://rukminim1.flixcart.com/image/200/200/camera/y/x/b/sony-cyber-shot-dsc-w800-point-shoot-original-imadvgz7tgqw8gw8.jpeg?q=70",
        name : "Point & Shoot",
        price : 50990,
        brand : "Sony"
    }
    ]
    let renderProduct = "";
    let cardProductContainer = document.getElementById("card-product-container")
    
    
    for (let i = 0; i < ElectronicProduct.length; i++) {
        // const element = array[index];
        console.log(ElectronicProduct[0].name);
        renderProduct += `
        <div class="card-product">
        <div class="productImageContainer">
        <img src ="${ElectronicProduct[i].imgurl}">
    
        </div>
           <h3 class="card-product-name">${ElectronicProduct[i].name}</h3>
           <p class="card-product-price">From  ${ElectronicProduct[i].price}</p>
           <p class="card-product-desc">${ElectronicProduct[i].brand}</p>
        </div>
      `
    }
    cardProductContainer.innerHTML =  renderProduct;
    console.log(renderProduct);
    
    
    let cardBtnRightEl = document.getElementById("card-btn-right")
    let cardBtnLeftEl = document.getElementById("card-btn-left")
    cardBtnLeftEl.style.display="none"
    
    cardBtnRightEl.addEventListener("click",function(){
        cardProductContainer.style.transform = "translateX(-30%)"
        cardBtnRightEl.style.display = "none"
        cardBtnLeftEl.style.display="block"
    })
    
    cardBtnLeftEl.addEventListener("click",function(){
        cardProductContainer.style.transform = "translateX(0%)"
        cardBtnRightEl.style.display = "block"
        cardBtnLeftEl.style.display="none"
    
    } )
    