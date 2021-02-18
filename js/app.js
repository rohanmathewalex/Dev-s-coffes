const container = document.querySelector(".container");
const coffees = [
    { name:"Perspiciatis", image:"/images/coffe1.jpg" },
    { name:"Voluptatem", image:"/images/coffe2.jpg" },
    { name:"Explicabo", image:"/images/coffe3.jpg" },
    { name:"Rchitecto", image:"/images/coffe4.jpg" },
    { name:"Beatae", image:"/images/coffe5.jpg" },
    { name:"Vitae", image:"/images/coofe6.jpg" },
    { name:"Inventore", image:"/images/coffe7.jpg" },
    { name:"Veritatis", image:"/images/coffe8.jpg" },
    { name:"Explicabo", image:"/images/coffe3.jpg" },
    { name:"Accusantium", image:"/images/coffe9.jpg" }
];
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
    