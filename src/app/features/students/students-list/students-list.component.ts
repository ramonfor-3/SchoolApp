import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  student: any ={}
  constructor(private studentService: StudentsService) { }

  ngOnInit() {
      this.getAll()
  }

  getAll(){
    this.studentService.GetAll().subscribe((resp:any )=>{
      console.log(resp)
      this.student = resp
    })
  }

}
