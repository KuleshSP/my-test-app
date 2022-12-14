export const actionTypes = {
  MOUNT_APP: 'MOUNT_APP' as const,
  UNMOUNT_APP: 'UNMOUNT_APP' as const,
};

export const actions = {
  mountApp: () => ({
    type: actionTypes.MOUNT_APP,
  }),
  unmountApp: () => ({
    type: actionTypes.UNMOUNT_APP,
  }),
};
