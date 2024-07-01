"use server";

import axios from "axios";
import { QiitaItem, Query } from "@/type";
import { createQuery } from "@/lib/utils";

export async function fetchItems(query : Query): Promise<QiitaItem[]>
{
    const queryString = createQuery(query);
    try 
    {
        const apiUrl = `${process.env.QIITA_API_URL}${queryString}`;
        const response = await axios.get(apiUrl, {
            headers: {
              Authorization: `Bearer ${process.env.BEARER_TOKEN}`
            }
        });
        return response.data;
    }
    catch(error)
    {
        console.log(error)
        throw new Error("Failed fetch items");
    }
}

