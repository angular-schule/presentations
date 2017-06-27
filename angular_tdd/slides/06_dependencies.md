<div style="margin-left:240px;text-align:left"><strong>Abhängigkeiten</strong></div>
![Jasmine Logo](img/logos/jasmine-logo.svg) <!-- .element: width="50%" -->




## Tipps

* * eigene Stubs bevorzugen (z.B. nicht gleich `'@angular/http/testing`)
* * Jasmine Spies verwenden
* * `async()` zum asynchronen Code testen




### Beispiel: eigene Stubs

```typescript
httpStub = {
  get: () => Observable.of({
    json: () => expectedBooks
  })
};

TestBed.configureTestingModule({
  providers: [
    { provide: Http, useValue: httpStub
  }]
});

``` 




### Beispiel: done(), der Klassiker

```typescript
describe('async tests', () => {
  it('require a signal that execution has been finished', (done) => {
    setTimeout(() => {
      expect(true).toBeTruthy();
      done(); // <-- 😞
    }, 500);
  });
});
```




### Beispiel: async(), mit Zonen!

```typescript
import { async } from '@angular/core/testing';

describe('async tests', () => {
  it('can be simplified via async()', async(() => {
    setTimeout(() => {
      expect(true).toBeTruthy();
    }, 500);
   }));
});
```
