// /********************************
//  * Navbar
//  *********************************/
// //////////////// Variable/////////////////
// // Navbar
// const nav = document.createElement("nav"); //navbar
// const navLogoDiv = document.createElement("div"); //nav left div
// const navLoginDiv = document.createElement("div"); //nav right div
// const navLogoFoto = document.createElement("img"); //logo img
// const navText = document.createElement("a"); // Nav Right Text "t3n"
// const navButton = document.createElement("a"); // Login Button in Nav
// // Pioneers Network
// const pioneersDiv = document.createElement("div");
// const pioneersH1 = document.createElement("h1");
// const pioneersH2 = document.createElement("h2");
// const pioneersButton = document.createElement("a");
// // Slider
// const sliderDefaultDiv = document.createElement("div");
// const sliderH2 = document.createElement("h2");
// const sliderDiv = document.createElement("div");
// const slider = document.createElement("div");
// const leftBtn = document.createElement("button");
// const rightBtn = document.createElement("button");
// ///////////////Atribute//////////////////
// navLogoDiv.id = 'logoDiv';
// navLoginDiv.id = 'loginDiv';
// navLogoFoto.id = 'logoFoto';
// navText.id = 'navt3n';
// navButton.id = 'loginButton';
// navLogoFoto.src = "./foto/t3n-logo.png";
// navText.href = '#';
// navButton.href = '#';
// // Pioneers Network
// pioneersDiv.id = 'pioneersDiv';
// pioneersH1.id = 'pioneersH1';
// pioneersButton.id = 'pioneersButton';
// pioneersButton.href = '#';
// // Slder
// sliderDefaultDiv.id = 'sliderDefaultDiv';
// sliderDiv.id = 'sliderDiv';
// slider.id = "slider";
// leftBtn.id = 'leftBtn';
// leftBtn.id = 'rightBtn';

// /////////// CreateTextNode///////////
// // Navbar
// navText.innerText = "t3n.de";
// navButton.innerText = "Login";
// // Pioneers Network
// pioneersH1.innerText = "PIONEERS NETWORK";
// pioneersH2.innerHTML = "Gestalte mit uns eine positive digitale Zukunft";
// pioneersButton.innerHTML = "Jetzt kostenlos anmelden";
// //Slider
// sliderH2.innerHTML = "Finde andere digitale pioniere"

// ////////////// AppendChild /////////////
// document.body.appendChild(nav);
// nav.appendChild(navLogoDiv);
// nav.appendChild(navLoginDiv);
// navLogoDiv.appendChild(navLogoFoto);
// navLoginDiv.appendChild(navText);
// navLoginDiv.appendChild(navButton);
// // Pioneers Network
// document.body.appendChild(pioneersDiv);
// pioneersDiv.appendChild(pioneersH1);
// pioneersDiv.appendChild(pioneersH2);
// pioneersDiv.appendChild(pioneersButton);
// //Slider
// document.body.appendChild(sliderDefaultDiv);
// sliderDefaultDiv.appendChild(sliderH2);
// sliderDefaultDiv.appendChild(sliderDiv);

window.onload = function () {
    this.console.log('Dokument geladen');
    initBecomePionier();
    // initFaq();
    // initFooter();
}

const setElements = (e, i, c) => { // Element, ID, und Class Einsteller.
    const el = document.createElement(e);
    el.id = i;
    el.className = c;
    
    if(i === null || i === "" || i === undefined) {
        el.removeAttribute("id");
    }
    if(c === null || c === "" || c === undefined) {
        el.removeAttribute("class");
    }
    return el;
}


const initNav = () => {

    const nav = setElements("nav");
    const navLogoDiv = setElements("div", "logoDiv");
    const navLoginDiv = setElements("div", "loginDiv");
    const navLogoFoto = setElements("img", "logoFoto");
    const navText = setElements("a", "navt3n");;
    const navButton = setElements("a", "loginButton");

    navLogoFoto.src = "./foto/t3n-logo.png";
    navText.href = '#';
    navButton.href = '#';
    navText.innerText = "t3n.de";
    navButton.innerText = "Login";

    document.body.appendChild(nav);
    nav.appendChild(navLogoDiv);
    nav.appendChild(navLoginDiv);
    navLogoDiv.appendChild(navLogoFoto);
    navLoginDiv.appendChild(navText);
    navLoginDiv.appendChild(navButton);
}

