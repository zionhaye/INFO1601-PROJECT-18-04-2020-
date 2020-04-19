fetch("https://webknox-recipes.p.rapidapi.com/recipes/search?type=main%20course&offset=0&number=10&cuisine=italian&diet=vegetarian&intolerances=egg%252C%20gluten&excludeIngredients=coconut&query=burger", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
		"x-rapidapi-key": "7b9574d4d0mshf7337d31709bf52p160578jsnc83679136b91"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});