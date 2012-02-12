Core = function() {
  // Private vars.
  var secondToSync = 15000;
  var addressInput = '#address_name';
  var addressList  = '#address_list';
  var urlRegexp = /^((http|https):\/\/)*[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

  // Private functions.
  var initializeObservers = function() {
    inputAddressObservers();
    startSyncEngine();
  };

  var syncDb = function() {
    var urlList = getURLList();

    $.ajax({ url: '/addresses',
             type: 'POST',
             async: true,
             dataType: 'script',
             data: {
               urls: urlList
             }
           });
  };

  var startSyncEngine = function() {
    setInterval(syncDb, secondToSync);
  };

  var inputAddressObservers = function() {
    var form = $('#input-address');

    if (!form.length) return;

    $(addressInput).focus();

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
    $("<div class='address'>" + "<a href='" + url + "'>" + url + "</a>" + "</div>").prependTo(addressList);
  };

  var notExist = function(inputURL) {
    var urlList = getURLList();
    var dup = false;

    $.each(urlList, function(index, value) {
      if (value == inputURL) {
        dup = true;
        return;
      }
    });

    if (dup) { return false } else { return true };
  };

  var getURLList = function() {
    var URLList = new Array;

    $.each($(addressList).find('.address'), function(index, ele) {
      URLList.push($(ele).find('a').html());
    });

    return URLList;
  };

  var removePath = function(inputURL) {
    for (var i=0;i<inputURL.length-1;i++) {
      if (inputURL[i] == '/' && inputURL[i-1] != '/' && inputURL[i+1] != '/') {
        inputURL = inputURL.substr(0, i);
        break;
      }
    }

    if (inputURL.indexOf('http://') == 0) {
      inputURL = inputURL.substr(7, inputURL.length)
    } else if (inputURL.indexOf('https://') == 0) {
      inputURL = inputURL.substr(8, inputURL.length)
    }

    if (inputURL.indexOf('www.') == 0) {
      inputURL = inputURL.substr(4, inputURL.length)
    }

    return inputURL;
  };

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
