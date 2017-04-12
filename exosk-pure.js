const Backbone = require('exoskeleton');


  Backbone.$ = function(el) {
    if (!(this instanceof Backbone.$)) return new Backbone.$(el);
    this[0] = typeof(el) === "string" ? document.createElement(el) : el;
    this.length = 1;
  };
  Backbone.$.prototype.attr = function(attrs) {
    Object.keys(attrs).forEach(k => {
      if (k === "className") {
        this[0].classList.add(attrs[k]);
      } else {
        this[0].setAttribute(k, attrs[k]);
      }
    });
  };
  Backbone.$.prototype.find = function(selector) {
    return this[0].querySelector(selector)
  };
  Backbone.$.prototype.off = function() {
    //console.dir("off", arguments);
  };
  Backbone.$.prototype.on = function(name, selector, handler) {
    //console.log(context, this[0], this[0].querySelector(context.trim()));
    this[0].addEventListener(name.split('.')[0], (evt) => {
      if (evt.target.webkitMatchesSelector(selector)) {
        handler();
        return true;
      }
      return false;
    });
  };



  /**
   * Send an AJAX request.
   *
   * @param {Object} options The options to use for the connection:
   *      - {string} url The URL to connect to.
   *      - {string} type The type of request, e.g. 'GET', or 'POST'.
   *      - {string} dataType The type of data expected, 'json'.
   *      - {string} contentType The content-type of the data.
   *      - {string|object} data The content to send.
   *      - {function(XMLHttpRequest)} beforeSend A callback to call before sending.
   *      - {boolean} processData True if 'data' should be converted
   *          to a query string from an object.
   *      - {function({string|object}, {string}, {XMLHttpRequest})} success The success callback.
   *      - {function({XMLHttpRequest})} error The error callback.
   */
  Backbone.ajax = function(options) {
    /*console.log("ajax", options);

    var processData = options.processData === undefined ? true : !!options.processData;
    var data = options.data;
    if (processData && typeof data === 'object') {
      options.data = Object.keys(data).map(function(prop) {
        return encodeURIComponent(prop) + '=' + encodeURIComponent(data[prop]);
      }).join('&');
    }

    // Data for GET and HEAD goes in the URL.
    if (options.data && (options.type === 'GET' || options.type === 'HEAD')) {
      options.url += (url.indexOf('?') === -1 ? '?' : '&') + options.data;
      options.data = undefined;
    }*/

    fetch(options.url, {
      method: options.type || 'GET',
      mode: 'cors',
      body: options.data,
      headers: {
        'Content-Type': options.contentType || 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: 'token 5766e4ba-cdc2-49f7-8133-f13f83f5d7d1',
      },
    }).then(r => r.json()).then(options.success).catch(options.error);


  };


  module.exports = Backbone;
