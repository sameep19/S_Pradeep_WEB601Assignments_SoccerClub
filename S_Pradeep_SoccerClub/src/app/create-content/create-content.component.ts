import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {
  @Output() createContent = new EventEmitter<Promise<Content>>();
  
  onSubmit(e:SubmitEvent, content: Content ) {

    const sendContent = new Promise<any>((resolve,reject)=>{
      setTimeout(() => {
          console.log('Content added successfully:', content.title);
          if (content.title ){
            resolve(content)
          }else{
            reject()
          }
      }, 1000);
    })
    e.preventDefault();
    (e.target as HTMLFormElement).reset();
    this.createContent.emit(sendContent);
  }
}