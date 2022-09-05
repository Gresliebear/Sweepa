import EmailSignUp from 'src/components/EmailSignUp/EmailSignUp'

export const QUERY = gql`
  query FindEmailSignUpById($id: Int!) {
    emailSignUp: emailSignUp(id: $id) {
      id
      email
      Status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>EmailSignUp not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ emailSignUp }) => {
  return <EmailSignUp emailSignUp={emailSignUp} />
}
