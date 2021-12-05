import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found d-flex flex-row justify-content-center">
      <h1>OOPS......</h1>
      <h2>That page Cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
