import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate, 
		transition,} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
	animations: [
    trigger('back', [
      state('right', style({
        width:'30%',
		  left:'70%',
      })),
      state('middler', style({
        width: '80%',
		  left:'20%',
		
      })),
		
      state('middlel', style({
        width: '80%',
		
      })),
		state('left', style({
        width: '30%',
		  left:'0px'
      })),	
      transition('right <=> middler,left <=> middler,right <=> middlel,left <=> middlel', [
        animate('0.5s')
      ]),
    ]),
	
	trigger('login', [
      state('right', style({
		  left:'30%',
      })),
      
		state('left', style({
		  left:'0px'
      })),	
      transition('right <=>left', [
        animate('0.4s 0.5s')
      ]),
    ]),
		
  ],
	
	
	
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  
  }
	
	mbutton:string='Sign up'
	ltitle:string='Login To Your Account'
	lbutton:string='Sign in'
	
	name:string=''
	pass:string=''
	
	amesr:string='in';
	aback:string='right';
	alogin:string='left';
	
	mesl:string='none'
	mesr:string='block'
	mvis:string="visible"
	toggle(){
			this.mvis='hidden'
			this.aback=(this.aback=='right')?'middler':'middlel'
			this.alogin=(this.alogin=='left')?'right':'left'
			this.mbutton=''
			setTimeout(()=>{
				this.aback=(this.lbutton=='Sign in')?'left':'right'
				
				if(this.lbutton=='Sign in'){
					this.lbutton='Sign up';
					this.mbutton='Sign in'
					this.ltitle='Create A Free Account'
					this.mesr='none'
					this.mesl='block'
				}
				else{
					this.lbutton='Sign in';
					this.mbutton='Sign up'
					this.ltitle='Login To Your Account'
					
					this.mesl='none'
					this.mesr='block'
				}
				this.mvis='visible'
			},510)
			
		
	}
	

}
