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
import { Nl1Component } from './online/nl1/nl1.component';
import { Nl1InfosComponent } from './online/nl1/nl1-infos/nl1-infos.component';
import { Nl1ProductsComponent } from './online/nl1/nl1-products/nl1-products.component';
import { Nl1FormatsComponent } from './online/nl1/nl1-formats/nl1-formats.component';

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
             { path: '5vor5', 
                component: Nl1Component,
                children: [
                    { path: '', redirectTo: 'coverage', pathMatch: 'full' },
                    { path: 'coverage', component: Nl1InfosComponent },
                    { path: 'products', component: Nl1ProductsComponent },
                    { path: 'formats', component: Nl1FormatsComponent },
                ]
             },
        ]
    },
    { path: '', component: StartComponent }
];
