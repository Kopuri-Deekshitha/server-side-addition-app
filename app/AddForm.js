"use client";

import { useActionState } from "react";
import { addNumbers } from "./actions";

export default function AddForm() {
  const [state, formAction] = useActionState(addNumbers, {
    result: null,
  });

  return (
    <>
      <form action={formAction} className="flex flex-col gap-4 w-64">
        <input
          type="number"
          name="num1"
          placeholder="Enter first number"
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="num2"
          placeholder="Enter second number"
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-black text-white p-2 rounded"
        >
          Add
        </button>
      </form>
      {state?.result !== null && state?.result !== undefined && (
        <p className="text-lg font-semibold mt-4">
          Result: {state.result}
        </p>
      )}
    </>
  );
}