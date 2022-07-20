import { createSelector } from "reselect";

const selectCheckoutReducer = (state) => state.checkout;

export const selectCheckoutAddress = createSelector(
    [selectCheckoutReducer],
    (checkoutSlice) => checkoutSlice.address 
)

export const selectRecentItems = createSelector(
    [selectCheckoutReducer],
    (checkoutSlice) => checkoutSlice.checkoutItems
)

export const selectCheckoutIsLoading = createSelector(
    [selectCheckoutReducer],
    (checkoutSlice) => checkoutSlice.isLoading
)

export const selectCheckoutError = createSelector(
    [selectCheckoutReducer],
    (checkoutSlice) => checkoutSlice.error
)