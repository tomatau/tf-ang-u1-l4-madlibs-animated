function MadLibController($scope, $rootScope) {
    $scope.show = true;
    $scope.words = {
        your_name: 'Harold',
        sweetheart: 'Mary',
        noun: "Sandwich",
        superlative: "Fastest",
        noun2: "Banana",
        body_part: "Elbow",
        continuous_verb: "Hum-diddling",
        noun3: "Pizza",
        verb: "Throw",
        event: "Moon Landing",
        day: "Election",
        verb2: "Jump",
        verb3: "Roll",
        place: "Papa joes",
        time_span: "5 seconds",
        verb4: "Frolic",
        adverb: "Glumly"
    }

    $scope.genders = [
        {title: 'Male', value: 'male'},
        {title: 'Female', value: 'female'}
    ];

    // not necessary
    validWords = function(){
        valid = true;
        $.each($scope.words, function(i, word){
            if ( word == null || !word) { valid = false; }
        });
        return valid;
    }

    function resetWords(){
        $.each($scope.words, function(i){
            $scope.words[i] = null;
        });
    }

    $scope.$on('start-over', function(event){
        resetWords();
        $scope.show = true;
    });

    $scope.submit = function(){
        if ( validWords() ) {
            $scope.show = false;
            $rootScope.$broadcast('ready', $scope.words, $scope.gender);
        }
    }
}

function ResultController($scope, $rootScope){
    $scope.show = false;
    $scope.$on('ready', function(event, words, gender){
        $scope.show = true;
        $scope.words = words;
        $scope.gender = gender;
    });

    $scope.reset = function(){
        $scope.show = false;
        $rootScope.$broadcast('start-over');
    }
}

angular.module('MadLibs', [])
    .controller('MadLibController', ['$scope', '$rootScope', MadLibController])
    .controller('ResultController', ['$scope', '$rootScope', ResultController]);