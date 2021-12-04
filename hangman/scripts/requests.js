// CALLBACK ABSTRACTION diganti pake Promise
// Challange Fetch

// fetch di ganti dengan Async await
// const getPuzzle = async wordCount => {
//   const response = await fetch(
//     `https://puzzle.mead.io/puzzle?=wordCount=${wordCount}`
//   );

//   if (response.status === 200) {
//     const data = await response.json();
//     return data.puzzle;
//   } else {
//     throw new Error('Unable to get puzzle');
//   }
// };

const getPuzzle = async () => {
  const response = await fetch(
    'https://puzzle.mead.io/slow-puzzle?=wordCount=3, false'
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to get puzzle');
  }
};

//================================================================//

// Challange Async await
const getCountry = async countryCode => {
  const response = await fetch('https://restcountries.com/v2/all');

  if (response.status === 200) {
    const data = await response.json();
    return data.find(country => country.alpha2Code === countryCode);
  } else {
    throw new Error('Unable to get data country');
  }
};

// Challange Async await
const getLocation = async () => {
  const response = await fetch('http://ipinfo.io/json?token=def07aac40965f');

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error('Unable to get location');
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return (country = await getCountry(location.country));
};

/*
    const getPuzzleSync = () => {
    const requests = new XMLHttpRequest();
    requests.open('GET', 'https://puzzle.mead.io/slow-puzzle?wordCount=3', false);
    requests.send();

    if (requests.readyState === 4 && requests.status === 200) {
        const data = JSON.parse(requests.responseText);
        return data.puzzle;
    } else if (requests.readyState === 4) {
        throw new Error('Things did not go well');
    }
    };

*/
