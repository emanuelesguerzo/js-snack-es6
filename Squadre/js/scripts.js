const teams = [
    {
        name: "Stonewall Stormers",
        points: 0,
        fouls: 0
    },
    {
        name: "Dragon United",
        points: 0,
        fouls: 0
    },
    {
        name: "Hufflepuff",
        points: 0,
        fouls: 0
    },
    {
        name: "Slytherin",
        points: 0,
        fouls: 0
    },
    {
        name: "Gryffindor",
        points: 0,
        fouls: 0
    },
    {
        name: "Ravenclaw",
        points: 0,
        fouls: 0
    }
]

const getRandomNum = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
const teamsAndFouls = [];

for (let i = 0; i < teams.length; i++) {
    teams[i].points = getRandomNum(1, 10);
    teams[i].fouls = getRandomNum(1, 5);
    const curTeam = teams[i];

    const teamData = {
        name: curTeam.name,
        fouls: curTeam.fouls
    }

    teamsAndFouls.push(teamData);
}

console.log(teamsAndFouls);


