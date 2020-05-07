import Hotel from "../assets/images/hotels.jpg"

export const FILTERS = [
  {
    label: "Hotels",
    icon: "location_city",
  },
  {
    label: "Taxis",
    icon: "local_taxi",
  },
  {
    label: "Currency",
    icon: "monetization_on",
  },
  {
    label: "All",
    icon: null,
  },
];

export const HOTELS = [
  {
    id: 0,
    image: Hotel,
    location: "Bangkok",
    price: 180,
    oldPrice: 200,
    date: "25 -27 November 2018",
    person: "2 Adults - 1 Room",
    bids: 54,
    closingDate: "2020-04-18",
  }
  
];
