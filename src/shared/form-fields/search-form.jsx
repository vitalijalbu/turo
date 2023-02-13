import { useState } from "react"
import { Card, CardBody, Button, ButtonDropdownProps, ButtonGroup } from "reactstrap"
import AddressField from "./address-field";
import TypeDropdown from "./type-dropdown";
const SearchForm = () => { 
  const [rSelected, setRSelected] = useState(null);

  return (
    <Card>
    <CardBody>
      <form className="row align-items-center">
        <div className="col-xl-10">
          <div className="row g-4">
            {/* Pickup */}
            <div className="col-md-6 col-xl-4">
              <div className="form-size-lg">
                <AddressField/>
              </div>
            </div>
            {/* Drop */}
            <div className="col-md-6 col-xl-4">
              <div className="form-size-lg">
                <label className="form-label">Categoria</label>
                <TypeDropdown/>
              </div>
            </div>
            {/* Time */}
            <div className="col-md-6 col-xl-2">
            <label className="form-label">Tipologia</label>
             <ButtonGroup>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Affitto
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Vendita
        </Button>
      </ButtonGroup>
            </div>
          </div>
        </div>
        <div className="col-xl-2">
          <Button type="submit" color="primary" block>
            Cerca
          </Button>
        </div>
      </form>
  </CardBody>
  </Card>
  )
}
export default SearchForm;