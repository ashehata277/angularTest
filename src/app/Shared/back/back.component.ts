import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RTLService } from 'src/app/Services/GlobalLanguageService/RTLService';
@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(private location: Location, public rtlService: RTLService) { }

  ngOnInit(): void {
  }

  BackClicked = () => {
    this.location.back();
  }

}
