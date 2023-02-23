/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      type
      id
      theme
      lists {
        items {
          type
          id
          userID
          title
          privacy
          categoryID
          category {
            id
            category
          }
          details
          imageUri
          color
          numItems
          createdAt
          updatedAt
        }
        nextToken
      }
      saved {
        items {
          id
          type
          userID
          listID
          list {
            id
            title
            category {
              id
              category
            }
            createdAt
            updatedAt
            details
            privacy
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        theme
        lists {
          nextToken
        }
        saved {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      type
      id
      user {
        type
        id
        theme
        lists {
          nextToken
        }
        saved {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      title
      privacy
      categoryID
      category {
        id
        category
        icon
        PrimaryColor
        imageUri
        createdAt
        updatedAt
      }
      details
      imageUri
      color
      numItems
      items {
        items {
          type
          id
          name
          description
          symbol
          imageUri
          listID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        user {
          type
          id
          theme
          createdAt
          updatedAt
        }
        userID
        title
        privacy
        categoryID
        category {
          id
          category
          icon
          PrimaryColor
          imageUri
          createdAt
          updatedAt
        }
        details
        imageUri
        color
        numItems
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      category
      icon
      PrimaryColor
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        icon
        PrimaryColor
        imageUri
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      type
      id
      name
      description
      symbol
      imageUri
      list {
        type
        id
        user {
          type
          id
          theme
          createdAt
          updatedAt
        }
        userID
        title
        privacy
        categoryID
        category {
          id
          category
          icon
          PrimaryColor
          imageUri
          createdAt
          updatedAt
        }
        details
        imageUri
        color
        numItems
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      listID
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        id
        name
        description
        symbol
        imageUri
        list {
          type
          id
          userID
          title
          privacy
          categoryID
          details
          imageUri
          color
          numItems
          createdAt
          updatedAt
        }
        listID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSavedList = /* GraphQL */ `
  query GetSavedList($id: ID!) {
    getSavedList(id: $id) {
      id
      type
      userID
      user {
        type
        id
        theme
        lists {
          nextToken
        }
        saved {
          nextToken
        }
        createdAt
        updatedAt
      }
      listID
      list {
        type
        id
        user {
          type
          id
          theme
          createdAt
          updatedAt
        }
        userID
        title
        privacy
        categoryID
        category {
          id
          category
          icon
          PrimaryColor
          imageUri
          createdAt
          updatedAt
        }
        details
        imageUri
        color
        numItems
        items {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSavedLists = /* GraphQL */ `
  query ListSavedLists(
    $filter: ModelSavedListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSavedLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        userID
        user {
          type
          id
          theme
          createdAt
          updatedAt
        }
        listID
        list {
          type
          id
          userID
          title
          privacy
          categoryID
          details
          imageUri
          color
          numItems
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const savedListByDate = /* GraphQL */ `
  query SavedListByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSavedListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    savedListByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        userID
        user {
          type
          id
          theme
          createdAt
          updatedAt
        }
        listID
        list {
          type
          id
          userID
          title
          privacy
          categoryID
          details
          imageUri
          color
          numItems
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
