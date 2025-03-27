"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raccoon_meadows_log_1 = require("./raccoon-meadows-log");
var wolf_point_log_1 = require("./wolf-point-log");
//take the list of volunteers of different types and combine them to match the Volunteers type
function combineVolunteers(volunteers) {
    return volunteers.map(function (volunteer) {
        //transform the id‘s of type string into number
        if (typeof volunteer.id === 'string') {
            volunteer.id = parseInt(volunteer.id, 10);
        }
        return volunteer;
    });
}
console.log(combineVolunteers(wolf_point_log_1.wolfPointVolunteers));
function calculateHours(volunteers) {
    return volunteers.map(function (volunteer) {
        var hours = 0;
        volunteer.activities.forEach(function (activity) {
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
var combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
