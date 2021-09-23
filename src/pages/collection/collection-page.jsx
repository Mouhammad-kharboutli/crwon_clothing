import React from "react";
import "./collection.scss";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  console.log(
    "🚀 ~ file: collection-page.jsx ~ line 9 ~ CollectionPage ~ collection",
    collection
  );
  //   console.log(
  //     "🚀 ~ file: collection-page.jsx ~ line 5 ~ categoryID ~ ",
  //     match.params.collectionID
  //   );
  const {title, items} = collection;

  return (
    <div className="collection-page">
      <h2 className="title"> {title} </h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
