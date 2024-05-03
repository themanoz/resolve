import Sidebar from "@/components/Sidebar";

export default function Dashboard(){
    return(
        <>
            <div className="grid grid-cols-2 pt-20">
                <Sidebar />
                <Sidebar />
            </div>
        </>
    )
}