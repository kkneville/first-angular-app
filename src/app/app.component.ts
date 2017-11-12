import { Component, LOCALE_ID } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Member } from './member';


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

	thing(){
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


	cities = [
		{name: "Tokyo", gmt: '+0900'}, 
		{name: 'Dallas', gmt: '-0600'},
		{name: 'Beijing', gmt: '+0800'},
		{name: 'Bangkok', gmt: '+0700'},
		{name: 'New York', gmt: '-0400'},
		{name: 'Pretoria', gmt: '+0200'},
		{name: 'Istanbul', gmt: '+0300'},
		{name: 'New Delhi', gmt: '+0530'},
		{name: 'Melburne', gmt: '+1000'},
		{name: 'Wellington', gmt: '+1300'},
	]

	gmt = this.zones.grenwich

	today = (function(){
			return Date.now()
		})()

	buttons = [
		{ status: 'off'  },
		{ status: 'on' },
		{ status: 'off' },
		{ status: 'on' },
		{ status: 'off' },
		{ status: 'on' },
		{ status: 'off' },
		{ status: 'on' },
		{ status: 'off' },
		{ status: 'on' },	
	]	

	flip = function(index){
		if (this.buttons[index].status == "on"){
			this.buttons[index].status = "off"
		}
		else if (this.buttons[index].status == "off"){
			this.buttons[index].status = "on"
		}
	}

	user = {
		first: "",
		last: ""
	}

	users = []

	onSubmit(){
		console.log("onSubmit")
		console.log(this.user)
		this.users.push(this.user)
		this.user = {
			firstname: "",
			lastname: ""
		}
	}

	clearUsers(){
		this.users = []
	}

	member = new Member()

	members = []

	response = ""

	onSub(){
		this.members.push(this.member);
		this.response = `Thank you for registering with us, ${this.member.firstname}. We will send a confirmation email to ${this.member.email}.`
		this.member = new Member
		console.log(this.members)

	}



	states = [
		"New York",
		"New Jersey",
		"Texas",
		"California",
		"Colorado",
		"New Mexico",
		"Oregon",
		"Washington"
	]

		
}



	

