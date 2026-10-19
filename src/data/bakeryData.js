export const WHATSAPP_NUMBER = '917736711672';
export const INSTAGRAM_HANDLE = '@maisoncrumb.demo';
export const INSTAGRAM_URL = 'https://instagram.com/maisoncrumb.demo';

export const CAKE_CATALOG = {
  'classic-chocolate': {
    id: 'classic-chocolate',
    title: 'Classic Chocolate Cake',
    category: 'Signature Cakes',
    price: '₹899',
    numericPrice: 899,
    image: '/assets/images/cake-chocolate.jpg',
    description: 'Our timeless signature creation. Three layers of deeply rich, moist dark chocolate sponge layered with whipped 55% Belgian chocolate ganache, adorned with fresh blackberries and delicate chocolate curl shavings.',
    sponge: 'Dark Dutch cocoa sponge (eggless available)',
    filling: 'Silky dark chocolate ganache',
    sizes: '0.5 kg (Bento), 1.0 kg (6-8 servings), 1.5 kg (10-12 servings)',
    leadTime: '48 hours advance notice',
    allergens: 'Contains dairy, wheat (gluten). Eggless option on request.',
    badge: 'Bestseller'
  },
  'vanilla-berry': {
    id: 'vanilla-berry',
    title: 'Vanilla Berry Cake',
    category: 'Signature Cakes',
    price: '₹949',
    numericPrice: 949,
    image: '/assets/images/cake-vanilla-berry.jpg',
    description: 'An ethereal celebration of fresh flavours. Fluffy golden vanilla bean sponge layered with whipped Madagascar mascarpone cream, finished semi-naked with cascading organic blackberries, raspberries and red currants.',
    sponge: 'Madagascar vanilla bean sponge',
    filling: 'Light mascarpone cream & wild berry compote',
    sizes: '1.0 kg (6-8 servings), 1.5 kg (10-12 servings), 2-Tier Celebration',
    leadTime: '48 hours advance notice',
    allergens: 'Contains dairy, wheat (gluten). Made in a nut-aware kitchen.',
    badge: 'Chef Favorite'
  },
  'strawberry-cream': {
    id: 'strawberry-cream',
    title: 'Strawberry Cream Cake',
    category: 'Seasonal Favorites',
    price: '₹999',
    numericPrice: 999,
    image: '/assets/images/cake-strawberry-cream.jpg',
    description: 'Inspired by Japanese and Korean patisseries. Cloud-light chiffon layers paired with house-whipped Chantilly cream and freshly sliced sweet strawberries, finished with a rustic textured swirl and fresh mint.',
    sponge: 'Featherlight vanilla chiffon',
    filling: 'Fresh sweet strawberries & pure whipped cream',
    sizes: '0.5 kg Bento, 1.0 kg Standard, 1.5 kg Large',
    leadTime: '48 hours advance notice',
    allergens: 'Contains dairy, eggs, wheat. Vegetarian friendly.',
    badge: 'Seasonal'
  },
  'chocolate-fudge': {
    id: 'chocolate-fudge',
    title: 'Chocolate Fudge Cake',
    category: 'Indulgent Treats',
    price: '₹1,049',
    numericPrice: 1049,
    image: '/assets/images/cake-chocolate-fudge.jpg',
    description: 'An unapologetically decadent cake for true chocolate devotees. Intense dark chocolate layers filled with thick, glossy fudge frosting, finished with molten Belgian chocolate drippings and roasted cocoa dust.',
    sponge: 'Dense Valrhona chocolate fudge cake',
    filling: 'Slow-cooked chocolate fudge buttercream',
    sizes: '1.0 kg (6-8 servings), 1.5 kg (10-12 servings)',
    leadTime: '48 hours advance notice',
    allergens: 'Contains dairy, wheat, soy lecithin.',
    badge: 'Decadent'
  }
};

export const CATEGORIES = [
  {
    id: 'bento',
    name: 'Bento Cakes',
    subtitle: 'Korean 4-inch lunchbox cakes designed for intimate moments, milestone toasts, or thoughtful gifting for 1–2 people.',
    image: '/assets/images/cat-bento.jpg',
    price: 'From ₹450',
    tag: 'Trending & Gift-Ready',
    servings: '1–2 Servings'
  },
  {
    id: 'birthday',
    name: 'Birthday Cakes',
    subtitle: 'Nostalgic vintage pearl piping, silk ribbons, delicate pastels, and complimentary beeswax celebratory candle.',
    image: '/assets/images/cat-birthday.jpg',
    price: 'From ₹1,200',
    tag: 'Celebration Classic',
    servings: '6–14 Servings'
  },
  {
    id: 'custom',
    name: 'Custom Atelier Cakes',
    subtitle: 'Palette-knife sculptural buttercream, custom color palettes, botanicals, and bespoke structural centerpieces.',
    image: '/assets/images/cat-custom.jpg',
    price: 'Custom Quote',
    tag: 'Bespoke Art',
    servings: '10–40+ Servings'
  },
  {
    id: 'cupcakes',
    name: 'Artisan Cupcakes',
    subtitle: 'Boxed flights of 6 or 12 artisan frosted petite cakes with whipped ganache, edible flowers, and golden accents.',
    image: '/assets/images/cat-cupcakes.jpg',
    price: 'Box from ₹650',
    tag: 'Party Favorite',
    servings: 'Box of 6 or 12'
  },
  {
    id: 'brownies',
    name: 'Fudgy Brownies',
    subtitle: 'Dense Belgian 70% dark chocolate brownies crowned with hand-harvested Maldon sea salt crystals and walnuts.',
    image: '/assets/images/cat-brownies.jpg',
    price: 'Box from ₹550',
    tag: 'Pure Indulgence',
    servings: 'Box of 4, 8, or 16'
  },
  {
    id: 'celebration',
    name: 'Tiered Celebrations',
    subtitle: 'Grand multi-tiered tiered architectural centerpieces finished with natural pressed botanicals and custom flavor tiers.',
    image: '/assets/images/cat-celebration.jpg',
    price: 'From ₹2,800',
    tag: 'Milestone Events',
    servings: '20–60+ Servings'
  }
];

