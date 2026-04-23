fetch('https://thoenthonny.github.io/Userapi/data.json?fbclid=IwY2xjawRUQsNleHRuA2FlbQIxMABicmlkETFCN2ZXYWJsekJtb0RBSW5ic3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqnPvHD1H7ny8xkXobKxY_FmHOklP3CkycX6vMvmuT0xwIBd_OhfyRJrn2F2_aem_lenfW7STlM2lIvVxdceJvA')
.then(res=>res.json())
.then((apidata)=>apidata.forEach((item)=>{
    document.getElementById("display").innerHTML += `
        <img src="${item.profile}" >
        <div class="card-body">
            <h2>${item.name}</h2>
            <p class="info">Price: $${item.gender}</p>
            <p class="info">Category: ${item.address}</p>
            <span class="badge">Product ID: ${item.id}</span>
        </div>
    `;
    
}))
.catch((err) => console.log(err));