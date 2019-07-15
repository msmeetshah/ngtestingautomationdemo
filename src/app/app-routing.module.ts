import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogincmpComponent } from './logincmp/logincmp.component';


const routes: Routes = [

  {path : 'login', component: LogincmpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
