"use client";

import { fetchUser } from "@/actions/user.action";
import BackButton from "@/components/BackButton";
import { QiitaUser } from "@/type";
import React, { useLayoutEffect, useState } from "react";
import UserContainer from "./_components/UserContainer";
import { useRecoilValue } from "recoil";
import { apiKeyState } from "@/app/state/apiKeyState";

const page = ({ params: { id } }: { params: { id: string } }) => {
  const apiKey = useRecoilValue(apiKeyState);
  const [userData, setUserData] = useState<QiitaUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  useLayoutEffect(() => {
    setLoading(true);
    fetchUser(id, apiKey)
      .then((userData) => {
        setUserData(userData);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <BackButton />
      {error ? (
        <div className="text-red-500 text-base flex my-2">
          Error: Failed to get a user data.
        </div>
      ) : loading ? (
        <></>
      ) : (
        <UserContainer userData={userData}></UserContainer>
      )}
    </div>
  );
};

export default page;
