import { QiitaUser } from "@/type";
import Image from "next/image";
import React from "react";

const UserInfo = ({userData}: {userData?: QiitaUser}) => {
    return (
        <div className="flex flex-col gap-1">
            {userData && (
                <div className="flex flex-raw gap-2">
                    <Image 
                    src={userData.profile_image_url} 
                    alt="profile image" 
                    width={32} 
                    height={32}
                    className="rounded-full border"/>
                    <div className="hover:underline">@{userData.id}</div>
                </div>
            )}
        </div>
    )
}

export default UserInfo;