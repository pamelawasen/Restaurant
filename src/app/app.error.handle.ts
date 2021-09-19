import { Response } from "@angular/http";
import { Observable } from "rxjs";

export class ErrorHandle{
    static handleError(error:Response | any){
        let errormessage:string
        if(error instanceof Response){
            errormessage = `Erro ${error.status} ao acessar a Url ${error.url} - ${error.statusText}`
        }else{
            errormessage = error.toString()
        }
        console.log(errormessage)
        return Observable.throw(errormessage);
        

    }
}