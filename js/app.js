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
// Pioneers Network
const pioneersDiv = document.createElement("div");
const pioneersH1 = document.createElement("h1");
const pioneersH2 = document.createElement("h2");
const pioneersButton = document.createElement("a");
// Slider
const sliderDefaultDiv = document.createElement("div");
const sliderH2 = document.createElement("h2");
const sliderDiv = document.createElement("div");
const slider = document.createElement("div");

///////////////Atribute//////////////////
navLogoDiv.id = 'logoDiv';
navLoginDiv.id = 'loginDiv';
navLogoFoto.id = 'logoFoto';
navText.id = 'navt3n';
navButton.id = 'loginButton';
navLogoFoto.src = "./foto/t3n-logo.png";
navText.href = '#';
navButton.href = '#';
// Pioneers Network
pioneersDiv.id = 'pioneersDiv';
pioneersH1.id = 'pioneersH1';
pioneersButton.id = 'pioneersButton';
pioneersButton.href = '#';
// Slder
sliderDefaultDiv.id = 'sliderDefaultDiv';
sliderDiv.id = 'sliderDiv';
slider.id = "slider";

/////////// CreateTextNode///////////
// Navbar
navText.innerText = "t3n.de";
navButton.innerText = "Login";
// Pioneers Network
pioneersH1.innerText = "PIONEERS NETWORK";
pioneersH2.innerHTML = "Gestalte mit uns eine positive digitale Zukunft";
pioneersButton.innerHTML = "Jetzt kostenlos anmelden";
//Slider
sliderH2.innerHTML = "Finde andere digitale pioniere"

////////////// AppendChild /////////////
document.body.appendChild(nav);
nav.appendChild(navLogoDiv);
nav.appendChild(navLoginDiv);
navLogoDiv.appendChild(navLogoFoto);
navLoginDiv.appendChild(navText);
navLoginDiv.appendChild(navButton);
// Pioneers Network
document.body.appendChild(pioneersDiv);
pioneersDiv.appendChild(pioneersH1);
pioneersDiv.appendChild(pioneersH2);
pioneersDiv.appendChild(pioneersButton);
//Slider
document.body.appendChild(sliderDefaultDiv);
sliderDefaultDiv.appendChild(sliderH2);
sliderDefaultDiv.appendChild(sliderDiv);

window.onload = function () {
    this.console.log('Dokument geladen');
    initFaq();
    initFooter();
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

const profiles = [ // um 2 Profiles zuzugreifen.
    new SliderProfile("https://storage.googleapis.com/t3n-de/pioneers/4b52a4383475faa6ebfdd8a37ccf85f53694f522/fullsizeoutput_787.jpeg",
                         "Isa Sonnenfeld", "Lelterin News Lab", "Google"),
    new SliderProfile("https://storage.googleapis.com/t3n-de/pioneers/8298acd960400f97e749266416913a54ac9b45ea/29513215_1757429684277443_7955459664427213519_n%20-%20Kathrin%20We%C3%9Fling.jpg",
                     "Kathrin Weßling", "Founder", "Würger & wessling")
];
const sliderProfilesDiv = document.createElement("div");

const sliderProfiles = []; // gerade Zahl wird profiles[0] kriegen und ungerade Zahl wird profiles[1] bekommen.
for(i = 0; i < 25; i++) {  
    if(i % 2 == 0) {
        sliderProfiles[i] = profiles[0];
    }else {
        sliderProfiles[i] = profiles[1];
    }
}

for(i = 0; i < sliderProfiles.length; i++) {
    
    const freeDiv = document.createElement("div");
    const freeA = document.createElement("a");
    const Img = document.createElement("img");
    const name = document.createElement("h3");
    const position = document.createElement("p");
    const company = document.createElement("p");
    
    freeDiv.appendChild(freeA);
    freeA.appendChild(Img);
    freeA.appendChild(name);
    freeA.appendChild(position);
    freeA.appendChild(company);

    freeDiv.className = "profilInfos";
    freeA.href = '#';
    Img.src = sliderProfiles[i].img;
    name.innerHTML = sliderProfiles[i].name;
    position.innerHTML = sliderProfiles[i].workingPosition;
    company.innerHTML = sliderProfiles[i].company;

    slider.appendChild(freeDiv);
}
sliderDiv.appendChild(slider);


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
