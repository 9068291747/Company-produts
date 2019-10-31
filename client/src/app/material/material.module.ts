import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
}  from '@angular/material';


const MaterialComponent = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
]

@NgModule({
  
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
