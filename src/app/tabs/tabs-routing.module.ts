import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'weather',
        loadChildren: () => import('../weather/weather.module').then(m => m.WeatherPageModule)
      },
      {
        path: 'search-history',
        loadChildren: () => import('../search-history/search-history.module').then(m => m.SearchHistoryPageModule)
      },
      {
        path: 'about-app',
        loadChildren: () => import('../about-app/about-app.module').then(m => m.AboutAppPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/weather',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
