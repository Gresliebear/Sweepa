import { Link, routes } from '@redwoodjs/router'

import EmailSignUps from 'src/components/EmailSignUp/EmailSignUps'

export const QUERY = gql`
  query FindEmailSignUps {
    emailSignUps {
      id
      email
      Status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No emailSignUps yet. '}
      <Link to={routes.newEmailSignUp()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ emailSignUps }) => {
  return <EmailSignUps emailSignUps={emailSignUps} />
}
