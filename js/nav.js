import * as SetElement from "./setElement.js";

const initNav = () => {

    const nav = SetElement.setElements("nav");
    const navLogoDiv = SetElement.setElements("div", "nav_logoDiv");
    const navLoginDiv = SetElement.setElements("div", "nav_loginDiv");
    const navLogoFoto = SetElement.setElements("img", "nav_logoFoto");
    const navText = SetElement.setElements("a", "nav_t3n");
    const navButton = SetElement.setElements("a", "nav_loginButton");

    // const arr = [nav, navLogoDiv, navLoginDiv, navLogoFoto, navText, navButton];

    // const json = [
    //     logo = {prop : ["./foto/t3n-logo.png", "#"]},
    //     login = 
    //     {}
    // ]

    // json.forEach((el, index) => {
    //     arr[index].src = el.src;
    // })

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
    //      'div.nav_logoDiv': { children: {'img.logoFoto', a.navt3n: {prop: {href: '#'}} },
    //     div.loginDiv: {children: {}, a.loginButton}},
    // }

    // document.body.appendChild(buildElementTree(navstructure));

    // navstructure.forEach(element => {
        
    // });
}

export {initNav};

