const footerElement = document.createElement('footer');
const init = function () {
    footerCopyright();
    footerSocialMedia();
    footerUsefulLinks();
    footer();
}

const footer = function () {
    footerElement.id = 'footer';
    document.body.appendChild(footerElement);
}

const footerCopyright = function () {
    var copyright = document.createElement('div');
    copyright.className = 'footer-copyright';
    var cpText = document.createElement('span');
    cpText.innerHTML = '© yeebase media GmbH 2005-2020';
    copyright.appendChild(cpText);
    footerElement.appendChild(copyright);
}

const footerSocialMedia = function () {
    const socialMediaIcons = document.createElement('div');
    socialMediaIcons.className = 'footer-socialMediaIcons';
    const smIUrl = ["./media/facebook_icon.PNG", "./media/twitter_icon.PNG", "./media/xing_icon.png", "./media/linkedin_icon.png", "./media/instagram_icon.png", "./media/git_icon.png", "./media/medium_icon.png"];
    smIUrl.forEach(mapEntry => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'image-container';
        const el = document.createElement('img');
        el.src = mapEntry;
        a.appendChild(el);
        socialMediaIcons.appendChild(a);
    })
    footerElement.appendChild(socialMediaIcons);

}

const footerUsefulLinks = function () {
    const outerDiv = document.createElement('div');
    outerDiv.className = 'usefulLinks-outer';
    const usefulLinks = document.createElement('ul');
    usefulLinks.className = 'footer-usefulLinks';
    const ulAr = ["Kontakt", "AGB", "Datenschutz", "Impressum"];
    ulAr.forEach(mapEntry => {
        const listEntry = document.createElement('li')
        const refference = document.createElement('a');
        refference.className = 'usefulLinks-link'
        listEntry.appendChild(refference);
        refference.href = mapEntry;
        refference.innerHTML = mapEntry;
        usefulLinks.appendChild(listEntry);
    });
    outerDiv.appendChild(usefulLinks);
    footerElement.appendChild(outerDiv);
}

export {init};