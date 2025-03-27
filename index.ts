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
console.log(combineVolunteers(wolfPointVolunteers))
function calculateHours(volunteers: Volunteer[]) {
    return volunteers.map(
        (volunteer) => {
            let hours = 0
        
            volunteer.activities.forEach(
                (activity) => {
        
                }
            )
        
            return {
                id: volunteer.id,
                name: volunteer.name,
                hours: hours,
            }
        }
    )
}
  
const combinedVolunteers = combineVolunteers(
    [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
)
  