import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-attendance-calendar',
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.scss']
})
export class AttendanceCalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };
  constructor() { }


  ngOnInit(): void {
  }

}
