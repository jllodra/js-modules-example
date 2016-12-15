app.main = (function(form) {

  function init() {
    form.init('form');
    //app.form <-- DONT, your module only sees through arguments
    console.log('app init');
  }

  return {
    init: init
  };

})(app.form);
