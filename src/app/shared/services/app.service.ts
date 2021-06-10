import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USER_API } from '../constants/url.constants';
import { LIST_API } from '../constants/url.constants';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 
  	 
  }
	checkUser(uname: string, pwd: string) {
    	let _body = {
      		username: uname,
      		password: pwd
    	}
    return this.http.patch(USER_API, _body)
  	}
	  
	getUser(uname: string) {
    return this.http.get(USER_API+'?username='+uname)
  	}
		
	setUser(uname: string, pwd: string) {
    	let _body = {
      		username: uname,
      		password: pwd
    	}
    return this.http.post(LIST_API, _body)
  	}	
	 // Lists
	
	getList(uname: string) {    	
    return this.http.get(LIST_API+'?username='+uname)
  	}
	
	updateList(uname: string, id:number ,
				value:Array<any>,show:boolean) {
    	let _body = {
      		username: uname,
      		id: id,
			value:value,
			show:show
    	}
    return this.http.put(LIST_API, _body)
  	}
	
	
	setList(uname: string, id: number,title:string) {
    	let _body = {
      		username: uname,
      		id: id,
			title:title
    	}
    return this.http.post(LIST_API, _body)
  	}
	
}
