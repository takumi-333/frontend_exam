import BackButton from "@/components/BackButton";
import ItemContainer from "@/components/Item/ItemContainer";
import React from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col gap-2">
      <BackButton />
      <ItemContainer id={id} />
    </div>
  );
};

export default page;
