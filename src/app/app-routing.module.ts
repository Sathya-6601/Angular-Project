import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { MainComponent } from './components/main/main.component'; 

const routes: Routes = [
  {path : '', component : MainComponent },
  {path : 'sentiment/:id', component : DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
