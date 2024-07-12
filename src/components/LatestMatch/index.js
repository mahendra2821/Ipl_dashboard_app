import './index.css'

const LatestMatch = props => {
  console.log('latest match')
  console.log(props)
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <div className="date-venue-container">
        <p className="lm-heading">{competingTeam}</p>
        <p className="desc">{date}</p>
        <p className="desc">{venue}</p>
        <p className="desc">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo"
      />
      <div className="match-details">
        <p className="lm-heading">First Innings</p>
        <p className="desc">{firstInnings}</p>
        <p className="lm-heading">Second Innings</p>
        <p className="desc">{secondInnings}</p>
        <p className="lm-heading"> Man of the Match</p>
        <p className="desc">{manOfTheMatch}</p>
        <p className="lm-heading">Umpires</p>
        <p className="desc">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch