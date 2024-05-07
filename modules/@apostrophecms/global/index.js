module.exports = {
    fields: {
      add: {
        brand: {
          type: 'string',
          label: 'Brand name',
          required: true
        },
        twitterUrl: {
            type: 'url',
            label: 'Twitter URL'
          },
          facebookUrl: {
            type: 'url',
            label: 'Facebook URL'
          },
          githubUrl: {
            type: 'url',
            label: 'Github URL'
          },
          copyright: {
            type: 'string',
            label: 'Copyright text',
            required: true
          },
        pages: {
          type: 'array',
          titleField: 'Pages',
          fields: {
            add: {
              label: {
                type: 'string',
                label: 'Page label'
              },
              _page: {
                label: 'Page to link',
                type: 'relationship',
                withType: '@apostrophecms/page',
                max: 1,
                required: true,
                builders: {
                  project: {
                    title: 1,
                    _url: 1
                  }
                }
              }
            }
          }
        }
      },
      group: {
        navigation: {
          label: 'Navigation links',
          fields: [ 'brand', 'pages' ]
        },
        footer: {
            label: 'Footer URLs and text',
            fields: [ 'twitterUrl', 'facebookUrl', 'githubUrl', 'copyright' ]
          }
      }
    }
  };