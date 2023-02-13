import { gql } from 'graphql-request';
import graphQLClient from '../client';


export const getSpotlightListings = async () => {
  // Query here
  const QUERY = gql`
  {
    entries(orderBy: "postDate", section: "listings", limit: 8) {
      id
      title
      postDate
      slug
      status
      author {
        id
        fullName
      }
      ... on listings_default_Entry {
        id
        badge
        total_floors
        media_photos{
          url
        }
        location{
          parts{
            city
          }
        }
        category{
          title
        }
        property_status(label: true)
        yearConstruction
        pricing
      }
    }
  }
  `
  const data = await graphQLClient.request(QUERY);
  return data;

}

export const getListing = async (id) => {
  // Get all blogs
const QUERY = gql`
query {
  entry(section: "listings", id:"${id}") {
        id
        title
        postDate @formatDateTime(format: "d M Y")
        ... on listings_default_Entry {
          slug
          status
          author {
            id
            fullName
          }
          ... on listings_default_Entry {
            id
            badge
            body
            total_floors
            property_status(label: true)
            pricing
            listing_status
            refNumber
            tipoDiProprieta
            yearRedevelopment
            yearConstruction
            numeroFabbricati
            esposizioneEdificio
            superficieTotale
            superficieFabbricati
            energyRating
            valore
            cadastralCategories
            listingRatings
            totaleVani
            totalRooms
            totalBathrooms
            totaleBalconi
            totaleTerrazzi
            piano
            parking
            postiParcheggio
            parcheggioScoperto
            hotelHaRistorante
            parcheggioCoperto
            salaDaPranzo
            nPostiASedereRistorante
            durataContrattoGestione
            scadenzaContrattoDiGetsione
            annualRevenue
            heating
            heatingType
            heatingSystem
            energySource
            amenities(label: true)
            category{
              title
            }
            media_photos{
              url
            }
            location{
              address
              lng 
              lat
              parts{
                city
              }
            }
          }
        }
      }
        related_listings: entries(section: "listings", limit: 8 ) {
          id
          title
          postDate @formatDateTime(format: "d M Y")
          slug
          status
          author {
            id
            fullName
          }
          ... on listings_default_Entry {
            badge
            total_floors
            media_photos(limit:4){
              url
            }
            property_status(label: true)
            pricing
          }
        }
  
    }
`

  const data = await graphQLClient.request(QUERY);
  return data;

}

