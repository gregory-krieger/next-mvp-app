import SignUp from "@/lib/auth/components/sign-up";

const Page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6  p-6 md:p-10">
      <SignUp />
    </div>
  );
};

export default Page;
