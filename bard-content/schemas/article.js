export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'articleParent',
      title: 'Article Parent',
      type: 'reference',
      to: [{type: 'article'}]
    },
    {
      name: 'embed',
      title: 'Embed',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'url'
    }
  ],
}
