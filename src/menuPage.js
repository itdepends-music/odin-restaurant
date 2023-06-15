const MENUITEMS = [
    '1$VSSS',
    '$^%gjlilll',
    'XBBBBBBBVD',
    'SDTYFUJG',
    'QQQQWERT',
    'QWEF',
    'HH****88',
];

function menuPage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main', 'menuPage');

    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'MENU';
    mainDiv.appendChild(mainHeading);

    const menuList = document.createElement('ul');

    for (const menuItem of MENUITEMS) {
        let listItem = document.createElement('li');
        listItem.textContent = menuItem;
        menuList.appendChild(listItem);
    }

    mainDiv.appendChild(menuList);

    return mainDiv;
}

export default menuPage;
