// TODO: Toggle magic for button (switch image?), maybe enforce stricter button OR link types.
type FeaturedActionMetadataType = {
  order: number; 
  type: 'link' | 'button';
  alt: string;
  href?: string;
}

const FEATURED_ACTIONS_METADATA: {
  [key: string]: FeaturedActionMetadataType
} = {
  'plugins.jpg': {
    order: 1,
    type: 'link',
    alt: 'Plugins: They can source content, transform data, and more.',
    href: 'https://www.gatsbyjs.com/plugins',
  },
  'themes.jpg': {
    order: 2,
    type: 'link',
    alt: 'Themes: Wrapped in a single package, installed as a dependency.',
    href: 'https://www.gatsbyjs.com/plugins?=gatsby-theme',
  },
  'recipes.jpg': {
    order: 3,
    type: 'link',
    alt: 'Useful default Recipes built in, with many more to choose from.',
    href: 'https://www.gatsbyjs.com/docs/recipes',
  },
  'magic.jpg': {
    order: 4,
    type: 'button',
    alt: 'Magic? Sound on, expect motion.',
  },
};

export default FEATURED_ACTIONS_METADATA;