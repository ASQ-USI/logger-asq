/** 
 * @module index.js
 * @description Common logger functionality for ASQ services
 * Adapted from sharelatex/logger-sharelatex
 * https://github.com/sharelatex/logger-sharelatex
*/
'use strict';

var bunyan   = require('bunyan');
var logger;

module.exports = logger = {
  initialize: function(options){
    options = options || {};
    options.name = options.name || 'app';
    options.serializers = options.serializers || bunyan.stdSerializers;
    
    this.logger = bunyan.createLogger(options);
    return this;
  },
  info: function() {
    this.logger.info.apply(this.logger, arguments);
  },
  log: function() {
    this.logger.info.apply(this.logger, arguments);
  },
  error: function() {
    this.logger.error.apply(this.logger, arguments);
  },
  err: function() {
    this.logger.error.apply(this.logger, arguments);
  },
  warn: function() {
    this.logger.warn.apply(this.logger, arguments);
  },
  debug: function() {
    this.logger.debug.apply(this.logger, arguments);
  },
  trace: function() {
    this.logger.trace.apply(this.logger, arguments);
  }
}

logger.initialize({name: "default-asq"});
