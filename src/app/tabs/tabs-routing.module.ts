import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../weather/weather.module').then(m => m.WeatherPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../search-history/search-history.module').then(m => m.SearchHistoryPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../about-app/about-app.module').then(m => m.AboutAppPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
