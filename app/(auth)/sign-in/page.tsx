import SignIn from "@/lib/auth/components/sign-in";

const Page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6  p-6 md:p-10">
      <SignIn />
    </div>
  );
};

export default Page;
