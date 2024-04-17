const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulIngridients = document.querySelector('#ingredients');
console.log(ulIngridients);
    // Pobieram pierwszy element ul o id="ingredients"

ingredients.forEach(function(product){
    //  Iteracja przez tablice ingredients

  const newLi = document.createElement("li");
    // tworzenie nowego elementu li

  newLi.textContent = product;
    // Nadanie tekstu nowego elementu li

  newLi.classList.add("item");
    // dodanie klasy item dla każdego elementu li

  ulIngridients.append(newLi);
    // Dodanie nowego elementu li

  console.log(newLi);
});
    
    

    


