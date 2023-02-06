import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  Card,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import confirm from '@/shared/components/confirm/';
import { actionArchive, actionDelete } from "@/lib/graphql/mutations/listings";
  /* Confirm */
  const handleDelete = () => {
    confirm({
      title: 'Sei sicuro di voler eliminare l\'annuncio?',
      message: 'auth.logout_cta',
      cancelText: 'Annulla',
      confirmText: 'Elimina',
      confirmColor: 'danger',
    }).then((confirmed) => {
      if (confirmed) {
        dispatch(logout());
        //history.push('/');
        //window.location.href="/";
      }
    });
  };

    /* Confirm */
    const handleArchive= () => {
      confirm({
        title: 'Sei sicuro di voler eliminare l\'annuncio?',
        message: 'auth.logout_cta',
        cancelText: 'Annulla',
        confirmText: 'Elimina',
        confirmColor: 'danger',
      }).then((confirmed) => {
        if (confirmed) {
          dispatch(logout());
          //history.push('/');
          //window.location.href="/";
        }
      });
    };
  


const ListingCard = ({ data }) => {
  return (
    <Card className="card border p-2">
      <div className="row g-4">
        {/* Card img */}
        <div className="col-md-3 col-lg-2">
          <div className="img-responsive">
            <figure className="img-wrapper">
              <img src="/img/placeholder.svg" />
            </figure>
          </div>
        </div>
        {/* Card body */}
        <div className="col-md-9 col-lg-10">
          <div className="card-body position-relative d-flex flex-column p-0 h-100">
            {/* Title */}
            <h5 className="card-title mb-0 me-5">
              <Link
                href={`/listings/${data.id}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {data.title}
              </Link>
            </h5>
            <small>
              <i className="bi bi-geo-alt me-2" />
              {data.location?.address}
            </small>
            {/* Price and Button */}
            <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
              {/* Button */}
              <div className="d-flex align-items-center">
                <h5 className="fw-bold mb-0 me-1">
                  {data.pricing ? data.pricing : "Trattativa riservata"}
                </h5>
              </div>
              {/* Price */}
              <div className="hstack gap-2 mt-3 mt-sm-0">
                <UncontrolledDropdown>
                  <DropdownToggle caret size="sm" outline>
                    Azioni
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem><Link href={`/account/listings/edit/${data.id}`}>Modifica</Link></DropdownItem>
                    <DropdownItem onClick={handleArchive}>Archivia</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={handleDelete}>Elimina</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListingCard;
