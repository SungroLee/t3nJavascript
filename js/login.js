import * as Footer from './footer.js';
import * as Nav from './nav.js';


// import * as Header from './header.js';
window.onload = () => {
    // Nav.initNav();
    initRegister();
    initPreFooter();
    Footer.init();
}

function initRegister() {
    const container = document.createElement('div');

    const form = document.createElement('form');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Registriere dich';
    form.appendChild(heading);

    const orLoginParagraph = document.createElement('p');
    orLoginParagraph.innerHTML = 'oder ';
    const href = document.createElement('a');
    href.href = '#';
    href.innerHTML = 'melde';
    orLoginParagraph.appendChild(href);
    orLoginParagraph.innerHTML += ' dich bei t3n an.';
    form.appendChild(orLoginParagraph);

    const mail = createInputField({ label: 'E-Mail-Adresse', inputType: 'text', infoName: 'emailadress', errorparagrapId: 'mailError' });
    form.appendChild(mail.label);
    form.appendChild(mail.input);
    form.appendChild(mail.cancelInputButton)
    form.appendChild(mail.errorParagraph);

    const preName = createInputField({ label: 'Vorname', inputType: 'text', infoName: 'vorname', errorparagrapId: 'preNameError' });
    form.appendChild(preName.label);
    form.appendChild(preName.input)
    form.appendChild(preName.cancelInputButton);
    form.appendChild(preName.errorParagraph);

    const name = createInputField({ label: 'Nachname', inputType: 'text', infoName: 'nachname', errorparagrapId: 'nameError' })
    form.appendChild(name.label)
    form.appendChild(name.input);
    form.appendChild(name.cancelInputButton);
    form.appendChild(name.errorParagraph);

    const password = createInputField({ label: 'Passwort', inputType: 'password', infoName: 'password', errorparagrapId: 'passwordError' });
    form.appendChild(password.label);
    form.appendChild(password.input);
    form.appendChild(password.cancelInputButton)
    form.appendChild(password.errorParagraph);

    const captcha = getCaptcha();
    document.body.appendChild(captcha.script)
    form.appendChild(captcha.captchaContainer);

    const disclaimer = document.createElement('p');
    disclaimer.classList = 'disclaimer';
    disclaimer.innerHTML = 'Indem du dich registrierst, akzeptierst du unsere ';
    const firstHref = document.createElement('a');
    firstHref.innerHTML = 'Datenschutzbestimmungen';
    disclaimer.appendChild(firstHref);
    disclaimer.innerHTML += ' und unsere ';
    const secondHref = document.createElement('a');
    secondHref.innerHTML = 'AGB'
    disclaimer.appendChild(secondHref);
    disclaimer.innerHTML += '.';
    form.appendChild(disclaimer)

    const registerButton = document.createElement('button');
    registerButton.innerHTML = 'Registrieren';

    form.appendChild(registerButton);

    container.appendChild(form)
    document.body.appendChild(container);
}

function createInputField(parameter) {
    const label = document.createElement('label');
    label.innerHTML = parameter.label;

    const input = document.createElement('input');
    input.setAttribute('hasContent', 'false');
    input.type = parameter.inputType;
    input.name = parameter.infoName;
    // input.addEventListener('input',inputWatcher(event.target));
    // input.oninput = function () {  };
    input.onblur = function () {
        inputVerifier(input)
        input.oninput = function () { inputWatcher(input), inputVerifier(input) }
    };

    const cancelInputButton = document.createElement('div');
    cancelInputButton.addEventListener('click', function () { clearInput(input) });
    cancelInputButton.className = 'input-cancel';
    cancelInputButton.setAttribute('state', 'inactive');

    const svg = document.createElement('span');
    svg.addEventListener('click', function () { clearInput(input) });
    svg.setAttribute('state', 'inactive');
    // svg.data = './foto/svg/cross.svg';
    cancelInputButton.appendChild(svg);

    const errorParagraph = document.createElement('p');
    errorParagraph.id = parameter.errorparagrapId;
    console.log(errorParagraph)
    return {
        label, input, cancelInputButton, errorParagraph
    };
}

function getCaptcha() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key';

    const captchaContainer = document.createElement('div');
    captchaContainer.classList = 'g-recaptcha';
    captchaContainer.setAttribute('data-sitekey', 'localhost');

    return {
        script, captchaContainer
    }
}

