# Panel

Le style d'un panel est définie par la propriété `type` qui peut prendre les valeurs suivantes:

- `note`
- `abstract`
- `info`
- `tip`
- `success`
- `question`
- `warning`
- `failure`
- `danger`
- `bug`
- `example`
- `quote`

Il est possible de rendre un panel pliable en définissant la propriété `expandable` à `true`.

## Exemples

=== Code

```javascript
state.type = "note";
state.title = "Note";
state.content = `
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis id fuga
  rem eius vel praesentium consequatur cumque officia cupiditate? Beatae incidunt
  eveniet delectus similique, non illum blanditiis **djkj** laudantium corporis ex.
`.trim();
```

=== Resultat

<wc-panel>
  <template>
    state.type = "note";
    state.title = "Note";
    state.content = `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis id fuga
      rem eius vel praesentium consequatur cumque officia cupiditate? Beatae incidunt
      eveniet delectus similique, non illum blanditiis **djkj** laudantium corporis ex.
    `.trim();
  </template>
</wc-panel>

===
