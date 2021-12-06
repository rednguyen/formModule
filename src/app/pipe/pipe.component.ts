import { Component, OnInit } from '@angular/core';
import { Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  presentDate = new Date()

  timeChange = new Observable<string>((observer: Observer<string>)=>{
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  price: number = 2000
  customerList = ["Red", "Blue", "Yellow", "Black", "Pink"]
  decimalOne: number = 9.75;
  decimalTwo: number = 10.32

  JsonData = {
    id: '1',
    name: {
      username: 'Red'
    }
  }

  digit: number = 5000;

  constructor() { }

  

  ngOnInit(): void {
  }

}
