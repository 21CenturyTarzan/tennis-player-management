import ReactDOM from 'react-dom';
import PlayerApp from './player';

// ----------------------------------------------------------------------

if(document.getElementById('player-app')){
	ReactDOM.render(
		<PlayerApp />,
		document.getElementById('player-app')
	)
}