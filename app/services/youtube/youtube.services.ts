/**
 * Created by ACH02 on 15/04/2016.
 */
import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";

@Injectable()
export class Youtube {


    private _URL: String='https://www.googleapis.com/youtube/v3/search?';
    private _APIKEY: String='&key=AIzaSyCOWJ-iJGcYyAHvFooGnr7IVDXY7JgTSdc';
    private _REGION: String='&regionCode=FR';
    private _TMP: Object;


    constructor(private _http: Http) {

    }
    
    list(query:String){
        return this._http.get(this._URL+'part=snippet&q='+query+this._APIKEY+this._REGION)


    }
}