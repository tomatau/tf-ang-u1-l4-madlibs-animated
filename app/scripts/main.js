function MadLibController($scope) {
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
}

angular.module('MadLibs', [])
    .controller('MadLibController', ['$scope', MadLibController]);