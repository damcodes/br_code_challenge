import { Api } from './api.js';
import { HTML } from './helpers.js';


let showPeopleBtn = document.getElementById("show-people");
showPeopleBtn.addEventListener("click", showPeople); // remove listener for #1

let clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

async function showPeople() {
    let people = await getPeople(); // remove await #1
    let list = document.getElementById("people-list");
    people.forEach(person => HTML.addPersonListItem(person, list, showDogInfo));
    HTML.toggleHideElement(showPeopleBtn, true); //remove for #3
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
        HTML.toggleHideElement(showPeopleBtn, false); // remove for #3
        let peopleList = document.getElementById("people-list");
        let dogInfo = document.getElementById("dog-info");
        HTML.clear(peopleList, dogInfo);
    }
}