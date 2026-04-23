function renderCart(){
let box = document.getElementById("cartItems");
let total = 0;

box.innerHTML = "";

cart.forEach((c,i)=>{
total += c.price;

box.innerHTML += `
<div style="display:flex;justify-content:space-between;margin:10px 0;">
  <span>${c.name}</span>
  <span>$${c.price}</span>
</div>
`;
});

document.getElementById("totalPrice").innerText = "Total: $" + total;
}