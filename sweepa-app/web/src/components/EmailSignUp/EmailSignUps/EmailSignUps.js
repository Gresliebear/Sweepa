import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/EmailSignUp/EmailSignUpsCell'

const DELETE_EMAIL_SIGN_UP_MUTATION = gql`
  mutation DeleteEmailSignUpMutation($id: Int!) {
    deleteEmailSignUp(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const EmailSignUpsList = ({ emailSignUps }) => {
  const [deleteEmailSignUp] = useMutation(DELETE_EMAIL_SIGN_UP_MUTATION, {
    onCompleted: () => {
      toast.success('EmailSignUp deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete emailSignUp ' + id + '?')) {
      deleteEmailSignUp({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {emailSignUps.map((emailSignUp) => (
            <tr key={emailSignUp.id}>
              <td>{truncate(emailSignUp.id)}</td>
              <td>{truncate(emailSignUp.email)}</td>
              <td>{truncate(emailSignUp.Status)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.emailSignUp({ id: emailSignUp.id })}
                    title={'Show emailSignUp ' + emailSignUp.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEmailSignUp({ id: emailSignUp.id })}
                    title={'Edit emailSignUp ' + emailSignUp.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete emailSignUp ' + emailSignUp.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(emailSignUp.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmailSignUpsList
