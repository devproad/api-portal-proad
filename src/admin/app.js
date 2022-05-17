import AuthLogo from './extensions/Logo_Proad.svg';
import MenuLogo from './extensions/Logo_Proad.svg';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    menu:{
      logo: MenuLogo,
    },
    tutorials: {
      enabled: false,
    },
    locales: [
      'pt-BR',
      'en',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
