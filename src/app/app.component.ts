import { Component, LOCALE_ID } from '@angular/core';
import { DatePine } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	title = 'Passing Data';
	subtitle = "Angular and Typescript";
	
	mail = [
		{ email: "randy@marsh.com", importance: true, subject: "Theeeeeeenks", content: "Creme Fraishe" },
		{ email: "bryan@griffin.com", importance: true, subject: "My Novel", content: "I like to sniff butts" },
		{ email: "rick@morty.com", importance: false, subject: "Atlantis", content: "The citadel is watching you" }
	];	

	bg = (function(){
			var a = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
			var colors = []
			for (var i=0; i< 100; i++){
				var color = "#"
				for (var b = 0; b < 6; b++){
					color += a[Math.floor(Math.random()*16)]
				}
				colors.push(color)
			}
			console.log(colors)
			return colors
		}())

	thing = function(){
			var a = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];
			var color = "#"
			for (var b = 0; b < 6; b++){
				color += a[Math.floor(Math.random()*16)]
			}
			return color
		}

	num: number = 1;

	logNum(){
		console.log(this.num)
	}

	increaseNum() {
		this.num = this.num * 2;
	}

	zones = {
		tokyo: '+0900',
		paris: '+0000',
		dallas: '-0600',
		manila: '+0800',
		beijing: '+0800',
		bangkok: '+0700',
		newyork: '-0400',
		pretoria: '+0200',
		istanbul: '+0300',
		newdehli: '+0530',
		melburne: '+1000',
		grenwich: '+0000',
		wellington: '+1300',
	}

	gmt = this.zones.grenwich

	today = (function(){
			return Date.now()
		})()
	
}

	

