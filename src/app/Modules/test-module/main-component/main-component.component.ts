import { Component, OnInit } from '@angular/core';
import { RTLService } from 'src/app/Services/GlobalLanguageService/RTLService';
import { City, State } from '../shared/dataservice.service';
import { TestFormDataService } from '../shared/test-form-data.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  states: State[];
  cities: City[];


  constructor(
    public rtlService: RTLService,
    public formService: TestFormDataService) {
    this.getFilteredCities = this.getFilteredCities.bind(this);
  }

  ngOnInit(): void {
  }
  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow' && e.dataField === 'CityID') {
      e.editorOptions.disabled = (typeof e.row.data.StateID !== 'number');
    }
  }
  setStateValue(rowData: any, value: any): void {
    rowData.CityID = null;
    (<any>this).defaultSetCellValue(rowData, value);
  }
  getFilteredCities(options: any) {
    return {
      store: this.formService.service.getCities(),
      filter: options.data ? ['StateID', '=', options.data.StateID] : null,
    };
  }


  ValidateRow(evnet: any) {


  }
  onRowInserted(event: any) {


  }
  onCellClick(event: any) {


  }
  onRowPrepared(e: any) {
    debugger;
    if (e.rowType == "data") {
      if (e.data.StateID === undefined || e.data.StateID === null)
        return;
      if (e.data.StateID === 1) {
        e.rowElement.style.backgroundColor = 'red';
      }
      else if (e.data.StateID === 2) {
        e.rowElement.style.backgroundColor = 'green';
      }
    }
  }
}
