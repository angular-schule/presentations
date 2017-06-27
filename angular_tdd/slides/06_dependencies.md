<div style="margin-left:130px;text-align:left;font-size:2em"><strong>Abhängigkeiten &</strong></div>
![Jasmine Logo](img/logos/jasmine-logo.svg) <!-- .element: width="45%" style="margin-left:150px" -->




## Tipps

* * eigene Stubs bevorzugen<br><small>(z.B. nicht gleich `@angular/http/testing`)</small>
* * Jasmine Spies verwenden
* * `async()` für asynchronen Code




### Beispiel: eigene Stubs

```typescript
httpStub = {
  get: () => Observable.of({
    json: () => expectedBooks
  })
};

TestBed.configureTestingModule({
  providers: [
    { provide: Http, useValue: httpStub }
  ]
});

``` 




### Beispiel: done()
<small>der Klassiker</small>

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




### Beispiel: async()
<small>cool, mit Zonen!</small>

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
