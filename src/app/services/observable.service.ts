import { Observable, Observer } from 'rxjs/Rx';
declare function fetch(url: string);

export function initLessonsObservable() {
  const lessonsPromise = fetch('/api/lessons').then(res => res.json());
  const lessons$ = Observable.fromPromise(lessonsPromise);
  const firstLesson$ = lessons$.map(lessons => lessons[0]);
  // do then subscribe to the promise in order to get it run
  // .do(lessons => console.log(lessons))
  // .subscribe();
  lessons$.subscribe(
    lessons => console.log('new lessons:', lessons),
    error => console.error(error),
    () => console.log('completed')
  );
  firstLesson$.subscribe(
    lesson => console.log(lesson)
  )
}

export function combineObservales() {
  // should be assign to element click
  const click$ = Observable.fromEvent(document, 'click');
  click$.subscribe(
    () => console.log('test click observale')
  );
  const mouse$ = Observable.fromEvent(document, 'mousemove')
    .filter((move: MouseEvent) => move.clientY >= 200);
  const combined$ = Observable.combineLatest(mouse$, click$);
  combined$.subscribe(
    combined => console.log(combined[0])
  );
}
