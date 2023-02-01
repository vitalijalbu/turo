import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Card,
  Tabs,
  Tab,
  CardHeader,
  CardContent,
  CardFooter,
  Icon,
  ListInput,
  Button,
  Segmented,
} from "framework7-react";
import ListingsType from "@/shared/sections/listings-type";
import SpotlightListings from "@/shared/sections/listings-spotlight";
import Features from "@/components/Common/Features";
import StaticBanner from "@/components/Common/HeroBanner";
import Faqs from "@/components/Common/Faqs";
import SearchForm from "@/shared/components/search-form";
import Services from "@/components/Common/Services";


const Home = () => {
  console.log(import.meta.env.VITE_API_BASE_URL);
  return (
    <Page name="home">
      <section
        className="padding-vertical-xl search-hero"
        id="search-home_hero"
      >
        <div className="hero-overlay">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="hero"
          />
        </div>
        <div className="container">
          <div className="main-search__tabs">
              <Card>
              <CardHeader className="separator">
              <BlockTitle large>
            La piattaforma immobiliare per ristoranti e hotel.
          </BlockTitle>
              </CardHeader>
                  <SearchForm />
              </Card>
      </div>
      </div>
      </section>
      <ListingsType/>

      <SpotlightListings />

      <StaticBanner />
      <Faqs />
    </Page>
  )
}
export default Home;
