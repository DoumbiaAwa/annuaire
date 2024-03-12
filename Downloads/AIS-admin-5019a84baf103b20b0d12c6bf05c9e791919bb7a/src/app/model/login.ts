import { TypeActeur } from "./typeActeur";

export interface Login{
    idActeur?:          string;
    resetToken?:        string;
    tokenCreationDate?: string;
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
    password:          string;
    dateAjout?:         string;
    dateModif?:         string;
    personneModif?:     string;
    localiteActeur?:    string;
    emailActeur:       string;
    filiereActeur?:     string;
    statutActeur?:      string;
    typeActeur?:        TypeActeur[];
    maillonActeur?:     string;
}