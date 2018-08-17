// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDWpABTmmP9_87LyDkD9mflQTrSWSMSke4',
    authDomain: 'testapp-4425b.firebaseapp.com',
    databaseURL: 'https://testapp-4425b.firebaseio.com',
    projectId: 'testapp-4425b',
    storageBucket: 'testapp-4425b.appspot.com',
    messagingSenderId: '929107625414'
  }
};