const faq = document.createElement('div');

const init = function () {
    faqHeading();
    faqElements();
    faqButton();
    faqFinaliser();
    //test
}

class AskedQuestion {
    constructor(quest, answer, link,href,target) {
        this.quest = quest;
        this.answer = answer;
        this.link = link;
        this.href = href;
        this.target = target;
    }
    get getQuestion() {
        return this.quest;
    }


    get getAnswer() {
        return String(this.answer).replace(this.link, "<a href='"+this.href+"'target='"+this.target+"' >" + this.link + "</a>");
    }
}
const faqFinaliser = function () {
    faq.id = 'faq';
    document.body.appendChild(faq);
}
const faqHeading = function () {
    const heading = document.createElement('h4');
    heading.innerHTML = 'FAQ';
    heading.className = 'faq-heading'
    faq.appendChild(heading);
}
const faqElements = function () {
    const faqAr = [
        new AskedQuestion("Warum gibt es das Pioneers Network?", "Mit dem Pioneers Network wollen wir sichtbar machen, wer die digitalen Pioniere sind, die tagtäglich daran arbeiten, die Chancen der Digitalisierung zu nutzen, statt die Gefahren zu beschwören. Und wir wollen Antworten auf die folgenden Fragen liefern: Was treibt sie an? Was ist ihre Motivation? Welche Ziele verfolgen sie? Und ganz praktisch: Welche Tools setzen sie ein, um ihre Arbeit besser und effizienter zu bewerkstelligen? Hier findest du mehr Informationen.", "Informationen",'#'),
        new AskedQuestion("Wie werde ich Mitglied im Pioneers Network?", "Das geht mit wenigen Klicks. Dafür registrierst du dich auf t3n.de und füllst dann im Pioneers Network dein Profil aus. Je vollständiger dein Profil ausgefüllt ist, umso eher erscheinst du auch in der Suche.", "registrierst du dich auf t3n.de ",'#'),
        new AskedQuestion("Kostet ein Profil im Pioneers Network Geld?", "Nein, das Pioneers-Network-Profil ist und bleibt kostenlos. Der aktuelle Funktionsumfang und weitere Features werden auch in Zukunft kein Geld kosten. Denkbar sind zukünftige Pro-Accounts bzw. Premium-Features.",'#'),
        new AskedQuestion("Warum sollte ich mich beim Pioneers Network anmelden?", "Im Pioneers Network kannst du andere digitale Pioniere entdecken und Einblicke in ihre Arbeit bekommen. Sie geben dir Tipps aus ihrem Umgang mit E-Mails, nehmen dich mit in ihren Tagesablauf und du erhältst Empfehlungen für Bücher und Podcasts. Der Funktionsumfang wird in den kommenden Versionen noch erweitert, sodass es sich lohnt, immer wieder reinzuschauen und von Anfang an dabei zu sein!",'#')
    ];
    faqAr.forEach(e => {
        const container = getQuestContainer();
        const marker = getQuestMarker();
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        marker.appendChild(svg);
        const questHeading = document.createElement('div');
        questHeading.classList = 'faq-questHeadContainer';

        const head = document.createElement('h5');
        head.addEventListener('click', function () { clickFunction(container) });
        marker.addEventListener('click', function () { clickFunction(container) });
        head.innerHTML = e.getQuestion;
        head.className = 'question-heading'

        const answer = getAnswerEl(e);
        questHeading.appendChild(head);
        questHeading.appendChild(marker);
        container.appendChild(questHeading);
        container.appendChild(answer);
        faq.appendChild(container);
    })
}

const clickFunction = function (container) {
    container.classList.toggle('open');
    if (!container.classList.contains('open')) {
        container.classList.toggle('closing');
        setTimeout(() => {
            container.classList.toggle('closing')
        }, 1500)
    }
}
const faqButton = function () {
    const button = document.createElement('button');
    button.className = 'faq-button';
    button.innerHTML = 'Zu allen FAQ';
    faq.appendChild(button);
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
const getAnswerEl = function (question) {
    const paragraph = document.createElement('p');
    paragraph.className = 'question-answer'
    paragraph.innerHTML = question.getAnswer;
    return paragraph;
}
export { init };