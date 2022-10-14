import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";


@Injectable()
export class Toastrservice{
        constructor(private toastrService : ToastrService ){}

        success(message:string , title :string){
            this.toastrService.success(message,title,{
               timeOut:3000,
               closeButton:false,

            });
        }
        info(message:string , title :string){
            this.toastrService.info(message,title,{
                timeOut:3000,
                closeButton:false,

             });
        }
        warning(message:string , title :string){
            this.toastrService.warning(message,title,{
                timeOut:3000,
                closeButton:false,
             });
        }
        error(message:string , title :string){
            this.toastrService.error(message,title,
                {
                    timeOut:3000,
                    closeButton:false,
                 });
        }
}
