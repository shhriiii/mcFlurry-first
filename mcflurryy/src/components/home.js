function home(){
    return (
        <div>
    <header>
        <div class="navbar">
            <div class="logo">
                {/* <img src="reddit-logo.png" alt="Reddit Logo">  */}
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search Reddit"/>
            </div>
            <div class="user-options">
                <button class="login-btn">Log In</button>
                <button class="signup-btn">Sign Up</button>
            </div>
        </div>
    </header>

    <div class="container">
     
        <aside class="sidebar">
            <div class="section">
                <h3>Recent</h3>
                <ul>
                    <li>r/bootstrap</li>
                </ul>
            </div>
            <div class="section">
                <h3>Topics</h3>
                <ul>
                    <li>Internet Culture (Viral)</li>
                    <li>Games</li>
                    <li>Q&As</li>
                    <li>Technology</li>
                    <li>Pop Culture</li>
                    <li>Movies & TV</li>
                </ul>
            </div>
        </aside>

        <main class="content">
            <div class="post">
                <div class="post-thumbnail">
                    {/* <img src="arcane-thumbnail.jpg" alt="Arcane S2 trailer"> */}
                </div>
                <div class="post-content">
                    <h3>Arcane S2 Trailer</h3>
                    <span class="subreddit">r/leagueoflegends</span>
                    <p>Season 2 | Official Trailer - Watch now!</p>
                    <div class="post-footer">
                        <button class="upvote">&#x25B2;</button>
                        <span class="vote-count">1.7K</span>
                        <button class="downvote">&#x25BC;</button>
                        <span class="comments">385 comments</span>
                    </div>
                </div>
            </div>
        </main>


        <aside class="popular-communities">
            <h3>Popular Communities</h3>
            <ul>
                <li>r/explainlikeimfive (22.9M members)</li>
                <li>r/IAmA (22.5M members)</li>
                <li>r/classicwow (607K members)</li>
                <li>r/Instagram (938K members)</li>
                <li>r/NintendoSwitch (6.9M members)</li>
            </ul>
        </aside>
    </div>      
        </div>
    );
}
export default home;