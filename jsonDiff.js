const jsonString1 = '{"Name":"ABC","Work":"Programmer","State":"123", "City": "Nashik"}';
const jsonString2 = '{"Name":"ABC","Work":"Engineer","State":"456", "Country": "India"}';

const jsonObject1 = JSON.parse(jsonString1);
const jsonObject2 = JSON.parse(jsonString2);

const keys = Object.keys(jsonObject1).concat(Object.keys(jsonObject2));
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  if (jsonObject2.hasOwnProperty(key) && !jsonObject1.hasOwnProperty(key)) {
    console.log(key + " value added as '" + jsonObject2[key] + "' in object2");
  } else if (!jsonObject2.hasOwnProperty(key) && jsonObject1.hasOwnProperty(key)) {
    console.log(key + " value present as '" + jsonObject1[key] + "' in object1 ");
  } else if (jsonObject1[key] != jsonObject2[key]) {
    console.log(
      key + " value changed from '" + jsonObject1[key] + "' to '" + jsonObject2[key] + "'"
    );
  }
}
