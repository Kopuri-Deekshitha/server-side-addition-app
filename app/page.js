import AddForm from "./AddForm";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">
        Server Side Addition
      </h1>
      <AddForm />
    </div>
  );
}