// npx babel --watch src --out-dir dist --presets react-app/prod
import LikeButton from './components/LikeButton'
import scss from './css/index.scss'
const domContainer1 = document.querySelector('#like_button_container')
ReactDOM.render(<LikeButton name='1' />, domContainer1)
