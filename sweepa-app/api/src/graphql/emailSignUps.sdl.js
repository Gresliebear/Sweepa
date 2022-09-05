export const schema = gql`
  type EmailSignUp {
    id: Int!
    email: String!
    Status: String
  }

  type Query {
    emailSignUps: [EmailSignUp!]! @requireAuth
    emailSignUp(id: Int!): EmailSignUp @requireAuth
  }

  input CreateEmailSignUpInput {
    email: String!
    Status: String
  }

  input UpdateEmailSignUpInput {
    email: String
    Status: String
  }

  type Mutation {
    createEmailSignUp(input: CreateEmailSignUpInput!): EmailSignUp! @skipAuth
  }
`
