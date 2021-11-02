import Head from 'next/head';

const HeadTag = () => {
  return (
    <Head>
      <title key="title">Gupt</title>
      <lin rel="icon" href="/assests/logo_mark.svg" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
    </Head>
  );
};

export default HeadTag;
