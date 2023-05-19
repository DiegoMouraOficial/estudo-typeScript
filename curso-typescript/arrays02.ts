//array que pode armazenar tanto números quanto strings

const elementos: (number | string)[] = [10, "abc", 20, "def"];

/*
    typeof para verificar o tipo de cada elemento do array. Se for um número, 
    imprimimos "Número: " seguido do valor. Se for uma string, imprimimos 
    "String: " seguido do valor. 
*/

for (const elemento of elementos) {
    
    if (typeof elemento === "number") {
      console.log("Número: " + elemento);
    } else {
      console.log("String: " + elemento);
    }
}
  