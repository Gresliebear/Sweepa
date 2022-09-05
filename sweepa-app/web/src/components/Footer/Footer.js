import { Form,
  TextField,
  FieldError,
  RadioField,
  Label,
Submit
 } from "@redwoodjs/forms"
 import React, { useState } from 'react';
 import { MetaTags, useMutation } from '@redwoodjs/web'
 import { toast, Toaster } from '@redwoodjs/web/toast'
//  We need to call graphql here to put email data to service to send it to my email or googlesheets
const EMAIL_USER_MUTATION = gql`
mutation createEmailSignUpMutation($input: CreateEmailSignUpInput!) {
  createEmailSignUp(input: $input) {
      id
    }
  }
`

const Footer = () => {
  // state management
  const[Status, setStatus] = useState('No')
  const[errorMessage, SetMessage] = useState('')
  const [emailUser, { loading, error }] = useMutation(EMAIL_USER_MUTATION, {
    onCompleted: () => {
      toast.success('Email sent, Thank you for your submission!')
      SetMessage('Email sent, Thank you for your submission!')
    },
    onError: (error) => {
      toast.error(error.message)
      SetMessage('Email Already Exist')
    },
  })

  const onSubmit = async (data) => {
    console.log(data)
    data['Status'] = Status
    console.log(data)
    // trigger UsMutation function above
    emailUser({ variables: { input: data } })
  }


  return (
    <div className=" pl-[120px] w-screen bg-syellow">
      <div className="relative flex p-5">
        <div className="basis-1/2 p-5">
        <div className="font-cooper text-8xl">
          Clean up your mess!
        </div>
        <div className="absolute left-[350px] top-[200px]">
          <img src="SweepaLogoContrast.svg"
           className='w-32 h-auto'
           style={{}}
          alt="Logo2"/>
        </div>
        <div className="font-cooper text-8xl">
        Or Earn As a Sweepa!
        </div>
        </div>
        <div className="basis-1/2 pt-7">
          <div className="font-cooper text-6xl">Sign Up! </div>
          <Form onSubmit={onSubmit}>
            <div className="p-10">
          <div className="mb-4">
                  <Label
                    name="email"
                    errorClassName="block text-black text-4xl font-cooper  mb-2"
                    className="block text-black text-4xl font-cooper mb-2"
                  >
                    What's Your Email?
                  </Label>
                  <TextField
                    name="email"
                    validation={{ required: true }}
                    errorClassName="shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          text-gray-700
          leading-tight
          border-red-500
          focus:outline-none
          focus:shadow-outline"
                    className="shadow
          appearance-none
          border
          rounded
          w-[600px]
          py-2
          px-3
          text-gray-700
          leading-tight
          focus:outline-none
          focus:shadow-outline"
                  />
                  <FieldError
                    name="email"
                    className="block text-red-700 font-cooper text-4xl mt-2 mb-2"
                  />
                </div>

            <Label
            name="SweepaStatus"
            errorClassName="block text-gray-700 text-2xl font-cooper mb-2"
            className="block text-black text-4xl font-cooper mb-2"
            >
              Interested As a Sweepa? <span className=" text-6xl pl-5"> {Status} </span>
            </Label>
            <div className="flex p-6 pl-20">
            <div className="basis-1/2">
            <button className="bg-green-700
            text-white
            font-cooper
            text-4xl
            hover:bg-red-700
            hover:duration-300
            p-3 pl-8
            pr-8 rounded-lg"
            onClick={() => setStatus('Yes')}
            > Yes </button>
            </div>
            <div className="basis-1/2">
            <button className="bg-green-700
            text-white
            font-cooper
            text-4xl
            hover:bg-red-700
            hover:duration-300
            p-3 pl-8
            pr-8 rounded-lg "
            onClick={() => setStatus('No')}
            > No </button>
            </div>
            </div>
            </div>
            <div className="absolute top-[550px] right-20 bottom-0">
                  <Submit
                  disabled={loading}
                    className="text-white bg-black font-cooper text-4xl p-3 rounded-lg"
                  >
                    Sign Up!
                  </Submit>
                </div>
          </Form>
          {/* So the backend is checking if every email is unique,
           now we need worry about session token, so no one can spam fake emails */}
          {/* ANOTHER DAY we solve this */}
          {errorMessage ?
          <div className="font-cooper text-3xl w-[400px] ">
          {errorMessage}
          </div>
          :
           ' '}
        </div>
      </div>
    </div>
  )
}

export default Footer
