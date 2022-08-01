import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  float8: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  createdAt: Scalars['timestamptz'];
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isValid: Scalars['Boolean'];
  lastName: Scalars['String'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  updatedAt: Scalars['timestamptz'];
  vip: Scalars['Boolean'];
};


/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  dateOfBirth?: InputMaybe<Date_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  glbPath?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isValid?: InputMaybe<Boolean_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  vip?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateOfBirth?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isValid?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateOfBirth?: Maybe<Scalars['date']>;
  firstName?: Maybe<Scalars['String']>;
  glbPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  dateOfBirth?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isValid?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  vip?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateOfBirth = 'dateOfBirth',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'isValid',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateOfBirth?: InputMaybe<Scalars['date']>;
  firstName?: InputMaybe<Scalars['String']>;
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isValid?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vip?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateOfBirth = 'dateOfBirth',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'isValid',
  /** column name */
  LastName = 'lastName',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Vip = 'vip'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "customers" */
  deleteCustomer?: Maybe<Customers>;
  /** delete data from the table: "customers" */
  deleteCustomers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "test.test" */
  deleteTes?: Maybe<Test>;
  /** delete data from the table: "test.test" */
  deleteTest?: Maybe<Test_Mutation_Response>;
  /** delete single row from the table: "test.test1_tables" */
  deleteTest1Table?: Maybe<Test1Tables>;
  /** delete data from the table: "test.test1_tables" */
  deleteTest1Tables?: Maybe<Test1Tables_Mutation_Response>;
  /** delete single row from the table: "test.test2_tables" */
  deleteTest2Table?: Maybe<Test2Tables>;
  /** delete data from the table: "test.test2_tables" */
  deleteTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** delete single row from the table: "test.test4_tables" */
  deleteTest4Table?: Maybe<Test4Tables>;
  /** delete data from the table: "test.test4_tables" */
  deleteTest4Tables?: Maybe<Test4Tables_Mutation_Response>;
  /** delete single row from the table: "test.test5_tables" */
  deleteTest5Table?: Maybe<Test5Tables>;
  /** delete data from the table: "test.test5_tables" */
  deleteTest5Tables?: Maybe<Test5Tables_Mutation_Response>;
  /** delete single row from the table: "test.test6_tables" */
  deleteTest6Table?: Maybe<Test6Tables>;
  /** delete data from the table: "test.test6_tables" */
  deleteTest6Tables?: Maybe<Test6Tables_Mutation_Response>;
  /** delete single row from the table: "test.test_tables" */
  deleteTestTable?: Maybe<TestTables>;
  /** delete data from the table: "test.test_tables" */
  deleteTestTables?: Maybe<TestTables_Mutation_Response>;
  /** delete single row from the table: "xr_models" */
  deleteXrModel?: Maybe<XrModels>;
  /** delete data from the table: "xr_models" */
  deleteXrModels?: Maybe<XrModels_Mutation_Response>;
  /** delete data from the table: "order_products" */
  delete_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** delete single row from the table: "order_products" */
  delete_order_products_by_pk?: Maybe<Order_Products>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "test.enumTest" */
  delete_test_enumTest?: Maybe<Test_EnumTest_Mutation_Response>;
  /** delete single row from the table: "test.enumTest" */
  delete_test_enumTest_by_pk?: Maybe<Test_EnumTest>;
  /** delete data from the table: "test.test3_tables" */
  delete_test_test3_tables?: Maybe<Test_Test3_Tables_Mutation_Response>;
  /** delete single row from the table: "test.test3_tables" */
  delete_test_test3_tables_by_pk?: Maybe<Test_Test3_Tables>;
  /** delete data from the table: "xr_model_animations" */
  delete_xr_model_animations?: Maybe<Xr_Model_Animations_Mutation_Response>;
  /** delete single row from the table: "xr_model_animations" */
  delete_xr_model_animations_by_pk?: Maybe<Xr_Model_Animations>;
  /** delete data from the table: "xr_model_attachments" */
  delete_xr_model_attachments?: Maybe<Xr_Model_Attachments_Mutation_Response>;
  /** delete single row from the table: "xr_model_attachments" */
  delete_xr_model_attachments_by_pk?: Maybe<Xr_Model_Attachments>;
  /** delete data from the table: "xr_model_files" */
  delete_xr_model_files?: Maybe<Xr_Model_Files_Mutation_Response>;
  /** delete single row from the table: "xr_model_files" */
  delete_xr_model_files_by_pk?: Maybe<Xr_Model_Files>;
  /** insert a single row into the table: "customers" */
  insertCustomer?: Maybe<Customers>;
  /** insert data into the table: "customers" */
  insertCustomers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "test.test" */
  insertTes?: Maybe<Test>;
  /** insert data into the table: "test.test" */
  insertTest?: Maybe<Test_Mutation_Response>;
  /** insert a single row into the table: "test.test1_tables" */
  insertTest1Table?: Maybe<Test1Tables>;
  /** insert data into the table: "test.test1_tables" */
  insertTest1Tables?: Maybe<Test1Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test2_tables" */
  insertTest2Table?: Maybe<Test2Tables>;
  /** insert data into the table: "test.test2_tables" */
  insertTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test4_tables" */
  insertTest4Table?: Maybe<Test4Tables>;
  /** insert data into the table: "test.test4_tables" */
  insertTest4Tables?: Maybe<Test4Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test5_tables" */
  insertTest5Table?: Maybe<Test5Tables>;
  /** insert data into the table: "test.test5_tables" */
  insertTest5Tables?: Maybe<Test5Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test6_tables" */
  insertTest6Table?: Maybe<Test6Tables>;
  /** insert data into the table: "test.test6_tables" */
  insertTest6Tables?: Maybe<Test6Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test_tables" */
  insertTestTable?: Maybe<TestTables>;
  /** insert data into the table: "test.test_tables" */
  insertTestTables?: Maybe<TestTables_Mutation_Response>;
  /** insert a single row into the table: "xr_models" */
  insertXrModel?: Maybe<XrModels>;
  /** insert data into the table: "xr_models" */
  insertXrModels?: Maybe<XrModels_Mutation_Response>;
  /** insert data into the table: "order_products" */
  insert_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** insert a single row into the table: "order_products" */
  insert_order_products_one?: Maybe<Order_Products>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "test.enumTest" */
  insert_test_enumTest?: Maybe<Test_EnumTest_Mutation_Response>;
  /** insert a single row into the table: "test.enumTest" */
  insert_test_enumTest_one?: Maybe<Test_EnumTest>;
  /** insert data into the table: "test.test3_tables" */
  insert_test_test3_tables?: Maybe<Test_Test3_Tables_Mutation_Response>;
  /** insert a single row into the table: "test.test3_tables" */
  insert_test_test3_tables_one?: Maybe<Test_Test3_Tables>;
  /** insert data into the table: "xr_model_animations" */
  insert_xr_model_animations?: Maybe<Xr_Model_Animations_Mutation_Response>;
  /** insert a single row into the table: "xr_model_animations" */
  insert_xr_model_animations_one?: Maybe<Xr_Model_Animations>;
  /** insert data into the table: "xr_model_attachments" */
  insert_xr_model_attachments?: Maybe<Xr_Model_Attachments_Mutation_Response>;
  /** insert a single row into the table: "xr_model_attachments" */
  insert_xr_model_attachments_one?: Maybe<Xr_Model_Attachments>;
  /** insert data into the table: "xr_model_files" */
  insert_xr_model_files?: Maybe<Xr_Model_Files_Mutation_Response>;
  /** insert a single row into the table: "xr_model_files" */
  insert_xr_model_files_one?: Maybe<Xr_Model_Files>;
  /** update single row of the table: "customers" */
  updateCustomer?: Maybe<Customers>;
  /** update data of the table: "customers" */
  updateCustomers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "test.test" */
  updateTes?: Maybe<Test>;
  /** update data of the table: "test.test" */
  updateTest?: Maybe<Test_Mutation_Response>;
  /** update single row of the table: "test.test1_tables" */
  updateTest1Table?: Maybe<Test1Tables>;
  /** update data of the table: "test.test1_tables" */
  updateTest1Tables?: Maybe<Test1Tables_Mutation_Response>;
  /** update single row of the table: "test.test2_tables" */
  updateTest2Table?: Maybe<Test2Tables>;
  /** update data of the table: "test.test2_tables" */
  updateTest2Tables?: Maybe<Test2Tables_Mutation_Response>;
  /** update single row of the table: "test.test4_tables" */
  updateTest4Table?: Maybe<Test4Tables>;
  /** update data of the table: "test.test4_tables" */
  updateTest4Tables?: Maybe<Test4Tables_Mutation_Response>;
  /** update single row of the table: "test.test5_tables" */
  updateTest5Table?: Maybe<Test5Tables>;
  /** update data of the table: "test.test5_tables" */
  updateTest5Tables?: Maybe<Test5Tables_Mutation_Response>;
  /** update single row of the table: "test.test6_tables" */
  updateTest6Table?: Maybe<Test6Tables>;
  /** update data of the table: "test.test6_tables" */
  updateTest6Tables?: Maybe<Test6Tables_Mutation_Response>;
  /** update single row of the table: "test.test_tables" */
  updateTestTable?: Maybe<TestTables>;
  /** update data of the table: "test.test_tables" */
  updateTestTables?: Maybe<TestTables_Mutation_Response>;
  /** update single row of the table: "xr_models" */
  updateXrModel?: Maybe<XrModels>;
  /** update data of the table: "xr_models" */
  updateXrModels?: Maybe<XrModels_Mutation_Response>;
  /** update data of the table: "order_products" */
  update_order_products?: Maybe<Order_Products_Mutation_Response>;
  /** update single row of the table: "order_products" */
  update_order_products_by_pk?: Maybe<Order_Products>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "test.enumTest" */
  update_test_enumTest?: Maybe<Test_EnumTest_Mutation_Response>;
  /** update single row of the table: "test.enumTest" */
  update_test_enumTest_by_pk?: Maybe<Test_EnumTest>;
  /** update data of the table: "test.test3_tables" */
  update_test_test3_tables?: Maybe<Test_Test3_Tables_Mutation_Response>;
  /** update single row of the table: "test.test3_tables" */
  update_test_test3_tables_by_pk?: Maybe<Test_Test3_Tables>;
  /** update data of the table: "xr_model_animations" */
  update_xr_model_animations?: Maybe<Xr_Model_Animations_Mutation_Response>;
  /** update single row of the table: "xr_model_animations" */
  update_xr_model_animations_by_pk?: Maybe<Xr_Model_Animations>;
  /** update data of the table: "xr_model_attachments" */
  update_xr_model_attachments?: Maybe<Xr_Model_Attachments_Mutation_Response>;
  /** update single row of the table: "xr_model_attachments" */
  update_xr_model_attachments_by_pk?: Maybe<Xr_Model_Attachments>;
  /** update data of the table: "xr_model_files" */
  update_xr_model_files?: Maybe<Xr_Model_Files_Mutation_Response>;
  /** update single row of the table: "xr_model_files" */
  update_xr_model_files_by_pk?: Maybe<Xr_Model_Files>;
};


