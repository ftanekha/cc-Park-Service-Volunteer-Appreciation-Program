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
//verify volunteer's hours of voluntary work
function isVerified(verified) {
    if (typeof verified === 'string') {
        if (verified === 'yes')
            return true;
        return false;
    }
    else {
        return verified;
    }
}
function getHours(activity) {
    if ('hours' in activity) {
        return activity.hours;
    }
    return activity.time;
}
//calculate each volunteers hours of work
function calculateHours(volunteers) {
    return volunteers.map(function (volunteer) {
        var hours = 0;
        volunteer.activities.forEach(function (activity) {
            if (isVerified(activity.verified)) {
                hours += getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours
        };
    });
}
var combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
console.log(calculateHours(combinedVolunteers));
//sort combined volunteers array
function byHours(a, b) {
    return b.hours - a.hours;
}
var result = calculateHours(combinedVolunteers).sort(byHours);
console.log(result);
