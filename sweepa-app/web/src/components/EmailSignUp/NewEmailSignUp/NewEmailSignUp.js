import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EmailSignUpForm from 'src/components/EmailSignUp/EmailSignUpForm'

const CREATE_EMAIL_SIGN_UP_MUTATION = gql`
  mutation CreateEmailSignUpMutation($input: CreateEmailSignUpInput!) {
    createEmailSignUp(input: $input) {
      id
    }
  }
`

const NewEmailSignUp = () => {
  const [createEmailSignUp, { loading, error }] = useMutation(
    CREATE_EMAIL_SIGN_UP_MUTATION,
    {
      onCompleted: () => {
        toast.success('EmailSignUp created')
        navigate(routes.emailSignUps())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createEmailSignUp({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EmailSignUp</h2>
      </header>
      <div className="rw-segment-main">
        <EmailSignUpForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEmailSignUp
