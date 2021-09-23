import { createSelector } from "reselect";
import memoize from "lodash.memoize";

// const COLLECTIO_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((CollecionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[CollecionUrlParam]
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)