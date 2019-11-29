# Middly Frontend buyers UI

This project contains the code for Middly Buyer/Store frontend developed in Vennila ReactJs + Apollo GraphQL + AWS Amplify

## Project configured

Required packages are already added to this project,

```bash
1. Default libraries of create-react-app
2. Apollo Client for Graphql
3. AWS Amplify
4. Multiple graphql enpoints
```

## Installation

Use the package manager [yarn](https://yarnpkg.com/lang/en/) to install packages.

```bash
yarn or npm install
```

## Start Development

To start the project.

```bash
npm start or yarn start
```

## GraphQL Reference

Api gateway has been configured as below,

Magento2 GraphQL:

    POST - https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/magento/graphql

    Document Reference:
    https://devdocs.magento.com/guides/v2.3/graphql/

    Graphiql Reference:
    https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/test/graphql

Social & Others endpoints:

    POST - https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/graphql

    GET - https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/graphiql

## Multiple Apollo Clients & GraphQL Sources

Middly & Social quires

```bash
const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
```

Magento quires

```bash
const { loading, error, data } = useQuery(GET_DOGS{
  context: { clientType: "magento" }
});

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
```

# Objective

    * Moving from NextJs to ReactJS
    * Migrating Restful API to GrapphQL
        * Backend [Magento endpoints are wired, social most are wired few addli. WIP]
    * Immediate Task List
    * Migrate only the ReactJS component from buy-sell-frontend project to New Middly-buyer-UI
        * Discard any Redux, Restful, Routers etc
        * All we need Pure ReactJS + CSS components

### Task 1:

    * Migration of Landing Page to new architecutre, and after inital review we can proceed.

    Our goal
        * Very High Preformance
        * React Hooks
        * Apollo Hooks Concept only
        * Code Quality
        * Code Smells
