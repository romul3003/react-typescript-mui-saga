export type Image = {
  height: number;
  id: string;
  url: string;
  width: number;
}

export type Weight = {
  imperial: string;
  metric: string;
}

export type Breed = {
  id: number;
  name: string;
  adaptability: number;
  affection_level: number;
  alt_names: string;
  cfa_url: string;
  child_friendly: number;
  country_code: string;
  country_codes: string;
  description: string;
  dog_friendly: number;
  energy_level: number;
  experimental: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  image: Image;
  indoor: number;
  intelligence: number;
  lap: number;
  life_span: string;
  natural: number;
  origin: string;
  rare: number;
  reference_image_id: string;
  rex: number;
  shedding_level: number;
  short_legs: number;
  social_needs: number;
  stranger_friendly: number;
  suppressed_tail: number;
  temperament: string;
  vcahospitals_url: string;
  vetstreet_url: string;
  vocalisation: 1
  weight: Weight;
  wikipedia_url: string;
}

export const SET_BREEDS = 'SET_BREEDS'
export type setBreedsAction = {
  type: typeof SET_BREEDS;
  payload: Breed[]
}

export type Category = {
  id: string;
  name: number;
}

export const SET_CATEGORIES = 'SET_CATEGORIES'
export type setCategoriesAction = {
  type: typeof SET_CATEGORIES;
  payload: Category[]
}

export type catsActionTypes =
  | setBreedsAction
  | setCategoriesAction
