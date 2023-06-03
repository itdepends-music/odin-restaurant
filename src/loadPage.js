function makeHeader() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const header = document.createElement('h1');
    header.textContent = 'HEADER';
    headerDiv.appendChild(header);

    return headerDiv;
}

function makeMainContent() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main');

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
    mainFigureCaption.textContent = 'Picture of Adrwahkah';
    mainFigure.appendChild(mainFigureCaption);

    mainDiv.appendChild(mainFigure);

    return mainDiv;
}

function makeFooter() {
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');

    const footerParagraph = document.createElement('p');
    footerParagraph.textContent = '\u00A9 2023 Oscar Robertson';
    footerDiv.appendChild(footerParagraph);

    return footerDiv;
}

function loadPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(makeHeader());
    contentDiv.appendChild(makeMainContent());
    contentDiv.appendChild(makeFooter());
}

export default loadPage;
