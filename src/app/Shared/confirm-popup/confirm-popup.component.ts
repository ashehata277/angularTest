import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.css']
})
export class ConfirmPopupComponent implements OnInit {
  @Output() resultEventEmitter : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output("Cancelled") CancelledClickedEventEmitter : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  isVisible :boolean =  false ;
  ngOnInit(): void {
  }
  ConfirmClicked() {
    this.resultEventEmitter.emit(true);

  }

  CancelClicked(){
    this.resultEventEmitter.emit(false);
  }
}
