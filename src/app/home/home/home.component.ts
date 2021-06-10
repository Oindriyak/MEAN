import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate, 
		transition,} from '@angular/animations';
import { AppService } from 'src/app/shared/services/app.service';
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
	
	trigger('message', [
      state('right', style({
		  left:'500%',
      })),
      
		state('left', style({
		 left:'-200%' 
      })),
		state('in', style({
		  left:'0px'
      })),
      transition('left<=>in,in<=>right', [
        animate('1s 3s')
      ]),
    ]),
	//<top>, <right>, <bottom>, <left>)	
	trigger('img', [
      state('right', style({
		  clip: 'rect(0px,1400px,700px,928px)',
		  
      })),
      
		state('left', style({
		 clip: 'rect(0px,397px,700px,0)', 
      	
		})),
		
		state('middler', style({
		 clip: 'rect(0px,1400px,700px,397px)', 
      		
		
		})),
		state('middlel', style({
		 clip: 'rect(0px,928px,700px,0px)', 
		})),
		
      transition('left<=>*,*<=>right', [
        animate('0.5s')
      ]),
    ]),
		
  ],
	
	
	
})
export class HomeComponent implements OnInit {

  constructor(private api :AppService) { }

  ngOnInit(): void {
	  
  }
	
	mbutton:string='Sign up'
	ltitle:string='Login To Your Account'
	lbutton:string='Sign in'
	
	name:string=''
	pass:string=''
	
	amsr:string='in';
	amsl:string='left';
	aback:string='right';
	alogin:string='left';
	aimg:string='right';
	
	mesl:string='none'
	mesr:string='block'
	mvis:string="visible"
	toggle(){
		this.mvis='hidden'
		this.aback=(this.aback=='right')?'middler':'middlel'
		this.alogin=(this.alogin=='left')?'right':'left'
		this.mbutton=''
		this.aimg=(this.aimg=='right')?'middler':'middlel'
		if(this.amsr=='in')
			this.amsr='right'
		else
			this.amsl='left'
		
		setTimeout(()=>{
			this.aback=(this.lbutton=='Sign in')?'left':'right'

			if(this.lbutton=='Sign in'){
				this.lbutton='Sign up';
				this.mbutton='Sign in'
				this.ltitle='Create A Free Account'
				
				this.mesr='none'
				this.mesl='block'
				
				this.amsl='in'
				this.aimg='left'
			}
			else{
				this.lbutton='Sign in';
				this.mbutton='Sign up'
				this.ltitle='Login To Your Account'

				this.mesl='none'
				this.mesr='block'
				
				this.amsr='in'
				this.aimg='right'
			}
			this.mvis='visible'
		},500)
	}
	
	//apis
	
	submit()
	{
		let valid
		if(this.lbutton=='Sign in'){
			this.api.checkUser(this.name, this.pass).subscribe
			((r:any) => {
				 valid=r.status
			})
			console.log(valid)
		}
		else{
			
		}
	}
	
	
}