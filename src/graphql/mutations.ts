/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
          category
          details
          imageUri
          createdAt
          updatedAt
        }
        nextToken
      }
      saved {
        items {
          type
          id
          userID
          title
          privacy
          category
          details
          imageUri
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
          category
          details
          imageUri
          createdAt
          updatedAt
        }
        nextToken
      }
      saved {
        items {
          type
          id
          userID
          title
          privacy
          category
          details
          imageUri
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
          category
          details
          imageUri
          createdAt
          updatedAt
        }
        nextToken
      }
      saved {
        items {
          type
          id
          userID
          title
          privacy
          category
          details
          imageUri
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
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
      category
      details
      imageUri
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
      category
      details
      imageUri
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
      category
      details
      imageUri
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
        category
        details
        imageUri
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
        category
        details
        imageUri
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
        category
        details
        imageUri
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
