/*
    Up é inicializado com 1. Todos os membros a seguir são incrementados automaticamente a 
    partir desse ponto. Em outras palavras, Direction.Uptem o valor 1, Downtem 2, 
    Lefttem 3e Righttem 4.

*/


enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }




/*
    Aqui, Upteria o valor 0, Downteria 1, etc. Esse comportamento de incremento automático é útil 
    para casos em que podemos não nos importar com os próprios valores de membros, mas nos importamos
     que cada valor seja distinto de outros valores na mesma enumeração.

*/

enum Direction2 {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Left);