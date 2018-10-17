import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardContainerComponent } from './views/dashboard-container/dashboard-container.component';
import { ComputerCardComponent } from './components/computer-card/computer-card.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './reducers/app.effects';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//dashboard
//dashboard/1
// routing module
// const routes: Routes = [
//   {
//     path: '', component: '',
//     children: [
//       {
//         parh: '/:id', component: ''
//       }
//     ]
//   }
// ]


@NgModule({
  declarations: [
    AppComponent,
    DashboardContainerComponent,
    ComputerCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    MatCardModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
