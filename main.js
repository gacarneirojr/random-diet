//Those are samples of regular meals of the day
const breakfast =   [
    ["coffee with milk, 2 eggs, 1 toast, and 1 cereal bar"],
    ["orange juice, 2 slices of bacon, 2 slices of bread, 1 apple, and yogurt"],
    ["tea, 1 biscuit, 2 cream crackers, pear fruit, and whey protein"]
    ];

const lunch = [
    ["rice, beans, meat, and lettuce"],
    ["spaghetti, meatballs, egg salad"],
    ["risotto, beacon, and caesar salad"]
];

const dinner = [
    ["chicken, salad, and bread"],
    ["hamburger, salad, and bread"],
    ["spaghetti, shrimp, and sauce"]
];

//Generates a random number according to the size of the meal arrays.
const random  = (meal) => {
    return Math.floor(Math.random()*meal.length);
}

//This function pics 3 random numbers to be used for each meal of the day. The result returns a message
// with 18 random possibilities of meals combinations
const dietGenerator = () => {
    let breakfastR = breakfast[random(breakfast)];
    let lunchR = lunch[random(lunch)];
    let dinnerR = dinner[random(dinner)];
    return `Your today's diet is ${breakfastR} for breakfast, ${lunchR} for lunch, and ${dinnerR} for dinner`
}

console.log(dietGenerator());