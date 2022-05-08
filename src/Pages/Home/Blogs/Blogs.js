import React from 'react';

const Blogs = () => {
    return (
        <div className=' container my-5 py-5'>

            <div class="row">
                <h2> Difference between javascript and nodejs:</h2>
                <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            </div>
            <div className="row">
                <h2>When should you use nodejs and when should you use mongodb:</h2>
                <p>


                    Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.

                    MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

                    MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...

                    These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.
                </p>
            </div>
            <div className="row">
                <h2> Differences between sql and nosql databases:</h2>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <h2>What is the purpose of jwt and how does it work:</h2>
            <p>
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
            </p>

        </div>
    );
};

export default Blogs;