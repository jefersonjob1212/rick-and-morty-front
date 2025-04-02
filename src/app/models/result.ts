import { Info } from "./info";
import { Personagem } from "./personagem";

export class Result {
    public info: Info;
    public results: Personagem[];

    constructor(info: Info, results: Personagem[]) {
        this.info = info;
        this.results = results;
    }
}