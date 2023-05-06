import { Card } from './Card';




  const $ = (selector) => document.createElement(selector);
  const $$ = (root, child) => root.append(child);

  const $app = document.querySelector('#app');

  const $header = $('header');
  const $main = $('main');

  $$($app, $header);
  $$($app, $main);

  const $input = $('input');

  const $btn = $('button');
  $btn.textContent = 'Añadir ciudad'

  $$($header, $input);
  $$($header, $btn);

  $btn.addEventListener('click', () => {
    const city = $input.value;
    Card(city).then(city => {
      if (!city) return;

      $$($main, city);
      $input.value = ''
    })
  })

export const CardList = async () => {


};