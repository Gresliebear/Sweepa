import {
  emailSignUps,
  emailSignUp,
  createEmailSignUp,
  updateEmailSignUp,
  deleteEmailSignUp,
} from './emailSignUps'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('emailSignUps', () => {
  scenario('returns all emailSignUps', async (scenario) => {
    const result = await emailSignUps()

    expect(result.length).toEqual(Object.keys(scenario.emailSignUp).length)
  })

  scenario('returns a single emailSignUp', async (scenario) => {
    const result = await emailSignUp({ id: scenario.emailSignUp.one.id })

    expect(result).toEqual(scenario.emailSignUp.one)
  })

  scenario('creates a emailSignUp', async () => {
    const result = await createEmailSignUp({
      input: { email: 'String3412986' },
    })

    expect(result.email).toEqual('String3412986')
  })

  scenario('updates a emailSignUp', async (scenario) => {
    const original = await emailSignUp({ id: scenario.emailSignUp.one.id })
    const result = await updateEmailSignUp({
      id: original.id,
      input: { email: 'String67677002' },
    })

    expect(result.email).toEqual('String67677002')
  })

  scenario('deletes a emailSignUp', async (scenario) => {
    const original = await deleteEmailSignUp({
      id: scenario.emailSignUp.one.id,
    })

    const result = await emailSignUp({ id: original.id })

    expect(result).toEqual(null)
  })
})
