const dogName = "Solo";
const dogBreed = "minpin";

function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}
function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

// function exerciseDog(dogName, dogBreed) {
//     const exercises = []
//     for (let i = 0; i < exercises.length; i++) {
//         const fn = routine[i]
//         const exercise = fn(dogName, dogBreed)
//         exercises.push(exercise)
//     }
//     return exercises
// }

function exerciseDog(dog, breed) {
    const exercises = []
    routine.forEach(fn => {
        const exercise = fn(dog, breed)
        exercises.push(exercise)
    })
    return exercises
}

// iterate over routine array
// call each function in the array
// pass dogName and dogBreed to each function
// store return value of each function's call in a new array
// return that new array from exerciseDog

