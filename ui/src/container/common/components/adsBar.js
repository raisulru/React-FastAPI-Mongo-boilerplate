import React from 'react';

export const AdsBar = (name) => (
    <div className="ads-area-common">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="py-4">{name.name}</h3>
                </div>
            </div>
        </div>
    </div>
);