import ChannelSchema from "../models/Channel"
import PlaylistSchema from "../models/Playlist"
import VideoByChannelSchema from "../models/VideoByChannel"

const getDataChannelByIdChannelNotUsed = async () => {
    try {
        let result = await ChannelSchema.find({ used_get_channel: false }).select({
            id_channel: 1,
        })
        return result
    } catch (error) {
        throw error
    }
}
const getDataPlaylistByIdChannelNotUsed = async () => {
    try {
        let result = await ChannelSchema.find({ used_get_playlist: false }).select({
            id_channel: 1,
        })
        return result
    } catch (error) {
        throw error
    }
}
const getDataAllVideoByIdChannelNotUsed = async () => {
    try {
        let result = await ChannelSchema.find({ used_get_all_video: false }).select({
            id_channel: 1,
        })
        return result
    } catch (error) {
        throw error
    }
}

const getDataPlaylistByIdPlaylistNotUsed = async () => {
    try {
        let result = await PlaylistSchema.find({ used_get_item_playlist: false }).select({
            id_channel: 1,
            id_playlist: 1
        })
        return result
    } catch (error) {
        throw error
    }
}

const getDataDetailVideoListChannelNotUsed = async () => {
    try {
        let result = await VideoByChannelSchema.find({ used_get_full_data: false }).select({
            id_video: 1
        })
        return result
    } catch (error) {
        throw error
    }
}

const getDataVideoRelatedNotUsed = async () => {
    try {
        let result = await VideoByChannelSchema.find({ video_suggestion: [] }).select({
            id_video: 1
        })
        return result
    } catch (error) {
        throw error
    }
}

const getDataCommentVideoListChannelNotUsed = async () => {
    try {
        let result = await VideoByChannelSchema.find({ used_get_comment: false }).select({
            id_video: 1
        })
        return result
    } catch (error) {
        throw error
    }
}
module.exports = {
    getDataChannelByIdChannelNotUsed,
    getDataAllVideoByIdChannelNotUsed,
    getDataPlaylistByIdChannelNotUsed,
    getDataPlaylistByIdPlaylistNotUsed,
    getDataDetailVideoListChannelNotUsed,
    getDataVideoRelatedNotUsed,
    getDataCommentVideoListChannelNotUsed
}