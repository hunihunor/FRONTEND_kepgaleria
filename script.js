import Kartya from "./Kartya.js";
import { kepekLista } from "/adatlista.js";

const icons = $('.icons')

new Kartya(kepekLista[2],icons)


// function iconMegjelenit(){
//     const icons = $('.icons')
//     kepekLista.forEach(element => {
//         const imageIcon = $('<img>',{
//             src: element.url,
//             alt: element.cim
//         })
//         icons.append(imageIcon)
//     });
// }
// iconMegjelenit()