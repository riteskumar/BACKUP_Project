import { Box ,styled} from "@mui/material";
import "./App.css";

// components
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import Articles from "./components/Articles";

const Container = styled(Box)`
	width:60%;
	margin:30px auto 0 auto;
`
function App() {
	return (
		<div className="App">
			<Header />
			<Container>
				<InfoHeader/>
			</Container>
			<Articles/>
			
		</div>
	);
}

export default App;
