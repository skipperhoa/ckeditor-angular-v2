import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';
import { CKEditorModule } from 'ng2-ckeditor';
import { AppComponent }  from './app.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './service/login.service';
import {InfoUserComponent} from './login/info-user.component';
import {AddUserComponent} from './login/add-user.component';
import {CkeditorComponent} from './ckeditor/ckeditor.component';
const appRoutes:Routes = [
   {   path: '',
        redirectTo: '/list-user',
        pathMatch: 'full'
    },
    {path:"add-user",component:AddUserComponent},
    {path:"list-user",component:LoginComponent},
    {path:"info-user/edit/:id",component:InfoUserComponent},
    {path:"ckeditor",component:CkeditorComponent},
      
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule,Ng2PaginationModule,CKEditorModule,
   RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  declarations: [ AppComponent,LoginComponent,InfoUserComponent,AddUserComponent,CkeditorComponent],
  bootstrap:    [ AppComponent],
  providers: [ LoginService ],
})
export class AppModule { }
