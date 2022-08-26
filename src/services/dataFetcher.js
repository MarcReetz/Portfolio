export default async function fetchPublicData(string) {
  fetch(string)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // store Data in State Data Variable
    console.log(data)
    return data;
  })
  .catch(function (err) {
    console.log(err, " error");
});
}