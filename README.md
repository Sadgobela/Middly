# Middly Frontend buyers UI

This project contains the code for Middly Buyer/Store frontend developed in Vennila ReactJs + Apollo GraphQL + AWS Amplify

# MUST READ: Objective

    * React Hooks (class, redux is not allowed)
    * We will use only GraphQL endpoints
       * Apollo Hooks only (pre-configured)
       * No Restfull calls
    * Pure ReactJS + Styled-components
    * User/Login session will be handled by React Amplify (AWS)
    * Our Goal
      * Very High Preformance
      * Code Quality
      * No Code Smells

    NOTE1: Code will not be accepted/merged to develop branch if you are not statisfying all above rules
    NOTE2: We are following AirBnB Javascript Style code for both Javascript and ReactJs. Both the below configuration will be included in all the projects

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

    POST - https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/test/graphql

    Document Reference:
    https://devdocs.magento.com/guides/v2.3/graphql/

    Graphiql Reference:
    https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/test/graphiql

    Sample component:
    "\middly-buyer-ui\src\Magento2Test.jsx"

Social & Others endpoints:

    POST - https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/graphql

    GET - https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/graphiql

    Sample component:
    "\middly-buyer-ui\src\NonMagento2Test.jsx"

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
