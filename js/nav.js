import * as SetElement from "./setElement.js";

const initNav = () => {

    const nav = SetElement.setElements("nav");
    const navLogoDiv = SetElement.setElements("div", "nav_logoDiv");
    const navLoginDiv = SetElement.setElements("div", "loginDiv");
    const navLogoFoto = SetElement.setElements("img", "logoFoto");
    const navText = SetElement.setElements("a", "navt3n");
    const navButton = SetElement.setElements("a", "loginButton");

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

    // const navstructure = {
    //     'div.nav_logoDiv': { children: {'img.logoFoto', a.navt3n: {prop: {href: '#'}} },
    //     div.loginDiv: {children: {}, a.loginButton}},
    // }

    // document.body.appendChild(buildElementTree(navstructure));

    // navstructure.forEach(element => {
        
    // });
}

export {initNav};

