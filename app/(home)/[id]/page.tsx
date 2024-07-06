"use client";
import { fetchItem } from "@/actions/items.action";
import ContainerSkeleton from "./_components/ContainerSkeleton";
import ItemContainer from "./_components/ItemContainer";
import { useApiKeyContext } from "@/components/providers/ApiKeyProvider";
import { QiitaItem } from "@/type";
import React, { useLayoutEffect, useState } from "react";
import BackButton from "./_components/BackButton";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const apiKeyValue = useApiKeyContext();
  const [itemData, setItemData] = useState<QiitaItem>();
  const [loading, setLoading] = useState<boolean>(false);
  useLayoutEffect(() => {
    setLoading(true);
    fetchItem(id, apiKeyValue.state).then((itemData) => {
      setItemData(itemData);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <BackButton />
      {loading ? <ContainerSkeleton /> : <ItemContainer itemData={itemData} />}
    </div>
  );
};

export default page;
