import {
  LIST_KANIM_ATTEMPT,
  LIST_KANIM_SUCCESS,
  LIST_KANIM_INVALID,
  GET_OFFICE_QUOTA_ATTEMPT,
  GET_OFFICE_QUOTA_SUCCESS,
  GET_OFFICE_QUOTA_INVALID,
} from '../../actions/kanim';

const defaultState = {
  listKanimAttempt: false,
  listKanimError: '',
  offices: [],
  getOfficeQuotaAttempt: false,
  getOfficeQuotaError: '',
  office: undefined,
};

const kanim = (state = defaultState, action) => {
  switch (action.type) {
    case LIST_KANIM_ATTEMPT: {
      return {
        ...state,
        listKanimAttempt: true,
        listKanimError: '',
      };
    }
    case LIST_KANIM_SUCCESS: {
      return {
        ...state,
        offices: action.payload,
        listKanimAttempt: false,
      };
    }
    case LIST_KANIM_INVALID: {
      return {
        ...state,
        listKanimAttempt: false,
        listKanimError: action.message,
      };
    }
    case GET_OFFICE_QUOTA_ATTEMPT: {
      return {
        ...state,
        office: {
          info: state.offices.find(({ MO_ID }) => MO_ID === action.payload),
          quota: [],
        },
        getOfficeQuotaAttempt: true,
        getOfficeQuotaError: '',
      };
    }
    case GET_OFFICE_QUOTA_SUCCESS: {
      const newOfficeProperty = {
        ...state.office,
        quota: action.payload,
      };

      return {
        ...state,
        office: newOfficeProperty,
        getOfficeQuotaAttempt: false,
      };
    }
    case GET_OFFICE_QUOTA_INVALID: {
      return {
        ...state,
        getOfficeQuotaAttempt: false,
        getOfficeQuotaError: action.message,
      };
    }
    default: return state;
  }
};

export { defaultState };
export default kanim;