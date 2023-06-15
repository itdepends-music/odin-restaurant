function homePage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main', 'homePage');

    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'Odin Restaurant';
    mainDiv.appendChild(mainHeading);

    const mainParagraph = document.createElement('p');
    mainParagraph.innerHTML = `Odin restaurant is proud to be the premier makers
                               of Adrwahkah and other cuisine for nuclear 
                               powered lifeforms since 2173. <br />`;
    mainDiv.appendChild(mainParagraph);

    const mainFigure = document.createElement('figure');

    const mainFigureImg = document.createElement('img');
    mainFigureImg.setAttribute('src', 'picture.png');
    mainFigureImg.setAttribute('alt', 'Picture of Adrwahkah');
    mainFigure.appendChild(mainFigureImg);

    const mainFigureCaption = document.createElement('figcaption');
    mainFigureCaption.textContent = 'Picture of 7skfjrl0';
    mainFigure.appendChild(mainFigureCaption);

    mainDiv.appendChild(mainFigure);

    return mainDiv;
}

export default homePage;
