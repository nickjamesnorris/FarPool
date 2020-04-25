import { Component, OnInit, ViewChild, OnDestroy, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { CarpoolService } from '../services/carpool.service'
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Carpool } from '../models/carpool';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-create-a-carpool',
  templateUrl: './create-a-carpool.component.html',
  styleUrls: ['./create-a-carpool.component.css']
})
export class CreateACarpoolComponent implements OnInit {
  public carpoolForm: FormGroup;
  public hidden: boolean = true;

  // @ViewChild('startingPoint')
  // public startingPointRef: ElementRef;

  // /** Keeps the subscription to the user object */
  // private userSubscription: Subscription;

  constructor(private fb: FormBuilder, private flashMessagesService: FlashMessagesService, private router: Router, private carpoolService: CarpoolService, public userService: UserService, private afAuth: AngularFireAuth, private afs: AngularFirestore, private mapsAPILoader: MapsAPILoader, private cdRef: ChangeDetectorRef) {
    this.createForm();
  }

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      if (user != null) {
        console.log(user);
        this.hidden = false; //Show the form
        let startingPoint = document.getElementById('startingPoint') as HTMLInputElement;
        let destination = document.getElementById('destination') as HTMLInputElement;

        this.mapsAPILoader.load().then(() => {
          let startingPointAutocomplete = new google.maps.places.Autocomplete(startingPoint);
          let destinationAutocomplete = new google.maps.places.Autocomplete(destination);

          startingPointAutocomplete.addListener("place_changed", () => {
            let place = startingPointAutocomplete.getPlace();
            this.carpoolForm.get('startingPoint').setValue(place.formatted_address);
          });
          destinationAutocomplete.addListener("place_changed", () => {
            let place = destinationAutocomplete.getPlace();
            this.carpoolForm.get('destination').setValue(place.formatted_address);
          });
        });
      }
    });
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

  async onSubmit() {
    console.log("submission");

    let currentUser = await this.userService.getCurrentUser();
    let newCarpool = new Carpool({
      carpoolName: this.carpoolForm.get('carpoolName').value,
      host: currentUser,
      startingPoint: this.carpoolForm.get('startingPoint').value,
      destination: this.carpoolForm.get('destination').value,
      scheduledDays: this.carpoolForm.get('scheduledDays').value,
      leaveTime: this.carpoolForm.get('leaveTime').value,
      returnTime: this.carpoolForm.get('returnTime').value,
      make: this.carpoolForm.get('make').value,
      model: this.carpoolForm.get('model').value,
      year: this.carpoolForm.get('year').value
    });
    this.carpoolService.postCarpool(newCarpool);
    this.router.navigate(['createcarpool']);
    this.flashMessagesService.show("Carpool submitted successfully!", { cssClass: 'alert-success', timeout: 4000 });
    this.carpoolForm.reset();
    window.scroll(0, 0);
  }

}
