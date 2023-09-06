import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminPanelDashboardComponent } from './components/admin-panel-dashboard/admin-panel-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'about',
    component:AboutComponent,
    pathMatch:'full'
  },
  {
    path:'portfolio',
    component:PortfolioComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminComponent,
    pathMatch:'full'
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    children:[
      {
        path:'',
        component:AdminPanelComponent,
      },
      {
        path:'admin-panel-dash',
        component:AdminPanelDashboardComponent,
      },
      {
        path:'update-project/:id',
        component:UpdateProjectComponent
      }
    ]
  },
  {
    path:'contact',
    component:ContactComponent,
    pathMatch:'full'
  },
  {
    path:'update-project/:id',
    component:UpdateProjectComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:ErrorComponent,
    pathMatch:'full'
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
