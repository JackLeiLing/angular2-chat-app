import { UsersState } from "./user/users.reducer";
import { ThreadsState } from "./thread/threads.reducer";

export interface AppState{
    users:UsersState;
    threads:ThreadsState;
}