/*INTEGRAÇÃO DA API*/



/*VALIDAÇÃO DE FORMULARIOS*/
const formulario = document.getElementById('formularios');
const inputs = document.querySelectorAll('#formularios input');

const expreções = {
	nome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    text: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo.
}

const field = {
    nome: false,
    email: false,
    text: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nome":
            if (expreções.nome.test(e.target.value)){
                field[nome] = true;
            } else {
                /*function displayError() {

                    let error = document.createElement('p');
                    error.textContent = 'Não pode estar vazio e deve conter apenas letras, espaços e acentos';
                    error.style.color = 'red';
                    nome.appendChild(error);
                    }*/
            console.log('introducir un texto de erro cor vermelho');
            field[nome] = false;
            }
        break;

        case "email":
            if (expreções.email.test(e.target.value)){
                field[email] = true;
            }else {
                console.log('introducir un texto de erro cor vermelho');
                field[email] = false;
            }
        break;

        case "text":
            if (expreções.text.test(e.target.value)){
                field[text] = true;
            }else {
                console.log('introducir un texto de erro cor vermelho');
                field[test] = false;
            }
        break;
    }
}


    


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (field.nome && field.email && field.text){
        formulario.reset();
    }
});