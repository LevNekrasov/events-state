import FilterButton from "./FilterButton";

export default function Toolbar ({ filters, selected, onFilterSelect }) {
  const filterBtns = filters.map((name, index) => (
    <FilterButton
      filterName={name}
      selected={selected}
      onFilterSelect={onFilterSelect}
      key={index}
    />
  ));

  return <div className="toolbar">{filterBtns}</div>
}