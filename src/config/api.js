import { config } from "./config";

export const API = {
  auth: {
    signIn: config.SERVER + ":" + config.PORT + config.API_BASE + "/authentication",
    authorizations: config.SERVER + ":" + config.PORT + config.API_BASE + "/authorizations/",
  },

  user: {
    findByEmail: config.SERVER + ":" + config.PORT + config.API_BASE + "/users/",
    findById: config.SERVER + ":" + config.PORT + config.API_BASE + "/users/",
  },


  floor: { 
    findAll: config.SERVER + ":" + config.PORT + config.API_BASE + "/floors/all",
    findById: config.SERVER + ":" + config.PORT + config.API_BASE + "/floors",
    urlBase: config.SERVER + ":" + config.PORT,
  },

  rack: {
    findAllHeaders: config.SERVER + ":" + config.PORT + config.API_BASE + "/sites", 
    findById: config.SERVER + ":" + config.PORT + config.API_BASE + "/sites", 
  },

  layout: { 
    findAllById: config.SERVER + ":" + config.PORT + config.API_BASE + "/site-drawings",
    findById: config.SERVER + ":" + config.PORT + config.API_BASE + "/site-drawings",
  },

  layoutMarkers: { 
    findAllById: config.SERVER + ":" + config.PORT + config.API_BASE + "/sites",
    findById: config.SERVER + ":" + config.PORT + config.API_BASE + "/sites",
  },

  worker: {
    findAllWorkersByOrganization: config.SERVER + ":" + config.PORT + config.API_BASE + "/organization-worker-relations/organizations/",
    findAllWorkerByIdentification: config.SERVER + ":" + config.PORT + config.API_BASE + "/organization-worker-relations/",
    findAllOrganizationsByWorker: config.SERVER + ":" + config.PORT + config.API_BASE + "/organization-worker-relations/workers/",
    findAllCountries: config.SERVER + ":" + config.PORT + config.API_BASE + "/countries-provinces-cities/",
    findWorkerById: config.SERVER + ":" + config.PORT + config.API_BASE + "/organization-worker-relations/workers/",
    urlPhotoBase: config.SERVER + ":" + config.PORT,
  },

  shift: {
    findAllRetailers: config.SERVER + ":" + config.PORT + config.API_BASE + "/retailers",
    findAllStoresByRetailer: config.SERVER + ":" + config.PORT + config.API_BASE + "/retailers/",
    findAllShiftsByStore: config.SERVER + ":" + config.PORT + config.API_BASE + "/retailers/stores/",
    findShiftById: config.SERVER + ":" + config.PORT + config.API_BASE + "/retailers/stores/",
  },

  variables: {
    findById: config.SERVER + ":" + config.PORT + config.API_BASE + "/variables/",
  },

  registation: {
    create: config.SERVER + ":" + config.PORT + config.API_BASE + "/registrations",
  },

  graph: {
    findAllHeaders: config.SERVER + ":" + config.PORT + config.API_BASE + "/sites", 
    findById: config.SERVER + ":" + config.PORT + config.API_BASE + "/sites", 
  },

  wms: {
    authenticate: config.SERVER + ":" + config.WMS_API_PORT + config.WMS_API_BASE + "/authentication",
    getLocationStatus: config.SERVER + ":" + config.WMS_API_PORT + config.WMS_API_BASE + "/locationStatus",
    getLocationTypes: config.SERVER + ":" + config.WMS_API_PORT + config.WMS_API_BASE + "/locationTypes",
    getTrademarks: config.SERVER + ":" + config.WMS_API_PORT + config.WMS_API_BASE + "/trademarks",
    getLocations: config.SERVER + ":" + config.WMS_API_PORT + config.WMS_API_BASE + "/locations?",
    getBaseUrlImage: config.SERVER + ":" + config.WMS_API_PORT + config.WMS_IMAGE_URL,
  },
};

export const ERRORS = {
  auth: {
    OK: 1000,
    SIGNIN_ERROR: 1001,
    SIGNUP_ERROR: 1002,
    CHANGE_PASSWORD_ERROR: 1003,
  },
  crud: {
    OK: 2000,
    ERROR: 2001,
  },
};
