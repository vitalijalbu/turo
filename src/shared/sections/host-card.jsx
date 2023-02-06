import React, { useState, useRef } from "react";
import { Button, Text, Avatar, Paper } from "@mantine/core";
import Link from "next/link";

const HostCard = ({ data }) => {
  return (
  <div className="card bg-transparent text-center p-1 h-100">
    {/* Image */}
    <img
      src={data.photo?.url ?? '/img/placeholder.svg'}
      className="rounded-circle"
      alt=""
    />
    <div className="card-body p-0 pt-3">
      <h5 className="card-title">
      <Link href={`/hosts/${data.id}`} rel="noopener noreferrer" target="_blank">
        {data.fullName}
        </Link>
      </h5>
    </div>
  </div>
  )
}

export default HostCard;
