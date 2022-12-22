import { useQuery } from "@tanstack/react-query";

type User ={
    id: number; 
    name: string; 
    username: string; 
}


type Todo = {
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


export function useUsers() {
    return useQuery({
        queryFn: () => delay(() =>fetch("https://jsonplaceholder.typicode.com/users").then((v) => v.json() as Promise<Array<User>>)), 
        queryKey: ["users"],
        staleTime: 100000

    })
}

export function useUser(userId?: number) {
    return useQuery({
        queryFn: () => delay(() => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((v) => v.json() as Promise<User>)), 
        queryKey: ["users", userId], 
        enabled: !!userId,
        staleTime: 100000

    }) 
}

export function useTodos() {
return useQuery({
    queryFn: () => delay(() => fetch("https://jsonplaceholder.typicode.com/todos").then((v) => v.json()  as Promise<Array<Todo>>)), 
    queryKey: ["todos"],
    staleTime: 100000
})
}

export function useTodo(todoId: number) {
    return useQuery({
        queryFn: () => delay(() => fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((v) => v.json()  as Promise<Todo>)), 
        queryKey: ["todos", todoId],
        staleTime: 100000

    })
}

export function useUserForTodo(todoId: number) {
    const todoQuery = useTodo(todoId); 
    return useUser(todoQuery.data?.userId); 
}