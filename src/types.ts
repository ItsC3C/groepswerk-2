export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating?: { rate: number; count: number };
}

export interface Ability {
  _id: string;
  name: string;
  cost: number;
  damage: string;
}

export interface PokemonCard {
  _id: string;
  name: string;
  hitPoints: number;
  abilities: (Ability | null)[];
  imageURL: string;
  types: string[];
  price: number;
  originalPrice?: number;
  rarity: string | { _id: string; name: string };
  discount?: number;
  category: string | { _id: string; name: string };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PokemonBundle {
  _id: string;
  name: string;
  type: string;
  series: string;
  img: string;
  price: number;
}
