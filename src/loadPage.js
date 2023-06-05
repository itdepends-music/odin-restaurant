import homePage from './homePage';

function makeHeader() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const header = document.createElement('h1');
    header.textContent = 'HEADER';
    headerDiv.appendChild(header);

    return headerDiv;
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
    contentDiv.appendChild(homePage());
    contentDiv.appendChild(makeFooter());
}

function changePage(pageFunc) {
    const contentDiv = document.getElementById('content');
    const mainDiv = contentDiv.getElementsByClassName('main');
    contentDiv.removeChild(mainDiv);
    contentDiv.appendChild(pageFunc());
}

export default loadPage;
