function findIngredients(obj, k) {
    for (var key in obj) {
      var value = obj[key];
  
      if (k == key) {
        return [k, value];
      }
  
      if (typeof(value) === "object" && !Array.isArray(value)) {
        var y = findIngredients(value, k);
        if (y && y[0] == k) return y;
      }
      if (Array.isArray(value)) {
        // for..in doesn't work the way you want on arrays in some browsers
        //
        for (var i = 0; i < value.length; ++i) {
          var x = findIngredients(value[i], k);
          if (x && x[0] == k) return x;
        }
      }
    }
  
    return null;
  }
  
  
var jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
var title = document.title;

var ingredients = findIngredients(jsonld, 'recipeIngredient');

var recipe = { 'name': title, 'ingredients':ingredients};
var jsonrecipe = JSON.stringify(recipe);
console.log(ingredients);
alert(title + ingredients);
  