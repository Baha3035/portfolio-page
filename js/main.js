let btn = document.getElementById('click')
let counter = document.getElementById('counter')
btn.addEventListener('click', () => {
    let countInt = +counter.textContent
    counter.textContent = countInt+1
})


function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
  }
  
function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}
  

function loadData() {  
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        console.log(data); 
        document.getElementById("data").innerHTML = data.message;
        document.getElementById("doggy").src = data.message;
    });
}


let btn_img = document.querySelector('.btn_img')
function load() {
    let imgWidth = window.innerWidth
    if (imgWidth > 992) {
        imgWidth = 850
    }
    fetch(`https://random.imagecdn.app/${imgWidth - 50}/250`)
    .then(data => {
        console.log(data.url);
        let img = document.querySelector('img')
        img.setAttribute('src', data.url)
    })
}

btn_img.addEventListener('click', () => {
    load()
})

load()
