import "./Card.css";
function Card(props = {}) {
    const title = props.title || "DefaultTitle";
    const description = props.description || "DefaultDescription";
    return (
        <>
        <div className="container">
            <div className="card">
                <img src="https://picsum.photos/200/300" alt="random" />
                <div className="card-info">
                    <h3>{title}</h3>
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </div>
        <div className="myRed">
        hello
        </div>
        </>
    );
}

export default Card;
