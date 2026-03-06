import React from 'react'

interface MapProps {
    className?: string;
    MapOverlay?: boolean;
}

const Map: React.FC<MapProps> = ({className, MapOverlay}) => {
  return (
    <div>
        <div className="mapouter relative">
            {
              MapOverlay &&     <div className="bg-gd-white-2 absolute inset-0 pointer-events-none"></div>
            }
            <div className="gmap_canvas">
                <iframe id="gmap_canvas" className={`w-full ${className}`}
                    src="https://maps.google.com/maps?q=mirpur%2012&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Map