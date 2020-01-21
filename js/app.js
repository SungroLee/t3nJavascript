/********************************
 * Navbar
 *********************************/
//////////////// Variable/////////////////
// Navbar
const nav = document.createElement("nav"); //navbar
const navLogoDiv = document.createElement("div"); //nav left div
const navLoginDiv = document.createElement("div"); //nav right div
const navLogoFoto = document.createElement("img"); //logo img
const navText = document.createElement("a"); // Nav Right Text "t3n"
const navButton = document.createElement("a"); // Login Button in Nav
// First Part
const pioneersDiv = document.createElement("div");
const pioneersH1 = document.createElement("h1");
const pioneersH2 = document.createElement("h2");
const pioneersButton = document.createElement("a");

///////////////Atribute//////////////////
navLogoDiv.setAttribute("id", "logoDiv");
navLoginDiv.setAttribute("id", "loginDiv");
navLogoFoto.setAttribute("src", "./foto/t3n-logo.png");
navLogoFoto.setAttribute("id", "logoFoto");
navText.setAttribute("href", "#");
navText.setAttribute("id", "navt3n");
navButton.setAttribute("href", "#");
navButton.setAttribute("id", "loginButton");
// First Part
pioneersDiv.setAttribute("id", "pioneersDiv");
pioneersH1.setAttribute("id", "pioneersH1");
pioneersButton.setAttribute("id", "pioneersButton");
pioneersButton.setAttribute("href", "#");

/////////// CreateTextNode///////////
// Navbar
navText.innerText = "t3n.de";
navButton.innerText = "Login";
// First Part
pioneersH1.innerText = "PIONEERS NETWORK";
pioneersH2.innerHTML = "Gestalte mit uns eine positive digitale Zukunft";
pioneersButton.innerHTML = "Jetzt kostenlos anmelden";

////////////// AppendChild /////////////
document.body.appendChild(nav);
nav.appendChild(navLogoDiv);
nav.appendChild(navLoginDiv);
navLogoDiv.appendChild(navLogoFoto);
navLoginDiv.appendChild(navText);
navLoginDiv.appendChild(navButton);
// First Part
document.body.appendChild(pioneersDiv);
pioneersDiv.appendChild(pioneersH1);
pioneersDiv.appendChild(pioneersH2);
pioneersDiv.appendChild(pioneersButton);


window.onload = function () {
    this.console.log('Dokument geladen');
    initFaq();
    initFooter();
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////CLASSES/////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////FOOTER//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
const initFaq = function () {
    faq();
    faqHeading();
    faqElements();
    faqButton();
    //test
}
const faq = function () {
    var faq = document.createElement('div');
    faq.id = 'faq';
    document.body.appendChild(faq);
}
const faqHeading = function() {
    var h = document.createElement('h4');
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
        var el = document.createElement('details');
        var head = document.createElement('summary');
        head.innerHTML = e.getQuestion;
        var answer = document.createElement('p');
        answer.innerHTML = e.getAnswer;
        el.appendChild(head);
        el.appendChild(answer);
        document.getElementById('faq').appendChild(el);
    })
}

const faqButton = function() {
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
    var footer = document.createElement('div');
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
    var usefulLinks = document.createElement('ul');
    usefulLinks.className = 'footer-usefulLinks';
    document.getElementById('footer').appendChild(usefulLinks);
    const ulAr = ["Kontakt", "AGB", "Datenschutz", "Impressum"];
    ulAr.forEach(e => {
        var l = document.createElement('li')
        var ref = document.createElement('a');
        l .appendChild(ref);
        ref.href = e;
        ref.innerHTML = e;
        usefulLinks.appendChild(l);
    });
}
