;(function IIFE(undefined){

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
        { name: 'adverb', word: "Glumly" }
    ];

    /**
     * Controller for display input options
     * @param {object} $scope
     * @param {object} $rootScope
     * @param {object} $timeout
     */
    function MadLibController($scope, $rootScope, $timeout) {
        $scope.show = true;

        // delay loading model data for loading animation
        $timeout(function(){
            $scope.words = defaults;
        });

        $scope.genders = [
            {title: 'Male', value: 'male'},
            {title: 'Female', value: 'female'}
        ];

        $scope.$on('start-over', function(event){
            resetWords();
            $scope.show = true;
        });

        $scope.submit = function(){
            if ( validWords() ) {
                $scope.show = false;
                $rootScope.$broadcast(
                    'ready', $scope.words, $scope.gender
                );
            }
        }

        $scope.split = function (string) {
            return string.split("_").join(" ");
        }

        function resetWords(){
            $.each(defaults, function(i, d){
                $scope.words[i] = {
                    name: d.name,
                    word: "",
                    example: d.word
                }
            });
        }

        function validWords(){
            var valid = true;
            $.each($scope.words, function(i, word){
                if ( word.word == null || !word.word) {
                    valid = false;
                }
            });
            return valid;
        }
    }

    /**
     * Controller for displaying the madlib
     * @param {object} $scope
     * @param {object} $rootScope
     */
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

        // find the word from a given name
        $scope.get = function(word){
            var value;
            if ($scope.words == null) return '';
            $scope.words.forEach(function(w){
                if (w.name === word) return value = w.word, false;
            });
            return value;
        }
    }

    /**
     * Module Definition
     */
    angular.module('MadLibs', ['ngAnimate'])
        .controller('MadLibController', 
            ['$scope', '$rootScope', '$timeout', MadLibController]
        )
        .controller('ResultController', 
            ['$scope', '$rootScope', ResultController]
        );

}());