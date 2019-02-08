'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/recipebox';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-recipe-box-app';
exports.PORT = process.env.PORT || 8080; 