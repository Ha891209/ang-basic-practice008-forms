import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList$: BehaviorSubject<Event[]> = this.eventService.list$;


  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
    this.eventService.getAll();
  }

  onDelete(id: number): void {
    this.eventService.remove(id).subscribe(
      () => {
        this.eventService.getAll();
      }
    );
  }

}