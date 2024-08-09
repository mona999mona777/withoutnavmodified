import { Component } from '@angular/core';
import { MynavComponent } from "../mynav/mynav.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MynavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:string="py-4";
  navfunc(){
    document.addEventListener('scroll',()=>{
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this.data="py-2";    
       } 
       else {
        this.data="py-4";    
             }
    })
  }
}
