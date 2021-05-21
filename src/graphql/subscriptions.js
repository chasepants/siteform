/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      first_name
      last_name
      email
      sites {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      first_name
      last_name
      email
      sites {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      first_name
      last_name
      email
      sites {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite($owner: String!) {
    onCreateSite(owner: $owner) {
      id
      userID
      domain
      bucket
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite($owner: String!) {
    onUpdateSite(owner: $owner) {
      id
      userID
      domain
      bucket
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite($owner: String!) {
    onDeleteSite(owner: $owner) {
      id
      userID
      domain
      bucket
      createdAt
      updatedAt
      owner
    }
  }
`;
