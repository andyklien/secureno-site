export const images = {
  kitchenDated: {
    src: "https://images.unsplash.com/photo-1722888799634-c5093906feae",
    alt: "Dated 1970s kitchen with worn wood cabinets and red laminate counters",
  },
  kitchenBright: {
    src: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf",
    alt: "Bright open-concept kitchen with pendant lighting and a wood island",
  },
  kitchenWhiteMarble: {
    src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
    alt: "All-white kitchen with marble countertops and open shelving",
  },
  kitchenModernDark: {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    alt: "Modern white and black kitchen with a waterfall island and bar stools",
  },
  kitchenLifestyle: {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    alt: "Homeowner cooking in a renovated white kitchen with marble island",
  },
  bathroomDated: {
    src: "https://images.unsplash.com/photo-1638131819098-5b372730e143",
    alt: "Dated bathroom with blue tile and floral wallpaper before renovation",
  },
  bathroomGlassShower: {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    alt: "Bathroom renovation with glass walk-in shower and floating vanity",
  },
  bathroomCheckerFloor: {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
    alt: "Bright bathroom with checkerboard tile floor and pedestal sink",
  },
  bathroomSoakerTub: {
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
    alt: "Ensuite bathroom with freestanding soaker tub and double vanity",
  },
  exteriorModernEvening: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    alt: "Modern renovated home exterior at dusk with warm interior lighting",
  },
  exteriorModernDark: {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    alt: "Contemporary dark-clad home exterior with wood entry accent",
  },
  planningBlueprint: {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    alt: "Renovation contractor reviewing architectural plans and measurements",
  },
  planningBlueprintClose: {
    src: "https://images.unsplash.com/photo-1503387837-b154d5074bd2",
    alt: "Close-up of renovation blueprints and a ruler on a work table",
  },
  handshake: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    alt: "Handshake sealing a fixed-price renovation agreement",
  },
} as const;

export type ImageKey = keyof typeof images;
