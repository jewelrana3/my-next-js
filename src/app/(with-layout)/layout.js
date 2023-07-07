import Navber from "@/components/navber";


const WithLayout = ({ children }) => {
    return (
        <div>
             <Navber/>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;