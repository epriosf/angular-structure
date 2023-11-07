import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	message?: string;
	title = 'angular-structure';

	public listData: object = [
		{
			OrderID: '1',
			CustomerName: 'JavaScript',
			Freight:
				'JavaScript (JS) is an interpreted computer programming language. ',
			orderDate: '2023-02-02',
			shippedDate: '2023-02-02',
			shipCountry: 'UIO'
		},
		{
			OrderID: '2',
			CustomerName: 'TypeScript',
			Freight:
				'It is a typed superset of JavaScript that compiles to plain JavaScript.',
			orderDate: '2023-02-02',
			shippedDate: '2023-02-02',
			shipCountry: 'UIO'
		},
		{
			OrderID: '3',
			CustomerName: 'Angular',
			Freight:
				'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
			orderDate: '2023-02-02',
			shippedDate: '2023-02-02',
			shipCountry: 'UIO'
		},
		{
			OrderID: '4',
			CustomerName: 'React',
			Freight:
				'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
			orderDate: '2023-02-02',
			shippedDate: '2023-02-02',
			shipCountry: 'UIO'
		},

		{
			OrderID: '5',
			CustomerName: 'Vue',
			Freight:
				'A progressive framework for building user interfaces. It is incrementally adoptable.',
			orderDate: '2023-02-02',
			shippedDate: '2023-02-02',
			shipCountry: 'UIO'
		}
	];
	getMessages(): string {
		return 'Hola mundo v2';
	}
}
