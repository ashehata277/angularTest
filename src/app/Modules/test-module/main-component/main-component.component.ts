import { Component, OnInit } from '@angular/core';
import { RTLService } from 'src/app/Services/GlobalLanguageService/RTLService';
import { City, Employee, Service, State } from '../shared/dataservice.service';
import { TestFormDataService } from '../shared/test-form-data.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  dataSource: Employee[];
  states: State[];
  cities: City[];


  constructor(private service: Service,
    public rtlService: RTLService,
    private dataService: TestFormDataService) {
    this.dataSource = this.service.getEmployees();
    this.states = this.service.getStates();
    this.cities = this.service.getCities();
    this.getFilteredCities = this.getFilteredCities.bind(this);
    this.dataService;
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
      store: this.cities,
      filter: options.data ? ['StateID', '=', options.data.StateID] : null,
    };
  }

}
