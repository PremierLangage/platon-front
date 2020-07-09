# Panel

<wc-doc-header selector="wc-panel"></wc-doc-header>

## Usage

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

## Showcase

<wc-doc-showcase selector="wc-panel">
  <showcase-preview>
    <wc-panel prop-type="note" prop-title="Note">
      <prop-content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis id fuga
        rem eius vel praesentium consequatur cumque officia cupiditate? Beatae incidunt
        eveniet delectus similique, non illum blanditiis **djkj** laudantium corporis ex.
      </prop-content>
    </wc-panel>
  </showcase-preview>
</wc-doc-showcase>

## Playground

TODO

```Bash tab=
#!/bin/bash
STR="Hello World!"
echo $STR
```

```C tab=
#include

int main(void) {
  printf("hello, world\n");
}
```

```C++ tab=
#include <iostream>

int main() {
  std::cout << "Hello, world!\n";
  return 0;
}
```

```C# tab=
using System;

class Program {
  static void Main(string[] args) {
    Console.WriteLine("Hello, world!");
  }
}
```

## API

<wc-doc-props selector="wc-panel"></wc-doc-props>
