import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { EquipePilotoComponent } from './equipe-piloto/equipe-piloto.component';
import { PilotosComponent } from './pages/pilotos/pilotos.component';
import { ResultadosPaginaComponent } from './resultados-pagina/resultados-pagina.component'; 




const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  { path: 'resultados-pagina', component: ResultadosPaginaComponent 

  },

  { path: 'equipe-piloto/equipes/:id', component: PilotosComponent 

  }, 
  { path: 'equipe-piloto', component: EquipePilotoComponent 

  },
  
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
