app.validator = (function(helper) {

  function _isEmpty(s) {
    if(s.length === 0) {
      return true;
    }
    return false;
  }

  function validFirstName(s) {
    return !_isEmpty(s);
  }

  function validLastName(s) {
    return !_isEmpty(s);
  }

  return { // export
    validFirstName: validFirstName,
    validLastName: validLastName
  };

})();