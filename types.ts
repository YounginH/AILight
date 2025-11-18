export enum Page {
  Splash,
  Login,
  Home,
  GoodsSelection,
  PartSelection,
  Create,
  Feed,
  Profile,
}

export interface Sticker {
  id: string;
  src: string;
  x: number; // position as percentage
  y: number; // position as percentage
}

export interface SavedDesign {
  id: string;
  baseImage: string;
  stickers: Sticker[];
}
