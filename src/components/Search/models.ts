import * as SearchModels from 'containers/Search/models';
import * as BodyModels from 'containers/Body/models';

interface SearchData {
  searchString: string;
  searchBy: string;
  sortBy: string;
}

export interface SearchProps {
  searchData: SearchData;
  changeSearchString: SearchModels.ActionCreator.CHANGE_SEARCH_STRING;
  changeSearchBy: SearchModels.ActionCreator.CHANGE_SEARCH_BY;
  setData: BodyModels.ActionCreator.SetData;
}
