export const path = {
  ROOT: './',
  DEV: './client/dev/',
  DIST: './client/dist/',
  TEST: './tests/'
}

export const tasks = {
  CLIENT_BUILD_DEV: 'client.build:dev',
  CLIENT_BUILD_DIST: 'client.build:dist',

  CLIENT_CSS_DIST: 'client.build_css:dist',
  CLIENT_SCSS_DIST: 'client.build_scss:dist',
  CLIENT_JS_DIST: 'client.build_js:dist',
  CLIENT_VIEWS_DIST: 'client.views:dist',
  CLIENT_IMAGE_DIST: 'client.imgs:dist',
  CLIENT_DEL_DIST: 'client.del:dist',

  CLIENT_COPY: 'client.copy',

  CLIENT_UNIT_TEST: 'client.unit_test',
  CLIENT_COVERAGE: 'client.coverage',

  CLIENT_RELOAD: 'client.reload',

  CLIENT_WATCH: 'client.watch',

  CLIENT_BUILD_TS: 'client.build_ts'
}
