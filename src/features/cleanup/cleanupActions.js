import { CREATE_CLEANUP, UPDATE_CLEANUP, DELETE_CLEANUP } from "./cleanupConstants";

export const createCleanup = (cleanup) => {
    return {
        type: CREATE_CLEANUP,
        payload: {
            cleanup
        }
    }
}

export const updateCleanup = (cleanup) => {
    return {
        type: UPDATE_CLEANUP,
        payload: {
            cleanup
        }
    }
}

export const deleteCleanup = (cleanupId) => {
    return {
        type: DELETE_CLEANUP,
        payload: {
            cleanupId
        }
    }
}