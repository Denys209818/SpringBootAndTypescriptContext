import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/Default/Layouts/DefaultLayout';
import { CarModel } from './interfaces/AxiosInterfaces';
import { CarData } from './interfaces/RouterIntefaces';
import DefaultRoutes from './routes/DefaultRoutes';
import axiosService from './services/axiosService';

export const CarContext = React.createContext<CarData>({
  cars: [],
  setCars: () => {}
});

const App = () => {
  
  const [cars, setCars] = useState<Array<CarModel>>([]);

  return (

    <>
    <Suspense fallback={<div>Loading...</div>}>
    <CarContext.Provider value={{
      cars: cars,
      setCars: setCars
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            {DefaultRoutes.map((element, index) => 
            <Route key={index} path={element.path} element={<element.element/>}  />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
      
      
    </CarContext.Provider>
    </Suspense>
    </>
  );
}

export default App;
