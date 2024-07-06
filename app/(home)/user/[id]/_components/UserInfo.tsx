import { CardContent, CardHeader } from "@/components/ui/card";
import { QiitaUser } from "@/type";
import React from "react";

const UserInfo = ({ userData }: { userData: QiitaUser }) => {
  return (
    <CardHeader className="border-b gap-1 py-1">
      <CardContent className="flex flex-raw gap-2 items-center">
        <img
          src={userData.profile_image_url}
          alt="profile image"
          width={64}
          height={64}
          className="rounded-full border"
        />
        <p className="md:text-2xl text-xl font-semibold">
          {userData.name ? userData.name : "名前未設定"}
        </p>
        <p className="md:text-xl text-base text-muted-foreground">
          @{userData.id}
        </p>
      </CardContent>
      <CardContent className="flex gap-4 items-center">
        <div className="flex flex-col gap-1 items-center">
          <p className="text-base">{userData.items_count}</p>
          <p className="text-sm">投稿</p>
        </div>
        <div className="text-base flex flex-col gap-1 items-center">
          <p className="text-base">{userData.followees_count}</p>
          <p className="text-sm">フォロー</p>
        </div>
        <div className="text-base flex flex-col gap-1 items-center">
          <p className="text-base">{userData.followers_count}</p>
          <p className="text-sm">フォロワー</p>
        </div>
      </CardContent>
    </CardHeader>
  );
};

export default UserInfo;
