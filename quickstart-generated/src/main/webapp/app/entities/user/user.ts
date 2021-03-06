//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-angular:src/main/webapp/app/entities/entity.ts.e.vm
//
import {Role} from '../role/role';

export class User {
    // Raw attributes
    id : number;
    login : string;
    password : string;
    email : string;
    isEnabled : boolean;
    civility : string;
    countryCode : string;
    firstName : string;
    lastName : string;
    creationDate : Date;
    creationAuthor : string;
    lastModificationDate : Date;
    lastModificationAuthor : string;
    version : number;
    // many-to-many
    roles : Role[];
}
