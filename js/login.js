import * as Footer from './footer.js';
import * as Nav from './nav.js';

window.onload = () => {
    Nav.initNav();
    initRegister();
    initPreFooter();
    Footer.init();
}
function initRegister() {
    const container = document.createElement('div');
    container.id = 'container';
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
    // form.appendChild(mail.label);
    // form.appendChild(mail.input);
    // form.appendChild(mail.cancelInputButton)
    // form.appendChild(mail.errorParagraph);
    form.appendChild(mail);

    const preName = createInputField({ label: 'Vorname', inputType: 'text', infoName: 'vorname', errorparagrapId: 'preNameError' });
    // form.appendChild(preName.label);
    // form.appendChild(preName.input)
    // form.appendChild(preName.cancelInputButton);
    // form.appendChild(preName.errorParagraph);
    form.appendChild(preName);
    
    const name = createInputField({ label: 'Nachname', inputType: 'text', infoName: 'nachname', errorparagrapId: 'nameError' })
    // form.appendChild(name.label)
    // form.appendChild(name.input);
    // form.appendChild(name.cancelInputButton);
    // form.appendChild(name.errorParagraph);
    form.appendChild(name);
    
    const password = createInputField({ label: 'Passwort', inputType: 'password', infoName: 'password', errorparagrapId: 'passwordError' });
    // form.appendChild(password.label);
    // form.appendChild(password.input);
    // form.appendChild(password.cancelInputButton)
    // form.appendChild(password.errorParagraph);
    form.appendChild(password);

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
    const groupingDiv = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const cancelInputButton = document.createElement('div');
    const span = document.createElement('span');
    const errorParagraph = document.createElement('p');

    groupingDiv.id = parameter.infoName;
    label.innerHTML = parameter.label;
    // input.setAttribute('hasContent', 'false');
    input.type = parameter.inputType;
    input.name = parameter.infoName;
    // input.id = parameter.infoName;
    cancelInputButton.className = 'input-cancel';
    // cancelInputButton.setAttribute('state', 'inactive');
    // span.setAttribute('state', 'inactive');
    // span.setAttribute('type', parameter.inputType);
    // span.classList = 'invisible'
    errorParagraph.id = parameter.errorparagrapId;

    cancelInputButton.appendChild(span);

    groupingDiv.appendChild(label)
    groupingDiv.appendChild(input)
    groupingDiv.appendChild(cancelInputButton)
    groupingDiv.appendChild(errorParagraph)



    if (parameter.inputType == 'password') {
        // span.id='passwordChanger'
        // span.classList='invisible'
        // input.onclick = function() {
        //     input.setAttribute('state','active');
        // }
    } else {
        input.onfocus = function(){
            // input.parentElement.classList.add('active')
        }
        input.onclick = function () {
            // span.classList.add('active');
            
            // document.getElementById('password').setAttribute('state','inactive');
            // input.setAttribute('state', 'active');
            // span.setAttribute('isActive', 'true');
        }
    }
    input.oninput = function () {
        inputWatcher(input);
    }
    input.onblur = function () {
        // span.classList.replace('active','inactive')
        inputVerifier(input)
        input.oninput = function(){
            inputVerifier(input);
        }
        if (parameter.inputType != 'password') {
            // input.setAttribute('state', 'inactive')
            // span.setAttribute('isActive', 'false');

        }
    };

    if (parameter.inputType === 'password') {
        span.addEventListener('click', function () {
            input.type == 'password' ? input.type = 'text' : input.type = 'password';
        });
    } else {
        cancelInputButton.addEventListener('click', function () { clearInput(input) });
        span.addEventListener('click', function () { clearInput(input) });

    }
    // setupHandler(groupingDiv);
    // return {
        // label, input, cancelInputButton, errorParagraph
        // };
       return groupingDiv
}
// function setupHandler(elements){
//     elements.
// }
function getCaptcha() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key';

    const captchaContainer = document.createElement('div');
    captchaContainer.classList = 'g-recaptcha';
    captchaContainer.setAttribute('data-sitekey', '172.0.0.1:5500');

    return {
        script, captchaContainer
    }
}
function initPreFooter() {
    const outerElement = document.createElement('div');
    const paragraph = document.createElement('p');
    outerElement.classList = 'preFooter'
    paragraph.innerHTML = 'Wir helfen digitalen Pionieren, glücklich zu arbeiten und zu leben.'
    outerElement.appendChild(paragraph);
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
function verifyPassword(fieldObject) {
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
    const regex = new RegExp(/.[1]*@.*.\.[a-z]/);
    return regex.test(inputField.value);
}
function verifyNameInput(inputObject) {
    console.log("verifyer")
    return inputObject.field.value.length >= 3;
}
function createInputError(errorObject) {
    // console.log(errorObject)
    // console.log(errorObject.field.name)
    var errorMessage;
    if(!errorObject.field.classList.value.includes('error')){
        errorObject.field.classList += ' error';
    }
    errorObject.errorparagraph.classList = 'visible';
    switch (errorObject.field.name) {
        case 'emailadress':
            errorObject.field.value.length !== 0 ? errorMessage =  'Bitte gib eine gültige E-Mail-Adresse an.': errorMessage = 'Bitte gib deine E-Mail-Adresse an.'
            break;
        case 'vorname':
            console.log("CreateInputError -> name")
            errorObject.field.value.length == 0 ? errorMessage = 'Bitte gib deinen Vornamen an.' : errorMessage = 'Der Vorname muss mindestens 3 Zeichen lang sein.'
            break;
        case 'nachname':
            console.log("nachname");
            errorObject.field.value.length == 0 ? errorMessage = 'Bitte gib deinen Nachnamen an.' : errorMessage = 'Der Nachname muss midnestens 3 Zeichen lang sein.'
            break;
        case 'password':
            errorObject.field.value.length == 0 ? errorMessage = 'Bitte gib ein Passwort.' : errorMessage = 'Bitte gib mindestens 8 Zeichen an.'
            break;
    }
    errorObject.errorparagraph.innerHTML = errorMessage;
}