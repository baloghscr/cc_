import { Component, Input } from '@angular/core';  
import { ApiService } from '../../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({  
	selector: 'commentsComponent',  
	templateUrl: './comments.component.html',  
	styleUrls: ['./comments.component.scss']  
})  
export class CommentsComponent {
	@Input() postId;
	items;
	submitForm: FormGroup;
	highestId;
	comments=[];
	isShow = true;
	
	constructor(
		private api: ApiService,
		private formBuilder: FormBuilder
	) {
		this.createForm();
		this.submitForm = this.formBuilder.group({
			id: this.highestId,
			postId: this.postId,
			parent_id: null,
			user: '',
			date: new Date('YYYY-MM-DD'),
			content: ''
		});
	}

	createForm() {
		this.submitForm = this.formBuilder.group({
			user: ['', Validators.required ],
			content: ['', Validators.required ]
		});
	}

	toggleDisplay() {
		this.isShow = !this.isShow;
	}

	onSubmit(userData) {
		let date = new Date()
		userData.id = this.highestId + 1;
		userData.postId = this.postId;
		userData.parent_id = null;
		userData.date = date.getFullYear()  + "-" + date.getMonth() + "-" + (date.getDate());
		this.submitForm.reset();
		this.api.postComment(this.postId, userData).subscribe((response: any)=>{
			this.getAllComment();
			this.getComments();
			this.isShow = true;
			
		});
	}

	getComments() {
		this.api.getComments(this.postId).subscribe((response: any)=>{
			this.comments = response.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
			console.log(this.comments);
		});
	}

	getAllComment() {
		this.api.getAllComments().subscribe((response: any)=>{
			this.highestId = response.reduce(
				(max, character) => (character.id > max ? character.id : max),
				response[0].id
			);;
		});
	}
	ngOnInit() {
		this.getComments();
		this.getAllComment();
	}

}