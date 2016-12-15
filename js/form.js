app.form = (function(validator/* input dependencies */) {

  var formEl;
  var firstNameEl;
  var lastNameEl;

  function init(formId) {
    formEl = document.getElementById(formId);
    firstNameEl = formEl.querySelector('input[data-first-name]');
    lastNameEl = formEl.querySelector('input[data-last-name]');
    _buildListeners();
    console.log('form initialized');
  }

  function _buildListeners() {
    formEl.addEventListener('submit', _onSubmit);
  }

  // Event handlers

  function _onSubmit(e) {
    e.preventDefault();
    console.log('Submit');
    var firstNameElValue = firstNameEl.value;
    var lastNameElValue = lastNameEl.value;
    if(validator.validFirstName(firstNameElValue)) {
      console.log('First name is valid');
    } else {
      console.log('First name is not valid');
    }
  }

  return { // export
    init: init
  };

})(app.validator/* input dependencies */);