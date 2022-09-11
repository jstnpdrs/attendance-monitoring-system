import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        name: 'justine'
    },
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        modalShow: (state) => {
            state.value.modal.visible = true
        },
        modalClose: (state) => {
            state.value.modal.visible = false
        },
        modalToggle: (state) => {
            state.value.modal.visible = !state.value.modal.visible
        },
        changeName: (state, action) => {
            state.value.name = action.payload
        },
        updateChildren: (state, action) => {
            state.value.modal.children = action.payload
        },
    },
})

export const { modalShow, modalClose, modalToggle, changeName, updateChildren } = dataSlice.actions

export default dataSlice.reducer