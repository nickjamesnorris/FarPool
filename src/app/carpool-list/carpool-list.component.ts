import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Carpool } from '../models/carpool';

@Component({
  selector: 'app-carpool-list',
  templateUrl: './carpool-list.component.html',
  styleUrls: ['./carpool-list.component.css']
})
export class CarpoolListComponent implements OnInit {
  @Input() carpoolList: Observable<Carpool[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
