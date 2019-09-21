import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { Employee } from 'src/app/_models';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getEmployees()
      .subscribe(
        data => {
          this.employees = data;
        },
        error => {
          console.log(error);
        });
  }
}
