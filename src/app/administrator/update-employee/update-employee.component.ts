import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/_models';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/_services/users.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  updateForm: FormGroup;
  public employee: Employee;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private usersService: UsersService) {
    this.updateForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.minLength(6), Validators.maxLength(100)]],
    });
  }

  ngOnInit() {
    this.usersService.getEmployee(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(
        data => {
          this.employee = data;

          this.updateForm.controls.username.setValue(this.employee.username);
          this.updateForm.controls.email.setValue(this.employee.email);
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    if (this.updateForm.invalid) {
      this.updateForm.markAllAsTouched();
      return;
    }

    this.usersService.updateEmployee(
      this.employee.id,
      this.updateForm.controls.username.value,
      this.updateForm.controls.email.value,
      this.updateForm.controls.password.value,
    ).subscribe(
      () => {
        this.router.navigate(['/admin/employee'], { queryParams: { successfullyUpdated: true } });
      },
      error => {
        console.log(error);
      });
  }

}
