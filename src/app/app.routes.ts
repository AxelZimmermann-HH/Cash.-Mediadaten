import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { OnlineComponent } from './online/online.component';
import { UserComponent } from './online/user/user.component';
import { OnlineStandardComponent } from './online/online-standard/online-standard.component';
import { LayerAdsComponent } from './online/layer-ads/layer-ads.component';

export const routes: Routes = [
    { 
        path: 'online', 
        component: OnlineComponent, 
        children: [
             { path: '', component: UserComponent, pathMatch: 'full' },
             { path: 'standard', component: OnlineStandardComponent },
             { path: 'layer', component: LayerAdsComponent },
        ]
    },
    { path: '', component: StartComponent }
];
