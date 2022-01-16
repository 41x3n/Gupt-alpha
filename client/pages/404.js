import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found d-flex flex-column align-items-center">
      <h1 style={{ color: "red", maginTop: "50%" }}>OOPS......</h1>
      <h3>That page Cannot be found</h3>
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
