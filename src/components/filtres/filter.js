import React from 'react';
import PropTypes from 'prop-types';

filter.propTypes = {
    filterName: PropTypes.string.isRequired,
    parameters: PropTypes.array.isRequired,
    filterType: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
};

function filter(props) {
    const { filterName, filterType, parameters, changeFilter } = props;

    let id = 0;

    const handleChangeFilter = (e)=> {
        const checked = e.target.checked;
        const filter = e.target.value;
        changeFilter(filterType, checked, filter);
    };

    return(
        <div className="filter">
            <p>{filterName}</p>
            {parameters.map((i)=>{
                return(
                    <div key={id++}>
                        <input className={filterType} type="checkbox" value={i} onChange={handleChangeFilter}/>
                        <label>{i}</label>
                    </div>
                )
            })}
        </div>
    )
}

export default filter;