import * as Models from 'models';
import * as BodyModels from 'containers/Body/models';

export interface BodyProps {
  setData: BodyModels.ActionCreator.SetData;
  moviesData: Models.MoviesDataMap;
}
