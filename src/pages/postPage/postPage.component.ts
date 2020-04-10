
import { Component } from '@angular/core';  
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { post } from './post.model';

@Component({  
	selector: 'post',  
	templateUrl: './postPage.component.html',  
	styleUrls: ['./postPage.component.scss']  
})  
export class PostPageComponent {
	id: String;
	post = post;
	highestId;
	constructor(
		private api: ApiService,
		private activatedRoute: ActivatedRoute
		) {}

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			this.id = params['id'];
		});

		this.api.getSinglePost(this.id).subscribe((response: any)=>{
			this.post = response;
		});
	}
}
