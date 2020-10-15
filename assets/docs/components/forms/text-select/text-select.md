
* **Fonctionnement du mode `free`.**
  Chaque caractère de `text` est transformée en unité sélectionnable.
  On sélectionne les unités en faisant glisser le curseur de sélection comme dans une sélection de texte usuelle.
  Les selections ajouté au tableau `selections` ont la forme suivante.

  ```typescript
  {
    "position": [number, number], // [position du premier caracère, position du dernier caractère]
    "content": string // Le texte de la partie sélectionnée
  }
  ```

* **Fonctionnement du mode `units`.**
  Les parties de `text` entre accolades sont transformées en unités sélectionnables. Les autres parties ne sont pas sélectionnables.
  Quand on clique sur une unité sélectionnable, celle-ci est sélectionnée dans sa totalité et un objet

* **Fonctionnement du mode `regex`.**
  Seul les parties de `text` qui correspondent avec l'expression régulière `regex` sont transformée en unités sélectionnables.
  Quand on clique sur une unité sélectionnable, celle-ci est sélectionnée dans sa totalité.

Dans les modes `units` et `regex` chaque sélection est représentée par un objet de la forme suivante:

```typescript
{
  "position": number, // position de la selection par rapport aux autres
  "content": string // Le texte de la partie sélectionnée
}
```

> Dans les modes `units` et `free` vous pouvez inclure des balises HTML pour formatter votre texte.
