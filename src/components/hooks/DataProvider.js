import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const DataContext = React.createContext({});
export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [activities, setActivities] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        tours,
        setTours,
        activities,
        setActivities,
        restaurants,
        setRestaurants,
        hotels,
        setHotels,
        currentItems,
        setCurrentItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
