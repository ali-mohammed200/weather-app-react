import React from 'react'

const Card = (props) => {
  const detailHandler = (e) => {
    props.detailClicker(props.singleWeather)
  }

  if (props.check){
    return (
      <div className="details" onClick={props.remover}>
        <h1>Detail Card</h1>
        <h1>Description: {props.singleWeather.weather[0].description}</h1>
        <h1>Wind Speed {props.singleWeather.wind.speed}</h1>
      </div>
    )
  }
  const dayFinder = (val) => {
    let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let cdate = new Date(val)
    return days[cdate.getDay()]
  }
  const cardMaker = () => {
    console.log("simple", props)

    // debugger
    return (
      <div className="simple" onClick={detailHandler}>
        <h1>Simple Card for {props.location}</h1>
        <h1>{props.singleWeather.dt_txt}</h1>
        <h1>{dayFinder(props.singleWeather.dt_txt)}</h1>
        <h1>{props.singleWeather.main.temp}</h1>
      </div>
    )
  }




  return (
    cardMaker()
  );

}
export default Card;

// const Details = (props) => {
//   // We'll render the logo if no host is selected. But if a host does get selected....
//   // Watch the video to see how this works in the app.
//   console.log(props);
//   console.log("Props for details ^^^");
//   const renderSomething = () => {
//     if(props.currentObj !== undefined){
//       return (<HostInfo hostObj={props.currentObj} hostLoc={props.currentObj.area}
//         updateArea={props.updateArea}/>)
//     }else {
//       return (<Image size='medium' src={Images.westworldLogo}/>)
//     }
//   }
//
//   return(
//     <Segment id="details" className="HQComps">
//       {renderSomething()}
//     </Segment>
//   )
// }
//
// export default Details



// import Simple from './Simple';
// import Details from './Details';
//
// class Card extends Component {
//   render() {
//     console.log("card", this.props.myWeather)
//     let simpleCards = []
//     if (this.props.myWeather.length > 0){
//       simpleCards = this.props.myWeather.map(obj => {
//         return <Simple singleWeather={obj}/>
//       })
//     }
//
//     let detailCards = []
//     if (this.props.myWeather.length > 0){
//       detailCards = this.props.myWeather.map(obj => {
//         return <Details singleWeather={obj}/>
//       })
//     }
//
//
//     return (
//       <div>
//         <h1>Card</h1>
//         {this.props.value? detailCards: simpleCards}
//       </div>
//     );
//   }
// }
//
// export default Card;
