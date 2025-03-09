import { HttpStatusCode } from "axios";

export class ResponseHelper {
    static handleSuccess(data: any, json: any){
        return json({
            data, status_code: HttpStatusCode.Ok, message: 'ok'
        })
    }
}