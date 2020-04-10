import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({  
	selector: 'notFound',  
	templateUrl: './404.component.html',  
	styleUrls: ['./404.component.scss']  
})  
export class NotFoundComponent {
	counter$: Observable<number>;
	constructor(
		private router: Router
	){
		this.counter$ = timer(0,1000).pipe(
			take(this.base),
			map(() => --this.base)
		);
	}

	base = 11;
	private navigateTo : any;

	ngOnInit() {
		this.navigateTo = setTimeout(() => {
			this.router.navigate(['/']);
		}, 10000);
	}
	
	ngOnDestroy() {
		clearTimeout(this.navigateTo);
	}

}


