import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoGraphsComponent } from './components/do-graphs/do-graphs.component';
import { GetGraphsComponent } from './components/get-graphs/get-graphs.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'get-graphs'},
  {path:'get-graphs', component:GetGraphsComponent},
  {path: 'do-graphs', component: DoGraphsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
