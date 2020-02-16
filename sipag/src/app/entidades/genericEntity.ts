export class GenericEntity {
    id: number;
    created: Date;
    modified: Date;
    createdUser: string;
    lastModifiedUser: string;

    constructor(){
        this.createdUser = '';
        this.lastModifiedUser = '';
    }
}
