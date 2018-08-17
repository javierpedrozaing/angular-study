import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './pages/home/home.component';
import {LugaresComponent} from './pages/lugares/lugares.component';
import {DetalleComponent} from './pages/lugares/detalle.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CrearComponent } from './pages/crear/crear.component';
import { UpdateComponent } from './pages/update/update.component';


const routes: Routes = [
	
	{path: '', component: HomeComponent},
	{path: 'lugares', component: LugaresComponent},
	{path: 'detalle/:id', component: DetalleComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: 'crear', component: CrearComponent},
	{path: 'update/:id', component: UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {
}
