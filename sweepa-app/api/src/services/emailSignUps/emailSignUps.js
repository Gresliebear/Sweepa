import { db } from 'src/lib/db'

export const emailSignUps = () => {
  return db.emailSignUp.findMany()
}

export const emailSignUp = ({ id }) => {
  return db.emailSignUp.findUnique({
    where: { id },
  })
}

export const createEmailSignUp = ({ input }) => {
  console.log("Hello Terminal")
  console.log(input)
  return db.emailSignUp.create({
    data: input,
  })
}

export const updateEmailSignUp = ({ id, input }) => {
  return db.emailSignUp.update({
    data: input,
    where: { id },
  })
}

export const deleteEmailSignUp = ({ id }) => {
  return db.emailSignUp.delete({
    where: { id },
  })
}
