const fields = document.querySelectorAll("[required]")

for( field of fields) {
    field.addEventListener("invalid", event => {
        console.log("campo inválido");
    })
}

document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar o formulário");
    event.preventDefault()
} )

