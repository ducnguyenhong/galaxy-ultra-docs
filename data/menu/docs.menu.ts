interface DocsMenu {
  title: string;
  route?: string;
  items?: DocsMenu[];
}

export const DOCS_MENU: DocsMenu[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Installation',
        route: '/docs/installation',
      },
      {
        title: 'Usage',
        route: '/docs/usage',
      },
      {
        title: 'Browser Support',
        route: '/docs/browser-support',
      },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Alert',
        route: '/components/alert',
      },
      {
        title: 'Breadcrumb',
        route: '/components/breadcrumb',
      },
      {
        title: 'Button',
        route: '/components/button',
      },
      {
        title: 'Card',
        route: '/components/card',
      },
      // {
      //   title: 'Checkbox',
      //   route: '/components/checkbox',
      // },
      // {
      //   title: 'Radio',
      //   route: '/components/radio',
      // },
      // {
      //   title: 'Upload',
      //   route: '/components/upload',
      // },
      // {
      //   title: 'Text Input',
      //   route: '/components/text-input',
      // },
      {
        title: 'Loading',
        route: '/components/loading',
      },
      {
        title: 'Modal',
        route: '/components/modal',
      },
      // {
      //   title: 'Table',
      //   route: '/components/table',
      // },
      // {
      //   title: 'DatePicker',
      //   route: '/components/datepicker',
      // },
      // {
      //   title: 'Rate',
      //   route: '/components/rate',
      // },
      {
        title: 'Radio',
        route: '/components/radio',
      },
      {
        title: 'Switch',
        route: '/components/switch',
      },
      // {
      //   title: 'Card',
      //   route: '/components/card',
      // },
      // {
      //   title: 'Carousel',
      //   route: '/components/carousel',
      // },
      // {
      //   title: 'Tabs',
      //   route: '/components/tabs',
      // },
      // {
      //   title: 'Progress',
      //   route: '/components/progress',
      // },
      // {
      //   title: 'Loading',
      //   route: '/components/loading',
      // },
    ],
  },
];
