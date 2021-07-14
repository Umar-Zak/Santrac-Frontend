import React from 'react';

const SortContainer = ({handleSort,show=false}) => {
    return (
        <div className="sort-container">
                <select className="sort" name="" id="">
                    <option value="">Default sorting</option>
                    <option value="">HardWare</option>
                    <option value="">Furniture</option>
                    <option value="">Finishing</option>
                </select>
               {show && <p className="sort-tagline">Showing all 20 results</p>}
            </div>
     );
}
 
export default SortContainer;