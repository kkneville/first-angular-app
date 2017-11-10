import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	const a = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
	colors = [];
  	var title = 'Ponyville!';
	var mail = [
		{ email: "randy@marsh.com", importance: true, subject: "Theeeeeeenks", content: "Creme Fraishe" },
		{ email: "bryan@griffin.com", importance: true, subject: "My Novel", content: "I like to sniff butts" },
		{ email: "rick@morty.com", importance: false, subject: "Atlantis", content: "The citadel is watching you" }
	];

	var generate = function(){
		let color = "#"
		for (var i = 0; i < 6; i++){
			color += a[Math.floor(Math.random()*16)]
		}
		return color
	};
	
	var list = function(){
		for (var i=0; i< 10; i++){
			colors.push(generate())
		}
		return colors
	};



}