const initPioneersNetwork = () => {

    const pioneersDiv = setElements("div", "pioneersDiv");
    const pioneersH1 = setElements("h1", "pioneersH1");
    const pioneersH2 = setElements("h2");
    const pioneersButton = setElements("a", "pioneersButton");

    pioneersButton.href = '#';
    pioneersH1.innerHTML = "PIONEERS NETWORK";
    pioneersH2.innerHTML = "Gestalte mit uns eine positive digitale Zukunft";
    pioneersButton.innerHTML = "Jetzt kostenlos anmelden";

    document.body.appendChild(pioneersDiv);
    pioneersDiv.appendChild(pioneersH1);
    pioneersDiv.appendChild(pioneersH2);
    pioneersDiv.appendChild(pioneersButton);
}


const initSlider = () => {

    const sliderDefaultDiv = setElements("div", "sliderDefaultDiv");
    const sliderH2 = setElements("h2");
    const sliderDiv = setElements("div", "sliderDiv");
    const slider = setElements("div", "slider");
    const leftBtn = setElements("button", "leftBtn");
    const rightBtn = setElements("button", "rightBtn");

    sliderH2.innerHTML = "Finde andere digitale pioniere"

    document.body.appendChild(sliderDefaultDiv);
    sliderDiv.appendChild(slider);
    sliderDefaultDiv.appendChild(sliderH2);
    sliderDefaultDiv.appendChild(sliderDiv);
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////CLASSES/////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

class SliderProfile {
    constructor(img, name, workingPosition, company) {
        this.img = img;
        this.name = name;
        this.workingPosition = workingPosition;
        this.company = company;
    }
}


class Aq {
    constructor(quest, answer, link) {
        this.quest = quest;
        this.answer = answer;
        this.link = link;
    }
    get getQuestion() {
        return this.quest;
    }


    get getAnswer() {
        return String(this.answer).replace(this.link, "<a href='#'>" + this.link + "</a>");
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Slider//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// const profiles = [ // um 2 Profiles zuzugreifen.
//     new SliderProfile("https://storage.googleapis.com/t3n-de/pioneers/4b52a4383475faa6ebfdd8a37ccf85f53694f522/fullsizeoutput_787.jpeg",
//         "Isa Sonnenfeld", "Lelterin News Lab", "Google"),
//     new SliderProfile("https://storage.googleapis.com/t3n-de/pioneers/8298acd960400f97e749266416913a54ac9b45ea/29513215_1757429684277443_7955459664427213519_n%20-%20Kathrin%20We%C3%9Fling.jpg",
//         "Kathrin Weßling", "Founder", "Würger & wessling")
// ];
// const sliderProfilesDiv = document.createElement("div");

// const sliderProfiles = []; // gerade Zahl wird profiles[0] kriegen und ungerade Zahl wird profiles[1] bekommen.
// for (i = 0; i < 25; i++) {
//     if (i % 2 == 0) {
//         sliderProfiles[i] = profiles[0];
//     } else {
//         sliderProfiles[i] = profiles[1];
//     }
// }

// //einfügung die Profiles zu SliderDiv
// for (i = 0; i < sliderProfiles.length; i++) {

//     const freeDiv = document.createElement("div");
//     const freeA = document.createElement("a");
//     const Img = document.createElement("img");
//     const name = document.createElement("h3");
//     const position = document.createElement("p");
//     const company = document.createElement("p");

//     freeDiv.appendChild(freeA);
//     freeA.appendChild(Img);
//     freeA.appendChild(name);
//     freeA.appendChild(position);
//     freeA.appendChild(company);

//     freeDiv.className = "profilInfos";
//     freeA.href = '#';
//     Img.src = sliderProfiles[i].img;
//     name.innerHTML = sliderProfiles[i].name;
//     position.innerHTML = sliderProfiles[i].workingPosition;
//     company.innerHTML = sliderProfiles[i].company;
//     company.id = "companyImg";
//     position.id = 'position';

//     slider.appendChild(freeDiv);
// }
// sliderDiv.appendChild(slider);


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Become Pionier//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const initBecomePionier = function () {
    const section = document.createElement('section');
    section.className = 'becomePionier-outerSection';
    const outerDiv = document.createElement('div');
    outerDiv.id = 'becomePionier';
    const span = document.createElement('span');
    span.innerHTML = 'J';
    const hAr = ["ETZT", "PIONIER","WERDEN"];
    const sectionHeading = document.createElement('div')
    sectionHeading.appendChild(span);
        hAr.forEach(e => {
            const h = document.createElement('h2');
            h.innerHTML= e;
            h.className = 'heading-head';
            sectionHeading.appendChild(h)
        });
    // sectionHeading.innerHTML= 'JETZT PIONIER WERDEN';
    sectionHeading.className = 'becomePionier-Heading';
    outerDiv.appendChild(sectionHeading);
    outerDiv.appendChild(getMovementSection());
    section.appendChild(outerDiv);
    document.body.appendChild(section);
}

const getMovementSection = function() {
    const area = document.createElement('div');
    area.className = 'becomePionier-textArea';
    const areaHeading = document.createElement('h4');
    areaHeading.innerHTML = 'Werde Teil der Bewegung!';
    areaHeading.className = ('textArea-heading');
    const p = document.createElement('p');
    p.innerHTML = 'Zeig, wer du bist und werde Mitglied im Pioneers Network – dem Netzwerk für Menschen, die die Digitalisierung gestalten. Menschen, die etwas bewegen wollen, die kreativ sind, die eine Haltung haben, die positiv denken, konstruktives Feedback und Impulse geben und Spaß bei der Arbeit haben. Digitale Pioniere eben.';
    p.className ='textArea-text';
    const b = document.createElement('button');
    b.className = 'textArea-button';
    b.innerHTML ='Jetzt kostenlos anmelden';
    area.appendChild(areaHeading);
    area.appendChild(p)
    area.appendChild(b);
    return area;

    
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////FAQ/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const initFaq = function () {
    faq();
    faqHeading();
    faqElements();
    faqButton();
    //test
}
const faq = function () {
    const faq = document.createElement('div');
    faq.id = 'faq';
    document.body.appendChild(faq);
}
const faqHeading = function () {
    const h = document.createElement('h4');
    h.innerHTML = 'FAQ';
    h.className = 'faq-heading'
    document.getElementById('faq').appendChild(h);
}
const faqElements = function () {
    const faqAr = [
        new Aq("Warum gibt es das Pioneers Network?", "Mit dem Pioneers Network wollen wir sichtbar machen, wer die digitalen Pioniere sind, die tagtäglich daran arbeiten, die Chancen der Digitalisierung zu nutzen, statt die Gefahren zu beschwören. Und wir wollen Antworten auf die folgenden Fragen liefern: Was treibt sie an? Was ist ihre Motivation? Welche Ziele verfolgen sie? Und ganz praktisch: Welche Tools setzen sie ein, um ihre Arbeit besser und effizienter zu bewerkstelligen? Hier findest du mehr Informationen.", "Informationen"),
        new Aq("Wie werde ich Mitglied im Pioneers Network?", "Das geht mit wenigen Klicks. Dafür registrierst du dich auf t3n.de und füllst dann im Pioneers Network dein Profil aus. Je vollständiger dein Profil ausgefüllt ist, umso eher erscheinst du auch in der Suche.", "registrierst du dich auf t3n.de "),
        new Aq("Kostet ein Profil im Pioneers Network Geld?", "Nein, das Pioneers-Network-Profil ist und bleibt kostenlos. Der aktuelle Funktionsumfang und weitere Features werden auch in Zukunft kein Geld kosten. Denkbar sind zukünftige Pro-Accounts bzw. Premium-Features."),
        new Aq("Warum sollte ich mich beim Pioneers Network anmelden?", "Im Pioneers Network kannst du andere digitale Pioniere entdecken und Einblicke in ihre Arbeit bekommen. Sie geben dir Tipps aus ihrem Umgang mit E-Mails, nehmen dich mit in ihren Tagesablauf und du erhältst Empfehlungen für Bücher und Podcasts. Der Funktionsumfang wird in den kommenden Versionen noch erweitert, sodass es sich lohnt, immer wieder reinzuschauen und von Anfang an dabei zu sein!")
    ];
    faqAr.forEach(e => {
        const c = getQuestContainer();
        const m = getQuestMarker();
        const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        m.appendChild(s);
        const questHeading = document.createElement('div');
        questHeading.classList = 'faq-questHeadContainer';

        const head = document.createElement('h5');
        head.addEventListener('click', () => {
            c.classList.toggle('open');
            if (!c.classList.contains('open')) {
                c.classList.toggle('closing');
                setTimeout(() => {
                    c.classList.toggle('closing')
                }, 1500)
            }
        });
        head.innerHTML = e.getQuestion;
        head.className = 'question-heading'

        const answer = getAnswerEl(e);
        questHeading.appendChild(head);
        questHeading.appendChild(m);
        c.appendChild(questHeading);
        c.appendChild(answer);
        document.getElementById('faq').appendChild(c);
    })
}
const faqButton = function () {
    var b = document.createElement('button');
    b.className = 'faq-button';
    b.innerHTML = 'Zu allen FAQ';
    document.getElementById('faq').appendChild(b);
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////FOOTER//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const initFooter = function () {
    footer();
    footerCopyright();
    footerSocialMedia();
    footerUsefulLinks();
}

const footer = function () {
    var footer = document.createElement('footer');
    footer.id = 'footer';
    document.body.appendChild(footer);
}

const footerCopyright = function () {
    var copyright = document.createElement('div');
    copyright.className = 'footer-copyright';
    var cpText = document.createElement('span');
    cpText.innerHTML = '© yeebase media GmbH 2005-2020';
    copyright.appendChild(cpText);
    document.getElementById('footer').appendChild(copyright);
}

const footerSocialMedia = function () {
    var socialMediaIcons = document.createElement('div');
    socialMediaIcons.className = 'footer-socialMediaIcons';
    document.getElementById('footer').appendChild(socialMediaIcons);
    const smIUrl = ["./media/facebook_icon.PNG", "./media/twitter_icon.PNG", "./media/xing_icon.png", "./media/linkedin_icon.png", "./media/instagram_icon.png", "./media/git_icon.png", "./media/medium_icon.png"];
    smIUrl.forEach(e => {
        var el = document.createElement('img');
        el.src = e;
        socialMediaIcons.appendChild(el);

    })

}

const footerUsefulLinks = function () {
    const test = document.createElement('div');
    test.className = 'usefulLinks-outer';
    var usefulLinks = document.createElement('ul');
    usefulLinks.className = 'footer-usefulLinks';
    const ulAr = ["Kontakt", "AGB", "Datenschutz", "Impressum"];
    ulAr.forEach(e => {
        var l = document.createElement('li')
        var ref = document.createElement('a');
        ref.className = 'usefulLinks-link'
        l.appendChild(ref);
        ref.href = e;
        ref.innerHTML = e;
        usefulLinks.appendChild(l);
    });
    test.appendChild(usefulLinks);
    document.getElementById('footer').appendChild(test);
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////HelperR Functions///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const getAnswerEl = function (question) {
    const p = document.createElement('p');
    p.className = 'question-answer'
    p.innerHTML = question.getAnswer;
    return p;
}
const getQuestMarker = function () {
    const div = document.createElement('div');
    div.className = 'question-marker'
    return div;
}
const getQuestContainer = function () {
    const div = document.createElement('div')
    div.className = 'faq-question'
    return div;
}
