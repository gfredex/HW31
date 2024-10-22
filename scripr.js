function createForm() {
    const root = document.getElementById('root');
    const form = document.createElement('form');
    const nameInput = document.createElement('input');
    const labelName = document.createElement('label');
    const nameError = document.createElement('span');
    const phoneInput = document.createElement('input');
    const labelPhone = document.createElement('label');
    const phoneError = document.createElement('span');
    const emailInput = document.createElement('input');
    const labelEmail = document.createElement('label');
    const emailError = document.createElement('span');
    const birthInput = document.createElement('input');
    const labelBirth = document.createElement('label');
    const birthError = document.createElement('span');
    const passwordInput = document.createElement('input');
    const labelPassword = document.createElement('label')
    const passwordError = document.createElement('span');
    const btn = document.createElement('button');

    form.classList.add('my-form');
    btn.style.cssText = `
    padding: 10px 20px;
    width: fit-content;
    margin: 0 auto;
    `;

    labelName.setAttribute('for', 'fullName');
    labelName.innerText = 'Введиет ФИО: ';
    nameInput.type = 'text';
    nameInput.name = 'fullName';
    nameInput.id = 'fullName';
    nameInput.placeholder = 'Иванов Иван';
    // nameInput.required = true;
    // nameInput.minLength = 3;

    labelPhone.setAttribute('for', 'phone');
    labelPhone.innerText = 'Введите телефон: ';
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneInput.id = 'phone';
    phoneInput.placeholder = '+375(29) 111-11-11';

    labelEmail.setAttribute('for', 'email');
    labelEmail.innerText = 'Введите E-mail: ';
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'abc@abc.abc';

    labelBirth.setAttribute('for', 'bdate');
    labelBirth.innerText = 'Дата рожедения: ';
    birthInput.type = 'date';
    birthInput.name = 'bdate';
    birthInput.id = 'bdate';

    labelPassword.setAttribute('for', 'password');
    labelPassword.innerText = 'Ваш пароль: ';
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Пароль';

    btn.type = 'submit';
    btn.innerText = 'Отправить';

    labelName.appendChild(nameInput);
    labelName.appendChild(nameError);
    form.appendChild(labelName);

    labelPhone.appendChild(phoneInput);
    labelPhone.appendChild(phoneError);
    form.appendChild(labelPhone);

    labelEmail.appendChild(emailInput);
    labelEmail.appendChild(emailError);
    form.appendChild(labelEmail);

    labelBirth.appendChild(birthInput);
    labelBirth.appendChild(birthError);
    form.appendChild(labelBirth);

    labelPassword.appendChild(passwordInput);
    labelPassword.appendChild(passwordError);
    form.appendChild(labelPassword);

    form.appendChild(btn);

    root.appendChild(form);

    const regexpPhone = /\+(\d){3}\((\d){2}\) (\d){3}\-(\d){2}\-(\d){2}/;
    const regexEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4})/;
    const regexPassword = /(?=.*[0-9])(?=.*[!@#$%^&*.+-])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*.+-]{8,}/g;


    form.addEventListener('submit', event => {
        let readyIndex = 0;
        event.preventDefault();

        if (nameInput.value.trim().length < 3) {
            nameError.style.color = '#ff3f3f';
            nameError.innerText = 'Имя слишком короткое';
        } else {
            nameError.innerHTML = '&#10004;';
            nameError.style.color = 'green';
            readyIndex++;
        }

        if (phoneInput.value.trim().length < 3) {
            phoneError.style.color = '#ff3f3f';
            phoneError.innerText = 'Телефон не может быть короче 3-х символов';
        } else if (phoneInput.value.trim().length > 18) {
            phoneError.style.color = '#ff3f3f';
            phoneError.innerText = 'Телефон не может быть длинее 18 символов';
        } else if (!phoneInput.value.trim().match(regexpPhone)) {
            phoneError.style.color = '#ff3f3f';
            phoneError.innerText = 'Телефон введен не верно';
        } else {
            phoneError.innerHTML = '&#10004;';
            phoneError.style.color = 'green';
            readyIndex++;
        }

        if (!emailInput.value.trim().match(regexEmail)) {
            emailError.style.color = '#ff3f3f';
            emailError.innerText = 'Не верный формат электронной почты'
        } else {
            emailError.innerHTML = '&#10004;';
            emailError.style.color = 'green';
            readyIndex++;
        }

        if (birthInput.value > "01.01.1930") {
            birthError.innerHTML = '&#10004;';
            birthError.style.color = 'green';
            readyIndex++;
        } else {
            birthError.style.color = '#ff3f3f';
            birthError.textContent = 'Дата не указана';
        }

        if (passwordInput.value.trim().length < 8) {
            passwordError.style.color = '#ff3f3f';
            passwordError.textContent = 'Нужно минимум 8 символов';
        } else if (!passwordInput.value.trim().match(regexPassword)) {
            passwordError.style.color = '#ff3f3f';
            passwordError.textContent = 'Не верный формат пароля';
        } else {
            passwordError.innerHTML = '&#10004;';
            passwordError.style.color = 'green';
            readyIndex++;
        }
        if (readyIndex === 5) {
            console.log({
                name: nameInput.value.trim(),
                phone: phoneInput.value.trim(),
                email: emailInput.value.trim(),
                birthday: birthInput.value,
                password: 'OK'
            });
        } else {
            console.log('Не все поля заполненны корректно');
        }
    });
}

createForm();

class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
        button {
            margin: 5px;
            padding: 10px 20px;
            border-radius: 7px;
            border: none;
            background-color: #333;
            color: white;
            cursor: pointer;
            font-size: 18px;
            }
        </style>
        <button></button>
            `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const btn = this.shadowRoot.querySelector('button');
        const text = this.getAttribute('text') || 'Кнопка';
        btn.textContent = text;
        const bgColor = this.getAttribute('background');
        btn.style.backgroundColor = bgColor;
        const color = this.getAttribute('color');
        btn.style.color = color;
    }
}
customElements.define('my-button', MyButton);

// --------------Task3------------------------------------

const form3 = document.getElementById('formThird');
const userName3 = document.getElementById('userName');
const userPassword = document.getElementById('userPassword');
const msgUser = document.getElementById('msg-user');
const msgPassword = document.getElementById('msg-password');
const regexPassword3 = /(?=.*[0-9])(?=.*[!@#$%^&*.+-])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*.+-]{6,}/g;

form3.addEventListener('submit', event => {
    event.preventDefault();
    let indexSend = 0;

    if (userName3.value.trim().length < 3) {
        userName3.style.borderColor = '#ff3f3f';
        msgUser.style.color = '#ff3f3f';
        msgUser.textContent = 'Нужно имя длинее 3х символов';
    } else {
        msgUser.style.color = 'green';
        msgUser.innerHTML = '&#10004;';
        userName3.style.borderColor = 'green';
        indexSend++;
    }

    if (userPassword.value.trim().length < 6) {
        userPassword.style.borderColor = '#ff3f3f';
        msgPassword.style.color = '#ff3f3f';
        msgPassword.textContent = 'Нужно минимум 6 символов';
    } else if (!userPassword.value.trim().match(regexPassword3)) {
        msgPassword.style.color = '#ff3f3f';
        msgPassword.textContent = 'Не верный формат пароля';
    } else {
        userPassword.style.borderColor = 'green';
        msgPassword.innerHTML = '&#10004;';
        msgPassword.style.color = 'green';
        indexSend++;
    }

    if (indexSend === 2) {
        console.log('Данные формы отправлены');
    }
})