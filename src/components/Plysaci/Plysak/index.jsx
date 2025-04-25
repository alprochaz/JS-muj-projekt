import './index.css'

export const Plysak = (props) => {
  
    return (
      <div className="plushy">
        <img className="plushy__image" src={props.imgLocation} />
        <h2 className="plushy__name">{props.plysakName}</h2>
        <p className="plushy__text">{props.plysakDescription}</p>
      </div>
    )
}


