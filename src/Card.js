import ColorThief from 'colorthief/dist/color-thief.modern.mjs'

const colorThief = new ColorThief();


const createCard = (data) => {

  const { location, current } = data;
  const { name, country } = location;
  const { temp_c, condition, wind_kph, wind_dir, pressure_in, humidity } = current;
  const { icon, text } = condition;



  // $ y $$ functions
  const $ = (selector) => document.createElement(selector);
  const $$ = (root, child) => root.append(child);

  // card
  const $card = $('article');
  $card.classList.add('card');

  // card-header
  const $cardHeader = $('div');
  $cardHeader.classList.add('card-header');

  // card-icon
  const $img = $('img');
  $img.src = `https:${icon}`;
  $img.alt = `images of weather api`;
  $img.crossOrigin = `Anonymous`;
  $img.classList.add('card-icon');

  // card-info
  const $cardInfo = $('div');
  $cardInfo.classList.add('card-info');

  const $h2 = $('h2');
  $h2.textContent = `${text}`;

  const $h1 = $('h1');
  $h1.textContent = `${temp_c}`;

  const $span = $('span');
  $span.textContent = 'º';

  const $h3 = $('h3');
  $h3.textContent = `${name}, ${country}`;

  // card-body
  const $cardBody = $('div');
  $cardBody.classList.add('card-body');

  const $cardBodyPropWind = $('div');
  $cardBodyPropWind.classList.add('card-body-prop');

  const $pCardBodyPropStatsWind = $('p');
  $pCardBodyPropStatsWind.textContent = `Wind`;
  $pCardBodyPropStatsWind.classList.add('card-body-stats');

  const $pCardBodyPropDataWind = $('p');
  $pCardBodyPropDataWind.textContent = `N 8 mph`;
  $pCardBodyPropDataWind.classList.add('card-body-data');

  const $cardBodyPropHumidity = $('div');
  $cardBodyPropHumidity.classList.add('card-body-prop');

  const $pCardBodyPropStatsHumidity = $('p');
  $pCardBodyPropStatsHumidity.textContent = `Humidity`;
  $pCardBodyPropStatsHumidity.classList.add('card-body-stats');

  const $pCardBodyPropDataHumidity = $('p');
  $pCardBodyPropDataHumidity.textContent = `52%`;
  $pCardBodyPropDataHumidity.classList.add('card-body-data');

  const $cardBodyPropPressure = $('div');
  $cardBodyPropPressure.classList.add('card-body-prop');

  const $pCardBodyPropStatsPressure = $('p');
  $pCardBodyPropStatsPressure.textContent = `Pressure`;
  $pCardBodyPropStatsPressure.classList.add('card-body-stats');

  const $pCardBodyPropDataPressure = $('p');
  $pCardBodyPropDataPressure.textContent = `30.33 in`;
  $pCardBodyPropDataPressure.classList.add('card-body-data');


  // APPEND CHILDS

  $$($cardBodyPropWind, $pCardBodyPropStatsWind);
  $$($cardBodyPropWind, $pCardBodyPropDataWind);
  $$($cardBodyPropHumidity, $pCardBodyPropStatsHumidity);
  $$($cardBodyPropHumidity, $pCardBodyPropDataHumidity);
  $$($cardBodyPropPressure, $pCardBodyPropStatsPressure);
  $$($cardBodyPropPressure, $pCardBodyPropDataPressure);

  $$($cardBody, $cardBodyPropWind);
  $$($cardBody, $cardBodyPropHumidity);
  $$($cardBody, $cardBodyPropPressure);

  $$($h1, $span);
  $$($cardInfo, $h2);
  $$($cardInfo, $h1);
  $$($cardInfo, $h3);

  $$($cardHeader, $img);
  $$($cardHeader, $cardInfo);

  $$($card, $cardHeader);
  $$($card, $cardBody);

  return $card;
};

const weatherApi = async (city) => {
  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + city;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '1592e28623msha1546bdbbb37bf4p1bec8djsn65cf0e56a3df',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const data = await createCard(result)
    return data;
  } catch (error) {
    console.log(error)
    return error.mensaje;
  }
}

export const Card = async ( city ) => {
  const data = await weatherApi(city);
  return data
};

{/* <div class="card">
<div class="card-header">
  <img class='card-icon' src="https://cdn.weatherapi.com/weather/64x64/day/116.png" alt="">
  <div class='card-info'>
    <h2>Sunny</h2>
    <h1>19<span>º</span></h1>
    <h3>Athens, Greece</h3>
  </div>
</div>
<div class="card-body">
  <div class="card-body-prop">
    <p class='card-body-stats'>Wind</p>
    <p class='card-body-data'>N 8 mph</p>
  </div>
  <div class="card-body-prop">
    <p class='card-body-stats'>Humidity</p>
    <p class='card-body-data'>52%</p>
  </div>
  <div class="card-body-prop">
    <p class='card-body-stats'>Pressure</p>
    <p class='card-body-data'>30.33 in</p>
  </div>
</div>
</div> */}