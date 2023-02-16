import React, { useState, useEffect } from "react";
import Link from "next/link";
import data from "@/data/entry.status.json";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input, Button  } from "reactstrap";
import { viewRequest } from "@/lib/graphql/queries/requests";

const PopupStatus = ({ opened, toggle, id }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Modal
    centered
    fade={false}
    toggle={toggle}
    isOpen={opened}
  >
    <ModalHeader toggle={toggle}>{`Seleziona stato #${id}`}</ModalHeader>
      <ModalBody>
      <h6 className="text-muted">Imposta lo stato dell'annuncio</h6>
      <ul className="list-group list-group-flush">
        {data.map((item, i) => (
          <li className="list-group-item" key={i}>
          <input
            className="form-check-input me-1"
            type="radio"
            name="status"
            defaultValue=""
            id="firstRadio"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="status">
            {item.label}
          </label>
          <small className="text-muted d-block">{item.text}</small>
        </li>
          ))}
        </ul>
    </ModalBody>
    <ModalFooter>
      <Button color="light" onClick={toggle}>Annulla</Button>
      <Button color="primary">Salva</Button>
    </ModalFooter>
  </Modal>
  )
}

export default PopupStatus;
