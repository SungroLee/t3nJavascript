import * as Footer from "./footer.js";
import * as Faq from './faq.js';

window.onload = function () {
    this.console.log('Dokument geladen');
    initNav();
    initPioneersNetwork();
    initSlider();
    initProfileClone();
    initBecomePionier();
    Faq.initFaq();
    // initFaq();
    // initFooter();
   Footer.init();
    currentSliderSizeHandler();
}

const setElements = (element, id, className) => { // Element, ID, und Class Einsteller.
    const elementToCreate = document.createElement(element);

    if(id !== null && id !== "" && id !== undefined) {
        elementToCreate.id = id;
    }

    if(className !== null && className !== "" && className !== undefined) {
        elementToCreate.className = className;
    }
    // el.id = i;
    // el.className = c;
    // if(i === null || i === "" || i === undefined) {
    //     el.removeAttribute("id");
    // }
    // if(c === null || c === "" || c === undefined) {
    //     el.removeAttribute("class");
    // }
    return elementToCreate;
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
    const acturalSlide = setElements("div");
    const leftBtn = setElements("button", "leftBtn", "sliderButton");
    const rightBtn = setElements("button", "rightBtn", "sliderButton");

    sliderH2.innerHTML = "Finde andere digitale pioniere"

    document.body.appendChild(sliderDefaultDiv);
    sliderDiv.appendChild(leftBtn);
    sliderDiv.appendChild(slider);
    sliderDiv.appendChild(rightBtn);
    sliderDefaultDiv.appendChild(sliderH2);
    sliderDefaultDiv.appendChild(sliderDiv);
    slider.appendChild(acturalSlide);
}

const currentSliderSizeHandler = () => { // um eine Aktuelle Größe über sliderProfiles zu zugreifen.
    setInterval(() => {
        const slider = document.querySelector("#slider");
        const profiles = document.querySelectorAll(".profilInfos a");
        const sliderWidht = slider.clientWidth;

        for(let i = 0; i < profiles.length; i++) {
            if(sliderWidht <= 482)
                profiles[i].style.width = (sliderWidht / 2) + 'px';
            else if(sliderWidht >= 483 && sliderWidht <= 782)
                profiles[i].style.width = (sliderWidht / 3) + 'px';
            else if(sliderWidht >= 783 && sliderWidht <= 996)
                profiles[i].style.width = (sliderWidht / 4) + 'px';
            else
                profiles[i].style.width = (sliderWidht / 5) + 'px';
        }
    },500);
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


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Slider//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



const initProfileClone = () => {
  
    const slider = document.querySelector("#slider div"); // um Slider Profil zugreifen.
    const profiles = [ // um 2 Profiles zuzugreifen.
        new SliderProfile("https://storage.googleapis.com/t3n-de/pioneers/4b52a4383475faa6ebfdd8a37ccf85f53694f522/fullsizeoutput_787.jpeg",
                             "Isa Sonnenfeld", "Lelterin News Lab", "Google"),
        new SliderProfile("https://storage.googleapis.com/t3n-de/pioneers/8298acd960400f97e749266416913a54ac9b45ea/29513215_1757429684277443_7955459664427213519_n%20-%20Kathrin%20We%C3%9Fling.jpg",
                         "Kathrin Weßling", "Founder", "Würger & wessling")
    ];
    const sliderProfilesDiv = document.createElement("div"); 
    const sliderProfiles = []; // gerade Zahl wird profiles[0] kriegen und ungerade Zahl wird profiles[1] bekommen.
    for(let i = 0; i < 25; i++) {  
        if(i % 2 == 0) {
            sliderProfiles[i] = profiles[0];
        } else {
            sliderProfiles[i] = profiles[1];
        }
    }

    //einfügung die Profiles zu SliderDiv
    for(let i = 0; i < sliderProfiles.length; i++) {
        
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
        company.id = "companyImg";
        position.id = 'position';


        slider.appendChild(freeDiv);
    }
}



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
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Zeig, wer du bist und werde Mitglied im Pioneers Network – dem Netzwerk für Menschen, die die Digitalisierung gestalten. Menschen, die etwas bewegen wollen, die kreativ sind, die eine Haltung haben, die positiv denken, konstruktives Feedback und Impulse geben und Spaß bei der Arbeit haben. Digitale Pioniere eben.';
    paragraph.className ='textArea-text';
    const button = document.createElement('button');
    button.type = 'button';
    button.onclick ="location.href='login.html'"
    button.className = 'textArea-button';
    button.innerHTML ='Jetzt kostenlos anmelden';
    area.appendChild(areaHeading);
    area.appendChild(paragraph)
    area.appendChild(button);
    return area;

    
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////FAQ/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////FOOTER//////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////HelperR Functions///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


