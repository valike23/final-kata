import axios from 'axios';
import { HttpStatusCode } from 'axios';


const BASE_URL = '/';

console.log("the base url is", BASE_URL);

export interface IResponseType<M> {
    data: M | null;
    statusCode: HttpStatusCode;
    message: string;
}

export class HttpHelper {
    static async OPEN_POST<T, M>(url: string, body: T): Promise<IResponseType<M>> {
        try {
            const { data } = await axios.post(BASE_URL + url, body);

            return {
                data: data.data,
                statusCode: data.status_code,
                message: data.message
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {

                return {
                    data: null,
                    statusCode: error.response?.status || HttpStatusCode.InternalServerError,
                    message: error.message
                };
            } else {

                return {
                    data: null,
                    statusCode: HttpStatusCode.InternalServerError,
                    message: 'An unexpected error occurred'
                };
            }
        }
    }

    static async Get<M>(url: string): Promise<IResponseType<M>> {
        try {

            const { data } = await axios.get(BASE_URL + url);
            
            return {
                data: data.data,
                statusCode: data.status_code,
                message: data.message
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === HttpStatusCode.Unauthorized) {
                    location.href = '/';
                }
                return {
                    data: null,
                    statusCode: error.response?.status || HttpStatusCode.InternalServerError,
                    message: error.message
                };
            } else {

                return {
                    data: null,
                    statusCode: HttpStatusCode.InternalServerError,
                    message: 'An unexpected error occurred'
                };
            }
        }
    }



    static async PATCH<T, M>(url: string, body: T): Promise<IResponseType<M>> {
        try {

            const { data } = await axios.patch(BASE_URL + url, body);
            return {
                data: data.data,
                statusCode: data.status_code,
                message: data.message
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {

                return {
                    data: null,
                    statusCode: error.response?.status || HttpStatusCode.InternalServerError,
                    message: error.message
                };
            } else {

                return {
                    data: null,
                    statusCode: HttpStatusCode.InternalServerError,
                    message: 'An unexpected error occurred'
                };
            }
        }
    }
}
