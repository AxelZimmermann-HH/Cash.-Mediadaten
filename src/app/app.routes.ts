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
import { Nl2Component } from './online/nl2/nl2.component';
import { Nl2InfosComponent } from './online/nl2/nl2-infos/nl2-infos.component';
import { Nl2FormatsComponent } from './online/nl2/nl2-formats/nl2-formats.component';
import { MobileComponent } from './online/mobile/mobile.component';
import { SoMeComponent } from './online/so-me/so-me.component';
import { ChannelsComponent } from './online/so-me/channels/channels.component';
import { LinkedinComponent } from './online/so-me/channels/linkedin/linkedin.component';
import { FacebookComponent } from './online/so-me/channels/facebook/facebook.component';
import { InstagramComponent } from './online/so-me/channels/instagram/instagram.component';
import { XingComponent } from './online/so-me/channels/xing/xing.component';
import { TiktokComponent } from './online/so-me/channels/tiktok/tiktok.component';
import { PodcastComponent } from './online/podcast/podcast.component';
import { VideoComponent } from './online/video/video.component';
import { WebinarComponent } from './online/webinar/webinar.component';


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
            { path: 'onvista', 
                component: Nl2Component,
                children: [
                    { path: '', redirectTo: 'coverage', pathMatch: 'full' },
                    { path: 'coverage', component: Nl2InfosComponent },
                    { path: 'formats', component: Nl2FormatsComponent },
                ]
            },
            { path: 'mobile', component: MobileComponent },
            { path: 'social', component: SoMeComponent },
            { path: 'social/channels', 
                component: ChannelsComponent,
                children: [
                    { path: '', redirectTo: 'linkedin', pathMatch: 'full' },
                    { path: 'linkedin', component: LinkedinComponent },
                    { path: 'facebook', component: FacebookComponent },
                    { path: 'instagram', component: InstagramComponent },
                    { path: 'xing', component: XingComponent },
                    { path: 'tiktok', component: TiktokComponent },
                ] },
            { path: 'podcast', component: PodcastComponent },
            { path: 'video', component: VideoComponent },
            { path: 'webinar', component: WebinarComponent },
        ]
    },
    { path: '', component: StartComponent }
    
];
