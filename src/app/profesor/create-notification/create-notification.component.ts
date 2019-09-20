import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

class AngularEditorValidator {
  static required(): ValidatorFn {
    return (currentControl: AbstractControl): ValidationErrors|null => {
      if (currentControl.value === '<br>') {
        return {required: true};
      }
      return null;
    };
  }
}


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
  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      htmlContent: ['',  Validators.compose([Validators.required, AngularEditorValidator.required()])],
    });
  }
  onSubmit() {


    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
  }
}
