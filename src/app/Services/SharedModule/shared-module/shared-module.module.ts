import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  DxButtonModule, DxChartModule, DxCheckBoxModule, DxDataGridModule, DxDateBoxModule, DxDropDownBoxModule, DxDropDownButtonModule, DxFileUploaderModule, DxFormModule, DxHtmlEditorModule, DxListModule, DxLoadIndicatorModule, DxLoadPanelModule, DxLookupModule, DxMapModule, DxMenuModule, DxMultiViewModule, DxNavBarModule, DxNumberBoxModule, DxPopupModule, DxProgressBarModule, DxRadioGroupModule, DxScrollViewModule, DxSelectBoxModule, DxSortableModule, DxTabPanelModule, DxTabsModule, DxTagBoxModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule, DxToolbarModule, DxTreeListModule, DxTreeViewModule, DxValidationGroupModule, DxValidatorModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { OAuthService } from '../../AuthService/OAuth2service';
import { ConfigurationReader } from '../../CofigurationReader/ConfigurationReader';
import { Toastrservice } from '../../ToastrService/ToastrService';
import { RTLService } from '../../GlobalLanguageService/RTLService';
import { FormStateService } from '../../FormStateService/FormStateService';
import { AuthorizationGuard } from '../../RouterGaurds/AuthorizationGuard';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nServiceService } from '../../i18nService/i18n-service.service';
import { AppRoutingModule } from 'src/app/appRoutes';


const DX_SHARED_MODULES = [
  DxButtonModule,
  DxListModule,
  DxNavBarModule,
  DxTemplateModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxMenuModule,
  DxFormModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxToolbarModule,
  DxTreeListModule,
  DxLoadIndicatorModule,
  DxDropDownBoxModule,
  DxDataGridModule,
  DxTextBoxModule,
  DxLookupModule,
  DxTreeViewModule,
  DxDateBoxModule,
  DxRadioGroupModule,
  DxHtmlEditorModule,
  DxTextAreaModule,
  DxDropDownButtonModule,
  DxLoadPanelModule,
  DxProgressBarModule,
  DxFileUploaderModule,
  DxTabsModule,
  DxTabPanelModule,
  DxValidatorModule,
  DxTagBoxModule,
  DxValidationGroupModule,
  DxMultiViewModule,
  DxMapModule,
  DxChartModule,
  DxSortableModule,
  DxScrollViewModule
];

const providers = [
  OAuthService,
  ConfigurationReader,
  Toastrservice,
  RTLService,
  FormStateService,
  AuthorizationGuard
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DX_SHARED_MODULES,
    FormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useClass: I18nServiceService,

      },
    }),
    AppRoutingModule
  ],
  providers: [providers],
  exports:[
      DX_SHARED_MODULES,
      FormsModule,
      CommonModule,
      TranslateModule,

    ]

})
export class SharedModuleModule { }
