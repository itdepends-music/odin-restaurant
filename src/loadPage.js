import homePage from './homePage';

function makeHeader() {
    const PAGES = [
        [homePage, 'Home'],
        [homePage, 'Contact'],
        [homePage, 'Menu'],
    ];

    const headerUl = document.createElement('ul');
    headerUl.classList.add('header');

    for (const page of PAGES) {
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.textContent = page[1];
        linkItem.href = '#';

        linkItem.addEventListener('click', () => {
            changePage(page[0]);
        });

        listItem.appendChild(linkItem);
        headerUl.appendChild(listItem);
    }

    return headerUl;
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
