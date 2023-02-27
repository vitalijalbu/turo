import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react"


const Navigation = [
  {
    id: "general",
    title: "Generale",
    links: [
      {
        label: "Home",
        url: "/",
      },       
      {
        label: "Resthotels",
        url: "/about",
      }, 
      {
        label: "Ricerca",
        url: "/search",
      },
      {
        label: "Agenzie",
        url: "/offices",
      },
      {
        label: "Piani e prezzi",
        url: "/pricing",
      },
      {
        label: "Cosa stai cercando?",
        url: "/requests",
      },
    ],
  },
  {
    id: "utils",
    title: "Link utili",
    links: [
      {
        exact: true,
        label: "Il mio account",
        url: "/account",
      },
      {
        exact: true,
        label: "Piano",
        url: "/settings/billing",
      },
      {
        exact: false,
        label: "Impostazioni",
        url: "/settings",
      },
      {
        exact: false,
        label: "Pubblicità",
        url: "/contacts",
      },
    ],
  },
  {
    id: "help",
    title: "Aiuto",
    links: [
      {
        label: "Assistenza",
        url: "/help",
      },
      {
        label: "Feedback",
        url: "mailto:partner@ceebo.com?subject=Feedback Ceebo Partner",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
        <div className="col-3 col-xs-6">
            <Box>
            <img src="/img/logo.svg" className="site-logo"/>
            </Box>
            <Text fontSize={"md"}>
            La piattaforma immobiliare per ristoranti e hotel.
            </Text>
          </div>
          {Navigation.map((nav, i) => (
              <div className="col-3 col-xs-6">
              <Text fontSize="md">{nav.title}</Text>
              <ul className=""
                id={nav.id}
                key={i}
              >
                {nav.links.map((link, l) => (
                  <li key={l} className="d-block w-100">
                    <Link
                      href={link.url ?? '#'}
                      key={l}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
