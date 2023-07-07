import Navber from "@/components/navber";


const WithLayout = ({ children }) => {
    return (
        <div className="container mx-auto">
             <Navber/>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;