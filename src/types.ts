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
  abilities: (Ability | null)[]; // Some abilities are null in the API
  imageURL: string;
  types: string[];
  price: number;
  rarity: string;
  discount?: number;
}
