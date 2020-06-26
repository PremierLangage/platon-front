---
name: Component request
about: Propose a new web component.
title: "[WEBCOMPONENT] "
labels: WebComponent
assignees: ''

---
**Selector**
Html tag for the web component.

Example:
wc-automaton-editor

**Goal**
A clear and concise description of what you want to happen.

Example:
  A visual automaton editor with drag & drop capabilities. A student should be able to create|rename|delete automaton states using the editor and add transitions between the states.

***Features***:
- create|rename|delete states
- create|rename|delete transitions
- zoom capabilities
- reponsive on mobile device see #27 .

**Properties (excluding the default properties cid, selector, debug...)**
A list of important properties exposed by component. This list can be completed by the developer team
if needed.

Example:

| property | description |
|----------|------------|
|`height: string` | editor container height in css unit (100px, 20%, 2rem...)|
| `automaton: string  Automaton` |  automaton in string or object notation |.

***Object notation***
```javascript
{
    "alphabet": string[], // list of symbols of the automaton.
    "initialStates": string[], // A list of strings representing the initial states of the automaton.
    "acceptingStates": string[], // A list of strings representing the final states of the automaton.
    "states": string[], // A list of strings representing the states of the automaton.
    "transitions": {
      fromState: string,
      toState: string,
      symbols: string[]
    }[], // A list of objects representing the transitions
    "position"?: { // An object representing the position of the states inside the editor (defined by the editor if not specified).
        string : {
            "x": number,
            "y": number
        }
    }
}
```
***String notation***

```txt
#states
s0
s1
s2
...
#initials
s0
s1
...
#accepting
s2
#alphabet
a
b
c
...
#transitions
s0:a>s1
s1:a,c>s1
s1:b>s2
```

**Controller**
An optional python class attached to the component instance.
Example:

```python
from components import Component
class AutomatonEditor(Component):
    def __init__(self, **kwargs):
        self.selector = 'wc-automaton-editor'
        self.controller = 'AutomatonEditor'
        self.height = '400px'
        self.automaton = None
        super().__init__(**kwargs)

    def mythod(self):
      pass
```

**Dependencies**
Optional list of javascript or python (for grader) libraries used by the component.
[Fado](https://pypi.org/project/FAdo/)

**Example**
Optional link to an exercise that reproduce the behavior of the component.

**Additional Info**
Add any other context, schemas or screenshots about the component request here.
