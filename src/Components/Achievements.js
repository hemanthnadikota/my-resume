import React, { Component } from 'react';

class Achievements extends Component {
  render() {

    if(this.props.data){
      var Achievements = this.props.data.Achievements.map(function(Achievements){
        return  <li key={Achievements.user}>
            <blockquote>
               <p>{Achievements.text}</p>
               <cite>{Achievements.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="Achievements">
      <div className="text-container">
         <div className="row">

            <div className="two columns header-col">
               <h1><span>Client Achievements</span></h1>
            </div>

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {Achievements}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Achievements;
