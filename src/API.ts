/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  type?: string | null,
  id?: string | null,
  theme?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  type?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  type?: string | null,
  id: string,
  theme?: string | null,
  lists?: ModelListConnection | null,
  saved?: ModelListConnection | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelListConnection = {
  __typename: "ModelListConnection",
  items:  Array<List | null >,
  nextToken?: string | null,
};

export type List = {
  __typename: "List",
  type?: string | null,
  id: string,
  user?: User | null,
  userID?: string | null,
  title?: string | null,
  privacy?: string | null,
  category?: string | null,
  details?: string | null,
  imageUri?: string | null,
  items?: ModelItemConnection | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type Item = {
  __typename: "Item",
  type?: string | null,
  id: string,
  name?: string | null,
  description?: string | null,
  symbol?: string | null,
  imageUri?: string | null,
  list?: List | null,
  listID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateUserInput = {
  type?: string | null,
  id: string,
  theme?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateListInput = {
  type?: string | null,
  id?: string | null,
  userID?: string | null,
  title?: string | null,
  privacy?: string | null,
  category?: string | null,
  details?: string | null,
  imageUri?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelListConditionInput = {
  type?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  privacy?: ModelStringInput | null,
  category?: ModelStringInput | null,
  details?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelListConditionInput | null > | null,
  or?: Array< ModelListConditionInput | null > | null,
  not?: ModelListConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateListInput = {
  type?: string | null,
  id: string,
  userID?: string | null,
  title?: string | null,
  privacy?: string | null,
  category?: string | null,
  details?: string | null,
  imageUri?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteListInput = {
  id: string,
};

export type CreateItemInput = {
  type?: string | null,
  id?: string | null,
  name?: string | null,
  description?: string | null,
  symbol?: string | null,
  imageUri?: string | null,
  listID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelItemConditionInput = {
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  listID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type UpdateItemInput = {
  type?: string | null,
  id: string,
  name?: string | null,
  description?: string | null,
  symbol?: string | null,
  imageUri?: string | null,
  listID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type ModelUserFilterInput = {
  type?: ModelStringInput | null,
  id?: ModelIDInput | null,
  theme?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelListFilterInput = {
  type?: ModelStringInput | null,
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  privacy?: ModelStringInput | null,
  category?: ModelStringInput | null,
  details?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelListFilterInput | null > | null,
  or?: Array< ModelListFilterInput | null > | null,
  not?: ModelListFilterInput | null,
};

export type ModelItemFilterInput = {
  type?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  symbol?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  listID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    type?: string | null,
    id: string,
    theme?: string | null,
    lists?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    saved?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    type?: string | null,
    id: string,
    theme?: string | null,
    lists?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    saved?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    type?: string | null,
    id: string,
    theme?: string | null,
    lists?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    saved?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateListMutationVariables = {
  input: CreateListInput,
  condition?: ModelListConditionInput | null,
};

export type CreateListMutation = {
  createList?:  {
    __typename: "List",
    type?: string | null,
    id: string,
    user?:  {
      __typename: "User",
      type?: string | null,
      id: string,
      theme?: string | null,
      lists?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      saved?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userID?: string | null,
    title?: string | null,
    privacy?: string | null,
    category?: string | null,
    details?: string | null,
    imageUri?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        type?: string | null,
        id: string,
        name?: string | null,
        description?: string | null,
        symbol?: string | null,
        imageUri?: string | null,
        listID?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateListMutationVariables = {
  input: UpdateListInput,
  condition?: ModelListConditionInput | null,
};

export type UpdateListMutation = {
  updateList?:  {
    __typename: "List",
    type?: string | null,
    id: string,
    user?:  {
      __typename: "User",
      type?: string | null,
      id: string,
      theme?: string | null,
      lists?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      saved?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userID?: string | null,
    title?: string | null,
    privacy?: string | null,
    category?: string | null,
    details?: string | null,
    imageUri?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        type?: string | null,
        id: string,
        name?: string | null,
        description?: string | null,
        symbol?: string | null,
        imageUri?: string | null,
        listID?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteListMutationVariables = {
  input: DeleteListInput,
  condition?: ModelListConditionInput | null,
};

export type DeleteListMutation = {
  deleteList?:  {
    __typename: "List",
    type?: string | null,
    id: string,
    user?:  {
      __typename: "User",
      type?: string | null,
      id: string,
      theme?: string | null,
      lists?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      saved?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userID?: string | null,
    title?: string | null,
    privacy?: string | null,
    category?: string | null,
    details?: string | null,
    imageUri?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        type?: string | null,
        id: string,
        name?: string | null,
        description?: string | null,
        symbol?: string | null,
        imageUri?: string | null,
        listID?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    type?: string | null,
    id: string,
    name?: string | null,
    description?: string | null,
    symbol?: string | null,
    imageUri?: string | null,
    list?:  {
      __typename: "List",
      type?: string | null,
      id: string,
      user?:  {
        __typename: "User",
        type?: string | null,
        id: string,
        theme?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      userID?: string | null,
      title?: string | null,
      privacy?: string | null,
      category?: string | null,
      details?: string | null,
      imageUri?: string | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    listID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    type?: string | null,
    id: string,
    name?: string | null,
    description?: string | null,
    symbol?: string | null,
    imageUri?: string | null,
    list?:  {
      __typename: "List",
      type?: string | null,
      id: string,
      user?:  {
        __typename: "User",
        type?: string | null,
        id: string,
        theme?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      userID?: string | null,
      title?: string | null,
      privacy?: string | null,
      category?: string | null,
      details?: string | null,
      imageUri?: string | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    listID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    type?: string | null,
    id: string,
    name?: string | null,
    description?: string | null,
    symbol?: string | null,
    imageUri?: string | null,
    list?:  {
      __typename: "List",
      type?: string | null,
      id: string,
      user?:  {
        __typename: "User",
        type?: string | null,
        id: string,
        theme?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      userID?: string | null,
      title?: string | null,
      privacy?: string | null,
      category?: string | null,
      details?: string | null,
      imageUri?: string | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    listID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    type?: string | null,
    id: string,
    theme?: string | null,
    lists?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    saved?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      type?: string | null,
      id: string,
      theme?: string | null,
      lists?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      saved?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetListQueryVariables = {
  id: string,
};

export type GetListQuery = {
  getList?:  {
    __typename: "List",
    type?: string | null,
    id: string,
    user?:  {
      __typename: "User",
      type?: string | null,
      id: string,
      theme?: string | null,
      lists?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      saved?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userID?: string | null,
    title?: string | null,
    privacy?: string | null,
    category?: string | null,
    details?: string | null,
    imageUri?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        type?: string | null,
        id: string,
        name?: string | null,
        description?: string | null,
        symbol?: string | null,
        imageUri?: string | null,
        listID?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListListsQueryVariables = {
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListsQuery = {
  listLists?:  {
    __typename: "ModelListConnection",
    items:  Array< {
      __typename: "List",
      type?: string | null,
      id: string,
      user?:  {
        __typename: "User",
        type?: string | null,
        id: string,
        theme?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      userID?: string | null,
      title?: string | null,
      privacy?: string | null,
      category?: string | null,
      details?: string | null,
      imageUri?: string | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    type?: string | null,
    id: string,
    name?: string | null,
    description?: string | null,
    symbol?: string | null,
    imageUri?: string | null,
    list?:  {
      __typename: "List",
      type?: string | null,
      id: string,
      user?:  {
        __typename: "User",
        type?: string | null,
        id: string,
        theme?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      userID?: string | null,
      title?: string | null,
      privacy?: string | null,
      category?: string | null,
      details?: string | null,
      imageUri?: string | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    listID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      type?: string | null,
      id: string,
      name?: string | null,
      description?: string | null,
      symbol?: string | null,
      imageUri?: string | null,
      list?:  {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      listID?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    type?: string | null,
    id: string,
    theme?: string | null,
    lists?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    saved?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    type?: string | null,
    id: string,
    theme?: string | null,
    lists?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    saved?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    type?: string | null,
    id: string,
    theme?: string | null,
    lists?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    saved?:  {
      __typename: "ModelListConnection",
      items:  Array< {
        __typename: "List",
        type?: string | null,
        id: string,
        userID?: string | null,
        title?: string | null,
        privacy?: string | null,
        category?: string | null,
        details?: string | null,
        imageUri?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateListSubscription = {
  onCreateList?:  {
    __typename: "List",
    type?: string | null,
    id: string,
    user?:  {
      __typename: "User",
      type?: string | null,
      id: string,
      theme?: string | null,
      lists?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      saved?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userID?: string | null,
    title?: string | null,
    privacy?: string | null,
    category?: string | null,
    details?: string | null,
    imageUri?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        type?: string | null,
        id: string,
        name?: string | null,
        description?: string | null,
        symbol?: string | null,
        imageUri?: string | null,
        listID?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateListSubscription = {
  onUpdateList?:  {
    __typename: "List",
    type?: string | null,
    id: string,
    user?:  {
      __typename: "User",
      type?: string | null,
      id: string,
      theme?: string | null,
      lists?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      saved?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userID?: string | null,
    title?: string | null,
    privacy?: string | null,
    category?: string | null,
    details?: string | null,
    imageUri?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        type?: string | null,
        id: string,
        name?: string | null,
        description?: string | null,
        symbol?: string | null,
        imageUri?: string | null,
        listID?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteListSubscription = {
  onDeleteList?:  {
    __typename: "List",
    type?: string | null,
    id: string,
    user?:  {
      __typename: "User",
      type?: string | null,
      id: string,
      theme?: string | null,
      lists?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      saved?:  {
        __typename: "ModelListConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userID?: string | null,
    title?: string | null,
    privacy?: string | null,
    category?: string | null,
    details?: string | null,
    imageUri?: string | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        type?: string | null,
        id: string,
        name?: string | null,
        description?: string | null,
        symbol?: string | null,
        imageUri?: string | null,
        listID?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    type?: string | null,
    id: string,
    name?: string | null,
    description?: string | null,
    symbol?: string | null,
    imageUri?: string | null,
    list?:  {
      __typename: "List",
      type?: string | null,
      id: string,
      user?:  {
        __typename: "User",
        type?: string | null,
        id: string,
        theme?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      userID?: string | null,
      title?: string | null,
      privacy?: string | null,
      category?: string | null,
      details?: string | null,
      imageUri?: string | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    listID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    type?: string | null,
    id: string,
    name?: string | null,
    description?: string | null,
    symbol?: string | null,
    imageUri?: string | null,
    list?:  {
      __typename: "List",
      type?: string | null,
      id: string,
      user?:  {
        __typename: "User",
        type?: string | null,
        id: string,
        theme?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      userID?: string | null,
      title?: string | null,
      privacy?: string | null,
      category?: string | null,
      details?: string | null,
      imageUri?: string | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    listID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    type?: string | null,
    id: string,
    name?: string | null,
    description?: string | null,
    symbol?: string | null,
    imageUri?: string | null,
    list?:  {
      __typename: "List",
      type?: string | null,
      id: string,
      user?:  {
        __typename: "User",
        type?: string | null,
        id: string,
        theme?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
      } | null,
      userID?: string | null,
      title?: string | null,
      privacy?: string | null,
      category?: string | null,
      details?: string | null,
      imageUri?: string | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    listID?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
