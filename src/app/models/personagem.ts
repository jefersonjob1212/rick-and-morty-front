import { Localization } from "./localization";
import { Origin } from "./origin";

export class Personagem {
    public id?: number;
    public name?: string;
    public status?: string;
    public species?: string;
    public type?: string;
    public gender?: string;
    public origin?: Origin;
    public location: Localization;
    public image?: string;
    public episode?: string[];
    public url?: string;
    public created?: Date;

    constructor(
        id: number,
        name: string,
        status: string,
        species: string,
        gender: string,
        origin: Origin,
        location: Localization,
        image: string,
        episode: string[],
        url: string,
        created: Date
    ) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.gender = gender;
        this.origin = origin;
        this.location = location;
        this.image = image;
        this.episode = episode;
        this.url = url;
        this.created = created;
    }
}