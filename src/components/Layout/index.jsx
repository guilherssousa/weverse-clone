import GlobalStyles from "./styled"

import NavBar from "../NavBar"

const Layout = ({ children }) => {
    return <>
        <GlobalStyles />
        <div className="wrapper">
            <NavBar />
            {children}
        </div>
    </>
}

export default Layout