export const CAKE_BUILD_STAGES = [
  {
    stage: 1,
    title: 'Dutch Cocoa Base Sponge',
    subtitle: 'Slow baked with French butter & Dutch cocoa',
    description: 'Triple-layered dark cocoa sponge, infused with pure vanilla syrup for deep moisture and delicate crumb structure. Chilled overnight to allow flavors to mature.',
    image: '/assets/images/build/stage-1.webp',
    details: ['Pure French Butter', 'Dutch-Processed Cocoa', 'Vanilla Bean Soak']
  },
  {
    stage: 2,
    title: 'Whipped Ganache Filling',
    subtitle: 'Silky 55% Belgian chocolate layer',
    description: 'Generous layers of slow-whipped 55% Belgian dark chocolate ganache balanced with light mascarpone Chantilly cream between sponge discs.',
    image: '/assets/images/build/stage-2.webp',
    details: ['Belgian Callebaut Dark', 'Fresh Dairy Cream', 'Light Mascarpone']
  },
  {
    stage: 3,
    title: 'Swiss Meringue Crumb Coat',
    subtitle: 'Velvety smooth protective coating',
    description: 'Hand-smoothed silky Swiss meringue buttercream coat, gently chilled to seal all moisture and structural integrity for knife-edge precision.',
    image: '/assets/images/build/stage-3.webp',
    details: ['Swiss Meringue Buttercream', 'Flawless Palette Finish', 'Moisture Sealed']
  },
  {
    stage: 4,
    title: 'Artisan Berries & Botanicals',
    subtitle: 'Fresh organic berries & cocoa curls',
    description: 'Cascading organic blackberries, fresh hand-picked raspberries, red currants, and delicate hand-carved dark chocolate shavings.',
    image: '/assets/images/build/stage-4.webp',
    details: ['Fresh Organic Raspberries', 'Hand-Curled Chocolate', 'Edible Floral Accents']
  },
  {
    stage: 5,
    title: 'Finished Atelier Masterpiece',
    subtitle: 'Glossy cocoa drip & celebration ready',
    description: 'Rich dark chocolate glaze drip, subtle gold luster accents, natural beeswax candle, and tied with bespoke linen ribbon.',
    image: '/assets/images/build/stage-5.webp',
    details: ['Glossy Chocolate Drip', 'Artisanal Box & Ribbon', 'Ready for Your Memory']
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Choose your cake style',
    desc: 'Browse our curated signature creations or share an Instagram mood board and color palette for a bespoke cake.'
  },
  {
    step: '02',
    title: 'Select flavor & servings',
    desc: 'Tell us your guest count, favorite sponge & filling, and any dietary preferences like 100% eggless or nut-aware.'
  },
  {
    step: '03',
    title: 'Lock in your date',
    desc: 'We limit daily oven slots to maintain artisanal small-batch quality. Confirm your slot 48 hours in advance via WhatsApp.'
  },
  {
    step: '04',
    title: 'Studio pickup or car delivery',
    desc: 'Collect from our studio kitchen or receive temperature-controlled safe car delivery directly to your venue.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Rustic Woodland Berry Cake',
    category: 'celebration',
    tag: 'Signature Celebration',
    image: '/assets/images/hero-cake.jpg',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Korean Pearl Bento Cake',
    category: 'petite',
    tag: 'Bento Edition',
    image: '/assets/images/cat-bento.jpg',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Vintage Ribbon Birthday Cake',
    category: 'celebration',
    tag: 'Vintage Piping',
    image: '/assets/images/cat-birthday.jpg',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Sculptural Palette Knife Texture',
    category: 'celebration',
    tag: 'Custom Atelier',
    image: '/assets/images/cat-custom.jpg',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 5,
    title: 'Fluted Cupcake Boxed Flights',
    category: 'petite',
    tag: 'Petite Treats',
    image: '/assets/images/cat-cupcakes.jpg',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 6,
    title: 'Sea Salt Fudgy Brownie Stacks',
    category: 'petite',
    tag: 'Belgian Dark',
    image: '/assets/images/cat-brownies.jpg',
    span: 'col-span-1 row-span-1'
  },
  {
    id: 7,
    title: 'Bespoke Linen & Wax Seal Packaging',
    category: 'packaging',
    tag: 'Packaging & Details',
    image: '/assets/images/gallery-packaging.jpg',
    span: 'col-span-1 md:col-span-2 row-span-1'
  }
];
