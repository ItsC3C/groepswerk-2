export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating?: { rate: number; count: number };
}

export interface Ability {
  _id: string; // ✅ Ensure _id is included
  name: string;
  cost: number;
  damage: string;
}

export interface PokemonCard {
  _id: string;
  name: string;
  hitPoints: number;
  abilities: (Ability | null)[]; // ✅ Ensure abilities array allows null
  imageURL: string;
  types: string[];
  price: number;
  originalPrice?: number;
  rarity: string;
  discount?: number;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
