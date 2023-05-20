import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MoodsComponent } from './moods/moods.component';
import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { StatPageComponent } from './pages/stat-page/stat-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PicturePageComponent } from './pages/picture-page/picture-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PictureService } from './services/picture.service';
import { VideoService } from './services/video.service';
import { QuoteService } from './services/quote.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './helpers/http.interceptor';



export const LOCALSTORAGE_TOKEN_KEY = 'angular_material_login_and_register_example';


export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoodsComponent,
    ActivityPageComponent,
    TitleComponent,
    StatPageComponent,
    MusicPageComponent,
    QuotePageComponent,
    VideoPageComponent,
    GamePageComponent,
    PicturePageComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    MainComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000', 'localhost:8080']
      }
    })
  ],
  providers: [PictureService, VideoService,QuoteService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
