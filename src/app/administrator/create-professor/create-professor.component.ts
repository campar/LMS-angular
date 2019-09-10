import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/_services/users.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.scss']
})
export class CreateProfessorComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      jmbg: ['', Validators.required],
      username: ['', Validators.required],
      biography: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.usersService.createProfessor(
      this.createForm.controls.name.value,
      this.createForm.controls.jmbg.value,
      this.createForm.controls.username.value,
      this.createForm.controls.biography.value,
      this.createForm.controls.email.value,
      this.createForm.controls.password.value,
      ).pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
