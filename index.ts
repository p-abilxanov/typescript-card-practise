const IMAGEURL = `https://source.unsplash.com/random/250x200?sig=`;
const CARDTEXT = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, eius.";
const CARDTITLETEXT = "RECIPE CREATION";
const CARDBACKINCLUDES = '<b>INCLUDES</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, odit, laudantium nesciunt sapiente rem sequi deleniti consectetur quos dicta earum repudiandae itaque.';
const CARDBACKNOTES = '<b>NOTES</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, odit, laudantium nesciunt sapiente rem sequi deleniti consectetur quos dicta earum repudiandae itaque.';
const CARDBACKPRICING = '<b>PRICING</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, odit, laudantium nesciunt sapiente rem sequi deleniti consectetur quos dicta earum repudiandae itaque.';

function createCard() {
    const CARDDIV = document.createElement('DIV');
    CARDDIV.setAttribute('class', 'card__item');

    const FRONTFACE = document.createElement('DIV');
    FRONTFACE.setAttribute('class', 'card__front');

    const CARDIMG = document.createElement('IMG');
    CARDIMG.setAttribute('src', `${IMAGEURL}${Math.ceil(Math.random() * 100)}`);

    const CARDTITLE = document.createElement('DIV');
    CARDTITLE.setAttribute('class', 'card__title');
    CARDTITLE.innerHTML = CARDTITLETEXT;

    const CARDCONTENT = document.createElement('DIV');
    CARDCONTENT.setAttribute('class', 'card__text');
    CARDCONTENT.innerHTML = CARDTEXT;

    const CARDBTN = document.createElement('BUTTON');
    CARDBTN.innerHTML = 'Click to see more';

    const BACKFACE = document.createElement('DIV');
    BACKFACE.setAttribute('class', 'card__back');
    BACKFACE.innerHTML = `${CARDBACKINCLUDES}\n${CARDBACKNOTES}\n${CARDBACKPRICING}`;

    FRONTFACE.appendChild(CARDIMG);
    FRONTFACE.appendChild(CARDTITLE);
    FRONTFACE.appendChild(CARDCONTENT);
    FRONTFACE.appendChild(CARDBTN);

    CARDDIV.addEventListener('click', () => {
        CARDDIV.classList.toggle('rotate');
    });

    CARDDIV.appendChild(FRONTFACE);
    CARDDIV.appendChild(BACKFACE);
    document.querySelector('main').appendChild(CARDDIV);

}
for (let i = 0; i < 10; i++) {
    createCard();
}