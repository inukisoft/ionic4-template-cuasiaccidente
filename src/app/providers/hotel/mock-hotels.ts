export let HOTELS = [
  {
    id: 1,
    name: "Copacabana Hotel",
    rating: 5,
    price: 150,
    sale_price: 120,
    location: {
      lat: -22.906847,
      lon: -43.172896,
    },
    address: "Av Pres. Antônio Carlos, 223",
    description: "Situated in the best rated area in Rio de Janeiro, this property has an excellent location.",
    location_text: "Located in the Copacabana district in Rio de Janeiro, 80 m from Copacabana Beach, Ritz Copacabana Boutique Hotel features an outdoor pool and views of the city. Guests can enjoy the on-site bar. ",
    features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "Every room at this hotel is air conditioned and has a flat-screen TV. Each room comes with a private bathroom. For your comfort, you will find free toiletries and a hair dryer. ",
    thumb: "assets/img/hotel/thumb/hotel_1.jpg",
    images: [
      "assets/img/hotel/thumb/hotel_1.jpg",
      "assets/img/hotel/thumb/hotel_4.jpg",
      "assets/img/hotel/thumb/hotel_5.jpg",
      "assets/img/hotel/thumb/hotel_6.jpg"
    ],
    free_wifi: 1,
    services: [
      {
        id: 1,
        icon: "checkmark-circle-outline",
        name: "Pool"
      },
      {
        id: 2,
        icon: "wifi",
        name: "Internet"
      },
      {
        id: 3,
        icon: "cafe",
        name: "Breakfast"
      },
      {
        id: 4,
        icon: "restaurant",
        name: "Restaurant"
      },
      {
        id: 5,
        icon: "easel",
        name: "Conference"
      },
      {
        id: 6,
        icon: "sunny",
        name: "Beach"
      }
    ],
    numb_available_rooms: 3,
    reviews: [
      {
        id: 1,
        username: "Oliver Bishop",
        from: "Chesterfield, UK",
        title: "Nice place",
        content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
        rating: 4
      },
      {
        id: 2,
        username: " Alejandro Suarez",
        from: "Bogotá, CO",
        title: "Close to old quarter",
        content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
        rating: 4
      },
      {
        id: 3,
        username: "Matt Doley",
        from: "Cincinnati, US",
        title: "Short stay",
        content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
        rating: 3
      },
      {
        id: 4,
        username: "Jorge Silva",
        from: "São Paulo, BR",
        title: "Disappointing and overpriced",
        content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
        rating: 2
      }
    ],
    rooms: [
      {
        id: 1,
        active: 1,
        name: "Deluxe Room",
        beds: "1 king bed or 1 twin bed",
        numb_available_rooms: 4,
        refundable: 0,
        room_info: "Free Parking, Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        price: 120
      },
      {
        id: 2,
        active: 0,
        name: "Grand Deluxe",
        beds: "1 king bed or 1 queen bed",
        numb_available_rooms: 2,
        refundable: 0,
        room_info: "Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        price: 180
      },
    ]
  },
  {
    id: 2,
    name: "La Belle Place",
    rating: 4.7,
    price: 120,
    sale_price: 80,
    location: {
      lat: -22.969778,
      lon: -43.186859,
    },
    address: "Av Copacabana, 44",
    description: "Family-friendly place in Rio de Janeiro, close to Flamengo Beach.",
    location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Flamengo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
    features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/hotel_2.jpg",
    images: [
      "assets/img/hotel/thumb/hotel_2.jpg",
      "assets/img/hotel/thumb/hotel_4.jpg",
      "assets/img/hotel/thumb/hotel_5.jpg",
      "assets/img/hotel/thumb/hotel_6.jpg"
    ],
    free_wifi: 1,
    services: [
      {
        id: 1,
        icon: "checkmark-circle-outline",
        name: "Pool"
      },
      {
        id: 2,
        icon: "wifi",
        name: "Internet"
      },
      {
        id: 3,
        icon: "cafe",
        name: "Breakfast"
      },
      {
        id: 4,
        icon: "restaurant",
        name: "Restaurant"
      },
      {
        id: 5,
        icon: "easel",
        name: "Conference"
      },
      {
        id: 6,
        icon: "sunny",
        name: "Beach"
      }
    ],
    numb_available_rooms: 12,
    reviews: [
      {
        id: 1,
        username: "Oliver Bishop",
        from: "Chesterfield, UK",
        title: "Nice place, as long as you don't want to leave",
        content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
        rating: 4
      },
      {
        id: 2,
        username: " Alejandro Suarez",
        from: "Bogotá, CO",
        title: "Close to old quarter",
        content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
        rating: 4
      },
      {
        id: 3,
        username: "Matt Doley",
        from: "Cincinnati, US",
        title: "Short stay",
        content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
        rating: 3
      },
      {
        id: 4,
        username: "Jorge Silva",
        from: "São Paulo, BR",
        title: "Disappointing and overpriced",
        content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
        rating: 2
      }
    ],
    rooms: [
      {
        id: 1,
        active: 1,
        name: "Deluxe Room",
        beds: "1 king bed or 1 twin bed",
        numb_available_rooms: 1,
        refundable: 0,
        room_info: "Free Parking, Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        price: 120
      },
      {
        id: 2,
        active: 0,
        name: "Grand Deluxe",
        beds: "1 king bed or 1 queen bed",
        numb_available_rooms: 2,
        refundable: 0,
        room_info: "Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        price: 180
      },
    ]
  },
  {
    id: 3,
    name: "Marshal Hotel",
    rating: 4.5,
    price: 100,
    sale_price: 70,
    location: {
      lat: -22.984337,
      lon: -43.223142,
    },
    address: "Av Ataulfo de Paiva, 98",
    description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
    location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
    features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/hotel_3.jpg",
    images: [
      "assets/img/hotel/thumb/hotel_3.jpg",
      "assets/img/hotel/thumb/hotel_4.jpg",
      "assets/img/hotel/thumb/hotel_5.jpg",
      "assets/img/hotel/thumb/hotel_6.jpg"
    ],
    free_wifi: 1,
    services: [
      {
        id: 1,
        icon: "checkmark-circle-outline",
        name: "Pool"
      },
      {
        id: 2,
        icon: "wifi",
        name: "Internet"
      },
      {
        id: 3,
        icon: "cafe",
        name: "Breakfast"
      },
      {
        id: 4,
        icon: "restaurant",
        name: "Restaurant"
      },
      {
        id: 5,
        icon: "easel",
        name: "Conference"
      },
      {
        id: 6,
        icon: "sunny",
        name: "Beach"
      }
    ],
    numb_available_rooms: 5,
    reviews: [
      {
        id: 1,
        username: "Oliver Bishop",
        from: "Chesterfield, UK",
        title: "Nice place, as long as you don't want to leave",
        content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
        rating: 4
      },
      {
        id: 2,
        username: " Alejandro Suarez",
        from: "Bogotá, CO",
        title: "Close to old quarter",
        content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
        rating: 4
      },
      {
        id: 3,
        username: "Matt Doley",
        from: "Cincinnati, US",
        title: "Short stay",
        content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
        rating: 3
      },
      {
        id: 4,
        username: "Jorge Silva",
        from: "São Paulo, BR",
        title: "Disappointing and overpriced",
        content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
        rating: 2
      }
    ],
    rooms: [
      {
        id: 1,
        active: 1,
        name: "Deluxe Room",
        beds: "1 king bed or 1 twin bed",
        numb_available_rooms: 1,
        refundable: 0,
        room_info: "Free Parking, Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        price: 120
      },
      {
        id: 2,
        active: 0,
        name: "Grand Deluxe",
        beds: "1 king bed or 1 queen bed",
        numb_available_rooms: 2,
        refundable: 0,
        room_info: "Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        price: 180
      },
    ]
  },
  {
    id: 4,
    name: "Pousada Marés do Amanhã",
    rating: 3.3,
    price: 40,
    sale_price: 30,
    location: {
      lat: -22.933129,
      lon: -43.177427,
    },
    address: "Praia do Flamengo",
    description: "Family-friendly place in Rio de Janeiro, close to Flamengo Beach",
    location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Flamengo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
    features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/hotel_4.jpg",
    images: [
      "assets/img/hotel/thumb/hotel_4.jpg",
      "assets/img/hotel/thumb/hotel_7.jpg",
      "assets/img/hotel/thumb/hotel_5.jpg",
      "assets/img/hotel/thumb/hotel_6.jpg"
    ],
    free_wifi: 1,
    services: [
      {
        id: 1,
        icon: "checkmark-circle-outline",
        name: "Pool"
      },
      {
        id: 2,
        icon: "wifi",
        name: "Internet"
      },
      {
        id: 3,
        icon: "cafe",
        name: "Breakfast"
      },
      {
        id: 4,
        icon: "restaurant",
        name: "Restaurant"
      },
      {
        id: 5,
        icon: "easel",
        name: "Conference"
      },
      {
        id: 6,
        icon: "sunny",
        name: "Beach"
      }
    ],
    numb_available_rooms: 5,
    reviews: [
      {
        id: 1,
        username: "Oliver Bishop",
        from: "Chesterfield, UK",
        title: "Nice place, as long as you don't want to leave",
        content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
        rating: 4
      },
      {
        id: 2,
        username: " Alejandro Suarez",
        from: "Bogotá, CO",
        title: "Close to old quarter",
        content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
        rating: 4
      },
      {
        id: 3,
        username: "Matt Doley",
        from: "Cincinnati, US",
        title: "Short stay",
        content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
        rating: 3
      },
      {
        id: 4,
        username: "Jorge Silva",
        from: "São Paulo, BR",
        title: "Disappointing and overpriced",
        content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
        rating: 2
      }
    ],
    rooms: [
      {
        id: 1,
        active: 1,
        name: "Deluxe Room",
        beds: "1 king bed or 1 twin bed",
        numb_available_rooms: 1,
        refundable: 0,
        room_info: "Free Parking, Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        price: 120
      },
      {
        id: 2,
        active: 0,
        name: "Grand Deluxe",
        beds: "1 king bed or 1 queen bed",
        numb_available_rooms: 2,
        refundable: 0,
        room_info: "Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        price: 180
      },
    ]
  },
  {
    id: 5,
    name: "Ipanema Garden Hotel",
    rating: 3.5,
    price: 50,
    sale_price: 40,
    location: {
      lat: -22.984667,
      lon: -43.198593,
    },
    address: "Av Vieira Solto, 13",
    description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
    location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
    features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/hotel_5.jpg",
    images: [
      "assets/img/hotel/thumb/hotel_5.jpg",
      "assets/img/hotel/thumb/hotel_8.jpg",
      "assets/img/hotel/thumb/hotel_7.jpg",
      "assets/img/hotel/thumb/hotel_6.jpg"
    ],
    free_wifi: 1,
    services: [
      {
        id: 1,
        icon: "checkmark-circle-outline",
        name: "Pool"
      },
      {
        id: 2,
        icon: "wifi",
        name: "Internet"
      },
      {
        id: 3,
        icon: "cafe",
        name: "Breakfast"
      },
      {
        id: 4,
        icon: "restaurant",
        name: "Restaurant"
      },
      {
        id: 5,
        icon: "easel",
        name: "Conference"
      },
      {
        id: 6,
        icon: "sunny",
        name: "Beach"
      }
    ],
    numb_available_rooms: 4,
    reviews: [
      {
        id: 1,
        username: "Oliver Bishop",
        from: "Chesterfield, UK",
        title: "Nice place, as long as you don't want to leave",
        content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
        rating: 4
      },
      {
        id: 2,
        username: " Alejandro Suarez",
        from: "Bogotá, CO",
        title: "Close to old quarter",
        content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
        rating: 4
      },
      {
        id: 3,
        username: "Matt Doley",
        from: "Cincinnati, US",
        title: "Short stay",
        content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
        rating: 3
      },
      {
        id: 4,
        username: "Jorge Silva",
        from: "São Paulo, BR",
        title: "Disappointing and overpriced",
        content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
        rating: 2
      }
    ],
    rooms: [
      {
        id: 1,
        active: 1,
        name: "Deluxe Room",
        beds: "1 king bed or 1 twin bed",
        numb_available_rooms: 1,
        refundable: 0,
        room_info: "Free Parking, Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        price: 120
      },
      {
        id: 2,
        active: 0,
        name: "Grand Deluxe",
        beds: "1 king bed or 1 queen bed",
        numb_available_rooms: 2,
        refundable: 0,
        room_info: "Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        price: 180
      },
    ]
  },
  {
    id: 6,
    name: "Tijuquinha Plaza Hotel",
    rating: 4.1,
    price: 65,
    sale_price: 45,
    location: {
      lat: -23.000371,
      lon: -43.365895,
    },
    address: "Av Ayrton Senna, 877",
    description: "Family-friendly place in Rio de Janeiro, close to Botafogo Beach",
    location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Botafogo Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
    features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/hotel_6.jpg",
    images: [
      "assets/img/hotel/thumb/hotel_6.jpg",
      "assets/img/hotel/thumb/hotel_4.jpg",
      "assets/img/hotel/thumb/hotel_5.jpg",
      "assets/img/hotel/thumb/hotel_10.jpg"
    ],
    free_wifi: 1,
    services: [
      {
        id: 1,
        icon: "checkmark-circle-outline",
        name: "Pool"
      },
      {
        id: 2,
        icon: "wifi",
        name: "Internet"
      },
      {
        id: 3,
        icon: "cafe",
        name: "Breakfast"
      },
      {
        id: 4,
        icon: "restaurant",
        name: "Restaurant"
      },
      {
        id: 5,
        icon: "easel",
        name: "Conference"
      },
      {
        id: 6,
        icon: "sunny",
        name: "Beach"
      }
    ],
    numb_available_rooms: 12,
    reviews: [
      {
        id: 1,
        username: "Oliver Bishop",
        from: "Chesterfield, UK",
        title: "Nice place, as long as you don't want to leave",
        content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
        rating: 4
      },
      {
        id: 2,
        username: " Alejandro Suarez",
        from: "Bogotá, CO",
        title: "Close to old quarter",
        content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
        rating: 4
      },
      {
        id: 3,
        username: "Matt Doley",
        from: "Cincinnati, US",
        title: "Short stay",
        content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
        rating: 3
      },
      {
        id: 4,
        username: "Jorge Silva",
        from: "São Paulo, BR",
        title: "Disappointing and overpriced",
        content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
        rating: 2
      }
    ],
    rooms: [
      {
        id: 1,
        active: 1,
        name: "Deluxe Room",
        beds: "1 king bed or 1 twin bed",
        numb_available_rooms: 1,
        refundable: 0,
        room_info: "Free Parking, Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        price: 120
      },
      {
        id: 2,
        active: 0,
        name: "Grand Deluxe",
        beds: "1 king bed or 1 queen bed",
        numb_available_rooms: 2,
        refundable: 0,
        room_info: "Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        price: 180
      },
    ]
  },
  {
    id: 7,
    name: "Pousada Maresias",
    rating: 4.0,
    price: 100,
    sale_price: 70,
    location: {
      lat: -23.791402,
      lon: -45.567807,
    },
    address: "Alameda Água Branca, 123",
    description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
    location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
    features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/hotel_7.jpg",
    images: [
      "assets/img/hotel/thumb/hotel_7.jpg",
      "assets/img/hotel/thumb/hotel_8.jpg",
      "assets/img/hotel/thumb/hotel_10.jpg",
      "assets/img/hotel/thumb/hotel_9.jpg"
    ],
    free_wifi: 1,
    services: [
      {
        id: 1,
        icon: "checkmark-circle-outline",
        name: "Pool"
      },
      {
        id: 2,
        icon: "wifi",
        name: "Internet"
      },
      {
        id: 3,
        icon: "cafe",
        name: "Breakfast"
      },
      {
        id: 4,
        icon: "restaurant",
        name: "Restaurant"
      },
      {
        id: 5,
        icon: "easel",
        name: "Conference"
      },
      {
        id: 6,
        icon: "sunny",
        name: "Beach"
      }
    ],
    numb_available_rooms: 6,
    reviews: [
      {
        id: 1,
        username: "Oliver Bishop",
        from: "Chesterfield, UK",
        title: "Nice place, as long as you don't want to leave",
        content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
        rating: 4
      },
      {
        id: 2,
        username: " Alejandro Suarez",
        from: "Bogotá, CO",
        title: "Close to old quarter",
        content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
        rating: 4
      },
      {
        id: 3,
        username: "Matt Doley",
        from: "Cincinnati, US",
        title: "Short stay",
        content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
        rating: 3
      },
      {
        id: 4,
        username: "Jorge Silva",
        from: "São Paulo, BR",
        title: "Disappointing and overpriced",
        content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
        rating: 2
      }
    ],
    rooms: [
      {
        id: 1,
        active: 1,
        name: "Deluxe Room",
        beds: "1 king bed or 1 twin bed",
        numb_available_rooms: 1,
        refundable: 0,
        room_info: "Free Parking, Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        price: 120
      },
      {
        id: 2,
        active: 0,
        name: "Grand Deluxe",
        beds: "1 king bed or 1 queen bed",
        numb_available_rooms: 2,
        refundable: 0,
        room_info: "Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        price: 180
      },
    ]
  },
  {
    id: 8,
    name: "Solar Beach Hotel",
    rating: 4.1,
    price: 90,
    sale_price: 80,
    location: {
      lat: -9.010380,
      lon: -35.220805,
    },
    address: "Rua Jangadeiros",
    description: "Family-friendly place in Rio de Janeiro, close to Copacabana Beach",
    location_text: "This family-friendly Rio de Janeiro hotel is located in the business district, within 1 mi of Copacabana Beach, near of Arts Museum and Christ Redeemer. Leblon shop center and Botafogo Beach are close to 2 mi. ",
    features: "Along with A lot of restaurants and businnes conference room, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 250 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/hotel_8.jpg",
    images: [
      "assets/img/hotel/thumb/hotel_8.jpg",
      "assets/img/hotel/thumb/hotel_9.jpg",
      "assets/img/hotel/thumb/hotel_5.jpg",
      "assets/img/hotel/thumb/hotel_6.jpg"
    ],
    free_wifi: 1,
    services: [
      {
        id: 1,
        icon: "checkmark-circle-outline",
        name: "Pool"
      },
      {
        id: 2,
        icon: "wifi",
        name: "Internet"
      },
      {
        id: 3,
        icon: "cafe",
        name: "Breakfast"
      },
      {
        id: 4,
        icon: "restaurant",
        name: "Restaurant"
      },
      {
        id: 5,
        icon: "easel",
        name: "Conference"
      },
      {
        id: 6,
        icon: "sunny",
        name: "Beach"
      }
    ],
    numb_available_rooms: 12,
    reviews: [
      {
        id: 1,
        username: "Oliver Bishop",
        from: "Chesterfield, UK",
        title: "Nice place, as long as you don't want to leave",
        content: "The hotel staff were very helpful in all ways, nothing was too much trouble. The bar had a fantastic happy hour being good nibbles and great value. One of my best hotels.",
        rating: 4
      },
      {
        id: 2,
        username: " Alejandro Suarez",
        from: "Bogotá, CO",
        title: "Close to old quarter",
        content: "4 nights. Nice suite Staff very helpful. Easy to get cabs",
        rating: 4
      },
      {
        id: 3,
        username: "Matt Doley",
        from: "Cincinnati, US",
        title: "Short stay",
        content: "Hotel reception staff speak limited English and not so friendly. Access to nearby food & beverage outside the hotel is not convenient.",
        rating: 3
      },
      {
        id: 4,
        username: "Jorge Silva",
        from: "São Paulo, BR",
        title: "Disappointing and overpriced",
        content: "Disappointing stay as the condition of the hotel was the exact opposite of last hotel. The pool and fitness area looked alrite, but the staff was helpful.",
        rating: 2
      }
    ],
    rooms: [
      {
        id: 1,
        active: 1,
        name: "Deluxe Room",
        beds: "1 king bed or 1 twin bed",
        numb_available_rooms: 1,
        refundable: 0,
        room_info: "Free Parking, Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_4.jpg",
        price: 120
      },
      {
        id: 2,
        active: 0,
        name: "Grand Deluxe",
        beds: "1 king bed or 1 queen bed",
        numb_available_rooms: 2,
        refundable: 0,
        room_info: "Free Internet and Free Breakfast.",
        thumb: "assets/img/hotel/thumb/hotel_2.jpg",
        price: 180
      },
    ]
  }
]
