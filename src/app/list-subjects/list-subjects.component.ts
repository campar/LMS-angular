import { Component, OnInit } from '@angular/core';
import { StudyProgrammeService } from 'src/app/_services/study-programme.service';
import { Subject } from 'src/app/_models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-subjects',
  templateUrl: './list-subjects.component.html',
  styleUrls: ['./list-subjects.component.scss']
})
export class ListSubjectsComponent implements OnInit {
  public tableHeaders: Array<object> = [
    {
      name: 'id',
      value: "#",
      sortableBy: 'id',
      type: 'text'
    },
    {
      name: 'name',
      value: 'Naziv',
      sortableBy: 'name',
      type: 'text'
    },
    {
      name: 'espb',
      value: 'ESPB',
      sortableBy: 'espb',
      type: 'text'
    },
    {
      name: 'required',
      value: 'Izborni predmet?',
      sortableBy: 'required',
      type: 'text'
    },
    {
      name: 'edit',
      type: 'i',
      class: 'material-icons text-primary',
      icon: 'edit',
      tooltip: 'Uredi',
      tooltipPosition: 'above'
    },
    {
      name: 'students',
      type: 'i',
      class: 'material-icons text-info',
      icon: 'people',
      tooltip: 'Studenti',
      tooltipPosition: 'above'
    },
    {
      name: 'details',
      type: 'i',
      class: 'material-icons',
      icon: 'keyboard_arrow_right',
      tooltip: 'Detalji',
      tooltipPosition: 'above'
    }
  ]

  public subjects: Subject[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private studyProgrammeService: StudyProgrammeService) { }

  ngOnInit() {
    // TO DO
    const professorId = 2;
    const programId = Number(this.route.snapshot.params.programId);

    this.studyProgrammeService.allSubjectOfProfesorOnProgramme(programId, professorId)
      .subscribe(
        data => {
          this.subjects = data;
        },
        error => {
          console.error(error);
        });
  }

  onTableAction(event: any) {
    switch (event.name) {
      case 'students':
        this.router.navigate([this.router.url + '/' + event.row.id + '/students'])
        break;
      case 'edit':
        // this.router.navigate([`/admin/professor/${event.row.id}`])
        break;
      case 'details':
        // this.router.navigate([`/admin/professor/${event.row.id}`])
        break;
    }
  }
}
