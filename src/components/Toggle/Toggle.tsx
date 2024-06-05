import "./Toggle.scss"

type ToggleProps = {
  isChecked: boolean,
  handleChange: () => void
}

export default function Toggle(props: ToggleProps) {
  return (
    <div className='toggle-container'>
      <button onClick={props.handleChange} className='toggle-button'>
        <div className="darkmode_icon">
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
          <span className="ray"></span>
        </div>
      </button>
    </div>
  );
};