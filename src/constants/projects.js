import viseffect from '../assets/viseffect.png'
// import estore from '../assets/estore.png'
import moviesport from '../assets/moviesport.png'
export const PROJECTS = [
  {
    id: '1',
    title: 'VisEffect',
    description:
      'VisEffect is a visualizing tool that shows how different pathfinding & Sorting algorithms work. Algorithms like Dijkstra, A*, Merge Sort etc are include here.',
    image: {
      src: viseffect,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://viseffect.github.io',
      repo: 'https://github.com/panchal2002/VisEffect',
    },
    technologies: [
      '#JavaScript',
      '#Jquery',
      '#HTML',
      '#CSS',
      '#BootStrap',
    ],
  },
  {
    id: '2',
    title: 'eStore - eCommerce App',
    description:
      'A eCommerce web app built with React JS, Redux & Firebase that includes Cart Functionality, User Authentication, Previous Orders, Searching, Pagination, Payment Gatway Functionality etc.',
    image: {
      src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: '#',
      repo: 'https://github.com/panchal2002/estore',
    },
    technologies: [
      '#react-js',
      '#express',
      '#react-query',
      '#react-redux',
      '#firebase-auth',
      '#JavaScript',
      '#scss',
    ],
  },
  {
    id: '3',
    title: 'MoviesPort',
    description:
      'MoviesPort made with advanced react, redux & firebase which uses redux thunk to asynchronously fetch movie data of over 30 thousand movies from TMDB API.',
    image: {
      src: moviesport,
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://moviesport.netlify.app/',
      repo: 'https://github.com/panchal2002/MoviesPort',
    },
    technologies: [
      '#react-js',
      '#react-redux',
      '#JavaScript',
      '#Firebase',
      '#TMDB-API',
    ],
  },
  // {
  //   id: '4',
  //   title: 'Places Mobile App',
  //   description:
  //     'A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/rn-places',
  //     repo: 'https://github.com/vsnaichuk/RN-places',
  //   },
  //   technologies: [
  //     '#react-native',
  //     '#typescript',
  //     '#expo',
  //     '#mobx',
  //     '#sqlite',
  //     '#react-native-maps',
  //     '#expo-location',
  //   ],
  // },
  // {
  //   id: '5',
  //   title: 'Shopping Cart',
  //   description:
  //     'Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://shopping-cart-sv.netlify.app/',
  //     repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
  //   },
  //   technologies: [
  //     '#react',
  //     '#typescript',
  //     '#material-ui',
  //     '#styled-components',
  //     '#swr',
  //     '#fakestoreapi',
  //   ],
  // },
];
