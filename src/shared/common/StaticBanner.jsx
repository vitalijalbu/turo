import React from 'react';


const StaticBanner = () => {

  const converted = {
    backgroundImage: "url(https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80)"
  }

  
  return (
<div className="sc-superhero" style={converted}>
<div className="sc-superhero__imgs" />
<div className="container">
<div className="sc-superhero__content">
  <h2 className="sc-superhero__title--branded sc-font-l sc-margin-top-m">
    Fahrzeugbewertung
  </h2>
  <h3 className="sc-font-xl sc-font-bold">Bringen Sie Ihr Auto groß raus.</h3>
  <h4 className="sc-font-xl">Mit dem richtigen Preis.</h4>
  <p className="s-font-l sc-margin-top-m">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
    blandit, neque eu gravida convallis, libero lorem elementum enim, non
    sodales arcu erat non tortor.
  </p>
</div>
</div>
</div>

  );
}
export default StaticBanner;