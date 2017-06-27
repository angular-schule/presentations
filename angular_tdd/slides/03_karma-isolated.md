<div style="margin-left:240px;text-align:left"><strong>Isolierte Unit-Tests mit</strong></div>
![Karma Logo](img/logos/karma-logo.svg) <!-- .element: width="50%" -->




## Los geht's

```bash
$ ng test
```




### Tests für die Entität `Book`
<small>Fachliche Anforderungen für unsere Geschäftslogik</small>

```typescript
// /src/app/shared/book.spec.ts
describe('Rating a book', () => {
    it('should not be allowed to have a rating greater than 5', () => {
        // test
    });

    it('should not be possible have a rating smaller than 0', () => {
        // test
    });
});
```




## Wann einsetzen?

* * Services
* * Pipes
* * Komponenten <small style="margin-top: 15px;">(mit viel Geschäftslogik)</small>
