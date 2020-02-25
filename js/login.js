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
    form.appendChild(mail);
    const preName = createInputField({ label: 'Vorname', inputType: 'text', infoName: 'vorname', errorparagrapId: 'preNameError' });
    form.appendChild(preName);
    const name = createInputField({ label: 'Nachname', inputType: 'text', infoName: 'nachname', errorparagrapId: 'nameError' })
    form.appendChild(name);
    const password = createInputField({ label: 'Passwort', inputType: 'password', infoName: 'password', errorparagrapId: 'passwordError' });
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
    registerButton.setAttribute('isFree','false');
    registerButton.onclick = function (event) {
        formTransmitProcessHandler(event);
    }
    form.appendChild(registerButton);

    container.appendChild(form)
    document.body.appendChild(container);
}
function formTransmitProcessHandler(event) {
   if(
       validateAllInputFields() && 
       grecaptcha.getResponse().length !==0){
       alert("SENDING FORMULAR!")
       //Sende Daten an Server 
   }else{
       event.preventDefault();
   }
}
function validateAllInputFields(){
    const inputFields = Array.from(document.getElementsByTagName('input'));
    var conclusion = true;
    inputFields.forEach(element => {
        var tempConclusion;
        const type = element.name;
        switch (type) {
            case "emailadress":
                verifyMailadressInput(element) ? tempConclusion = true : tempConclusion = false;
                break;
            case "vorname":
            case "nachname":
                verifyNameInput(element) ? tempConclusion = true : tempConclusion = false;
                break;
            case "password":
                verifyPassword(element) ? tempConclusion = true : tempConclusion = false;
                break;
        }
        if(tempConclusion === false){
            conclusion = tempConclusion
        }
    });
    return conclusion
}
function createInputField(probs) {
    const groupingDiv = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const errorParagraph = document.createElement('p');

    groupingDiv.id = probs.infoName;
    label.innerHTML = probs.label;
    input.type = probs.inputType;
    input.name = probs.infoName;
    errorParagraph.id = probs.errorparagrapId;
    span.classList.add('empty')

    groupingDiv.appendChild(label)
    groupingDiv.appendChild(input)
    groupingDiv.appendChild(span)
    groupingDiv.appendChild(errorParagraph)

    groupingDiv.onclick = function () {
        onClickClassHandler(groupingDiv)
    }

    input.onfocus = function () {
        activInputButtonClassHandler(input);
    }
    input.oninput = function () {
        onInputEventClassHandler(input);
    }
    input.onblur = function () {
        onBlurEventHandler(input);
    };

    if (probs.inputType === 'password') {
        const inputElement = span.parentNode.childNodes[1];
        span.addEventListener('click', function () {
            inputElement.type == 'text' ? inputElement.type = 'password' : inputElement.type = 'text';
            span.classList.toggle('clearText')
        })
    } else {
        span.addEventListener('click', function () { clearInput(input) });

    }
    return groupingDiv
}
function onClickClassHandler(div) {
    activeClassRemover()
    div.classList.replace('inactive', 'active');
}
function isCaptchaSolved(){
    const captchaSpan = document.getElementsByTagName('span');
    console.log(captchaSpan);
}

function activeClassRemover() {
    const allDivs = Array.from(document.getElementsByTagName('form')[0].getElementsByTagName('div'));
    allDivs.forEach(div => {
        if (div.classList.contains('active')) {
            div.classList.replace('active', 'inactive');
        }
    });
}
function onInputEventClassHandler(input) {
    inputWatcher(input);
    transmitButtonStateHandler();

}
function transmitButtonStateHandler() {
    const transmitButton = document.getElementsByTagName('button')[0];
    if(validateAllInputFields()){
        transmitButton.setAttribute('isFree','true');
    }else{
        transmitButton.setAttribute('isFree','false');
    }
}
function onBlurEventHandler(input) {
    inputVerifier(input)
    input.oninput = function () {
        inputWatcher(input)
        inputVerifier(input);
    }
}
function activInputButtonClassHandler(input) {
    const switchCondition = input.name;
    input.parentElement.classList.add('active');
    if (switchCondition.includes('password')) {
    } else {
        if (input.value.length > 0) {
            input.nextElementSibling.classList.add('containing')
        } else {
            input.parentElement.classList.replace('containing', 'empty')
            input.nextElementSibling.classList.add('empty');
        }
    }
}
function getCaptcha() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key';

    const captchaContainer = document.createElement('div');
    captchaContainer.classList = 'g-recaptcha';
    captchaContainer.setAttribute('data-sitekey', '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'); //its a test-key

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
function getCorrespondingSpanElement(input) {
    return input.nextElementSibling;
}
function inputWatcher(inputField) {
    if (inputField.value.length > 0) {
        const cross = getCorrespondingSpanElement(inputField);
        cross.classList.add('containing')
        cross.classList.remove('empty');
    } else {
        getCorrespondingSpanElement(inputField).classList.remove('containing')
        getCorrespondingSpanElement(inputField).classList.add('empty')
    }
}
function inputVerifier(inputField) {
    var fieldObject;
    if (inputField.name.includes('mail')) {
        fieldObject = { field: inputField, errorparagraph: getErrorParagraph('mailError') };
        verifyMailadressInput(inputField) ? acceptInputThrough(fieldObject) : declineInputThrough(fieldObject);
    } else if (!inputField.name.includes('password')) {
        if (inputField.name.includes('vor')) {
            fieldObject = { field: inputField, errorparagraph: getErrorParagraph('preNameError') }
            verifyNameInput(inputField) ? acceptInputThrough(fieldObject) : declineInputThrough(fieldObject);
        } else {
            fieldObject = { field: inputField, errorparagraph: getErrorParagraph('nameError') }
            verifyNameInput(inputField) ? acceptInputThrough(fieldObject) : declineInputThrough(fieldObject);
        }
    } else {
        fieldObject = { field: inputField, errorparagraph: getErrorParagraph('passwordError') }
        verifyPassword(inputField) ? acceptInputThrough(fieldObject) : declineInputThrough(fieldObject);
    }
}
function verifyPassword(fieldObject) {
    return fieldObject.value.length >= 8
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
    const value = inputObject.value;
    if (value) {
        return value.length >= 3
    } else {
        return false;
    }
}
function createInputError(errorObject) {
    var errorMessage;
    if (!errorObject.field.classList.value.includes('error')) {
        errorObject.field.classList += ' error';
    }
    errorObject.errorparagraph.classList = 'visible';
    switch (errorObject.field.name) {
        case 'emailadress':
            errorObject.field.value.length !== 0 ? errorMessage = 'Bitte gib eine gültige E-Mail-Adresse an.' : errorMessage = 'Bitte gib deine E-Mail-Adresse an.'
            break;
        case 'vorname':
            errorObject.field.value.length == 0 ? errorMessage = 'Bitte gib deinen Vornamen an.' : errorMessage = 'Der Vorname muss mindestens 3 Zeichen lang sein.'
            break;
        case 'nachname':
            errorObject.field.value.length == 0 ? errorMessage = 'Bitte gib deinen Nachnamen an.' : errorMessage = 'Der Nachname muss mindestens 3 Zeichen lang sein.'
            break;
        case 'password':
            errorObject.field.value.length == 0 ? errorMessage = 'Bitte gib ein Passwort.' : errorMessage = 'Bitte gib mindestens 8 Zeichen an.'
            break;
    }
    errorObject.errorparagraph.innerHTML = errorMessage;
}