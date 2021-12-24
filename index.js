import { Tabletojson as tabletojson } from 'tabletojson';

function sortByKey(array, key) {
  return array.sort(function (a, b) {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

const result = await tabletojson.convertUrl(
  'https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations',
  function (tablesAsJson) {
    const arr = [];
    tablesAsJson.flat().map((x) => {
      const val = {
        resource_type: x['Asset type'],
        namespace:
          x['Resource provider namespace/Entity'] ||
          x['Resource provider namespace/entity'],
        abbreviation: x['Abbreviation'],
      };
      arr.push(val);
    });
    sortByKey(arr, 'resource_type');
    return arr;
  }
);

console.log(JSON.stringify(result));
