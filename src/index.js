import { answer } from "./answer";
import './main.css'
function render() {
	document.getElementById(
		"root"
	).innerHTML = `the answer to the universe is ${answer}`;
}
render();
