// Single source of truth for site content. Edit here to update copy, contacts and ranges.

export const site = {
  name: "Westward Clothing",
  url: "https://westward-clothing.co.za",
  tagline: "Corporate apparel, workwear & branded clothing",
  description:
    "Westward Clothing designs, manufactures and supplies corporate apparel, workwear and branded clothing across South Africa — golf shirts, lounge shirts, jackets, fleece and more, with in-house embroidery and printing.",
  // Fill these in to show them across the site (header, footer, contact page, quote form).
  email: "",
  phone: "",
  whatsapp: "", // international format without +, e.g. 27821234567
  address: "",
  hours: "", // e.g. "Mon – Fri, 08:00 – 16:30"
  facebook: "https://www.facebook.com/Westward-143156733082209/",
  messenger: "https://m.me/143156733082209",
};

export type IconKey =
  | "polo"
  | "tee"
  | "shirt"
  | "outdoor"
  | "pit"
  | "knit"
  | "sweater"
  | "fleece"
  | "hoodie"
  | "jacket"
  | "trousers"
  | "workwear"
  | "chef"
  | "cap"
  | "kids";

export type Category = {
  slug: string;
  name: string;
  icon: IconKey;
  blurb: string;
  ideal: string[];
};

export const categories: Category[] = [
  {
    slug: "golf-shirts",
    name: "Golf Shirts",
    icon: "polo",
    blurb:
      "The workhorse of corporate wear. Cotton-lycra piqué and moisture-wicking dri-fit golfers in matching men's and ladies' cuts.",
    ideal: ["Corporate teams", "Golf days", "Sales & promo staff"],
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    icon: "tee",
    blurb:
      "From everyday cotton tees to silky bamboo-blend performance shirts — a clean canvas for print or embroidery.",
    ideal: ["Events & campaigns", "Fun runs", "Staff uniforms"],
  },
  {
    slug: "lounge-shirts",
    name: "Lounge Shirts",
    icon: "shirt",
    blurb:
      "Cotton-rich checks, stripes and pin-stripes with tailored ladies' fits and button-down men's collars for front-of-house teams.",
    ideal: ["Reception & front office", "Banking & finance", "Hospitality"],
  },
  {
    slug: "outdoor-shirts",
    name: "Outdoor Shirts",
    icon: "outdoor",
    blurb:
      "Combed cotton poplin bush shirts with panelled bodies, flap pockets and roll-up sleeve tabs. Built for the field.",
    ideal: ["Tourism & lodges", "Agriculture", "Field staff"],
  },
  {
    slug: "pit-shirts",
    name: "Pit Shirts",
    icon: "pit",
    blurb:
      "Bold, panelled motorsport-style shirts that make a team look like a team — great for branding front and back.",
    ideal: ["Motorsport & clubs", "Brand activations", "Workshops"],
  },
  {
    slug: "knitwear",
    name: "Knitwear",
    icon: "knit",
    blurb:
      "V-neck jerseys, cardigans and sleeveless knits that layer neatly over a lounge shirt through the winter months.",
    ideal: ["Schools", "Security & reception", "Corporate winterwear"],
  },
  {
    slug: "fleece-sweaters",
    name: "Fleece Sweaters",
    icon: "sweater",
    blurb: "Brushed-back fleece sweaters — warm, hard-wearing and easy to brand.",
    ideal: ["Warehouse teams", "Schools & clubs", "Casual Fridays"],
  },
  {
    slug: "polar-fleece",
    name: "Polar Fleece",
    icon: "fleece",
    blurb:
      "Anti-pill microfibre polar fleece jackets in classic, two-tone and zip-off-sleeve styles. A South African winter staple.",
    ideal: ["Outdoor staff", "Corporate gifting", "Teams & clubs"],
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    icon: "hoodie",
    blurb: "Pull-over and zip-through hoodies for teams, schools and merch drops.",
    ideal: ["Matric & school leavers", "Merchandise", "Tech teams"],
  },
  {
    slug: "jackets",
    name: "Jackets",
    icon: "jacket",
    blurb:
      "Soft shells, showerproof jackets, reversible twill jackets and sleeveless body-warmers — with embroidery access built in.",
    ideal: ["Sales reps", "Site managers", "Executive gifting"],
  },
  {
    slug: "trousers",
    name: "Trousers",
    icon: "trousers",
    blurb: "Chinos, formal and utility trousers to complete a uniform.",
    ideal: ["Corporate uniforms", "Hospitality", "Retail floor staff"],
  },
  {
    slug: "workwear",
    name: "Workwear",
    icon: "workwear",
    blurb:
      "Conti suits, overalls, work shirts and PPE-friendly garments that stand up to real work.",
    ideal: ["Construction & mining", "Factories", "Maintenance crews"],
  },
  {
    slug: "chefswear",
    name: "Chefswear",
    icon: "chef",
    blurb: "Chef jackets, aprons and kitchen wear for professional kitchens and catering teams.",
    ideal: ["Restaurants", "Catering", "Culinary schools"],
  },
  {
    slug: "headwear",
    name: "Headwear",
    icon: "cap",
    blurb: "Peak caps, bucket hats and beanies — the easiest way to put your logo on every head.",
    ideal: ["Promotions", "Outdoor teams", "Events"],
  },
  {
    slug: "kids",
    name: "Kids",
    icon: "kids",
    blurb: "Golfers, tees and fleece in kids' sizes for schools, clubs and family days.",
    ideal: ["Schools", "Sports clubs", "Family days"],
  },
];