function initPreFooter() {
    const outerElement = document.createElement('div');
    outerElement.classList = 'preFooter'
    outerElement.innerHTML = 'Wir helfen digitalen Pionieren, glücklich zu arbeiten und zu leben.'
    document.body.appendChild(outerElement);
}
function clearInput(inputField) {
    inputField.innerHTML = '';
    inputField.value = '';
    inputWatcher(inputField);
}
function inputWatcher(inputField) {
    if (inputField.value != '' && inputField.getAttribute('hasContent') === 'false') {
        inputField.setAttribute('hasContent', 'true');
        inputField.nextElementSibling.childNodes[0].setAttribute('state', 'active')
        inputField.nextElementSibling.setAttribute('state', 'active')
    }
    if (inputField.value == '' && inputField.getAttribute('hasContent') === 'true') {
        inputField.setAttribute('hasContent', 'false');
        inputField.nextElementSibling.childNodes[0].setAttribute('state', 'inactive')
        inputField.nextElementSibling.setAttribute('state', 'inactive')
    }
}

function inputVerifier(inputField) {
    console.log(inputField);
    var fieldObject;
    if (inputField.name.includes('mail')) {
        // verifyMailadressInput(inputField) ? acceptInputThrough({ field: inputField, errorparagraph: getErrorParagraph('mailerror') }) : declineInputThrough({ field: inputField, errorparagraph: getErrorParagraph('mailerror') });
        fieldObject = { field: inputField, errorparagraph: getErrorParagraph('mailError') };
        verifyMailadressInput(inputField) ? acceptInputThrough(fieldObject) : declineInputThrough(fieldObject);
    } else if (!inputField.name.includes('password')) {
        if (inputField.name.includes('vor')) {
            console.log("vorname")
            fieldObject = { field: inputField, errorparagraph: getErrorParagraph('preNameError') }
            verifyNameInput(fieldObject) ? acceptInputThrough(fieldObject) : declineInputThrough(fieldObject);
        } else {
            fieldObject = { field: inputField, errorparagraph: getErrorParagraph('nameError') }
            verifyNameInput(fieldObject) ? acceptInputThrough(fieldObject) : declineInputThrough(fieldObject);

        }
    } else {
        fieldObject = { field: inputField, errorparagraph: getErrorParagraph('passwordError') }
        verifyPassword(fieldObject) ? acceptInputThrough(fieldObject) : declineInputThrough(fieldObject);
    }
}
function verifyPassword(fieldObject){
    return fieldObject.field.value.length >= 8
}
function getErrorParagraph(id) {
    return document.getElementById(id);
}

function acceptInputThrough(inputfield) {
    inputfield.field.classList = '';
    inputfield.errorparagraph.classList = 'ghost';
}

function declineInputThrough(errorObject) {
    createInputError(errorObject);
}

function verifyMailadressInput(inputField) {
    const regex = new RegExp(/.[1]*@.*.../);
    // console.log(regex.test(inputField.value))
    return regex.test(inputField.value);
}
function verifyNameInput(inputObject) {
    console.log("verifyer")
    return inputObject.field.value.length >= 3;
}

function createInputError(errorObject) {
    console.log(errorObject)
    console.log(errorObject.field.name)
    var errorMessage;
    errorObject.field.classList = 'error';
    errorObject.errorparagraph.classList = 'visible';
    // if (errorObject.result === false) {
    switch (errorObject.field.name) {
        case 'emailadress':
            errorObject.field.value !== 0 ? errorMessage = 'Bitte gib eine gültige E-Mail-Adresse an.' : errorMessage = 'Bitte gib deine E-Mail-Adresse an.'
            break;
        case 'vorname':
            console.log("CreateInputError -> name")
            errorObject.field.value == 0 ? errorMessage = 'Bitte gib deinen Vornamen an.' : errorMessage = 'Der Vorname muss mindestens 3 Zeichen lang sein.'
            break;
        case 'nachname':
            console.log("nachname");
            errorObject.field.value == 0 ? errorMessage = 'Bitte gib deinen Nachnamen an.' : errorMessage = 'Der Nachname muss midnestens 3 Zeichen lang sein.'
            break;
        case 'password':
            errorObject.field.value == 0 ? errorMessage = 'Bitte gib ein Passwort.' : errorMessage = 'Bitte gib mindestens 8 Zeichen an.'
            break;
    }
    errorObject.errorparagraph.innerHTML = errorMessage;
    // }
}