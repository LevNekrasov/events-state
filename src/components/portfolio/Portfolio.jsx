import { useState } from "react";

import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import filters from "../../constants/filters";

export default function Portfolio() {
  const [selected, setSelected] = useState('All');
  const onFilterSelect = (selected) => setSelected(selected);

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        onFilterSelect={onFilterSelect}
        selected={selected}
      />
      <ProjectList selected={selected} />
    </div>
  )
}