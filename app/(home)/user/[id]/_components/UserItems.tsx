import { fetchItemsByUser } from "@/actions/items.action";
import ItemtableContainer from "@/components/ItemTableContainer";
import ItemTableContent from "@/components/ItemTableContent";
import TableSkeleton from "@/components/TableSkeleton";
import { useApiKeyContext } from "@/components/providers/ApiKeyProvider";
import { QiitaItem, QiitaUser } from "@/type";
import React, { useEffect, useState } from "react";

const UserItems = ({ userData }: { userData: QiitaUser }) => {
  const [itemDatas, setItemDatas] = useState<QiitaItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const apiKeyValue = useApiKeyContext();

  useEffect(() => {
    setError(false);
    setLoading(true);
    fetchItemsByUser(userData.id, apiKeyValue.state)
      .then((itemDatas) => {
        setItemDatas(itemDatas);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);
  return (
    <div className="flex flex-col gap-2">
      {error ? (
        <div className="text-red-500 text-base flex my-2">
          Error: cannnot get datas
        </div>
      ) : (
        !loading &&
        itemDatas.length == 0 && (
          <div className="text-red-500 text-base flex my-2">No datas...</div>
        )
      )}
      <ItemtableContainer
        TableContent={
          error ? (
            <></>
          ) : loading ? (
            <TableSkeleton />
          ) : (
            <ItemTableContent itemDatas={itemDatas} />
          )
        }
      />
    </div>
  );
};

export default UserItems;
