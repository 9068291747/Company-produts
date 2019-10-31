import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SDKBrowserModule } from './shared/sdk/';
import { ReactiveFormsModule } from'@angular/forms';
import { MaterialModule} from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { OneServices } from'./one/one.services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { ListComponent } from'./list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  { path: 'one', component: OneComponent },
  { path: 'list', component:ListComponent  },
  { path: 'edit/:id', component:EditComponent  },
]
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SDKBrowserModule.forRoot(),
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    

    
  ],
  providers: [OneServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
