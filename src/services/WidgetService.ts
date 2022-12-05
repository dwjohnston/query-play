

export type Widget = {
    id: string; 
    value: string; 
}


const db = [{
    id: "1", 
    value: "1"
}] as Array<Widget>; 


export async function getAllWidgets() : Promise<Array<Widget>> {
    return new Promise((res) => {
        setTimeout(() => res(db), 1000); 
    }); 
}

export async function addWidget(widget: Omit<Widget, "id">) : Promise<Widget> {



    console.log(widget);
    return new Promise((res) => {
        setTimeout(() => {
           
            const newId = `${Math.random()}`; 

            const newWidget = {
                id: newId, 
                value: widget.value
            }
            db.push(newWidget)

            console.log(newWidget);

            res(newWidget)
        }, 1000); 
    }); 

}