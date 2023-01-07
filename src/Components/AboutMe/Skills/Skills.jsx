import React from 'react';

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center mb-4 mt-36">
      <div className="w-1/2 md:w-1/4 p-4 text-center">
        <img src="https://i.ibb.co/wc8pnZk/html-css.png" alt="HTML & CSS icon" className="w-20 h-20 mx-auto mb-4 animate-bounce" />
        <p className="text-lg font-semibold text-gray-700 mb-2">
          HTML & CSS
        </p>
        <p className="text-sm text-gray-600 text-justify">
        HTML (Hypertext Markup Language) is a markup language used to structure and present content on the World Wide Web. It was first developed in the late 1980s and has since become the standard markup language for creating web pages. HTML is used to define the structure and layout of a web page, and to specify the content and formatting of text, images, and other elements on the page.

CSS (Cascading Style Sheets) is a stylesheet language used to describe the look and formatting of a document written in HTML. It is used to control the appearance of web pages and to apply styles to text, images, and other elements on the page. CSS is typically used to specify things like colors, fonts, and layout, and allows developers to separate the content and structure of a web page from its appearance.

Together, HTML and CSS are the building blocks of the modern web and are used to create the vast majority of websites and web applications.
        </p>
      </div>
      <div className="w-1/2 md:w-1/4 p-4 text-center">
        <img src="https://i.ibb.co/VCfVbx0/Java-Script-logo.png" alt="Database icon" className="w-20 h-20 mx-auto mb-4 animate-bounce" />
        <p className="text-lg font-semibold text-gray-700 mb-2">
          ES-5 ES-6
        </p>
        <p className="text-sm text-gray-600 text-justify">
        JavaScript is a programming language that was first developed in the mid-1990s by Netscape Communications Corporation. It was originally designed to add interactivity to web pages, and was initially called LiveScript when it was first implemented in the Netscape Navigator web browser.

The language was later renamed to JavaScript in an effort to capitalize on the popularity of Java, a programming language developed by Sun Microsystems. Despite the name, JavaScript is not related to Java, but it does borrow some of its syntax.

Since its introduction, JavaScript has become one of the most popular programming languages in the world and is used to build a wide variety of applications, including web, mobile, desktop, and server-side applications. It is also widely used in the development of game engines and virtual reality applications.
        </p>
      </div>
      <div className="w-1/2 md:w-1/4 p-4 text-center">
        <img src="https://i.ibb.co/SnZtkS7/reactjs-2.png" alt="Server icon" className="w-20 h-20 mx-auto mb-4 animate-bounce" />
        <p className="text-lg font-semibold text-gray-700 mb-2">
          REACT JS
        </p>
        <p className="text-sm text-gray-600 text-justify">
        React is a JavaScript library for building user interfaces that was developed by Facebook. It was first released in 2013 and has since become one of the most popular tools for building web applications. React was created by Jordan Walke, a software engineer at Facebook, and was initially released as an open-source project on GitHub.

The idea behind React was to provide a way for developers to build large, complex user interfaces in a more declarative and efficient manner. One of the key features of React is its virtual DOM (Document Object Model), which allows it to efficiently update the view of a web page in response to changes in the data.

Since its release, React has seen widespread adoption and has become a staple of modern web development. It is used by many major companies, including Facebook, Netflix, Airbnb, and Asana, and has a large and active developer community
        </p>
      </div>
      <div className="w-1/2 md:w-1/4 p-4 text-center">
        <img src="https://i.ibb.co/51hYLTG/1200px-Node-js-logo-svg.png" alt="Mobile icon" className="w-20 h-20 mx-auto mb-4 animate-bounce" />
        <p className="text-lg font-semibold text-gray-700 mb-2">
          NodeJS & Express
        </p>
        <p className="text-sm text-gray-600 text-justify">
        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side, enabling the creation of backend applications with JavaScript.

Express.js is a web application framework for Node.js that provides a range of features to make it easier to build web applications. It is designed to be flexible and easy to use, and is often used as the back-end for web applications built with Node.js. Express.js provides a set of APIs that allow developers to set up routes, handle requests, and manage responses for their web applications. It is also often used to handle tasks such as parsing request bodies and handling file uploads.
        </p>
      </div>
    </div>
  );
};

export default Skills;
