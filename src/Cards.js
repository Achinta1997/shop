

function Card(props){
    return (

        <div className="col-lg-4 col-sm-12 cardBox">
            <div className="card" style={{width: "18rem"}}>
       <img src={props.image} className="card-img-top" alt="..."></img>
      <div className="card-body">
       <h5 className="card-title">{props.title}</h5>
      </div>
      </div>
    </div>
       
    );
}

export default Card;