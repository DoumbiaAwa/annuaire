import { Acteur } from "./acteur";
export interface ZoneProduction{
    idZoneProduction:  string;
    codeZone:          string;
    nomZoneProduction: string;
    latitude:          string;
    longitude:         string;
    photoZone:         string;
    dateAjout:         string;
    dateModif:         string;
    personneModif:     string;
    statutZone:        string;
    // zone:              string;
    acteur:            Acteur[];
}