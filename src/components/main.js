import React from "react";
import "../static/css/main.css";

export const Main = (props) => (
  <div className="main">
    <div className="form">
      <form onSubmit={props.getWeatherMethod}>
        <label>Получить погоду:</label>
        <br />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Введите название города..."
          required
        />
        <br />
        <div>
          <button id="button_today">Сегодня</button>
        </div>
      </form>
    </div>
  </div>
);
