const categories = document.querySelector("#categories");
// Pobieram pierwszy element ul o id="categories"

const items = document.querySelectorAll(".item");
// Wybieram wszystkie elementy li o klasie item wewnątrz ul o id="categories"

console.log('Number of categories: ' + items.length);
// Wyświetlam w konsoli sumę klas w ul o id="categories"


items.forEach(function(item) {
// Dla każdego elementu li z klasą "item" wykonujemy funkcję


const categoryTitle = item.querySelector('h2').textContent;
// Pobieram nagłówek h2 wewnątrz elementu ul o id="categories" i jego tekst


  
const categoryElements = item.querySelectorAll('ul li');
// Pobieramy wszystkie elementy li w ul o id="categories"


const elementsCount = categoryElements.length;
// Pobieram ilość elementów klas li


console.log('Category: ' + categoryTitle);
console.log('Elements: ' + elementsCount);
});
// Wyświetlam nazwę kategorii oraz jej elementy w konsoli