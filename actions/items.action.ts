"use server";

import axios from "axios";
import { QiitaItem } from "@/type";

export async function fetchItems(numItems: number): Promise<QiitaItem[]>
{
    try 
    {
        const apiUrl = `${process.env.QIITA_API_URL}?per_page=${numItems}`;
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

