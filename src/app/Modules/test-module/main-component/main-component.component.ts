import { Component, OnInit, ViewChild } from '@angular/core';
import { RTLService } from 'src/app/Services/GlobalLanguageService/RTLService';
import { City, State } from '../shared/dataservice.service';
import { TestFormDataService } from '../shared/test-form-data.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  states: State[];
  cities: City[];
  @ViewChild('grid') grid: DxDataGridComponent

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
  onSelectionChanged(event:any){
    debugger;
  }
  setStateValue(rowData: any, value: any): void {
    rowData.CityID = null;
    (<any>this).defaultSetCellValue(rowData, value);
  }
  getFilteredCities(options: any) {

    return {
      store: this.formService.service.getCities(),
      filter: options.data ? [
        ["StateID", "contains", [options?.data?.StateID]],
        "and",
        ["StateID", "=", options?.data?.StateID],

      ] : null
    };
  }

  changed(e: any) {
    this.grid.instance.cellValue(e.rowIndex, 'testtemplate', e.data.testtemplate);
  }
  ValidateRow(evnet: any) {


  }
  onRowInserted(event: any) {


  }
  onCellClick(event: any) {
    debugger;
    if (event.column.command === 'select' && event.data?.StateID === 1) {
      event.column.cellTemplate=null;
    }

  }

  onRowPrepared(e: any) {

  }
}
