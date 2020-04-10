import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 

import { AppComponent } from './app.component';

// filters
import { StripHtmlPipe, MonogrammePipe } from '../helpers/customPipes';

// Pages
import { HomeComponent } from '../pages/home/home.component';
import { PostPageComponent } from '../pages/postPage/postPage.component';
import { NotFoundComponent } from '../pages/404/404.component';

// components
import { PostComponent } from '../components/post/post.component';
import { CommentsComponent } from '../components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    PostPageComponent,
    NotFoundComponent,

    PostComponent,
    CommentsComponent,

    StripHtmlPipe,
    MonogrammePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
