"use client";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

export const Navbar = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  return (
    <>
      <div className="sticky flex gap-4 px-8 py-4 text-xl">
        <Link href="/" className="text-accent text-4xl">
          LOGO
        </Link>
        <Link
          href="/login"
          className="ml-auto rounded-lg px-4 py-2 text-foreground-dark dark:text-foreground-light bg-accent"
        >
          Log In
        </Link>
        <button
          onClick={() => setSignUpModal(true)}
          className="rounded-lg cursor-pointer px-4 py-2 text-foreground-dark dark:text-foreground-light bg-accent"
        >
          Sign up
        </button>
      </div>
      {signUpModal && (
        <Modal>
          <div className="border-2 border-current p-4 rounded-lg w-full max-w-max text-xl flex flex-col gap-4 bg-background-light dark:bg-background-dark">
            <span className="text-2xl">Who do you want to sign up as?</span>
            <div className="flex gap-4 w-full flex-wrap">
              <Link
                href="/candidate-signup"
                className="rounded-lg px-4 py-2 text-foreground-dark dark:text-foreground-light bg-accent w-max"
                onClick={() => setSignUpModal(false)}
              >
                Sign Up as Candidate
              </Link>
              <Link
                href="/recruiter-signup"
                className="rounded-lg px-4 py-2 text-foreground-dark dark:text-foreground-light bg-accent w-max"
                onClick={() => setSignUpModal(false)}
              >
                Sign Up as Recruiter
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
