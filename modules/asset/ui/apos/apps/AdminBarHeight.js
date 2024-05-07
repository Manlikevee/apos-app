export default () => {
    // check that the admin-bar module exists
    const loggedIn = !!window.apos.modules['@apostrophecms/admin-bar'];
    if (loggedIn) {
      // wrap in `apos.util.onReady()` that fires when the page is loaded and at every refresh
      apos.util.onReady(() => {
        //get the admin-bar height
        const adminBarHeight =
          window.apos.modules['@apostrophecms/admin-bar'].height;
          // get the navigation ID - if you are using a different template, adjust accordingly
        const pageNav = document.getElementById('mainNav');
        // set the absolute position of the navigation to after the admin-bar
        pageNav.style.top = adminBarHeight + 'px';
      });
    }
  };