function contactPage() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main', 'contactPage');

    const mainHeading = document.createElement('h1');
    mainHeading.textContent = 'CONTACT';
    mainDiv.appendChild(mainHeading);

    const mainParagraph = document.createElement('p');
    mainParagraph.innerHTML = `Contact Odin restaurant via VECmail at 7499798273 VE/30 STAR with meme or CHAOS will COME`;
    mainDiv.appendChild(mainParagraph);

    return mainDiv;
}

export default contactPage;
