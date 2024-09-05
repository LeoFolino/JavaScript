// Las principales diferencias entre let y var en JavaScript son:

// Ámbito (Scope):
// var: Tiene un ámbito de función. Si se declara dentro de una función, solo es accesible dentro de esa función. Si se declara fuera, es global.
// let: Tiene un ámbito de bloque. Solo es accesible dentro del bloque {} en el que se declara (por ejemplo, dentro de un if, for, etc.).

// Hoisting:
// var: Es "hoisteada", lo que significa que la declaración se eleva al principio de su contexto (función o global), pero su valor no está definido hasta que el código la asigna.
// let: También es "hoisteada", pero no puede ser utilizada antes de ser declarada. Si intentas usarla antes de su declaración, genera un error.

// Redeclaración:
// var: Puede ser redeclarada en el mismo ámbito sin problemas.
// let: No permite redeclarar la misma variable en el mismo ámbito.