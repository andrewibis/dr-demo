import { assign } from 'lodash';

const FETCHING = 'FETCHING_TRANSLATIONS';
const FETCH_SUCCESS = 'FETCH_TRANSLATIONS_SUCCESS';
const FETCH_ERROR = 'FETCH_TRANSLATIONS_ERROR';

const initialState = {};

export const fetchTranslations = (lang = 'es') => async (
  dispatch,
  getState,
  api
) => {
  dispatch({ type: FETCHING });
  const payload = await api.get(`/api/translations/${lang}`);
  dispatch({
    type: FETCH_SUCCESS,
    payload
  });
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SUCCESS:
      return assign({}, state, {
        error: false,
        fetching: false,
        data: payload
      });
    case FETCHING:
      return assign({}, state, { error: false, fetching: true, data: [] });
    case FETCH_ERROR:
      return assign({}, state, { error: true, message: payload, data: [] });

    default:
      return state;
  }
};
