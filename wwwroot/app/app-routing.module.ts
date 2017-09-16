import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { testRoutingComponent } from './components/testRouting';

const appRoutes: Routes = [
    { path: 'testRouting', component: testRoutingComponent}
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,{
                enableTracing: true, // for debug only - remove in production
                useHash: true // routes are now #/<something>, we don't have to have wierd webserver stuff for this
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class AppRoutingModule {}