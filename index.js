import { Api } from './api.js';
import { HTML } from './helpers.js';


let showPeopleBtn = document.getElementById("show-people");

let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

async function showPeople() {
    let people = getPeople(); 
    let list = document.getElementById("people-list");
    people.forEach(person => HTML.addPersonListItem(person, list, showDogInfo));
}

async function getPeople() {
    return await Api.getAllPeople();
}

async function showDogInfo(event) {
    let dogInfoDiv = document.getElementById("dog-info");
    clear(dogInfoDiv);
    let dogId = event.target.dataset.dogid;
    let dog = await Api.getDogById(dogId);
    HTML.renderDogInfo(dog, dogInfoDiv);
}

function clear(element = null) {
    if (element !== null && !(element instanceof Event)) {
        HTML.clear(element);
    } else {
        let peopleList = document.getElementById("people-list");
        let dogInfo = document.getElementById("dog-info");
        HTML.clear(peopleList, dogInfo);
    }
}