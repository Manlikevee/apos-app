module.exports = {
  extend: '@apostrophecms/piece-page-type',
  options: {
    perPage: 5
  },
  fields: {
    add: {
      headerImage: {
        type: 'area',
        label: 'Header image',
        required: true,
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          max: 1
        }
      },
      heading: {
        type: 'string',
        label: 'Heading',
        required: true
      },
      subheading: {
        type: 'string',
        label: 'Subheading',
        required: true
      },
      metatitle: {
        type: 'string',
        label: 'Page_Title',
        required: true
      },
      meta_description: {
        type: 'string',
        label: 'Page_Description',
        required: true
      },
      meta_keywords: {
        type: 'string',
        label: 'Page_Keywords',
        required: true
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'headerImage',
          'heading',
          'subheading',
          'metatitle', 
          'meta_description',
        'meta_keywords',
        ]
      }
    }
  }
};