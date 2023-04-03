// Defining ourtTeam object

let ourTeam = 
[
    {
        name: "Team01",
        members:
        [
            {
                name: "Fődi Noel",
                birthday: 
                    {
                        year: 1996,
                        month: 2,
                        day: 25
                    },
                location:
                    {
                        country: "Hungary",
                        city: "Szeged"
                    },
                codingLevel: 12
            },
            {
                name: "Norbert Richter",
                birthday: 
                    {
                        year: 1994,
                        month: 12,
                        day: 27
                    },
                location: 
                    {
                        country: "Hungary",
                        city: "Szentendre"
                    },
                codingLevel: 15
            },
            {
                name: "Orosz Péter",
                birthday: 
                    {
                        year: 1988,
                        month: 5,
                        day: 9
                    },
                location: 
                    {
                        country: "Hungary",
                        city: "Érd"
                    },
                codingLevel: 20
            },
            {
                name: "Dávid Szokolóczi",
                birthday: 
                    {
                        year: 2000,
                        month: 10,
                        day: 21
                    },
                location: 
                    {
                        country: "Hungary",
                        city: "Balassagyarmat"
                    },
                codingLevel: 28
            }
        ]
    }
]

//----------------The youngest member----------------
let youngestMemberName = ourTeam[0].members[0].name;
let youngestMember = ourTeam[0].members[0].birthday.year;

for (let i = 1; i < ourTeam[0].members.length; i++) {
    if (ourTeam[0].members[i].birthday.year > youngestMember) {
        youngestMemberName = ourTeam[0].members[i].name;
        youngest = ourTeam[0].members[i].birthday.year;      
    }
}

console.log("The youngest member is our team: " + youngestMemberName);



//----------------The oldest member----------------
let oldestMemberName = ourTeam[0].members[0].name;
let oldestMember = ourTeam[0].members[0].birthday.year;

for (let i = 1; i < ourTeam[0].members.length; i++) {
    if (ourTeam[0].members[i].birthday.year < youngestMember) {
        youngestMemberName = ourTeam[0].members[i].name;
        youngest = ourTeam[0].members[i].birthday.year;      
    }
}

console.log("The oldest member is our team: " + youngestMemberName);

//----------------From the same location?----------------