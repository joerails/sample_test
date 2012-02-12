Core = function() {
  // Private vars.
  var addressInput = '#address_name';
  var addressList  = '#address_list';
  var urlRegexp = /^((http|https):\/\/)*[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

  // Private functions.
  var initializeObservers = function() {
    inputAddressObservers();
  }

  var inputAddressObservers = function() {
    var form = $('#input-address');

    if (!form.length) return;

    $(addressInput).keypress(function(e) {
      if (e.keyCode == 13) {
        if (isValid($(this).val())) {
          var url = removePath($(this).val());
          if (notExist(url)) { addToList(url); }
          clearForm();
        } else {
          displayError();
        }

        return false;
      }
    });
  };

  var isValid = function(inputURL) {
    return urlRegexp.test(inputURL);
  };

  var addToList = function(url) {
    $("<div class='address'>" + url + "</div>").prependTo(addressList);
  };

  var notExist = function(inputURL) {
    var urlList = $(addressList).find('.address');
    var dup = false;

    $.each(urlList, function(index, ele) {
      if ($(ele).html() == inputURL) {
        dup = true;
        return;
      }
    });

    if (dup) { return false } else { return true };
  }

  var removePath = function(inputURL) {
    for (var i=0;i<inputURL.length-1;i++) {
      if (inputURL[i] == '/' && inputURL[i-1] != '/' && inputURL[i+1] != '/') {
        inputURL = inputURL.substr(0, i);
        break;
      }
    }
    return inputURL;
  }

  var clearForm = function() {
    $(addressInput).val('');
    $(addressInput).removeClass('error');
  };

  var displayError = function() {
    $(addressInput).addClass('error');
  };

  // Public functions.
  return {
    init: function() {
      initializeObservers();
    }
  }
}();
