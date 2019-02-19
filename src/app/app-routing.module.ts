import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {HomeComponent} from './home/home.component';
import {SocialComponent} from './social/social.component';
import {SkillsComponent} from './skills/skills.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [{
  path: 'skills', component: SkillsComponent
},
  {
    path: 'socials', component: SocialComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
