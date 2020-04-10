import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component'
import { PostPageComponent } from '../pages/postPage/postPage.component'
import { NotFoundComponent } from '../pages/404/404.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostPageComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
