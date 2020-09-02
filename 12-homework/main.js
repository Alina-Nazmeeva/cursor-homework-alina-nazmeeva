const BASE = 'https://swapi.dev/api/';

let areCharactersDisplayed = false;
let arePlanetsDisplayed = false;
let currentPage = 1;

const charactersPhotos = {
    'https://swapi.dev/api/people/1/': 'images/Luke Skywalker.jpg',
    'https://swapi.dev/api/people/2/': 'images/C-3PO.jpg',
    'https://swapi.dev/api/people/3/': 'images/R2-D2.jpg',
    'https://swapi.dev/api/people/4/': 'images/Darth Vader.jpg',
    'https://swapi.dev/api/people/5/': 'images/Leia Organa.jpg',
    'https://swapi.dev/api/people/10/': 'images/Obi-Wan Kenobi.jpg',
    'https://swapi.dev/api/people/13/': 'images/Chewbacca.jpg',
    'https://swapi.dev/api/people/14/': 'images/Han Solo.jpg',
    'https://swapi.dev/api/people/18/': 'images/Wedge Antilles.jpg',
    'https://swapi.dev/api/people/20/': 'images/Yoda.jpg',
    'https://swapi.dev/api/people/21/': 'images/Palpatine.jpg',
    'https://swapi.dev/api/people/22/': 'images/Boba Fett.jpg',
    'https://swapi.dev/api/people/23/': 'images/IG-88.jpg',
    'https://swapi.dev/api/people/24/': 'images/Bossk.jpg',
    'https://swapi.dev/api/people/25/': 'images/Lando Calrissian.jpg',
    'https://swapi.dev/api/people/26/': 'images/Lobot.jpg',
};

function getCharacter(config = {}){
    const filmNumber = document.getFilm.filmNumber.value;
    return axios.get(`${BASE}films/${filmNumber}/`).then((res) => {
        return res.data.characters;
    }).then((res) => {
        return Promise.all(res.map((character) => {
            const httpsCharacter = character.slice(0, 4) + 's' + character.slice(4);
            return axios.get(httpsCharacter, config).then((res) => {
                return res;
            }).catch((err) => {
                console.log(err);
                return;
            });       
        }));
    }).catch((err) => {
        throw new Error(`Request failed with status code ${err.response.status}`);
    });
}

function getGenderIcon(gender){
    if(gender === "male" || gender === "scraanwo") return "male-gender-ico";
    else if(gender === "female" || gender === "wwwoscraanwo") return "female-gender-ico";
    else return "none-gender-ico";
}

function displayCharacter(characters = []){
    const container = document.getElementById('info-area');
    container.innerHTML = '';
    document.getElementById('prev-button').setAttribute('hidden', 'true');
    document.getElementById('next-button').setAttribute('hidden', 'true');
    const charactersWrapper = document.createElement('div');
    charactersWrapper.className = 'characters';
    container.append(charactersWrapper);
    characters.forEach((character) => {
        if(character){
            const characterInfo = document.createElement('div');
            characterInfo.className = 'character-info';
            const characterPhoto = document.createElement('div');
            characterPhoto.className = 'character-photo';
            const characterText = document.createElement('div');
            characterText.className = 'character-text';
            if(!document.getElementById('wookiee-btn').checked){
                if(charactersPhotos[character.config.url]){
                    characterPhoto.innerHTML = `<img class = "photo" src="${charactersPhotos[character.config.url]}" alt="${character.data.name}">`;
                } else {
                    characterPhoto.innerHTML = `<img class = "photo" src="images/no-image.png" alt="${character.data.name}">`;
                }
                characterText.innerHTML = `
                    <p>Name: <strong>${character.data.name}</strong></p>
                    <p>Birth year: <strong>${character.data.birth_year}</strong></p>
                    <p>Gender: <strong class="${getGenderIcon(character.data.gender)}"></strong></p>`;
            } else {
                if(charactersPhotos[character.config.url]){
                    characterPhoto.innerHTML = `<img class = "photo" src="${charactersPhotos[character.config.url]}" alt="${character.data.whrascwo}">`;
                } else {
                    characterPhoto.innerHTML = `<img class = "photo" src="images/no-image.png" alt="${character.data.whrascwo}">`;
                }
                characterText.innerHTML = `
                    <p>Name: <strong>${character.data.whrascwo}</strong></p>
                    <p>Birth year: <strong>${character.data.rhahrcaoac_roworarc}</strong></p>
                    <p>Gender: <strong class="${getGenderIcon(character.data.rrwowhwaworc)}"></strong></p>`;
            }
            charactersWrapper.append(characterInfo);
            characterInfo.append(characterPhoto, characterText);
        }
    });
    areCharactersDisplayed = true;
    arePlanetsDisplayed = false;
}

document.getElementById('characters-btn').addEventListener('click', () => {
    if(!document.getElementById('wookiee-btn').checked){
        getCharacter().then(displayCharacter);
    } else {
        const config = {
            params: {
                format: 'wookiee'
            }
        };
        getCharacter(config).then(displayCharacter);
    }
});

function getPlanets(config){
    return axios(config).then((res) => {
        return res.data;
    }).catch((err) => {
        throw new Error(err);
    });
}

