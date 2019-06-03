import { Route, RouterModule } from '@angular/router';

import { PanierComponent } from './panier/panier.component';
import { FilmsContainerComponent } from './films-container/films-container.component';

const APP_ROUTE: Route[] = [
    { path: '', redirectTo: 'films', pathMatch: 'full'},
    {path: 'panier', component: PanierComponent},
    {path: 'films', component: FilmsContainerComponent},
];

export const AppRouting = RouterModule.forRoot(APP_ROUTE);
