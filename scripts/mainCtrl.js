angular.module('surveyApp', []).controller('mainCtrl', function ($scope, $http) {
  'use strict';
  $scope.isFirst=function(index){
    return index === 0;
  };
  $scope.options = ['Shine', 'Volume', 'Smoothness', 'Lather', 'Ease of Application (Ease of spreading the shampoo on wet hair)'];
  $scope.shampooOptions = ['Biotique', 'Chik', 'Clinic All Clear', 'Clinic Plus', 'Dove', 'Fiama Di Wills', 'Garnier', 'Halo', 'Head n Shoulders', 'Himalaya', 'Johnson & Johnson', 'Khadi Gram Udyog', 'Lo\'real', 'Lotus', 'Matrix', 'Nizoral', 'Nyle', 'Pantene', 'Park Avenue', 'Schwarzkopf', 'Sunsilk', 'The Body Shop', 'Tresseme'];
  var rating = [];
  $scope.recommendation = ["Yes", "No", "Unsure"];
  for (var i = 0; i < 10; i++) {
    rating[i] = i + 1;
  }
  $scope.ratingOptions = ['1','2','3','4','5','6','7','8','9','10'];
  $scope.submit =function (){
    console.log('gvghvgh');
      insert($scope.data);
    };
    function promise(requestType, url, data){
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(requestType, url, true);
      if (requestType === 'get' || requestType === 'POST') {
        xhr.responseType = 'json';
        xhr.setRequestHeader('content-type', 'application/json');
      }

      xhr.onload = function() {

        var status = xhr.status;
        if (status === 200) {
          resolve(xhr.response);
        } else {
          reject(status);
        }
      };
      if (requestType === 'get') {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }

  function getDatabase() {
    return 'kakulgupta';
  }

  function getCollection() {
  return 'shampoosurvey';
  }

  function getApiKey() {
    return 'wbMLnFefif9EI1evQ6fBA-IFvCDXbn1w';
  }
  function makeInsertFetchUrl() {
    var database = getDatabase();
    var collections = getCollection();
    var key = getApiKey();
    var url = 'https://api.mongolab.com/api/1/databases/' + database + '/collections/' + collections + '?apiKey=' + key;
    return url;
  }
  var insert = function(data) {
console.log('insert');
    var url = makeInsertFetchUrl();
    promise('POST', url, JSON.stringify(data)).then(function(response) {
      console.log('Successful !!');
    }, function(status) {
      console.log('Unsuccessful!! Error status: ' + status);
    });


  };
  $scope.data = {
    name: null,
    email: null,
    recommendation: null,
    shampooUsed: null,
    usedRating: { "Shine": {"rating":0},"Volume": {"rating":0},"Smoothness": {"rating":0},"Lather": {"rating":0},"Ease of Application (Ease of spreading the shampoo on wet hair)": {"rating":0}},
    currentRating: { "Shine": {"rating":0},"Volume": {"rating":0},"Smoothness": {"rating":0},"Lather": {"rating":0},"Ease of Application (Ease of spreading the shampoo on wet hair)": {"rating":0}}
  };


  $scope.setCorrectOption = function(index) {
    $scope.data.shampooUsed =$scope.shampooOptions[index];
    console.log($scope.data);
  };

  $scope.setRecommendation = function(index) {
    $scope.data.recommendation = $scope.recommendation[index];
    console.log($scope.data);
  };

});
