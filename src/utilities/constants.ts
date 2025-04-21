import {type Sections} from "./types";

export const PUBLIC_PATH = "";

export const SECTIONS: Record<number,Sections> = {
    0 :"navbar",
    1: "home" ,
    2: "about",
    3: "clothes",
    4: "ubication",
    5: "contact"
}

export const SECTIONS_INDEX: Record<Sections, number> = {
    navbar: 0,
    home: 1,
    about: 2,
    clothes: 3, 
    ubication: 4,
    contact: 5
}
