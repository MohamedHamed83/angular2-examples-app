import { Observable } from 'rxjs/Rx';
declare function fetch(url: string);

export function initLessonsObservable() {
  const lessonsPromise = fetch('/api/lessons').then(res => res.json());
  const lessons$ = Observable.fromPromise(lessonsPromise)
    // do then subscribe to the promise in order to get it run
    // .do(lessons => console.log(lessons))
    // .subscribe();
    .subscribe(
    lessons => console.log('new lessons:', lessons),
    error => console.error(error),
    () => console.log('completed')
    );
}
