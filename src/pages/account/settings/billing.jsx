import React, { useState } from 'react';
import Link from 'next/link';
import {  Button } from '@chakra-ui/react';
import { IconMessageCircle, IconBookmark } from '@tabler/icons-react';
import SideNav from '@/shared/settings/side-nav';
import bills from "@/data/billing.json";
import { IconReceipt, IconCloudDownload } from '@tabler/icons-react';

const Billing = () => {
  const [loading, setLoading] = useState(false);
  const [archived, setArchived] = useState(false);
  

  const setTabs = () =>{
    setArchived(!archived);
    setLoading(true);
  }

  return (
    <div className="page">
    <div className="page-content">
    <div className="container">
    <div className="row g-5">
    <div className="col-md-4">
        <div className="position-sticky" style={{ top: "2rem" }}>
          <div className="p-4">
          <SideNav/>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <h1 className="section-title">Fatturazione</h1>
        <div>
          {Array.isArray(bills) ? (
          <table className="table">
                <tbody>
                  {bills.map((entry) => (
                    <tr key={entry.id}>
                    <th scope="row">
          <Link href="#">{`#${entry.id}`}</Link>
                    </th>
                    <td>
                      <span className="d-block">{entry.message}</span>
                    </td> 
                    <td>
                      <span className="d-block">{`Data ${entry?.dateCreated}`}</span>
                    </td> 

                    <td className="text-end">
                    <Button variant="outline" leftIcon={<IconCloudDownload/>}> Scarica fattura
      </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                
              </table>
               ) : (
                <p>Nessun dato</p>
              )}
    
    </div>
      </div>
    
    </div>
    
          </div>
          </div>
      </div>
  );
};

export default Billing;
