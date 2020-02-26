import * as SetElement from './setElement.js';

const initNav = () => {
	const header = SetElement.setElements('header');
	const nav = SetElement.setElements('nav');
	const navLogoDiv = SetElement.setElements('div', 'nav_logoDiv');
	const navLoginDiv = SetElement.setElements('div', 'nav_loginDiv');
	const navLogoFoto = SetElement.setElements('img', 'nav_logoFoto');
	const navText = SetElement.setElements('a', 'nav_t3n');
	const navButton = SetElement.setElements('a', 'nav_loginButton');
	const imgAnchor = SetElement.setElements('a');

	navLogoFoto.src = './foto/t3n-logo.png';
	navLogoFoto.alt = '';
	navText.href = '#';
	navButton.href = '#';
	navText.innerText = 't3n.de';
	navButton.innerText = 'Login';
	imgAnchor.href = '../index.html';

	document.body.appendChild(header);
	header.appendChild(nav);
	nav.appendChild(navLogoDiv);
	nav.appendChild(navLoginDiv);
	imgAnchor.appendChild(navLogoFoto);
	navLogoDiv.appendChild(imgAnchor);
	// navLogoDiv.appendChild(navLogoFoto);
	navLoginDiv.appendChild(navText);
	navLoginDiv.appendChild(navButton);
};

export { initNav };
