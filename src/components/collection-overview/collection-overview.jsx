import React from "react";
import "./collection-overview.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../../components/collection-preview/collection-preview";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(( item ) => (
        <CollectionPreview key={item.id} item={item} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
