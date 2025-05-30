import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '843'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '998'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e47'),
            routes: [
              {
                path: '/docs/Electronique/challenge 1',
                component: ComponentCreator('/docs/Electronique/challenge 1', 'e03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/IT/challenge 2',
                component: ComponentCreator('/docs/IT/challenge 2', '5cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Mecanique/challenge 3',
                component: ComponentCreator('/docs/Mecanique/challenge 3', 'ffa'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
