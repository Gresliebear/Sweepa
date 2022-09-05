// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import EmailSignUpsLayout from 'src/layouts/EmailSignUpsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={EmailSignUpsLayout}>
        <Route path="/email-sign-ups/new" page={EmailSignUpNewEmailSignUpPage} name="newEmailSignUp" />
        <Route path="/email-sign-ups/{id:Int}/edit" page={EmailSignUpEditEmailSignUpPage} name="editEmailSignUp" />
        <Route path="/email-sign-ups/{id:Int}" page={EmailSignUpEmailSignUpPage} name="emailSignUp" />
        <Route path="/email-sign-ups" page={EmailSignUpEmailSignUpsPage} name="emailSignUps" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
