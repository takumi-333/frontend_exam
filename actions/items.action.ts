"use server";

import axios from "axios";
import {  QiitaItem, Query } from "@/type";
import { createQuery } from "@/lib/utils";

export async function fetchItems(query : Query, apiKey : string): Promise<QiitaItem[]>
{
    const queryString = createQuery(query);
    try 
    {
        const apiUrl = `https://qiita.com/api/v2/items${queryString}`;
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

export async function fetchItem(id: string, apiKey: string) : Promise<QiitaItem> {
    try 
    {
        const apiUrl = `https://qiita.com/api/v2/items/${id}`;
        let response;
        if (apiKey) {
            response = await axios.get(apiUrl, {
                headers: {
                  Authorization: `Bearer ${apiKey}`
                }
            });
        } else response = await axios.get(apiUrl);
        return response.data;
    }
    catch(error)
    {
        console.log(error)
        throw new Error("Failed fetch items");
    }
}

export async function fetchItemsByUser(id: string, apiKey: string) : Promise<QiitaItem[]> {

    try 
    {
        const apiUrl = `https://qiita.com/api/v2/users/${id}/items`;
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
        throw new Error("Failed fetch items by user");
    }
}


