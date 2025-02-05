import { signUp } from "../actions/sign-up"

const SignUpForm = () => {
  return (
    <form action={signUp} className="p-4 flex flex-col gap-y-2">
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="lastName" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export { SignUpForm }
