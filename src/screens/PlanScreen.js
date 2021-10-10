import React from 'react';
import "./PlanScreen.css"


const PlanScreen = () => {
  return (
    <div className="planscreen">
      <div>
        <h4>current plan : Premium (4k + HDR)</h4>
      </div>
      <div class="planscreen__plans">
        <div>
          <h1>Basic</h1>
          <h3>720p</h3>
        </div>
        <div>
          <h4>299.99</h4>
          <button className="planscreen__btn">subscribe</button>
        </div>
      </div>
      <div class="planscreen__plans">
        <div>
          <h1>Standard</h1>
          <h3>1080p</h3>
        </div>
        <div>
          <h4>599.99</h4>
          <button className="planscreen__btn">subscribe</button></div>
      </div>
      <div class="planscreen__plans">
        <div>
          <h1>Premium</h1>
          <h3>4K + HDR</h3>
        </div>
        <div>
          <h4>799.99</h4>
          <button className="planscreen__btn on">subscribed</button></div>
      </div>
    </div>
  )
}

export default PlanScreen
