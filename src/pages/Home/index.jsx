import React from 'react';
import Header from '../../componets/Header'
import Description from '../../componets/Description'

const Home = () => {
    return(
        <div className="main">
            <Header />
            <Description 
                name="Victor Fonseca"
                job="Software Developer" />
        </div>
    )
}

export default Home;