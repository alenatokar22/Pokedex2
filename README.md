# Pokedex2
Запити виконувались фетчем. 
const Base_URL = "https://pokeapi.co/api/v2/pokemon/";
const Pokemons_URL = `${Base_URL}?limit=12`;

Використовувались хуки: useState, useEffect. Є обробник помилок. Були зроблені мобільна та веб-версія з використанням флексу та гридів. 

На сторінці з покемонами зробила відображення 12 покемонів: Картинка, ім'я та тип.
Клікнувши на окремого персонажа йде запит по окремому персонажу з більш детальною інформацією про нього.

Кнопка загружає щє більше покемонів.  
