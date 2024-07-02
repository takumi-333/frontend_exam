"use client";
import { fetchItem } from "@/actions/items.action";
import BackButton from "@/components/BackButton";
import ItemContainer from "@/components/Item/ItemContainer";
import { useApiKeyContext } from "@/components/providers/ApiKeyProvider";
import { QiitaItem } from "@/type";
import React, { useLayoutEffect, useState } from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const apiKeyValue = useApiKeyContext();
  const [itemData, setItemData] = useState<QiitaItem>();
  useLayoutEffect(() => {
    fetchItem(id, apiKeyValue.state).then(setItemData);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <BackButton />
      <ItemContainer itemData={itemData} />
    </div>
  );
};

export default page;
