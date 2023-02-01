import { Block, Navbar, Page } from "framework7-react";
import Link from "framework7-react";

export default function BlogPost(props) {
  const { postId, f7route } = props;
  return (
    <Page>
      <Navbar title="Post" href="/" />
      <Block strong>
      <Link href="/">
          Home
        </Link>
        <p>This is a dynamic route loaded from <code>/blog/[postId].js</code> page component.</p>
        <p>Route URL: <b>{f7route.url}</b></p>
        <p>Post ID: <b>{postId}</b></p>
      </Block>
    </Page>
  )
}