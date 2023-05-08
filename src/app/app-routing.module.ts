import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './modules/info/info.component';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  {path:"about", component : InfoComponent},
  {path : '',component:MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
