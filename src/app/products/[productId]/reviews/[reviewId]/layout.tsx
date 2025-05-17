export default function ProductDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 px-4">
            <div className="card-glass p-10 max-w-lg w-full text-center space-y-6">
                {children}
                <h1 className="text-4xl font-bold text-blue-900">Product Detail</h1>
                <p className="text-gray-600 text-lg">
                    This is a placeholder for the Product Detail component.
                </p>
            </div>
        </div>
    )
}