
import { Filiere } from "./filiere";
import { Acteur } from "./acteur";

export interface CategorieProduit {
    idCategorieProduit:   string;
    codeCategorie:        string;
    libelleCategorie:     string;
    descriptionCategorie: string;
    statutCategorie:      string;
    personneModif:        string;
    dateAjout:            string;
    dateModif:            string;
    filiere:              Filiere[];
    acteur:               Acteur[];
}