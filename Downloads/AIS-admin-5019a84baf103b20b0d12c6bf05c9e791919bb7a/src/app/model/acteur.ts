import { TypeActeur } from "./typeActeur";

export interface Acteur {
    idActeur:          string;
    resetToken?:        string;
    tokenCreationDate?: Date;
    codeActeur?:        string;
    nomActeur?:         string;
    adresseActeur?:     string;
    telephoneActeur?:   string;
    whatsAppActeur?:    string;
    latitude?:          string;
    longitude?:         string;
    photoSiegeActeur?:  string;
    logoActeur?:        string;
    niveau3PaysActeur?: string;
    password?:          string;
    dateAjout?:         string;
    dateModif?:         string;
    personneModif?:     string;
    localiteActeur?:    string;
    emailActeur?:       string;
    filiereActeur?:     string;
    statutActeur?:      boolean;
    typeActeur:        TypeActeur[];
    maillonActeur?:     string;
}