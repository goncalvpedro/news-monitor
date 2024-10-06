/src  - is the main folder for all the project

/controllers - files that deal with the api itself and its logic

/public - styles and static files

/routes - rendering all routes based on api parameters

/views - templates with dynamic parameters

index.js - start the server and call all routes and api's

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

body {
    font-family: "Montserrat", sans-serif;
    background-color: #f8f9fa;
    color: #333333;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    overflow-x: hidden;
}

h1,
h2,
h3 {
    color: #333;
    margin-bottom: 10px;
}

a {
    color: #e74c3c;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* General Header and Navbar Styles */
header {
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    background-color: white;
    width: 100vw;
    /* Make the navbar span the entire viewport width */
    box-sizing: border-box;
    padding-left: 20px;
    /* Optional space on the left side */
    padding-right: 40px;
    /* Extra space on the right for icons */
}

.navbar-logo img {
    margin-left: 2vw;
    width: 70px;
    opacity: 0.7;

}

.navbar-query {
    margin: 0 80px;
    display: flex;
    justify-content: center;
    flex: 1;
}

.navbar-query form {
    width: 100%;
    max-width: 600px;
    min-width: 150px;
    position: relative;
}

.navbar-query input {
    height: 35px;
    width: 100%;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #f1f1f1;
    font-size: 14px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-query input:focus {
    background-color: #f7f5f5;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

}

.navbar-query input::placeholder {
    color: #a0a0a0;
    font-size: 17px;
    font-weight: 250;
}

.navbar-icons {
    display: flex;
    align-items: center;
    padding-right: 20px;
}

#navbar-menu {
    display: none;
}

.navbar-icons img {
    width: 24px;
    height: 24px;
    margin-left: 50px;
    /* Increase space between icons */
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.navbar-icons img:hover {
    opacity: 1;
}

/* Bottom Navbar Links */
.navbar-links {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    background-color: white;
    border-top: 1px solid #e0e0e0;
    width: 100vw;
    /* Make bottom navigation span full width */
}

.navbar-links a {
    color: #555;
    font-size: 14px;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: 500;
    transition: color 0.3s ease;
}

.navbar-links a:hover {
    color: #4285f4;
}

.navbar-links a.active {
    color: #4285f4;
    border-bottom: 3px solid #4285f4;
}

/* Main Headline Section */

/* 
.headlines {
    margin: 20px auto;
    padding: 20px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
}

.headline-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    max-height: 300px;
    display: flex;
    flex-direction: column;
    text-align: left;
}

.headline-card img {
    max-width: 100%;
    padding: 0 20px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.headline-card title {
    padding: 15px 20px;
    color: #333;
}

.headline-card p {
    padding: 0 20px;
    color: #666;
}

#news-title {

}

.headline-card a {
    display: inline-block;
    margin: 15px 20px;
    padding: 10px 15px;
    background-color: #4285f4;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
    font-weight: 600;
    text-align: center;
}

.headline-card a:hover {
    background-color: #4285f4;
} */


.hero {
    padding: 40px 400px;
    text-align: center;
}


.headlines {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 20px;
}

.headline-card {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.headline-card img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.headline-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
}

.headline-card:hover .headline-overlay {
    opacity: 1;
}

#news-title {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
    padding: 0 10px;
}

.headline-overlay a {
    background-color: #4285f4;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
}

.headline-overlay a:hover {
    background-color: #357ae8;
}


/* Categories Section */
.category-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 40px auto;
    max-width: 1200px;
}

.category {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.category h2 {
    color: #e74c3c;
    margin-bottom: 15px;
}

.category-card {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.category-card img {
    width: 80px;
    height: 60px;
    border-radius: 5px;
    margin-right: 15px;
}

.category-card a {
    color: #333;
    font-weight: 600;
}

.category-card a:hover {
    color: #e74c3c;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
}

footer p {
    margin: 0;
}

footer a {
    color: #e74c3c;
}

footer a:hover {
    color: #c0392b;
}



/* Media Query for Mobile Responsiveness */
@media (max-width: 768px) {
    .navbar {
        flex-direction: row;
        align-items: center;
        margin-left: 8px;
    }

    .navbar-query {
        margin: 0 40px;
        width: 100%;
    }

    .navbar-links {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding-left: 20px;
    }

    .navbar-links a {
        padding: 8px 10px;
        font-size: 13px;
    }

}

#navbar-menu:hover {
    opacity: 1;
}

@media (max-width: 630px) {

    #navbar-account,
    #navbar-settings,
    #navbar-theme {
        opacity: 0;
        visibility: hidden;
        display: none;
    }

    #navbar-menu {
        display: flex;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }

    #navbar-menu:hover {
        opacity: 0.7;
    }

}