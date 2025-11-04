export interface AgeGroupCard {
  name: string;
  image: string;
  link: string;
  age: string;
  color: string;
}

export const CARDS: AgeGroupCard[] = [
  {
    name: 'Colibris',
    image: '/images/colibris.webp',
    link: 'https://www.edln.org/enfants-de-6-a-8-ans-a-la-decouverte-du-scoutisme/',
    age: '6 - 8 ans',
    color: 'bg-colibris',
  },
  {
    name: 'Voyageuses Voyageurs',
    image: '/images/voyageurs.webp',
    link: 'https://www.edln.org/voyageurs-voyageuses-8-11-ans-grandir-et-devenir-autonome/',
    age: '8 - 11 ans',
    color: 'bg-voyageurs',
  },
  {
    name: 'Vaillantes Vaillants',
    image: '/images/vaillant.webp',
    link: 'https://www.edln.org/vaillants-et-vaillantes-11-14-ans-decider-et-s-organiser/',
    age: '11 - 14 ans',
    color: 'bg-vaillants',
  },
  {
    name: 'Pionnières Pionniers',
    image: '/images/pionnier.webp',
    link: 'https://www.edln.org/pionniers-pionnieres-17-14-ans-construire-et-se-depasser/',
    age: '14 - 17 ans',
    color: 'bg-pionniers',
  },
  {
    name: 'Compagnons',
    image: '/images/compagnons.webp',
    link: 'https://www.edln.org/compagnons-17-20-ans-jeunes-adultes-qui-se-realisent/',
    age: '17 - 20 ans',
    color: 'bg-compagnons',
  },
  {
    name: 'Chefs et Cheftaines',
    image: '/images/chefs.webp',
    link: 'https://edln.org/chefs-et-cheftaines-scouts-enrichir-son-parcours-en-vivant-des-aventures/',
    age: '',
    color: 'bg-compagnons',
  },
];
