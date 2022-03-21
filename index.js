var IMAGEURL = "https://source.unsplash.com/random/250x200?sig=";
var CARDTEXT = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, eius.";
var CARDTITLETEXT = "RECIPE CREATION";
var CARDBACKINCLUDES = '<b>INCLUDES</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, odit, laudantium nesciunt sapiente rem sequi deleniti consectetur quos dicta earum repudiandae itaque.';
var CARDBACKNOTES = '<b>NOTES</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, odit, laudantium nesciunt sapiente rem sequi deleniti consectetur quos dicta earum repudiandae itaque.';
var CARDBACKPRICING = '<b>PRICING</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, odit, laudantium nesciunt sapiente rem sequi deleniti consectetur quos dicta earum repudiandae itaque.';
function createCard() {
    var CARDDIV = document.createElement('DIV');
    CARDDIV.setAttribute('class', 'card__item');
    var FRONTFACE = document.createElement('DIV');
    FRONTFACE.setAttribute('class', 'card__front');
    var CARDIMG = document.createElement('IMG');
    CARDIMG.setAttribute('src', "".concat(IMAGEURL).concat(Math.ceil(Math.random() * 100)));
    var CARDTITLE = document.createElement('DIV');
    CARDTITLE.setAttribute('class', 'card__title');
    CARDTITLE.innerHTML = CARDTITLETEXT;
    var CARDCONTENT = document.createElement('DIV');
    CARDCONTENT.setAttribute('class', 'card__text');
    CARDCONTENT.innerHTML = CARDTEXT;
    var CARDBTN = document.createElement('BUTTON');
    CARDBTN.innerHTML = 'Click to see more';
    var BACKFACE = document.createElement('DIV');
    BACKFACE.setAttribute('class', 'card__back');
    BACKFACE.innerHTML = "".concat(CARDBACKINCLUDES, "\n").concat(CARDBACKNOTES, "\n").concat(CARDBACKPRICING);
    FRONTFACE.appendChild(CARDIMG);
    FRONTFACE.appendChild(CARDTITLE);
    FRONTFACE.appendChild(CARDCONTENT);
    FRONTFACE.appendChild(CARDBTN);
    CARDDIV.addEventListener('click', function () {
        CARDDIV.classList.toggle('rotate');
    });
    CARDDIV.appendChild(FRONTFACE);
    CARDDIV.appendChild(BACKFACE);
    document.querySelector('main').appendChild(CARDDIV);
}
for (var i = 0; i < 10; i++) {
    createCard();
}
