import { GenericEntity } from "./genericEntity";

export class PerfilEntity extends GenericEntity {
    perfil: string;

    constructor() {
        super();
        this.perfil = '';
    }
}
