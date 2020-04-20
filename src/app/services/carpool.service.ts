import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Carpool } from '../models/carpool';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  constructor(private afs: AngularFirestore) { }

  public postCarpool(carpool: Carpool): void {
    this.afs.collection('carpools').add({
      carpoolName: carpool.carpoolName,
      hostName: carpool.hostName,
      startingPoint: carpool.staringPoint,
      destination: carpool.destination,
      scheduledDays: carpool.scheduledDays,
      leaveTime: carpool.leaveTime,
      returnTime: carpool.returnTime,
      make: carpool.make,
      model: carpool.model,
      year: carpool.year
    });
  }
}
