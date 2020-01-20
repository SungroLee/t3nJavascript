/********************************
 * Navbar
 *********************************/
// Variable
const nav = document.createElement("nav"); //navbar
const navLogoDiv = document.createElement("div"); //nav left div
const navLoginDiv = document.createElement("div"); //nav right div
const navLogoFoto = document.createElement("img"); //logo img

//Atribute
navLogoDiv.setAttribute("id", "logoDiv");
navLoginDiv.setAttribute("id", "loginDiv");
navLogoFoto.setAttribute("src", "./foto/t3n-logo.png");
navLogoFoto.setAttribute("id", "logoFoto");
// CreateTextNode
// AppendChild
document.body.appendChild(nav);
nav.appendChild(navLogoDiv);
nav.appendChild(navLoginDiv);
navLogoDiv.appendChild(navLogoFoto);
