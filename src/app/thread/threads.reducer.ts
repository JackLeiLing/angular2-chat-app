import { Thread } from "./thread";

export interface ThreadsEntities{
    [id:string]: Thread;
}

export interface ThreadsState{
    ids:String[];
    entities:ThreadsEntities;
    currentThreadId?:string;
}

const initialState:ThreadsState={
    ids:[],
    currentThreadId:null,
    entities:{}
}