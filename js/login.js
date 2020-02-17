import * as Footer from './footer.js';
import * as Header from './nav.js';
window.onload = () => {
    // Header.initNav();
    initRegister();
    initPreFooter();
    Footer.init();
    // setInterval(inputWatcher, 100);
    // inputWatcher();
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

    const mail = createInputField({ label: 'E-Mail-Adresse', inputType: 'text', infoName: 'emailadress', errorparagrapId: 'mailerror' });
    form.appendChild(mail.label);
    form.appendChild(mail.input);
    form.appendChild(mail.cancelInputButton)
    form.appendChild(mail.errorParagraph);

    const preName = createInputField({ label: 'Vorname', inputType: 'text', infoName: 'vorname', errorparagrapId: 'preNameerror' });
    form.appendChild(preName.label);
    form.appendChild(preName.input)
    form.appendChild(preName.cancelInputButton);
    form.appendChild(preName.errorParagraph);

    const name = createInputField({ label: 'Nachname', inputType: 'text', infoName: 'nachname', errorparagrapId: 'nameerror' })
    form.appendChild(name.label)
    form.appendChild(name.input);
    form.appendChild(name.cancelInputButton);
    form.appendChild(name.errorParagraph);

    const password = createInputField({ label: 'Passwort', inputType: 'password', infoName: 'password', errorparagrapId: 'passworderror' });
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
    input.oninput = function () { inputWatcher(input),inputVerifier(input) };
    input.onblur = function () { inputVerifier(input) };
    const cancelInputButton = document.createElement('div');
    cancelInputButton.addEventListener('click', function () { clearInput(input) });
    cancelInputButton.className = 'input-cancel';
    cancelInputButton.setAttribute('state','inactive');
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
        inputField.nextElementSibling.setAttribute('state','active')
    }
    if (inputField.value == '' && inputField.getAttribute('hasContent') === 'true') {
        inputField.setAttribute('hasContent', 'false');
        inputField.nextElementSibling.childNodes[0].setAttribute('state', 'inactive')
        inputField.nextElementSibling.setAttribute('state','inactive')
    }
}

function inputVerifier(inputField) {
    let inputFieldVerification;
    if (inputField.name.includes('mail')) {
        verifyMailadressInput(inputField) ? acceptInputThrough({ field: inputField, errorparagraph: getErrorParagraph('mailerror') }) : declineInputThrough({ field: inputField, errorparagraph: getErrorParagraph('mailerror') });
        // console.log(inputFieldVerification);
    } else if (!inputField.name.includes('password')) {
    } else {
        console.log(inputField.value)
    }

}
function getErrorParagraph(id) {
    return document.getElementById(id);
}

function acceptInputThrough(inputfield) {
    console.log('Accepting input through ->')
    inputfield.field.classList = '';
    inputfield.errorparagraph.classList = 'ghost';
    console.log(inputfield)
}

function declineInputThrough(errorObject) {
    console.log("Declining input through -> ")
    getInputError(errorObject);
}

function verifyPasswordInput(inputField) {

}
function verifyMailadressInput(inputField) {
    const regex = new RegExp(/.[1]*@.*.../);
    // console.log(regex.test(inputField.value))
    return regex.test(inputField.value);
}
function verifyNameInput(inputField) {

}

function getInputError(errorObject) {
    console.log(errorObject)
    console.log(errorObject.field.name)
    // if (errorObject.result === false) {
    switch (errorObject.field.name) {
        case 'emailadress':
            errorObject.field.classList = 'error';
            errorObject.errorparagraph.classList = 'visible';
            if(errorObject.field.value!=0){
                errorObject.errorparagraph.innerHTML = 'Bitte gib eine gültige E-Mail-Adresse an.'
            }else{
                errorObject.errorparagraph.innerHTML = 'Bitte gib deine E-Mail-Adresse an.'
            }
            break;
        case 'name':
            break;
        case 'password':
            break;
    }
    // }
}