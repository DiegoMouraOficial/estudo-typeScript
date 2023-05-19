//o tipo never é usado para representar um valor que nunca ocorre.

type Color = "Red" | "Blue" | "Green";

function getColorName(color: Color): string {
  switch (color) {
    case "Red":
      return "Vermelho";
    case "Blue":
      return "Azul";
    case "Green":
      return "Verde";
    default:
      // Utilizando 'never' para tornar a guarda de tipo exaustiva
      const exhaustiveCheck: never = color;
      throw new Error(`Cor não reconhecida: ${exhaustiveCheck}`);
  }
}
