import React from "react";
const username = "jessew@2cloudnine.com";
const password = "hB1RA4mJIm41jX10VrYDCzgOUBNahvVNblkFZ";
const consumerKey =
  "3MVG9Y6d_Btp4xp6Qbj1B103tOLFeipX5Hx6L1eid5xunTxNcryr2Pkv2lPtyOPfbDQBfecKRm2ex8.wTsR9q";
const consumerSecret =
  "9FF4BFBBB6674A368B104E031217F8A317A5BE53CD8CF5C187D998B6FA4739CF";
const headers = { "Content-Type": "application/x-www-form-urlencoded" };

let accessToken;

const Salesforce = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    return fetch(`https://login.salesforce.com/services/oauth2/token`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        grant_type: "password",
        client_id: consumerKey,
        client_secret: consumerSecret
      })
    });
  }
};

export default Salesforce;
