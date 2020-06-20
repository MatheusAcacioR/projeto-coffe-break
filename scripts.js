function onOff(){
        document
            .querySelector("#modal")
            .classList
            .toggle("hide")

        document
            .querySelector("#modal")
            .classList
            .toggle("addScroll")
}

// Colocar ano vigente no rodapé da pagina

var date = new Date()
year = date.getFullYear()

footer = document.getElementById("footer")
footer.innerHTML = `Copyright &copy; Coffe Break ${year} - by Coffe Break`

// Validação da form

const fields = document.querySelectorAll("[required]")

// console.log(fields)

function customValidation(event) {
    const field = event.target

    // trocar mensagem do required
    field.setCustomValidity("!!!ESTE CAMPO É OBRIGATÓRIO!!!")
}

for (field of fields) {
    field.addEventListener("invalid", customValidation)
}


document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar o formulário")
})

// Rotação das imagens da receíta

let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider-creme img")
    imagesMousse = document.querySelectorAll("#slider-mousse img")
    imagesBrownie = document.querySelectorAll("#slider-brownie img")
    // imagesBolo = document.querySelectorAll("#slider-bolo img")
    max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected-creme")
    imagesMousse[currentImageIndex].classList.remove("selected-mousse")
    imagesBrownie[currentImageIndex].classList.remove("selected-brownie")
    // imagesBolo[currentImageIndex].classList.remove("selected-bolo")

    currentImageIndex++

    if(currentImageIndex >= max) {
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("selected-creme")
    imagesMousse[currentImageIndex].classList.add("selected-mousse")
    imagesBrownie[currentImageIndex].classList.add("selected-brownie")
    // imagesBolo[currentImageIndex].classList.add("selected-bolo")
}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)