import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_EMAIL_SIGN_UP_MUTATION = gql`
  mutation DeleteEmailSignUpMutation($id: Int!) {
    deleteEmailSignUp(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const EmailSignUp = ({ emailSignUp }) => {
  const [deleteEmailSignUp] = useMutation(DELETE_EMAIL_SIGN_UP_MUTATION, {
    onCompleted: () => {
      toast.success('EmailSignUp deleted')
      navigate(routes.emailSignUps())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete emailSignUp ' + id + '?')) {
      deleteEmailSignUp({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            EmailSignUp {emailSignUp.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{emailSignUp.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{emailSignUp.email}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{emailSignUp.Status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmailSignUp({ id: emailSignUp.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(emailSignUp.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default EmailSignUp
