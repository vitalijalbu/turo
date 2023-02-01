import { Page, Navbar, Block } from "framework7-react";
import Link from "framework7-react";
export default function About() {
  return (
    <Page>
      <Navbar title="About" href="/" />

      <Block strong>
        <p>This is "listings" page.</p>
        <p><Link back>Go back</Link></p>
        
      </Block>
    </Page>
  );
}
