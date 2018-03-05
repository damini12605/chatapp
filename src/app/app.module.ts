import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule  } from  '@angular/forms';
import { HttpModule } from  '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

export const firebaseConfig =
{
  apiKey: "AIzaSyBreQPny7N1xcLlxdR3TIkoKSzgXcBu0MY",
  authDomain: "chatapp-279af.firebaseapp.com",
  databaseURL: "https://chatapp-279af.firebaseio.com",
  projectId: "chatapp-279af",
  storageBucket: "chatapp-279af.appspot.com",
  messagingSenderId: "735533697149"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
