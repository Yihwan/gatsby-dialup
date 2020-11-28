// TODO: Toggle magic for button (switch image?), maybe enforce stricter button OR link types.
export type ActionMetadataType = {
  order: number; 
  type: 'link' | 'button';
  alt: string;
  href?: string;
}

const ACTIONS_METADATA: {
  [key: string]: ActionMetadataType
} = {
  'plugins.jpg': {
    order: 1,
    type: 'link',
    alt: 'Incandescent lightbulb clipart with caption Plugins: They can source content, transform data, and more.',
    href: 'https://www.gatsbyjs.com/plugins',
  },
  'themes.jpg': {
    order: 2,
    type: 'link',
    alt: 'CD-ROM and floppy disk clipart with caption Themes: Wrapped in a single package, installed as a dependency.',
    href: 'https://www.gatsbyjs.com/plugins?=gatsby-theme',
  },
  'recipes.jpg': {
    order: 3,
    type: 'link',
    alt: 'Recipe box clipart with caption Useful default Recipes built in, with many more to choose from.',
    href: 'https://www.gatsbyjs.com/docs/recipes',
  },
  'magic.jpg': {
    order: 4,
    type: 'button',
    alt: 'Magic? Sound on, expect motion.',
  },
  'magic-on.jpg': {
    order: 5,
    type: 'button',
    alt: 'It\'s on. Click again to turn off.',
  },
};

export default ACTIONS_METADATA;