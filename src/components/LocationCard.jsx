import '../components/locationCard.css'

function LocationCard({  location }) {
    const populationCount = location?.residents?.length;
    const countex = populationCount === 1 ? 'Resident' : 'Residents';
  return (
    <div className="location__card">
      <h2 className="location__card__title">{location?.name}</h2>
      <ul className="location__card__list">
        <li>Type: <span>{location?.type}</span></li>
        <li>Dimension: <span>{location?.dimension} </span></li>
        <li>Population: <span>{populationCount} {countex} </span></li>
      </ul>
    </div>
  )
}

export default LocationCard;