import { kepekLista } from "/adatlista.js";

export default class Kartya{
    
    #kisIcon = {}

    constructor(kisIcon, szuloElem){
        this.#kisIcon = kisIcon
        this.szuloElem = szuloElem
        this.#iconMegjelenit()
    }
    
    #iconMegjelenit(){
        const imageIcon = $('<img>', {
            src: this.#kisIcon.url
        })
        
        this.szuloElem.append(imageIcon)
        
    }

}