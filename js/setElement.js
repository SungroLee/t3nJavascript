const setElements = (element, id, className) => { // Element, ID, und Class Einsteller.
    const elementToCreate = document.createElement(element);

    if(id !== null && id !== "" && id !== undefined) {
        elementToCreate.id = id;
    }

    if(className !== null && className !== "" && className !== undefined) {
        elementToCreate.className = className;
    }
    return elementToCreate;
}

export {setElements};