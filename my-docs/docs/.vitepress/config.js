export default {
     title: 'My Documentation',
     description: 'PHP and MySQL Guides',
     themeConfig: {
       nav: [
         { text: 'Home', link: '/' },
         { text: 'PHP', link: '/php/' },
         { text: 'MySQL', link: '/mysql/' }
       ],
       sidebar: {
         '/php/': [
           {
             text: 'PHP Guide',
             collapsible: false,

             items: [
               { text: 'Introduction', link: '/php/' },
               { text: 'PHP Basics', link: '/php/basics' },
               { text: 'Advanced PHP', link: '/php/advanced' }
             ]
           }
         ],
         '/mysql/': [
           {
             text: 'MySQL Guide',
             collapsible: false,

             items: [
               { text: 'Introduction', link: '/mysql/' },
               { text: 'MySQL Queries', link: '/mysql/queries' },
               { text: 'MySQL Optimization', link: '/mysql/optimization' }
             ]
           }
         ]
       }
     }
   }
   