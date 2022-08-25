// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  authUrl: 'https://webapiauthnew.azurewebsites.net',
 // appointmentURL: 'https://localhost:44398',
  vetURL: 'https://petzeyvetapi20220820131121.azurewebsites.net/',
  petURL: 'https://petzeypetapi20220820162140.azurewebsites.net/',
  //ConsultationMockURL: 'https://petzeyconsultationsfinalapi20220821142248.azurewebsites.net/',
  //PetURL2:'https://localhost:44357/',
  //vetURL2: 'https://localhost:44396/',
  ConsultationMockURL: 'https://petzeyfinalconsultationsapi20220823101616.azurewebsites.net/',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.