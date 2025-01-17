module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Default Page'
  },
  fields: {
    add: {
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
      headerImage: {
        type: 'area',
        required: true,
        options: {
          widgets: {
            '@apostrophecms/image': {}
          },
          max: 1
        }
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
        fields: [
          'title',
          'heading',
          'subheading',
          'headerImage',
          'main'
        ]
      }
    }
  }
};