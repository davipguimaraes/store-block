import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'
const YOUR_API_KEY = "dp2scGnUcDee5yLRI1qJMTRTAAJey9Tl";

export default class Giphy extends ExternalClient {
    constructor(context: IOContext, options?: InstanceOptions) {
        super('https://api.giphy.com/v1/gifs/', context,options)
    }

    public translate (term: string){
        return this.http.get('/translate', {
            params:{
                api_key:YOUR_API_KEY,
                s:term
            }
        })
    }
}