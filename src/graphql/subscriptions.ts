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
          categoryID
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
          categoryID
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
          categoryID
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateSavedList = /* GraphQL */ `
  subscription OnCreateSavedList {
    onCreateSavedList {
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
export const onUpdateSavedList = /* GraphQL */ `
  subscription OnUpdateSavedList {
    onUpdateSavedList {
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
export const onDeleteSavedList = /* GraphQL */ `
  subscription OnDeleteSavedList {
    onDeleteSavedList {
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