export type Range = {
  slug: string;
  name: string;
  category: string;
  image: string;
  summary: string;
  features: string[];
  sizes: string;
  colours: string[];
  fit?: string;
};

export const ranges: Range[] = [
  {
    slug: "hugo-jacket",
    name: "Hugo Jacket",
    category: "jackets",
    image: "/ranges/hugo-jackets.webp",
    summary: "Water- and wind-proof nylon jacket with a fold-away hood. Don't get caught without one.",
    features: [
      "Nylon water- and wind-proof fabric",
      "Mesh lining and fold-away hood",
      "Adjustable hem and Velcro cuffs",
      "Zipped outer welt pockets",
      "Inner zipped pockets and cellphone pouch",
    ],
    sizes: "XS – 5XL",
    colours: ["Stone", "Bottle", "Maroon", "Black"],
    fit: "Men's and ladies' cuts",
  },
  {
    slug: "cruz-geran-jackets",
    name: "Cruz & Geran Jackets",
    category: "jackets",
    image: "/ranges/cruz-geran-jackets.webp",
    summary: "Two smart-casual jackets: the showerproof microfibre Cruz and the soft seal-skin Geran.",
    features: [
      "Cruz: soft, showerproof microfibre with three inner pockets",
      "Cruz: adjustable hem and cuff studs",
      "Geran: brushed seal-skin fabric with mesh lining",
      "Geran: toggle collar, metal zips and fold-away hood",
    ],
    sizes: "XS – 5XL (Cruz) · XS – 4XL (Geran)",
    colours: ["Navy", "Navy / Stone"],
  },
  {
    slug: "carlo-reversible-jacket",
    name: "Carlo Reversible Jacket",
    category: "jackets",
    image: "/ranges/carlo-reversible-jacket.webp",
    summary: "Brushed cotton twill jacket that wears two ways — with zipped access for clean embroidery.",
    features: [
      "Brushed 100% cotton twill",
      "Fully reversible",
      "Zipped embroidery access",
      "Two outer welt pockets",
      "Double-button cuff",
    ],
    sizes: "XS – 4XL",
    colours: ["Black / Khaki", "Navy / Stone"],
  },
  {
    slug: "sporty-soft-shell",
    name: "Sporty Soft Shell",
    category: "jackets",
    image: "/ranges/sporty-soft-shell.webp",
    summary: "Lightweight thermal soft shell with four-way stretch and reflective details.",
    features: [
      "Lightweight thermal soft shell",
      "Lycra four-way stretch for comfort",
      "Reflective zips and back inserts",
    ],
    sizes: "S – 6XL",
    colours: ["Black / Lime / Silver", "Black / Silver", "Navy / Silver", "Red / Silver"],
    fit: "Men's and ladies' cuts",
  },
  {
    slug: "torino-soft-shell",
    name: "Torino Soft Shell",
    category: "jackets",
    image: "/ranges/torino-soft-shell.webp",
    summary: "Bi-stretch bonded soft shell with a micro-polar fleece inner — in Original and Bonded styles.",
    features: [
      "Bi-stretch fabric bonded to micro-polar fleece",
      "Outer right chest zip pocket",
      "Zipped welt pockets",
      "Ladies' fitted style with slanted chest pocket",
    ],
    sizes: "Men's S – 5XL · Ladies' S – 3XL",
    colours: ["Black", "Navy"],
  },
  {
    slug: "valencia-sleeveless",
    name: "Valencia Sleeveless Jacket",
    category: "jackets",
    image: "/ranges/valencia-sleeveless.webp",
    summary: "Rip-stop nylon body-warmer with a zip built in for embroidery.",
    features: [
      "100% nylon rip-stop, water-resistant",
      "Outer zipped welt pockets",
      "Embroidery zip on left chest",
      "Men's inner zipped chest pocket",
    ],
    sizes: "Men's S – 4XL · Ladies' S – 3XL",
    colours: ["Navy", "Black"],
  },
  {
    slug: "genova-fleece",
    name: "Genova Fleece Jacket",
    category: "polar-fleece",
    image: "/ranges/genova-fleece.webp",
    summary: "280gsm silky thermal microfibre polar fleece with a slimline panelled body.",
    features: [
      "280gsm thermal microfibre polar fleece",
      "Body panels for a slimline look",
      "Zipped welt pockets",
      "Full front zip",
    ],
    sizes: "S – 5XL",
    colours: ["Red", "Fawn", "Black", "Navy"],
    fit: "Men's and ladies' cuts",
  },
  {
    slug: "two-tone-polar-fleece",
    name: "Two-Tone Polar Fleece",
    category: "polar-fleece",
    image: "/ranges/twotone-polar-fleece.webp",
    summary: "Anti-pill 280gsm fleece with contrast sleeve, collar panel and chunky zips.",
    features: [
      "280gsm anti-pill microfibre polar fleece",
      "Contrast sleeve and collar panel",
      "Contrast chunky zips",
      "Elasticised cuffs",
    ],
    sizes: "Men's S – 5XL · Ladies' XS – 3XL",
    colours: ["Silver / Black", "Stone / Black", "Red / Black", "Navy / Harbour"],
  },
  {
    slug: "zip-off-polar-fleece",
    name: "Zip-Off Polar Fleece",
    category: "polar-fleece",
    image: "/ranges/zip-off-polar-fleece.webp",
    summary: "Unisex fleece with zip-off sleeves — a jacket and a body-warmer in one.",
    features: ["Unisex 250gsm polar fleece", "Versatile zip-off sleeves", "Elasticised cuffs"],
    sizes: "Unisex",
    colours: ["Black", "Navy", "Stone"],
  },
  {
    slug: "flash-golf-shirt",
    name: "Flash Golf Shirt",
    category: "golf-shirts",
    image: "/ranges/flash-golf-shirts.webp",
    summary: "Dri-fit performance golfer with a contrast flash across chest and shoulder.",
    features: [
      "140gsm dri-fit polyester interlock",
      "Contrast flash on right chest and left shoulder",
      "Form-fitted style with zipped neckline",
    ],
    sizes: "S – 5XL",
    colours: ["Black / Red", "Red / Black", "Lime / White", "White / Black", "Navy / White"],
    fit: "Men's and ladies' to match",
  },
  {
    slug: "boss-golf-shirt",
    name: "Boss Golf Shirt",
    category: "golf-shirts",
    image: "/ranges/boss-golfers.webp",
    summary: "200gsm cotton-lycra golfer with contrast trim — a sharp, slim-fit statement.",
    features: [
      "200gsm cotton-lycra fabric",
      "Contrast collar and sleeve-edge trim",
      "Ladies': vertical contrast piping, four-button placket",
      "Men's: zipped neckline, slim fit",
    ],
    sizes: "S – 5XL",
    colours: ["Red / Black"],
    fit: "Men's and ladies' to match",
  },
  {
    slug: "hamilton-golf-shirt",
    name: "Hamilton Golf Shirt",
    category: "golf-shirts",
    image: "/ranges/hamilton-golfer.webp",
    summary: "Superfine cotton-lycra piqué with a zipped collar and contrast trim.",
    features: [
      "200gsm superfine cotton-lycra piqué",
      "Zipped collar, form-fitted style",
      "Contrast trim around zip, collar and cuffs",
    ],
    sizes: "S – 5XL",
    colours: ["White / Black"],
    fit: "Men's and ladies' to match",
  },
  {
    slug: "cationic-bamboo-tee",
    name: "Cationic Bamboo T-Shirt",
    category: "t-shirts",
    image: "/ranges/cationic-bamboo.webp",
    summary: "Silky bamboo-blend performance tee with a cationic heathered finish.",
    features: [
      "140gsm dri-fit bamboo / polyester interlock",
      "Cationic silky-feel fabric",
      "Flat-lock stitching",
      "V-neck styling, regular sleeve",
    ],
    sizes: "S – 5XL",
    colours: ["Charcoal", "Lime", "Turquoise", "Blue"],
    fit: "Men's and ladies' cuts",
  },
  {
    slug: "dri-fit-bamboo-tee",
    name: "Dri-Fit Bamboo T-Shirt",
    category: "t-shirts",
    image: "/ranges/drifit-bamboo.webp",
    summary: "Soft, breathable bamboo-blend tee — ladies' scoop neck, men's crew neck.",
    features: [
      "140gsm dri-fit bamboo / polyester interlock",
      "Silky-feel fabric with flat-lock stitching",
      "Ladies' fitted scoop neck · Men's crew neck",
    ],
    sizes: "S – 5XL",
    colours: ["White", "Red", "Navy", "Black"],
  },
  {
    slug: "outdoor-long-sleeve",
    name: "Outdoor Long Sleeve Shirt",
    category: "outdoor-shirts",
    image: "/ranges/outdoor-ls-shirts.webp",
    summary: "Combed cotton poplin bush shirt with roll-up sleeve tabs.",
    features: [
      "150gsm combed cotton poplin",
      "Panelled body for a comfortable fit",
      "Pockets with flaps",
      "Roll-up sleeve tabs",
    ],
    sizes: "S – 5XL",
    colours: ["White", "Khaki"],
    fit: "Men's and ladies' cuts",
  },
  {
    slug: "outdoor-short-sleeve",
    name: "Outdoor Short Sleeve Shirt",
    category: "outdoor-shirts",
    image: "/ranges/outdoor-ss-shirts.webp",
    summary: "The short-sleeve field shirt, in seven hard-working colours.",
    features: [
      "150gsm combed cotton poplin",
      "Panelled body for a comfortable fit",
      "Button-flap chest pockets",
    ],
    sizes: "S – 5XL",
    colours: ["Red", "Black", "Navy", "White", "Khaki", "Tobacco", "Military Green"],
    fit: "Men's and ladies' cuts",
  },
  {
    slug: "bergamo-check",
    name: "Bergamo Check Lounge Shirt",
    category: "lounge-shirts",
    image: "/ranges/bergamo-check.webp",
    summary: "Cotton-rich check with navy contrast on the inside collar, cuff and button stand.",
    features: [
      "110gsm cotton-rich fabric",
      "Navy trim inside collar, cuff and button stand",
      "Ladies': tailored ¾ sleeve with curved hem",
      "Men's: long sleeve, back box pleat, hidden button-down collar",
    ],
    sizes: "S – 5XL",
    colours: ["Sky / White with navy trim"],
  },
  {
    slug: "fine-check",
    name: "Fine Check Lounge Shirt",
    category: "lounge-shirts",
    image: "/ranges/fine-check-lounge-shirts.webp",
    summary: "A subtle fine check that reads as a solid from across the room.",
    features: [
      "110gsm cotton-rich, finely checked fabric",
      "Ladies': hidden button placket, darts and curved hem",
      "Men's: centre-back box pleat",
      "Short sleeve available",
    ],
    sizes: "S – 5XL",
    colours: ["Denim", "Charcoal", "Airforce", "Chambray"],
  },
  {
    slug: "seville-pin-stripe",
    name: "Seville Pin Stripe Lounge Shirt",
    category: "lounge-shirts",
    image: "/ranges/seville-pin-stripe-lounge-shirts.webp",
    summary: "Cotton-rich fine-weave pin-stripe with a concealed button-down collar.",
    features: [
      "Pin-stripe cotton-rich fine-weave fabric",
      "Men's: short or long sleeve, concealed button-down collar",
      "Ladies': ¾ or long sleeve to match",
    ],
    sizes: "S – 5XL",
    colours: ["Sand / White", "Sapphire / White", "Platinum / White"],
  },
  {
    slug: "verona-stripe",
    name: "Verona Stripe Lounge Shirt",
    category: "lounge-shirts",
    image: "/ranges/verona-stripe-lounge-shirts.webp",
    summary: "Fine-weave striped polycotton in deep, confident tones.",
    features: [
      "Striped polycotton, fine weave",
      "Men's: long or short sleeve, concealed button-down collar",
      "Ladies': elbow-length fashion sleeve, classic collar",
    ],
    sizes: "S – 5XL",
    colours: ["Navy / White", "Black / White"],
  },
  {
    slug: "vichi-check",
    name: "Vichi Check Lounge Shirt",
    category: "lounge-shirts",
    image: "/ranges/vichi-check.webp",
    summary: "A crisp gingham with a slim men's fit and a tailor-fitted ladies' cut.",
    features: [
      "110gsm check fabric",
      "Men's: slim fit, adjustable cuffs, button-down collar",
      "Ladies': tailor-fitted with darts and curved hem",
      "Short sleeve on request",
    ],
    sizes: "S – 6XL",
    colours: ["Navy / White", "Wine Red / White"],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getRange = (slug: string) => ranges.find((r) => r.slug === slug);
export const rangesFor = (category: string) => ranges.filter((r) => r.category === category);

export const nav = [
  { href: "/collections", label: "Collections" },
  { href: "/ranges", label: "Featured Ranges" },
  { href: "/branding", label: "Branding" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
