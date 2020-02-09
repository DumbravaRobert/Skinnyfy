import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  {  path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) }, 
  { path: 'feed', loadChildren: './tab1/tab1.module#Tab1PageModule'},
  { path: 'page', loadChildren: './tab1/tab1.module#Tab1PageModule' },
 
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
