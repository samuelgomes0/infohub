import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import reactHook from "alova/react";

const alovaInstance = createAlova({
  requestAdapter: adapterFetch(),
  statesHook: reactHook,
  responded: (results) => results.json(),
});

export default alovaInstance;
