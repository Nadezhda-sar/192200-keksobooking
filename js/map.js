'use strict';

var ADS = 8;
var TITLES = [
'Большая уютная квартира',
'Маленькая неуютная квартира',
'Огромный прекрасный дворец',
'Маленький ужасный дворец',
'Красивый гостевой домик',
'Некрасивый негостеприимный домик',
'Уютное бунгало далеко от моря',
'Неуютное бунгало по колено в воде'
];

var TYPES = ['palace', 'flat', 'house','bungalo'];

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

var CHECKIN = ['12:00', '13:00', '14:00'];

var CHECKOUT = ['12:00', '13:00', '14:00'];

var PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

var PRICE = {
  min: 1000,
  max: 1000000
};

var ROOMS = {
  min: 1,
  max: 5
};

var GUESTS = {
  min: 1,
  max: 10
};

var LOCATION = {
  X: {
    min: 300,
    max: 900
  },
  Y: {
    min: 130,
    max: 630
  }
};

var getRandomInterval = function (min, max) {
  return Math.floor(Math.random() * ((max + 1) - min) + min);
};

var getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createObject = function () {
  var adObject = [];
  var randomFeatures = [];
  var randomPhotos = [];
  for (var i = 0; i < ADS; i++) {
    randomFeatures[i] = sortArray(randomFeatures[i], FEATURES);
    randomFeatures[i] = getRandomInterval(1, randomFeatures[i].length);
    arrObj[i] = {};
    arrObj[i].author = {
      avatar: 'img/avatars/user' + (i + 1) + '.png'
    };
  arrObj[i].LOCATION = {
    x: getRandomInterval(300, 900),
    y: getRandomInterval(130, 630)
  };
  arrObj.offer = {
    title: TITLE[i],
    address: arrObj[i].location.x + ', ' + arrObj[i].location.y,
    price: getRandomInterval(1000, 1000000),
    type: getRandomItem(TYPES),
    rooms: getRandomInterval(1, 5),
    guests: getRandomInterval(1, 10),
    checkin: getRandomItem(CHECKIN),
    checkout: getRandomItem(CHECKOUT),
    featurs: randomFeatures[i],
    description: '',
    photos: sortArray(randomPhotos[i], PHOTOS)
  };
}

return arrObj;
};

var maps = document.querySelector('.map');
maps.classList.remove('map--faded');

var similarListElement = document.querySelector('map__pin');
var similarPinTemplate = document.querySelector('.map__card')
 .content
 .querySelector('.map__pins');

 for (var i = 0; i < 8; i++) {
   var pinElement = mapCard.cloneNode(true);

  pinElement ('style', 'left: ' + arrObj[i].LOCATION.x + 'px; top: ' + arrObj[i].LOCATION.y + 'px;');
  pinElement ('src', arrObj[i].author.avatar);
  pinElement ('alt', arrObj.offer.title);

   similarListElement.appendChild(pinElement);
 }
