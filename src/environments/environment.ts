// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  playgroundsTable: 'Playgrounds',
  inspectionsTable: 'Inspections',
  filledChecklistsTable: 'FilledChecklists',
  restKey: 'qmbGnJ4yQONHUgZT2ZJn1RW4x3jshSvas24L7YKg',
  apiUrlPlaygrounds: 'https://2l1kixhiw8.execute-api.sa-east-1.amazonaws.com/Playgrounds/playgrounds',
  apiUrlGetInspections: 'https://2l1kixhiw8.execute-api.sa-east-1.amazonaws.com/Playgrounds/inspections'
};
