---
name: Component request
about: Propose a new web component.
title: "[WEBCOMPONENT] "
labels: WebComponent
assignees: ''

---

**Selector**
Example: name => AutomatonEditor selector => &lg;wc-automaton-editor&gt;&lt;/wc-automaton-editor&gt;

**Goal**
A clear and concise description of what you want to happen.

Example:
  A visual automaton editor with drag & drop capabilities.
  The student should be able to create|rename|delete automaton states and create
  transitions between the states by dragging the mouse cursor from a source state to a destination state.

  The most important property of the component is the pro

**Properties**
A list of properties the component should expose.

Example:

`height: string`
height of the editor in css unit (100px, 20%, 2rem...)

`automaton: string|Automaton`
representation of the automaton in string or object notation.

***Object format***

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

***String format***

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
```

**Dependencies**
Optional list of javascript or python (for grader) libraries used by the component.

**Additional Info**
Add any other context, schemas or screenshots about the component request here.
