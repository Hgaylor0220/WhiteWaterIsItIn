import React from 'react';
import Header from './header';
import Layout from './Layout';


const indexPageContent =
    <div>
        <body>
            <Header>
                <title>White Water, Is It In?</title>
            </Header>
            <div className="hero"   >
                <h1 className="title">White Water, Is It In?</h1>
                <p className="description">
                    Wellcome to the PNW White water application build to provide you with up to date information on all the great rivers around. You can search a river and find out what the current flow, class, length of the run and gps corrdinates of the put in and take out's of the river. What are you waiting for? get out there, be safe and get wild!
      </p>


                <div className="row" >
                    <a href="/RiverInfo" className="card" >
                        <h3>Search a River &rarr;</h3>
                        <p>Search by location, class or length</p>
                    </a>
                    <a href="/journal" className="card" >
                        <h3>Create a river Journal &rarr;</h3>
                        <p>Document all your favorite runs here! Notes on flow, river changes, seasonal trends?</p>
                    </a>
                    <a href="/messageBoard" className="card" >
                        <h3>Message Board &rarr;</h3>
                        <p>Looking for a river near you?</p>
                    </a>
                    <a href="/inviteafriend" className="card" >
                        <h3>Invite a Friend  &rarr;</h3>
                        <p>Do you want to share all this rad information with your other friends? Share the app here!</p>
                    </a>
                </div>
            </div>

            {/* <img src={IndexPic} />  */}


            <style jsx>{`
      .hero {
        width: 100%;
        color: #E5DFDF;
        fontfamily: Lucida-Grande;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #152A38;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #E5DFDF;
      }
      .card h3 {
        margin: 0;
        color: #E5DFDF;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #E5DFDF;
      }
    `}</style>
        </body>
    </div>
export default function Index() {
    return <Layout content={indexPageContent} />;
}