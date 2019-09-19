import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UsersService } from 'src/app/_services/users.service';
import { Professor } from 'src/app/_models/professor';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.scss']
})
export class UpdateProfessorComponent implements OnInit {

  updateForm: FormGroup;
  public professor: Professor;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private usersService: UsersService) {
    this.updateForm = this.formBuilder.group({
      name: ['', Validators.required],
      jmbg: ['', Validators.required],
      username: ['', Validators.required],
      biography: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.usersService.getProfessor(this.route.snapshot.paramMap.get('id')).pipe(first())
      .subscribe(
        data => {
          this.professor = data;

          this.updateForm.controls.name.setValue(this.professor.name);
          this.updateForm.controls.jmbg.setValue(this.professor.jmbg);
          this.updateForm.controls.username.setValue(this.professor.username);
          this.updateForm.controls.biography.setValue(this.professor.biography);
          this.updateForm.controls.email.setValue(this.professor.email);
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    this.usersService.updateProfessor(
      this.professor.id,
      this.updateForm.controls.name.value,
      this.updateForm.controls.jmbg.value,
      this.updateForm.controls.username.value,
      this.updateForm.controls.biography.value,
      this.updateForm.controls.email.value,
      this.updateForm.controls.password.value,
      ).pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
