export const LOAD_SEARCH_UPDATE = "LOAD_SEARCH_UPDATE";
export const LOAD_APIDATA_UPDATE = "LOAD_APIDATA_UPDATE";
export const LOAD_STARTER_UPDATE = "LOAD_STARTER_UPDATE";
export const LOAD_BENCH_UPDATE = "LOAD_BENCH_UPDATE";

export const loadSearchUpdate = (search) => {
  return {
    type: LOAD_SEARCH_UPDATE,
    payload: search
  }
}

export const loadApidataUpdate = (apidata) => {
  return {
    type: LOAD_APIDATA_UPDATE,
    payload: apidata
  }
}

export const loadStarterUpdate = (starter) => {
  return {
    type: LOAD_STARTER_UPDATE,
    payload: starter
  }
}

export const loadBenchUpdate = (bench) => {
  return {
    type: LOAD_BENCH_UPDATE,
    payload: bench
  }
}
