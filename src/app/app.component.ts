import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	title = 'Ponyville!';
	
	mail = [
		{ email: "randy@marsh.com", importance: true, subject: "Theeeeeeenks", content: "Creme Fraishe" },
		{ email: "bryan@griffin.com", importance: true, subject: "My Novel", content: "I like to sniff butts" },
		{ email: "rick@morty.com", importance: false, subject: "Atlantis", content: "The citadel is watching you" }
	];	

	thing = "red"

	bg = (function(){
			var a = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
			var colors = []
			for (var i=0; i< 10; i++){
				var color = "#"
				for (var b = 0; b < 6; b++){
					color += a[Math.floor(Math.random()*16)]
				}
				colors.push(color)
			}
			console.log(colors)
			return colors
		}())

	// const b = ['AliceBlue', 'Aqua', 'Bisque', 'Black', 'Brown', 'CadetBlue', 'Coral,' 'Cornsilk', 'DarkBlue', 'DarkGray', 'DarkOrchid', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateGray', 'DodgerBlue', 'FireBrick', 'ForestGreen', 'GoldenRod', 'GreenYellow', 'Green', 'Ingigo,' 'LawnGreen', 'LightCyan', 'LightGray', 'Linen', 'MediumPurple', 'MedidumSpringGreen', 'MediumVioletRed', 'Navy', 'OliveDrab', 'PaleTurqoise', 'PaleVioletRed', 'PaleGreen', 'Yellow']

	// var bg = function(){
	// 	console.log(b[Math.floor(Math.random()*b.length)])
	// 	return b[Math.floor(Math.random()*b.length)]
	// }

	// var changeBackground(): any {
	// 	var color = function(){
	// 		return b[Math.floor(Math.random()*b.length)]
	// 	}
	// 	return { 'background-color': color } 
	// }


}



