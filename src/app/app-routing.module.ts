import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },
  {
    path: 'depaink',
    loadChildren: () => import('./depaink/depaink.module').then( m => m.DepainkPageModule)
  },
  {
    path: 'departamentos',
    loadChildren: () => import('./departamentos/departamentos.module').then( m => m.DepartamentosPageModule)
  },
  {
    path: 'nuestrosdepartamentos',
    loadChildren: () => import('./nuestrosdepartamentos/nuestrosdepartamentos.module').then( m => m.NuestrosdepartamentosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
