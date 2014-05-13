(function IIFE(){
    function MadLibController($scope, $rootScope, $timeout) {
        $scope.show = true;
        var defaults = [
            { name: 'name', word: 'Harold' },
            { name: 'sweetheart', word: 'Mary' },
            { name: 'noun', word: "Sandwich" },
            { name: 'superlative', word: "Fastest" },
            { name: 'noun2', word: "Banana" },
            { name: 'body_part', word: "Elbow" },
            { name: 'continuous_verb', word: "Hum-diddling" },
            { name: 'noun3', word: "Pizza" },
            { name: 'verb', word: "Throw" },
            { name: 'event', word: "Moon Landing" },
            { name: 'day', word: "Election" },
            { name: 'verb2', word: "Jump" },
            { name: 'verb3', word: "Roll" },
            { name: 'place', word: "Papa joes" },
            { name: 'time_span', word: "5 seconds" },
            { name: 'verb4', word: "Frolic" },
            { name: 'adverb', word: "Glumly" },
            { name: 'pointless', word: "NotUsed" }
        ];

        $timeout(function(){
            $scope.words = defaults;
        });

        $scope.genders = [
            {title: 'Male', value: 'male'},
            {title: 'Female', value: 'female'}
        ];

        // not necessary
        validWords = function(){
            valid = true;
            $.each($scope.words, function(i, word){
                if ( word.word == null || !word.word) { valid = false; }
            });
            return valid;
        }

        function resetWords(){
            $.each($scope.words, function(i){
                $scope.words[i] = {
                    name: defaults[i].name,
                    word: ""
                }
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

        $scope.split = function (string) {
            return string.split("_").join(" ");
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

        $scope.get = function(word){
            var value;
            if ($scope.words == null) return '';
            $scope.words.forEach(function(w){
                if (w.name === word) return value = w.word, false;
            });
            return value;
        }
    }

    angular.module('MadLibs', ['ngAnimate'])
        .controller('MadLibController', ['$scope', '$rootScope', '$timeout', MadLibController])
        .controller('ResultController', ['$scope', '$rootScope', ResultController]);

}());