import PropTypes from 'prop-types';
import '../css/main.css';

export default function IconSwitch({ iconName, onSwitch }) {
  return (
    <>
      <button
        className="material-icons icon-switch-button"
        onClick={onSwitch}
      >
        {iconName}
      </button>
    </>
  );
}

IconSwitch.propTypes = {
  iconName: PropTypes.string,
  onSwitch: PropTypes.func,
}