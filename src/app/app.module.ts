import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticateService } from './services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FoodArrayService } from './services/foodArray.service';
import { CaloriesCountService } from './services/caloriesCount.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireAuthModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebase
    )],
  providers: [
    StatusBar,
    SplashScreen,
    FoodArrayService,
    AuthenticateService,
    FoodArrayService,
    ReactiveFormsModule,
    CaloriesCountService,
    AngularFireDatabase,
  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
