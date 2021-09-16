import GlobalStyles from "./styled"

import NavBar from "../NavBar"

const Layout = ({ children, artists }) => {
    return <>
        <GlobalStyles />
        <div className="wrapper">
            <NavBar artists={artists} />
            {children}
        </div>
    </>
}

export default Layout