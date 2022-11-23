const api = "https://api.thecatapi.com/v1/breeds";
fetch(api) 
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i <= 67; i++) {
      let img = document.createElement("img");
      img.src = data[i].image.url;
      img.classList.add("item");
      img.innerHTML.add = data[i].name;
      let div = document.getElementById("container");
      div.classList.add("container");
      div.appendChild(img);
    }
  });


