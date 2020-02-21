import * as Footer from "./footer.js";
import * as Nav from "./nav.js";
import * as SetElement from "./setElement.js";
import * as Faq from './faq.js'

window.onload = function () {
    this.console.log('Dokument geladen');
    Nav.initNav();
    initPioneersNetwork();
    initSlider();
    initProfileClone();
    initTeileDeinWissen();
    initPioniereInListenFinden();
    initLassDichInspirieren();
    initBecomePionier();
    // initFaq();
    Footer.init();
    currentSliderSizeHandler();
    sliderButtonInit();
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
////////////////////////////////////////Pioneers Network////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const initPioneersNetwork = () => {

    const pioneersDiv = SetElement.setElements("div", "pioneersDiv");
    const pioneersH1 = SetElement.setElements("h1", "", 'pioneersH1');
    const pioneersH12 = SetElement.setElements("h1", "", 'pioneersH1');
    const pioneersH2 = SetElement.setElements("h2");
    const pioneersButton = SetElement.setElements("a", "pioneersButton");

    pioneersButton.href = '../register.html';
    pioneersH1.innerHTML = "PIONEERS&nbsp;";
    pioneersH12.innerHTML = "NETWORK";
    pioneersH2.innerHTML = "Gestalte mit uns eine positive digitale Zukunft";
    pioneersButton.innerHTML = "Jetzt kostenlos anmelden";

    document.body.appendChild(pioneersDiv);
    pioneersDiv.appendChild(pioneersH1);
    pioneersDiv.appendChild(pioneersH12);
    pioneersDiv.appendChild(pioneersH2);
    pioneersDiv.appendChild(pioneersButton);
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
    const sliderProfiles = []; // gerade Zahl wird profiles[0] kriegen und ungerade Zahl wird profiles[1] bekommen.
    for(let i = 0; i < 35; i++) {  
        if(i % 2 == 0) {
            sliderProfiles[i] = profiles[0];
        } else {
            sliderProfiles[i] = profiles[1];
        }
    }

    //einfügung die Profiles zu SliderDiv
    for(let i = 0; i < sliderProfiles.length; i++) {
        
        const freeDiv = SetElement.setElements("div","","profilInfos");
        const freeA = SetElement.setElements("a");
        const img = SetElement.setElements("img");
        const name = SetElement.setElements("h3");
        const position = SetElement.setElements("p", "position");
        const company = SetElement.setElements("p", "companyImg");
        
        freeA.setAttribute("ondragstart", "return false;");
        freeA.setAttribute("draggable", false);
        // freeA.href = '#';
        img.src = sliderProfiles[i].img;
        img.setAttribute("draggable", false);
        name.innerHTML = sliderProfiles[i].name;
        position.innerHTML = sliderProfiles[i].workingPosition;
        company.innerHTML = sliderProfiles[i].company;
        
        freeDiv.appendChild(freeA);
        freeA.appendChild(img);
        freeA.appendChild(name);
        freeA.appendChild(position);
        freeA.appendChild(company);

        // freeDiv.className = "profilInfos";

        slider.appendChild(freeDiv);
    }
}

