import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from 'src/app/_models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pregled-studenata',
  templateUrl: './pregled-studenata.component.html',
  styleUrls: ['./pregled-studenata.component.scss']
})
export class PregledStudenataComponent implements OnInit {
  private FILTER = require('../../../assets/images/filter-icon.png');

  public tableHeaders: Array<object> = [
    {
      name: 'id',
      value: "#",
      sortableBy: 'id',
      type: 'text'
    },
    {
      name: 'name',
      value: 'Ime',
      sortableBy: 'name',
      type: 'text'
    },
    {
      name: 'last_name',
      value: 'Prezine',
      sortableBy: 'last_name',
      type: 'text'
    },
    {
      name: 'username',
      value: 'Korisnicko ime',
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
      name: 'details',
      type: 'i',
      class: 'material-icons details-row-table',
      icon: 'edit',
      tooltip: 'Detalji',
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

  public subjectId: Number;
  public students: Student[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.subjectId = this.route.snapshot.params.subjectId;

    this.studentService.getStudentsByYearBySubject(1, this.subjectId)
      .subscribe(
        data => {
          this.students = data;
          console.log(data);
        });
  }

  yearChanged(value) {
    this.studentService.getStudentsByYearBySubject(value, this.subjectId)
      .subscribe(
        data => {
          this.students = data;
        });
  }

  onTableAction(event: any) {
    switch (event.name) {
      case 'edit':
        // this.router.navigate([`/admin/professor/${event.row.id}`])
        break;
    }
  }
}
