

const WithLayout = ({ children }) => {
    return (
        <div>
            <nav>
                <a href="/">Home</a>
            </nav>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;