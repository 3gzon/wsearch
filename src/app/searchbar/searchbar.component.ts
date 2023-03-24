import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Output() submited=new EventEmitter<string>()
term='';
  onInput(value:string){
    this.term=value;
    console.log(value)
  }

  onFormSubmit(event:any){
    event.preventDefault()
    this.submited.emit(this.term);
  }
}
