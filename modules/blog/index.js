module.exports = {
  extend: '@apostrophecms/piece-type',
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
        label: 'Headingss',
        required: true
      },
      subheading: {
        type: 'string',
        label: 'Subheading',
        required: true
      },
      author: {
        type: 'string',
        label: 'Author',
        required: true
      },
      publicationDate: {
        type: 'date',
        label: 'Publication date',
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
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'bulletList',
                'orderedList'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            },
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'headerImage', 'heading', 'subheading', 'author', 'publicationDate', 'metatitle', 'meta_description',
        'meta_keywords', 'main' ]
      }
    }
  }
};