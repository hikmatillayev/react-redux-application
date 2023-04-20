import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
    error: null,
    articleDetail: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart: state => {
            state.isLoading = true
        },
        getArticleSucces: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleFailure: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        getArticleDetailStart: state => {
            state.isLoading = true
        },
        getArticleDetailSuccess: (state, action) => {
            state.isLoading = false
            state.articleDetail = action.payload
        },
        getArticleDetailFailure: state => {
            state.isLoading = false
        },
    },
})

export const { getArticleSucces, getArticlesStart, getArticleFailure, getArticleDetailStart, getArticleDetailSuccess, getArticleDetailFailure } = articleSlice.actions
export default articleSlice.reducer