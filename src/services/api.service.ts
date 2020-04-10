import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private host = "http://localhost:9001";

  constructor(
    private http: HttpClient
    ) { }

  public getPosts(){ 
		return this.http.get(`${this.host}/posts`);  
  }
  public getSinglePost(id){
		return this.http.get(`${this.host}/posts/${id}`);  
  }
  public getAllComments(){ 
		return this.http.get(`${this.host}/comments`);
  }
  public getComments(id){ 
		return this.http.get(`${this.host}/posts/${id}/comments`);
  }
  public postComment(id: String, comment: Object): Observable<Object> {
    return this.http.post(`${this.host}/posts/${id}/comments`, comment);
  }
}
