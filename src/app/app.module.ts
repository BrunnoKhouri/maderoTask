import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './dashboard/user-list/edit-user/edit-user.component';
import { DeleteUserComponent } from './dashboard/user-list/delete-user/delete-user.component';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './dashboard/user-list/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserListComponent,
    EditUserComponent,
    DeleteUserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    EditUserComponent, DeleteUserComponent, CreateUserComponent   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
