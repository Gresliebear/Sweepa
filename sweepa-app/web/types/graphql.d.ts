export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: string;
};

export type CreateEmailSignUpInput = {
  Status?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

export type EmailSignUp = {
  __typename?: 'EmailSignUp';
  Status?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEmailSignUp: EmailSignUp;
  deleteEmailSignUp: EmailSignUp;
  updateEmailSignUp: EmailSignUp;
};


export type MutationcreateEmailSignUpArgs = {
  input: CreateEmailSignUpInput;
};


export type MutationdeleteEmailSignUpArgs = {
  id: Scalars['Int'];
};


export type MutationupdateEmailSignUpArgs = {
  id: Scalars['Int'];
  input: UpdateEmailSignUpInput;
};

export type Query = {
  __typename?: 'Query';
  emailSignUp?: Maybe<EmailSignUp>;
  emailSignUps: Array<EmailSignUp>;
  redwood?: Maybe<Redwood>;
};


export type QueryemailSignUpArgs = {
  id: Scalars['Int'];
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UpdateEmailSignUpInput = {
  Status?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type EditEmailSignUpByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type EditEmailSignUpById = { __typename?: 'Query', emailSignUp?: { __typename?: 'EmailSignUp', id: number, email: string, Status?: string | null } | null };

export type UpdateEmailSignUpMutationVariables = Exact<{
  id: Scalars['Int'];
  input: UpdateEmailSignUpInput;
}>;


export type UpdateEmailSignUpMutation = { __typename?: 'Mutation', updateEmailSignUp: { __typename?: 'EmailSignUp', id: number, email: string, Status?: string | null } };

export type DeleteEmailSignUpMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteEmailSignUpMutation = { __typename?: 'Mutation', deleteEmailSignUp: { __typename?: 'EmailSignUp', id: number } };

export type FindEmailSignUpByIdVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindEmailSignUpById = { __typename?: 'Query', emailSignUp?: { __typename?: 'EmailSignUp', id: number, email: string, Status?: string | null } | null };

export type FindEmailSignUpsVariables = Exact<{ [key: string]: never; }>;


export type FindEmailSignUps = { __typename?: 'Query', emailSignUps: Array<{ __typename?: 'EmailSignUp', id: number, email: string, Status?: string | null }> };

export type CreateEmailSignUpMutationVariables = Exact<{
  input: CreateEmailSignUpInput;
}>;


export type CreateEmailSignUpMutation = { __typename?: 'Mutation', createEmailSignUp: { __typename?: 'EmailSignUp', id: number } };
