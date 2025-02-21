import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { OnlineComponent } from './online/online.component';
import { UserComponent } from './online/user/user.component';
import { OnlineStandardComponent } from './online/online-standard/online-standard.component';
import { LayerAdsComponent } from './online/layer-ads/layer-ads.component';
import { ContentComponent } from './online/content/content.component';
import { AdvertorialComponent } from './online/content/advertorial/advertorial.component';
import { StandaloneComponent } from './online/content/standalone/standalone.component';
import { BoxComponent } from './online/content/box/box.component';
import { FocusComponent } from './online/content/focus/focus.component';

export const routes: Routes = [
    { 
        path: 'online', 
        component: OnlineComponent, 
        children: [
             { path: '', component: UserComponent, pathMatch: 'full' },
             { path: 'standard', component: OnlineStandardComponent },
             { path: 'layer', component: LayerAdsComponent },
             { path: 'content', 
                component: ContentComponent,
                children: [
                    { path: '', redirectTo: 'advertorial', pathMatch: 'full' },
                    { path: 'advertorial', component: AdvertorialComponent },
                    { path: 'standalone', component: StandaloneComponent },
                    { path: 'box', component: BoxComponent },
                    { path: 'focus', component: FocusComponent },
                ]
             },
        ]
    },
    { path: '', component: StartComponent }
];
