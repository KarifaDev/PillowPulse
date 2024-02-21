//Denna funktion hämtar datan
export function getData() {
  return trips;
}

export function getTrip(tripID) {
  return trips.find((trip) => trip.tripID == tripID);
}
// Här nedan är all data om våra olika hotell, inklusive reviews.
const trips = [
  {
    tripID: 1,
    name: 'The golden inn',
    description:
      'A beautiful hotel for the whole family in the heart of the bustling city of Budapest.',
    location: 'Budapest',
    images: [
      './trips/1.1.jpg',
      './trips/1.2.jpg',
    ],
    isFavourite: false,
    price: '699',
    nights: 3,
    singelRoom: '699',
    dubbleRoom: '899',
    singelAndDubbleRoom: '1598',
    trippleRoom: '1099',
    amenities: ['pool', 'wifi', '24 hour check-in', 'airport transfer'],
    map: 'url',
    rating: 4,
    reviews: {
      userName: 'Thorben',
      review: 'My family and I stayed here for a week and we were surpriced by the hospitality and the nice services that this hotel had to offer. I am a pritty picky person but I am definetly staying here next time i am coming to Budapest! THANKS to Norman with staff!',
    },
  },
  {
    tripID: 2,
    name: 'Ivory Horizon Hotel',
    description:
      'The perfect hotel for relaxation and exploring the rich city of Prague',
    location: 'Prague',
    images: [
      './trips/2.1.jpg',
      './trips/2.2.jpg',
    ],
    isFavourite: true,
    price: '699',
    nights: 3,
    singelRoom: '699',
    dubbleRoom: '899',
    singelAndDubbleRoom: '1598',
    trippleRoom: '1099',
    amenities: ['jacuzzi', 'wifi', 'family friendly'],
    map: 'url',
    rating: 4.3,
    reviews: {
      userName: 'Linnea',
      review: 'This was a very good hotel. Me and my friends had a good time in Prauge and the hotel offers everyting you need. I mean who thought that a hotel in prauge offered a JACUZZI?! Come here!',
    },
  },
  {
    tripID: 3,
    name: 'Silver Vertex Hotel',
    description: 'A relaxing hotel for staying comfortable while in Barcelona',
    location: 'Barcelona',
    images: [
      './trips/3.1.jpg',
      './trips/3.2.jpg',
    ],
    isFavourite: true,
    price: '599',
    nights: 1,
    singelRoom: '599',
    dubbleRoom: '799',
    singelAndDubbleRoom: '1398',
    trippleRoom: '999',
    amenities: ['wifi', 'family friendly'],
    map: 'url',
    rating: 4.1,
    reviews: {
      userName: 'Carol',
      review: 'Hi! This is a nice little hotell in Barcelona. Nina and her husband were very service minded and gave us a few tips on places to visit in the city. I can strongly recomend The Silver Vertex Hotel.',
    },
  },
  {
    tripID: 4,
    name: 'Olive Bliss Resort',
    description:
      'A good hotel for learning about Egypts old history while enjoying the warmth.',
    location: 'Cairo',
    images: [
      './trips/4.1.jpg',
      './trips/4.2.jpg',
    ],
    isFavourite: false,
    price: '999',
    nights: 3,
    singelRoom: '999',
    dubbleRoom: '1399',
    singelAndDubbleRoom: '2398',
    trippleRoom: '1599',
    amenities: ['wifi', '24 hour check-in'],
    map: 'url',
    rating: 4.8,
    reviews: {
      userName: 'Madde123',
      review: 'Thank GOD that we stayed here! Thanks to Tom for the outstanding service and thanks to Cairo for this nice vacasion!',
    },
  },
  {
    tripID: 5,
    name: 'Brass Courtyard Hotel',
    description: 'Get the best tastes of Turkey at the Brass Courtyard Hotel. ',
    location: 'Istanbul',
    images: [
      './trips/5.1.jpg',
      './trips/5.2.jpg',
    ],
    isFavourite: false,
    price: '599',
    nights: 3,
    singelRoom: '599',
    dubbleRoom: '799',
    singelAndDubbleRoom: '1398',
    trippleRoom: '999',
    amenities: ['pool', 'wifi', 'airport transfer'],
    map: 'url',
    rating: 4,
    reviews: {
      userName: 'Paul',
      review: 'This is a fine hotel that offers good service and clean rooms. Im happy with what we got. Ps: Watch out for the cat.. Its very angry and does not like guests..',
    },
  },
];
