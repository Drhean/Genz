const products = [
  {
    id: 1,
    name: "Pizza",
    desc: "Best Italian food",
    price: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
  },
  {
    id: 2,
    name: "Burger",
    desc: "Juicy grilled burger",
    price: 8,
    image: "https://www.seriouseats.com/thmb/pUE9Dw4RjWKEG4JED7whaHoIzNg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20250523-SEA-ThickandJuicyCheeseburgers-LorenaMasso-HERO-68563a45a4184a0e82c5a8b9f68a719d.jpg"
  },
  {
    id: 3,
    name: "Pasta",
    desc: "Creamy pasta dish",
    price: 12,
    image: "https://images.aws.nestle.recipes/resized/0a0717810b73a1672a029c29788e557b_creamy_alfredo_pasta_long_left_1200_628.jpg"
  },
  {
    id: 4,
    name: "Sushi",
    desc: "Fresh sushi platter",
    price: 15,
    image: "https://wami-japan.com/wp-content/uploads/2023/04/nigiri-maki-sushi.jpg"
  },
  {
    id: 5,
    name: "Salad",
    desc: "Healthy green salad",
    price: 7,
    image: "https://www.eatingwell.com/thmb/S2NGMEcgm11dtdBJ6Hwprwq-nVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eat-the-rainbow-chopped-salad-with-basil-mozzarella-beauty-185-278133-4000x2700-56879ac756cd46ea97944768847b7ea5.jpg"
  }
];
let show =``;
products.forEach((prd)=>{
    show +=`
     <div class="card h-auto p-0 position-relative">
        <img  style="height: 280px;" class="w-100 object-fit-cover rounded-top-2" src="${prd.image}" alt="">
        <div class="mt-2 px-3 pb-3">
            <h3 class="mt-3">${prd.name}</h3>
            <p class="fs-5 text-secondary">${prd.desc}</p>
            <button style="background-color: orange;" class="w-100 btn py-2 fs-5 fw-medium text-white">Buy Now</button>
            <span class="py-1 rounded-2 position-absolute px-4 fs-5 fw-medium text-white">${prd.price}</span>
        </div>
    </div>
    `;
})
document.getElementById("show-prd").innerHTML = show;
