import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/_services/users.service';
import { Router } from '@angular/router';
import { Professor } from 'src/app/_models';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.scss']
})
export class CreateProfessorComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.createForm.markAllAsTouched();

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


    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/admin/professor']);

    this.usersService.createProfessor(
      this.createForm.controls.name.value,
      this.createForm.controls.jmbg.value,
      this.createForm.controls.username.value,
      this.createForm.controls.biography.value,
      this.createForm.controls.email.value,
      this.createForm.controls.password.value,
    ).subscribe(
      (data: Professor) => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
