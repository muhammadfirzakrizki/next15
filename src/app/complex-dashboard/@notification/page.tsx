import CardTemplate from "@/components/card-template"

export default function Notification() {
    return (
        <CardTemplate className="bg-blue-100"> 
            <div className="flex flex-col h-screen">
                <div className="flex-1 overflow-hidden">
                    <h1>Notification</h1>
                    <p>This is a notification page.</p>
                </div>
            </div>
        </CardTemplate>
    )
}