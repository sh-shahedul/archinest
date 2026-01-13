// export interface Service {
//   id: string;
//   title: string;
//   category: string;
//   shortDescription: string;
//   description: string;
//   price: number;
//   duration: string;
//   rating: number;
//   totalReviews: number;
//   image: string;
//   features: string[];
//   architect: {
//     id: string;
//     name: string;
//     experience: string;
//     avatar: string;
//   };
//   isFeatured: boolean;
// }



// export const serviceData: Service[] = [
//   {
//     id: "srv-001",
//     title: "Residential House Design",
//     category: "Residential",
//     shortDescription: "Modern residential house design solution.",
//     description:
//       "Complete house design including floor plan, elevation, 3D visualization, and working drawings.",
//     price: 50000,
//     duration: "15 - 20 Days",
//     rating: 4.8,
//     totalReviews: 120,
//     image: "/services/residential.jpg",
//     features: ["2D Floor Plan", "3D Exterior", "Furniture Layout"],
//     architect: {
//       id: "arch-01",
//       name: "Arif Rahman",
//       experience: "8+ Years",
//       avatar: "/architects/arif.jpg",
//     },
//     isFeatured: true,
//   },
//   {
//     id: "srv-002",
//     title: "Interior Design Service",
//     category: "Interior",
//     shortDescription: "Stylish interior design for home & office.",
//     description:
//       "Interior design with space planning, lighting, material selection, and 3D view.",
//     price: 35000,
//     duration: "10 - 15 Days",
//     rating: 4.6,
//     totalReviews: 95,
//     image: "/services/interior.jpg",
//     features: ["3D Interior", "Lighting Plan", "Material Selection"],
//     architect: {
//       id: "arch-02",
//       name: "Nusrat Jahan",
//       experience: "6+ Years",
//       avatar: "/architects/nusrat.jpg",
//     },
//     isFeatured: false,
//   },
//   {
//     id: "srv-003",
//     title: "Commercial Building Design",
//     category: "Commercial",
//     shortDescription: "Professional commercial building architecture.",
//     description:
//       "Design solutions for offices, shops, and commercial complexes.",
//     price: 80000,
//     duration: "20 - 30 Days",
//     rating: 4.9,
//     totalReviews: 150,
//     image: "/services/commercial.jpg",
//     features: ["Concept Design", "3D View", "Authority Drawing"],
//     architect: {
//       id: "arch-03",
//       name: "Mahmud Hasan",
//       experience: "10+ Years",
//       avatar: "/architects/mahmud.jpg",
//     },
//     isFeatured: true,
//   },
//   {
//     id: "srv-004",
//     title: "Landscape Design",
//     category: "Landscape",
//     shortDescription: "Aesthetic outdoor landscape design.",
//     description:
//       "Garden, rooftop, and outdoor landscape planning with 3D visualization.",
//     price: 25000,
//     duration: "7 - 10 Days",
//     rating: 4.5,
//     totalReviews: 60,
//     image: "/services/landscape.jpg",
//     features: ["Garden Layout", "Plant Selection", "3D Landscape"],
//     architect: {
//       id: "arch-04",
//       name: "Sabbir Ahmed",
//       experience: "5+ Years",
//       avatar: "/architects/sabbir.jpg",
//     },
//     isFeatured: false,
//   },
//   {
//     id: "srv-005",
//     title: "Office Interior Design",
//     category: "Office",
//     shortDescription: "Modern office interior planning.",
//     description:
//       "Functional and productive office interior design solutions.",
//     price: 40000,
//     duration: "12 - 18 Days",
//     rating: 4.7,
//     totalReviews: 80,
//     image: "/services/office-interior.jpg",
//     features: ["Workstation Layout", "Lighting Plan", "3D View"],
//     architect: {
//       id: "arch-05",
//       name: "Tanvir Hossain",
//       experience: "7+ Years",
//       avatar: "/architects/tanvir.jpg",
//     },
//     isFeatured: false,
//   },
//   {
//     id: "srv-006",
//     title: "Duplex House Design",
//     category: "Residential",
//     shortDescription: "Luxury duplex house architecture.",
//     description:
//       "Premium duplex house design with modern architectural elements.",
//     price: 65000,
//     duration: "18 - 25 Days",
//     rating: 4.8,
//     totalReviews: 110,
//     image: "/services/duplex.jpg",
//     features: ["Luxury Layout", "3D Elevation", "Structural Drawing"],
//     architect: {
//       id: "arch-06",
//       name: "Fahim Chowdhury",
//       experience: "9+ Years",
//       avatar: "/architects/fahim.jpg",
//     },
//     isFeatured: true,
//   },
//   {
//     id: "srv-007",
//     title: "Restaurant Interior Design",
//     category: "Interior",
//     shortDescription: "Creative restaurant interior concepts.",
//     description:
//       "Unique restaurant interior design focused on customer experience.",
//     price: 45000,
//     duration: "12 - 16 Days",
//     rating: 4.6,
//     totalReviews: 70,
//     image: "/services/restaurant.jpg",
//     features: ["Theme Design", "Lighting", "3D Interior"],
//     architect: {
//       id: "arch-07",
//       name: "Samira Islam",
//       experience: "6+ Years",
//       avatar: "/architects/samira.jpg",
//     },
//     isFeatured: false,
//   },
//   {
//     id: "srv-008",
//     title: "Rooftop Garden Design",
//     category: "Landscape",
//     shortDescription: "Green rooftop garden planning.",
//     description:
//       "Eco-friendly rooftop garden design with seating and greenery.",
//     price: 20000,
//     duration: "7 - 10 Days",
//     rating: 4.4,
//     totalReviews: 55,
//     image: "/services/rooftop.jpg",
//     features: ["Green Layout", "Seating Plan", "Waterproof Planning"],
//     architect: {
//       id: "arch-08",
//       name: "Rakibul Hasan",
//       experience: "4+ Years",
//       avatar: "/architects/rakib.jpg",
//     },
//     isFeatured: false,
//   },
//   {
//     id: "srv-009",
//     title: "Apartment Building Design",
//     category: "Residential",
//     shortDescription: "Multi-storey apartment design service.",
//     description:
//       "Complete apartment building design with authority approval drawings.",
//     price: 90000,
//     duration: "25 - 35 Days",
//     rating: 4.9,
//     totalReviews: 165,
//     image: "/services/apartment.jpg",
//     features: ["Floor Plan", "3D View", "Authority Drawing"],
//     architect: {
//       id: "arch-09",
//       name: "Imran Kabir",
//       experience: "11+ Years",
//       avatar: "/architects/imran.jpg",
//     },
//     isFeatured: true,
//   },
//   {
//     id: "srv-010",
//     title: "Structural Consultancy",
//     category: "Consultancy",
//     shortDescription: "Professional structural design & consultancy.",
//     description:
//       "Safe and cost-effective structural design and consultation service.",
//     price: 30000,
//     duration: "5 - 7 Days",
//     rating: 4.7,
//     totalReviews: 90,
//     image: "/services/structural.jpg",
//     features: ["Structural Analysis", "Cost Optimization", "Safety Check"],
//     architect: {
//       id: "arch-10",
//       name: "Mehedi Hasan",
//       experience: "12+ Years",
//       avatar: "/architects/mehedi.jpg",
//     },
//     isFeatured: false,
//   },
// ];




