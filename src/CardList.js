import { Card } from './Card';

const cities = ['campeche', 'toronto', 'madrid', 'pekin', 'chile', 'rio de janeiro']

const $app = document.querySelector('#app');

// CardList().then( child => $app.append(child))

export const CardList = async () => {

  // const cardInfo = await Card('campeche')
  // return cardInfo

  cities.map( city => Card(city).then( city => $app.append(city)))


}