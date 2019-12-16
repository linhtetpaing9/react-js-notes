const paramsRaw = {
  "~boolean": [
    "Southeast Asia",
    "3to5Days"
  ]
};
const params = Object.keys(paramsRaw)
  .filter(key => hasPrefix(key, ["~boolean", "categories.name"], "tours"))
  .reduce((res, key) => ((res[key] = paramsRaw[key]), res), {});

console.log(urlParam(params));

function hasPrefix(key, prefixes, target){
  const result = prefixes.find(prefix => key.indexOf(prefix) === 0);
  if (result == null) console.warn("Invalid param " + key + " for " + target);
  return result != null;

}

function urlParam(params) {
  if (params == null) return "";
  return Object.keys(params)
    .filter(k => params[k] !== "")
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}
