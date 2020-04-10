import { Component, OnInit } from '@angular/core';  
import { ApiService } from '../../services/api.service';

@Component({  
	selector: 'home',  
	templateUrl: './home.component.html',  
	styleUrls: ['./home.component.scss']  
})  
export class HomeComponent {
	posts = [];
	// comments = [];

	constructor(private api: ApiService) {}

	ngOnInit() {
		this.api.getPosts().subscribe((response: any[])=>{
			this.posts = response.sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
		});
		// this.api.getAllComments().subscribe((response: any)=>{
		// 	this.comments = response;
		// });
	}

}