/** mutation root */
export type Mutation_RootDeleteCustomerArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTesArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTestArgs = {
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTest1TableArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTest1TablesArgs = {
  where: Test1Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTest2TableArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTest2TablesArgs = {
  where: Test2Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTest4TableArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTest4TablesArgs = {
  where: Test4Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTest5TableArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTest5TablesArgs = {
  where: Test5Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTest6TableArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTest6TablesArgs = {
  where: Test6Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteTestTableArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteTestTablesArgs = {
  where: TestTables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteXrModelArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteXrModelsArgs = {
  where: XrModels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_ProductsArgs = {
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Test_EnumTestArgs = {
  where: Test_EnumTest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_EnumTest_By_PkArgs = {
  orderStatus: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Test_Test3_TablesArgs = {
  where: Test_Test3_Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_Test3_Tables_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Xr_Model_AnimationsArgs = {
  where: Xr_Model_Animations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Xr_Model_Animations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Xr_Model_AttachmentsArgs = {
  where: Xr_Model_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Xr_Model_Attachments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Xr_Model_FilesArgs = {
  where: Xr_Model_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Xr_Model_Files_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertCustomerArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTesArgs = {
  object: Test_Insert_Input;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestArgs = {
  objects: Array<Test_Insert_Input>;
  on_conflict?: InputMaybe<Test_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest1TableArgs = {
  object: Test1Tables_Insert_Input;
  on_conflict?: InputMaybe<Test1Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest1TablesArgs = {
  objects: Array<Test1Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test1Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest2TableArgs = {
  object: Test2Tables_Insert_Input;
  on_conflict?: InputMaybe<Test2Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest2TablesArgs = {
  objects: Array<Test2Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test2Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest4TableArgs = {
  object: Test4Tables_Insert_Input;
  on_conflict?: InputMaybe<Test4Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest4TablesArgs = {
  objects: Array<Test4Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test4Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest5TableArgs = {
  object: Test5Tables_Insert_Input;
  on_conflict?: InputMaybe<Test5Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest5TablesArgs = {
  objects: Array<Test5Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test5Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest6TableArgs = {
  object: Test6Tables_Insert_Input;
  on_conflict?: InputMaybe<Test6Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTest6TablesArgs = {
  objects: Array<Test6Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test6Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestTableArgs = {
  object: TestTables_Insert_Input;
  on_conflict?: InputMaybe<TestTables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertTestTablesArgs = {
  objects: Array<TestTables_Insert_Input>;
  on_conflict?: InputMaybe<TestTables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertXrModelArgs = {
  object: XrModels_Insert_Input;
  on_conflict?: InputMaybe<XrModels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertXrModelsArgs = {
  objects: Array<XrModels_Insert_Input>;
  on_conflict?: InputMaybe<XrModels_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_ProductsArgs = {
  objects: Array<Order_Products_Insert_Input>;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Products_OneArgs = {
  object: Order_Products_Insert_Input;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_EnumTestArgs = {
  objects: Array<Test_EnumTest_Insert_Input>;
  on_conflict?: InputMaybe<Test_EnumTest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_EnumTest_OneArgs = {
  object: Test_EnumTest_Insert_Input;
  on_conflict?: InputMaybe<Test_EnumTest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Test3_TablesArgs = {
  objects: Array<Test_Test3_Tables_Insert_Input>;
  on_conflict?: InputMaybe<Test_Test3_Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Test3_Tables_OneArgs = {
  object: Test_Test3_Tables_Insert_Input;
  on_conflict?: InputMaybe<Test_Test3_Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Xr_Model_AnimationsArgs = {
  objects: Array<Xr_Model_Animations_Insert_Input>;
  on_conflict?: InputMaybe<Xr_Model_Animations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Xr_Model_Animations_OneArgs = {
  object: Xr_Model_Animations_Insert_Input;
  on_conflict?: InputMaybe<Xr_Model_Animations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Xr_Model_AttachmentsArgs = {
  objects: Array<Xr_Model_Attachments_Insert_Input>;
  on_conflict?: InputMaybe<Xr_Model_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Xr_Model_Attachments_OneArgs = {
  object: Xr_Model_Attachments_Insert_Input;
  on_conflict?: InputMaybe<Xr_Model_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Xr_Model_FilesArgs = {
  objects: Array<Xr_Model_Files_Insert_Input>;
  on_conflict?: InputMaybe<Xr_Model_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Xr_Model_Files_OneArgs = {
  object: Xr_Model_Files_Insert_Input;
  on_conflict?: InputMaybe<Xr_Model_Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateCustomerArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTesArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  pk_columns: Test_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTestArgs = {
  _set?: InputMaybe<Test_Set_Input>;
  where: Test_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest1TableArgs = {
  _set?: InputMaybe<Test1Tables_Set_Input>;
  pk_columns: Test1Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest1TablesArgs = {
  _set?: InputMaybe<Test1Tables_Set_Input>;
  where: Test1Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest2TableArgs = {
  _set?: InputMaybe<Test2Tables_Set_Input>;
  pk_columns: Test2Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest2TablesArgs = {
  _set?: InputMaybe<Test2Tables_Set_Input>;
  where: Test2Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest4TableArgs = {
  _set?: InputMaybe<Test4Tables_Set_Input>;
  pk_columns: Test4Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest4TablesArgs = {
  _set?: InputMaybe<Test4Tables_Set_Input>;
  where: Test4Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest5TableArgs = {
  _set?: InputMaybe<Test5Tables_Set_Input>;
  pk_columns: Test5Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest5TablesArgs = {
  _set?: InputMaybe<Test5Tables_Set_Input>;
  where: Test5Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTest6TableArgs = {
  _set?: InputMaybe<Test6Tables_Set_Input>;
  pk_columns: Test6Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTest6TablesArgs = {
  _set?: InputMaybe<Test6Tables_Set_Input>;
  where: Test6Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateTestTableArgs = {
  _set?: InputMaybe<TestTables_Set_Input>;
  pk_columns: TestTables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateTestTablesArgs = {
  _set?: InputMaybe<TestTables_Set_Input>;
  where: TestTables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateXrModelArgs = {
  _set?: InputMaybe<XrModels_Set_Input>;
  pk_columns: XrModels_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateXrModelsArgs = {
  _set?: InputMaybe<XrModels_Set_Input>;
  where: XrModels_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ProductsArgs = {
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  _set?: InputMaybe<Order_Products_Set_Input>;
  where: Order_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Products_By_PkArgs = {
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  _set?: InputMaybe<Order_Products_Set_Input>;
  pk_columns: Order_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_EnumTestArgs = {
  _set?: InputMaybe<Test_EnumTest_Set_Input>;
  where: Test_EnumTest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_EnumTest_By_PkArgs = {
  _set?: InputMaybe<Test_EnumTest_Set_Input>;
  pk_columns: Test_EnumTest_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Test3_TablesArgs = {
  _inc?: InputMaybe<Test_Test3_Tables_Inc_Input>;
  _set?: InputMaybe<Test_Test3_Tables_Set_Input>;
  where: Test_Test3_Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Test3_Tables_By_PkArgs = {
  _inc?: InputMaybe<Test_Test3_Tables_Inc_Input>;
  _set?: InputMaybe<Test_Test3_Tables_Set_Input>;
  pk_columns: Test_Test3_Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Xr_Model_AnimationsArgs = {
  _set?: InputMaybe<Xr_Model_Animations_Set_Input>;
  where: Xr_Model_Animations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Xr_Model_Animations_By_PkArgs = {
  _set?: InputMaybe<Xr_Model_Animations_Set_Input>;
  pk_columns: Xr_Model_Animations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Xr_Model_AttachmentsArgs = {
  _set?: InputMaybe<Xr_Model_Attachments_Set_Input>;
  where: Xr_Model_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Xr_Model_Attachments_By_PkArgs = {
  _set?: InputMaybe<Xr_Model_Attachments_Set_Input>;
  pk_columns: Xr_Model_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Xr_Model_FilesArgs = {
  _set?: InputMaybe<Xr_Model_Files_Set_Input>;
  where: Xr_Model_Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Xr_Model_Files_By_PkArgs = {
  _set?: InputMaybe<Xr_Model_Files_Set_Input>;
  pk_columns: Xr_Model_Files_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_products" */
export type Order_Products = {
  __typename?: 'order_products';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  is_valid: Scalars['Boolean'];
  name: Scalars['String'];
  order_id: Scalars['Int'];
  /** An object relationship */
  orders: Orders;
  price: Scalars['numeric'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "order_products" */
export type Order_Products_Aggregate = {
  __typename?: 'order_products_aggregate';
  aggregate?: Maybe<Order_Products_Aggregate_Fields>;
  nodes: Array<Order_Products>;
};

/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_Fields = {
  __typename?: 'order_products_aggregate_fields';
  avg?: Maybe<Order_Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Products_Max_Fields>;
  min?: Maybe<Order_Products_Min_Fields>;
  stddev?: Maybe<Order_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Products_Sum_Fields>;
  var_pop?: Maybe<Order_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Products_Var_Samp_Fields>;
  variance?: Maybe<Order_Products_Variance_Fields>;
};


/** aggregate fields of "order_products" */
export type Order_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_products" */
export type Order_Products_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Products_Max_Order_By>;
  min?: InputMaybe<Order_Products_Min_Order_By>;
  stddev?: InputMaybe<Order_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Products_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_products" */
export type Order_Products_Arr_Rel_Insert_Input = {
  data: Array<Order_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Products_Avg_Fields = {
  __typename?: 'order_products_avg_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_products" */
export type Order_Products_Avg_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_products". All fields are combined with a logical 'AND'. */
export type Order_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  _not?: InputMaybe<Order_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Products_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_products" */
export enum Order_Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderProductsPkey = 'order_products_pkey'
}

/** input type for incrementing numeric columns in table "order_products" */
export type Order_Products_Inc_Input = {
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "order_products" */
export type Order_Products_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['Int']>;
  orders?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Products_Max_Fields = {
  __typename?: 'order_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_products" */
export type Order_Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Products_Min_Fields = {
  __typename?: 'order_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_products" */
export type Order_Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_products" */
export type Order_Products_Mutation_Response = {
  __typename?: 'order_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Products>;
};

/** on_conflict condition type for table "order_products" */
export type Order_Products_On_Conflict = {
  constraint: Order_Products_Constraint;
  update_columns?: Array<Order_Products_Update_Column>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "order_products". */
export type Order_Products_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  orders?: InputMaybe<Orders_Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_products */
export type Order_Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_products" */
export enum Order_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "order_products" */
export type Order_Products_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Products_Stddev_Fields = {
  __typename?: 'order_products_stddev_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_products" */
export type Order_Products_Stddev_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Products_Stddev_Pop_Fields = {
  __typename?: 'order_products_stddev_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_products" */
export type Order_Products_Stddev_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Products_Stddev_Samp_Fields = {
  __typename?: 'order_products_stddev_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_products" */
export type Order_Products_Stddev_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Products_Sum_Fields = {
  __typename?: 'order_products_sum_fields';
  order_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "order_products" */
export type Order_Products_Sum_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "order_products" */
export enum Order_Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Order_Products_Var_Pop_Fields = {
  __typename?: 'order_products_var_pop_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_products" */
export type Order_Products_Var_Pop_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Products_Var_Samp_Fields = {
  __typename?: 'order_products_var_samp_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_products" */
export type Order_Products_Var_Samp_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Products_Variance_Fields = {
  __typename?: 'order_products_variance_fields';
  order_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_products" */
export type Order_Products_Variance_Order_By = {
  order_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  created_at: Scalars['timestamptz'];
  customer_id: Scalars['uuid'];
  /** An object relationship */
  customers: Customers;
  id: Scalars['Int'];
  is_valid: Scalars['Boolean'];
  note?: Maybe<Scalars['String']>;
  order_date: Scalars['timestamptz'];
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "orders" */
export type OrdersOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_id?: InputMaybe<Uuid_Comparison_Exp>;
  customers?: InputMaybe<Customers_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_valid?: InputMaybe<Boolean_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  order_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  order_products?: InputMaybe<Order_Products_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  customers?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
  order_products?: InputMaybe<Order_Products_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  order_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  note?: Maybe<Scalars['String']>;
  order_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  customers?: InputMaybe<Customers_Order_By>;
  id?: InputMaybe<Order_By>;
  is_valid?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_date?: InputMaybe<Order_By>;
  order_products_aggregate?: InputMaybe<Order_Products_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Note = 'note',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  customer_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['Int']>;
  is_valid?: InputMaybe<Scalars['Boolean']>;
  note?: InputMaybe<Scalars['String']>;
  order_date?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsValid = 'is_valid',
  /** column name */
  Note = 'note',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test.test" using primary key columns */
  tes?: Maybe<Test>;
  /** fetch data from the table: "test.test" */
  test: Array<Test>;
  /** fetch data from the table: "test.test1_tables" using primary key columns */
  test1Table?: Maybe<Test1Tables>;
  /** fetch data from the table: "test.test1_tables" */
  test1Tables: Array<Test1Tables>;
  /** fetch aggregated fields from the table: "test.test1_tables" */
  test1TablesAggregate: Test1Tables_Aggregate;
  /** fetch data from the table: "test.test2_tables" using primary key columns */
  test2Table?: Maybe<Test2Tables>;
  /** fetch data from the table: "test.test2_tables" */
  test2Tables: Array<Test2Tables>;
  /** fetch aggregated fields from the table: "test.test2_tables" */
  test2TablesAggregate: Test2Tables_Aggregate;
  /** fetch data from the table: "test.test4_tables" using primary key columns */
  test4Table?: Maybe<Test4Tables>;
  /** fetch data from the table: "test.test4_tables" */
  test4Tables: Array<Test4Tables>;
  /** fetch aggregated fields from the table: "test.test4_tables" */
  test4TablesAggregate: Test4Tables_Aggregate;
  /** fetch data from the table: "test.test5_tables" using primary key columns */
  test5Table?: Maybe<Test5Tables>;
  /** fetch data from the table: "test.test5_tables" */
  test5Tables: Array<Test5Tables>;
  /** fetch aggregated fields from the table: "test.test5_tables" */
  test5TablesAggregate: Test5Tables_Aggregate;
  /** fetch data from the table: "test.test6_tables" using primary key columns */
  test6Table?: Maybe<Test6Tables>;
  /** fetch data from the table: "test.test6_tables" */
  test6Tables: Array<Test6Tables>;
  /** fetch aggregated fields from the table: "test.test6_tables" */
  test6TablesAggregate: Test6Tables_Aggregate;
  /** fetch aggregated fields from the table: "test.test" */
  testAggregate: Test_Aggregate;
  /** fetch data from the table: "test.test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test.test_tables" */
  testTables: Array<TestTables>;
  /** fetch aggregated fields from the table: "test.test_tables" */
  testTablesAggregate: TestTables_Aggregate;
  /** fetch data from the table: "test.enumTest" */
  test_enumTest: Array<Test_EnumTest>;
  /** fetch aggregated fields from the table: "test.enumTest" */
  test_enumTest_aggregate: Test_EnumTest_Aggregate;
  /** fetch data from the table: "test.enumTest" using primary key columns */
  test_enumTest_by_pk?: Maybe<Test_EnumTest>;
  /** fetch data from the table: "test.test3_tables" */
  test_test3_tables: Array<Test_Test3_Tables>;
  /** fetch aggregated fields from the table: "test.test3_tables" */
  test_test3_tables_aggregate: Test_Test3_Tables_Aggregate;
  /** fetch data from the table: "test.test3_tables" using primary key columns */
  test_test3_tables_by_pk?: Maybe<Test_Test3_Tables>;
  /** fetch data from the table: "xr_models" using primary key columns */
  xrModel?: Maybe<XrModels>;
  /** fetch data from the table: "xr_models" */
  xrModels: Array<XrModels>;
  /** fetch aggregated fields from the table: "xr_models" */
  xrModelsAggregate: XrModels_Aggregate;
  /** fetch data from the table: "xr_model_animations" */
  xr_model_animations: Array<Xr_Model_Animations>;
  /** fetch aggregated fields from the table: "xr_model_animations" */
  xr_model_animations_aggregate: Xr_Model_Animations_Aggregate;
  /** fetch data from the table: "xr_model_animations" using primary key columns */
  xr_model_animations_by_pk?: Maybe<Xr_Model_Animations>;
  /** fetch data from the table: "xr_model_attachments" */
  xr_model_attachments: Array<Xr_Model_Attachments>;
  /** fetch aggregated fields from the table: "xr_model_attachments" */
  xr_model_attachments_aggregate: Xr_Model_Attachments_Aggregate;
  /** fetch data from the table: "xr_model_attachments" using primary key columns */
  xr_model_attachments_by_pk?: Maybe<Xr_Model_Attachments>;
  /** fetch data from the table: "xr_model_files" */
  xr_model_files: Array<Xr_Model_Files>;
  /** fetch aggregated fields from the table: "xr_model_files" */
  xr_model_files_aggregate: Xr_Model_Files_Aggregate;
  /** fetch data from the table: "xr_model_files" using primary key columns */
  xr_model_files_by_pk?: Maybe<Xr_Model_Files>;
};


export type Query_RootCustomerArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Query_RootOrder_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTesArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTest1TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest1TablesArgs = {
  distinct_on?: InputMaybe<Array<Test1Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test1Tables_Order_By>>;
  where?: InputMaybe<Test1Tables_Bool_Exp>;
};


export type Query_RootTest1TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test1Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test1Tables_Order_By>>;
  where?: InputMaybe<Test1Tables_Bool_Exp>;
};


export type Query_RootTest2TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest2TablesArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Query_RootTest2TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Query_RootTest4TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest4TablesArgs = {
  distinct_on?: InputMaybe<Array<Test4Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test4Tables_Order_By>>;
  where?: InputMaybe<Test4Tables_Bool_Exp>;
};


export type Query_RootTest4TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test4Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test4Tables_Order_By>>;
  where?: InputMaybe<Test4Tables_Bool_Exp>;
};


export type Query_RootTest5TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest5TablesArgs = {
  distinct_on?: InputMaybe<Array<Test5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test5Tables_Order_By>>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};


export type Query_RootTest5TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test5Tables_Order_By>>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};


export type Query_RootTest6TableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTest6TablesArgs = {
  distinct_on?: InputMaybe<Array<Test6Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test6Tables_Order_By>>;
  where?: InputMaybe<Test6Tables_Bool_Exp>;
};


export type Query_RootTest6TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test6Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test6Tables_Order_By>>;
  where?: InputMaybe<Test6Tables_Bool_Exp>;
};


export type Query_RootTestAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Query_RootTestTableArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTestTablesArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};


export type Query_RootTestTablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};


export type Query_RootTest_EnumTestArgs = {
  distinct_on?: InputMaybe<Array<Test_EnumTest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_EnumTest_Order_By>>;
  where?: InputMaybe<Test_EnumTest_Bool_Exp>;
};


export type Query_RootTest_EnumTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_EnumTest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_EnumTest_Order_By>>;
  where?: InputMaybe<Test_EnumTest_Bool_Exp>;
};


export type Query_RootTest_EnumTest_By_PkArgs = {
  orderStatus: Scalars['String'];
};


export type Query_RootTest_Test3_TablesArgs = {
  distinct_on?: InputMaybe<Array<Test_Test3_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Test3_Tables_Order_By>>;
  where?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
};


export type Query_RootTest_Test3_Tables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Test3_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Test3_Tables_Order_By>>;
  where?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
};


export type Query_RootTest_Test3_Tables_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootXrModelArgs = {
  id: Scalars['uuid'];
};


export type Query_RootXrModelsArgs = {
  distinct_on?: InputMaybe<Array<XrModels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<XrModels_Order_By>>;
  where?: InputMaybe<XrModels_Bool_Exp>;
};


export type Query_RootXrModelsAggregateArgs = {
  distinct_on?: InputMaybe<Array<XrModels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<XrModels_Order_By>>;
  where?: InputMaybe<XrModels_Bool_Exp>;
};


export type Query_RootXr_Model_AnimationsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


export type Query_RootXr_Model_Animations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


export type Query_RootXr_Model_Animations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootXr_Model_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


export type Query_RootXr_Model_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


export type Query_RootXr_Model_Attachments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootXr_Model_FilesArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};


export type Query_RootXr_Model_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};


export type Query_RootXr_Model_Files_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** An array relationship */
  order_products: Array<Order_Products>;
  /** An aggregate relationship */
  order_products_aggregate: Order_Products_Aggregate;
  /** fetch data from the table: "order_products" using primary key columns */
  order_products_by_pk?: Maybe<Order_Products>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "test.test" using primary key columns */
  tes?: Maybe<Test>;
  /** fetch data from the table: "test.test" */
  test: Array<Test>;
  /** fetch data from the table: "test.test1_tables" using primary key columns */
  test1Table?: Maybe<Test1Tables>;
  /** fetch data from the table: "test.test1_tables" */
  test1Tables: Array<Test1Tables>;
  /** fetch aggregated fields from the table: "test.test1_tables" */
  test1TablesAggregate: Test1Tables_Aggregate;
  /** fetch data from the table: "test.test2_tables" using primary key columns */
  test2Table?: Maybe<Test2Tables>;
  /** fetch data from the table: "test.test2_tables" */
  test2Tables: Array<Test2Tables>;
  /** fetch aggregated fields from the table: "test.test2_tables" */
  test2TablesAggregate: Test2Tables_Aggregate;
  /** fetch data from the table: "test.test4_tables" using primary key columns */
  test4Table?: Maybe<Test4Tables>;
  /** fetch data from the table: "test.test4_tables" */
  test4Tables: Array<Test4Tables>;
  /** fetch aggregated fields from the table: "test.test4_tables" */
  test4TablesAggregate: Test4Tables_Aggregate;
  /** fetch data from the table: "test.test5_tables" using primary key columns */
  test5Table?: Maybe<Test5Tables>;
  /** fetch data from the table: "test.test5_tables" */
  test5Tables: Array<Test5Tables>;
  /** fetch aggregated fields from the table: "test.test5_tables" */
  test5TablesAggregate: Test5Tables_Aggregate;
  /** fetch data from the table: "test.test6_tables" using primary key columns */
  test6Table?: Maybe<Test6Tables>;
  /** fetch data from the table: "test.test6_tables" */
  test6Tables: Array<Test6Tables>;
  /** fetch aggregated fields from the table: "test.test6_tables" */
  test6TablesAggregate: Test6Tables_Aggregate;
  /** fetch aggregated fields from the table: "test.test" */
  testAggregate: Test_Aggregate;
  /** fetch data from the table: "test.test_tables" using primary key columns */
  testTable?: Maybe<TestTables>;
  /** fetch data from the table: "test.test_tables" */
  testTables: Array<TestTables>;
  /** fetch aggregated fields from the table: "test.test_tables" */
  testTablesAggregate: TestTables_Aggregate;
  /** fetch data from the table: "test.enumTest" */
  test_enumTest: Array<Test_EnumTest>;
  /** fetch aggregated fields from the table: "test.enumTest" */
  test_enumTest_aggregate: Test_EnumTest_Aggregate;
  /** fetch data from the table: "test.enumTest" using primary key columns */
  test_enumTest_by_pk?: Maybe<Test_EnumTest>;
  /** fetch data from the table: "test.test3_tables" */
  test_test3_tables: Array<Test_Test3_Tables>;
  /** fetch aggregated fields from the table: "test.test3_tables" */
  test_test3_tables_aggregate: Test_Test3_Tables_Aggregate;
  /** fetch data from the table: "test.test3_tables" using primary key columns */
  test_test3_tables_by_pk?: Maybe<Test_Test3_Tables>;
  /** fetch data from the table: "xr_models" using primary key columns */
  xrModel?: Maybe<XrModels>;
  /** fetch data from the table: "xr_models" */
  xrModels: Array<XrModels>;
  /** fetch aggregated fields from the table: "xr_models" */
  xrModelsAggregate: XrModels_Aggregate;
  /** fetch data from the table: "xr_model_animations" */
  xr_model_animations: Array<Xr_Model_Animations>;
  /** fetch aggregated fields from the table: "xr_model_animations" */
  xr_model_animations_aggregate: Xr_Model_Animations_Aggregate;
  /** fetch data from the table: "xr_model_animations" using primary key columns */
  xr_model_animations_by_pk?: Maybe<Xr_Model_Animations>;
  /** fetch data from the table: "xr_model_attachments" */
  xr_model_attachments: Array<Xr_Model_Attachments>;
  /** fetch aggregated fields from the table: "xr_model_attachments" */
  xr_model_attachments_aggregate: Xr_Model_Attachments_Aggregate;
  /** fetch data from the table: "xr_model_attachments" using primary key columns */
  xr_model_attachments_by_pk?: Maybe<Xr_Model_Attachments>;
  /** fetch data from the table: "xr_model_files" */
  xr_model_files: Array<Xr_Model_Files>;
  /** fetch aggregated fields from the table: "xr_model_files" */
  xr_model_files_aggregate: Xr_Model_Files_Aggregate;
  /** fetch data from the table: "xr_model_files" using primary key columns */
  xr_model_files_by_pk?: Maybe<Xr_Model_Files>;
};


export type Subscription_RootCustomerArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootOrder_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By>>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
};


export type Subscription_RootOrder_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTesArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTest1TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest1TablesArgs = {
  distinct_on?: InputMaybe<Array<Test1Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test1Tables_Order_By>>;
  where?: InputMaybe<Test1Tables_Bool_Exp>;
};


export type Subscription_RootTest1TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test1Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test1Tables_Order_By>>;
  where?: InputMaybe<Test1Tables_Bool_Exp>;
};


export type Subscription_RootTest2TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest2TablesArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Subscription_RootTest2TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test2Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test2Tables_Order_By>>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};


export type Subscription_RootTest4TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest4TablesArgs = {
  distinct_on?: InputMaybe<Array<Test4Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test4Tables_Order_By>>;
  where?: InputMaybe<Test4Tables_Bool_Exp>;
};


export type Subscription_RootTest4TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test4Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test4Tables_Order_By>>;
  where?: InputMaybe<Test4Tables_Bool_Exp>;
};


export type Subscription_RootTest5TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest5TablesArgs = {
  distinct_on?: InputMaybe<Array<Test5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test5Tables_Order_By>>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};


export type Subscription_RootTest5TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test5Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test5Tables_Order_By>>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};


export type Subscription_RootTest6TableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTest6TablesArgs = {
  distinct_on?: InputMaybe<Array<Test6Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test6Tables_Order_By>>;
  where?: InputMaybe<Test6Tables_Bool_Exp>;
};


export type Subscription_RootTest6TablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test6Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test6Tables_Order_By>>;
  where?: InputMaybe<Test6Tables_Bool_Exp>;
};


export type Subscription_RootTestAggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Order_By>>;
  where?: InputMaybe<Test_Bool_Exp>;
};


export type Subscription_RootTestTableArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTestTablesArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};


export type Subscription_RootTestTablesAggregateArgs = {
  distinct_on?: InputMaybe<Array<TestTables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TestTables_Order_By>>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};


export type Subscription_RootTest_EnumTestArgs = {
  distinct_on?: InputMaybe<Array<Test_EnumTest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_EnumTest_Order_By>>;
  where?: InputMaybe<Test_EnumTest_Bool_Exp>;
};


export type Subscription_RootTest_EnumTest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_EnumTest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_EnumTest_Order_By>>;
  where?: InputMaybe<Test_EnumTest_Bool_Exp>;
};


export type Subscription_RootTest_EnumTest_By_PkArgs = {
  orderStatus: Scalars['String'];
};


export type Subscription_RootTest_Test3_TablesArgs = {
  distinct_on?: InputMaybe<Array<Test_Test3_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Test3_Tables_Order_By>>;
  where?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
};


export type Subscription_RootTest_Test3_Tables_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Test3_Tables_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Test_Test3_Tables_Order_By>>;
  where?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
};


export type Subscription_RootTest_Test3_Tables_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootXrModelArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootXrModelsArgs = {
  distinct_on?: InputMaybe<Array<XrModels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<XrModels_Order_By>>;
  where?: InputMaybe<XrModels_Bool_Exp>;
};


export type Subscription_RootXrModelsAggregateArgs = {
  distinct_on?: InputMaybe<Array<XrModels_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<XrModels_Order_By>>;
  where?: InputMaybe<XrModels_Bool_Exp>;
};


export type Subscription_RootXr_Model_AnimationsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


export type Subscription_RootXr_Model_Animations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


export type Subscription_RootXr_Model_Animations_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootXr_Model_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


export type Subscription_RootXr_Model_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


export type Subscription_RootXr_Model_Attachments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootXr_Model_FilesArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};


export type Subscription_RootXr_Model_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};


export type Subscription_RootXr_Model_Files_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "test.test" */
export type Test = {
  __typename?: 'test';
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  orderStatus?: Maybe<Test_EnumTest_Enum>;
  testName?: Maybe<Scalars['String']>;
};

/** columns and relationships of "test.test1_tables" */
export type Test1Tables = {
  __typename?: 'test1Tables';
  createdAt: Scalars['timestamptz'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  test?: Maybe<Scalars['String']>;
  test2?: Maybe<Scalars['Boolean']>;
  test2Name?: Maybe<Scalars['String']>;
  test3Name?: Maybe<Scalars['String']>;
  test4Name?: Maybe<Scalars['String']>;
  test5Name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "test.test1_tables" */
export type Test1Tables_Aggregate = {
  __typename?: 'test1Tables_aggregate';
  aggregate?: Maybe<Test1Tables_Aggregate_Fields>;
  nodes: Array<Test1Tables>;
};

/** aggregate fields of "test.test1_tables" */
export type Test1Tables_Aggregate_Fields = {
  __typename?: 'test1Tables_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test1Tables_Max_Fields>;
  min?: Maybe<Test1Tables_Min_Fields>;
};


/** aggregate fields of "test.test1_tables" */
export type Test1Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test1Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test.test1_tables". All fields are combined with a logical 'AND'. */
export type Test1Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test1Tables_Bool_Exp>>;
  _not?: InputMaybe<Test1Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test1Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test?: InputMaybe<String_Comparison_Exp>;
  test2?: InputMaybe<Boolean_Comparison_Exp>;
  test2Name?: InputMaybe<String_Comparison_Exp>;
  test3Name?: InputMaybe<String_Comparison_Exp>;
  test4Name?: InputMaybe<String_Comparison_Exp>;
  test5Name?: InputMaybe<String_Comparison_Exp>;
  testName?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test1_tables" */
export enum Test1Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test1TablesPkey = 'test1_tables_pkey'
}

/** input type for inserting data into table "test.test1_tables" */
export type Test1Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['Boolean']>;
  test2Name?: InputMaybe<Scalars['String']>;
  test3Name?: InputMaybe<Scalars['String']>;
  test4Name?: InputMaybe<Scalars['String']>;
  test5Name?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test1Tables_Max_Fields = {
  __typename?: 'test1Tables_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  test2Name?: Maybe<Scalars['String']>;
  test3Name?: Maybe<Scalars['String']>;
  test4Name?: Maybe<Scalars['String']>;
  test5Name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test1Tables_Min_Fields = {
  __typename?: 'test1Tables_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  test2Name?: Maybe<Scalars['String']>;
  test3Name?: Maybe<Scalars['String']>;
  test4Name?: Maybe<Scalars['String']>;
  test5Name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test1_tables" */
export type Test1Tables_Mutation_Response = {
  __typename?: 'test1Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test1Tables>;
};

/** on_conflict condition type for table "test.test1_tables" */
export type Test1Tables_On_Conflict = {
  constraint: Test1Tables_Constraint;
  update_columns?: Array<Test1Tables_Update_Column>;
  where?: InputMaybe<Test1Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test1_tables". */
export type Test1Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  test2?: InputMaybe<Order_By>;
  test2Name?: InputMaybe<Order_By>;
  test3Name?: InputMaybe<Order_By>;
  test4Name?: InputMaybe<Order_By>;
  test5Name?: InputMaybe<Order_By>;
  testName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test1Tables */
export type Test1Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test1_tables" */
export enum Test1Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test = 'test',
  /** column name */
  Test2 = 'test2',
  /** column name */
  Test2Name = 'test2Name',
  /** column name */
  Test3Name = 'test3Name',
  /** column name */
  Test4Name = 'test4Name',
  /** column name */
  Test5Name = 'test5Name',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test1_tables" */
export type Test1Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  test2?: InputMaybe<Scalars['Boolean']>;
  test2Name?: InputMaybe<Scalars['String']>;
  test3Name?: InputMaybe<Scalars['String']>;
  test4Name?: InputMaybe<Scalars['String']>;
  test5Name?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test1_tables" */
export enum Test1Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test = 'test',
  /** column name */
  Test2 = 'test2',
  /** column name */
  Test2Name = 'test2Name',
  /** column name */
  Test3Name = 'test3Name',
  /** column name */
  Test4Name = 'test4Name',
  /** column name */
  Test5Name = 'test5Name',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test2_tables" */
export type Test2Tables = {
  __typename?: 'test2Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  test2Name?: Maybe<Scalars['String']>;
  test3Name?: Maybe<Scalars['String']>;
  test4Name?: Maybe<Scalars['String']>;
  test5Name?: Maybe<Scalars['String']>;
  test6Name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "test.test2_tables" */
export type Test2Tables_Aggregate = {
  __typename?: 'test2Tables_aggregate';
  aggregate?: Maybe<Test2Tables_Aggregate_Fields>;
  nodes: Array<Test2Tables>;
};

/** aggregate fields of "test.test2_tables" */
export type Test2Tables_Aggregate_Fields = {
  __typename?: 'test2Tables_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test2Tables_Max_Fields>;
  min?: Maybe<Test2Tables_Min_Fields>;
};


/** aggregate fields of "test.test2_tables" */
export type Test2Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test2Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test.test2_tables". All fields are combined with a logical 'AND'. */
export type Test2Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test2Tables_Bool_Exp>>;
  _not?: InputMaybe<Test2Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test2Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test2Name?: InputMaybe<String_Comparison_Exp>;
  test3Name?: InputMaybe<String_Comparison_Exp>;
  test4Name?: InputMaybe<String_Comparison_Exp>;
  test5Name?: InputMaybe<String_Comparison_Exp>;
  test6Name?: InputMaybe<String_Comparison_Exp>;
  testName?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test2_tables" */
export enum Test2Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test2TablesPkey = 'test2_tables_pkey'
}

/** input type for inserting data into table "test.test2_tables" */
export type Test2Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test2Name?: InputMaybe<Scalars['String']>;
  test3Name?: InputMaybe<Scalars['String']>;
  test4Name?: InputMaybe<Scalars['String']>;
  test5Name?: InputMaybe<Scalars['String']>;
  test6Name?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test2Tables_Max_Fields = {
  __typename?: 'test2Tables_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  test2Name?: Maybe<Scalars['String']>;
  test3Name?: Maybe<Scalars['String']>;
  test4Name?: Maybe<Scalars['String']>;
  test5Name?: Maybe<Scalars['String']>;
  test6Name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test2Tables_Min_Fields = {
  __typename?: 'test2Tables_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  test2Name?: Maybe<Scalars['String']>;
  test3Name?: Maybe<Scalars['String']>;
  test4Name?: Maybe<Scalars['String']>;
  test5Name?: Maybe<Scalars['String']>;
  test6Name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test2_tables" */
export type Test2Tables_Mutation_Response = {
  __typename?: 'test2Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test2Tables>;
};

/** on_conflict condition type for table "test.test2_tables" */
export type Test2Tables_On_Conflict = {
  constraint: Test2Tables_Constraint;
  update_columns?: Array<Test2Tables_Update_Column>;
  where?: InputMaybe<Test2Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test2_tables". */
export type Test2Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test2Name?: InputMaybe<Order_By>;
  test3Name?: InputMaybe<Order_By>;
  test4Name?: InputMaybe<Order_By>;
  test5Name?: InputMaybe<Order_By>;
  test6Name?: InputMaybe<Order_By>;
  testName?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test2Tables */
export type Test2Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test2_tables" */
export enum Test2Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test2Name = 'test2Name',
  /** column name */
  Test3Name = 'test3Name',
  /** column name */
  Test4Name = 'test4Name',
  /** column name */
  Test5Name = 'test5Name',
  /** column name */
  Test6Name = 'test6Name',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test2_tables" */
export type Test2Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test2Name?: InputMaybe<Scalars['String']>;
  test3Name?: InputMaybe<Scalars['String']>;
  test4Name?: InputMaybe<Scalars['String']>;
  test5Name?: InputMaybe<Scalars['String']>;
  test6Name?: InputMaybe<Scalars['String']>;
  testName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test2_tables" */
export enum Test2Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test2Name = 'test2Name',
  /** column name */
  Test3Name = 'test3Name',
  /** column name */
  Test4Name = 'test4Name',
  /** column name */
  Test5Name = 'test5Name',
  /** column name */
  Test6Name = 'test6Name',
  /** column name */
  TestName = 'testName',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test4_tables" */
export type Test4Tables = {
  __typename?: 'test4Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "test.test4_tables" */
export type Test4Tables_Aggregate = {
  __typename?: 'test4Tables_aggregate';
  aggregate?: Maybe<Test4Tables_Aggregate_Fields>;
  nodes: Array<Test4Tables>;
};

/** aggregate fields of "test.test4_tables" */
export type Test4Tables_Aggregate_Fields = {
  __typename?: 'test4Tables_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test4Tables_Max_Fields>;
  min?: Maybe<Test4Tables_Min_Fields>;
};


/** aggregate fields of "test.test4_tables" */
export type Test4Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test4Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test.test4_tables". All fields are combined with a logical 'AND'. */
export type Test4Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test4Tables_Bool_Exp>>;
  _not?: InputMaybe<Test4Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test4Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test4_tables" */
export enum Test4Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test4TablesPkey = 'test4_tables_pkey'
}

/** input type for inserting data into table "test.test4_tables" */
export type Test4Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test4Tables_Max_Fields = {
  __typename?: 'test4Tables_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test4Tables_Min_Fields = {
  __typename?: 'test4Tables_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test4_tables" */
export type Test4Tables_Mutation_Response = {
  __typename?: 'test4Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test4Tables>;
};

/** on_conflict condition type for table "test.test4_tables" */
export type Test4Tables_On_Conflict = {
  constraint: Test4Tables_Constraint;
  update_columns?: Array<Test4Tables_Update_Column>;
  where?: InputMaybe<Test4Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test4_tables". */
export type Test4Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test4Tables */
export type Test4Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test4_tables" */
export enum Test4Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test4_tables" */
export type Test4Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test4_tables" */
export enum Test4Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test5_tables" */
export type Test5Tables = {
  __typename?: 'test5Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "test.test5_tables" */
export type Test5Tables_Aggregate = {
  __typename?: 'test5Tables_aggregate';
  aggregate?: Maybe<Test5Tables_Aggregate_Fields>;
  nodes: Array<Test5Tables>;
};

/** aggregate fields of "test.test5_tables" */
export type Test5Tables_Aggregate_Fields = {
  __typename?: 'test5Tables_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test5Tables_Max_Fields>;
  min?: Maybe<Test5Tables_Min_Fields>;
};


/** aggregate fields of "test.test5_tables" */
export type Test5Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test5Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test.test5_tables". All fields are combined with a logical 'AND'. */
export type Test5Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test5Tables_Bool_Exp>>;
  _not?: InputMaybe<Test5Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test5Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test5_tables" */
export enum Test5Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test5TablesPkey = 'test5_tables_pkey'
}

/** input type for inserting data into table "test.test5_tables" */
export type Test5Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test5Tables_Max_Fields = {
  __typename?: 'test5Tables_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test5Tables_Min_Fields = {
  __typename?: 'test5Tables_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test5_tables" */
export type Test5Tables_Mutation_Response = {
  __typename?: 'test5Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test5Tables>;
};

/** on_conflict condition type for table "test.test5_tables" */
export type Test5Tables_On_Conflict = {
  constraint: Test5Tables_Constraint;
  update_columns?: Array<Test5Tables_Update_Column>;
  where?: InputMaybe<Test5Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test5_tables". */
export type Test5Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test5Tables */
export type Test5Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test5_tables" */
export enum Test5Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test5_tables" */
export type Test5Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test5_tables" */
export enum Test5Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test6_tables" */
export type Test6Tables = {
  __typename?: 'test6Tables';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  orderItem?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "test.test6_tables" */
export type Test6Tables_Aggregate = {
  __typename?: 'test6Tables_aggregate';
  aggregate?: Maybe<Test6Tables_Aggregate_Fields>;
  nodes: Array<Test6Tables>;
};

/** aggregate fields of "test.test6_tables" */
export type Test6Tables_Aggregate_Fields = {
  __typename?: 'test6Tables_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test6Tables_Max_Fields>;
  min?: Maybe<Test6Tables_Min_Fields>;
};


/** aggregate fields of "test.test6_tables" */
export type Test6Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test6Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test.test6_tables". All fields are combined with a logical 'AND'. */
export type Test6Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test6Tables_Bool_Exp>>;
  _not?: InputMaybe<Test6Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test6Tables_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderItem?: InputMaybe<String_Comparison_Exp>;
  test?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test6_tables" */
export enum Test6Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test6TablesPkey = 'test6_tables_pkey'
}

/** input type for inserting data into table "test.test6_tables" */
export type Test6Tables_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderItem?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test6Tables_Max_Fields = {
  __typename?: 'test6Tables_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orderItem?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test6Tables_Min_Fields = {
  __typename?: 'test6Tables_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orderItem?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test6_tables" */
export type Test6Tables_Mutation_Response = {
  __typename?: 'test6Tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test6Tables>;
};

/** on_conflict condition type for table "test.test6_tables" */
export type Test6Tables_On_Conflict = {
  constraint: Test6Tables_Constraint;
  update_columns?: Array<Test6Tables_Update_Column>;
  where?: InputMaybe<Test6Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test6_tables". */
export type Test6Tables_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderItem?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test6Tables */
export type Test6Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test6_tables" */
export enum Test6Tables_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrderItem = 'orderItem',
  /** column name */
  Test = 'test',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "test.test6_tables" */
export type Test6Tables_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderItem?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test6_tables" */
export enum Test6Tables_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrderItem = 'orderItem',
  /** column name */
  Test = 'test',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "test.test_tables" */
export type TestTables = {
  __typename?: 'testTables';
  created_at: Scalars['timestamptz'];
  hocico?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_deleted: Scalars['Boolean'];
  name: Scalars['String'];
  test?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "test.test_tables" */
export type TestTables_Aggregate = {
  __typename?: 'testTables_aggregate';
  aggregate?: Maybe<TestTables_Aggregate_Fields>;
  nodes: Array<TestTables>;
};

/** aggregate fields of "test.test_tables" */
export type TestTables_Aggregate_Fields = {
  __typename?: 'testTables_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<TestTables_Max_Fields>;
  min?: Maybe<TestTables_Min_Fields>;
};


/** aggregate fields of "test.test_tables" */
export type TestTables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<TestTables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test.test_tables". All fields are combined with a logical 'AND'. */
export type TestTables_Bool_Exp = {
  _and?: InputMaybe<Array<TestTables_Bool_Exp>>;
  _not?: InputMaybe<TestTables_Bool_Exp>;
  _or?: InputMaybe<Array<TestTables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hocico?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  test?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test_tables" */
export enum TestTables_Constraint {
  /** unique or primary key constraint on columns "name", "id" */
  TestTablesNameIdKey = 'test_tables_name_id_key',
  /** unique or primary key constraint on columns "id" */
  TestTablesPkey = 'test_tables_pkey',
  /** unique or primary key constraint on columns "test", "hocico" */
  TestTablesTestHocicoKey = 'test_tables_test_hocico_key'
}

/** input type for inserting data into table "test.test_tables" */
export type TestTables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hocico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TestTables_Max_Fields = {
  __typename?: 'testTables_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hocico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TestTables_Min_Fields = {
  __typename?: 'testTables_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  hocico?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test_tables" */
export type TestTables_Mutation_Response = {
  __typename?: 'testTables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<TestTables>;
};

/** on_conflict condition type for table "test.test_tables" */
export type TestTables_On_Conflict = {
  constraint: TestTables_Constraint;
  update_columns?: Array<TestTables_Update_Column>;
  where?: InputMaybe<TestTables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test_tables". */
export type TestTables_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hocico?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  test?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: testTables */
export type TestTables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test_tables" */
export enum TestTables_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hocico = 'hocico',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test = 'test',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "test.test_tables" */
export type TestTables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hocico?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  test?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "test.test_tables" */
export enum TestTables_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hocico = 'hocico',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  Test = 'test',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregated selection of "test.test" */
export type Test_Aggregate = {
  __typename?: 'test_aggregate';
  aggregate?: Maybe<Test_Aggregate_Fields>;
  nodes: Array<Test>;
};

/** aggregate fields of "test.test" */
export type Test_Aggregate_Fields = {
  __typename?: 'test_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_Max_Fields>;
  min?: Maybe<Test_Min_Fields>;
};


/** aggregate fields of "test.test" */
export type Test_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test.test". All fields are combined with a logical 'AND'. */
export type Test_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Bool_Exp>>;
  _not?: InputMaybe<Test_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderStatus?: InputMaybe<Test_EnumTest_Enum_Comparison_Exp>;
  testName?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test" */
export enum Test_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestPkey = 'test_pkey'
}

/** columns and relationships of "test.enumTest" */
export type Test_EnumTest = {
  __typename?: 'test_enumTest';
  orderStatus: Scalars['String'];
};

/** aggregated selection of "test.enumTest" */
export type Test_EnumTest_Aggregate = {
  __typename?: 'test_enumTest_aggregate';
  aggregate?: Maybe<Test_EnumTest_Aggregate_Fields>;
  nodes: Array<Test_EnumTest>;
};

/** aggregate fields of "test.enumTest" */
export type Test_EnumTest_Aggregate_Fields = {
  __typename?: 'test_enumTest_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Test_EnumTest_Max_Fields>;
  min?: Maybe<Test_EnumTest_Min_Fields>;
};


/** aggregate fields of "test.enumTest" */
export type Test_EnumTest_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_EnumTest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "test.enumTest". All fields are combined with a logical 'AND'. */
export type Test_EnumTest_Bool_Exp = {
  _and?: InputMaybe<Array<Test_EnumTest_Bool_Exp>>;
  _not?: InputMaybe<Test_EnumTest_Bool_Exp>;
  _or?: InputMaybe<Array<Test_EnumTest_Bool_Exp>>;
  orderStatus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.enumTest" */
export enum Test_EnumTest_Constraint {
  /** unique or primary key constraint on columns "orderStatus" */
  EnumTestPkey = 'enumTest_pkey'
}

export enum Test_EnumTest_Enum {
  Delivered = 'Delivered',
  Proccessing = 'Proccessing',
  Shipped = 'Shipped'
}

/** Boolean expression to compare columns of type "test_enumTest_enum". All fields are combined with logical 'AND'. */
export type Test_EnumTest_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Test_EnumTest_Enum>;
  _in?: InputMaybe<Array<Test_EnumTest_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Test_EnumTest_Enum>;
  _nin?: InputMaybe<Array<Test_EnumTest_Enum>>;
};

/** input type for inserting data into table "test.enumTest" */
export type Test_EnumTest_Insert_Input = {
  orderStatus?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Test_EnumTest_Max_Fields = {
  __typename?: 'test_enumTest_max_fields';
  orderStatus?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Test_EnumTest_Min_Fields = {
  __typename?: 'test_enumTest_min_fields';
  orderStatus?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "test.enumTest" */
export type Test_EnumTest_Mutation_Response = {
  __typename?: 'test_enumTest_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_EnumTest>;
};

/** on_conflict condition type for table "test.enumTest" */
export type Test_EnumTest_On_Conflict = {
  constraint: Test_EnumTest_Constraint;
  update_columns?: Array<Test_EnumTest_Update_Column>;
  where?: InputMaybe<Test_EnumTest_Bool_Exp>;
};

/** Ordering options when selecting data from "test.enumTest". */
export type Test_EnumTest_Order_By = {
  orderStatus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_enumTest */
export type Test_EnumTest_Pk_Columns_Input = {
  orderStatus: Scalars['String'];
};

/** select columns of table "test.enumTest" */
export enum Test_EnumTest_Select_Column {
  /** column name */
  OrderStatus = 'orderStatus'
}

/** input type for updating data in table "test.enumTest" */
export type Test_EnumTest_Set_Input = {
  orderStatus?: InputMaybe<Scalars['String']>;
};

/** update columns of table "test.enumTest" */
export enum Test_EnumTest_Update_Column {
  /** column name */
  OrderStatus = 'orderStatus'
}

/** input type for inserting data into table "test.test" */
export type Test_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderStatus?: InputMaybe<Test_EnumTest_Enum>;
  testName?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Test_Max_Fields = {
  __typename?: 'test_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Test_Min_Fields = {
  __typename?: 'test_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  testName?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "test.test" */
export type Test_Mutation_Response = {
  __typename?: 'test_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test>;
};

/** on_conflict condition type for table "test.test" */
export type Test_On_Conflict = {
  constraint: Test_Constraint;
  update_columns?: Array<Test_Update_Column>;
  where?: InputMaybe<Test_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test". */
export type Test_Order_By = {
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderStatus?: InputMaybe<Order_By>;
  testName?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test */
export type Test_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test" */
export enum Test_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrderStatus = 'orderStatus',
  /** column name */
  TestName = 'testName'
}

/** input type for updating data in table "test.test" */
export type Test_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  orderStatus?: InputMaybe<Test_EnumTest_Enum>;
  testName?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "test.test3_tables" */
export type Test_Test3_Tables = {
  __typename?: 'test_test3_tables';
  created_at: Scalars['timestamp'];
  double_precision?: Maybe<Scalars['float8']>;
  id: Scalars['uuid'];
  is_deleted?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "test.test3_tables" */
export type Test_Test3_Tables_Aggregate = {
  __typename?: 'test_test3_tables_aggregate';
  aggregate?: Maybe<Test_Test3_Tables_Aggregate_Fields>;
  nodes: Array<Test_Test3_Tables>;
};

/** aggregate fields of "test.test3_tables" */
export type Test_Test3_Tables_Aggregate_Fields = {
  __typename?: 'test_test3_tables_aggregate_fields';
  avg?: Maybe<Test_Test3_Tables_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Test_Test3_Tables_Max_Fields>;
  min?: Maybe<Test_Test3_Tables_Min_Fields>;
  stddev?: Maybe<Test_Test3_Tables_Stddev_Fields>;
  stddev_pop?: Maybe<Test_Test3_Tables_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_Test3_Tables_Stddev_Samp_Fields>;
  sum?: Maybe<Test_Test3_Tables_Sum_Fields>;
  var_pop?: Maybe<Test_Test3_Tables_Var_Pop_Fields>;
  var_samp?: Maybe<Test_Test3_Tables_Var_Samp_Fields>;
  variance?: Maybe<Test_Test3_Tables_Variance_Fields>;
};


/** aggregate fields of "test.test3_tables" */
export type Test_Test3_Tables_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Test3_Tables_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Test_Test3_Tables_Avg_Fields = {
  __typename?: 'test_test3_tables_avg_fields';
  double_precision?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "test.test3_tables". All fields are combined with a logical 'AND'. */
export type Test_Test3_Tables_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Test3_Tables_Bool_Exp>>;
  _not?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Test3_Tables_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  double_precision?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.test3_tables" */
export enum Test_Test3_Tables_Constraint {
  /** unique or primary key constraint on columns "id" */
  Test3TablesPkey = 'test3_tables_pkey'
}

/** input type for incrementing numeric columns in table "test.test3_tables" */
export type Test_Test3_Tables_Inc_Input = {
  double_precision?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "test.test3_tables" */
export type Test_Test3_Tables_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  double_precision?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Test_Test3_Tables_Max_Fields = {
  __typename?: 'test_test3_tables_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  double_precision?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Test_Test3_Tables_Min_Fields = {
  __typename?: 'test_test3_tables_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  double_precision?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "test.test3_tables" */
export type Test_Test3_Tables_Mutation_Response = {
  __typename?: 'test_test3_tables_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Test3_Tables>;
};

/** on_conflict condition type for table "test.test3_tables" */
export type Test_Test3_Tables_On_Conflict = {
  constraint: Test_Test3_Tables_Constraint;
  update_columns?: Array<Test_Test3_Tables_Update_Column>;
  where?: InputMaybe<Test_Test3_Tables_Bool_Exp>;
};

/** Ordering options when selecting data from "test.test3_tables". */
export type Test_Test3_Tables_Order_By = {
  created_at?: InputMaybe<Order_By>;
  double_precision?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_test3_tables */
export type Test_Test3_Tables_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "test.test3_tables" */
export enum Test_Test3_Tables_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DoublePrecision = 'double_precision',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "test.test3_tables" */
export type Test_Test3_Tables_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  double_precision?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_deleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Test_Test3_Tables_Stddev_Fields = {
  __typename?: 'test_test3_tables_stddev_fields';
  double_precision?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Test_Test3_Tables_Stddev_Pop_Fields = {
  __typename?: 'test_test3_tables_stddev_pop_fields';
  double_precision?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Test_Test3_Tables_Stddev_Samp_Fields = {
  __typename?: 'test_test3_tables_stddev_samp_fields';
  double_precision?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Test_Test3_Tables_Sum_Fields = {
  __typename?: 'test_test3_tables_sum_fields';
  double_precision?: Maybe<Scalars['float8']>;
};

/** update columns of table "test.test3_tables" */
export enum Test_Test3_Tables_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DoublePrecision = 'double_precision',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'is_deleted',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Test_Test3_Tables_Var_Pop_Fields = {
  __typename?: 'test_test3_tables_var_pop_fields';
  double_precision?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Test_Test3_Tables_Var_Samp_Fields = {
  __typename?: 'test_test3_tables_var_samp_fields';
  double_precision?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Test_Test3_Tables_Variance_Fields = {
  __typename?: 'test_test3_tables_variance_fields';
  double_precision?: Maybe<Scalars['Float']>;
};

/** update columns of table "test.test" */
export enum Test_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  Name = 'name',
  /** column name */
  OrderStatus = 'orderStatus',
  /** column name */
  TestName = 'testName'
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "xr_models" */
export type XrModels = {
  __typename?: 'xrModels';
  /** An array relationship */
  animations: Array<Xr_Model_Animations>;
  /** An aggregate relationship */
  animations_aggregate: Xr_Model_Animations_Aggregate;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDeleted: Scalars['Boolean'];
  logoPath?: Maybe<Scalars['String']>;
  minimapGlbPath?: Maybe<Scalars['String']>;
  minimapImgPath?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  xrModelAttachments: Array<Xr_Model_Attachments>;
  /** An aggregate relationship */
  xrModelAttachments_aggregate: Xr_Model_Attachments_Aggregate;
  /** An array relationship */
  xrModelFiles: Array<Xr_Model_Files>;
  /** An aggregate relationship */
  xrModelFiles_aggregate: Xr_Model_Files_Aggregate;
};


/** columns and relationships of "xr_models" */
export type XrModelsAnimationsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


/** columns and relationships of "xr_models" */
export type XrModelsAnimations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Animations_Order_By>>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};


/** columns and relationships of "xr_models" */
export type XrModelsXrModelAttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


/** columns and relationships of "xr_models" */
export type XrModelsXrModelAttachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Attachments_Order_By>>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};


/** columns and relationships of "xr_models" */
export type XrModelsXrModelFilesArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};


/** columns and relationships of "xr_models" */
export type XrModelsXrModelFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xr_Model_Files_Order_By>>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};

/** aggregated selection of "xr_models" */
export type XrModels_Aggregate = {
  __typename?: 'xrModels_aggregate';
  aggregate?: Maybe<XrModels_Aggregate_Fields>;
  nodes: Array<XrModels>;
};

/** aggregate fields of "xr_models" */
export type XrModels_Aggregate_Fields = {
  __typename?: 'xrModels_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<XrModels_Max_Fields>;
  min?: Maybe<XrModels_Min_Fields>;
};


/** aggregate fields of "xr_models" */
export type XrModels_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<XrModels_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "xr_models". All fields are combined with a logical 'AND'. */
export type XrModels_Bool_Exp = {
  _and?: InputMaybe<Array<XrModels_Bool_Exp>>;
  _not?: InputMaybe<XrModels_Bool_Exp>;
  _or?: InputMaybe<Array<XrModels_Bool_Exp>>;
  animations?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDeleted?: InputMaybe<Boolean_Comparison_Exp>;
  logoPath?: InputMaybe<String_Comparison_Exp>;
  minimapGlbPath?: InputMaybe<String_Comparison_Exp>;
  minimapImgPath?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  thumbnailPath?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  xrModelAttachments?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
  xrModelFiles?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};

/** unique or primary key constraints on table "xr_models" */
export enum XrModels_Constraint {
  /** unique or primary key constraint on columns "id" */
  XrModelsPkey = 'xr_models_pkey'
}

/** input type for inserting data into table "xr_models" */
export type XrModels_Insert_Input = {
  animations?: InputMaybe<Xr_Model_Animations_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  logoPath?: InputMaybe<Scalars['String']>;
  minimapGlbPath?: InputMaybe<Scalars['String']>;
  minimapImgPath?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  thumbnailPath?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  xrModelAttachments?: InputMaybe<Xr_Model_Attachments_Arr_Rel_Insert_Input>;
  xrModelFiles?: InputMaybe<Xr_Model_Files_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type XrModels_Max_Fields = {
  __typename?: 'xrModels_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  logoPath?: Maybe<Scalars['String']>;
  minimapGlbPath?: Maybe<Scalars['String']>;
  minimapImgPath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type XrModels_Min_Fields = {
  __typename?: 'xrModels_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  logoPath?: Maybe<Scalars['String']>;
  minimapGlbPath?: Maybe<Scalars['String']>;
  minimapImgPath?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  thumbnailPath?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "xr_models" */
export type XrModels_Mutation_Response = {
  __typename?: 'xrModels_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<XrModels>;
};

/** input type for inserting object relation for remote table "xr_models" */
export type XrModels_Obj_Rel_Insert_Input = {
  data: XrModels_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<XrModels_On_Conflict>;
};

/** on_conflict condition type for table "xr_models" */
export type XrModels_On_Conflict = {
  constraint: XrModels_Constraint;
  update_columns?: Array<XrModels_Update_Column>;
  where?: InputMaybe<XrModels_Bool_Exp>;
};

/** Ordering options when selecting data from "xr_models". */
export type XrModels_Order_By = {
  animations_aggregate?: InputMaybe<Xr_Model_Animations_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDeleted?: InputMaybe<Order_By>;
  logoPath?: InputMaybe<Order_By>;
  minimapGlbPath?: InputMaybe<Order_By>;
  minimapImgPath?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  thumbnailPath?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  xrModelAttachments_aggregate?: InputMaybe<Xr_Model_Attachments_Aggregate_Order_By>;
  xrModelFiles_aggregate?: InputMaybe<Xr_Model_Files_Aggregate_Order_By>;
};

/** primary key columns input for table: xrModels */
export type XrModels_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "xr_models" */
export enum XrModels_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LogoPath = 'logoPath',
  /** column name */
  MinimapGlbPath = 'minimapGlbPath',
  /** column name */
  MinimapImgPath = 'minimapImgPath',
  /** column name */
  Name = 'name',
  /** column name */
  ThumbnailPath = 'thumbnailPath',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "xr_models" */
export type XrModels_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  logoPath?: InputMaybe<Scalars['String']>;
  minimapGlbPath?: InputMaybe<Scalars['String']>;
  minimapImgPath?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  thumbnailPath?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "xr_models" */
export enum XrModels_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeleted = 'isDeleted',
  /** column name */
  LogoPath = 'logoPath',
  /** column name */
  MinimapGlbPath = 'minimapGlbPath',
  /** column name */
  MinimapImgPath = 'minimapImgPath',
  /** column name */
  Name = 'name',
  /** column name */
  ThumbnailPath = 'thumbnailPath',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** columns and relationships of "xr_model_animations" */
export type Xr_Model_Animations = {
  __typename?: 'xr_model_animations';
  glbPath?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  xr_model?: Maybe<XrModels>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "xr_model_animations" */
export type Xr_Model_Animations_Aggregate = {
  __typename?: 'xr_model_animations_aggregate';
  aggregate?: Maybe<Xr_Model_Animations_Aggregate_Fields>;
  nodes: Array<Xr_Model_Animations>;
};

/** aggregate fields of "xr_model_animations" */
export type Xr_Model_Animations_Aggregate_Fields = {
  __typename?: 'xr_model_animations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Xr_Model_Animations_Max_Fields>;
  min?: Maybe<Xr_Model_Animations_Min_Fields>;
};


/** aggregate fields of "xr_model_animations" */
export type Xr_Model_Animations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Xr_Model_Animations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "xr_model_animations" */
export type Xr_Model_Animations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Xr_Model_Animations_Max_Order_By>;
  min?: InputMaybe<Xr_Model_Animations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "xr_model_animations" */
export type Xr_Model_Animations_Arr_Rel_Insert_Input = {
  data: Array<Xr_Model_Animations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Xr_Model_Animations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "xr_model_animations". All fields are combined with a logical 'AND'. */
export type Xr_Model_Animations_Bool_Exp = {
  _and?: InputMaybe<Array<Xr_Model_Animations_Bool_Exp>>;
  _not?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
  _or?: InputMaybe<Array<Xr_Model_Animations_Bool_Exp>>;
  glbPath?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  xr_model?: InputMaybe<XrModels_Bool_Exp>;
  xr_model_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "xr_model_animations" */
export enum Xr_Model_Animations_Constraint {
  /** unique or primary key constraint on columns "id" */
  XrModelAnimationsPkey = 'xr_model_animations_pkey'
}

/** input type for inserting data into table "xr_model_animations" */
export type Xr_Model_Animations_Insert_Input = {
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  xr_model?: InputMaybe<XrModels_Obj_Rel_Insert_Input>;
  xr_model_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Xr_Model_Animations_Max_Fields = {
  __typename?: 'xr_model_animations_max_fields';
  glbPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "xr_model_animations" */
export type Xr_Model_Animations_Max_Order_By = {
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Xr_Model_Animations_Min_Fields = {
  __typename?: 'xr_model_animations_min_fields';
  glbPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "xr_model_animations" */
export type Xr_Model_Animations_Min_Order_By = {
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "xr_model_animations" */
export type Xr_Model_Animations_Mutation_Response = {
  __typename?: 'xr_model_animations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Xr_Model_Animations>;
};

/** on_conflict condition type for table "xr_model_animations" */
export type Xr_Model_Animations_On_Conflict = {
  constraint: Xr_Model_Animations_Constraint;
  update_columns?: Array<Xr_Model_Animations_Update_Column>;
  where?: InputMaybe<Xr_Model_Animations_Bool_Exp>;
};

/** Ordering options when selecting data from "xr_model_animations". */
export type Xr_Model_Animations_Order_By = {
  glbPath?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model?: InputMaybe<XrModels_Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: xr_model_animations */
export type Xr_Model_Animations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "xr_model_animations" */
export enum Xr_Model_Animations_Select_Column {
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  XrModelId = 'xr_model_id'
}

/** input type for updating data in table "xr_model_animations" */
export type Xr_Model_Animations_Set_Input = {
  glbPath?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  xr_model_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "xr_model_animations" */
export enum Xr_Model_Animations_Update_Column {
  /** column name */
  GlbPath = 'glbPath',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  XrModelId = 'xr_model_id'
}

/** columns and relationships of "xr_model_attachments" */
export type Xr_Model_Attachments = {
  __typename?: 'xr_model_attachments';
  element_path?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  xr_model?: Maybe<XrModels>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "xr_model_attachments" */
export type Xr_Model_Attachments_Aggregate = {
  __typename?: 'xr_model_attachments_aggregate';
  aggregate?: Maybe<Xr_Model_Attachments_Aggregate_Fields>;
  nodes: Array<Xr_Model_Attachments>;
};

/** aggregate fields of "xr_model_attachments" */
export type Xr_Model_Attachments_Aggregate_Fields = {
  __typename?: 'xr_model_attachments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Xr_Model_Attachments_Max_Fields>;
  min?: Maybe<Xr_Model_Attachments_Min_Fields>;
};


/** aggregate fields of "xr_model_attachments" */
export type Xr_Model_Attachments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Xr_Model_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "xr_model_attachments" */
export type Xr_Model_Attachments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Xr_Model_Attachments_Max_Order_By>;
  min?: InputMaybe<Xr_Model_Attachments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "xr_model_attachments" */
export type Xr_Model_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Xr_Model_Attachments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Xr_Model_Attachments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "xr_model_attachments". All fields are combined with a logical 'AND'. */
export type Xr_Model_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Xr_Model_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Xr_Model_Attachments_Bool_Exp>>;
  element_path?: InputMaybe<String_Comparison_Exp>;
  file_path?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  xr_model?: InputMaybe<XrModels_Bool_Exp>;
  xr_model_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "xr_model_attachments" */
export enum Xr_Model_Attachments_Constraint {
  /** unique or primary key constraint on columns "id" */
  XrModelAttachmentsPkey = 'xr_model_attachments_pkey'
}

/** input type for inserting data into table "xr_model_attachments" */
export type Xr_Model_Attachments_Insert_Input = {
  element_path?: InputMaybe<Scalars['String']>;
  file_path?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  xr_model?: InputMaybe<XrModels_Obj_Rel_Insert_Input>;
  xr_model_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Xr_Model_Attachments_Max_Fields = {
  __typename?: 'xr_model_attachments_max_fields';
  element_path?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "xr_model_attachments" */
export type Xr_Model_Attachments_Max_Order_By = {
  element_path?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Xr_Model_Attachments_Min_Fields = {
  __typename?: 'xr_model_attachments_min_fields';
  element_path?: Maybe<Scalars['String']>;
  file_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "xr_model_attachments" */
export type Xr_Model_Attachments_Min_Order_By = {
  element_path?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "xr_model_attachments" */
export type Xr_Model_Attachments_Mutation_Response = {
  __typename?: 'xr_model_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Xr_Model_Attachments>;
};

/** on_conflict condition type for table "xr_model_attachments" */
export type Xr_Model_Attachments_On_Conflict = {
  constraint: Xr_Model_Attachments_Constraint;
  update_columns?: Array<Xr_Model_Attachments_Update_Column>;
  where?: InputMaybe<Xr_Model_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "xr_model_attachments". */
export type Xr_Model_Attachments_Order_By = {
  element_path?: InputMaybe<Order_By>;
  file_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  xr_model?: InputMaybe<XrModels_Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: xr_model_attachments */
export type Xr_Model_Attachments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "xr_model_attachments" */
export enum Xr_Model_Attachments_Select_Column {
  /** column name */
  ElementPath = 'element_path',
  /** column name */
  FilePath = 'file_path',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  XrModelId = 'xr_model_id'
}

/** input type for updating data in table "xr_model_attachments" */
export type Xr_Model_Attachments_Set_Input = {
  element_path?: InputMaybe<Scalars['String']>;
  file_path?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  xr_model_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "xr_model_attachments" */
export enum Xr_Model_Attachments_Update_Column {
  /** column name */
  ElementPath = 'element_path',
  /** column name */
  FilePath = 'file_path',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  XrModelId = 'xr_model_id'
}

/** columns and relationships of "xr_model_files" */
export type Xr_Model_Files = {
  __typename?: 'xr_model_files';
  glb_path?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  usdz_path?: Maybe<Scalars['String']>;
  /** An object relationship */
  xr_model?: Maybe<XrModels>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "xr_model_files" */
export type Xr_Model_Files_Aggregate = {
  __typename?: 'xr_model_files_aggregate';
  aggregate?: Maybe<Xr_Model_Files_Aggregate_Fields>;
  nodes: Array<Xr_Model_Files>;
};

/** aggregate fields of "xr_model_files" */
export type Xr_Model_Files_Aggregate_Fields = {
  __typename?: 'xr_model_files_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Xr_Model_Files_Max_Fields>;
  min?: Maybe<Xr_Model_Files_Min_Fields>;
};


/** aggregate fields of "xr_model_files" */
export type Xr_Model_Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Xr_Model_Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "xr_model_files" */
export type Xr_Model_Files_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Xr_Model_Files_Max_Order_By>;
  min?: InputMaybe<Xr_Model_Files_Min_Order_By>;
};

/** input type for inserting array relation for remote table "xr_model_files" */
export type Xr_Model_Files_Arr_Rel_Insert_Input = {
  data: Array<Xr_Model_Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Xr_Model_Files_On_Conflict>;
};

/** Boolean expression to filter rows from the table "xr_model_files". All fields are combined with a logical 'AND'. */
export type Xr_Model_Files_Bool_Exp = {
  _and?: InputMaybe<Array<Xr_Model_Files_Bool_Exp>>;
  _not?: InputMaybe<Xr_Model_Files_Bool_Exp>;
  _or?: InputMaybe<Array<Xr_Model_Files_Bool_Exp>>;
  glb_path?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  usdz_path?: InputMaybe<String_Comparison_Exp>;
  xr_model?: InputMaybe<XrModels_Bool_Exp>;
  xr_model_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "xr_model_files" */
export enum Xr_Model_Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  XrModelFilesPkey = 'xr_model_files_pkey'
}

/** input type for inserting data into table "xr_model_files" */
export type Xr_Model_Files_Insert_Input = {
  glb_path?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  usdz_path?: InputMaybe<Scalars['String']>;
  xr_model?: InputMaybe<XrModels_Obj_Rel_Insert_Input>;
  xr_model_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Xr_Model_Files_Max_Fields = {
  __typename?: 'xr_model_files_max_fields';
  glb_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  usdz_path?: Maybe<Scalars['String']>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "xr_model_files" */
export type Xr_Model_Files_Max_Order_By = {
  glb_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  usdz_path?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Xr_Model_Files_Min_Fields = {
  __typename?: 'xr_model_files_min_fields';
  glb_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  usdz_path?: Maybe<Scalars['String']>;
  xr_model_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "xr_model_files" */
export type Xr_Model_Files_Min_Order_By = {
  glb_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  usdz_path?: InputMaybe<Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "xr_model_files" */
export type Xr_Model_Files_Mutation_Response = {
  __typename?: 'xr_model_files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Xr_Model_Files>;
};

/** on_conflict condition type for table "xr_model_files" */
export type Xr_Model_Files_On_Conflict = {
  constraint: Xr_Model_Files_Constraint;
  update_columns?: Array<Xr_Model_Files_Update_Column>;
  where?: InputMaybe<Xr_Model_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "xr_model_files". */
export type Xr_Model_Files_Order_By = {
  glb_path?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  usdz_path?: InputMaybe<Order_By>;
  xr_model?: InputMaybe<XrModels_Order_By>;
  xr_model_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: xr_model_files */
export type Xr_Model_Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "xr_model_files" */
export enum Xr_Model_Files_Select_Column {
  /** column name */
  GlbPath = 'glb_path',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UsdzPath = 'usdz_path',
  /** column name */
  XrModelId = 'xr_model_id'
}

/** input type for updating data in table "xr_model_files" */
export type Xr_Model_Files_Set_Input = {
  glb_path?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  usdz_path?: InputMaybe<Scalars['String']>;
  xr_model_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "xr_model_files" */
export enum Xr_Model_Files_Update_Column {
  /** column name */
  GlbPath = 'glb_path',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UsdzPath = 'usdz_path',
  /** column name */
  XrModelId = 'xr_model_id'
}

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename: 'query_root' };

export type Order_ProductsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Order_Products_Select_Column> | Order_Products_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Products_Order_By> | Order_Products_Order_By>;
  where?: InputMaybe<Order_Products_Bool_Exp>;
}>;


export type Order_ProductsQuery = { __typename?: 'query_root', order_products: Array<{ __typename?: 'order_products', id: any, name: string }> };

export type Order_Products_By_PkQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Order_Products_By_PkQuery = { __typename?: 'query_root', order_products_by_pk?: { __typename?: 'order_products', id: any, name: string } | null };

export type Delete_Order_ProductsMutationVariables = Exact<{
  where: Order_Products_Bool_Exp;
}>;


export type Delete_Order_ProductsMutation = { __typename?: 'mutation_root', delete_order_products?: { __typename?: 'order_products_mutation_response', returning: Array<{ __typename?: 'order_products', created_at: any, id: any, is_valid: boolean, name: string, order_id: number, price: any, updated_at: any }> } | null };

export type Delete_Order_Products_By_PkMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type Delete_Order_Products_By_PkMutation = { __typename?: 'mutation_root', delete_order_products_by_pk?: { __typename?: 'order_products', id: any, name: string } | null };

export type Insert_Order_ProductsMutationVariables = Exact<{
  order_products: Array<Order_Products_Insert_Input> | Order_Products_Insert_Input;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
}>;


export type Insert_Order_ProductsMutation = { __typename?: 'mutation_root', insert_order_products?: { __typename?: 'order_products_mutation_response', returning: Array<{ __typename?: 'order_products', created_at: any, id: any, is_valid: boolean, name: string, order_id: number, price: any, updated_at: any }> } | null };

export type Insert_Order_Products_OneMutationVariables = Exact<{
  order_products: Order_Products_Insert_Input;
  on_conflict?: InputMaybe<Order_Products_On_Conflict>;
}>;


export type Insert_Order_Products_OneMutation = { __typename?: 'mutation_root', insert_order_products_one?: { __typename?: 'order_products', id: any, name: string } | null };

export type Update_Order_ProductsMutationVariables = Exact<{
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  order_products?: InputMaybe<Order_Products_Set_Input>;
  where: Order_Products_Bool_Exp;
}>;


export type Update_Order_ProductsMutation = { __typename?: 'mutation_root', update_order_products?: { __typename?: 'order_products_mutation_response', returning: Array<{ __typename?: 'order_products', created_at: any, id: any, is_valid: boolean, name: string, order_id: number, price: any, updated_at: any }> } | null };

export type Update_Order_Products_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Order_Products_Inc_Input>;
  order_products?: InputMaybe<Order_Products_Set_Input>;
  pk_columns: Order_Products_Pk_Columns_Input;
}>;


export type Update_Order_Products_By_PkMutation = { __typename?: 'mutation_root', update_order_products_by_pk?: { __typename?: 'order_products', id: any, name: string } | null };

export type Order_Products_Order_ProductsFragment = { __typename?: 'order_products', id: any, name: string };

export type Order_Products_By_Pk_Order_ProductsFragment = { __typename?: 'order_products', id: any, name: string };

export type Delete_Order_Products_Order_Products_Mutation_ResponseFragment = { __typename?: 'order_products_mutation_response', returning: Array<{ __typename?: 'order_products', created_at: any, id: any, is_valid: boolean, name: string, order_id: number, price: any, updated_at: any }> };

export type Delete_Order_Products_By_Pk_Order_ProductsFragment = { __typename?: 'order_products', id: any, name: string };

export type Insert_Order_Products_Order_Products_Mutation_ResponseFragment = { __typename?: 'order_products_mutation_response', returning: Array<{ __typename?: 'order_products', created_at: any, id: any, is_valid: boolean, name: string, order_id: number, price: any, updated_at: any }> };

export type Insert_Order_Products_One_Order_ProductsFragment = { __typename?: 'order_products', id: any, name: string };

export type Update_Order_Products_Order_Products_Mutation_ResponseFragment = { __typename?: 'order_products_mutation_response', returning: Array<{ __typename?: 'order_products', created_at: any, id: any, is_valid: boolean, name: string, order_id: number, price: any, updated_at: any }> };

export type Update_Order_Products_By_Pk_Order_ProductsFragment = { __typename?: 'order_products', id: any, name: string };

export type OrdersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Orders_Select_Column> | Orders_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By> | Orders_Order_By>;
  where?: InputMaybe<Orders_Bool_Exp>;
}>;


export type OrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', id: number, note?: string | null, order_date: any }> };

export type Orders_By_PkQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Orders_By_PkQuery = { __typename?: 'query_root', orders_by_pk?: { __typename?: 'orders', id: number, note?: string | null, order_date: any } | null };

export type Delete_OrdersMutationVariables = Exact<{
  where: Orders_Bool_Exp;
}>;


export type Delete_OrdersMutation = { __typename?: 'mutation_root', delete_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> } | null };

export type Delete_Orders_By_PkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Delete_Orders_By_PkMutation = { __typename?: 'mutation_root', delete_orders_by_pk?: { __typename?: 'orders', id: number, note?: string | null, order_date: any } | null };

export type Insert_OrdersMutationVariables = Exact<{
  orders: Array<Orders_Insert_Input> | Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type Insert_OrdersMutation = { __typename?: 'mutation_root', insert_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> } | null };

export type Insert_Orders_OneMutationVariables = Exact<{
  orders: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
}>;


export type Insert_Orders_OneMutation = { __typename?: 'mutation_root', insert_orders_one?: { __typename?: 'orders', id: number, note?: string | null, order_date: any } | null };

export type Update_OrdersMutationVariables = Exact<{
  _inc?: InputMaybe<Orders_Inc_Input>;
  orders?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
}>;


export type Update_OrdersMutation = { __typename?: 'mutation_root', update_orders?: { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> } | null };

export type Update_Orders_By_PkMutationVariables = Exact<{
  _inc?: InputMaybe<Orders_Inc_Input>;
  orders?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
}>;


export type Update_Orders_By_PkMutation = { __typename?: 'mutation_root', update_orders_by_pk?: { __typename?: 'orders', id: number, note?: string | null, order_date: any } | null };

export type Orders_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type Delete_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> };

export type Delete_Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type Insert_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> };

export type Insert_Orders_One_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type Update_Orders_Orders_Mutation_ResponseFragment = { __typename?: 'orders_mutation_response', returning: Array<{ __typename?: 'orders', created_at: any, customer_id: any, id: number, is_valid: boolean, note?: string | null, order_date: any, updated_at: any }> };

export type Update_Orders_By_Pk_OrdersFragment = { __typename?: 'orders', id: number, note?: string | null, order_date: any };

export type CustomerQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type CustomerQuery = { __typename?: 'query_root', customer?: { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any } | null };

export type CustomersQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Customers_Select_Column> | Customers_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By> | Customers_Order_By>;
  where?: InputMaybe<Customers_Bool_Exp>;
}>;


export type CustomersQuery = { __typename?: 'query_root', customers: Array<{ __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any }> };

export type DeleteCustomerMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCustomerMutation = { __typename?: 'mutation_root', deleteCustomer?: { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any } | null };

export type DeleteCustomersMutationVariables = Exact<{
  where: Customers_Bool_Exp;
}>;


export type DeleteCustomersMutation = { __typename?: 'mutation_root', deleteCustomers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', createdAt: any, dateOfBirth?: any | null, firstName?: string | null, glbPath?: string | null, id: any, isValid: boolean, lastName: string, updatedAt: any, vip: boolean }> } | null };

export type InsertCustomerMutationVariables = Exact<{
  customers: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type InsertCustomerMutation = { __typename?: 'mutation_root', insertCustomer?: { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any } | null };

export type InsertCustomersMutationVariables = Exact<{
  customers: Array<Customers_Insert_Input> | Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
}>;


export type InsertCustomersMutation = { __typename?: 'mutation_root', insertCustomers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', createdAt: any, dateOfBirth?: any | null, firstName?: string | null, glbPath?: string | null, id: any, isValid: boolean, lastName: string, updatedAt: any, vip: boolean }> } | null };

export type UpdateCustomerMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
}>;


export type UpdateCustomerMutation = { __typename?: 'mutation_root', updateCustomer?: { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any } | null };

export type UpdateCustomersMutationVariables = Exact<{
  customers?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
}>;


export type UpdateCustomersMutation = { __typename?: 'mutation_root', updateCustomers?: { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', createdAt: any, dateOfBirth?: any | null, firstName?: string | null, glbPath?: string | null, id: any, isValid: boolean, lastName: string, updatedAt: any, vip: boolean }> } | null };

export type Customer_CustomersFragment = { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any };

export type Customers_CustomersFragment = { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any };

export type DeleteCustomer_CustomersFragment = { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any };

export type DeleteCustomers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', createdAt: any, dateOfBirth?: any | null, firstName?: string | null, glbPath?: string | null, id: any, isValid: boolean, lastName: string, updatedAt: any, vip: boolean }> };

export type InsertCustomer_CustomersFragment = { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any };

export type InsertCustomers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', createdAt: any, dateOfBirth?: any | null, firstName?: string | null, glbPath?: string | null, id: any, isValid: boolean, lastName: string, updatedAt: any, vip: boolean }> };

export type UpdateCustomer_CustomersFragment = { __typename?: 'customers', id: any, firstName?: string | null, glbPath?: string | null, lastName: string, createdAt: any, dateOfBirth?: any | null, updatedAt: any };

export type UpdateCustomers_Customers_Mutation_ResponseFragment = { __typename?: 'customers_mutation_response', returning: Array<{ __typename?: 'customers', createdAt: any, dateOfBirth?: any | null, firstName?: string | null, glbPath?: string | null, id: any, isValid: boolean, lastName: string, updatedAt: any, vip: boolean }> };

export const Order_Products_Order_ProductsFragmentDoc = gql`
    fragment order_products_order_products on order_products {
  id
  name
}
    `;
export const Order_Products_By_Pk_Order_ProductsFragmentDoc = gql`
    fragment order_products_by_pk_order_products on order_products {
  id
  name
}
    `;
export const Delete_Order_Products_Order_Products_Mutation_ResponseFragmentDoc = gql`
    fragment delete_order_products_order_products_mutation_response on order_products_mutation_response {
  returning {
    created_at
    id
    is_valid
    name
    order_id
    price
    updated_at
  }
}
    `;
export const Delete_Order_Products_By_Pk_Order_ProductsFragmentDoc = gql`
    fragment delete_order_products_by_pk_order_products on order_products {
  id
  name
}
    `;
export const Insert_Order_Products_Order_Products_Mutation_ResponseFragmentDoc = gql`
    fragment insert_order_products_order_products_mutation_response on order_products_mutation_response {
  returning {
    created_at
    id
    is_valid
    name
    order_id
    price
    updated_at
  }
}
    `;
export const Insert_Order_Products_One_Order_ProductsFragmentDoc = gql`
    fragment insert_order_products_one_order_products on order_products {
  id
  name
}
    `;
export const Update_Order_Products_Order_Products_Mutation_ResponseFragmentDoc = gql`
    fragment update_order_products_order_products_mutation_response on order_products_mutation_response {
  returning {
    created_at
    id
    is_valid
    name
    order_id
    price
    updated_at
  }
}
    `;
export const Update_Order_Products_By_Pk_Order_ProductsFragmentDoc = gql`
    fragment update_order_products_by_pk_order_products on order_products {
  id
  name
}
    `;
export const Orders_OrdersFragmentDoc = gql`
    fragment orders_orders on orders {
  id
  note
  order_date
}
    `;
export const Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment orders_by_pk_orders on orders {
  id
  note
  order_date
}
    `;
export const Delete_Orders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment delete_orders_orders_mutation_response on orders_mutation_response {
  returning {
    created_at
    customer_id
    id
    is_valid
    note
    order_date
    updated_at
  }
}
    `;
export const Delete_Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment delete_orders_by_pk_orders on orders {
  id
  note
  order_date
}
    `;
export const Insert_Orders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment insert_orders_orders_mutation_response on orders_mutation_response {
  returning {
    created_at
    customer_id
    id
    is_valid
    note
    order_date
    updated_at
  }
}
    `;
export const Insert_Orders_One_OrdersFragmentDoc = gql`
    fragment insert_orders_one_orders on orders {
  id
  note
  order_date
}
    `;
export const Update_Orders_Orders_Mutation_ResponseFragmentDoc = gql`
    fragment update_orders_orders_mutation_response on orders_mutation_response {
  returning {
    created_at
    customer_id
    id
    is_valid
    note
    order_date
    updated_at
  }
}
    `;
export const Update_Orders_By_Pk_OrdersFragmentDoc = gql`
    fragment update_orders_by_pk_orders on orders {
  id
  note
  order_date
}
    `;
export const Customer_CustomersFragmentDoc = gql`
    fragment customer_customers on customers {
  id
  firstName
  glbPath
  lastName
  createdAt
  dateOfBirth
  updatedAt
}
    `;
export const Customers_CustomersFragmentDoc = gql`
    fragment customers_customers on customers {
  id
  firstName
  glbPath
  lastName
  createdAt
  dateOfBirth
  updatedAt
}
    `;
export const DeleteCustomer_CustomersFragmentDoc = gql`
    fragment deleteCustomer_customers on customers {
  id
  firstName
  glbPath
  lastName
  createdAt
  dateOfBirth
  updatedAt
}
    `;
export const DeleteCustomers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment deleteCustomers_customers_mutation_response on customers_mutation_response {
  returning {
    createdAt
    dateOfBirth
    firstName
    glbPath
    id
    isValid
    lastName
    updatedAt
    vip
  }
}
    `;
export const InsertCustomer_CustomersFragmentDoc = gql`
    fragment insertCustomer_customers on customers {
  id
  firstName
  glbPath
  lastName
  createdAt
  dateOfBirth
  updatedAt
}
    `;
export const InsertCustomers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment insertCustomers_customers_mutation_response on customers_mutation_response {
  returning {
    createdAt
    dateOfBirth
    firstName
    glbPath
    id
    isValid
    lastName
    updatedAt
    vip
  }
}
    `;
export const UpdateCustomer_CustomersFragmentDoc = gql`
    fragment updateCustomer_customers on customers {
  id
  firstName
  glbPath
  lastName
  createdAt
  dateOfBirth
  updatedAt
}
    `;
export const UpdateCustomers_Customers_Mutation_ResponseFragmentDoc = gql`
    fragment updateCustomers_customers_mutation_response on customers_mutation_response {
  returning {
    createdAt
    dateOfBirth
    firstName
    glbPath
    id
    isValid
    lastName
    updatedAt
    vip
  }
}
    `;
export const DummyDocument = gql`
    query dummy {
  __typename
}
    `;

export function useDummyQuery(options?: Omit<Urql.UseQueryArgs<DummyQueryVariables>, 'query'>) {
  return Urql.useQuery<DummyQuery>({ query: DummyDocument, ...options });
};
export const Order_ProductsDocument = gql`
    query order_products($distinct_on: [order_products_select_column!], $limit: Int, $offset: Int, $order_by: [order_products_order_by!] = {updated_at: desc}, $where: order_products_bool_exp) {
  order_products(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...order_products_order_products
  }
}
    ${Order_Products_Order_ProductsFragmentDoc}`;

export function useOrder_ProductsQuery(options?: Omit<Urql.UseQueryArgs<Order_ProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<Order_ProductsQuery>({ query: Order_ProductsDocument, ...options });
};
export const Order_Products_By_PkDocument = gql`
    query order_products_by_pk($id: uuid!) {
  order_products_by_pk(id: $id) {
    ...order_products_by_pk_order_products
  }
}
    ${Order_Products_By_Pk_Order_ProductsFragmentDoc}`;

export function useOrder_Products_By_PkQuery(options: Omit<Urql.UseQueryArgs<Order_Products_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Order_Products_By_PkQuery>({ query: Order_Products_By_PkDocument, ...options });
};
export const Delete_Order_ProductsDocument = gql`
    mutation delete_order_products($where: order_products_bool_exp!) {
  delete_order_products(where: $where) {
    ...delete_order_products_order_products_mutation_response
  }
}
    ${Delete_Order_Products_Order_Products_Mutation_ResponseFragmentDoc}`;

export function useDelete_Order_ProductsMutation() {
  return Urql.useMutation<Delete_Order_ProductsMutation, Delete_Order_ProductsMutationVariables>(Delete_Order_ProductsDocument);
};
export const Delete_Order_Products_By_PkDocument = gql`
    mutation delete_order_products_by_pk($id: uuid!) {
  delete_order_products_by_pk(id: $id) {
    ...delete_order_products_by_pk_order_products
  }
}
    ${Delete_Order_Products_By_Pk_Order_ProductsFragmentDoc}`;

export function useDelete_Order_Products_By_PkMutation() {
  return Urql.useMutation<Delete_Order_Products_By_PkMutation, Delete_Order_Products_By_PkMutationVariables>(Delete_Order_Products_By_PkDocument);
};
export const Insert_Order_ProductsDocument = gql`
    mutation insert_order_products($order_products: [order_products_insert_input!]!, $on_conflict: order_products_on_conflict) {
  insert_order_products(objects: $order_products, on_conflict: $on_conflict) {
    ...insert_order_products_order_products_mutation_response
  }
}
    ${Insert_Order_Products_Order_Products_Mutation_ResponseFragmentDoc}`;

export function useInsert_Order_ProductsMutation() {
  return Urql.useMutation<Insert_Order_ProductsMutation, Insert_Order_ProductsMutationVariables>(Insert_Order_ProductsDocument);
};
export const Insert_Order_Products_OneDocument = gql`
    mutation insert_order_products_one($order_products: order_products_insert_input!, $on_conflict: order_products_on_conflict) {
  insert_order_products_one(object: $order_products, on_conflict: $on_conflict) {
    ...insert_order_products_one_order_products
  }
}
    ${Insert_Order_Products_One_Order_ProductsFragmentDoc}`;

export function useInsert_Order_Products_OneMutation() {
  return Urql.useMutation<Insert_Order_Products_OneMutation, Insert_Order_Products_OneMutationVariables>(Insert_Order_Products_OneDocument);
};
export const Update_Order_ProductsDocument = gql`
    mutation update_order_products($_inc: order_products_inc_input, $order_products: order_products_set_input, $where: order_products_bool_exp!) {
  update_order_products(_inc: $_inc, _set: $order_products, where: $where) {
    ...update_order_products_order_products_mutation_response
  }
}
    ${Update_Order_Products_Order_Products_Mutation_ResponseFragmentDoc}`;

export function useUpdate_Order_ProductsMutation() {
  return Urql.useMutation<Update_Order_ProductsMutation, Update_Order_ProductsMutationVariables>(Update_Order_ProductsDocument);
};
export const Update_Order_Products_By_PkDocument = gql`
    mutation update_order_products_by_pk($_inc: order_products_inc_input, $order_products: order_products_set_input, $pk_columns: order_products_pk_columns_input!) {
  update_order_products_by_pk(
    _inc: $_inc
    _set: $order_products
    pk_columns: $pk_columns
  ) {
    ...update_order_products_by_pk_order_products
  }
}
    ${Update_Order_Products_By_Pk_Order_ProductsFragmentDoc}`;

export function useUpdate_Order_Products_By_PkMutation() {
  return Urql.useMutation<Update_Order_Products_By_PkMutation, Update_Order_Products_By_PkMutationVariables>(Update_Order_Products_By_PkDocument);
};
export const OrdersDocument = gql`
    query orders($distinct_on: [orders_select_column!], $limit: Int, $offset: Int, $order_by: [orders_order_by!] = {updated_at: desc}, $where: orders_bool_exp) {
  orders(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...orders_orders
  }
}
    ${Orders_OrdersFragmentDoc}`;

export function useOrdersQuery(options?: Omit<Urql.UseQueryArgs<OrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<OrdersQuery>({ query: OrdersDocument, ...options });
};
export const Orders_By_PkDocument = gql`
    query orders_by_pk($id: Int!) {
  orders_by_pk(id: $id) {
    ...orders_by_pk_orders
  }
}
    ${Orders_By_Pk_OrdersFragmentDoc}`;

export function useOrders_By_PkQuery(options: Omit<Urql.UseQueryArgs<Orders_By_PkQueryVariables>, 'query'>) {
  return Urql.useQuery<Orders_By_PkQuery>({ query: Orders_By_PkDocument, ...options });
};
export const Delete_OrdersDocument = gql`
    mutation delete_orders($where: orders_bool_exp!) {
  delete_orders(where: $where) {
    ...delete_orders_orders_mutation_response
  }
}
    ${Delete_Orders_Orders_Mutation_ResponseFragmentDoc}`;

export function useDelete_OrdersMutation() {
  return Urql.useMutation<Delete_OrdersMutation, Delete_OrdersMutationVariables>(Delete_OrdersDocument);
};
export const Delete_Orders_By_PkDocument = gql`
    mutation delete_orders_by_pk($id: Int!) {
  delete_orders_by_pk(id: $id) {
    ...delete_orders_by_pk_orders
  }
}
    ${Delete_Orders_By_Pk_OrdersFragmentDoc}`;

export function useDelete_Orders_By_PkMutation() {
  return Urql.useMutation<Delete_Orders_By_PkMutation, Delete_Orders_By_PkMutationVariables>(Delete_Orders_By_PkDocument);
};
export const Insert_OrdersDocument = gql`
    mutation insert_orders($orders: [orders_insert_input!]!, $on_conflict: orders_on_conflict) {
  insert_orders(objects: $orders, on_conflict: $on_conflict) {
    ...insert_orders_orders_mutation_response
  }
}
    ${Insert_Orders_Orders_Mutation_ResponseFragmentDoc}`;

export function useInsert_OrdersMutation() {
  return Urql.useMutation<Insert_OrdersMutation, Insert_OrdersMutationVariables>(Insert_OrdersDocument);
};
export const Insert_Orders_OneDocument = gql`
    mutation insert_orders_one($orders: orders_insert_input!, $on_conflict: orders_on_conflict) {
  insert_orders_one(object: $orders, on_conflict: $on_conflict) {
    ...insert_orders_one_orders
  }
}
    ${Insert_Orders_One_OrdersFragmentDoc}`;

export function useInsert_Orders_OneMutation() {
  return Urql.useMutation<Insert_Orders_OneMutation, Insert_Orders_OneMutationVariables>(Insert_Orders_OneDocument);
};
export const Update_OrdersDocument = gql`
    mutation update_orders($_inc: orders_inc_input, $orders: orders_set_input, $where: orders_bool_exp!) {
  update_orders(_inc: $_inc, _set: $orders, where: $where) {
    ...update_orders_orders_mutation_response
  }
}
    ${Update_Orders_Orders_Mutation_ResponseFragmentDoc}`;

export function useUpdate_OrdersMutation() {
  return Urql.useMutation<Update_OrdersMutation, Update_OrdersMutationVariables>(Update_OrdersDocument);
};
export const Update_Orders_By_PkDocument = gql`
    mutation update_orders_by_pk($_inc: orders_inc_input, $orders: orders_set_input, $pk_columns: orders_pk_columns_input!) {
  update_orders_by_pk(_inc: $_inc, _set: $orders, pk_columns: $pk_columns) {
    ...update_orders_by_pk_orders
  }
}
    ${Update_Orders_By_Pk_OrdersFragmentDoc}`;

export function useUpdate_Orders_By_PkMutation() {
  return Urql.useMutation<Update_Orders_By_PkMutation, Update_Orders_By_PkMutationVariables>(Update_Orders_By_PkDocument);
};
export const CustomerDocument = gql`
    query customer($id: uuid!) {
  customer(id: $id) {
    ...customer_customers
  }
}
    ${Customer_CustomersFragmentDoc}`;

export function useCustomerQuery(options: Omit<Urql.UseQueryArgs<CustomerQueryVariables>, 'query'>) {
  return Urql.useQuery<CustomerQuery>({ query: CustomerDocument, ...options });
};
export const CustomersDocument = gql`
    query customers($distinct_on: [customers_select_column!], $limit: Int, $offset: Int, $order_by: [customers_order_by!], $where: customers_bool_exp) {
  customers(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...customers_customers
  }
}
    ${Customers_CustomersFragmentDoc}`;

export function useCustomersQuery(options?: Omit<Urql.UseQueryArgs<CustomersQueryVariables>, 'query'>) {
  return Urql.useQuery<CustomersQuery>({ query: CustomersDocument, ...options });
};
export const DeleteCustomerDocument = gql`
    mutation deleteCustomer($id: uuid!) {
  deleteCustomer(id: $id) {
    ...deleteCustomer_customers
  }
}
    ${DeleteCustomer_CustomersFragmentDoc}`;

export function useDeleteCustomerMutation() {
  return Urql.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument);
};
export const DeleteCustomersDocument = gql`
    mutation deleteCustomers($where: customers_bool_exp!) {
  deleteCustomers(where: $where) {
    ...deleteCustomers_customers_mutation_response
  }
}
    ${DeleteCustomers_Customers_Mutation_ResponseFragmentDoc}`;

export function useDeleteCustomersMutation() {
  return Urql.useMutation<DeleteCustomersMutation, DeleteCustomersMutationVariables>(DeleteCustomersDocument);
};
export const InsertCustomerDocument = gql`
    mutation insertCustomer($customers: customers_insert_input!, $on_conflict: customers_on_conflict) {
  insertCustomer(object: $customers, on_conflict: $on_conflict) {
    ...insertCustomer_customers
  }
}
    ${InsertCustomer_CustomersFragmentDoc}`;

export function useInsertCustomerMutation() {
  return Urql.useMutation<InsertCustomerMutation, InsertCustomerMutationVariables>(InsertCustomerDocument);
};
export const InsertCustomersDocument = gql`
    mutation insertCustomers($customers: [customers_insert_input!]!, $on_conflict: customers_on_conflict) {
  insertCustomers(objects: $customers, on_conflict: $on_conflict) {
    ...insertCustomers_customers_mutation_response
  }
}
    ${InsertCustomers_Customers_Mutation_ResponseFragmentDoc}`;

export function useInsertCustomersMutation() {
  return Urql.useMutation<InsertCustomersMutation, InsertCustomersMutationVariables>(InsertCustomersDocument);
};
export const UpdateCustomerDocument = gql`
    mutation updateCustomer($customers: customers_set_input, $pk_columns: customers_pk_columns_input!) {
  updateCustomer(_set: $customers, pk_columns: $pk_columns) {
    ...updateCustomer_customers
  }
}
    ${UpdateCustomer_CustomersFragmentDoc}`;

export function useUpdateCustomerMutation() {
  return Urql.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument);
};
export const UpdateCustomersDocument = gql`
    mutation updateCustomers($customers: customers_set_input, $where: customers_bool_exp!) {
  updateCustomers(_set: $customers, where: $where) {
    ...updateCustomers_customers_mutation_response
  }
}
    ${UpdateCustomers_Customers_Mutation_ResponseFragmentDoc}`;

export function useUpdateCustomersMutation() {
  return Urql.useMutation<UpdateCustomersMutation, UpdateCustomersMutationVariables>(UpdateCustomersDocument);
};