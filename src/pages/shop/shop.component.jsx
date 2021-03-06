import React from "react";

import {Route} from "react-router-dom"
import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection/collection-page";



const ShopPage = ({match}) => {
  // console.log(match);
  return (
    <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionID`} component={CollectionPage} /> 
    </div>
  );
};


export default ShopPage;
