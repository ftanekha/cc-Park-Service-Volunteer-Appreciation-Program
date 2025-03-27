import {
    RaccoonMeadowsActivity,
    RaccoonMeadowsVolunteer,
    raccoonMeadowsVolunteers,
} from './raccoon-meadows-log'
  
import {
    WolfPointActivity,
    WolfPointVolunteer,
    wolfPointVolunteers,
} from './wolf-point-log'
  
type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity
  
type Volunteer = {
    id: number
    name: string
    activities: CombinedActivity[]
}
//take the list of volunteers of different types and combine them to match the Volunteers type
function combineVolunteers(
    volunteers: (RaccoonMeadowsVolunteer | WolfPointVolunteer)[]
) {
  return volunteers.map(
    (volunteer: RaccoonMeadowsVolunteer | WolfPointVolunteer) => {
        //transform the id‘s of type string into number
        if(typeof volunteer.id === 'string'){
            volunteer.id = parseInt(volunteer.id, 10)
        }
        return volunteer
    }
  )
}
//verify volunteer's hours of voluntary work
function isVerified(verified: boolean | string){
    if(typeof verified === 'string'){
        if(verified === 'yes') return true
        return false
    }else{
        return verified
    }
}

function getHours(activity: CombinedActivity){
    if('hours' in activity){
        return activity.hours
    }
    return activity.time
}
//calculate each volunteers hours of work
function calculateHours(volunteers: (RaccoonMeadowsVolunteer | WolfPointVolunteer)[]) {
    return volunteers.map(
        (volunteer) => {
            let hours = 0
        
            volunteer.activities.forEach(
                (activity) => {
                    if(isVerified(activity.verified)){
                        hours += getHours(activity)
                    }
                }
            )
        
            return {
                id: volunteer.id,
                name: volunteer.name,
                hours: hours
            }
        }
    )
}

//combine volunteers array
const combinedVolunteers = combineVolunteers(
    [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
)

//sort combined volunteers array by hours of activity
function byHours(a, b){
    return b.hours - a.hours
}

const result = calculateHours(combinedVolunteers).sort(byHours)

console.log(result)