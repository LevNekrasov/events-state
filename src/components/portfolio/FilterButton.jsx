export default function FilterButton({ filterName, selected, onFilterSelect }) {
  const onClick = (event) => {
    event.preventDefault();
    onFilterSelect(filterName);
  };

  return (
    <button
      type="button"
      className={`btn${filterName === selected ? ' selected' : ''}`}
      onClick={onClick}
    >
      {filterName}
    </button>
  );
}