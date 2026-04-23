fetch('https://yanphayu-eng.github.io/first-json-about-game/index.json?fbclid=IwY2xjawRWeyJleHRuA2FlbQIxMABicmlkETFnWmxZcWFlTjRqZUVmaE40c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgCYCTWVIBCTu2E046y4qJdDmIu-F9aQ3_Zkp2b45MqIRceHjziP87ibroPd_aem_1_FeqWYn5KPJnaH0RzYlZg')
  .then(res => res.json())
  .then(apicard => apicard.forEach(item => {
    document.getElementById("display").innerHTML += `
      <div class="card">
    <img src="${item.image}">
    <div class="overlay">
      <div class="title">${item.name}</div>
      <div class="desc">${item.description}</div>
      <div class="btn">Explore</div>
    </div>
  </div>
    `;
  }))
  .catch(err => console.log(err));