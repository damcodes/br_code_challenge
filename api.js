export class Api {
    
    /**
     * 
     * @returns Promise containing an array of person objects 
     *          fetched from db.json
     */
    static async getAllPeople() {
        let res = await fetch("db.json");
        let data = await res.json();
        return data.people;
    }

    /**
     *      
     * @param {Number} id 
     * @returns Promise containing the dog object matching the 
     *          id param
     */
    static async getDogById(id) {
        let res = await fetch("db.json");
        let data = await res.json();
        return data.dogs.find(d => d.id === id);
    }
}