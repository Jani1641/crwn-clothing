
export const selectCurrentUser = (state) => state.user.currentUser;

export const selectIsProfileOpen = (state) => state.user.isProfileOpen;

export const selectUserEmail = (state) => state.user.currentUser.email;

export const selectDisplayName = (state) => state.user.displayName;