import { TService } from "@/types/servces";
export const serviceData: TService[] = [
  {
    id: "srv-001",
    title: "Residential House Design",
    category: "Residential",
    shortDescription: "Modern residential house design solution.",
    description:
      "Complete house design including floor plan, elevation, 3D visualization, and working drawings.",
    price: 50000,
    duration: "15 - 20 Days",
    rating: 4.8,
    totalReviews: 120,
    image: "https://i.pinimg.com/736x/23/9d/3e/239d3e03e02370c926e8f787a713a7f8.jpg",

    architectId: "arch-01",
    architectName: "Arif Rahman",
    architectExperience: "8+ Years",
    architectAvatar: "/architects/arif.jpg",

    isFeatured: true,
  },
  {
    id: "srv-002",
    title: "Interior Design Service",
    category: "Interior",
    shortDescription: "Stylish interior design for home & office.",
    description:
      "Interior design with space planning, lighting, material selection, and 3D view.",
    price: 35000,
    duration: "10 - 15 Days",
    rating: 4.6,
    totalReviews: 95,
    image: "https://i.pinimg.com/1200x/0e/6b/0c/0e6b0c91cdb23868bfa5aa7c65550213.jpg",

    architectId: "arch-02",
    architectName: "Nusrat Jahan",
    architectExperience: "6+ Years",
    architectAvatar: "https://i.pinimg.com/1200x/0e/6b/0c/0e6b0c91cdb23868bfa5aa7c65550213.jpg",

    isFeatured: false,
  },
  {
    id: "srv-003",
    title: "Commercial Building Design",
    category: "Commercial",
    shortDescription: "Professional commercial building architecture.",
    description:
      "Design solutions for offices, shops, and commercial complexes.",
    price: 80000,
    duration: "20 - 30 Days",
    rating: 4.9,
    totalReviews: 150,
    image: "https://i.pinimg.com/1200x/70/a0/31/70a031439d65ee3afcd8475b0afd5d9c.jpg",

    architectId: "arch-03",
    architectName: "Mahmud Hasan",
    architectExperience: "10+ Years",
    architectAvatar: "/architects/mahmud.jpg",

    isFeatured: true,
  },
  {
    id: "srv-004",
    title: "Landscape Design",
    category: "Landscape",
    shortDescription: "Aesthetic outdoor landscape design.",
    description:
      "Garden, rooftop, and outdoor landscape planning with 3D visualization.",
    price: 25000,
    duration: "7 - 10 Days",
    rating: 4.5,
    totalReviews: 60,
    image: "https://i.pinimg.com/736x/e8/c5/cc/e8c5cc43d6286df9210a5d681ddfb69b.jpg",

    architectId: "arch-04",
    architectName: "Sabbir Ahmed",
    architectExperience: "5+ Years",
    architectAvatar: "/architects/sabbir.jpg",

    isFeatured: false,
  },
  {
    id: "srv-005",
    title: "Office Interior Design",
    category: "Office",
    shortDescription: "Modern office interior planning.",
    description:
      "Functional and productive office interior design solutions.",
    price: 40000,
    duration: "12 - 18 Days",
    rating: 4.7,
    totalReviews: 80,
    image: "https://i.pinimg.com/1200x/98/76/79/987679cf4377673a156a4750b84914af.jpg",

    architectId: "arch-05",
    architectName: "Tanvir Hossain",
    architectExperience: "7+ Years",
    architectAvatar: "/architects/tanvir.jpg",

    isFeatured: false,
  },
  {
    id: "srv-006",
    title: "Duplex House Design",
    category: "Residential",
    shortDescription: "Luxury duplex house architecture.",
    description:
      "Premium duplex house design with modern architectural elements.",
    price: 65000,
    duration: "18 - 25 Days",
    rating: 4.8,
    totalReviews: 110,
    image: "https://i.pinimg.com/736x/0e/be/e9/0ebee9fd266a7767d5bc6535845c923d.jpg",

    architectId: "arch-06",
    architectName: "Fahim Chowdhury",
    architectExperience: "9+ Years",
    architectAvatar: "/architects/fahim.jpg",

    isFeatured: true,
  },
  {
    id: "srv-007",
    title: "Restaurant Interior Design",
    category: "Interior",
    shortDescription: "Creative restaurant interior concepts.",
    description:
      "Unique restaurant interior design focused on customer experience.",
    price: 45000,
    duration: "12 - 16 Days",
    rating: 4.6,
    totalReviews: 70,
    image: "https://i.pinimg.com/736x/22/ba/09/22ba09733209998227ac396931db4849.jpg",

    architectId: "arch-07",
    architectName: "Samira Islam",
    architectExperience: "6+ Years",
    architectAvatar: "/architects/samira.jpg",

    isFeatured: false,
  },
  {
    id: "srv-008",
    title: "Rooftop Garden Design",
    category: "Landscape",
    shortDescription: "Green rooftop garden planning.",
    description:
      "Eco-friendly rooftop garden design with seating and greenery.",
    price: 20000,
    duration: "7 - 10 Days",
    rating: 4.4,
    totalReviews: 55,
    image: "https://i.pinimg.com/1200x/6d/a0/69/6da069da5b07afaaad76e969a673338b.jpg",

    architectId: "arch-08",
    architectName: "Rakibul Hasan",
    architectExperience: "4+ Years",
    architectAvatar: "/architects/rakib.jpg",

    isFeatured: false,
  },
  {
    id: "srv-009",
    title: "Apartment Building Design",
    category: "Residential",
    shortDescription: "Multi-storey apartment design service.",
    description:
      "Complete apartment building design with authority approval drawings.",
    price: 90000,
    duration: "25 - 35 Days",
    rating: 4.9,
    totalReviews: 165,
    image: "https://i.pinimg.com/736x/3b/c1/35/3bc1355d717d970f8de55b059634246d.jpg",

    architectId: "arch-09",
    architectName: "Imran Kabir",
    architectExperience: "11+ Years",
    architectAvatar: "/architects/imran.jpg",

    isFeatured: true,
  },
  {
    id: "srv-010",
    title: "Structural Consultancy",
    category: "Consultancy",
    shortDescription: "Professional structural consultancy service.",
    description:
      "Safe and cost-effective structural design and consultation.",
    price: 30000,
    duration: "5 - 7 Days",
    rating: 4.7,
    totalReviews: 90,
    image: "https://i.pinimg.com/1200x/c1/d8/c0/c1d8c041c36bef654845179d04a997d2.jpg",

    architectId: "arch-10",
    architectName: "Mehedi Hasan",
    architectExperience: "12+ Years",
    architectAvatar: "/architects/mehedi.jpg",

    isFeatured: false,
  },
];
