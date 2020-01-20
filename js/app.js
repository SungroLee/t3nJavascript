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
/////////// CreateTextNode///////////
// Navbar
navText.innerText = "t3n.de";
navButton.innerText = "Login";
// First Part
pioneersH1.innerText = "PIONEERS NETWORK";
pioneersH2.innerHTML = "Gestalte mit uns eine positive digitale Zukunft";
// AppendChild
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

