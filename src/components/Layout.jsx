import react from 'react';
import Header from './Header';

const bodyStyle = {
    background: "#E3D9CA",
};



const layoutStyle = {
    margin: 60,
    padding: 60,
    border: '1px solid #DDD',
    background: "#556E53",
    fontfamily: "Lucida Grande",

};

const Layout = props => (
    <body style={bodyStyle}>
        <div style={layoutStyle}>
            <Header />
            {props.content}
        </div>
    </body>
);

export default Layout;