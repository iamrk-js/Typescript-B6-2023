let cl = console.log;

// interface means it deside structure only
// it does not create instance
// it does not hold value
// it just define data type

// literal type 
interface Ibird {
    type: "bird";
    flyingSpeed: number;
}
interface Ihorse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Ibird | Ihorse;

// function moveAnimal(animal : Animal){
//     if("flyingSpeed" in animal){
//         cl(animal.flyingSpeed)
//     }
//     if("runningSpeed" in  animal){
//         cl(animal.runningSpeed)
//     }
// }

// function moveAnimal(animal: Animal) {
//     if (animal.type === "bird") {
//         cl(animal.flyingSpeed)
//     }
//     if (animal.type === "horse") {
//         cl(animal.runningSpeed)
//     }
// }

function moveAnimal(animal: Animal) {
    switch(animal.type){
        case "bird" : cl(`Flying with speed ${animal.flyingSpeed}`)
        break;
        case "horse" : cl(`Running with speed ${animal.runningSpeed}`)
    }
}

moveAnimal({ type: "bird", flyingSpeed: 120 })
moveAnimal({ type: "horse", runningSpeed: 1200 })