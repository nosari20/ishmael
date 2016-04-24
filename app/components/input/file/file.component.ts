import {Component, EventEmitter, Output, ElementRef} from 'angular2/core';
import {Fab} from "../../fab/fab.component.component";
import {MdInput} from "../input/input.component";
import {UPLOAD_DIRECTIVES} from "../../../services/upload/ng2-uploader";
@Component({
    selector: 'md-file',
    templateUrl: 'app/components/input/file/template.html',
    styleUrls: ['app/components/input/file/style.css'],
    directives: [Fab,MdInput,UPLOAD_DIRECTIVES]
})

export class File {
    @Output('click') open = new EventEmitter();
    options: Object = {
        url: 'http://ng2-uploader.com:10050/upload'
    };

    private file:any;
    private fileName:String="File";


    constructor(private _el: ElementRef){

    }
    openFile(){
        this._el.nativeElement.querySelector('input').click();
    }

    upload(data){
        this.file = data;
        this.fileName=this.file.originalName;
    }
}



