import { IOClients } from "@vtex/api";
import Giphy from "./Giphy";

export class Clients extends IOClients {
    public get giphy() {
        return this.getOrSet('giphy', Giphy)
    }
}
