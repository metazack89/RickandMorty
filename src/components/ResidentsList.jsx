import ResidentCard from './ResidentCard'
import '../components/residentCard.css'

function ResidentsList({ residents }) {

  return (
    <div className='resident__section'>
      {residents?.length > 0 ? (<>
      <div className="resident__container">
        {residents.map(resident => (
        <ResidentCard key={resident} residentUrl={resident} />
       ))}
      </div>
       </>) : (
        <p>No hay residentes</p>
      )}
    </div>
  )
}

export default ResidentsList;