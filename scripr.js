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

    labelName.setAttribute('for', 'fullName');
    labelName.innerText = 'Введиет ФИО: ';
    labelName.style.display = 'block';
    nameInput.type = 'text';
    nameInput.name = 'fullName';
    nameInput.id = 'fullName';
    nameInput.placeholder = 'Введите ФИО';
    // nameInput.required = true;
    // nameInput.minLength = 3;

    labelPhone.setAttribute('for', 'phone');
    labelPhone.innerText = 'Введите телефон: ';
    labelPhone.style.display = 'block';
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneInput.id = 'phone';
    // phoneInput.pattern = '+[0-9]{3}([0-9]{2}) [0-9]{3}-[0-9]{2}-[0-9]{2}';
    // phoneInput.required = true;
    // phoneInput.minLength = 3;
    // phoneInput.maxLength = 18;
    phoneInput.placeholder = '+375(29) 111-11-11';

    labelEmail.setAttribute('for', 'email');
    labelEmail.innerText = 'Введите E-mail: ';
    labelEmail.style.display = 'block';
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    // emailInput.pattern = '/[a-zA-Z]+@[a-zA-Z]{2,5}+\.[a-zA-Z]{2,4}/$';
    emailInput.pattern = '/[a-zA-Z0-9._%+-]{3,}+@[a-zA-Z0-9.-]{3,}+\.[a-zA-Z]{2,4}/';
    emailInput.placeholder = 'abc@abc.abc';

    labelBirth.setAttribute('for', 'bdate');
    labelBirth.innerText = 'Дата рожедения: ';
    labelBirth.style.display = 'block';
    birthInput.type = 'date';
    birthInput.name = 'bdate';
    birthInput.id = 'bdate';

    labelPassword.setAttribute('for', 'password');
    labelPassword.innerText = 'Ваш пароль: ';
    labelPassword.style.display = 'block';
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Password';
    // passwordInput.required = true;
    // passwordInput.minLength = 8;

    btn.type = 'submit';
    btn.innerText = 'Отправить'


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

    root.appendChild(form)

    const regexpPhone = /\+(\d){3}\((\d){2}\) (\d){3}\-(\d){2}\-(\d){2}/;

    form.addEventListener('submit', event => {
        event.preventDefault();

        if (nameInput.value.trim().length < 3) {
            nameError.innerText = 'Имя слишком короткое';
        } else {
            nameError.innerText = '';
        }

        if (phoneInput.value.trim().length < 3) {
            phoneError.innerText = 'Телефон не может быть короче 3-х символов';
        } else if (phoneInput.value.trim().length > 18) {
            phoneError.innerText = 'Телефон не может быть длинее 18 символов';
        } else if (!phoneInput.value.match(regexpPhone)) {
            // !regexpPhone.test(phoneInput.value)
            console.log(phoneInput.value);
            phoneError.innerText = 'Телефон введен не верно';
        } else {
            console.log('Все ок!');
            phoneError.innerHTML = '';
        }

        // if (!emailInput.pattern)
        console.log(emailInput);

    })
}

createForm();