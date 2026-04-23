let foods = [
{name:"Burger",price:5,img:"https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"},
{name:"Pizza",price:8,img:"https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"},
{name:"Noodles",price:6,img:"https://www.justspices.co.uk/media/recipe/Egg-Fried-Noodles_Just-Spices.webp"},
{name:"Chicken",price:7,img:"https://www.errenskitchen.com/wp-content/uploads/2025/02/KFC-Style-Fried-Chicken-1-11b.jpg"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// LOAD FOODS
function loadFoods(data = foods){
let box = document.getElementById("foodList");
box.innerHTML = "";

data.forEach((f,i)=>{
box.innerHTML += `
<div class="card">
<img src="${f.img}">
<h3>${f.name}</h3>
<p>$${f.price}</p>
<button onclick="addToCart(${i})">Add</button>
</div>
`;
});
}

// ADD CART
function addToCart(i){
cart.push(foods[i]);
saveCart();
}

// SAVE
function saveCart(){
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
}

// UPDATE UI
function updateCart(){
document.getElementById("cartCount").innerText = cart.length;
renderCart();
}

// SEARCH
function searchFood(text){
let filtered = foods.filter(f =>
f.name.toLowerCase().includes(text.toLowerCase())
);
loadFoods(filtered);
}

// CART TOGGLE
function toggleCart(){
document.getElementById("cartPanel").classList.toggle("active");
updateCart();
}

// CHECKOUT
function checkout(){
alert("Order placed successfully 🎉");
cart = [];
saveCart();
}

// INIT
loadFoods();
updateCart();