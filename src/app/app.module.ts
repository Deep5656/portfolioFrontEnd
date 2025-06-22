import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BaseComponent } from './components/base/base.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminPanelDashboardComponent } from './components/admin-panel-dashboard/admin-panel-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { TurncatePipe } from './pipes/turncate.pipe';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { DialogComponent } from './components/dialog/dialog.component';
import { HighChartComponent } from './high-chart/high-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BaseComponent,
    PortfolioComponent,
    AdminComponent,
    ContactComponent,
    AdminPanelComponent,
    AdminPanelDashboardComponent,
    AdminDashboardComponent,
    UpdateProjectComponent,
    ErrorComponent,
    TurncatePipe,
    DialogComponent,
    HighChartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
