import { Card } from './Card';

const cities = ['campeche', 'tampico', 'chetumal', 'tuxtla gutierrez', 'la paz baja california', 'oaxaca']

const $app = document.querySelector('#app');

export const CardList = async () => {

  return cities.map( city => Card(city).then( city => {
    if(!city) return
    $app.append(city)
  }))


}