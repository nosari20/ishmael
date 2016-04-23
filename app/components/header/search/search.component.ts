import {Component} from 'angular2/core';

@Component({
    selector: 'search',
    templateUrl: 'app/components/header/search/template.html',
    styleUrls: ['app/components/header/search/style.css']
})

export class Search {

    private _query:String='';


    clear(){
        this._query='';
    }

    search(){
        //TODO
    }
}
