import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostDisplayComponent } from './post/post-display/post-display.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostDeleteComponent } from './post/post-delete/post-delete.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './auth/login/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './error/error.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PostDisplayComponent,
    PostCreateComponent,
    PostDeleteComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
              {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
