import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NodeTaskComponent } from './nodetask/nodetask.component';
import { NodeTaskService } from './service/nodetask.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {DataTableModule} from "angular-6-datatable";


@NgModule({
  declarations: [AppComponent, NodeTaskComponent],
  imports: [
    BrowserModule,
    DataTableModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],

  providers: [NodeTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
