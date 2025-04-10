import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import reactHook from "alova/react";

const alovaInstance = createAlova({
  baseURL: "https://en.wikipedia.org/w/api.php",
  requestAdapter: adapterFetch(),
  statesHook: reactHook,
  responded: (results) => results.json(),
});

export default alovaInstance;
