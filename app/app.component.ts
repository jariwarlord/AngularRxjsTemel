import { Component, OnInit } from '@angular/core';
import { ReplaySubject,AsyncSubject,BehaviorSubject,Observable, Subject, asyncScheduler } from 'rxjs';
import {observeOn} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  //   const observable = new Observable<string>(data => {
  //     data.next("berke");
  //     data.next("helin");
  //     data.next("vera");
  //     data.complete();
  //   });
  //   const observer = function(data : any){
  //     console.log(data)
  //   };
  //   observable.subscribe(observer);
  // }
  // const subject = new Subject();
  // subject.subscribe(data => {console.log(`ObserverA ${data}`)})
  // subject.subscribe(data => {console.log(`ObserverB ${data}`)})
  // subject.next(3);
  // subject.next(34);
  // subject.next(12);
  // subject.subscribe(data => {console.log(`ObserverC ${data}`)})
  // subject.next(4);
  // subject.next(35);
  // subject.next("Fatih");
  // subject.next("Eliajh");
  // let data : any = "Hilmi";
  // const subject = new BehaviorSubject(data);
  // subject.subscribe(data => {console.log(`ObserverA ${data}`)})
  // subject.subscribe(data => {console.log(`ObserverB ${data}`)})
  // subject.next(3);
  // subject.next(34);
  // subject.next(12);
  // subject.subscribe(data => {console.log(`ObserverC ${data}`)})
  // subject.next(4);
  // subject.next(35);
  // subject.next("Fatih");
  // subject.next("Eliajh");
  // let data : any = "Hilmi";
  // const subject = new ReplaySubject(2);
  // subject.subscribe((data: any) => {console.log(`ObserverA ${data}`)})
  // subject.subscribe((data: any) => {console.log(`ObserverB ${data}`)})
  // subject.next(3);
  // subject.next(34);
  // subject.next(12);
  // subject.subscribe((data: any) => {console.log(`ObserverC ${data}`)})
  // subject.next(4);
  // subject.next(35);
  // subject.next("Fatih");
  // subject.next("Eliajh");
  // let data : any = "Hilmi";
  // const subject = new AsyncSubject();
  // subject.subscribe((data: any) => {console.log(`ObserverA ${data}`)})
  // subject.subscribe((data: any) => {console.log(`ObserverB ${data}`)})
  // subject.next(3);
  // subject.complete();
  // subject.next(34);
  // subject.next(12);
  // subject.subscribe((data: any) => {console.log(`ObserverC ${data}`)})
  // subject.next(4);
  // subject.next(35);
  // subject.next("Fatih");
  // subject.next("Eliajh");
  const observable = new Observable(data =>{
    console.log("Scheduler kullanılmayan *****")
    console.log("*****************************")
    data.next(1);
    data.next(3);
    data.next(5);
    data.complete();
    observable.subscribe(data => console.log(data))
    console.log("Scheduler kullanılmayan *****")
  });
  const observable2 = new Observable(data =>{
    console.log("Scheduler kullanılan *****")
    console.log("*****************************")
    data.next(1);
    data.next(3);
    data.next(5);
    data.complete();
  }).pipe(observeOn(asyncScheduler));
  observable2.subscribe(data => console.log(data))
  console.log("Scheduler kullanılan *****")

}
}


