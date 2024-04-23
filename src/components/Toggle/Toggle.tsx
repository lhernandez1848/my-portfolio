import "./Toggle.scss"

export default function Toggle(props: { isChecked: boolean, handleChange: () => void}) {
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