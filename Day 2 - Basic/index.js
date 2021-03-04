function crystalGazer (numbchild, partner, loc, job ) {
    return (`You will be a ${job} in ${loc} and married to ${partner} with ${numbchild}`);    
}

console.log(crystalGazer(4, "Juan", "Vienna", "Webdeveloper"));


// // -----------------------------------------------------------------------------------------------------
// function ageCalculator(Birth, Year) {
//     let age = Year - Birth;
//     return (`You are either ${age-1} or ${age}`)
// }

// document.write(ageCalculator(1990, 2021));


// //-------------------------------------------------------------------------------------

function ageCalculator(Birth) {
    let d = new Date();
    let age = d.getFullYear() - Birth;
    return (`You are either ${age - 1} or ${age}`);
    
}

document.write(ageCalculator(1990));
