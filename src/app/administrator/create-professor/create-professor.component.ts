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
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    // this.createForm.markAllAsTouched();

    this.createForm = this.formBuilder.group({
      name: ['', Validators.required],
      jmbg: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      biography: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    this.usersService.createProfessor(
      this.createForm.controls.name.value,
      this.createForm.controls.jmbg.value,
      this.createForm.controls.username.value,
      this.createForm.controls.biography.value,
      this.createForm.controls.email.value,
      this.createForm.controls.password.value,
    ).subscribe(
      () => {
        this.router.navigate(['/admin/professor'], { queryParams: { successfullyCreated: true } });
      },
      error => {
        console.log(error);
      });
  }
}
