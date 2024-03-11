import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { ClubService } from './club.service';
import { MessageService } from './message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  singleContent: Content | undefined; 
  inputId: number | undefined;

  constructor(private clubService: ClubService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.clubService.getContentById(6).subscribe(
      (content: Content | undefined) => {
        this.singleContent = content;
      }
    );
  }

  retrieveContentById(): void {
    if (isNaN(this.inputId as number) || this.inputId === undefined) {
      this.messageService.addMessage('Error: Please enter a valid ID number.');
      return;
    }

    const inputId = this.inputId as number;

    this.clubService.getContentArray().subscribe((contentArray: Content[]) => {
      if (inputId < 1 || inputId > contentArray.length) {
        this.messageService.addMessage('Error: Entered ID is out of bounds.');
      } else {
        this.clubService.getContentById(inputId).subscribe(
          (content: Content | undefined) => {
            if (content) {
              this.singleContent = content;
            } else {
              this.messageService.addMessage('Error: Content not found.');
            }
          }
        );
      }
    });
  }}
