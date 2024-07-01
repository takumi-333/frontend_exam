import { Query } from "@/type"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createQuery(query: Query): string {
    let queryString: string = `?page=${query.numPage}`;
    if (query.numItems) queryString += `&per_page=${query.numItems}`;
    if (query.body || query.title) {
        queryString += "&query=";
        queryString += query.body?`body:${query.body} `:"";
        queryString += query.title?`title:${query.title} `:""
    }
    return queryString;
}
