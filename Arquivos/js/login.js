const loginForm = document.querySelector('.login_form');
const passVisbilityButton = document.querySelector('.pass_visi_button');

const passInputField = document.querySelector('.passInput');
const emailInputField = document.querySelector('.emailInput');

const inputFields = document.querySelectorAll('.formInput');


// Esconde e mostra a senha quando o botão de visibilidade de senha for clicado
passVisbilityButton.addEventListener('click', () => {
    //Show
    if (passVisbilityButton.classList.contains('hidden')) {

        passVisbilityButton.classList.remove('hidden');
        passVisbilityButton.src = '../img/show_icon.svg';
        passInputField.type = 'text';
        //Hide
    } else {

        passVisbilityButton.classList.add('hidden');
        passVisbilityButton.src = '../img/hide_icon.svg';
        passInputField.type = 'password';
    }
});



inputFields.forEach(
    field => {
        field.addEventListener('input', ValidarInputs);
    }
);

function ValidarInputs() {
    const formButton = document.querySelector('.login_submit')
    const emailFilled = emailInputField.value.trim();
    const passFilled = passInputField.value.trim();

    formButton.disabled = !(emailFilled && passFilled)
}



// Intercepta o envio do formulário
loginForm.addEventListener('submit', async (event) => {
    //Previne o recarregamento da página
    event.preventDefault();

    const formData = {
        nome: emailInputField.value,
        senha: passInputField.value
    }

    try {
        console.log('ok')
        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Avisa a API que estamos enviando JSON
            },
            body: JSON.stringify(formData) // Transforma o objeto JavaScript em texto JSON
        });

        const returnData = await res.json();

        if (res.ok) {
            // Sucesso (Status 200)
            console.log(`Bem-vindo, ${returnData.nome}! (E-mail: ${returnData.email})`);


            // Aqui você poderia salvar o ID no localStorage ou redirecionar o usuário:
            // localStorage.setItem('usuarioId', dadosRetornados.id);
            // window.location.href = '/dashboard.html';

            // Erro (Status 400 ou 401)
        } else {
            console.log(returnData.message);
        }
    }

    catch (error) {
        // Erro de Rede ou Servidor Caído (Status 500)
        console.error(error);
    }
});

console.log('Login JS Loaded');