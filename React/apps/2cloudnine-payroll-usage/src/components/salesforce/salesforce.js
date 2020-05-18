const oauth = {
  clientId:
    "3MVG9Y6d_Btp4xp6Qbj1B103tOLFeipX5Hx6L1eid5xunTxNcryr2Pkv2lPtyOPfbDQBfecKRm2ex8.wTsR9q",
  clientSecret:
    "9FF4BFBBB6674A368B104E031217F8A317A5BE53CD8CF5C187D998B6FA4739CF",
  redirectUri: "http://localhost:3000/token",
  username: "jessew@2cloudnine.com",
  password: "hB1RA4mJIm41jX10VrYDCzgOUBNahvVNblkFZ"
};
const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  "Access-Control-Allow-Origin": "http://localhost.3000/token",
  Origin: "http://localhost.3000/token"
};

async function getAccessToken() {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://login.salesforce.com/services/oauth2/token?grant_type=password&username=${oauth.username}&password=${oauth.password}&client_id=${oauth.clientId}&client_secret=${oauth.clientSecret}`,
    {
      method: "POST",
      headers: headers
    }
  )
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      const accessToken = jsonResponse.access_token;
      return accessToken;
    });
}

async function retrieveLicenses() {
  const accessToken = await getAccessToken();
  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://ap5.salesforce.com/services/data/v48.0/query/?q=select+id,name,Licensed__c,Last_Month__c+from+sfLma__License__c+where+name+=+'L-00051'`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    );
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse.records.map(record => {
        return {
          id: record.Id,
          name: record.Name,
          minimum: record.Licensed__c,
          last_month: record.Last_Month__c
        };
      });
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
}

export default retrieveLicenses;
