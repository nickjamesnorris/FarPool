import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-a-carpool',
  templateUrl: './create-a-carpool.component.html',
  styleUrls: ['./create-a-carpool.component.css']
})
export class CreateACarpoolComponent implements OnInit {
  title = 'cac'; //create a carpool

  public carpoolForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
   }

  ngOnInit(): void {
  }

  createForm() {
    this.carpoolForm = this.fb.group({
      carpoolName: [],
      hostName: [],
      startingPoint: [],
      destination: [],
      scheduledDays: [],
      timeToLeave: [],
      timeToReturn: [],
      typeOfCar: []
    });
  }

  onSubmit() {
    console.log('submitted')
  }

}
