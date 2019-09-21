import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_services/users.service';
import { Professor } from 'src/app/_models/professor';

@Component({
  selector: 'app-list-professor',
  templateUrl: './list-professor.component.html',
  styleUrls: ['./list-professor.component.scss']
})
export class ListProfessorComponent implements OnInit {

  public professors: Professor[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getProfessors()
      .subscribe(
        data => {
          this.professors = data;
        },
        error => {
          console.log(error);
        });
  }

}
