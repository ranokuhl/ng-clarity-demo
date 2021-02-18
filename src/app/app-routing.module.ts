import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {path: '', component: ContentLayoutComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./modules/home/home.module')
        .then(m => m.HomeModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
