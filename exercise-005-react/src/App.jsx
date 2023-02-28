import "./App.css";
import Card from "./components/Card";

function App() {
    let cards = [
        {
            title: "อาหารคาว",
            subtitle: "อาหารที่เป็นอาหารคาว",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id pretium lacus, vel dapibus sem. Praesent non libero eget augue ullamcorper faucibus sit amet sit amet eros. Integer nec enim sit amet mi varius elementum. Proin velit justo, posuere suscipit vestibulum a, gravida in arcu. Vivamus pretium nulla vestibulum orci consequat, ac venenatis magna tempus. Phasellus nec aliquet ipsum. Curabitur sit amet massa turpis. Integer et odio pulvinar ligula efficitur convallis. Integer blandit porta ex. Proin aliquet ut augue vel malesuada. Phasellus sed aliquet erat.",
            image: "/images/food1.jpg",
        },
        {
            title: "อาหารหวาน",
            subtitle: "อาหารที่เป็นอาหารหวาน",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id pretium lacus, vel dapibus sem. Praesent non libero eget augue ullamcorper faucibus sit amet sit amet eros. Integer nec enim sit amet mi varius elementum. Proin velit justo, posuere suscipit vestibulum a, gravida in arcu. Vivamus pretium nulla vestibulum orci consequat, ac venenatis magna tempus. Phasellus nec aliquet ipsum. Curabitur sit amet massa turpis. Integer et odio pulvinar ligula efficitur convallis. Integer blandit porta ex. Proin aliquet ut augue vel malesuada. Phasellus sed aliquet erat.",
            image: "/images/food2.jpg",
        },
    ];

    return (
        <div className="App">
            <h1 className="heading">โหวตอาหาร</h1>
            <div className="container">
                <div className="row">
                    {cards.map((card, index) => {
                        return <Card card={card} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
