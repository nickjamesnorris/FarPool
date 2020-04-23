import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Carpool } from '../models/carpool';
import { CarpoolService } from '../services/carpool.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public allCarpools: Observable<Carpool[]>;
  
  constructor(private carpoolService: CarpoolService) { }

  ngOnInit(): void {
    this.allCarpools = this.carpoolService.getAllCarpools();
  }

}
