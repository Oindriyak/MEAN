import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {  trigger,  state,  style,  animate, 
		transition,} from '@angular/animations';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
	animations:[
		trigger('del',[
			state('in',style({
			width:'15%'	 ,
				visibility:'visible'
			})),
			state('out',style({
			width:'0%'	 ,
				visibility:'hidden'
			})),
			transition('in<=>out',[
				animate('0.5s')
			])
			
		]),
		trigger('task',[
			state('in',style({
			width:'85%'	 ,
				
			})),
			state('out',style({
			width:'100%'	 ,
			
			})),
			transition('in<=>out',[
				animate('0.5s')
			])
			
		])
	],
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
	
	@Input() list:any={}
	@Output() update= new EventEmitter<any>();
	
	done:boolean=false;
	new:string='';
	date:string='';
	visi:string='none'
	vis:string='block'

	adel:Array<string>=[]
	add(){
		this.visi=this.vis;
		this.vis=(this.vis=='none')?'block':'none';
		this.new=""
		this.date=""
	}
	
	input(){
		let a={
			task:this.new,
			date:this.date,
			c:false
		}
		this.list.value.push(a);
		this.add();
		this.up()
		this.adel.push('out')
	}
	toggle(n:number){
		this.list.value[n].c=!this.list.value[n].c
		this.up()
	}
	
	up(){
		this.update.emit(this.list)
	}
	del(i:number){
		this.list.value.splice(i,1)
		this.up()
	}
}
