import { method } from "../type";

type ContentData =  {
    id: number,
    title: string,
    url: string,
    text: string,
    queryName: string,
    method: method,
}

export const contentData: ContentData[] = [
    {
        id: 1,
        title: "Create a new note",
        url: "/v1/demonote/create",
        queryName: "createNote",
        text: "This endpoint allows authenticated users to create a new note."
    },
    {
        id: 2,
        title: "Delete a note",
        url: "/v1/deletepost/id",
        queryName: "deleteNote",
        text: "This endpoint allows authenticated users to delete a specific note by its ID."
        
    },
    {
        id: 3,
        title: "Update a note",
        url: "/v1/updatenote/id",
        queryName: "updateNote",
        text: "This endpoint allows authenticated users to update a specific note by its ID."
    },
    {
        id: 4,
        title: "Get notes by user ID",
        url: "/v1/seeusernotes/id",
        queryName: "seeAllNotesByUserId",
        text: "This endpoint returns all notes created by a specific user, requiring authentication."
    },
    {
        id: 5,
        title: "Get all notes",
        url: "/v1/getallnotes",
        queryName: "getAllNotes",
        text: "This endpoint returns all notes from the database without authentication."
    }
];
