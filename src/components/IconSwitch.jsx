import PropTypes from 'prop-types';

export default function IconSwitch({ iconName, onSwitch }) {
  return (
    <>
      <button
        className="material-icons"
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