import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-a-carpool',
  templateUrl: './create-a-carpool.component.html',
  styleUrls: ['./create-a-carpool.component.css']
})
export class CreateACarpoolComponent implements OnInit {
  title = 'cac'; //create a carpool

  public carpoolForm: FormGroup;

  constructor(private fb: FormBuilder, private flashMessagesService: FlashMessagesService, private router: Router) {
    this.createForm();
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
    this.router.navigate(['createcarpool']);
    this.flashMessagesService.show("Carpool submitted successfully!", { cssClass: 'alert-success', timeout: 4000 });
    this.carpoolForm.reset();
    window.scroll(0, 0);
  }

}
