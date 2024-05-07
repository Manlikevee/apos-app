const mongodbUri = 'mongodb://VEETECH:MANLIKEVEE@ac-fti2sgp-shard-00-00.ttjhr4z.mongodb.net:27017,ac-fti2sgp-shard-00-01.ttjhr4z.mongodb.net:27017,ac-fti2sgp-shard-00-02.ttjhr4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-1099f6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';


// MongoDB connection URI

require('apostrophe')({
  shortName: 'apos-app',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
 
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},
    blog: {},
    'blog-page': {},

    // MongoDB module configuration
    'apostrophe-db': {
      uri: mongodbUri
    }
  }
});
