const Template = props => {
    return (
        <div className="bg-layer">
            <div className="fg-layer">
                <label className="logo">Pi to A 1000 Places</label>
                <Nav />
                {props.children}
            </div>
        </div>
    );
}

export default Template;