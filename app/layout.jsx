import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental, property, real estate',
    description: 'Find the perfect rental property',
}

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}

export default MainLayout;