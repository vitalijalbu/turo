
import Home from '../pages/';
import AboutPage from '../pages/about.jsx';
import FormPage from '../pages/form.jsx';

import Login from '../pages/auth/login.jsx';
import Register from '../pages/auth/register.jsx';
import ForgotPassword from '../pages/auth/forgot-password.jsx';

import Account from '../pages/account/';
import Favorites from '../pages/account/favorites';

import Search from '../pages/search/';

import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import NotFoundPage from '../pages/404.jsx';

var routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: AboutPage,
  },{
    path: '/search',
    component: Search,
  },
   {
    path: '/account/favorites',
    component: Favorites,
  },
  {
    path: '/form',
    component: FormPage,
  },
    {
      path: "/signin",
      Component: Login,
    },  
    {
      path: "/signup",
      Component: Register,
    },  
    {
      path: "/forgot-password",
      Component: ForgotPassword,
    },
    {
      path: "/account",
      Component: Account,
    },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
