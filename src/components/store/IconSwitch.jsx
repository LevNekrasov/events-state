export default function IconSwitch({ icon, onSwitch }) {
  const onClick = () => {
    onSwitch();
  };

  return (
    <div className="icon-switch_container">
      <button
        className="icon-switch material-icons"
        onClick={onClick}
        type="button"
      >
        {icon}
      </button>
    </div>
  );
}