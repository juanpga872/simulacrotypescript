import { ILogin } from "../models/ILogin";

export class PageController {
    url:string
    constructor(url:string) {
        this.url = url;
    }

   async login(data:ILogin,endPoint:string){
        const response = await fetch(`${this.url}${endPoint}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        })

        const token = response.json()
        return token
    }
}