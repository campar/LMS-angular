import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss']
})
export class CreateNotificationComponent implements OnInit {


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: false,
    height: '15rem',
    minHeight: '5rem',
    // maxHeight: 'auto',
    translate: 'no',
    enableToolbar: false,
    showToolbar: true,

    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    // fonts: [
    //   {class: 'arial', name: 'Arial'},
    //   {class: 'times-new-roman', name: 'Times New Roman'},
    //   {class: 'calibri', name: 'Calibri'},
    //   {class: 'comic-sans-ms', name: 'Comic Sans MS'} ],
      // customClasses: [
      //   { name: 'quote', class: 'quote', },
      //   { name: 'redText', class: 'redText' },
      //   { name: 'titleText', class: 'titleText', tag: 'h1', }, ],
        // uploadUrl: 'http://localhost:3000/api/v1/article/image/upload',
        sanitize: true,
        toolbarPosition: 'top',
      };
  constructor() { }

  ngOnInit() {
  }


}
