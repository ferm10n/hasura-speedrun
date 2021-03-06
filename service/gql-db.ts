import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  numeric: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: Maybe<Products_Inc_Input>;
  _set?: Maybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  id: Scalars['bigint'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['bigint'];
  ts: Scalars['date'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint'];
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
  count?: Maybe<Scalars['Int']>;
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
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  product?: Maybe<Products_Bool_Exp>;
  product_id?: Maybe<Bigint_Comparison_Exp>;
  ts?: Maybe<Date_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing integer column in table "orders" */
export type Orders_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  product?: Maybe<Products_Obj_Rel_Insert_Input>;
  product_id?: Maybe<Scalars['bigint']>;
  ts?: Maybe<Scalars['date']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
  ts?: Maybe<Scalars['date']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  ts?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
  ts?: Maybe<Scalars['date']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  ts?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** ordering options when selecting data from "orders" */
export type Orders_Order_By = {
  id?: Maybe<Order_By>;
  product?: Maybe<Products_Order_By>;
  product_id?: Maybe<Order_By>;
  ts?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "orders" */
export type Orders_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Ts = 'ts',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
  ts?: Maybe<Scalars['date']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  product_id?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Ts = 'ts',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  id?: Maybe<Order_By>;
  product_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  cost: Scalars['numeric'];
  id: Scalars['bigint'];
  name: Scalars['String'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Products_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: Maybe<Products_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Products_Max_Order_By>;
  min?: Maybe<Products_Min_Order_By>;
  stddev?: Maybe<Products_Stddev_Order_By>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Order_By>;
  sum?: Maybe<Products_Sum_Order_By>;
  var_pop?: Maybe<Products_Var_Pop_Order_By>;
  var_samp?: Maybe<Products_Var_Samp_Order_By>;
  variance?: Maybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Products_Bool_Exp>>>;
  _not?: Maybe<Products_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Products_Bool_Exp>>>;
  cost?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing integer column in table "products" */
export type Products_Inc_Input = {
  cost?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  cost?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  cost?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  cost?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  on_conflict?: Maybe<Products_On_Conflict>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns: Array<Products_Update_Column>;
  where?: Maybe<Products_Bool_Exp>;
};

/** ordering options when selecting data from "products" */
export type Products_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "products" */
export type Products_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  cost?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  cost?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Cost = 'cost',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  cost?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  cost?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** query root */
export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** query root */
export type Query_RootOrders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** query root */
export type Query_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** query root */
export type Query_RootProducts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootProductsArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: Maybe<Array<Products_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Products_Order_By>>;
  where?: Maybe<Products_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created: Scalars['date'];
  id: Scalars['bigint'];
  name: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Created = 'created',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Created = 'created',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = (
  { __typename?: 'query_root' }
  & { orders: Array<(
    { __typename?: 'orders' }
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'name'>
    ), product: (
      { __typename?: 'products' }
      & Pick<Products, 'name' | 'cost'>
    ) }
  )> }
);


export const MyQueryDocument = gql`
    query MyQuery {
  orders {
    user {
      name
    }
    product {
      name
      cost
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    MyQuery(variables?: MyQueryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MyQueryQuery> {
      return withWrapper(() => client.request<MyQueryQuery>(print(MyQueryDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;