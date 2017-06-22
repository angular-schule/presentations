<div style="margin-left:240px;text-align:left"><strong>Integrationstest mit</strong></div>
![Karma Logo](img/logos/karma-logo.svg) <!-- .element: width="50%" -->




## Shallow Unit-Tests
<small>Template und Komponente gemeinsam testen</small>

1. Verhalten einer Komponente wird getestet
2. Das zugehörige Template wird kompiliert
3. Interaktionen mit dem Template verändern den Zustand der Komponente




## Testvorbereitung

1. Test-Modul erzeugen & kompilieren
2. Zu testende Component aus Modul abrufen


```typescript
// Test Setup
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

// Inspektion der Component
import { DebugElement } from '@angular/core';

// CSS-Selektor
import { By } from '@angular/platform-browser';
```




## Testvorbereitung 2

```typescript|small

describe('Clicking the rate up button', () => {
  let fixture: ComponentFixture<BookComponent>;
  let card: BookComponent;
  let rateUp: DebugElement;

  beforeEach(async(() => {

    // Testmodul erzeugen
    TestBed.configureTestingModule({
      declarations: [BookComponent]
    });

    // Testmodul kompilieren
    TestBed.compileComponents();

    fixture = TestBed.createComponent(BookComponent);

    // Component Instanz abrufen
    card = fixture.componentInstance;
    card.book = new Book('Harry Potter', 'The Deathly Hallows');

    fixture.detectChanges();

    // Bewertungsbutton im Template finden
    rateUp = fixture.debugElement.query(By.css('.glyphicon-thumbs-up'));
  }));
});
```




## Testdurchführung

```typescript
it('increases the rating of the book', () => {
  // Bewertungsbutton klicken
  rateUp.nativeElement.click();

  // Change-Detection ausführen
  fixture.detectChanges();

  expect(card.book.rating).toBe(1);
});
```
