/* eslint-disable no-unused-vars */
import React from "react";
import ReactToPdf from "react-to-pdf";
import { AiOutlineDownload } from "react-icons/ai";

const Blog = () => {
  const ref = React.createRef();
  return (
    <>
      <ReactToPdf y={25} scale={0.4} targetRef={ref} filename="recipe-hub.pdf">
        {({ toPdf }) => (
          <button
            className="fixed bottom-5 right-5 bg-neutral text-secondary text-2xl py-2 px-2 rounded-full"
            onClick={toPdf}
          >
            <AiOutlineDownload></AiOutlineDownload>
          </button>
        )}
      </ReactToPdf>

      <section className="mt-20" ref={ref}>
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
                In the context of software development, uncontrolled and
                controlled components refer to different approaches for building
                user interfaces. Uncontrolled components are typically used for
                building simple, stateless UI components. They are created using
                plain HTML and JavaScript, and do not rely on any external state
                management or data handling libraries. This means that any user
                input received by the component is handled directly by the
                component, without any external interference. The component has
                full control over its own state and behavior, and any updates to
                the component are made directly by the user. On the other hand,
                controlled components are typically used for building more
                complex UI components that require state management and data
                handling. Controlled components rely on external libraries, such
                as React or Angular, to manage their state and handle user
                input. In a controlled component, the component's state is
                managed by an external source, such as a state management
                library or a parent component. Any user input received by the
                component is communicated back to the external source, which
                then updates the component's state and triggers any necessary
                updates to the UI.{" "}
              </p>
            </details>

            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
                How to validate React props using PropTypes
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                React provides a library called PropTypes that allows you to
                define and validate the type of props that your components
                receive. Define each prop as a key-value pair in the propTypes
                object, where the key is the name of the prop, and the value is
                a PropTypes validator. You can use various PropTypes validators
                such as PropTypes.string, PropTypes.number, PropTypes.bool,
                PropTypes.object, PropTypes.array, PropTypes.func,
                PropTypes.symbol, etc. You can also use more complex validators
                such as PropTypes.shape to define an object with specific
                properties, PropTypes.arrayOf to define an array of a specific
                type of prop, and PropTypes.oneOf or PropTypes.oneOfType to
                define props that can have a specific set of values or a
                specific set of types. If a required prop is not passed, or if
                the passed prop does not match the expected type, a warning will
                be logged in the console.
              </p>
            </details>

            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
                Tell us the difference between nodejs and express js.
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
                Node.js and Express.js are two distinct but related technologies
                used for building web applications. Node.js is a JavaScript
                runtime environment built on the Chrome V8 JavaScript engine. It
                allows developers to run JavaScript code outside of a browser
                environment, making it possible to build server-side
                applications with JavaScript. Node.js provides a set of built-in
                modules and libraries for handling I/O operations, networking,
                file system access, and more. Express.js, on the other hand, is
                a web application framework built on top of Node.js. It provides
                a set of abstractions and helper functions that make it easier
                to build web applications with Node.js. Express.js provides
                features such as routing, middleware, templating engines, and
                more, that simplify the process of building web applications. In
                short, Node.js is a runtime environment for executing JavaScript
                code outside of the browser, while Express.js is a framework
                built on top of Node.js that provides additional features and
                abstractions for building web applications.
              </p>
            </details>

            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">
                What is a custom hook, and why will you create a custom hook?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">................ </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
