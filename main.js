//Those are samples of regular meals of the day
const breakfast =   [
    ["coffee with milk, 2 eggs, 1 toast, 1 cereal bar"],
    ["orange juice, 2 slices of bacon, 2 slices of bread, 1 apple, yogurt"],
    ["tea, 1 biscuit, 2 cream crackers, pear fruit, whey protein "]
    ];

const lunch = [
    ["rice, beans, meat, and lettuce"],
    ["spaghetti, meatballs, egg salad"],
    ["risotto, beacon, caesar salad"]
];

const dinner = [
    ["chicken, salad, bread"],
    ["hamburger, salad, bread"],
    ["spaghetti, shrimp, sauce"]
];

//This function pics 3 random numbers to be used for each meal of the day. The result returns a message
// with 18 random possibilities of meals combinations
const dietGenerator = () => {
    let random1 = Math.floor(Math.random()*3);
    let random2 = Math.floor(Math.random()*3);
    let random3 = Math.floor(Math.random()*3);
    let breakfastR = breakfast[random1];
    let lunchR = lunch[random2];
    let dinnerR = dinner[random3];
    return `Your today's diet is ${breakfastR} for breakfast, ${lunchR} for lunch, and ${dinnerR} for dinner`
}

console.log(dietGenerator());