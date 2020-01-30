import * as Footer from './footer.js';
// import * as Header from './header.js';

window.onload = () => {
    // Headers.init();
    initRegister();
    initPreFooter();
    Footer.init();
    // setInterval(inputWatcher, 100);
    // inputWatcher();
}

const initRegister = () => {
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

    const mail = createInputField({ label: 'E-Mail-Adresse', inputType: 'text', infoName: 'emailadress' });
    form.appendChild(mail.label);
    form.appendChild(mail.input);
    form.appendChild(mail.cancelInputButton)

    const preName = createInputField({ label: 'Vorname', inputType: 'text', infoName: 'vorname' });
    form.appendChild(preName.label);
    form.appendChild(preName.input)
    form.appendChild(preName.cancelInputButton);

    const name = createInputField({ label: 'Nachname', inputType: 'text', infoName: 'nachname' })
    form.appendChild(name.label)
    form.appendChild(name.input);
    form.appendChild(name.cancelInputButton);

    const password = createInputField({ label: 'Passwort', inputType: 'password', infoName: 'password' });
    form.appendChild(password.label);
    form.appendChild(password.input);
    form.appendChild(password.cancelInputButton)

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

const createInputField = (parameter) => {
    const label = document.createElement('label');
    label.innerHTML = parameter.label;
    const input = document.createElement('input');
    input.setAttribute('hasContent', 'false');
    input.type = parameter.inputType;
    input.name = parameter.infoName;
    // input.addEventListener('input',inputWatcher(event.target));
    input.oninput = function(){inputWatcher(input)};
    const cancelInputButton = document.createElement('div');
    cancelInputButton.addEventListener('click',function(){clearInput(input)});
    cancelInputButton.className = 'input-cancel';
    const svg = document.createElement('object');
    svg.setAttribute('state', 'inactive');
    svg.data = './foto/svg/cross.svg';
    cancelInputButton.appendChild(svg);
    return {
        label, input, cancelInputButton
    };
}

const getCaptcha = () => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key';
    const captchaContainer = document.createElement('div');
    captchaContainer.classList = 'g-recaptcha';
    captchaContainer.setAttribute('data-sitekey', 'localhost');
    return {
        script, captchaContainer
    }
}

const initPreFooter = () => {
    const outerElement = document.createElement('div');
    outerElement.classList = 'preFooter'
    outerElement.innerHTML = 'Wir helfen digitalen Pionieren, glücklich zu arbeiten und zu leben.'
    document.body.appendChild(outerElement);
}
const clearInput = (inputField) =>{
    alert("bitte coden!")
}
const inputWatcher = (inputField) => {
        if (inputField.value != '' && inputField.getAttribute('hasContent') === 'false') {
            inputField.setAttribute('hasContent','true');
            inputField.nextElementSibling.childNodes[0].setAttribute('state', 'active')
        }
        if (inputField.value == '' && inputField.getAttribute('hasContent') === 'true') {
            inputField.setAttribute('hasContent','false');
            inputField.nextElementSibling.childNodes[0].setAttribute('state', 'inactive')
        }
}