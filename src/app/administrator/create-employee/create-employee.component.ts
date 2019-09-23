import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/_services/users.service';
import { Employee } from 'src/app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    this.usersService.createEmployee(
      this.createForm.controls.username.value,
      this.createForm.controls.email.value,
      this.createForm.controls.password.value
    ).subscribe(
      () => {
        this.router.navigate(['/admin/employee'], { queryParams: { successfullyCreated: true } });
      },
      error => {
        console.log(error);
      });
  }
}
