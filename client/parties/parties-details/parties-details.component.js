angular.module('socially').directive('partyDetails', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/parties/parties-details/party-details.html',
        controllerAs: 'partyDetails',
        controller: function ($scope, $stateParams, $reactive) {
            $reactive(this).attach($scope);

            this.subscribe('parties');
            this.subscribe('users');            
            
            this.helpers({
                party: () => {
                    return Parties.findOne({ _id: $stateParams.partyId });
                },
                users: () => {
                    return Meteor.users.find({});
                }
            });

            this.save = () => {
                Parties.update({ _id: $stateParams.partyId }, {
                    $set: {
                        name: this.party.name,
                        description: this.party.description,
                        'public': this.party.public
                    }
                }, (error) => {
                    if (error) {
                        console.log('Oops, unable to update the party...');
                    }
                    else {
                        console.log('Done!');
                    }
                });
            };
        }
    }
});