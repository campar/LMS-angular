import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { Employee } from 'src/app/_models';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  public tableHeaders: Array<object> = [
    {
      name: 'id',
      value: "#",
      sortableBy: 'id',
      type: 'text'
    },
    {
      name: 'username',
      value: 'Username',
      sortableBy: 'username',
      type: 'text'
    },
    {
      name: 'email',
      value: 'email',
      sortableBy: 'email',
      type: 'text'
    },
    {
      name: 'edit',
      type: 'i',
      class: 'material-icons edit-row-rable',
      icon: 'edit',
      tooltip: 'Uredi',
      tooltipPosition: 'above'
    },
    {
      name: 'delete',
      type: 'i',
      class: 'material-icons',
      icon: 'delete_forever',
      tooltip: 'Obriši',
      tooltipPosition: 'above'
    }
  ]

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
