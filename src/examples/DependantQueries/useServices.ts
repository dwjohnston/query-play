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