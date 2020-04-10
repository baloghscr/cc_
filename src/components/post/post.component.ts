import { Component, Input } from '@angular/core';  

@Component({  
	selector: 'postComponent',  
	templateUrl: './post.component.html',  
	styleUrls: ['./post.component.scss']  
})  
export class PostComponent {
	@Input() data;
	constructor() {}

	ngOnInit() {

	}

}