import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'life-cycle',
    loadChildren: () => import('./modules/life-cycle/life-cycle.module').then(m => m.LifeCycleModule)
  },
  {
    path: 'change-detection',
    loadChildren: () => import('./modules/change-detection/change-detection.module').then(m => m.ChangeDetectionModule)
  },
  {
    path: 'directive-study',
    loadChildren: () => import('./modules/directive-study/directive-study.module').then(m => m.DirectiveStudyModule)
  },
  {
    path: 'space',
    loadChildren: () => import('./modules/space/space.module').then(m => m.MySpaceModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsModule)
  },
  {
    path: 'tooltip',
    loadChildren: () => import('./modules/tooltip/tooltip.module').then(m => m.MyTooltipModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./modules/slider/slider.module').then(m => m.MySliderModule)
  },
  {
    path: 'animation',
    loadChildren: () => import('./modules/animation/animation.module').then(m => m.MyAnimationModule)
  },
  {
    path: 'inject',
    loadChildren: () => import('./modules/injector-study/inject.module').then(m => m.MyInjectModule)
  },
  {
    path: 'outlet',
    loadChildren: () => import('./modules/outlet/outlet.module').then(m => m.MyOutLetModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/form/myForm.module').then(m => m.MyFormMoudle)
  },
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
