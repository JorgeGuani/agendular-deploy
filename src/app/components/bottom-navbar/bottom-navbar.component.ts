import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent implements OnInit {

  clockNow = new Date()
  appVersion = environment.version;

  constructor(private clockService: ClockService) {

  }

  ngOnInit(): void {
    this.clockService.getClock().subscribe((clockNow) => {
      this.clockNow = clockNow
    })
  }

}
