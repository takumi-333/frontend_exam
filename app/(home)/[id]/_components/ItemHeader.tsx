import React, { useEffect, useState } from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QiitaItem, QiitaUser } from "@/type";
import { fetchUser } from "@/actions/user.action";
import ItemUserInfo from "./ItemUserInfo";
import { parseISO, format } from "date-fns";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import UserInfoSkeleton from "./UserInfoSkeleton";
import { useRecoilValue } from "recoil";
import { apiKeyState } from "@/app/state/apiKeyState";

const ItemHeader = ({ itemData }: { itemData: QiitaItem }) => {
  const apiKey = useRecoilValue(apiKeyState);
  const [userData, setUserData] = useState<QiitaUser | undefined>(undefined);
  const [userLoading, setUserLoading] = useState<boolean>(false);
  useEffect(() => {
    setUserLoading(true);
    fetchUser(itemData.user.id, apiKey).then((userData) => {
      setUserLoading(false);
      setUserData(userData);
    });
  }, []);

  return (
    <CardHeader className="gap-1 border-b py-1">
      <CardContent className="p-0 py-1">
        {userLoading ? (
          <UserInfoSkeleton />
        ) : (
          <ItemUserInfo userData={userData} />
        )}
      </CardContent>
      <CardTitle className="font-bold lg:text-3xl md:text-2xl sm:text-xl py-1">
        {itemData.title}
      </CardTitle>
      <CardContent className="p-0 py-1 flex flex-raw gap-2 text-muted-foreground text-xs">
        <div>
          最終更新日: {format(parseISO(itemData.updated_at), "yyyy年MM月dd日")}
        </div>
        <div className="sm:block hidden">
          投稿日: {format(parseISO(itemData.created_at), "yyyy年MM月dd日")}
        </div>
        <div className="sm:flex hidden gap-2">
          <div className="flex gap-1 items-center">
            <IoMdHeartEmpty />
            {itemData.likes_count}
          </div>
          <div className="flex gap-1 items-center">
            <IoBookmarkOutline />
            {itemData.stocks_count}
          </div>
        </div>
      </CardContent>
    </CardHeader>
  );
};

export default ItemHeader;
