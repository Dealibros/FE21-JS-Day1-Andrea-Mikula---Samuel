// function crystalGazer (numbchild, partner, loc, job ) {
//     return (`You will be a ${job} in ${loc} and married to ${partner} with ${numbchild}`);    
// }

// console.log(crystalGazer(4, "Juan", "Vienna", "Webdeveloper"));


// // -----------------------------------------------------------------------------------------------------
// function ageCalculator(Birth, Year) {
//     let age = Year - Birth;
//     return (`You are either ${age-1} or ${age}`)
// }

// document.write(ageCalculator(1990, 2021));


// //-------------------------------------------------------------------------------------

// function ageCalculator(Birth) {
//     let d = new Date();
//     let age = d.getFullYear() - Birth;
//     return (`You are either ${age - 1} or ${age}`);
    
// }

// document.write(ageCalculator(1990));


// ---------------------------------------------------------------------------------

// let fahr = (celsius) => {
//     let a = Math.PI / 180;
//     let rad = celsius * a;
//     return rad;
// }

// document.write(fahr(90));

// --------------------------------------------------------------------------------------

// let calc = (width, height, depth) => {
//     let area = width * height;
//     let vol = width * height * depth;
//     return (`The area of the box is: ${area}`+"<br>"+`The volume of the box is: ${vol}`);
// }
// document.write(calc(7,2,5));

// -----------------------------------------------------------------------------------------
// ->non-anonymous arrow-function:
// let capitalize = (name) => {
//     let res = name.charAt(0).toUpperCase() + name.slice(1);
//     return (res);
// };
// document.write(capitalize("hello vienna"));

// ->non-anonymous "normal"-function
// function capitalize (name) {
//     let res = name.charAt(0).toUpperCase() + name.slice(1);
//     return (res);
// }
// document.write(capitalize("coding is hard"))

// ->anonymous "normal"-function
// let capitalize = (function() {
//     let name = "i am a webdeveloper";
//     let res = name.charAt(0).toUpperCase() + name.slice(1);
//     let textp = document.write(res);
//     return (textp);
// }());

// 
// --------------------------------------------------------------------------------

// let grades = (math,phy,eng) => {
//     let sum = math + phy + eng;
//     let av = sum / 3;
//     return (`Sum: ${sum}`+"<p>"+`Average: ${av}`);
// }
//     document.write(grades(3,4,5));

// ----------------------------------------------------------------------
