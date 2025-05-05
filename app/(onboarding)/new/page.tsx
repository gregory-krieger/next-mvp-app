import CreateOrganization from "@/lib/auth/components/create-organization";

const Page = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6  p-6 md:p-10">
      <CreateOrganization />
    </div>
  );
};

export default Page;
