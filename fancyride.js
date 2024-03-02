/*
Being a new Uber user, you have $20 off your first ride. You want to make the most out of it and drive in the fanciest car you can afford, without spending any money out of your own pocket.
There are 5 options, from the least to the most expensive: "UberX", "UberXL", "UberPlus", "UberBlack" and "UberSUV".

You know the length l of your ride in minutes and the distance d you need to travel in miles. Find the best car you can afford.

Example:
For l = 30 and fares = [0.3, 0.5, 0.7, 1, 1.3], the output should be fancyRide(l, fares) = "UberXL".
The cost for the ride in this car would be $15, which you can afford, and it's the fanciest car you can afford for this price.
*/

function solution(length, fares) {
    const credit = 20;
    const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

    for (let index = 0; index < fares.length; index++) {
        if (fares[index] * length > credit) {
            if (index === 0) return "No ride available.";
            return rides[index - 1];
        }
    }

    return rides[rides.length - 1];
}

// Fares shoud be an array of numbers and sorted in ascending order.
console.log(solution(30, [0.3, 0.5, 0.7, 1, 1.3]) );// → UberXL