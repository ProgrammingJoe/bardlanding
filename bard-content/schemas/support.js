export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
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
      name: 'parent',
      title: 'Parent',
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
  ],
}
