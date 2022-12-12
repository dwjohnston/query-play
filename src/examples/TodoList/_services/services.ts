export type Todo = {
    id: string; 
    label: string; 
    content: string; 
}


export type UserPreferences = {
    preferredLabels: Array<string>; 
    preferredPriority: number; 
}

export type Label = {
    id: string; 
    name: string; 
    priority: number; 
}


export async function fetchTodos() : Promise<Array<Todo>>{
    const res = await fetch('/todos'); 
    return res.json();
}

export async function fetchUserPreferences() : Promise<UserPreferences>{
    const res = await fetch('/userPreferences'); 
    return res.json();
}


export async function fetchLabels() : Promise<Array<Label>>{
    const res = await fetch('/labels'); 
    return res.json();
}