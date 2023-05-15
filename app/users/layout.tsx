import { FC, ReactNode } from "react";

interface LayoutProps{
    children: ReactNode
}

const Layout: FC<Layoutrops> = ({children}) =>{
    return <div style={{background:"green"}}>{children}</div>
}

export default Layout