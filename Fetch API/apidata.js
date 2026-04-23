fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then((apidata)=>apidata.forEach((display)=>{
    document.getElementById('diplay').innerHTML+=`
    <div id="display" class="rol-4 g-4"></div>
<div>
    <img src="${item.image}" alt="">
    <div class="card-body d-flex flex-column">
        <h5>${item.title.substring(0,20)}</h5>...
        <p class="card-text small">${item.description.substring(0,20)}</p>....
        <a href="#" class="btn">${item.price}</a>

    </div>
</div>
</div>`
.catch((error)=>console.log(error))
}))