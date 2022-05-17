import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        console.log(this.params.id);
        return `
        <h1>Country!!!!</h1> 
        `;
    }
}