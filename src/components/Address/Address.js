// Address.js

import React from 'react';
import './Address.css';

const Address = ({ data }) => {
  return (
    <div className="address-container">
        <div className="column">
            <label>{data?.company} is proud to be HUB and SMVOBE certified company and one of the leaders in oyber security.</label>
        </div>
        <div className="column">
            <div>
            <label>Offensive Logic LLC</label>
            <div>17305 I-35 Suite 103, Schertz, TX 78154.</div>
            </div>
        </div>
        <div className="column">
            <div>
            <label>Phone</label>
            <div>1-800-210-2578</div>
            </div>
        </div>
        <div className="column">
            <div>
            <label>Email</label>
            <div>{data?.site_email}</div>
            </div>
        </div>
    </div>
  );
};

export default Address;
