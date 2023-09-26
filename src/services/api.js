const BASE_URL = "https://sih-five.vercel.app/api/n1";

// AGENCY END POINTS
export const agencyEndPoints = {
  REGISTER_API: BASE_URL + "/agency/register",
  LOGIN_API: BASE_URL + "/agency/login",
  UPDATE_PASSWORD_API: BASE_URL + "/agency/updatepassword",
  GET_AGENCY_PROFILE: BASE_URL + "/agency/agencyProfile",
  UPDATE_AGENCY_INFO_API: BASE_URL + "/agency/update",
  GET_AGENCY_RESOURCE_AND_DISASTER_API:
    BASE_URL + "/agency/getAgencyResourcesAndDisasters",
  GET_ALL_AGENCY_LOCATIONS_API: BASE_URL + "/agency/agencyLocations",
  GET_SPECIFIC_AGENCY_PROFILE: BASE_URL + "/agency/findAgency",
  GET_ALL_AGENCIES: BASE_URL + "/agency/findAllAgencies",
};

// RESOURCE END POINTS
export const resourceEndPoints = {
  CREATE_RESOURCE_API: BASE_URL + "/resource/createResource",
  UPDATE_RESOURCE_API: BASE_URL + "/resource/updateResource/:id",
  GET_RESOURCE_API: BASE_URL + "/resource/getResource/:resourceName",
  LIST_RESOURCES_API: BASE_URL + "/resource/listResources",
  STATUS_OF_RESOURCES_API: BASE_URL + "/resource/getResourceStatus",
  SHARE_RESOURCES_API: BASE_URL + "/resource/shareResource",
  DELETE_RESOURCES_API: BASE_URL + "/resource/deleteResource/:resourceId",
};

// DISASTER END POINTS
export const disasterEndPoints = {
  ADD_DISASTER_API: BASE_URL + "/disaster/addDisaster",
  UPDATE_DISASTER_API: BASE_URL + "/disaster/updateDisaster/:id",
  GET_DISASTER_API: BASE_URL + "/disaster/getDisaster/:id",
  FETCH_ALL_DISASTERS_API: BASE_URL + "/disaster/allDisasters",
};

// ALERT END POINTS
export const alertEndPoints = {
  CREATE_ALERT_API: BASE_URL + "/alert/createAlert",
  GET_AGENCY_ALERTS_API: BASE_URL + "/alert/getAlertsForAgency",
};
