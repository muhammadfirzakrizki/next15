import CardTemplate from "@/components/card-template";

export default function Users() {
    return (
        <CardTemplate className="">
            <div className="flex flex-col h-screen">
                <div className="flex-1 overflow-hidden">
                    <h1>Users</h1>
                    <p>This is a users page.</p>
                </div>
            </div>
        </CardTemplate>
    )
}