import {QueryClient, useQuery } from "@tanstack/react-query";
const qc = new QueryClient();

export type User ={
    id: number; 
    name: string; 
    username: string; 
}


export type Todo = {
    userId: number; 
    id: number; 
    title: string; 
    completed: boolean; 
}


async function delay<T>(fn: () => Promise<T> ) : Promise<T> {

    const result = await fn();
    return new Promise((res) => {
        setTimeout(() => res(result), 1000);
    }); 
}

export async function loadUsers(){
    return qc.fetchQuery({
        queryFn: () => delay(() =>fetch("https://jsonplaceholder.typicode.com/users").then((v) => v.json() as Promise<Array<User>>)), 
        queryKey: ["users"], 
        staleTime: 10000
    }); 
}

export async function loadTodos(){
    return qc.fetchQuery({
        queryFn: () => delay(() => fetch("https://jsonplaceholder.typicode.com/todos").then((v) => v.json() as Promise<Array<Todo>>)), 
        queryKey: ["todos"],
        staleTime: 10000

    }); 
}

export async function loadTodoAndUser(todoId: string){
    const result = await qc.fetchQuery({
        queryFn: () => delay(() => fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((v) => v.json() as Promise<Todo>)), 
        queryKey: ["todos", todoId],
        staleTime: 10000

    }); 

    const r2 = await qc.fetchQuery({
        queryFn: () => delay(() => fetch(`https://jsonplaceholder.typicode.com/users/${result.userId}`).then((v) => v.json() as Promise<User>)), 
        queryKey: ["users", result.userId],
        staleTime: 10000

    }); 

    return {
        todo: result, 
        user: r2
    }; 

}

export function useUsers() {
    return useQuery({
        queryFn: () => fetch("https://jsonplaceholder.typicode.com/users").then((v) => v.json() as Promise<Array<User>>), 
        queryKey: ["users"]
    })
}

export function useUser(userId?: number) {
    return useQuery({
        queryFn: () => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((v) => v.json() as Promise<User>), 
        queryKey: ["users", userId], 
        enabled: !!userId
    }) 
}

export function useTodos() {
return useQuery({
    queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((v) => v.json()  as Promise<Array<Todo>>), 
    queryKey: ["todos"]
})
}

export function useTodo(todoId: number) {
    return useQuery({
        queryFn: () => fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((v) => v.json()  as Promise<Todo>), 
        queryKey: ["todos", todoId]
    })
}

export function useUserForTodo(todoId: number) {
    const todoQuery = useTodo(todoId); 
    return useUser(todoQuery.data?.userId); 
}