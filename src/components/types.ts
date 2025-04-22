export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string; // Opcional para o bônus de filtro
}