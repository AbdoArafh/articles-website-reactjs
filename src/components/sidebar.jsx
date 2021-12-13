import Button from "./button"

function SideBar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <div className="title">
                    Articles Website
                </div>
                <div className="slogan">
                    A website just for articles
                </div>
            </div>
            <div className="links">
                <div className="link">Home</div>
                <div className="link">Discover</div>
                <div className="link">About</div>
                <div className="link">My Profile</div>
                <div className="link">Contact</div>
            </div>
            <div className="buttons">
                <Button>Sign Up</Button>
                <Button>Login</Button>
            </div>
        </div>
    )
}

export default SideBar