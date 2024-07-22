"use server";

import axios from "axios";
import { QiitaUser } from "@/type";
export async function fetchUser(
  id: string,
  apiKey: string,
): Promise<QiitaUser> {
  try {
    const apiUrl = `https://qiita.com/api/v2/users/${id}`;
    let response;
    if (apiKey) {
      response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
    } else response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed fetch user");
  }
}
