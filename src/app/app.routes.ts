import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './pages/home/home.component';
import {LugaresComponent} from './pages/lugares/lugares.component';
import {DetalleComponent} from './pages/lugares/detalle.component';


const routes: Routes = [
	
	{path: '', component: HomeComponent},
	{path: 'lugares', component: LugaresComponent}
	{path: 'detalle/:id', component: DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {
}
