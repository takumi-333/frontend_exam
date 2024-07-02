"use server";

import axios from "axios";
import { QiitaItem, Query } from "@/type";
import { createQuery } from "@/lib/utils";

export async function fetchItems(query : Query, apiKey : string): Promise<QiitaItem[]>
{
    const queryString = createQuery(query);
    try 
    {
        const apiUrl = `${process.env.QIITA_API_URL}${queryString}`;
        let response;
        if (apiKey) {
            response = await axios.get(apiUrl, {
                headers: {
                Authorization: `Bearer ${apiKey}`
                }
            });
        }
        else {
            response = await axios.get(apiUrl);
        }
        return response.data;
    }
    catch(error)
    {
        console.log(error)
        throw new Error("Failed fetch items");
    }
}

export async function fetchItem(id: string) : Promise<QiitaItem> {
    try 
    {
        const apiUrl = `${process.env.QIITA_API_URL}/${id}`;
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
