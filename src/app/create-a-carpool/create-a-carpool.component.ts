import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { CarpoolService } from '../services/carpool.service'
import { Carpool } from '../models/carpool';

@Component({
  selector: 'app-create-a-carpool',
  templateUrl: './create-a-carpool.component.html',
  styleUrls: ['./create-a-carpool.component.css']
})
export class CreateACarpoolComponent implements OnInit {
  public carpoolForm: FormGroup;

  constructor(private fb: FormBuilder, private flashMessagesService: FlashMessagesService, private router: Router, private carpoolService: CarpoolService) {
    this.createForm();
   }

  ngOnInit(): void {
    console.log("form");
    console.log(this.carpoolService.getAllCarpools());
  }

  createForm() {
    this.carpoolForm = this.fb.group({
      carpoolName: [''],
      hostName: [''],
      startingPoint: [''],
      destination: [''],
      scheduledDays: [''],
      leaveTime: [''],
      returnTime: [''],
      make: [''],
      model: [''],
      year: ['']
    });
  }

  onSubmit() {
    console.log("submit");
    console.log(JSON.stringify(this.carpoolForm.get('leaveTime').value));
    let newCarpool = new Carpool({
      carpoolName: this.carpoolForm.get('carpoolName').value,
      hostName: this.carpoolForm.get('hostName').value,
      startingPoint: this.carpoolForm.get('startingPoint').value,
      destination: this.carpoolForm.get('destination').value,
      scheduledDays: this.carpoolForm.get('scheduledDays').value,
      leaveTime: this.carpoolForm.get('leaveTime').value,
      returnTime: this.carpoolForm.get('returnTime').value,
      make: this.carpoolForm.get('make').value,
      model: this.carpoolForm.get('model').value,
      year: this.carpoolForm.get('year').value
    });
    console.log(newCarpool);
    this.carpoolService.postCarpool(newCarpool);
    this.router.navigate(['createcarpool']);
    this.flashMessagesService.show("Carpool submitted successfully!", { cssClass: 'alert-success', timeout: 4000 });
    this.carpoolForm.reset();
    window.scroll(0, 0);
  }

}
