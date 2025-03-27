"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var raccoon_meadows_log_1 = require("./raccoon-meadows-log");
var wolf_point_log_1 = require("./wolf-point-log");
//take the list of volunteers of different types and combine them to match the Volunteers type
function combineVolunteers(volunteers) {
    var volunteersArray = volunteers.map(function (volunteer) {
        //transform the id‘s of type string into number
        if (typeof volunteer.id === 'string') {
            volunteer.id = parseInt(volunteer.id, 10);
        }
        return { id: volunteer.id, name: volunteer.name, activities: volunteer.activities };
    });
    return volunteersArray;
}
//verify volunteer's hours of voluntary work
function isVerified(verified) {
    if (typeof verified === 'string') {
        if (verified === 'Yes')
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
//combine volunteers array
var combinedVolunteers = combineVolunteers(__spreadArray(__spreadArray([], wolf_point_log_1.wolfPointVolunteers, true), raccoon_meadows_log_1.raccoonMeadowsVolunteers, true));
//sort combined volunteers array by hours of activity
function byHours(a, b) {
    return b.hours - a.hours;
}
var result = calculateHours(combinedVolunteers).sort(byHours);
console.log(result);
