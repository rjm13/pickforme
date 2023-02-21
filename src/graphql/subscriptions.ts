/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList {
    onCreateList {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList {
    onUpdateList {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList {
    onDeleteList {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
