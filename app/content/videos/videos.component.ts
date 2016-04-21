/**
 * Created by ACH02 on 13/04/2016.
 */
import {Component} from 'angular2/core';
import {Card} from "../../components/card/card.component";
import {Youtube} from "../../services/youtube/youtube.services";
import {Loader} from "../../components/loader/loader.component";



@Component({
    templateUrl: 'app/content/videos/template.html',
    styleUrls: ['app/content/videos/style.css'],
    directives: [Card,Loader],
    providers: [Youtube],
    host: {'class' : 'ng-animate page'}

})

export class Videos {

    private _list: Object;
    private _query: String='';


    constructor(private _youtubeService: Youtube) { }

    getlist() {
        var tmp=this._youtubeService.list(this._query);
        tmp.subscribe(list => {this._list=list.json().items;})
    }
    ngOnInit() {
        this.getlist();
    }

    reload(){
        this.getlist();
    }

}