const initSlider = () => {

    const sliderDefaultDiv = SetElement.setElements("div", "sliderDefaultDiv");
    const sliderH2 = SetElement.setElements("h2");
    const sliderDiv = SetElement.setElements("div", "sliderDiv");
    const slider = SetElement.setElements("div", "slider");
    const acturalSlide = SetElement.setElements("div");
    const leftBtn = SetElement.setElements("button", "leftBtn", "sliderButton");
    const rightBtn = SetElement.setElements("button", "rightBtn", "sliderButton");

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

const sliderButtonInit = () => { //Slider ButtonFunktionen

    let counter = 1;
    const sliderDiv = document.querySelector("#slider > div");
    const profileInfos = document.querySelectorAll('.profilInfos > a');
    const buttons = document.querySelectorAll(".sliderButton");
    let mousedownPosition = 0;
    let mouseUpPosition = 0;
    let isClicked = false;

    sliderDiv.style.transform = 'translateX(' + (-sliderDiv.clientWidth * 1) + 'px)';

    const rightSlider = () => {
        counter--;
        sliderDiv.style.transform = 'translateX(' + (-sliderDiv.clientWidth * counter) + 'px)';
        sliderDiv.style.transition = 'transform 400ms ease-in-out';
    }

    const leftSlider = () => {
        counter++;
        sliderDiv.style.transform = 'translateX(' + (-sliderDiv.clientWidth * counter) + 'px)';
        sliderDiv.style.transition = 'transform 400ms ease-in-out';     
    }

    const mousedownTouchStartFunction = (e) => {
        if(e.type == 'mousedown') {
            isClicked = true;
            mousedownPosition = e.clientX;
        }else if(e.type == 'touchstart') {
            isClicked = true;
            mousedownPosition = event.touches[0].clientX;
        }       
    }
    
    const mouseupTouchEndFunction = (e) => {

        if(e.type == 'mouseup') {
            mouseUpPosition = e.clientX;

            if(mousedownPosition - mouseUpPosition < -200) {
                rightSlider(); 
            }else if( mousedownPosition - mouseUpPosition > 200) {
                leftSlider();
            }else {
                sliderDiv.style.transform = 'translateX(' + (-sliderDiv.clientWidth * counter) + 'px)';
                sliderDiv.style.transition = 'transform 400ms ease-in-out';
            }
            isClicked = false;
        }else if(e.type == 'touchend') {
            mouseUpPosition = event.changedTouches[0].clientX;

            if(mousedownPosition - mouseUpPosition < -200) {
                rightSlider(); 
            }else if( mousedownPosition - mouseUpPosition > 200) {
                leftSlider();
            }else {
                sliderDiv.style.transform = 'translateX(' + (-sliderDiv.clientWidth * counter) + 'px)';
                sliderDiv.style.transition = 'transform 400ms ease-in-out';
            }
            isClicked = false;
        }
        
    }

    const mousemoveTouchmoveFunction = (e) => {


        if(isClicked && e.type == 'mousemove'){
        sliderDiv.style.transform = 'translateX(' + ((-sliderDiv.clientWidth * counter) + (-mousedownPosition + e.clientX)) + 'px)';
        sliderDiv.style.transition = 'none';
        }else if(isClicked && e.type == 'touchmove') {
            sliderDiv.style.transform = 'translateX(' + ((-sliderDiv.clientWidth * counter) + (-mousedownPosition + event.touches[0].clientX)) + 'px)';
            sliderDiv.style.transition = 'none';
        }
    }

    for(let i = 0; i < profileInfos.length; i++) {

        profileInfos[i].addEventListener('mousedown', (event) => {
            mousedownTouchStartFunction(event);
        })

        profileInfos[i].addEventListener('mouseup', (event) => {
            mouseupTouchEndFunction(event);
        })

        profileInfos[i].addEventListener("mousemove", (event) => {
            mousemoveTouchmoveFunction(event);
        })
    }

    for(let i = 0; i < profileInfos.length; i++) {

        profileInfos[i].addEventListener('touchstart', (event) => {
            mousedownTouchStartFunction(event);
        })

        profileInfos[i].addEventListener('touchend', (event) => {
            mouseupTouchEndFunction(event);
        })

        profileInfos[i].addEventListener("touchmove", (event) => {
            mousemoveTouchmoveFunction(event);
        })
    }

    buttons[0].addEventListener("click", () => {
        rightSlider();
    })
    buttons[1].addEventListener("click", () => {
        leftSlider();
    })

    sliderDiv.addEventListener('transitionend', () => {
        if(counter == 5) {
            sliderDiv.style.transition = 'none';
            counter = 1;
            sliderDiv.style.transform = 'translateX(' + (-sliderDiv.clientWidth * counter) + 'px)';
        }
        if(counter == 0) {
            sliderDiv.style.transition = 'none';
            counter = 4;
            sliderDiv.style.transform = 'translateX(' + (-sliderDiv.clientWidth * counter) + 'px)';
        }
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Teile dein Wissen////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const initTeileDeinWissen = () => {
    const section3 = SetElement.setElements("div","teileDeinWissen");
    const middleDiv = SetElement.setElements("div", "section3_middleDiv");
    const imgDiv = SetElement.setElements("div", "section3_imgDiv", "section3_insideDiv");
    const listDiv = SetElement.setElements("div", "section3_listDiv", "section3_insideDiv");
    const computerImg = SetElement.setElements("img");
    const teileDeinWissenH3 = SetElement.setElements("h3");
    const ulList = SetElement.setElements("ul");
    const button = SetElement.setElements("a","section3_button");

    const jsonAttribute = [
        {'innerHTML' : 'Wer bist du?'},
        {'innerHTML' : 'Was begeistert dich?'},
        {'innerHTML' : 'Wie arbeitest du?'},
        {'innerHTML' : 'Welche Tools nutzt du?'},
        {'innerHTML' : 'Teile dein Wissen und </br> deine Erfahrungen'},
        {'innerHTML' : 'Jetzt kostenlos anmelden'},
        {'src' : 'https://storage.googleapis.com/t3n-de/pioneers/a0e9cb9419205aeb77d95c7de29244579285f3da/PioneersScreen.png'},
    ]

    for(let i = 0; i < 4; i++) {
        const list = SetElement.setElements("li","","section3_lists") ;
        list.innerHTML = jsonAttribute[i].innerHTML;
        ulList.appendChild(list);
    }

    computerImg.src = jsonAttribute[6].src;
    teileDeinWissenH3.innerHTML = jsonAttribute[4].innerHTML;
    button.innerHTML = jsonAttribute[5].innerHTML;
    
    document.body.appendChild(section3);
    section3.appendChild(middleDiv);
    middleDiv.appendChild(imgDiv);
    middleDiv.appendChild(listDiv);
    imgDiv.appendChild(computerImg);
    listDiv.appendChild(teileDeinWissenH3);
    listDiv.appendChild(ulList);
    listDiv.appendChild(button);
}

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Pioniere in Listen Finden////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const initPioniereInListenFinden = () => {
    const section4 = SetElement.setElements("div", "pioneersInListen");
    const middleDiv = SetElement.setElements("div", "section4_middleDiv");
    const listDiv = SetElement.setElements("div","section4_listDiv", "section4_insideDiv");
    const textDiv = SetElement.setElements("div","section4_textDiv", "section4_insideDiv");
    let count = 2;
    const textArr = ['PIONIERE', 'IN LISTEN', 'FINDEN'];
    const profilList = [];
    const jSon = [
        {'title':'Medien'},
        {'title':'PR&Kommunikation'},
        {'name':'Drik von Gehlen', 'src':"https://storage.googleapis.com/t3n-de/pioneers/4b52a4383475faa6ebfdd8a37ccf85f53694f522/fullsizeoutput_787.jpeg"},
        {'name':"Peter Hogenkamp", 'src':"https://storage.googleapis.com/t3n-de/pioneers/8298acd960400f97e749266416913a54ac9b45ea/29513215_1757429684277443_7955459664427213519_n%20-%20Kathrin%20We%C3%9Fling.jpg"},
        {'name':"Isa Sonnenfeld", 'src':"https://storage.googleapis.com/t3n-de/pioneers/4b52a4383475faa6ebfdd8a37ccf85f53694f522/fullsizeoutput_787.jpeg"},
        {'name':"Carolin Neumann", 'src':"https://storage.googleapis.com/t3n-de/pioneers/8298acd960400f97e749266416913a54ac9b45ea/29513215_1757429684277443_7955459664427213519_n%20-%20Kathrin%20We%C3%9Fling.jpg"},
        {'name':"Stefan Keuchel", 'src':"https://storage.googleapis.com/t3n-de/pioneers/4b52a4383475faa6ebfdd8a37ccf85f53694f522/fullsizeoutput_787.jpeg"},
        {'name':"Lena Raschke", 'src':"https://storage.googleapis.com/t3n-de/pioneers/8298acd960400f97e749266416913a54ac9b45ea/29513215_1757429684277443_7955459664427213519_n%20-%20Kathrin%20We%C3%9Fling.jpg"},
        {'name':"Magdalena Rogl", 'src':"https://storage.googleapis.com/t3n-de/pioneers/4b52a4383475faa6ebfdd8a37ccf85f53694f522/fullsizeoutput_787.jpeg"},
        {'name':"Sascha Pallenberg", 'src':"https://storage.googleapis.com/t3n-de/pioneers/8298acd960400f97e749266416913a54ac9b45ea/29513215_1757429684277443_7955459664427213519_n%20-%20Kathrin%20We%C3%9Fling.jpg"},
        {'zurListe':'Zur Liste &#8594;'},
    ];

    for(let i = 0; i < count; i++) {
        profilList[i] = SetElement.setElements('ul', '', 'section4_uls');
    }
        
    jSon.forEach((element, index) => {

        if(element.title != null) {

            const h3Tag = SetElement.setElements('h3');
            h3Tag.innerHTML = element.title;

            if(h3Tag.textContent == 'Medien') {
                profilList[0].appendChild(h3Tag);
            }else if(h3Tag.textContent == 'PR&Kommunikation') {
                profilList[1].appendChild(h3Tag);
            }

        }else if(element.title == undefined && index < 10) {

            const imgs = SetElement.setElements('img');
            const lists = SetElement.setElements('li', '', 'section4_profilLists');
            const pTags = SetElement.setElements('p');
    
            pTags.innerHTML = element.name;
            imgs.src = element.src;
    
            lists.appendChild(imgs);
            lists.appendChild(pTags);

            if(index >1 && index < 6) {
                profilList[0].appendChild(lists);
            }else {
                profilList[1].appendChild(lists);
            }

        }else if(index == 10) {

            for(let i = 0; i < profilList.length; i++) {
                const aTag = SetElement.setElements('a');
                aTag.innerHTML = element.zurListe;
                
                profilList[i].appendChild(aTag);  
            }
            
        }
    });

    document.body.appendChild(section4);
    section4.appendChild(middleDiv);
    middleDiv.appendChild(listDiv);
    middleDiv.appendChild(textDiv);

    profilList.forEach(element => {
        listDiv.appendChild(element);
    })

    for(let i = 0; i < textArr.length; i++) {
        const h2Text = SetElement.setElements('h2');
        h2Text.innerHTML = textArr[i];
        textDiv.appendChild(h2Text);
    }

}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Lass Dich Inspirieren///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const initLassDichInspirieren = () => {
    const section5 = [];
    const jSon = [
        {'id':'lassDichInspirieren'},
        {'id':'section5_middleDiv'},
        {'id':'section5_textDiv', 'className':'section5_insideDiv'},
        {'id':'section5_videoDiv', 'className':'section5_insideDiv'},
    ];
    const text = ['LASS', 'DICH', 'INSPIRIEREN'];
    const video = SetElement.setElements('video');
    const source = SetElement.setElements('source');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;

    source.src = 'https://storage.googleapis.com/t3n-de/pioneers/cfa02d7739eea252d2161f78e8980ed9e8437cfb/PN_Features.mp4';
    video.appendChild(source);

    jSon.forEach((element, index) => {
        if(!element.className) {
            const div = SetElement.setElements("div", element.id);
            section5[index] = div;
        }else {
            const div = SetElement.setElements("div", element.id, element.className);
            section5[index] = div;
        }
    })

    text.forEach(element => {
        const h2 = SetElement.setElements('h2');
        h2.innerHTML = element;
        section5[2].appendChild(h2);
    })

    for(let i = 0; i < section5.length; i++) {
        if(i == 0) {
            section5[i].appendChild(section5[i+1]);
            document.body.appendChild(section5[0]);
        }else if(i == 1) {
            section5[i].appendChild(section5[i+1]);
            section5[i].appendChild(section5[i+2]);
            section5[i+2].appendChild(video);
        }else {
            return;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Chat Icon///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



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