function displayPlanets(data){
    const container = document.getElementById('info-area');
    container.innerHTML = '';
    const table = document.createElement('table');
    table.setAttribute('id', 'table');
    container.append(table);
    let planets;
    if(!document.getElementById('wookiee-btn').checked){
        table.style.fontSize = '14px';
        planets = data.results;
        table.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Population</th>
                <th>Diameter, km</th>
                <th>Orbital Period, d</th>
                <th>Rotation Period, h</th>
                <th>Gravity</th>
                <th>Climate</th>
                <th>Terrain</th>
                <th>Surface Water, %</th>
            </tr>`;
        planets.forEach((planet) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${planet.name}</td>
                <td>${planet.population}</td>
                <td>${planet.diameter}</td>
                <td>${planet.orbital_period}</td>
                <td>${planet.rotation_period}</td>
                <td>${planet.gravity}</td>
                <td>${planet.climate}</td>
                <td>${planet.terrain}</td>
                <td>${planet.surface_water}</td>`;
            table.append(row);
        });
    } else {
        planets = [];
        if(typeof data === "string"){
            const dataArray = data.split("{");
            dataArray.shift();
            dataArray.shift();
            planets = dataArray.map(item => {
                if(item.slice(0, -1).endsWith("]")){
                    return JSON.parse('{' + item.slice(0, -2));
                } else {
                    return JSON.parse('{' + item.slice(0, -1));
                }           
            });
        } else {
            planets = data.rcwochuanaoc;
        }
        table.innerHTML = `
            <tr>
                <th>Whrascwo</th>
                <th>Akooakhuanraaoahoowh</th>
                <th>Waahrascwoaoworc, km</th>
                <th>Oorcrhahaoraan akworcahoowa, d</th>
                <th>Rcooaoraaoahoowh akworcahoowa, h</th>
                <th>Rrrcrahoahaoro</th>
                <th>Oaanahscraaowo</th>
                <th>Aoworcrcraahwh</th>
                <th>Churcwwraoawo ohraaoworc, %</th>
            </tr>`;
        planets.forEach((planet) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${planet.whrascwo}</td>
                <td>${planet.akooakhuanraaoahoowh}</td>
                <td>${planet.waahrascwoaoworc}</td>
                <td>${planet.oorcrhahaoraan_akworcahoowa}</td>
                <td>${planet.rcooaoraaoahoowh_akworcahoowa}</td>
                <td>${planet.rrrcrahoahaoro}</td>
                <td>${planet.oaanahscraaowo}</td>
                <td>${planet.aoworcrcraahwh}</td>
                <td>${planet.churcwwraoawo_ohraaoworc}</td>`;
            table.append(row);
        });
    }
    document.getElementById('prev-button').removeAttribute('hidden');
    document.getElementById('next-button').removeAttribute('hidden');
    areCharactersDisplayed = false;
    arePlanetsDisplayed = true;
}

function pagination(){
    const config = {
        method: 'GET',
        url: BASE + 'planets/',
        params : {
            page : currentPage
        }
    };
    
    document.getElementById('prev-button').addEventListener('click', () => {
        axios(config).then(() => {
            if(currentPage > 1){
                currentPage--;               
                
                if(!document.getElementById('wookiee-btn').checked){                   
                    config.params = {page : currentPage};                   
                    getPlanets(config).then(displayPlanets);
                } 
                if(document.getElementById('wookiee-btn').checked){
                    config.params = {page : currentPage, format : 'wookiee'};
                    getPlanets(config).then(displayPlanets);
                }
            }
        });
    });
    document.getElementById('next-button').addEventListener('click', () => {
        axios(config).then(() => {
            if(currentPage < 6){
                currentPage++;
                if(!document.getElementById('wookiee-btn').checked){
                    config.params = {page : currentPage};
                    getPlanets(config).then(displayPlanets);
                } 
                if(document.getElementById('wookiee-btn').checked){
                    config.params = {page : currentPage, format : 'wookiee'};
                    getPlanets(config).then(displayPlanets);
                }
            }
        });
    });
}
pagination();

document.getElementById('planets-btn').addEventListener('click', () => {
    const config = {
        method: 'GET',
        url: BASE + 'planets/',
        params: {
            page: 1
        }
    };
    if(!document.getElementById('wookiee-btn').checked){
        getPlanets(config).then(displayPlanets);
    } else {
        config.params.format = 'wookiee';
        getPlanets(config).then(displayPlanets);
    }
});

function wookieeTranslation(){
    const checkbox = document.getElementById('wookiee-btn');
    if(checkbox.checked){
        if(areCharactersDisplayed){
            const config = {
                params: {
                    format: 'wookiee'
                }
            };
            getCharacter(config).then(displayCharacter);
        } 
        if(arePlanetsDisplayed){
            const config = {
                method: 'GET',
                url: BASE + 'planets/',
                params: {
                    format: 'wookiee',
                    page: currentPage
                }
            };
            getPlanets(config).then(displayPlanets);
        }
    } 
    if(!checkbox.checked){
        if(areCharactersDisplayed){
            getCharacter().then(displayCharacter);
        } 
        if(arePlanetsDisplayed){
            const config = {
                method: 'GET',
                url: BASE + 'planets/',
                params: {
                    page: currentPage
                }
            };
            getPlanets(config).then(displayPlanets);
        }
    }
}
document.getElementById('wookiee-btn').addEventListener('click', wookieeTranslation);

axios.get(`${BASE}films/2`).then(console.log);