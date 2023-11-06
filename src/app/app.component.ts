import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	message?: string;
	title = 'angular-structure';
	getMessages(): string {
		return 'Hola mundo v2';
	}
}
