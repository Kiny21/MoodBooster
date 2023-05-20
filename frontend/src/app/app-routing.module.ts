import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ActivityPageComponent } from './pages/activity-page/activity-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { PicturePageComponent } from './pages/picture-page/picture-page.component';
import { QuotePageComponent } from './pages/quote-page/quote-page.component';
import { StatPageComponent } from './pages/stat-page/stat-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'activity-page',component:ActivityPageComponent},
  {path: 'stat-page', component: StatPageComponent},
  {path: 'music-page', component: MusicPageComponent},
  {path: 'quote-page', component: QuotePageComponent},
  {path: 'video-page', component: VideoPageComponent},
  {path: 'game-page', component: GamePageComponent},
  {path: 'picture-page', component: PicturePageComponent},
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
