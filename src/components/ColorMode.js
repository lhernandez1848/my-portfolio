import ToggleColorMode from './ToggleColorMode'
import PropTypes from 'prop-types'
import styles from './components.module.css'

function ColorMode({ mode, toggleColorMode }) {
  return <div className={styles.colorToggleContainer} ><ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /></div>
}

ColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ColorMode