import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { Professor } from 'src/app/_models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.scss']
})
export class ListProfessorComponent implements OnInit {

  public tableHeaders: Array<object> = [
    {
      name: 'id',
      value: "#",
      sortableBy: 'id',
      type: 'text'
    },
    {
      name: 'name',
      value: 'First',
      sortableBy: 'name',
      type: 'text'
    },
    {
      name: 'username',
      value: 'Username',
      sortableBy: 'username',
      type: 'text'
    },
    {
      name: 'jmbg',
      value: 'JMBG',
      sortableBy: 'jmbg',
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

  public professors: Professor[] = [];
  public successfullyCreated: boolean = false;
  public successfullyUpdated: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    this.successfullyCreated = !!this.route.snapshot.queryParamMap.get("successfullyCreated");
    this.successfullyUpdated = !!this.route.snapshot.queryParamMap.get("successfullyUpdated");

    this.usersService.getProfessors()
      .subscribe(
        data => {
          this.professors = data;
        },
        error => {
          console.log(error);
        });
  }

  onTableAction(event: any) {
    switch (event.name) {
      case 'edit':
        this.router.navigate([`/admin/professor/${event.row.id}`])
    }
  }

  closeSuccessfullyCreatedAlert() {
    this.successfullyCreated = false;
  }

  closeSuccessfullyUpdatedAlert() {
    this.successfullyUpdated = false;
  }

}
