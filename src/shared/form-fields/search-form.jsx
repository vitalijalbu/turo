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
          <div className="row">
            {/* Pickup */}
            <div className="col-md-6 col-xl-6">
              <div className="form-size-lg">
                <AddressField/>
              </div>
            </div>
            {/* Drop */}
            <div className="col-md-3 col-xl-3">
              <div className="form-size-lg">
                <label className="form-label">Categoria</label>
                <TypeDropdown/>
              </div>
            </div>
            {/* Time */}
            <div className="col-md-3 col-xl-3">
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
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          Asta
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