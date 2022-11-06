<p align="center">
  <h2 align="center">POLLING UNIT API</h2>
</p>

  <p align="center">
    An API that handles polling unit data in different local government
  </p>
  
## How to run locally
```
- Clone the repository and ensure your .env is in the format of the .env.sample

- run npm install to install dependencies

- run npm start to start the server locally

```

## API ROUTES

<table>
  <tr>
    <th>HTTP VERB</th>
    <th>ENDPOINT</th>
    <th>FUNCTIONALITY</th>
    <th>PAYLOAD</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/v1/fetch/pollingUnit/result?pollUnitId=POLL_UNIT_ID</td>
    <td>Get all results of a polling unit</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>GET</td>
    <td>/api/v1/fetch/all/lga?stateId=STATE_ID</td>
    <td>Get all local government area of a state</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>GET</td>
    <td>/api/v1/fetch/all/pollingUnit/</td>
    <td>Get all polling units</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>GET</td>
    <td>/api/v1/fetch/all/states/</td>
    <td>Get all states</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>GET</td>
    <td>/api/v1/fetch/all/pollingUnit/</td>
    <td>Get all polling units</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>GET</td>
    <td>/api/v1/fetch/sum/total/pollingUnit?lgaId=LGA_ID</td>
    <td>Fetch total result of all polling units under a local government</td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>POST</td>
    <td>/api/v1/add/party/result/pollingUnit</td>
    <td>Save party result for a polling unit into the database</td>
    <td>
    {
      "pollingUnitId": <Number>,
      "partyAbbrev": <String>,
      "partyScore": <Number>,
      "user": <String>
    }
    </td>
  </tr>
</table>

## Deployment

This app was deployed to Heroku and can be accessed from <a href="https://bincom-bend.herokuapp.com/api/v1">HERE</a> ✨✨✨✨✨✨

## Stay in touch

- Author - [Andrew Okoye](https://www.linkedin.com/in/andrew-okoye-281261132/)
```
