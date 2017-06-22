<div style="margin-left:240px;text-align:left"><strong>Test-Framework</strong></div>
![Jasmine Logo](img/logos/jasmine-logo.svg) <!-- .element: width="50%" -->




## Jasmine
<small>Tests im BDD-Style</small>

```typescript
describe("A suite", () => {
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });
});
```




### Die wichtigsten Methoden
<small></small>

| Methode        |  Beschreibung |
|----------------|---------------| 
| __`describe()`__   | Definiert eine Sammlung von Tests ("test suite")
| __`beforeAll()`__  | Wird nur einmal vor allen Spezifikation ausgeführt
| __`beforeEach()`__ | Wird vor jeder Spezifikation ausgeführt 
| __`it()`__         | Spezifikation ("spec")
| __`expect()`__     | Erwartung, wird zusammen mit einem Matcher (z.B. `toBe()`) verwendet
| __`afterEach()`__  | Wird nach jeder Spezifikation ausgeführt
| __`afterAll()`__   | Wird  nur einmal nach allen Spezifikation ausgeführt 


