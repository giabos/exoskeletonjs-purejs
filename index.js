const Backbone = require('exoskeleton');
require('./exosk-pure');


  var M = Backbone.Model.extend({
    url: 'https://jsonbin.org/giabos/blabla'
  });

  var V = Backbone.View.extend({
    initialize: function() {
      this.model = new M({
        count: 0
      });
      this.model.bind('change', this.render.bind(this));
      this.render();
      this.model.fetch();
    },
    //tagName: 'div',
    className: "red",
    onClick: function() {
      this.model.set('count', this.model.get('count') + 1);
    },
    update: function() {
      this.model.set('message', this.$('input').value);
      this.model.save();
    },
    events: {
      'click b': 'onClick',
      'change input': 'update',
    },
    render: function() {
      //debugger;
      this.el.innerHTML = `<input value="${this.model.get('message')}">: <b>${this.model.get('count')}</b>`;
    }
  });

  //var v = new V();
  document.body.appendChild(new V().el);
  document.body.appendChild(new V().el);
  document.body.appendChild(new V().el);
  document.body.appendChild(new V().el);



