// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, toggleIsStarred} = props

  const {id, titleInput, dateInput, isStarred} = eachAppointment

  const dateEl = format(new Date(dateInput), 'dd MMMM yyyy, EEEE')

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  const img = isStarred ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
      alt="star"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
      alt="star"
    />
  )

  return (
    <li className="appointment-item-card">
      <div className="title-date-card">
        <p className="title">{titleInput}</p>
        <p className="date-el">{dateEl}</p>
      </div>
      <button
        className="star-img-btn"
        type="button"
        data-testid="star"
        onClick={onClickStar}
      >
        {img}
      </button>
    </li>
  )
}

export default AppointmentItem
