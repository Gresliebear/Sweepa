import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmailSignUpForm from 'src/components/EmailSignUp/EmailSignUpForm'

export const QUERY = gql`
  query EditEmailSignUpById($id: Int!) {
    emailSignUp: emailSignUp(id: $id) {
      id
      email
      Status
    }
  }
`
const UPDATE_EMAIL_SIGN_UP_MUTATION = gql`
  mutation UpdateEmailSignUpMutation(
    $id: Int!
    $input: UpdateEmailSignUpInput!
  ) {
    updateEmailSignUp(id: $id, input: $input) {
      id
      email
      Status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ emailSignUp }) => {
  const [updateEmailSignUp, { loading, error }] = useMutation(
    UPDATE_EMAIL_SIGN_UP_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmailSignUp updated')
        navigate(routes.emailSignUps())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateEmailSignUp({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit EmailSignUp {emailSignUp.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmailSignUpForm
          emailSignUp={emailSignUp}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
