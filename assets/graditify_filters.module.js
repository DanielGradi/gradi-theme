import "./graditify_filters-styles.scss";
import { defaultSortBy } from "./graditify_sort-by";
import { rangeFilters } from "./graditify_filters-range";
import { toggleDataActive } from "graditify-utils";

defaultSortBy();
rangeFilters();

toggleDataActive(
  '#filter-open',
  '#filter',
  {
    overlay: true,
  }
)

toggleDataActive(
  '.filter-form__name svg',
  '#filter',
  {
    overlay: true,
  }
)
