import { forkJoin } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

const randomName$ = ajax('https://random-data-api.com/api/name/random_name');
const randomNation$ = ajax(
  'https://random-data-api.com/api/nation/random_nation'
);
const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

// randomName$.subscribe((nameResponse) =>
//   console.log(nameResponse.response.first_name)
// );
// randomNation$.subscribe((nationResponse) =>
//   console.log(nationResponse.response.capital)
// );
// randomFood$.subscribe((foodResponse) =>
//   console.log(foodResponse.response.dish)
// );

forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
  ([nameAjax, nationAjax, foodAjax]) =>
    console.log(
      `${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}`
    )
);
