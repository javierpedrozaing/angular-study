import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './pages/home/home.component';
import {LugaresComponent} from './pages/lugares/lugares.component';


const routes: Routes = [
	
	{path: '', component: HomeComponent},
	{path: 'lugares', component: LugaresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {
}
