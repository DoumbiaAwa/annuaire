import { Acteur } from "./acteur";

export interface Filiere{
    idFiliere:          string;
    codeFiliere:        string;
    libelleFiliere:     string;
    descriptionFiliere: string;
    statutFiliere:      string;
    dateAjout:          string;
    dateModif:          string;
    personneModif:      string;
    acteur:             Acteur[];
}