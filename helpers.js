export class HTML {

    /**
     * Creates a li element populated with the person's name
     * and a Dog Info button and appends the new element to the
     * list element param
     * @param {Object} person - Person object
     * @param {HTMLUListElement} list - List to append list item to
     */
    static addPersonListItem(person, list, callback) {
        let newLi = this.generateAndAppendListItem(list);
        this.generateAndAppendHeaderLabel(person.name, newLi, "h4");
        this.generateAndAppendButton("Dog Info", newLi, callback, { class: "dog-info-btn" }, { dogId: person.dogId });
    }

    /**
     * Creates a header element of size headerSize, sets the 
     * inner text to labelText, and appends the new header to 
     * parent element
     * @param {String} labelText 
     * @param {HTMLElement} parent 
     * @param {String} headerSize 
     */
    static generateAndAppendHeaderLabel(labelText, parent, headerSize) {
        let newLabel = document.createElement(headerSize);
        newLabel.innerText = labelText;
        parent.append(newLabel);
    }

    /**
     * Creats a new button element, sets the inner text to text,
     * adds click event listener to the button and sends event to callback,
     * sets class attribute to classAttr if provided, sets dataset 
     * attribute if dataset provided, and appends button to parent element
     * @param {String} text 
     * @param {HTMLElement} parent 
     * @param {Function} callback 
     * @param {Object} elementAttrs 
     * @param {Object} dataset 
     */
    static generateAndAppendButton(text, parent, callback, elementAttrs = null, dataset = null) {
        let newBtn = document.createElement("button");
        newBtn.innerText = text;
        if (elementAttrs) {
            for (let attr in elementAttrs) newBtn.setAttribute(attr, elementAttrs[attr]);
        }
        if (dataset) {
            let key = Object.keys(dataset)[0];
            newBtn.setAttribute(`data-${key}`, dataset[key]);
        }
        newBtn.addEventListener("click", callback);
        parent.append(newBtn);        
    }

    /**
     * Creates a new li element, sets it's inner text if text is provided, 
     * sets element attributes (ex: id, class, style) if elementAttrs object
     * is provided, appends the new li to the parent element, and returns the new li
     * @param {HTMLElement} parent 
     * @param {String} text 
     * @param {Object} elementAttrs 
     * @returns {HTMLLIElement}
     */
    static generateAndAppendListItem(parent, text = null, elementAttrs = null) {
        let newLi = document.createElement("li");
        if (text) newLi.innerText = text;
        if (elementAttrs) {
            for (let attr of elementAttrs) newLi.setAttribute(attr, elementAttrs[attr]);
        }
        parent.append(newLi);
        return newLi;
    }

    static renderDogInfo(dog, div) {
        this.generateAndAppendHeaderLabel(dog.name, div, "h2");
        this.generateAndAppendDogStatsList(dog, div);
    }

    static generateAndAppendDogStatsList(dog, parent) {
        let newList = document.createElement("ul");
        newList.setAttribute("id", "dog-stats-list");
        parent.append(newList);
        ["Breed", "Age"].forEach( attr => {
            let text = `${attr} - ${dog[attr.toLowerCase()]}`; //add += 1 for #2
            this.generateAndAppendListItem(newList, text);
        });
    }

    //remove for #3
    static toggleHideElement(element, shouldHide) {
        !!shouldHide ? element.setAttribute("hidden", "hidden") : element.removeAttribute("hidden");
    }

    /**
     * Iterates over and clears inner html of HTMLElements in elements
     * @param {Array} elements 
     */
    static clear(...elements) {
        for (let el of elements) {
            el.innerHTML = null;
        }
    }
}