import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { Employee } from 'src/app/_models';
import { ActivatedRoute, Router } from '@angular/router';

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
  public successfullyCreated: boolean = false;
  public successfullyUpdated: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.successfullyCreated = !!this.route.snapshot.queryParamMap.get("successfullyCreated");
    this.successfullyUpdated = !!this.route.snapshot.queryParamMap.get("successfullyUpdated");

    this.usersService.getEmployees()
      .subscribe(
        data => {
          this.employees = data;
        },
        error => {
          console.log(error);
        });
  }

  onTableAction(event: any) {
    switch (event.name) {
      case 'edit':
        this.router.navigate([`/admin/employee/${event.row.id}`])
    }
  }

  closeSuccessfullyCreatedAlert() {
    this.successfullyCreated = false;
  }

  closeSuccessfullyUpdatedAlert() {
    this.successfullyUpdated = false;
  }
}
