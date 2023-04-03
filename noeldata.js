let favBooks = [
    {
        "title": "Dune",
        "author": "Frank Herbert",
        "year": 1965,
        "isNewerThan2000": false,
        "age": 58,
        "characters": ["Paul Atreides", "Lady Jessica", "Stilgar", "Vladimir Harkonnen"]
    
    },
    {
        "title": "The Silence of the Lambs",
        "author": "Thomas Harris",
        "year": 1988,
        "isNewerThan2000": false,
        "age": 35,
        "characters": ["Clarice Starling", "Hannibal Lecter", "Jack Crawford", "Buffalo Bill"]
    }];
    
    
    let favMovies = [{
        "title": "Fear and Loathing in Las Vegas",
        "year": 1998,
        "rating": 7.5,
        "description":"Raoul Duke and Dr. Gonzo travel to Las Vegas for a series of psychedelic escapades.",
        "directors": ["Terry Gilliam", "Terry Gilliam"],
        "writers": ["Hunter S. Thompson", "Terry Gilliam", "Tony Grisoni"],
        "stars": ["Johnny Depp", "Benicio del Toro", "Tobey Maguire"],
        "genres": ["adventure", "comedy", "drama"]
    },
    
    
    {
        "title": "The Big Lebowski",
        "year": 1998,
        "rating": 8.1,
        "description":"The 'Dude' Lebowski, mistaken for a millionaire of the same name, " +
        "seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife.",
        "directors": ["Joel Coen", "Ethan Coen"],
        "writers": ["Joel Coen", "Ethan Coen"],
        "stars": ["Jeff Bridges", "John Goodman", "Julianne Moore"],
        "genres": ["comedy", "crime"]
    
    },
    
    {
        "title": "Life of Brian",
        "year": 1979,
        "rating": 8.0,
        "description":"Born on the original Christmas in the stable next door to Jesus Christ, " +
        "Brian of Nazareth spends his life being mistaken for a messiah.",
        "directors": ["Terry Jones", "Terry Jones"],
        "writers":["Graham Chapman", "John Cleese", "Terry Gilliam"],
        "stars": ["Graham Chapman", "John Cleese", "Michael Palin"],
        "genres": ["comedy", "drama"]
    },
    
    {
        "title": "Trainspotting",
        "year": 1996,
        "rating": 8.1,
        "description":"Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, " +
        "despite the allure of the drugs and influence of friends.",
        "directors": ["Danny Boyle", "Danny Boyle"],
        "writers":["Irvine Welsh", "John Hodge"],
        "stars": ["Ewan McGregor", "Ewen Brenmer", "Jonny Lee Miller"],
        "genres": ["drama", "comedy"]
    }];

console.log(favBooks[0]["isNewerThan2000"])

