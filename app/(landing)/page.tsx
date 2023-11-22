import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h3 className="text-2xl">LandingPage(Unprotected)</h3>
      <div className="flex flex-row justify-center items-center gap-2">
        <Link href="/sign-in">
          <Button> Sign In </Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button> Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
