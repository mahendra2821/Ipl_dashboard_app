// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <Link exact to={`/team-matches/${id}`} className="team-link">
      <li className="team-item">
        <img src={teamImageUrl} className="team-logo-home" alt={name} />
        <p className="heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard