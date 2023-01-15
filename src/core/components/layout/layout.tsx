export function Layout({ children }: { children: JSX.Element }) {
    return (
        <div className="app container">
            {children}

            <div className="comunications "></div>
        </div>
    );
}
