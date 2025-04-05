"use client";
import Link from "next/link";

const SignUpForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.password.value);
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        action=""
        className="w-full max-w-xl border-2 border-current rounded-lg p-8 flex flex-col gap-4 text-lg"
      >
        <label className="flex flex-col gap-4">
          Email
          <input
            type="email"
            name="email"
            placeholder="john@doe.pet"
            className="bg-transparent px-4 py-2 outline-2 rounded-lg outline-current"
            required
          />
        </label>
        <label className="flex flex-col gap-4">
          Password
          <input
            type="password"
            name="password"
            placeholder="Must be atleast 6 characters"
            className="bg-transparent px-4 py-2 outline-2 rounded-lg outline-current"
            required
          />
        </label>
        <div className="flex gap-4 w-full">
          <label className="flex flex-col gap-4  w-1/2">
            First name:
            <input
              type="text"
              name="firstname"
              placeholder="John"
              className="bg-transparent px-4 py-2 outline-2 rounded-lg outline-current w-full"
              required
            />
          </label>
          <label className="flex flex-col gap-4  w-1/2">
            Last name:
            <input
              type="text"
              name="lastname"
              placeholder="Doe"
              className="bg-transparent px-4 py-2 outline-2 rounded-lg outline-current w-full"
            />
          </label>
        </div>
        <button
          type="submit"
          className="rounded-lg px-4 py-2 cursor-pointer text-foreground-dark dark:text-foreground-light bg-accent"
        >
          Sign Up
        </button>
        <span className="text-sm text-center">
          Already registered?{" "}
          <Link href="/login" className="text-accent underline">
            login
          </Link>
        </span>
      </form>
    </div>
  );
};
export default SignUpForm;
