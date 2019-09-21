import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.usersService.createEmployee(
      this.createForm.controls.username.value,
      this.createForm.controls.email.value,
      this.createForm.controls.password.value
    ).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
