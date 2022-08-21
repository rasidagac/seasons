import React from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
	constructor(props) {
		super(props);

		// THIS IS THE ONLY TIME we do direct assignment to this.state
		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// We called setState !!!
				this.setState({ lat: position.coords.latitude });
			},
			(err) => console.error(err)
		);
	}

	// Reaact says we have to defie render!!
	render() {
		return <div>Latitude: {this.state.lat}</div>;
	}
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
