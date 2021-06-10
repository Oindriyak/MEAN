import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
	
	new:string='';

	name:string='Tamo'
	visa:string='block'
	visi:string='none'
	
	
	list:Array<any>=[]
	count:number=0;
	
	
	
	show:Array<number> = []
	
	vis(){
		this.visa=this.visi;
		this.visi=(this.visi=='block')?'none':'block'
		this.new=''
	}
	
	update(event:any){
		
	}
	add(){
		let a:any={
			title:this.new,
			value:[],
			show:true
		}
		this.list.push(a)
		this.show.push(this.count)
		this.count=this.count+1
		this.vis();
	}
}
