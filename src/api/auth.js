let initialized = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }
    window.addEventListener('load', () => {
      /* global google*/
      google.accounts.id.initialize({
        client_id:
          '525502190519-hfekmv827hq1pk5dgnv4ioen8jee38q0.apps.googleusercontent.com',
        callback: (response) => {
          console.log(response);
        },
      });
      resolve();
      initialized = true;
    });
  });
};
