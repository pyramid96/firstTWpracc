// Defining ourtTeam object
import {noelFav} from "C://Users//fodno//Desktop//projects//kukás//firstTWpracc//noeldata";
console.log(noelFav[0][0]["title"])



let ourTeam ={
    "name": "randomName",
    "members": [
        {
            "name": "Fődi Noel",
            "birthday": {
                "year": 1996,
                "month": 2,
                "day": 25
            },
            "location": {
                "country": "Hungary",
                "city": "Szeged"
            },
            "coding level": 12
        },
        {
            "name": "Norbert Richter",
            "birthday": {
                "year": 1994,
                "month": 12,
                "day": 27
            },
            "location": {
                "country": "Hungary",
                "city": "Szentendre"
            },
            "coding level": 15
        },
        {
            "name": "Orosz Péter",
            "birthday": {
                "year": 1988,
                "month": 5,
                "day": 9
            },
            "location": {
                "country": "Hungary",
                "city": "Érd"
            },
            "coding level": 20
        },
        {
            "name": "Dávid Szokolóczi",
            "birthday": {
                "year": 2001,
                "month": 6,
                "day": 29
            },
            "location": {
                "country": "Hungary",
                "city": "Szeged"
            },
            "coding level": 28
        }

    ]


};
console.log(ourTeam["members"][1]["coding level"])


// Adding the 'favourites' key to the member objects with 2 keys with the array values
ourTeam["members"][0]["favourites"] = {
    "favMovies": ["Fear and Loathing in Las Vegas", "Trainspotting", "Life of Brian", "The Big Lebowski"],
    "favBooks": ["Dune", "The Silence of the Lambs"]
};

ourTeam["members"][1]["favourites"] = {
    "favMovies": ["Fear and Loathing in Las Vegas", "Trainspotting", "Life of Brian", "The Big Lebowski"],
    "favBooks": ["Dune", "The Silence of the Lambs"]
};

ourTeam["members"][2]["favourites"] = {
    "favMovies": ["Fear and Loathing in Las Vegas", "Trainspotting", "Life of Brian", "The Big Lebowski"],
    "favBooks": ["Dune", "The Silence of the Lambs"]
};
ourTeam["members"][3]["favourites"] = {
    "favMovies": ["Fear and Loathing in Las Vegas", "Trainspotting", "Life of Brian", "The Big Lebowski"],
    "favBooks": ["Dune", "The Silence of the Lambs"]
};




console.log(ourTeam["members"][0]["favourites"]["favBooks"])

// Configuring the coding level key key
ourTeam["members"][0]["coding level"] = {
    "level": 12,
    "seniority": ""
}
if (ourTeam["members"][0]["coding level"] < 50){
    ourTeam["members"][0]["coding level"]["seniority"] = "junior"
}
else if (ourTeam["members"][0]["coding level"] >= 50 && )