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