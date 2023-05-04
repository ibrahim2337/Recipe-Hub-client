/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <section className="mt-20">
      <div className="container px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl text-center font-bold sm:text-4xl">
          Welcome To Blog
        </h2>
        <p className="mt-4 mb-8 "></p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
              Tell us the differences between uncontrolled and controlled
              components.
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              {" "}
              Uncontrolled and controlled components are terms commonly used in
              the context of web development in React, a popular JavaScript
              library. In React, components are reusable pieces of code that
              encapsulate functionality and can be composed to build complex
              user interfaces. Uncontrolled components are those that manage
              their own state internally and do not rely on React's state
              management system. They typically use standard HTML form elements
              such as input, select, and textarea. In an uncontrolled component,
              the value of the form element is managed by the browser, and the
              component only updates its internal state in response to user
              input events. This can be useful for simple forms where you do not
              need to keep track of the state of each individual input element
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
              How to validate React props using PropTypes
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              React PropTypes is a built-in library that provides a way to
              validate the props passed to a React component. PropTypes is
              especially useful for catching bugs and ensuring that the right
              data types and shapes of props are being passed to a component. In
              this example, we import PropTypes from the prop-types package and
              define our MyComponent function. We then define the PropTypes for
              the title and description props using PropTypes.string. We also
              specify that the title prop is required by using the .isRequired
              method. If a prop is not passed to the component or is of the
              wrong type, React will log a warning in the console. This can help
              you catch bugs early in the development process.
              <br></br> Here are some
              other PropTypes types you can use:<br></br>PropTypes.string<br></br>
              PropTypes.number <br></br>PropTypes.boolean <br></br>PropTypes.array
              <br></br>PropTypes.object <br></br>PropTypes.func <br></br>PropTypes. .{" "}
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
              Tell us the difference between nodejs and express js.
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Node.js and Express.js are both important tools for building web
              applications, but they have different roles and purposes. Here are
              the main differences between Node.js and Express.js. <br></br>
              Node.js: -<br></br>
              Node.js is a runtime environment for executing JavaScript code
              outside of a web browser. - Node.js is built on the V8 JavaScript
              engine from Google and uses an event-driven, non-blocking I/O
              model that makes it well-suited for building scalable,
              high-performance applications. - Node.js provides a set of
              built-in modules that can be used to perform a variety of tasks,
              such as reading and writing files, making HTTP requests, and
              creating and managing child processes.
              <br></br>
              Express.js:<br></br>- Express.js is a web application framework
              built on top of Node.js that provides a set of tools for building
              web applications and APIs. - Express.js makes it easy to handle
              HTTP requests and responses, manage middleware, and create and
              route to different endpoints. - Express.js provides a set of
              built-in middleware functions that can be used to perform tasks
              such as logging, parsing request bodies, and handling CORS
              requests. - Express.js also has a large ecosystem of third-party
              middleware and plugins that can be used to extend its
              functionality. In summary, Node.js provides a powerful runtime
              environment for executing JavaScript code, while Express.js is a
              framework built on top of Node.js that provides a set of tools for
              building web applications and APIs. While it's possible to build a
              web application without using a framework like Express.js, it can
              greatly simplify the development process and provide a more
              structured approach to building web applications.
            </p>
          </details>

          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
              What is a custom hook, and why will you create a custom hook?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              In React, a custom hook is a JavaScript function that uses React
              hooks and can be reused across different components to provide
              some specific functionality. Custom hooks allow developers to
              extract reusable code from components and encapsulate it into a
              separate function that can be easily imported and reused in other
              components. This can lead to more efficient and organized code, as
              well as improved code reusability. There are many reasons why you
              might want to create a custom hook. Here are a few examples:
              Reusing code: If you find yourself repeating the same code pattern
              in multiple components, it may be a good idea to extract that code
              into a custom hook. This can help you reduce duplication and make
              your code more modular and reusable. Abstracting complex logic: If
              you have complex logic that you need to perform in multiple
              components, a custom hook can help you encapsulate that logic into
              a single function that can be easily reused. Separating concerns:
              If you have code that deals with side-effects, such as fetching
              data from an API or managing state, you can use a custom hook to
              separate that logic from the presentation layer of your
              components. This can make your code easier to reason about and
              test.
            </p>
          </details>
        </div>
      </div>
    </section>

    //
  );
};

export default Blog;
