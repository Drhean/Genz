let product = []
const cartItems = []
//Display products
const Display = (prd) => {
    if (prd.length > 0)
        prd.forEach(item=>{
        document.getElementById('show-product').innerHTML +=`
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100  border-0 product-card">
                <img src="${item.image}"
                    class="card-img-top" alt="..." />

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text text-muted small">
                       ${item.discription}
                    </p>

                    <h6 class="text-primary mb-3">${item.price}</h6>

                    <button class="btn btn-primary mt-auto w-100">
                        <i class="bi bi-cart-plus"></i> Add To Cart
                    </button>
                </div>
            </div>
        </div>` 
    })
    else{
        document.getElementById('show-product').innerHTML = '<h5 class="text-center">No Products Found</h5>'
    }}
    fetch('https://thoenthonny.github.io/data-json-computer/?fbclid=IwY2xjawRe0jFleHRuA2FlbQIxMABicmlkETF5VHVKZlRUVVBsVzltSTNOc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHmbO97BbC3EM1gf8ELczX_a4mlkB9JjSSCrSui-fGOdhwX5yx1VXCGNUaSSj_aem_dJymekoM4X7lrFmLqnORmw')
    .then(res=>res.json())
    .then(pcdata=>{
        product = pcdata
        console.log(product)
        Display(product)
    })
    .catch(err=>console.log(err))
    // search input
    document.getElementById('searchInput').addEventListener('input', function(e){
        let searchValue = e.target.value.toLowerCase()
        console.log(searchValue);
        let Found = product.filter(pro=>{
            return pro.name.toLowerCase().includes(searchValue)
        })
    document.getElementById('show-product').innerHTML = '';
    if(Found.length > 0){
        Display(Found);
        document.getElementById('txt-Found').innerHTML ``;
    }else{
        document.getElementById('txt-Found').innerHTML = `Product Not Fpound`;
    }
})
    


