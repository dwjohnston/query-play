import { Outlet, useNavigation } from "react-router-dom";

export function Root() {


    const navigation = useNavigation();


    return <>
    <h1>root</h1>
    {navigation.state}
        <Outlet/>
    </>
}