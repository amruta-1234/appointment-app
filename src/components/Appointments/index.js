// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isFilteredStarred: false,
  }

  onAddAppointment = event => {
    event.preventDefault()

    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: dateInput,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDate = event => {
    this.setState({dateInput: event.target.value})
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onClickStarredBtn = () => {
    this.setState(prevState => ({
      isFilteredStarred: !prevState.isFilteredStarred,
    }))
  }

  render() {
    const {
      appointmentsList,
      titleInput,
      dateInput,
      isFilteredStarred,
    } = this.state

    const starredFilteredList = appointmentsList.filter(
      eachAppointment => eachAppointment.isStarred === true,
    )

    const getFilteredList = isFilteredStarred
      ? starredFilteredList
      : appointmentsList

    return (
      <div className="bg-container-appointment">
        <div className="sub-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="top-container">
            <form className="form-card" onSubmit={this.onAddAppointment}>
              <label className="title-label" htmlFor="title">
                TITLE
              </label>
              <input
                id="title"
                className="title-input"
                type="text"
                value={titleInput}
                onChange={this.onChangeTitle}
                placeholder="Title"
              />
              <label className="title-label" htmlFor="dateEl">
                DATE
              </label>
              <input
                id="dateEl"
                type="date"
                value={dateInput}
                className="title-input"
                onChange={this.onChangeDate}
                placeholder="dd/mm/yyyy"
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="bottom-card">
            <h1 className="appointment-title">Appointments</h1>
            <button
              className="star-btn"
              type="button"
              onClick={this.onClickStarredBtn}
            >
              Starred
            </button>
          </div>
          <ul className="list-card">
            {getFilteredList.map(eachAppointment => (
              <AppointmentItem
                appointmentDetail={eachAppointment}
                key={eachAppointment.id}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
