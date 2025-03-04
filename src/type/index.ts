export type method = "GET" | "POST" | "PUT" | "DELETE" | "UPDATE";

export interface ApiResponseProps {
    method: method;
    url: string;
    text:  string;
}