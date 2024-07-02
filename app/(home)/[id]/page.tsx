import BackButton from "@/components/BackButton";
import Item from "@/components/Item";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col gap-2">
      <BackButton />
      <Item id={id} />
    </div>
  );
};

export default page;
