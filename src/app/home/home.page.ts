import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
videoSource: any;
safeVideo: any;
  constructor(private _sanitizer: DomSanitizer) {}


  getValue(event){
     console.log('event fire..');
     this.safeVideo = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoSource);
  }


  download(){
    saveAs(this.videoSource);
  }
 

}
