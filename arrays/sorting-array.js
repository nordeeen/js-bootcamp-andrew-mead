// SORTING ARRAYS

const cityWorld = [
  {
    title: 'Tokyo',
    text: 'Jepang',
  },
  {
    title: 'Bangkok',
    text: 'Thailand',
  },
  {
    title: 'New York',
    text: 'United State of America',
  },
  {
    title: 'Jakarta',
    text: 'Indonesia',
  },
  {
    title: 'Istanbul',
    text: 'Turkey',
  },
];

const sortCity = function (cityWorld) {
  cityWorld.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortCity(cityWorld);
console.log(cityWorld);
