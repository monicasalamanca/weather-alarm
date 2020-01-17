import React from 'react'

const Weather = ({ weather }) => {
  return (
    <div>
      {console.log(weather)}
      {/* <center><h1>Contact List</h1></center>
      {weather.map((weather) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{weather.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{weather.email}</h6>
            <p class="card-text">{weather.company.catchPhrase}</p>
          </div>
        </div>
      ))} */}
    </div>
  )
};

export default Weather