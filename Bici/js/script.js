const bikes = [
    {
        name: "Thunderbolt 3000",
        weight: 12
    },
    {
        name: "Speedster Aero",
        weight: 10
    },
    {
        name: "Mountain Master",
        weight: 15
    },
    {
        name: "EcoRider 500",
        weight: 9
    },
    {
        name: "Urban Cruiser",
        weight: 14
    },
    {
        name: "Trail Blazer X",
        weight: 13
    }
]

let lightBike = bikes[4];

for(let i = 0; i < bikes.length; i++) {
    const curBike = bikes[i];

    if (curBike.weight < lightBike.weight) {
        lightBike = curBike;
    }

}

console.log(`La bici che pesa meno è la ${lightBike.name}, pesa ${lightBike.weight}Kg`)