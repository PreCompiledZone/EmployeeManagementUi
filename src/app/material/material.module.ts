import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

export const MaterialComponents=[

  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule

];


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})

export class MaterialModule {


      
 


 }
